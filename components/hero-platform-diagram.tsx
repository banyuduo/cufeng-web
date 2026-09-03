"use client"

import { ArrowDown } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { cn } from "@/lib/utils"

export type HeroDiagramStrings = {
  layer1Title: string
  layer1Text: string
  layer2Title: string
  layer2Text: string
  layer2Thermal: string
  layer2Mechanical: string
  layer2Electrical: string
  layer3Title: string
  layer3Line1: string
  layer3Line2: string
  layer4Title: string
  layer4Line1: string
  layer4Line2: string
  layer4Line3: string
  layer4MeltLabel: string
  sp2LayerLabel: string
  sp3LayerLabel: string
  atomicTitle: string
  applicationsTitle?: string
  applicationTim?: string
  applicationSubstrate?: string
  applicationDevices?: string
  applicationHint?: string
  limitsTitle?: string
  limitsLabel?: string
  mechanismTitle?: string
  mechanismItem1?: string
  mechanismItem2?: string
  mechanismItem3?: string
  mechanismItem4?: string
  mechanismItem5?: string
  mechanismItem6?: string
  platformAttr?: string
}

function Sp2Lattice({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 88 72"
      className={className}
      aria-hidden
      role="img"
    >
      <title>sp² hexagonal lattice</title>
      <g fill="none" stroke="currentColor" strokeLinejoin="round">
        <path d="M22 14 L34 8 L46 14 L46 26 L34 32 L22 26 Z" strokeWidth="1.4" />
        <path d="M46 14 L58 8 L70 14 L70 26 L58 32 L46 26 Z" strokeWidth="1.4" />
        <path d="M34 32 L46 26 L58 32 L58 44 L46 50 L34 44 Z" strokeWidth="1.4" />
        <path d="M10 32 L22 26 L34 32 L34 44 L22 50 L10 44 Z" strokeWidth="1.2" opacity="0.7" />
        <path d="M58 32 L70 26 L82 32 L82 44 L70 50 L58 44 Z" strokeWidth="1.2" opacity="0.7" />
      </g>
      <g fill="currentColor">
        <circle cx="34" cy="8" r="2.1" />
        <circle cx="46" cy="14" r="2.1" />
        <circle cx="58" cy="8" r="2.1" />
        <circle cx="22" cy="14" r="2.1" />
        <circle cx="70" cy="14" r="2.1" />
        <circle cx="34" cy="32" r="2.1" />
        <circle cx="58" cy="32" r="2.1" />
        <circle cx="46" cy="50" r="2.1" />
      </g>
    </svg>
  )
}

function CovalentBridge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 72"
      className={className}
      aria-hidden
      role="img"
    >
      <title>atomic covalent bridge</title>
      <g fill="none" stroke="currentColor" strokeLinejoin="round" opacity="0.75">
        <path d="M8 22 L20 16 L32 22 L32 34 L20 40 L8 34 Z" strokeWidth="1.3" />
        <path d="M20 40 L32 34 L32 46 L20 52 L8 46 L8 34" strokeWidth="1.15" />
      </g>
      <g fill="none" stroke="currentColor" strokeLinejoin="round" opacity="0.75">
        <path d="M88 18 L104 28 L104 48 L88 58 L72 48 L72 28 Z" strokeWidth="1.3" />
        <path d="M88 18 L88 58 M72 28 L104 48 M104 28 L72 48" strokeWidth="0.9" />
      </g>
      <line
        x1="32"
        y1="36"
        x2="72"
        y2="36"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="36" r="4.2" fill="#0B1F33" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="52" cy="36" r="5" fill="#0F4C81" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="72" cy="36" r="4.2" fill="#0B1F33" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function Sp3Tetrahedron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 76"
      className={className}
      aria-hidden
      role="img"
    >
      <title>sp³ tetrahedral carbon</title>
      <g fill="none" stroke="currentColor" strokeLinejoin="round">
        <path d="M40 8 L14 62 L66 62 Z" strokeWidth="1.5" />
        <path d="M40 8 L40 68" strokeWidth="1.2" opacity="0.55" strokeDasharray="3 2.5" />
        <path d="M14 62 L40 36 L66 62" strokeWidth="1.35" />
        <path d="M40 8 L40 36" strokeWidth="1.5" />
      </g>
      <circle cx="40" cy="36" r="4.5" fill="#0F4C81" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="40" cy="8" r="3.2" fill="currentColor" />
      <circle cx="14" cy="62" r="3.2" fill="currentColor" />
      <circle cx="66" cy="62" r="3.2" fill="currentColor" />
      <circle cx="40" cy="68" r="3" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

const panel =
  "flex flex-col min-w-0 rounded-xl border border-white/12 bg-white/[0.03] p-4 sm:p-5 lg:p-6 text-left"

function FlowArrow() {
  return (
    <div className="flex items-center justify-center py-1 sm:py-1.5 lg:py-2" aria-hidden>
      <ArrowDown className="w-4 h-4 lg:w-5 lg:h-5 text-white/40" />
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="page-h4 text-white mb-3 text-center text-balance px-1">
      {children}
    </h4>
  )
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "px-4 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-8",
        className
      )}
    >
      {children}
    </div>
  )
}

export function HeroPlatformDiagram({
  strings,
}: {
  strings: HeroDiagramStrings
  showLattice?: boolean
}) {
  const locale = useLocale()
  const isEn = locale === "en"
  const s = strings
  const hasApplications =
    Boolean(s.applicationsTitle) &&
    Boolean(s.applicationTim) &&
    Boolean(s.applicationSubstrate) &&
    Boolean(s.applicationDevices)
  const hasMechanism =
    Boolean(s.mechanismTitle) &&
    Boolean(s.mechanismItem1) &&
    Boolean(s.mechanismItem2)
  const hasLimits = Boolean(s.limitsTitle) && Boolean(s.limitsLabel)

  const chipText = cn(
    "text-center break-words",
    isEn
      ? "text-[11px] leading-snug sm:text-sm lg:text-base tracking-tight"
      : "text-[11px] leading-tight sm:text-sm lg:text-base"
  )

  const layers = [
    {
      key: "sp2",
      label: s.sp2LayerLabel,
      figure: <Sp2Lattice className="w-[92%] max-w-24 lg:max-w-[7.5rem] h-auto text-white/75" />,
    },
    {
      key: "bridge",
      label: s.layer4MeltLabel,
      figure: <CovalentBridge className="w-[94%] max-w-[7.5rem] lg:max-w-40 h-auto text-white/75" />,
    },
    {
      key: "sp3",
      label: s.sp3LayerLabel,
      figure: <Sp3Tetrahedron className="w-[88%] max-w-24 lg:max-w-[7.5rem] h-auto text-white/75" />,
    },
  ]

  return (
    <div
      data-diagram-locale={locale}
      className="w-full rounded-2xl border border-white/12 bg-white/[0.03] overflow-hidden"
    >
      {hasLimits && (
        <Section>
          <div className="rounded-xl border border-white/12 bg-white/[0.03] px-3 py-3.5 sm:px-5 sm:py-4 lg:px-8 lg:py-5 max-w-3xl mx-auto">
            <SectionTitle>{s.limitsTitle}</SectionTitle>
            <p
              className={cn(
                "page-caption text-white/70 text-center leading-relaxed",
                isEn && "text-pretty tracking-tight"
              )}
            >
              {s.limitsLabel}
            </p>
          </div>
        </Section>
      )}

      {hasLimits ? <FlowArrow /> : null}

      <Section className="border-t border-white/10">
        <SectionTitle>{s.layer2Title}</SectionTitle>
        <ul className="grid grid-cols-3 gap-1.5 sm:gap-3 lg:gap-4 mb-5 sm:mb-6 lg:mb-8">
          {[s.layer2Thermal, s.layer2Mechanical, s.layer2Electrical].map(
            (label) => (
              <li
                key={label}
                className={cn(
                  "rounded-lg border border-white/10 bg-white/[0.03] px-1.5 py-2 sm:px-3 sm:py-3 lg:px-4 lg:py-4 text-white/85",
                  chipText
                )}
              >
                {label}
              </li>
            )
          )}
        </ul>

        {hasMechanism && (
          <>
            <SectionTitle>{s.mechanismTitle}</SectionTitle>
            <div
              className={cn(
                "grid gap-2.5 sm:gap-3 lg:gap-4 mb-5 sm:mb-6 lg:mb-8",
                isEn ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-3"
              )}
            >
              {[
                [s.mechanismItem1, s.mechanismItem2],
                [s.mechanismItem3, s.mechanismItem4],
                [s.mechanismItem5, s.mechanismItem6],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 sm:px-3.5 sm:py-3.5 lg:px-4 lg:py-4 text-center h-full"
                >
                  <p
                    className={cn(
                      "font-medium text-white mb-1 text-balance",
                      isEn
                        ? "text-sm lg:text-base tracking-tight"
                        : "text-sm lg:text-base"
                    )}
                  >
                    {title}
                  </p>
                  <p
                    className={cn(
                      "text-white/70 leading-snug text-pretty",
                      isEn
                        ? "text-[13px] sm:text-sm lg:text-base tracking-tight"
                        : "text-sm lg:text-base"
                    )}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        <div className={cn(panel, "max-w-3xl mx-auto w-full")}>
          <h4 className="page-h4 text-white mb-2 text-balance">
            {s.layer3Title}
          </h4>
          <p
            className={cn(
              "page-caption text-white/90 leading-relaxed",
              isEn && "text-pretty tracking-tight"
            )}
          >
            {s.layer3Line1}
          </p>
          <p
            className={cn(
              "page-caption text-white/80 leading-relaxed mt-1",
              isEn && "text-pretty tracking-tight"
            )}
          >
            {s.layer3Line2}
          </p>
        </div>
      </Section>

      <FlowArrow />

      <Section className="border-t border-white/10">
        <SectionTitle>{s.layer4Title}</SectionTitle>
        <p
          className={cn(
            "page-caption text-white/55 text-center mb-4 text-balance",
            isEn && "tracking-tight"
          )}
        >
          {s.atomicTitle}
        </p>
        <div className="rounded-xl border border-white/12 bg-white/[0.03] overflow-hidden mb-4 sm:mb-5">
          <div className="grid grid-cols-3 divide-x divide-white/12">
            {layers.map((layer) => (
              <div
                key={layer.key}
                className="flex flex-col items-center justify-start px-1 py-2.5 sm:px-3 sm:py-5 lg:px-4 lg:py-6 min-w-0"
              >
                <div className="flex h-[4.75rem] sm:h-24 lg:h-28 w-full items-center justify-center">
                  {layer.figure}
                </div>
                <p
                  className={cn(
                    "mt-1.5 sm:mt-3 text-white font-semibold text-center break-words",
                    isEn
                      ? "text-[10px] leading-snug sm:text-sm lg:text-base tracking-tight min-h-[2.4rem] sm:min-h-[2.6rem] lg:min-h-0"
                      : "text-[11px] leading-tight sm:text-sm lg:text-base"
                  )}
                >
                  {layer.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={cn(panel, "max-w-3xl mx-auto w-full")}>
          <p
            className={cn(
              "page-caption text-white/90 leading-relaxed mb-1.5",
              isEn && "text-pretty tracking-tight"
            )}
          >
            {s.layer4Line1}
          </p>
          <p
            className={cn(
              "page-caption text-white/80 leading-relaxed mb-1.5",
              isEn && "text-pretty tracking-tight"
            )}
          >
            {s.layer4Line2}
          </p>
          <p
            className={cn(
              "page-caption text-white/80 leading-relaxed",
              isEn && "text-pretty tracking-tight"
            )}
          >
            {s.layer4Line3}
          </p>
        </div>
      </Section>

      {hasApplications && (
        <>
          <FlowArrow />
          <Section className="border-t border-white/10">
            <SectionTitle>{s.applicationsTitle}</SectionTitle>
            <div
              className={cn(
                "grid gap-1.5 sm:gap-3 lg:gap-4",
                isEn ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-3"
              )}
            >
              {[s.applicationTim, s.applicationSubstrate, s.applicationDevices].map(
                (label) => (
                  <p
                    key={label}
                    className={cn(
                      "text-white/80 rounded-lg border border-white/10 bg-white/[0.03] px-1.5 py-2 sm:px-3 sm:py-3 lg:px-4 lg:py-4",
                      chipText
                    )}
                  >
                    {label}
                  </p>
                )
              )}
            </div>
            {s.applicationHint ? (
              <p
                className={cn(
                  "page-caption text-center text-white/55 mt-3 text-balance",
                  isEn && "tracking-tight"
                )}
              >
                {s.applicationHint}
              </p>
            ) : null}
          </Section>
        </>
      )}

      {s.platformAttr ? (
        <div className="border-t border-white/10 px-4 py-4 sm:px-6 sm:py-5 lg:px-10 lg:py-6">
          <p
            className={cn(
              "page-caption text-white/85 text-center leading-relaxed max-w-2xl mx-auto text-balance",
              isEn && "tracking-tight text-pretty"
            )}
          >
            {s.platformAttr}
          </p>
        </div>
      ) : null}
    </div>
  )
}
