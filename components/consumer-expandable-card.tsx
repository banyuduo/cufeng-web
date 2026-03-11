"use client"

import { useState } from "react"
import { ChevronDown, Home, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ConsumerExpandableCardProps {
  title: string
  items: string[]
  itemsDesc: string[]
  materials?: string
  materialsLabel: string
  viewMaterialsLabel: string
  productsHref: string
  expandLabel: string
  collapseLabel: string
  coilIntro: string
  coilSolution: string
  coilAdv1: string
  coilAdv2: string
  coilAdv3: string
  coilMech: string
  coilCoreSolution: string
  coilTechAdvantage: string
  coilPhysicsMech: string
  viewWhitepaper: string
  whitepaperHref: string
  isExploration?: boolean
  accentHex?: string
  accentClassName?: string
  accentHoverClassName?: string
}

export function ConsumerExpandableCard({
  title,
  items,
  itemsDesc,
  materials,
  materialsLabel,
  viewMaterialsLabel,
  productsHref,
  expandLabel,
  collapseLabel,
  coilIntro,
  coilSolution,
  coilAdv1,
  coilAdv2,
  coilAdv3,
  coilMech,
  coilCoreSolution,
  coilTechAdvantage,
  coilPhysicsMech,
  viewWhitepaper,
  whitepaperHref,
  isExploration = false,
  accentHex = "#73DBFF",
  accentClassName = "text-[#73DBFF]",
  accentHoverClassName = "hover:text-[#8EE8FF]",
}: ConsumerExpandableCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      id="consumer"
      className={`p-6 sm:p-8 lg:p-10 bg-[#002244]/55 backdrop-blur-sm border border-[#0077b6]/30 hover:border-[#00b4d8]/45 hover:shadow-xl hover:shadow-[#0077b6]/10 transition-all scroll-mt-20 ${
        isExploration ? "ring-1 ring-[#73DBFF]/15" : ""
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#002244] to-[#003366] border border-[#0077b6]/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0077b6]/10">
          <Home className={`w-7 h-7 sm:w-8 sm:h-8 ${accentClassName}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{title}</h2>
          <div className="space-y-4 mb-4">
            {items.map((item, i) => (
              <div key={i} className="border-l-2 border-[#0077b6]/25 pl-4 min-w-0">
                <div className="font-medium text-slate-200 text-sm sm:text-base break-words">{item}</div>
                {itemsDesc[i] && (
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed break-words">{itemsDesc[i]}</p>
                )}
              </div>
            ))}
          </div>

          {/* 无线充电线圈可展开详情 */}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className={`flex items-center gap-1.5 ${accentClassName} ${accentHoverClassName} font-medium text-sm transition-colors`}
            >
              {expanded ? collapseLabel : expandLabel}
              <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
            {expanded && (
              <div className="mt-4 pt-4 border-t border-[#0077b6]/25 space-y-4">
                <p className="text-slate-300 leading-relaxed text-sm">{coilIntro}</p>
                <div className="bg-[#002244]/55 rounded-lg p-4 border border-[#0077b6]/30">
                  <div className="font-semibold text-white mb-2 text-sm">{coilCoreSolution}</div>
                  <p className="text-slate-400 text-sm leading-relaxed break-words">{coilSolution}</p>
                </div>
                <div className="bg-[#002244]/35 rounded-lg p-4 border border-[#00b4d8]/25">
                  <div className="font-semibold text-white mb-2 text-sm">{coilTechAdvantage}</div>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li className="break-words">• {coilAdv1}</li>
                    <li className="break-words">• {coilAdv2}</li>
                    <li className="break-words">• {coilAdv3}</li>
                  </ul>
                </div>
                <div className="bg-[#002244]/35 rounded-lg p-4 border border-[#0077b6]/25">
                  <div className="font-semibold text-white mb-2 text-sm">{coilPhysicsMech}</div>
                  <p className="text-slate-400 text-sm leading-relaxed break-words">{coilMech}</p>
                </div>
                <a
                  href={whitepaperHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${accentClassName} ${accentHoverClassName} font-medium text-sm`}
                >
                  <FileText className="w-4 h-4" />
                  {viewWhitepaper}
                </a>
              </div>
            )}
          </div>

          {materials && (
            <div className="mt-4">
              <div className="text-sm font-semibold text-white mb-2">{materialsLabel}</div>
              <div className="flex flex-wrap gap-2">
                {materials.split("|").map((m, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#002244]/60 text-slate-200 text-xs sm:text-sm font-medium border border-[#0077b6]/30 break-words max-w-full"
                  >
                    {m.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              variant="outline"
              className="min-h-[44px] border-[#00b4d8]/80 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href={productsHref}>{viewMaterialsLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
