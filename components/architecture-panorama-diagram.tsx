"use client"

import type { ReactNode } from "react"
import { Sparkles } from "lucide-react"
import { ChemText } from "@/components/chem-text"
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
    <div className="text-center mb-3 lg:mb-0">
      <h3 className="page-h4 text-white mb-2">{children}</h3>
      <div className="h-px bg-white/15" />
    </div>
  )
}

function StageCard({
  kicker,
  title,
  children,
  connect,
}: {
  kicker?: string
  title: string
  children: ReactNode
  connect?: "left" | "right"
}) {
  return (
    <div className="relative h-full min-h-0 rounded-xl border border-white/12 bg-white/[0.03] text-left p-3 lg:p-6 flex flex-col">
      {connect === "right" ? (
        <span className="hidden lg:block absolute top-1/2 right-0 z-[1] h-px w-2.5 translate-x-full -translate-y-1/2 bg-white/35" />
      ) : null}
      {connect === "left" ? (
        <span className="hidden lg:block absolute top-1/2 left-0 z-[1] h-px w-2.5 -translate-x-full -translate-y-1/2 bg-white/35" />
      ) : null}
      <div>
        {kicker ? <p className="page-caption text-white/45 mb-1">{kicker}</p> : null}
        <h4 className="page-h3 text-white mb-2">{title}</h4>
      </div>
      <div className="page-body text-white/70 min-w-0">{children}</div>
    </div>
  )
}

/** 手机端不用 Tailwind 任意 grid-cols：逗号会被吃掉，列定义写在 style 里 */
const mobileWindowCols = "minmax(0,1.2fr) minmax(0,0.8fr)"
const mobileKernelCols = "minmax(0,1fr) minmax(9rem, max-content)"

function KernelPills({
  bonding,
  stress,
  compact = false,
}: {
  bonding: string
  stress: string
  compact?: boolean
}) {
  return (
    <div className={compact ? "space-y-1.5" : "space-y-2 lg:space-y-3"}>
      <div
        className={cn(
          "rounded-lg border border-white/12 bg-white/[0.03]",
          compact ? "px-2 py-1.5" : "px-3 py-2 lg:px-4"
        )}
      >
        <p className={cn("text-white font-medium", compact ? "page-caption leading-snug" : "page-body")}>
          <ChemText text={bonding} />
        </p>
      </div>
      <div
        className={cn(
          "rounded-lg border border-white/12 bg-white/[0.03]",
          compact ? "px-2 py-1.5" : "px-3 py-2 lg:px-4"
        )}
      >
        <p className={cn("text-white font-medium", compact ? "page-caption leading-snug" : "page-body")}>
          {stress}
        </p>
      </div>
    </div>
  )
}

function KernelHub({
  title,
  bonding,
  stress,
  compact = false,
}: {
  title: string
  bonding: string
  stress: string
  compact?: boolean
}) {
  if (compact) {
    return (
      <div
        className="grid w-full items-center gap-x-4 rounded-2xl border border-white/25 bg-white/[0.04] px-3 py-2.5"
        style={{ gridTemplateColumns: mobileKernelCols }}
      >
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2A7FC4] shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
            <Sparkles className="h-7 w-7 text-white" />
          </div>
          <h3 className="page-h3 min-w-0 text-white">{title}</h3>
        </div>
        <div className="min-w-0">
          <KernelPills compact bonding={bonding} stress={stress} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-white/25 bg-white/[0.04] p-8 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-[#2A7FC4] shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
        <Sparkles className="h-8 w-8 text-white" />
      </div>
      <h3 className="page-h4 mb-4 text-white">{title}</h3>
      <div className="w-full">
        <KernelPills bonding={bonding} stress={stress} />
      </div>
    </div>
  )
}

/** 每张卡片一条水平导线，直接接到等高的内核边框 */
function ForkRail() {
  return (
    <div className="relative grid h-full min-h-[28rem] grid-rows-3 gap-6" aria-hidden>
      {[0, 1, 2].map((i) => (
        <div key={i} className="relative">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/35" />
          <div className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50" />
        </div>
      ))}
    </div>
  )
}

function FlowJoin() {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden>
      <div className="h-4 w-px bg-white/25" />
      <div className="size-1.5 rounded-full bg-[#2A7FC4]" />
      <div className="h-4 w-px bg-white/25" />
    </div>
  )
}

function SplitRow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      className="grid items-center gap-x-3 rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2.5"
      style={{ gridTemplateColumns: mobileWindowCols }}
    >
      <h4 className="page-h3 min-w-0 text-white">{title}</h4>
      <div className="page-caption min-w-0 leading-snug text-white/65">{children}</div>
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

  const stages = (connect?: "left" | "right") => (
    <>
      <StageCard connect={connect} kicker="Stage 01" title={s.stage01Title}>
        {s.stage01Desc}
      </StageCard>
      <StageCard connect={connect} kicker="Stage 02" title={s.stage02Title}>
        {s.stage02Desc}
      </StageCard>
      <StageCard connect={connect} kicker="Stage 03" title={s.stage03Title}>
        {s.stage03Desc}
      </StageCard>
    </>
  )

  const windows = (connect?: "left" | "right") => (
    <>
      <StageCard connect={connect} title={s.extremeConditions}>
        <ul className="space-y-1.5">
          <li>{s.extremeItem1}</li>
          <li>{s.extremeItem2}</li>
          <li>{s.extremeItem3}</li>
        </ul>
      </StageCard>
      <StageCard connect={connect} title={s.superconductorPlatform}>
        {s.theoryExploration}
      </StageCard>
      <StageCard connect={connect} title={s.quantumPotential}>
        {s.visionPlanning}
      </StageCard>
    </>
  )

  const kernelProps = {
    title: s.coreKernel,
    bonding: s.chemicalBonding,
    stress: s.stressRegulation,
  }

  return (
    <div
      data-diagram-locale={locale}
      className={cn(
        "w-full rounded-3xl border border-white/12 bg-white/[0.03] p-4 sm:p-6 lg:p-10",
        isEn && "tracking-tight"
      )}
    >
      <div
        className="hidden lg:grid lg:items-stretch lg:gap-y-6"
        style={{ gridTemplateColumns: "1.05fr 40px 0.92fr 40px 1.05fr" }}
      >
        <ColumnHead>{s.evolutionPath}</ColumnHead>
        <div />
        <div />
        <div />
        <ColumnHead>{s.applicationWindow}</ColumnHead>

        <div className="grid min-h-[28rem] min-w-0 grid-rows-3 gap-6">{stages("right")}</div>
        <ForkRail />
        <div className="flex min-h-[28rem] min-w-0 items-stretch">
          <KernelHub {...kernelProps} />
        </div>
        <ForkRail />
        <div className="grid min-h-[28rem] min-w-0 grid-rows-3 gap-6">{windows("left")}</div>
      </div>

      <div className="space-y-2 lg:hidden">
        <ColumnHead>{s.evolutionPath}</ColumnHead>
        <div className="space-y-2">{stages()}</div>
        <FlowJoin />
        <KernelHub compact {...kernelProps} />
        <FlowJoin />
        <ColumnHead>{s.applicationWindow}</ColumnHead>
        <div className="space-y-2">
          <SplitRow title={s.extremeConditions}>
            {[s.extremeItem1, s.extremeItem2, s.extremeItem3].join(" · ")}
          </SplitRow>
          <SplitRow title={s.superconductorPlatform}>{s.theoryExploration}</SplitRow>
          <SplitRow title={s.quantumPotential}>{s.visionPlanning}</SplitRow>
        </div>
      </div>
    </div>
  )
}
