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
  ArrowDown,
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
      {/* 地基：微观晶格演变 sp² 蜂窝 → 过渡区(原子级共价桥接) → sp³ 四面体 */}
      <div className="relative border-b border-[#0077b6]/40 bg-[#0a1628] px-3 py-4 sm:px-5 sm:py-5">
        <div
          className="relative flex items-stretch justify-between gap-0 rounded-xl overflow-hidden border border-[#00b4d8]/40 bg-[#001a33]/90 min-h-[72px] sm:min-h-[84px]"
          style={{ boxShadow: "0 0 20px rgba(0, 180, 216, 0.12), inset 0 0 0 1px rgba(0, 180, 216, 0.08)" }}
        >
          {/* 左侧：sp² 六边形蜂窝（石墨烯意象） */}
          <div className="flex flex-col items-center justify-center flex-[0_0_28%] sm:flex-[0_0_30%] py-3 px-2">
            <span className="font-mono font-semibold text-[#7dd3fc] text-sm mb-2">sp²</span>
            <svg viewBox="0 0 56 24" className="w-full max-w-[72px] sm:max-w-[88px] h-auto text-[#00b4d8]/75" aria-hidden>
              <path d="M14 2 L22 6 L22 14 L14 18 L6 14 L6 6 Z" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.95" />
              <path d="M28 2 L36 6 L36 14 L28 18 L20 14 L20 6 Z" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.95" />
              <path d="M42 2 L50 6 L50 14 L42 18 L34 14 L34 6 Z" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.95" />
              <path d="M21 10 L28 14 L28 22 L21 26 L14 22 L14 14 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
              <path d="M35 10 L42 14 L42 22 L35 26 L28 22 L28 14 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            </svg>
          </div>

          {/* 中间：过渡区 + 醒目标注 */}
          <div className="flex flex-1 flex-col items-center justify-center px-2 sm:px-4 py-3 bg-gradient-to-r from-[#002244]/90 via-[#002a50]/95 to-[#002244]/90 border-x border-[#00b4d8]/25">
            <span className="page-caption text-[#73DBFF] font-semibold text-center leading-tight drop-shadow-sm">
              {s.layer4MeltLabel}
            </span>
            <svg viewBox="0 0 60 20" className="mt-2 w-full max-w-[100px] sm:max-w-[120px] h-auto opacity-60" aria-hidden>
              <defs>
                <linearGradient id="trans-grad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path d="M0 10 Q15 4 30 10 T60 10" fill="none" stroke="url(#trans-grad)" strokeWidth="1.5" className="text-[#00b4d8]" />
              <circle cx="30" cy="10" r="2" fill="currentColor" className="text-[#73DBFF]" />
            </svg>
          </div>

          {/* 右侧：sp³ 四面体/金刚石晶格意象 */}
          <div className="flex flex-col items-center justify-center flex-[0_0_28%] sm:flex-[0_0_30%] py-3 px-2">
            <span className="font-mono font-semibold text-[#7dd3fc] text-sm mb-2">sp³</span>
            <svg viewBox="0 0 44 36" className="w-full max-w-[68px] sm:max-w-[84px] h-auto text-[#00b4d8]/75" aria-hidden>
              <path d="M22 2 L38 12 L32 28 L12 28 L6 12 Z" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.9" />
              <path d="M22 2 L6 12 L12 28" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.65" />
              <path d="M22 2 L38 12 L32 28" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.65" />
              <path d="M22 2 L12 28 L32 28" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.65" />
              <path d="M6 12 L38 12 L32 28 L12 28 Z" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* 水平流向：从底层技术核心到市场愿景 */}
      <div className="px-3 py-4 sm:px-5 sm:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-3 sm:gap-4 lg:gap-4">
          {/* 1. 底层技术核心（源头） */}
          <div className={`${cardBase} bg-[#0a1628]/95 border-[#0077b6]/50 flex flex-col text-left`}>
            <h4 className="text-[#7dd3fc] font-semibold text-sm mb-2 uppercase tracking-wide opacity-90">
              {s.layer4Title}
            </h4>
            <p className="page-caption text-white/90 leading-relaxed mb-1.5">{s.layer4Line1}</p>
            <p className="page-caption text-white/85 leading-relaxed mb-1.5">{s.layer4Line2}</p>
            <p className="page-caption text-white/85 leading-relaxed">{s.layer4Line3}</p>
          </div>

          <div className="flex items-center justify-center w-6 shrink-0 self-center">
            <ArrowDown className="w-4 h-4 text-[#00b4d8]/60 lg:hidden" aria-hidden />
            <ArrowRight className="w-5 h-5 text-[#00b4d8]/80 hidden lg:block" aria-hidden />
          </div>

          {/* 2. 物理效应桥梁 */}
          <div className={`${cardBase} flex flex-col text-left`}>
            <div className="flex justify-center lg:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#001a33] border-2 border-[#00b4d8]/40 flex items-center justify-center shrink-0">
                <Cog className="w-4 h-4 text-[#00b4d8] animate-[spin_20s_linear_infinite]" />
              </div>
              <div className="w-7 h-7 rounded-full bg-[#001a33] border-2 border-[#0077b6]/50 flex items-center justify-center shrink-0">
                <Atom className="w-3.5 h-3.5 text-[#7dd3fc]" />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#001a33] border-2 border-[#00b4d8]/40 flex items-center justify-center shrink-0">
                <Cog className="w-4 h-4 text-[#00b4d8] animate-[spin_15s_linear_infinite]" style={{ animationDirection: "reverse" }} />
              </div>
            </div>
            <h4 className="text-[#7dd3fc] font-semibold text-sm mb-1.5">{s.layer3Title}</h4>
            <p className="page-caption text-white/90 leading-relaxed">{s.layer3Line1}</p>
            <p className="page-caption text-white/80 leading-relaxed mt-1">{s.layer3Line2}</p>
          </div>

          <div className="flex items-center justify-center w-6 shrink-0 self-center">
            <ArrowDown className="w-4 h-4 text-[#00b4d8]/60 lg:hidden" aria-hidden />
            <ArrowRight className="w-5 h-5 text-[#00b4d8]/80 hidden lg:block" aria-hidden />
          </div>

          {/* 3. 价值产出 */}
          <div className={`${cardBase} flex flex-col text-left`}>
            <div className="flex justify-center lg:justify-start gap-1.5 mb-2">
              <Flame className="w-4 h-4 text-[#ff9f43] shrink-0" />
              <Box className="w-4 h-4 text-[#54a0ff] shrink-0" />
              <CircuitBoard className="w-4 h-4 text-[#5f27cd] shrink-0" />
            </div>
            <h4 className="text-[#7dd3fc] font-semibold text-sm mb-1.5">{s.layer2Title}</h4>
            <p className="page-caption text-white/90 leading-relaxed mb-2">{s.layer2Text}</p>
            <p className="page-caption text-white/85">
              {s.layer2Thermal} · {s.layer2Mechanical} · {s.layer2Electrical}
            </p>
          </div>

          <div className="flex items-center justify-center w-6 shrink-0 self-center">
            <ArrowDown className="w-4 h-4 text-[#00b4d8]/60 lg:hidden" aria-hidden />
            <ArrowRight className="w-5 h-5 text-[#00b4d8]/80 hidden lg:block" aria-hidden />
          </div>

          {/* 4. 市场愿景与解决方案（结果） */}
          <div className={`${cardBase} flex flex-col text-left`}>
            <div className="flex justify-center lg:justify-start gap-1.5 text-[#7dd3fc]/90 mb-2">
              <Cpu className="w-4 h-4 shrink-0" />
              <Zap className="w-4 h-4 shrink-0" />
            </div>
            <h4 className="text-[#7dd3fc] font-semibold text-sm mb-1.5">{s.layer1Title}</h4>
            <p className="page-caption text-white/90 leading-relaxed">{s.layer1Text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
