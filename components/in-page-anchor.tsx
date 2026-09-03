"use client"

import { useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

function scrollToId(id: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView({ behavior, block: "start" })
  return true
}

/** 进入带 hash 的技术视界列表页时，滚到对应区块（避开 overflow 容器把锚点吃掉）。 */
export function ScrollToHash() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "")
    if (!id) return
    const run = () => scrollToId(id, "auto")
    run()
    const t = window.setTimeout(run, 80)
    return () => window.clearTimeout(t)
  }, [])
  return null
}

export function InPageAnchor({
  targetId,
  className,
  children,
}: {
  targetId: string
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={`#${targetId}`}
      className={cn("cursor-pointer", className)}
      onClick={(e) => {
        if (!scrollToId(targetId)) return
        e.preventDefault()
        history.replaceState(null, "", `#${targetId}`)
      }}
    >
      {children}
    </a>
  )
}
