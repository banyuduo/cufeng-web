"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/app-link"

export function ApplicationsCategoryCard({
  id,
  title,
  badge,
  items,
  itemsDesc,
  materials,
  materialsLabel,
  viewMaterialsLabel,
  productsHref,
  expandLabel,
  collapseLabel,
  accentHex,
}: {
  id: string
  title: string
  badge?: string
  items: string[]
  itemsDesc: string[]
  materials?: string
  materialsLabel: string
  viewMaterialsLabel: string
  productsHref: string
  expandLabel: string
  collapseLabel: string
  accentHex: string
}) {
  const [expanded, setExpanded] = useState(false)

  const renderDomainList = (keyPrefix: string) => (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={`${keyPrefix}-${item}`} className="border-l-2 pl-4" style={{ borderColor: `${accentHex}55` }}>
          <div className="flex items-start gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 opacity-80"
              style={{ backgroundColor: accentHex }}
            />
            <div className="min-w-0">
              <div className="page-body font-medium text-white break-words">{item}</div>
              {itemsDesc[i] ? (
                <p className="page-caption text-white/55 mt-1 break-words">{itemsDesc[i]}</p>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <Card
      id={id}
      className="p-4 sm:p-8 lg:p-10 gap-4 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-all scroll-mt-20"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h2 className="page-h2 text-white">{title}</h2>
          {badge ? (
            <span className="px-3 py-1 rounded-full page-caption font-medium bg-white/10 border border-white/15 text-white/80">
              {badge}
            </span>
          ) : null}
        </div>

        <div className="hidden lg:block mb-4">{renderDomainList("pc")}</div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            className="flex items-center gap-1.5 min-h-[44px] text-white/80 hover:text-white font-medium page-caption touch-manipulation transition-colors"
          >
            {expanded ? collapseLabel : expandLabel}
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
          {expanded ? <div className="mt-3 mb-4">{renderDomainList("mobile")}</div> : null}
        </div>

        {materials ? (
          <div className="mt-4">
            <div className="page-body font-semibold text-white mb-2">{materialsLabel}</div>
            <div className="flex flex-wrap gap-2">
              {materials.split("|").map((material) => (
                <span
                  key={material}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg page-caption font-medium border break-words max-w-full bg-white/[0.04] text-white/80"
                  style={{ borderColor: `${accentHex}55` }}
                >
                  {material.trim()}
                </span>
              ))}
            </div>
          </div>
        ) : null}

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
