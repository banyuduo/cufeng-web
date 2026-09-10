"use client"

import type { ReactNode } from "react"
import { Sparkles } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { cn } from "@/lib/utils"

export type ArchitecturePanoramaStrings = {
  evolutionPath: string
  stage01Title: string
  stage01Desc: string
  stage02Title: string
  stage02Desc: string
  stage03Title: string
  stage03Desc: string
  coreKernel: string
  chemicalBonding: string
  stressRegulation: string
  applicationWindow: string
  extremeConditions: string
  extremeItem1: string
  extremeItem2: string
  extremeItem3: string
  superconductorPlatform: string
  theoryExploration: string
  quantumPotential: string
  visionPlanning: string
}

function ColumnHead({ children }: { children: string }) {
  return (
    <div className="text-center mb-3 lg:mb-6">
      <h3 className="page-h4 text-white mb-2">{children}</h3>
      <div className="h-px bg-white/15" />
    </div>
  )
}

function StageCard({
  kicker,
  title,
  children,
}: {
  kicker?: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="p-3 lg:p-6 rounded-xl border border-white/12 bg-white/[0.03] lg:flex-1">
      {kicker ? <p className="page-caption text-white/45 mb-1">{kicker}</p> : null}
      <h4 className="page-h3 text-white mb-2">{title}</h4>
      <div className="page-body text-white/70">{children}</div>
    </div>
  )
}

function Kernel({
  title,
  bonding,
  stress,
}: {
  title: string
  bonding: string
  stress: string
}) {
  return (
    <div className="w-full p-4 lg:p-8 rounded-2xl border border-white/20 bg-white/[0.04] text-center">
      <div className="w-11 h-11 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-5 rounded-xl bg-[#0F4C81] flex items-center justify-center">
        <Sparkles className="w-5 h-5 lg:w-8 lg:h-8 text-white" />
      </div>
      <h3 className="page-h4 text-white mb-3 lg:mb-4">{title}</h3>
      <div className="space-y-2 lg:space-y-3">
        <div className="px-3 py-2 lg:px-4 rounded-lg border border-white/12 bg-white/[0.03]">
          <p className="page-body text-white font-medium">{bonding}</p>
        </div>
        <div className="px-3 py-2 lg:px-4 rounded-lg border border-white/12 bg-white/[0.03]">
          <p className="page-body text-white font-medium">{stress}</p>
        </div>
      </div>
    </div>
  )
}

export function ArchitecturePanoramaDiagram({
  strings: s,
}: {
  strings: ArchitecturePanoramaStrings
}) {
  const locale = useLocale()
  const isEn = locale === "en"

  const stages = (
    <>
      <StageCard kicker="Stage 01" title={s.stage01Title}>
        {s.stage01Desc}
      </StageCard>
      <StageCard kicker="Stage 02" title={s.stage02Title}>
        {s.stage02Desc}
      </StageCard>
      <StageCard kicker="Stage 03" title={s.stage03Title}>
        {s.stage03Desc}
      </StageCard>
    </>
  )

  const windows = (
    <>
      <StageCard title={s.extremeConditions}>
        <ul className="space-y-1.5 text-left">
          <li>{s.extremeItem1}</li>
          <li>{s.extremeItem2}</li>
          <li>{s.extremeItem3}</li>
        </ul>
      </StageCard>
      <StageCard title={s.superconductorPlatform}>
        {s.theoryExploration}
      </StageCard>
      <StageCard title={s.quantumPotential}>{s.visionPlanning}</StageCard>
    </>
  )

  return (
    <div
      data-diagram-locale={locale}
      className={cn(
        "w-full rounded-3xl border border-white/12 bg-white/[0.03] p-4 sm:p-6 lg:p-10",
        isEn && "tracking-tight"
      )}
    >
      {/* 桌面：原左右结构 */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-stretch relative">
        <div className="flex flex-col gap-6 min-h-0">
          <ColumnHead>{s.evolutionPath}</ColumnHead>
          {stages}
        </div>

        <div className="flex items-center justify-center relative">
          <div className="hidden lg:block absolute left-0 top-1/2 w-1/2 h-px bg-white/15 -translate-x-4" />
          <div className="hidden lg:block absolute right-0 top-1/2 w-1/2 h-px bg-white/15 translate-x-4" />
          <div className="relative z-10 w-full">
            <Kernel title={s.coreKernel} bonding={s.chemicalBonding} stress={s.stressRegulation} />
          </div>
        </div>

        <div className="flex flex-col gap-6 min-h-0">
          <ColumnHead>{s.applicationWindow}</ColumnHead>
          {windows}
        </div>
      </div>

      {/* 手机：同一张图，改为路径 → 内核 → 视窗 */}
      <div className="lg:hidden space-y-3">
        <ColumnHead>{s.evolutionPath}</ColumnHead>
        <div className="space-y-2">{stages}</div>

        <div className="flex justify-center py-1" aria-hidden>
          <div className="w-px h-4 bg-white/20" />
        </div>
        <Kernel title={s.coreKernel} bonding={s.chemicalBonding} stress={s.stressRegulation} />
        <div className="flex justify-center py-1" aria-hidden>
          <div className="w-px h-4 bg-white/20" />
        </div>

        <ColumnHead>{s.applicationWindow}</ColumnHead>
        <div className="space-y-2">{windows}</div>
      </div>
    </div>
  )
}
