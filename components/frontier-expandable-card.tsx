"use client"

import { useState } from "react"
import { ChevronDown, Sparkles, Battery, Droplets, Atom, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

type FrontierItemKey = "solidState" | "water" | "superconductor" | "quantum"

interface FrontierItemConfig {
  key: FrontierItemKey
  title: string
  shortDesc: string
  icon: React.ReactNode
  hasWhitepaper: boolean
  hasDeepTech: boolean
  whitepaperHref?: string
  deepTechHref?: string
  expandContent: React.ReactNode
}

interface FrontierExpandableCardProps {
  sectionTitle: string
  sectionBadge: string
  sectionSubtitle: string
  mediumTermLabel: string
  mediumTermSubtitle: string
  longTermLabel: string
  longTermSubtitle: string
  mediumTermItems: FrontierItemConfig[]
  longTermItems: FrontierItemConfig[]
  viewWhitepaperLabel: string
  viewDeepLabel: string
  expandLabel: string
  collapseLabel: string
}

function FrontierItemCard({
  item,
  viewWhitepaperLabel,
  viewDeepLabel,
  expandLabel,
  collapseLabel,
  variant,
}: {
  item: FrontierItemConfig
  viewWhitepaperLabel: string
  viewDeepLabel: string
  expandLabel: string
  collapseLabel: string
  variant: "mediumTerm" | "longTerm"
}) {
  const [expanded, setExpanded] = useState(false)
  const isMedium = variant === "mediumTerm"

  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-all ${
      isMedium ? "border-emerald-200/80 bg-emerald-50/30" : "border-purple-200/80 bg-purple-50/30"
    }`}>
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg flex-shrink-0 ${
            isMedium ? "bg-emerald-100 text-emerald-600" : "bg-purple-100 text-purple-600"
          }`}>
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.shortDesc}</p>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className={`flex items-center gap-1.5 font-medium text-sm transition-colors ${
                isMedium ? "text-emerald-600 hover:text-emerald-700" : "text-purple-600 hover:text-purple-700"
              }`}
            >
              {expanded ? collapseLabel : expandLabel}
              <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
            {item.expandContent}
            {(item.hasWhitepaper || item.hasDeepTech) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {item.hasWhitepaper && item.whitepaperHref && (
                  <a
                    href={item.whitepaperHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm border transition-colors ${
                      isMedium ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200/60" : "bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200/60"
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    {viewWhitepaperLabel}
                  </a>
                )}
                {item.hasDeepTech && item.deepTechHref && (
                  <Link
                    href={item.deepTechHref}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium text-sm border border-slate-200 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    {viewDeepLabel}
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

export function FrontierExpandableCard({
  sectionTitle,
  sectionBadge,
  sectionSubtitle,
  mediumTermLabel,
  mediumTermSubtitle,
  longTermLabel,
  longTermSubtitle,
  mediumTermItems,
  longTermItems,
  viewWhitepaperLabel,
  viewDeepLabel,
  expandLabel,
  collapseLabel,
}: FrontierExpandableCardProps) {
  return (
    <Card
      id="frontier"
      className="p-6 sm:p-8 lg:p-10 bg-slate-50/80 border-purple-200 hover:shadow-xl transition-all scroll-mt-20"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-8">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{sectionTitle}</h2>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
              {sectionBadge}
            </span>
          </div>
          <p className="text-slate-600 text-sm sm:text-base break-words leading-relaxed">{sectionSubtitle}</p>
        </div>
      </div>

      {/* 中期潜力方向 */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-emerald-800 mb-1">{mediumTermLabel}</h3>
        <p className="text-sm text-emerald-700/90 mb-4">{mediumTermSubtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {mediumTermItems.map((item) => (
            <FrontierItemCard
              key={item.key}
              item={item}
              variant="mediumTerm"
              viewWhitepaperLabel={viewWhitepaperLabel}
              viewDeepLabel={viewDeepLabel}
              expandLabel={expandLabel}
              collapseLabel={collapseLabel}
            />
          ))}
        </div>
      </div>

      {/* 远期物理窗口 */}
      <div>
        <h3 className="text-base font-bold text-purple-800 mb-1">{longTermLabel}</h3>
        <p className="text-sm text-purple-700/90 mb-4">{longTermSubtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {longTermItems.map((item) => (
            <FrontierItemCard
              key={item.key}
              item={item}
              variant="longTerm"
              viewWhitepaperLabel={viewWhitepaperLabel}
              viewDeepLabel={viewDeepLabel}
              expandLabel={expandLabel}
              collapseLabel={collapseLabel}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}
