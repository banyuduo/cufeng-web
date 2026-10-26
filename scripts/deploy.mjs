/**
 * 一键部署任务流：构建 -> GitHub -> 阿里云 FTP
 * 用法：
 *   npm run deploy                 （提交信息默认 "update website"）
 *   npm run deploy -- "更新产品页"  （自定义提交信息）
 *   npm run deploy -- --check       （仅检查 FTP 连接与凭据，不做构建/上传）
 *
 * 前置要求：项目根目录存在 .deploy-secrets.json（FTP 凭据，已 gitignore，不会提交到 GitHub）
 */
import { execSync } from "child_process"
import fs from "fs"
import path from "path"

const root = path.resolve(import.meta.dirname, "..")
const secretsPath = path.join(root, ".deploy-secrets.json")
const args = process.argv.slice(2)

if (!fs.existsSync(secretsPath)) {
  console.error("[错误] 缺少 .deploy-secrets.json，请先创建并填写 FTP 凭据：")
  console.error('  {"ftpHost":"主机","ftpPort":21,"ftpUser":"用户名","ftpPass":"密码"}')
  process.exit(1)
}

if (args.includes("--check")) {
  console.log("[检查] FTP 连接 ...")
  execSync("python scripts/ftp-upload.py --check", { cwd: root, stdio: "inherit" })
  process.exit(0)
}

const message = args[0] || "update website"

console.log("[1/4] 构建静态站点（next build + prepare）...")
execSync("npm run build", { cwd: root, stdio: "inherit" })

console.log("[2/4] 同步 GitHub ...")
execSync("git add -A", { cwd: root, stdio: "inherit" })
try {
  execSync(`git commit -m "${String(message).replace(/"/g, '\\"')}"`, { cwd: root, stdio: "inherit" })
  console.log("  已提交")
} catch {
  console.log("  无改动可提交，跳过 commit")
}
execSync("git push origin master", { cwd: root, stdio: "inherit" })
console.log("  已推送到 GitHub")

console.log("[3/4] FTP 上传到阿里云 /htdocs/ ...")
execSync("python scripts/ftp-upload.py", { cwd: root, stdio: "inherit" })

console.log("[4/4] 部署完成")
console.log("  请验证：")
console.log("  https://www.tospike.com/UPLOAD_TEST.txt  （应显示本次构建时间）")
console.log("  https://www.tospike.com/zh/                （应正常渲染）")
console.log("  https://www.tospike.com/                   （应立即跳转 /zh/）")
