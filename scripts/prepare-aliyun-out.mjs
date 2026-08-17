import fs from "fs"
import path from "path"

const outDir = "out"

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

// 3. 扫描 HTML 内链，报告缺少尾斜杠的链接
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
  if (issues.length > 20) console.warn(`  ... and ${issues.length - 20} more`)
} else {
  console.log("All internal HTML links have trailing slashes.")
}
