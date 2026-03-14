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
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#0077b6]/40 bg-[#001a33]/60 px-3 py-4 sm:px-5 sm:py-5 shadow-xl shadow-[#0077b6]/10">
      {/* 水平流向：愿景 → 价值产出 → 物理效应桥梁 → 底层技术核心 */}
      <div className="flex flex-col lg:flex-row items-stretch gap-2 sm:gap-3">
        {/* 1. 市场愿景与解决方案 */}
        <div className={cardBase}>
          <div className="flex justify-center gap-1.5 text-[#7dd3fc]/90 mb-2">
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </div>
          <h4 className="text-[#7dd3fc] font-semibold text-xs sm:text-sm mb-1.5">{s.layer1Title}</h4>
          <p className="text-white/90 text-xs leading-snug">{s.layer1Text}</p>
        </div>

        <div className="flex items-center justify-center shrink-0 lg:py-0 py-1">
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00b4d8]/70" aria-hidden />
        </div>

        {/* 2. 价值产出 */}
        <div className={cardBase}>
          <div className="flex justify-center gap-1.5 mb-2">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff9f43]" />
            <Box className="w-4 h-4 sm:w-5 sm:h-5 text-[#54a0ff]" />
            <CircuitBoard className="w-4 h-4 sm:w-5 sm:h-5 text-[#5f27cd]" />
          </div>
          <h4 className="text-[#7dd3fc] font-semibold text-xs sm:text-sm mb-1.5">{s.layer2Title}</h4>
          <p className="text-white/85 text-xs leading-snug mb-2">{s.layer2Text}</p>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-0.5 text-[10px] sm:text-xs text-white/80">
            <span>{s.layer2Thermal}</span>
            <span>·</span>
            <span>{s.layer2Mechanical}</span>
            <span>·</span>
            <span>{s.layer2Electrical}</span>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 lg:py-0 py-1">
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00b4d8]/70" aria-hidden />
        </div>

        {/* 3. 物理效应桥梁 */}
        <div className={cardBase}>
          <div className="flex justify-center gap-2 mb-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#001a33] border-2 border-[#00b4d8]/40 flex items-center justify-center">
              <Cog className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b4d8] animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#001a33] border-2 border-[#0077b6]/50 flex items-center justify-center">
              <Atom className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7dd3fc]" />
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#001a33] border-2 border-[#00b4d8]/40 flex items-center justify-center">
              <Cog className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b4d8] animate-[spin_15s_linear_infinite]" style={{ animationDirection: "reverse" }} />
            </div>
          </div>
          <h4 className="text-[#7dd3fc] font-semibold text-xs sm:text-sm mb-1.5">{s.layer3Title}</h4>
          <p className="text-white/85 text-xs leading-snug">{s.layer3Line1}</p>
          <p className="text-white/75 text-xs leading-snug mt-0.5">{s.layer3Line2}</p>
        </div>

        <div className="flex items-center justify-center shrink-0 lg:py-0 py-1">
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00b4d8]/70" aria-hidden />
        </div>

        {/* 4. 底层技术核心 */}
        <div className={`${cardBase} bg-[#0a1628]/90 border-[#0077b6]/45`}>
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-2">
            <span className="font-mono text-[#7dd3fc] text-xs">sp²</span>
            <ArrowRight className="w-3 h-3 text-[#00b4d8]" />
            <span className="px-1.5 py-0.5 rounded bg-[#002244] border border-[#00b4d8]/40 text-[#73DBFF] text-[10px] sm:text-xs">
              {s.layer4MeltLabel}
            </span>
            <ArrowLeft className="w-3 h-3 text-[#00b4d8]" />
            <span className="font-mono text-[#7dd3fc] text-xs">sp³</span>
          </div>
          <h4 className="text-[#7dd3fc] font-semibold text-xs sm:text-sm mb-1.5">{s.layer4Title}</h4>
          <p className="text-white/85 text-xs leading-snug">{s.layer4Line1}</p>
          <p className="text-white/80 text-xs leading-snug mt-0.5">{s.layer4Line2}</p>
          <p className="text-white/80 text-xs leading-snug mt-0.5">{s.layer4Line3}</p>
        </div>
      </div>
      {/* 流向说明：仅在小屏竖排时显示 */}
      <p className="text-center text-[10px] text-white/50 mt-3 lg:sr-only">
        ← 从愿景到技术核心的层次关系 →
      </p>
    </div>
  )
}
