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
  extremeTagline: string
  extremeItem1: string
  extremeItem2: string
  extremeItem3: string
  structuralTitle: string
  structuralItem1: string
  structuralItem2: string
  physicsTitle: string
  physicsItem1: string
  physicsItem2: string
  physicsNote: string
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
    <div className="relative h-full min-h-0 rounded-xl border border-white/12 bg-white/[0.03] text-left p-3 lg:px-6 lg:py-4 flex flex-col">
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
    <div
      className={cn(
        "border-l border-white/35 text-left",
        compact ? "pl-3 space-y-1" : "pl-4 space-y-1.5"
      )}
    >
      <p className={cn("text-white font-medium", compact ? "page-caption" : "page-body")}>
        <ChemText text={bonding} />
      </p>
      <p className={cn("text-white font-medium", compact ? "page-caption" : "page-body")}>
        {stress}
      </p>
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
    <div className="flex w-full flex-col items-center rounded-2xl border border-white/25 bg-white/[0.04] px-8 py-8 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[#2A7FC4] shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
        <Sparkles className="h-8 w-8 text-white" />
      </div>
      <h3 className="page-h4 mb-4 text-white">{title}</h3>
      <div className="w-fit mx-auto">
        <KernelPills bonding={bonding} stress={stress} />
      </div>
    </div>
  )
}

/** 与该行卡片中线对齐的水平导线 */
function CardRail() {
  return (
    <div className="relative h-full min-h-[2.5rem]" aria-hidden>
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/35" />
      <div className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50" />
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

function WindowBody({
  tagline,
  items,
  note,
  compact = false,
}: {
  tagline?: string
  items: string[]
  note?: string
  compact?: boolean
}) {
  if (compact) {
    return (
      <div className="space-y-1">
        {tagline ? <p className="page-caption text-white/50">{tagline}</p> : null}
        <p className="page-caption leading-snug text-white/65">{items.join(" · ")}</p>
        {note ? <p className="page-caption text-white/45">{note}</p> : null}
      </div>
    )
  }

  return (
    <div>
      {tagline ? <p className="page-caption text-white/50 mb-2">{tagline}</p> : null}
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {note ? (
        <p className="page-caption text-white/45 mt-3 pt-2.5 border-t border-white/10">{note}</p>
      ) : null}
    </div>
  )
}

function SplitRow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      className="grid items-start gap-x-3 rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2.5"
      style={{ gridTemplateColumns: mobileWindowCols }}
    >
      <h4 className="page-h3 min-w-0 text-white">{title}</h4>
      <div className="min-w-0">{children}</div>
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
      <StageCard title={s.stage01Title}>
        {s.stage01Desc}
      </StageCard>
      <StageCard title={s.stage02Title}>
        {s.stage02Desc}
      </StageCard>
      <StageCard title={s.stage03Title}>
        {s.stage03Desc}
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
        "w-full rounded-3xl border border-white/12 bg-white/[0.03] p-4 sm:p-6 lg:p-6",
        isEn && "tracking-tight"
      )}
    >
      <div
        className="hidden lg:grid lg:gap-y-4"
        style={{ gridTemplateColumns: "1.05fr 40px 0.92fr 40px 1.05fr" }}
      >
        <div className="col-start-1 row-start-1">
          <ColumnHead>{s.evolutionPath}</ColumnHead>
        </div>
        <div className="col-start-5 row-start-1">
          <ColumnHead>{s.applicationWindow}</ColumnHead>
        </div>

        <div className="col-start-1 row-start-2 min-w-0">
          <StageCard connect="right" title={s.stage01Title}>
            {s.stage01Desc}
          </StageCard>
        </div>
        <div className="col-start-2 row-start-2">
          <CardRail />
        </div>
        <div className="col-start-3 row-start-2 row-span-3 relative flex min-w-0 items-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/35" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/35" aria-hidden />
          <KernelHub {...kernelProps} />
        </div>
        <div className="col-start-4 row-start-2">
          <CardRail />
        </div>
        <div className="col-start-5 row-start-2 min-w-0">
          <StageCard connect="left" title={s.extremeConditions}>
            <WindowBody
              tagline={s.extremeTagline}
              items={[s.extremeItem1, s.extremeItem2, s.extremeItem3]}
            />
          </StageCard>
        </div>

        <div className="col-start-1 row-start-3 min-w-0">
          <StageCard connect="right" title={s.stage02Title}>
            {s.stage02Desc}
          </StageCard>
        </div>
        <div className="col-start-2 row-start-3">
          <CardRail />
        </div>
        <div className="col-start-4 row-start-3">
          <CardRail />
        </div>
        <div className="col-start-5 row-start-3 min-w-0">
          <StageCard connect="left" title={s.structuralTitle}>
            <WindowBody items={[s.structuralItem1, s.structuralItem2]} />
          </StageCard>
        </div>

        <div className="col-start-1 row-start-4 min-w-0">
          <StageCard connect="right" title={s.stage03Title}>
            {s.stage03Desc}
          </StageCard>
        </div>
        <div className="col-start-2 row-start-4">
          <CardRail />
        </div>
        <div className="col-start-4 row-start-4">
          <CardRail />
        </div>
        <div className="col-start-5 row-start-4 min-w-0">
          <StageCard connect="left" title={s.physicsTitle}>
            <WindowBody
              items={[s.physicsItem1, s.physicsItem2]}
              note={s.physicsNote}
            />
          </StageCard>
        </div>
      </div>

      <div className="space-y-2 lg:hidden">
        <ColumnHead>{s.evolutionPath}</ColumnHead>
        <div className="space-y-2">{stages}</div>
        <FlowJoin />
        <KernelHub compact {...kernelProps} />
        <FlowJoin />
        <ColumnHead>{s.applicationWindow}</ColumnHead>
        <div className="space-y-2">
          <SplitRow title={s.extremeConditions}>
            <WindowBody
              compact
              tagline={s.extremeTagline}
              items={[s.extremeItem1, s.extremeItem2, s.extremeItem3]}
            />
          </SplitRow>
          <SplitRow title={s.structuralTitle}>
            <WindowBody
              compact
              items={[s.structuralItem1, s.structuralItem2]}
            />
          </SplitRow>
          <SplitRow title={s.physicsTitle}>
            <WindowBody
              compact
              items={[s.physicsItem1, s.physicsItem2]}
              note={s.physicsNote}
            />
          </SplitRow>
        </div>
      </div>
    </div>
  )
}
