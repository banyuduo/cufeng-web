#!/usr/bin/env node
/**
 * 为页面用图生成同尺寸 WebP（仅在体积更小时保留）。
 * 运行: node scripts/generate-responsive-images.mjs
 *
 * - 样品/SEM 照片：q90，不缩小
 * - 线稿图：无损 WebP，不缩小
 * - 产品展示图：q85 + 可选 400w 移动端
 * - WebP 比原图更大则跳过
 */
import sharp from "sharp"
import { mkdir, stat, unlink } from "fs/promises"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const PUBLIC_DIR = join(__dirname, "../public")
const MOBILE_WIDTH = 400

/** @typedef {{ src: string, quality?: number, lossless?: boolean, mobile?: boolean }} ImageJob */

/** @type {ImageJob[]} */
const JOBS = [
  { src: "docs/diamond-copper-sample.jpg", quality: 90 },
  { src: "docs/diamond-copper-micro.jpg", quality: 90 },
  { src: "docs/diamond-battery.jpg", quality: 90 },
  { src: "docs/diamond-pan.jpg", quality: 90 },
  { src: "docs/diamond-pan-sem.jpg", quality: 90 },
  { src: "images/diamond.jpg", quality: 85, mobile: true },
  { src: "images/diamond pan.jpg", quality: 85, mobile: true },
  { src: "images/diamond-brazed.png", lossless: true },
  { src: "images/brazing tech.png", lossless: true },
]

const REMOVE_IF_UNUSED = [
  "images/sem-pan.webp",
  "images/sem-pan-400w.webp",
  "images/diamond-brazed-400w.webp",
  "images/brazing-tech-400w.webp",
]

function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`
}

function webpName(src, suffix = "") {
  const lastSlash = src.lastIndexOf("/")
  const dir = lastSlash >= 0 ? src.slice(0, lastSlash) : ""
  const file = lastSlash >= 0 ? src.slice(lastSlash + 1) : src
  const base = file.replace(/\.(jpe?g|png|webp)$/i, "").replace(/\s+/g, "-")
  return `${dir}/${base}${suffix}.webp`
}

async function encodeWebp(inputPath, outputPath, job, width = null) {
  let pipeline = sharp(inputPath)
  if (width) {
    pipeline = pipeline.resize(width, null, { withoutEnlargement: true })
  }
  if (job.lossless) {
    pipeline = pipeline.webp({ lossless: true, effort: 6 })
  } else {
    pipeline = pipeline.webp({
      quality: job.quality ?? 85,
      alphaQuality: 90,
      effort: 6,
    })
  }
  await mkdir(dirname(outputPath), { recursive: true })
  await pipeline.toFile(outputPath)
}

async function main() {
  console.log("生成同尺寸 WebP（仅保留更小文件）...\n")

  for (const job of JOBS) {
    const inputPath = join(PUBLIC_DIR, job.src)
    const fileStat = await stat(inputPath).catch(() => null)
    if (!fileStat?.isFile()) {
      console.log(`⚠ 跳过（不存在）: ${job.src}`)
      continue
    }

    const origBytes = fileStat.size
    const fullRel = webpName(job.src)
    const fullPath = join(PUBLIC_DIR, fullRel)
    console.log(`处理: ${job.src}  (${kb(origBytes)})`)

    await encodeWebp(inputPath, fullPath, job)
    const webpBytes = (await stat(fullPath)).size
    if (webpBytes >= origBytes) {
      await unlink(fullPath)
      console.log(`  ✗ ${fullRel} ${kb(webpBytes)} ≥ 原图，已删除`)
    } else {
      const save = (((origBytes - webpBytes) / origBytes) * 100).toFixed(1)
      console.log(`  ✓ ${fullRel} ${kb(webpBytes)}  节省 ${save}%`)
    }

    if (job.mobile) {
      const mobileRel = webpName(job.src, "-400w")
      const mobilePath = join(PUBLIC_DIR, mobileRel)
      await encodeWebp(inputPath, mobilePath, job, MOBILE_WIDTH)
      const mobileBytes = (await stat(mobilePath)).size
      console.log(`  ✓ ${mobileRel} ${kb(mobileBytes)}`)
    }
    console.log("")
  }

  for (const rel of REMOVE_IF_UNUSED) {
    const full = join(PUBLIC_DIR, rel)
    const exists = await stat(full).catch(() => null)
    if (exists?.isFile()) {
      await unlink(full)
      console.log(`已移除体积更大或会降低清晰度的派生文件: ${rel}`)
    }
  }

  console.log("\n完成！")
}

main()
