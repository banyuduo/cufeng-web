import fs from "fs"
import path from "path"

const outDir = "out"
const chunksDir = path.join(outDir, "_next", "static", "chunks")

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (entry.name.endsWith(".html")) files.push(full)
  }
  return files
}

function isInternalRoute(href) {
  if (!href.startsWith("/") || href.startsWith("//")) return false
  if (/^\/(_next|docs|images)\//.test(href)) return false
  if (/\.[a-zA-Z0-9]+([?#]|$)/.test(href)) return false
  return true
}

function needsTrailingSlash(href) {
  const base = href.split("#")[0].split("?")[0]
  return base !== "/" && !base.endsWith("/")
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
  console.log("Removed out/game")
}

// 2. 复制 .htaccess 为可见文件名，方便 FileZilla 上传后改名
const htaccess = path.join(outDir, ".htaccess")
const htaccessBackup = path.join(outDir, "UPLOAD_RENAME_TO_dot_htaccess.txt")
if (fs.existsSync(htaccess)) {
  fs.copyFileSync(htaccess, htaccessBackup)
  console.log("Created UPLOAD_RENAME_TO_dot_htaccess.txt (rename to .htaccess on server)")
}

// 3. 复制 CSS 到根目录 site.css（_next 未完整上传时样式仍可加载）
const cssFiles = fs.existsSync(chunksDir)
  ? fs.readdirSync(chunksDir).filter((f) => f.endsWith(".css"))
  : []

if (cssFiles.length === 1) {
  const cssName = cssFiles[0]
  fs.copyFileSync(path.join(chunksDir, cssName), path.join(outDir, "site.css"))
  const fallbackLink = '<link rel="stylesheet" href="/site.css" data-fallback="true"/>'
  for (const file of walk(outDir)) {
    let html = fs.readFileSync(file, "utf8")
    if (!html.includes('href="/site.css"')) {
      html = html.replace("<head>", `<head>${fallbackLink}`)
      fs.writeFileSync(file, html)
    }
  }
  console.log(`Copied ${cssName} -> out/site.css (CSS fallback for Aliyun)`)
} else {
  console.warn(`Expected 1 CSS chunk, found ${cssFiles.length}`)
}

// 4. 扫描 HTML 内链
const issues = []
for (const file of walk(outDir)) {
  const html = fs.readFileSync(file, "utf8")
  for (const match of html.matchAll(/href="(\/[^"]+)"/g)) {
    const href = match[1]
    if (isInternalRoute(href) && needsTrailingSlash(href)) {
      issues.push({ file: path.relative(outDir, file), href })
    }
  }
}

if (issues.length > 0) {
  console.warn("Warning: internal links missing trailing slash:")
  for (const item of issues.slice(0, 20)) {
    console.warn(`  ${item.file}: ${item.href}`)
  }
} else {
  console.log("All internal HTML links have trailing slashes.")
}

// 5. 生成部署清单
const nextFileCount = countFiles(path.join(outDir, "_next"))
const checklist = `# 阿里云 FileZilla 部署清单（每次 npm run build 后执行）
#
# 上传位置：htdocs 根目录（与 index.html 同级）
#
# 【必须上传，缺一会导致 UI 异常】
# 1. _next/          整个文件夹（${nextFileCount} 个文件，含 JS/CSS）
# 2. site.css        根目录样式备用文件
# 3. zh/  en/        所有页面目录
# 4. .htaccess       隐藏文件；或用 UPLOAD_RENAME_TO_dot_htaccess.txt 上传后改名
#
# 【FileZilla 显示隐藏文件】服务器 → 强制显示隐藏文件
#
# 【若 UI 全乱、无样式】说明 _next 或 site.css 未上传成功，请删除服务器旧 _next 后整夹重传
#
# 构建时间：${new Date().toISOString()}
# CSS：${cssFiles[0] ?? "none"}
`
fs.writeFileSync(path.join(outDir, "DEPLOY_CHECKLIST.txt"), checklist, "utf8")
console.log(`Wrote DEPLOY_CHECKLIST.txt (_next files: ${nextFileCount})`)
