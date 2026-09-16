"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/app-link"

interface HpcExpandableCardProps {
  title: string
  subtitle: string
  features: string
  items: string[]
  materials: string
  viewMaterialsLabel: string
  productsHref: string
  expandLabel: string
  collapseLabel: string
  materialsLabel: string
  intro: string
  geoCoupling: string
  geoCouplingDesc: string
  thermalDilution: string
  thermalDilutionDesc: string
  systemSync: string
  systemSyncDesc: string
  accentHex?: string
  accentClassName?: string
  accentHoverClassName?: string
}

export function HpcExpandableCard({
  title,
  subtitle,
  features,
  items,
  materials,
  viewMaterialsLabel,
  productsHref,
  expandLabel,
  collapseLabel,
  materialsLabel,
  intro,
  geoCoupling,
  geoCouplingDesc,
  thermalDilution,
  thermalDilutionDesc,
  systemSync,
  systemSyncDesc,
  accentHex = "#E2E8F0",
  accentClassName = "text-white",
  accentHoverClassName = "hover:text-white",
}: HpcExpandableCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      id="hpc"
      className="p-4 sm:p-8 lg:p-10 gap-4 bg-white/[0.03] border border-white/12 hover:border-white/25  transition-all scroll-mt-20"
    >
      <div className="min-w-0">
          <h2 className="page-h2 text-white mb-2">{title}</h2>
          {subtitle ? <p className="page-body text-white/70 font-medium mb-2">{subtitle}</p> : null}

          {features ? (
            <p className="hidden lg:block page-caption text-white/55 mb-4">{features}</p>
          ) : null}
          <ul className="hidden lg:block space-y-2 mb-4">
            {(items ?? []).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-white/70 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 opacity-80" style={{ backgroundColor: accentHex }} />
                <span className="page-body break-words">{item}</span>
              </li>
            ))}
          </ul>

          {expanded && (
            <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-white/12 space-y-6">
              <ul className="lg:hidden space-y-2">
                {(items ?? []).map((item, i) => (
                  <li key={`m-${i}`} className="flex items-start gap-2 text-white/70 min-w-0">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 opacity-80" style={{ backgroundColor: accentHex }} />
                    <span className="page-body break-words">{item}</span>
                  </li>
                ))}
              </ul>
              {features ? <p className="lg:hidden page-caption text-white/55">{features}</p> : null}
              <p className="page-body text-white/70 break-words">{intro}</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#002244]/55 border border-white/12 rounded-lg p-4 min-w-0">
                  <div className={`${accentClassName} page-body font-semibold mb-2 break-words`}>{geoCoupling}</div>
                  <p className="page-body text-white/70 break-words">{geoCouplingDesc}</p>
                </div>
                <div className="bg-[#002244]/55 border border-white/12 rounded-lg p-4 min-w-0">
                  <div className={`${accentClassName} page-body font-semibold mb-2 break-words`}>{thermalDilution}</div>
                  <p className="page-body text-white/70 break-words">{thermalDilutionDesc}</p>
                </div>
                <div className="bg-[#002244]/55 border border-white/12 rounded-lg p-4 min-w-0">
                  <div className={`${accentClassName} page-body font-semibold mb-2 break-words`}>{systemSync}</div>
                  <p className="page-body text-white/70 break-words">{systemSyncDesc}</p>
                </div>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center gap-1.5 min-h-[44px] ${accentClassName} ${accentHoverClassName} font-medium text-sm mt-2 touch-manipulation transition-colors`}
          >
            {expanded ? collapseLabel : expandLabel}
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>

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
          <div className="mt-6">
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
