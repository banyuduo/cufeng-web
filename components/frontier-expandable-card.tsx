"use client"

import { useState } from "react"
import { ChevronDown, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Link } from "@/components/app-link"

type FrontierItemKey = "solidState" | "water" | "superconductor" | "quantum"

type FrontierSection = {
  heading?: string
  body?: string
  bullets?: string[]
}

interface FrontierItemConfig {
  key: FrontierItemKey
  title: string
  shortDesc: string
  hasWhitepaper: boolean
  hasDeepTech: boolean
  whitepaperHref?: string
  deepTechHref?: string
  sections: FrontierSection[]
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
}: {
  item: FrontierItemConfig
  viewWhitepaperLabel: string
  viewDeepLabel: string
  expandLabel: string
  collapseLabel: string
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all border border-white/12 bg-[#071d2e]/88"
    >
      <div className="p-5 sm:p-6">
        <h3 className="page-h3 text-white mb-1">{item.title}</h3>
        <p className="page-body text-white/55 mb-3">{item.shortDesc}</p>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 min-h-[44px] font-medium text-sm touch-manipulation transition-colors text-white/80 hover:text-white"
        >
          {expanded ? collapseLabel : expandLabel}
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-white/12 space-y-4">
            <div className="space-y-4 page-body">
              {item.sections.map((section, index) => (
                <div key={`${item.key}-${index}`}>
                  {section.heading ? (
                    <div className="font-semibold text-white mb-1">{section.heading}</div>
                  ) : null}
                  {section.body ? (
                    <p className="page-body text-white/70 break-words">{section.body}</p>
                  ) : null}
                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="space-y-1 page-body text-white/70">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
            {(item.hasWhitepaper || item.hasDeepTech) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {item.hasWhitepaper && item.whitepaperHref && (
                  <a
                    href={item.whitepaperHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm border transition-colors bg-white/[0.04] text-white hover:bg-white/10 border-white/25"
                  >
                    <FileText className="w-4 h-4" />
                    {viewWhitepaperLabel}
                  </a>
                )}
                {item.hasDeepTech && item.deepTechHref && (
                  <Link
                    href={item.deepTechHref}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent text-white hover:bg-white/10 font-medium text-sm border border-white/25 transition-colors"
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
  const [domainsOpen, setDomainsOpen] = useState(false)

  const renderDomainBlocks = (keyPrefix: string) => (
    <>
      <div className="mb-6">
        <h3 className="page-h3 text-white mb-1">{mediumTermLabel}</h3>
        <p className="page-caption text-white/55 mb-4">{mediumTermSubtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {mediumTermItems.map((item) => (
            <FrontierItemCard
              key={`${keyPrefix}-${item.key}`}
              item={item}
              viewWhitepaperLabel={viewWhitepaperLabel}
              viewDeepLabel={viewDeepLabel}
              expandLabel={expandLabel}
              collapseLabel={collapseLabel}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="page-h3 text-white mb-1">{longTermLabel}</h3>
        <p className="page-caption text-white/55 mb-4">{longTermSubtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {longTermItems.map((item) => (
            <FrontierItemCard
              key={`${keyPrefix}-${item.key}`}
              item={item}
              viewWhitepaperLabel={viewWhitepaperLabel}
              viewDeepLabel={viewDeepLabel}
              expandLabel={expandLabel}
              collapseLabel={collapseLabel}
            />
          ))}
        </div>
      </div>
    </>
  )

  return (
    <Card
      id="frontier"
      className="p-4 sm:p-8 lg:p-10 gap-4 bg-white/[0.03] border border-white/12 hover:border-white/25  transition-all scroll-mt-20"
    >
      <div className="mb-4 lg:mb-8 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h2 className="page-h2 text-white">{sectionTitle}</h2>
          <span className="px-3 py-1 bg-white/10 text-white/80 border border-white/15 rounded-full page-caption font-medium">
            {sectionBadge}
          </span>
        </div>
        <p className="page-body text-white/55 break-words">{sectionSubtitle}</p>
      </div>

      <div className="hidden lg:block">{renderDomainBlocks("pc")}</div>
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setDomainsOpen((open) => !open)}
          className="flex items-center gap-1.5 min-h-[44px] font-medium page-caption touch-manipulation transition-colors text-white/80 hover:text-white"
        >
          {domainsOpen ? collapseLabel : expandLabel}
          <ChevronDown className={`w-4 h-4 transition-transform ${domainsOpen ? "rotate-180" : ""}`} />
        </button>
        {domainsOpen ? <div className="mt-4">{renderDomainBlocks("mobile")}</div> : null}
      </div>
    </Card>
  )
}
