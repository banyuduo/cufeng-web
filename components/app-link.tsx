import NextLink from "next/link"
import type { ComponentProps } from "react"
import { ensureTrailingSlash } from "@/lib/site-path"
import { cn } from "@/lib/utils"

export type AppLinkProps = ComponentProps<typeof NextLink>

function normalizeHref(href: AppLinkProps["href"]): AppLinkProps["href"] {
  if (typeof href === "string") {
    return ensureTrailingSlash(href)
  }
  if (href && typeof href === "object" && "pathname" in href && typeof href.pathname === "string") {
    return { ...href, pathname: ensureTrailingSlash(href.pathname) }
  }
  return href
}

/**
 * 静态导出站点链接：统一补尾斜杠，避免阿里云 Apache 错误 301；
 * 默认 prefetch={false}，减少静态托管上的并行预取卡顿。
 */
export function Link({ prefetch = false, className, href, ...props }: AppLinkProps) {
  return (
    <NextLink
      prefetch={prefetch}
      href={normalizeHref(href)}
      className={cn("cursor-pointer", className)}
      {...props}
    />
  )
}
