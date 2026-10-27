import fs from "fs"
import path from "path"

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

// 0. 清理构建元数据与占位/图标残留
//    - 递归删除 out/ 下全部 __next.*.txt 与 index.txt（Next 静态导出 RSC/调试元数据，浏览器与 JS 零引用）
//    - 删除未引用的 placeholder/icon 残留文件
//    - docs/ 目录一律保留不动（跳过）
const CLEANUP_PUBLIC_FILES = [
  "placeholder-logo.png", "placeholder-logo.svg", "placeholder-user.jpg",
  "placeholder.jpg", "placeholder.svg",
  "icon-dark-32x32.png", "icon-light-32x32.png", "icon.svg",
]

function isMetadataFile(name) {
  return (name.startsWith("__next.") && name.endsWith(".txt")) || name === "index.txt"
}

function dirSize(dir) {
  let size = 0
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) size += dirSize(full)
    else size += fs.statSync(full).size
  }
  return size
}

let removedMeta = 0
let removedMetaBytes = 0
function cleanMetadata(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "docs") continue // docs 目录一律不动
      if (entry.name.startsWith("__next.")) {
        // RSC 元数据目录（如 __next.news / __next.$d$locale），HTML/JS 零引用，整体删除
        removedMetaBytes += dirSize(full)
        fs.rmSync(full, { recursive: true, force: true })
        removedMeta++
        continue
      }
      cleanMetadata(full)
      continue
    }
    if (isMetadataFile(entry.name)) {
      removedMetaBytes += fs.statSync(full).size
      fs.rmSync(full, { force: true })
      removedMeta++
    }
  }
}
cleanMetadata(outDir)

let removedPublic = 0
for (const name of CLEANUP_PUBLIC_FILES) {
  const full = path.join(outDir, name)
  if (fs.existsSync(full)) {
    fs.rmSync(full, { force: true })
    removedPublic++
  }
}
if (removedMeta > 0 || removedPublic > 0) {
  console.log(`Cleanup -> removed ${removedMeta} metadata files (${(removedMetaBytes / 1048576).toFixed(2)}MB) + ${removedPublic} placeholder/icon files`)
}

// 0.5 移除 404/ 与 _not-found/ 冗余目录（保留 out/404.html 根文件）
// Next 静态导出会同时产出 out/404.html、out/404/ 与 out/_not-found/（内容重复），
// 阿里云 Nginx/.htaccess 对 404 状态直接返回 404.html，目录无功能作用，整体删除。
const REDUNDANT_DIRS = ["404", "_not-found"]
for (const rel of REDUNDANT_DIRS) {
  const dir = path.join(outDir, rel)
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
    const bytes = dirSize(dir)
    fs.rmSync(dir, { recursive: true, force: true })
    console.log(`Cleanup -> removed redundant dir out/${rel}/ (${(bytes / 1024).toFixed(1)}KB)`)
  }
}

// 1. 移除 game
const outGame = path.join(outDir, "game")
if (fs.existsSync(outGame)) {
  fs.rmSync(outGame, { recursive: true, force: true })
}

// 2. 始终从 public 覆盖 .htaccess，并提供可见副本（FileZilla 默认不显示点文件）
//    .htaccess 需含 patents -> architecture 301 规则，保证旧收录地址不 404
const publicHtaccess = path.join("public", ".htaccess")
const htaccess = path.join(outDir, ".htaccess")

function ensurePatents301(htaccessContent) {
  const marker = "# 301: patents -> architecture"
  if (htaccessContent.includes(marker)) return htaccessContent
  const rules = `  # ${marker}（2026-10 路由迁移，保证旧收录地址不 404）
  RewriteRule ^patents/?$ /architecture/ [R=301,L]
  RewriteRule ^zh/patents/?$ /zh/architecture/ [R=301,L]
  RewriteRule ^en/patents/?$ /en/architecture/ [R=301,L]
`
  return htaccessContent.replace(
    "<IfModule mod_rewrite.c>\n  RewriteEngine On\n",
    "<IfModule mod_rewrite.c>\n  RewriteEngine On\n\n" + rules,
  )
}

if (fs.existsSync(publicHtaccess)) {
  const content = ensurePatents301(fs.readFileSync(publicHtaccess, "utf8"))
  fs.writeFileSync(htaccess, content)
  fs.writeFileSync(path.join(outDir, "UPLOAD_RENAME_TO_dot_htaccess.txt"), content)
  console.log("Copied public/.htaccess -> out/.htaccess (patents 301 ensured)")
} else {
  console.warn("WARNING: public/.htaccess missing — Aliyun directory URLs will 403 without trailing slash")
}

// 3. 样式复制到固定路径（不依赖 _next 哈希文件名）
const cssFiles = fs.existsSync(chunksDir)
  ? fs.readdirSync(chunksDir).filter((f) => f.endsWith(".css"))
  : []

if (cssFiles.length >= 1) {
  cssFiles.sort()
  const combined = cssFiles
    .map((f) => fs.readFileSync(path.join(chunksDir, f), "utf8"))
    .join("\n")
  fs.mkdirSync(stylesDir, { recursive: true })
  fs.writeFileSync(path.join(stylesDir, "site.css"), combined)

  const styleLinks =
    '<link rel="stylesheet" href="/styles/site.css" data-site-style="true"/>'

  for (const file of walk(outDir)) {
    let html = fs.readFileSync(file, "utf8")
    // 移除原有 chunk CSS link：合并版 site.css 已包含完全相同内容，保留会导致每页重复下载 ~550KB
    html = html.replace(/<link[^>]*href="\/_next\/static\/chunks\/[^"]*\.css"[^>]*\/?>/g, "")
    if (!html.includes('data-site-style="true"')) {
      html = html.replace("<head>", `<head>${styleLinks}`)
    }
    fs.writeFileSync(file, html)
  }
  console.log(`Styles -> out/styles/site.css (merged ${cssFiles.length} chunks)`)
} else {
  console.warn("WARNING: no CSS chunks found under out/_next/static/chunks")
}

// 3.5 根跳转页瘦身：只保留跳转所需的最小内容，避免下载全套 JS/CSS（约 1.7MB）
const rootHtmlPath = path.join(outDir, "index.html")
if (fs.existsSync(rootHtmlPath)) {
  let html = fs.readFileSync(rootHtmlPath, "utf8")
  html = html.replace(/<link[^>]*\/?>/g, "")            // 移除全部 link（CSS/字体/icon）
  html = html.replace(/<script[\s\S]*?<\/script>/g, "") // 移除全部 script（含 RSC payload）
  fs.writeFileSync(rootHtmlPath, html)
  console.log(`Root redirect page slimmed: ${Math.round(fs.statSync(rootHtmlPath).size / 1024)}KB`)
}

// 4. 上传路径自检文件
const testContent = `上传路径正确！
如果你能在浏览器打开 https://www.tospike.com/UPLOAD_TEST.txt 看到本文件，说明上传到了网站根目录（htdocs）。
构建时间：${new Date().toLocaleString("zh-CN")}
`
fs.writeFileSync(path.join(outDir, "UPLOAD_TEST.txt"), testContent, "utf8")

function flattenMetadataFile(name) {
  const target = path.join(outDir, name)
  if (!fs.existsSync(target) || !fs.statSync(target).isDirectory()) return
  const innerNames = ["index.xml", "index.txt", "index.html"]
  for (const innerName of innerNames) {
    const inner = path.join(target, innerName)
    if (!fs.existsSync(inner)) continue
    const content = fs.readFileSync(inner)
    fs.rmSync(target, { recursive: true, force: true })
    fs.writeFileSync(target, content)
    console.log(`Flattened ${name}/ to ${name}`)
    return
  }
}
flattenMetadataFile("sitemap.xml")
flattenMetadataFile("robots.txt")

if (!fs.existsSync(path.join(outDir, "robots.txt"))) {
  console.warn("WARNING: out/robots.txt missing")
}
if (!fs.existsSync(path.join(outDir, "sitemap.xml"))) {
  console.warn("WARNING: out/sitemap.xml missing")
}

// 5. 中文上传说明
const nextCount = countFiles(path.join(outDir, "_next"))
const guide = `========================================
  阿里云上传说明（请仔细阅读）
========================================

【重要】网站根目录 = htdocs 文件夹
FileZilla 登录后，右侧应能看到 zh、en 等文件夹。
所有文件必须上传到这一层，不要传到子文件夹里。

【必须上传 .htaccess】
FileZilla 默认隐藏点文件。请开启「显示隐藏文件」，把 out/.htaccess 传到 htdocs 根目录。
若看不到，上传 UPLOAD_RENAME_TO_dot_htaccess.txt 后在控制台改名为 .htaccess。
缺少此文件时，刷新 /zh、/zh/about 等无尾斜杠地址会 403。

【传输方式】
必须用二进制（Binary）上传，不要用 ASCII。否则 JS/字体可能损坏，页面会报 Application error。

【FileZilla 方式】
必须上传整个 out 文件夹【里面的内容】到 htdocs：
  .htaccess       （隐藏文件，必传！）
  _next/          （${nextCount} 个文件，整夹覆盖，最重要！）
  styles/         （含 site.css）
  sitemap.xml     （搜索引擎站点地图）
  robots.txt
  zh/  en/
  UPLOAD_TEST.txt
  其余文件（构建元数据 __next.*.txt / index.txt 与占位图已由脚本自动清理，无需上传）

【覆盖规则】
每次改版：先传完整 _next/ 和 zh/、en/，再覆盖 HTML。
不要只传几个 HTML、也不要新旧 _next 混在一起。
哈希文件名一变，旧 JS 还在、新 HTML 去找新 JS，就会出现「Application error」。

【上传后验证（全部应为 200，不是 404 / 403）】
  https://www.tospike.com/UPLOAD_TEST.txt
  https://www.tospike.com/styles/site.css
  https://www.tospike.com/zh/
  https://www.tospike.com/zh   （无斜杠，应 301 到 /zh/）
  https://www.tospike.com/zh/applications/
用无痕窗口打开，避免旧 JS/CSS 缓存。

【常见错误】
× 没传 .htaccess               → 刷新目录页 403
× 只删了 _next 没重新上传  →  UI 全乱 / Application error
× 上传到错误目录           →  文件 404
× 只上传了 zh 没上传 _next →  无样式
× ASCII 模式上传            → JS 损坏，客户端报错

构建时间：${new Date().toLocaleString("zh-CN")}
`
fs.writeFileSync(path.join(outDir, "上传说明.txt"), guide, "utf8")

console.log("Done. Upload the contents of out/ to htdocs.")
