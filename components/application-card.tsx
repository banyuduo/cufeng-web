"use client"

import { type ReactNode, useState } from "react"
import { ArrowUpRight, ChevronDown } from "lucide-react"

interface ApplicationCardProps {
  level: string
  title: string
  items: string[]
  description: string
  color: string
  icon?: ReactNode
  tag: string
  href?: string
  iconWrapperClassName?: string
  tagClassName?: string
  levelClassName?: string
  expandLabel: string
  collapseLabel: string
}

function OutlineItems({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((item) => (
        <span key={item} className="page-caption text-white/70 flex items-center gap-1 text-balance italic break-words">
          <ArrowUpRight className="w-3 h-3 text-slate-500 flex-shrink-0" /> {item}
        </span>
      ))}
    </div>
  )
}

export function ApplicationCard({
  level,
  title,
  items,
  description,
  color,
  icon,
  tag,
  href,
  iconWrapperClassName,
  tagClassName,
  levelClassName,
  expandLabel,
  collapseLabel,
}: ApplicationCardProps) {
  const [outlineOpen, setOutlineOpen] = useState(false)
  const outlineItems = items ?? []

  const scrollToSection = () => {
    if (!href || href === "#" || !href.startsWith("#")) return
    let element: Element | null = null
    try {
      element = document.querySelector(href)
    } catch {
      return
    }
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className={`relative group p-4 sm:p-6 rounded-2xl border ${color} transition-colors duration-300`}>
      <div className="lg:hidden">
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <span className={`text-xs font-mono tracking-tighter ${levelClassName ?? "text-slate-500"}`}>{level}</span>
          <span className={`px-2 py-0.5 rounded page-kicker font-semibold ${tagClassName ?? "bg-white/10 border border-white/15 text-white/80"}`}>{tag}</span>
        </div>
        <div className="flex items-start gap-2">
          <a
            href={href || "#"}
            className="min-w-0 flex-1"
            onClick={(event) => {
              if (!href || !href.startsWith("#")) return
              event.preventDefault()
              scrollToSection()
            }}
          >
            <h3 className="page-h3 text-white mb-2">{title}</h3>
            <p className="page-caption text-white/55 break-words">{description}</p>
          </a>
          {outlineItems.length > 0 ? (
            <button
              type="button"
              className="shrink-0 min-h-11 min-w-11 inline-flex items-center justify-center text-white/70 hover:text-white touch-manipulation"
              aria-expanded={outlineOpen}
              aria-label={outlineOpen ? collapseLabel : expandLabel}
              onClick={() => setOutlineOpen((open) => !open)}
            >
              <ChevronDown
                className={`w-5 h-5 pointer-events-none transition-transform duration-200 ${
                  outlineOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          ) : null}
        </div>
        {outlineOpen ? <OutlineItems items={outlineItems} /> : null}
      </div>

      <a
        href={href || "#"}
        className="hidden lg:flex lg:flex-row lg:items-center justify-between gap-4 cursor-pointer"
        onClick={(event) => {
          if (!href || !href.startsWith("#")) return
          event.preventDefault()
          scrollToSection()
        }}
      >
        <div className="flex items-start gap-4 min-w-0">
          {icon ? (
            <div className={`mt-1 p-2 rounded-lg border flex-shrink-0 ${iconWrapperClassName ?? "bg-white/[0.04] border-white/12"}`}>
              {icon}
            </div>
          ) : null}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <span className={`text-xs font-mono tracking-tighter ${levelClassName ?? "text-slate-500"}`}>{level}</span>
              <span className={`px-2 py-0.5 rounded page-kicker font-semibold ${tagClassName ?? "bg-white/10 border border-white/15 text-white/80"}`}>{tag}</span>
            </div>
            <h3 className="page-h3 text-white">{title}</h3>
            <OutlineItems items={outlineItems} />
          </div>
        </div>
        <div className="max-w-[280px] min-w-0">
          <p className="page-caption text-white/55 text-right italic break-words">
            {description}
          </p>
        </div>
      </a>
    </div>
  )
}
