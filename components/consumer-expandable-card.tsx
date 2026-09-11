"use client"

import { useState } from "react"
import { ChevronDown, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/app-link"

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
  accentHex = "#E2E8F0",
  accentClassName = "text-white",
  accentHoverClassName = "hover:text-white",
}: ConsumerExpandableCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      id="consumer"
      className={`p-4 sm:p-8 lg:p-10 gap-4 bg-white/[0.03] border border-white/12 hover:border-white/25  transition-all scroll-mt-20 ${
        isExploration ? "" : ""
      }`}
    >
      <div className="min-w-0">
          <h2 className="page-h2 text-white mb-4">{title}</h2>
          <div className="space-y-4 mb-4">
            {(items ?? []).map((item, i) => (
              <div key={i} className="border-l-2 border-white/12 pl-4 min-w-0">
                <div className="page-body font-medium text-white break-words">{item}</div>
                {itemsDesc[i] && (
                  <p className="page-caption text-white/55 mt-1 break-words">{itemsDesc[i]}</p>
                )}
              </div>
            ))}
          </div>

          {/* 无线充电线圈可展开详情 */}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className={`flex items-center gap-1.5 min-h-[44px] ${accentClassName} ${accentHoverClassName} font-medium text-sm touch-manipulation transition-colors`}
            >
              {expanded ? collapseLabel : expandLabel}
              <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
            {expanded && (
              <div className="mt-4 pt-4 border-t border-white/12 space-y-4">
                <p className="page-body text-white/70">{coilIntro}</p>
                <div className="bg-[#002244]/55 rounded-lg p-4 border border-white/12">
                  <div className="page-body font-semibold text-white mb-2">{coilCoreSolution}</div>
                  <p className="page-body text-white/70 break-words">{coilSolution}</p>
                </div>
                <div className="bg-[#002244]/35 rounded-lg p-4 border border-white/12">
                  <div className="page-body font-semibold text-white mb-2">{coilTechAdvantage}</div>
                  <ul className="space-y-1 page-body text-white/70">
                    <li className="break-words">• {coilAdv1}</li>
                    <li className="break-words">• {coilAdv2}</li>
                    <li className="break-words">• {coilAdv3}</li>
                  </ul>
                </div>
                <div className="bg-[#002244]/35 rounded-lg p-4 border border-white/12">
                  <div className="page-body font-semibold text-white mb-2">{coilPhysicsMech}</div>
                  <p className="page-body text-white/70 break-words">{coilMech}</p>
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
              <div className="page-body font-semibold text-white mb-2">{materialsLabel}</div>
              <div className="flex flex-wrap gap-2">
                {materials.split("|").map((m, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.04] text-white/80 page-caption font-medium border border-white/12 break-words max-w-full"
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
              className="min-h-[44px] border-white/25 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href={productsHref}>{viewMaterialsLabel}</Link>
            </Button>
          </div>
      </div>
    </Card>
  )
}
