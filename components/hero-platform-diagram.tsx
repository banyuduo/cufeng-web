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

const cardBase =
  "flex flex-col flex-1 min-w-0 rounded-xl border border-[#0077b6]/35 bg-[#002244]/70 backdrop-blur-sm p-3 sm:p-4 text-center"

export function HeroPlatformDiagram({ strings }: { strings: HeroDiagramStrings }) {
  const s = strings
  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#0077b6]/40 bg-[#001a33]/60 overflow-hidden shadow-xl shadow-[#0077b6]/10">
      {/* 地基：熔固界面 作为视觉原点（整图灵魂） */}
      <div className="relative border-b border-[#0077b6]/40 bg-[#0a1628] px-4 py-3 sm:px-6 sm:py-4">
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 px-3 sm:px-4 rounded-xl border-2 border-[#00b4d8]/50 bg-[#001a33]/80 shadow-[0_0_20px_rgba(0,180,216,0.15)]"
          style={{ boxShadow: "0 0 24px rgba(0, 180, 216, 0.2), inset 0 0 0 1px rgba(0, 180, 216, 0.1)" }}
        >
          <span className="font-mono font-semibold text-[#7dd3fc] text-sm sm:text-base">sp²</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b4d8] shrink-0" />
          <span className="px-2.5 py-1 rounded-lg bg-[#002244] border border-[#00b4d8]/50 text-[#73DBFF] font-medium text-xs sm:text-sm">
            {s.layer4MeltLabel}
          </span>
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b4d8] shrink-0" />
          <span className="font-mono font-semibold text-[#7dd3fc] text-sm sm:text-base">sp³</span>
        </div>
      </div>

      {/* 水平流向：因→果 从底层技术核心（左）到市场愿景（右） */}
      <div className="px-3 py-4 sm:px-5 sm:py-5">
        <div className="flex flex-col lg:flex-row items-stretch gap-3 sm:gap-4">
          {/* 1. 底层技术核心（源头） */}
          <div className={`${cardBase} bg-[#0a1628]/95 border-[#0077b6]/50`}>
            <h4 className="text-[#7dd3fc] font-semibold text-xs sm:text-sm mb-2 sm:mb-2.5 uppercase tracking-wide opacity-90">
              {s.layer4Title}
            </h4>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-1.5">{s.layer4Line1}</p>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-1.5">{s.layer4Line2}</p>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed">{s.layer4Line3}</p>
          </div>

          <div className="flex items-center justify-center shrink-0 lg:py-0 py-0.5">
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00b4d8]/80" aria-hidden />
          </div>

          {/* 2. 物理效应桥梁 */}
          <div className={cardBase}>
            <div className="flex justify-center gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#001a33] border-2 border-[#00b4d8]/40 flex items-center justify-center shrink-0">
                <Cog className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b4d8] animate-[spin_20s_linear_infinite]" />
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#001a33] border-2 border-[#0077b6]/50 flex items-center justify-center shrink-0">
                <Atom className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7dd3fc]" />
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#001a33] border-2 border-[#00b4d8]/40 flex items-center justify-center shrink-0">
                <Cog className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b4d8] animate-[spin_15s_linear_infinite]" style={{ animationDirection: "reverse" }} />
              </div>
            </div>
            <h4 className="text-[#7dd3fc] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">{s.layer3Title}</h4>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{s.layer3Line1}</p>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed mt-1">{s.layer3Line2}</p>
          </div>

          <div className="flex items-center justify-center shrink-0 lg:py-0 py-0.5">
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00b4d8]/80" aria-hidden />
          </div>

          {/* 3. 价值产出 */}
          <div className={cardBase}>
            <div className="flex justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff9f43] shrink-0" />
              <Box className="w-4 h-4 sm:w-5 sm:h-5 text-[#54a0ff] shrink-0" />
              <CircuitBoard className="w-4 h-4 sm:w-5 sm:h-5 text-[#5f27cd] shrink-0" />
            </div>
            <h4 className="text-[#7dd3fc] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">{s.layer2Title}</h4>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-2">{s.layer2Text}</p>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[10px] sm:text-xs text-white/85">
              <span>{s.layer2Thermal}</span>
              <span className="text-white/50">·</span>
              <span>{s.layer2Mechanical}</span>
              <span className="text-white/50">·</span>
              <span>{s.layer2Electrical}</span>
            </div>
          </div>

          <div className="flex items-center justify-center shrink-0 lg:py-0 py-0.5">
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00b4d8]/80" aria-hidden />
          </div>

          {/* 4. 市场愿景与解决方案（结果） */}
          <div className={cardBase}>
            <div className="flex justify-center gap-1.5 text-[#7dd3fc]/90 mb-2 sm:mb-2.5">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </div>
            <h4 className="text-[#7dd3fc] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">{s.layer1Title}</h4>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{s.layer1Text}</p>
          </div>
        </div>
        {/* 流向说明：因→果，仅小屏显示 */}
        <p className="text-center text-[10px] sm:text-xs text-white/50 mt-3 lg:sr-only">
          从技术源头到市场愿景（因 → 果）
        </p>
      </div>
    </div>
  )
}
