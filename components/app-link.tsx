import NextLink from "next/link"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type AppLinkProps = ComponentProps<typeof NextLink>

/**
 * 静态导出站点在阿里云等环境上，视口内大量 next/link 默认预取会并行拉取多页资源，易造成点击与滚动卡顿。
 * 默认 prefetch={false}，确需预热的链接可显式传入 prefetch。
 */
export function Link({ prefetch = false, className, ...props }: AppLinkProps) {
  return <NextLink prefetch={prefetch} className={cn("cursor-pointer", className)} {...props} />
}
