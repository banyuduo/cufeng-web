#!/usr/bin/env node
/**
 * 生成 WebP 格式及移动端小尺寸图片
 * 运行: node scripts/generate-responsive-images.mjs
 */
import sharp from "sharp"
import { readdir, mkdir, stat } from "fs/promises"
import { join, extname } from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PUBLIC_IMAGES = join(__dirname, "../public/images")
const MOBILE_WIDTH = 400
const WEBP_QUALITY = 85

const LARGE_IMAGES = [
  "diamond.jpg",
  "diamond pan.jpg",
  "sem-pan.jpg",
  "diamond-brazed.png",
  "brazing tech.png",
]

async function generateWebp(inputPath, outputPath, width = null) {
  let pipeline = sharp(inputPath)
  if (width) {
    pipeline = pipeline.resize(width, null, { withoutEnlargement: true })
  }
  await pipeline
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath)
  console.log(`  ✓ ${outputPath}`)
}

function sanitizeName(filename) {
  return filename.replace(/\s+/g, "-").replace(/\.(jpg|jpeg|png)$/i, "")
}

async function main() {
  console.log("生成响应式 WebP 图片...\n")

  for (const filename of LARGE_IMAGES) {
    const inputPath = join(PUBLIC_IMAGES, filename)
    const baseName = sanitizeName(filename)

    try {
      const fileStat = await stat(inputPath).catch(() => null)
      if (!fileStat || !fileStat.isFile()) {
        console.log(`⚠ 跳过（文件不存在）: ${filename}`)
        continue
      }

      console.log(`处理: ${filename}`)

      // 桌面端完整尺寸 WebP
      await generateWebp(inputPath, join(PUBLIC_IMAGES, `${baseName}.webp`))

      // 移动端 400px 宽 WebP
      await generateWebp(
        inputPath,
        join(PUBLIC_IMAGES, `${baseName}-400w.webp`),
        MOBILE_WIDTH
      )
      console.log("")
    } catch (err) {
      console.error(`  ✗ 错误: ${err.message}\n`)
    }
  }

  console.log("完成！")
}

main()
