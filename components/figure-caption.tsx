import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FigureCaptionProps {
  children: ReactNode
  className?: string
}

/** 全站统一图注组件：深色可读灰 + 顶部间距，替代分散的 figcaption / p 写法 */
export function FigureCaption({ children, className }: FigureCaptionProps) {
  return (
    <figcaption className={cn("page-caption text-slate-500 mt-2", className)}>
      {children}
    </figcaption>
  )
}
