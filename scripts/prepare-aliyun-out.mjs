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

// 1. 移除 game
const outGame = path.join(outDir, "game")
if (fs.existsSync(outGame)) {
  fs.rmSync(outGame, { recursive: true, force: true })
}

// 2. 始终从 public 覆盖 .htaccess，并提供可见副本（FileZilla 默认不显示点文件）
const publicHtaccess = path.join("public", ".htaccess")
const htaccess = path.join(outDir, ".htaccess")
if (fs.existsSync(publicHtaccess)) {
  fs.copyFileSync(publicHtaccess, htaccess)
  fs.copyFileSync(publicHtaccess, path.join(outDir, "UPLOAD_RENAME_TO_dot_htaccess.txt"))
  console.log("Copied public/.htaccess -> out/.htaccess")
} else {
  console.warn("WARNING: public/.htaccess missing — Aliyun directory URLs will 403 without trailing slash")
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

【必须上传 .htaccess】
FileZilla 默认隐藏点文件。请开启「显示隐藏文件」，把 out/.htaccess 传到 htdocs 根目录。
若看不到，上传 UPLOAD_RENAME_TO_dot_htaccess.txt 后在控制台改名为 .htaccess。
缺少此文件时，刷新 /zh、/zh/about 等无尾斜杠地址会 403。

【FileZilla 方式】
必须上传整个 out 文件夹【里面的内容】到 htdocs：
  .htaccess       （隐藏文件，必传！）
  _next/          （${nextCount} 个文件，整夹上传，最重要！）
  styles/         （含 site.css）
  site.css
  zh/  en/
  UPLOAD_TEST.txt
  其余文件...

【上传后验证（全部应为 200，不是 404 / 403）】
  https://www.tospike.com/UPLOAD_TEST.txt
  https://www.tospike.com/styles/site.css
  https://www.tospike.com/zh/
  https://www.tospike.com/zh   （无斜杠，应 301 到 /zh/）

【常见错误】
× 没传 .htaccess               → 刷新目录页 403
× 只删了 _next 没重新上传  →  UI 全乱
× 上传到错误目录           →  文件 404
× 只上传了 zh 没上传 _next →  无样式

构建时间：${new Date().toLocaleString("zh-CN")}
`
fs.writeFileSync(path.join(outDir, "上传说明.txt"), guide, "utf8")

console.log("Done. Upload the contents of out/ to htdocs.")
