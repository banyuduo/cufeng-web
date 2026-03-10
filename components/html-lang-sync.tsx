"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

/**
 * 根据当前路径同步 document.documentElement.lang，以支持静态导出下的 SEO 与可访问性。
 * 根布局默认 lang="zh-CN"，此组件在客户端根据 /en 路径更新为 "en"。
 */
export function HtmlLangSync() {
  const pathname = usePathname()

  useEffect(() => {
    const lang = pathname?.startsWith("/en") ? "en" : "zh-CN"
    document.documentElement.lang = lang
  }, [pathname])

  return null
}
