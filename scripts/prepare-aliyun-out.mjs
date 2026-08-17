import fs from "fs"
import path from "path"
import { execSync } from "child_process"

const outDir = "out"
const chunksDir = path.join(outDir, "_next", "static", "chunks")
const stylesDir = path.join(outDir, "styles")

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (entry.name.endsWith(".html")) files.push(full)
  }
  return files
}

function countFiles(dir) {
  let count = 0
  if (!fs.existsSync(dir)) return 0
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) count += countFiles(full)
    else count++
  }
  return count
}

// 1. 移除 game
const outGame = path.join(outDir, "game")
if (fs.existsSync(outGame)) {
  fs.rmSync(outGame, { recursive: true, force: true })
}

// 2. htaccess 可见副本
const htaccess = path.join(outDir, ".htaccess")
if (fs.existsSync(htaccess)) {
  fs.copyFileSync(htaccess, path.join(outDir, "UPLOAD_RENAME_TO_dot_htaccess.txt"))
}

// 3. 样式复制到固定路径（不依赖 _next 哈希文件名）
const cssFiles = fs.existsSync(chunksDir)
  ? fs.readdirSync(chunksDir).filter((f) => f.endsWith(".css"))
  : []

if (cssFiles.length === 1) {
  const cssSource = path.join(chunksDir, cssFiles[0])
  fs.mkdirSync(stylesDir, { recursive: true })
  fs.copyFileSync(cssSource, path.join(stylesDir, "site.css"))
  fs.copyFileSync(cssSource, path.join(outDir, "site.css"))

  const styleLinks =
    '<link rel="stylesheet" href="/styles/site.css" data-site-style="true"/>' +
    '<link rel="stylesheet" href="/site.css" data-site-style="true"/>'

  for (const file of walk(outDir)) {
    let html = fs.readFileSync(file, "utf8")
    if (!html.includes('data-site-style="true"')) {
      html = html.replace("<head>", `<head>${styleLinks}`)
      fs.writeFileSync(file, html)
    }
  }
  console.log(`Styles -> out/styles/site.css + out/site.css (from ${cssFiles[0]})`)
}

// 4. 上传路径自检文件
const testContent = `上传路径正确！
如果你能在浏览器打开 https://www.tospike.com/UPLOAD_TEST.txt 看到本文件，说明上传到了网站根目录（htdocs）。
构建时间：${new Date().toLocaleString("zh-CN")}
`
fs.writeFileSync(path.join(outDir, "UPLOAD_TEST.txt"), testContent, "utf8")

// 5. 中文上传说明
const nextCount = countFiles(path.join(outDir, "_next"))
const guide = `========================================
  阿里云上传说明（请仔细阅读）
========================================

【重要】网站根目录 = htdocs 文件夹
FileZilla 登录后，右侧应能看到 zh、en 等文件夹。
所有文件必须上传到这一层，不要传到子文件夹里。

【推荐方式：上传 zip 解压】
1. 上传项目根目录的 deploy-tospike.zip 到 htdocs
2. 在阿里云控制台「文件管理」里解压到 htdocs 根目录
3. 浏览器打开 https://www.tospike.com/UPLOAD_TEST.txt 确认路径

【FileZilla 方式】
必须上传整个 out 文件夹【里面的内容】到 htdocs：
  _next/          （${nextCount} 个文件，整夹上传，最重要！）
  styles/         （含 site.css）
  site.css
  zh/  en/
  UPLOAD_TEST.txt
  其余文件...

【上传后验证（全部应为 200，不是 404）】
  https://www.tospike.com/UPLOAD_TEST.txt
  https://www.tospike.com/styles/site.css
  https://www.tospike.com/zh/

【常见错误】
× 只删了 _next 没重新上传  →  UI 全乱
× 上传到错误目录           →  文件 404
× 只上传了 zh 没上传 _next →  无样式

构建时间：${new Date().toLocaleString("zh-CN")}
`
fs.writeFileSync(path.join(outDir, "上传说明.txt"), guide, "utf8")

// 6. 打包 zip（方便阿里云控制台解压）
try {
  const zipPath = path.join("deploy-tospike.zip")
  if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath)
  execSync(
    `powershell -NoProfile -Command "Compress-Archive -Path '${outDir}\\*' -DestinationPath '${zipPath}' -Force"`,
    { stdio: "inherit" }
  )
  const sizeMB = (fs.statSync(zipPath).size / 1024 / 1024).toFixed(2)
  console.log(`Created deploy-tospike.zip (${sizeMB} MB)`)
} catch (e) {
  console.warn("Could not create deploy-tospike.zip:", e.message)
}

console.log("Done. Upload deploy-tospike.zip OR entire out/ folder to htdocs.")
