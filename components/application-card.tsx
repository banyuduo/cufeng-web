"use client"

import { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"

interface ApplicationCardProps {
  level: string
  title: string
  items: string[]
  description: string
  color: string
  icon: ReactNode
  tag: string
  href?: string
}

export function ApplicationCard({
  level,
  title,
  items,
  description,
  color,
  icon,
  tag,
  href
}: ApplicationCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <a
      href={href || "#"}
      className={`relative group p-6 rounded-2xl border ${color} transition-all duration-300 hover:translate-x-2 block cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4 min-w-0">
          <div className="mt-1 p-2 bg-[#023B99] rounded-lg border border-[#4169E1]/40 flex-shrink-0">
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <span className="text-xs font-mono tracking-tighter text-slate-500">{level}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0344b3] text-[#73DBFF] uppercase tracking-wider">{tag}</span>
            </div>
            <h3 className="text-lg font-bold text-white break-words">{title}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {items.map((item, i) => (
                <span key={i} className="text-sm text-slate-300 flex items-center gap-1 text-balance italic break-words">
                  <ArrowUpRight className="w-3 h-3 text-slate-500 flex-shrink-0" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="md:max-w-[280px] min-w-0">
          <p className="text-xs leading-relaxed text-slate-400 md:text-right italic break-words">
            {description}
          </p>
        </div>
      </div>
    </a>
  )
}
