"use client"

/**
 * 响应式图片组件 - 使用 HTML5 <picture> 标签
 * 优先加载 WebP 格式，为移动端提供更小尺寸
 */
interface ResponsivePictureProps {
  /** 原始图片路径（如 "/images/diamond.jpg"） */
  src: string
  alt: string
  /** 图片格式：jpg 或 png */
  format?: "jpg" | "png"
  className?: string
  /** 填充父容器（类似 object-cover） */
  fill?: boolean
  /** object-fit 样式 */
  objectFit?: "cover" | "contain"
}

export function ResponsivePicture({
  src,
  alt,
  format = "jpg",
  className = "",
  fill = false,
  objectFit = "cover",
}: ResponsivePictureProps) {
  // 规范化路径：WebP 文件名去除空格（生成的文件名）
  const rawPath = src.replace(/^\/images\//, "")
  const nameWithoutExt = rawPath.replace(/\.(jpg|jpeg|png|webp)$/i, "").replace(/\s+/g, "-")
  const imagesBase = "/images"

  const webpDesktop = `${imagesBase}/${nameWithoutExt}.webp`
  const webpMobile = `${imagesBase}/${nameWithoutExt}-400w.webp`
  const fallbackSrc = src.startsWith("/") ? src : `${imagesBase}/${rawPath}`

  const objectFitClass = objectFit === "contain" ? "object-contain" : "object-cover"
  const imgClass = fill
    ? `absolute inset-0 w-full h-full ${objectFitClass} ${className}`.trim()
    : `w-full h-full ${objectFitClass} ${className}`.trim()

  return (
    <picture className={fill ? "absolute inset-0 block" : "block"}>
      {/* 移动端：小尺寸 WebP */}
      <source
        type="image/webp"
        srcSet={webpMobile}
        media="(max-width: 768px)"
      />
      {/* 桌面端：完整尺寸 WebP */}
      <source type="image/webp" srcSet={webpDesktop} />
      {/* 回退：原始格式 */}
      <img
        src={fallbackSrc}
        alt={alt}
        className={imgClass}
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}
