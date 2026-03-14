"use client"

import {
  Cpu,
  Zap,
  Flame,
  Box,
  CircuitBoard,
  Cog,
  Atom,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"

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
}

export function HeroPlatformDiagram({ strings }: { strings: HeroDiagramStrings }) {
  const s = strings
  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-5">
      {/* Layer 1: Banner - 市场愿景与解决方案 */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#001a33] via-[#002244] to-[#001a33] border border-[#0077b6]/40 p-6 sm:p-8">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-2 right-8 w-24 h-16 rounded border border-[#00b4d8]/30 bg-[#00b4d8]/5" />
          <div className="absolute top-4 right-20 w-20 h-12 rounded border border-[#00b4d8]/25 bg-[#00b4d8]/5" />
          <div className="absolute bottom-4 left-12 w-16 h-20 rounded-lg border border-[#00b4d8]/25 bg-[#00b4d8]/5" />
        </div>
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 text-[#7dd3fc]/90">
            <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
            <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <p className="page-lead text-white/95 text-center text-lg sm:text-xl">
            {s.layer1Text}
          </p>
        </div>
        <p className="relative z-10 text-center text-xs sm:text-sm text-white/60 mt-2">
          {s.layer1Title}
        </p>
      </div>

      {/* Layer 2: 价值产出 - 三柱 */}
      <div className="rounded-xl border border-[#0077b6]/30 bg-[#002244]/50 backdrop-blur-sm p-5 sm:p-6">
        <p className="text-center text-[#7dd3fc] font-medium text-sm sm:text-base mb-4">
          {s.layer2Title}
        </p>
        <p className="text-center text-white/90 text-sm sm:text-base mb-5">
          {s.layer2Text}
        </p>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <div className="flex flex-col items-center rounded-lg bg-[#001a33]/80 border border-[#00b4d8]/25 p-4 sm:p-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0077b6]/20 border border-[#00b4d8]/30 flex items-center justify-center mb-2">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff9f43]" />
            </div>
            <span className="text-white/90 text-xs sm:text-sm font-medium text-center">
              {s.layer2Thermal}
            </span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-[#001a33]/80 border border-[#00b4d8]/25 p-4 sm:p-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0077b6]/20 border border-[#00b4d8]/30 flex items-center justify-center mb-2">
              <Box className="w-5 h-5 sm:w-6 sm:h-6 text-[#54a0ff]" />
            </div>
            <span className="text-white/90 text-xs sm:text-sm font-medium text-center">
              {s.layer2Mechanical}
            </span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-[#001a33]/80 border border-[#00b4d8]/25 p-4 sm:p-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0077b6]/20 border border-[#00b4d8]/30 flex items-center justify-center mb-2">
              <CircuitBoard className="w-5 h-5 sm:w-6 sm:h-6 text-[#5f27cd]" />
            </div>
            <span className="text-white/90 text-xs sm:text-sm font-medium text-center">
              {s.layer2Electrical}
            </span>
          </div>
        </div>
      </div>

      {/* Layer 3: 物理效应桥梁 - 齿轮/机制 */}
      <div className="rounded-xl border border-[#0077b6]/30 bg-[#002244]/50 backdrop-blur-sm p-5 sm:p-6">
        <p className="text-center text-[#7dd3fc] font-medium text-sm sm:text-base mb-4">
          {s.layer3Title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-4">
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#001a33] border-2 border-[#00b4d8]/40">
            <Cog className="w-6 h-6 sm:w-7 sm:h-7 text-[#00b4d8] animate-[spin_20s_linear_infinite]" />
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#001a33] border-2 border-[#0077b6]/50 flex items-center justify-center">
            <Atom className="w-5 h-5 sm:w-6 sm:h-6 text-[#7dd3fc]" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#001a33] border-2 border-[#00b4d8]/40">
            <Cog className="w-6 h-6 sm:w-7 sm:h-7 text-[#00b4d8] animate-[spin_15s_linear_infinite]" style={{ animationDirection: "reverse" }} />
          </div>
        </div>
        <p className="text-center text-white/90 text-sm sm:text-base">
          {s.layer3Line1}
        </p>
        <p className="text-center text-white/85 text-sm sm:text-base mt-1">
          {s.layer3Line2}
        </p>
      </div>

      {/* Layer 4: 底层技术核心 - 基座 + sp² ↔ 熔固 ↔ sp³ */}
      <div className="rounded-xl overflow-hidden bg-[#0a1628] border border-[#0077b6]/40 p-6 sm:p-8">
        <p className="text-center text-[#7dd3fc] font-medium text-sm sm:text-base mb-4">
          {s.layer4Title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-5">
          <span className="font-mono text-[#7dd3fc] text-sm sm:text-base">sp²</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b4d8]" />
          <span className="px-2 py-1 rounded bg-[#002244] border border-[#00b4d8]/40 text-[#73DBFF] text-xs sm:text-sm">
            {s.layer4MeltLabel}
          </span>
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b4d8]" />
          <span className="font-mono text-[#7dd3fc] text-sm sm:text-base">sp³</span>
        </div>
        <div className="space-y-2 text-center text-white/90 text-sm sm:text-base">
          <p>{s.layer4Line1}</p>
          <p>{s.layer4Line2}</p>
          <p>{s.layer4Line3}</p>
        </div>
      </div>
    </div>
  )
}
