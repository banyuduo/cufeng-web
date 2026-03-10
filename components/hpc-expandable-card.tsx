"use client"

import { useState } from "react"
import { ChevronDown, Cpu } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
}: HpcExpandableCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      id="hpc"
      className="p-6 sm:p-8 lg:p-10 bg-[#F9FAFC] border-[#4169E1]/30 hover:shadow-xl transition-all scroll-mt-20"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#0F2A5C] flex items-center justify-center flex-shrink-0">
          <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{title}</h2>
          {subtitle && <p className="text-slate-600 font-medium mb-2">{subtitle}</p>}
          {features && <p className="text-sm text-slate-600 mb-4">{features}</p>}
          <ul className="space-y-2 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#73DBFF]" />
                <span className="text-sm sm:text-base break-words">{item}</span>
              </li>
            ))}
          </ul>

          {/* 可展开的完整方案介绍 */}
          {expanded && (
            <div className="mt-6 pt-6 border-t border-[#4169E1]/30/80 space-y-6">
              <p className="text-slate-600 leading-relaxed break-words">{intro}</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 rounded-lg p-4 min-w-0">
                  <div className="text-[#73DBFF] font-bold mb-2 text-sm sm:text-base break-words">{geoCoupling}</div>
                  <p className="text-sm text-slate-600 leading-relaxed break-words">{geoCouplingDesc}</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 min-w-0">
                  <div className="text-[#73DBFF] font-bold mb-2 text-sm sm:text-base break-words">{thermalDilution}</div>
                  <p className="text-sm text-slate-600 leading-relaxed break-words">{thermalDilutionDesc}</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 min-w-0">
                  <div className="text-[#73DBFF] font-bold mb-2 text-sm sm:text-base break-words">{systemSync}</div>
                  <p className="text-sm text-slate-600 leading-relaxed break-words">{systemSyncDesc}</p>
                </div>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-[#73DBFF] hover:text-[#73DBFF] font-medium text-sm mt-2 transition-colors"
          >
            {expanded ? collapseLabel : expandLabel}
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>

          {materials && (
            <div className="mt-4">
              <div className="text-sm font-semibold text-slate-800 mb-2">{materialsLabel}</div>
              <div className="flex flex-wrap gap-2">
                {materials.split("|").map((m, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#E8EEFF] text-[#023B99] text-xs sm:text-sm font-medium border border-[#4169E1]/40 break-words max-w-full"
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
              className="min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
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
