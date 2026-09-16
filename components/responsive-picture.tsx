"use client"

/**
 * 响应式图片：在 WebP 更小且清晰度足够时直接使用 WebP，
 * 避免 React 19 对 fallback 原图做 preload 导致双下载。
 * 关键样品图传 fullResolution，避免 400w 缩小。
 */
interface ResponsivePictureProps {
  /** 原始图片路径（如 "/images/diamond.jpg"） */
  src: string
  alt: string
  className?: string
  /** 填充父容器（类似 object-cover） */
  fill?: boolean
  /** object-fit 样式 */
  objectFit?: "cover" | "contain"
  /** 首屏优先加载（用于 Hero 等 above-the-fold 图片，提升 LCP） */
  priority?: boolean
  /** 使用原图像素，不提供 400w 移动端缩小版（样品/SEM/线稿） */
  fullResolution?: boolean
  /** 原图已是更小格式时跳过 WebP（例如 SEM JPEG 小于 WebP） */
  skipWebp?: boolean
}

function webpSibling(src: string, suffix = "") {
  const lastSlash = src.lastIndexOf("/")
  const dir = lastSlash >= 0 ? src.slice(0, lastSlash) : ""
  const file = lastSlash >= 0 ? src.slice(lastSlash + 1) : src
  const base = file.replace(/\.(jpe?g|png|webp)$/i, "").replace(/\s+/g, "-")
  return `${dir}/${base}${suffix}.webp`
}

export function ResponsivePicture({
  src,
  alt,
  className = "",
  fill = false,
  objectFit = "cover",
  priority = false,
  fullResolution = false,
  skipWebp = false,
}: ResponsivePictureProps) {
  const fallbackSrc = src.startsWith("/") ? src : `/${src}`
  const webpDesktop = webpSibling(fallbackSrc)
  const webpMobile = webpSibling(fallbackSrc, "-400w")
  const chosenSrc = skipWebp ? fallbackSrc : webpDesktop

  const objectFitClass = objectFit === "contain" ? "object-contain" : "object-cover"
  const imgClass = fill
    ? `absolute inset-0 w-full h-full ${objectFitClass} ${className}`.trim()
    : `w-full h-full ${objectFitClass} ${className}`.trim()

  const img = (
    <img
      src={chosenSrc}
      alt={alt}
      className={imgClass}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
    />
  )

  if (skipWebp || fullResolution) {
    return fill ? <span className="absolute inset-0 block">{img}</span> : img
  }

  return (
    <picture className={fill ? "absolute inset-0 block" : "block"}>
      <source type="image/webp" srcSet={webpMobile} media="(max-width: 768px)" />
      {img}
    </picture>
  )
}
