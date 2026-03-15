"use client"

import {
  Flame,
  Box,
  CircuitBoard,
  Cog,
  Atom,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  Layers,
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
  sp2LayerLabel: string
  sp3LayerLabel: string
  atomicTitle: string
}

const cardBase =
  "flex flex-col flex-1 min-w-0 rounded-xl border border-[#0077b6]/35 bg-[#002244]/70 backdrop-blur-sm p-3 sm:p-4 text-left min-h-[140px] sm:min-h-[160px]"

export function HeroPlatformDiagram({
  strings,
  showLattice = true,
}: {
  strings: HeroDiagramStrings
  showLattice?: boolean
}) {
  const s = strings
  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#0077b6]/40 bg-[#001a33]/60 overflow-hidden shadow-xl shadow-[#0077b6]/10">
      {showLattice && (
      <>
      {/* 地基：微观晶格演变 sp² 蜂窝 → 过渡区(原子级共价桥接) → sp³ 四面体 */}
      <div className="relative border-b border-[#0077b6]/40 bg-[#0a1628] px-3 py-4 sm:px-5 sm:py-5">
        <div
          className="relative flex items-stretch justify-between gap-0 rounded-xl overflow-hidden border border-[#00b4d8]/40 bg-[#001a33]/90 min-h-[72px] sm:min-h-[84px]"
          style={{ boxShadow: "0 0 20px rgba(0, 180, 216, 0.12), inset 0 0 0 1px rgba(0, 180, 216, 0.08)" }}
        >
          {/* 左侧：sp² 二维石墨烯结构 */}
          <div className="flex flex-col items-center justify-center flex-[0_0_28%] sm:flex-[0_0_30%] py-3 px-2">
            <span className="font-mono font-semibold text-[#7dd3fc] text-sm mb-2">sp²</span>
            <svg viewBox="0 0 52 28" className="w-full max-w-[72px] sm:max-w-[88px] h-auto text-[#00b4d8]/80" aria-hidden role="img" aria-label="二维石墨烯结构">
              {/* 石墨烯蜂窝：两行六边形错位排列 */}
              <path d="M8 14 L14 10 L20 14 L20 20 L14 24 L8 20 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.95" />
              <path d="M20 14 L26 10 L32 14 L32 20 L26 24 L20 20 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.95" />
              <path d="M32 14 L38 10 L44 14 L44 20 L38 24 L32 20 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.95" />
              <path d="M14 20 L20 14 L26 20 L26 26 L20 30 L14 26 Z" fill="none" stroke="currentColor" strokeWidth="0.95" opacity="0.85" />
              <path d="M26 20 L32 14 L38 20 L38 26 L32 30 L26 26 Z" fill="none" stroke="currentColor" strokeWidth="0.95" opacity="0.85" />
            </svg>
          </div>

          {/* 中间：原子级共价桥接 — 化学键合表达（共价键） */}
          <div className="flex flex-1 flex-col items-center justify-center px-2 sm:px-4 py-3 bg-gradient-to-r from-[#002244]/90 via-[#002a50]/95 to-[#002244]/90 border-x border-[#00b4d8]/25">
            <span className="page-caption text-[#73DBFF] font-semibold text-center leading-tight drop-shadow-sm">
              {s.layer4MeltLabel}
            </span>
            <svg viewBox="0 0 80 28" className="mt-2 w-full max-w-[110px] sm:max-w-[130px] h-auto text-[#00b4d8]/90" aria-hidden role="img" aria-label="共价键合示意">
              {/* 化学式风格：原子(圆) + 单键(线)，C—C—C 共价桥接 */}
              <circle cx="16" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.95" />
              <circle cx="40" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.95" />
              <circle cx="64" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.95" />
              <line x1="20" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="2" opacity="0.9" className="text-[#73DBFF]" />
              <line x1="44" y1="14" x2="60" y2="14" stroke="currentColor" strokeWidth="2" opacity="0.9" className="text-[#73DBFF]" />
            </svg>
          </div>

          {/* 右侧：sp³ 金刚石轮廓线条画 */}
          <div className="flex flex-col items-center justify-center flex-[0_0_28%] sm:flex-[0_0_30%] py-3 px-2">
            <span className="font-mono font-semibold text-[#7dd3fc] text-sm mb-2">sp³</span>
            <svg viewBox="0 0 48 48" className="w-full max-w-[56px] sm:max-w-[72px] h-auto text-[#00b4d8]/90" aria-hidden role="img" aria-label="金刚石刻面">
              <path d="M24 0 L6 14 L10 24 L24 46 L38 24 L42 14 Z" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.95" />
              <path d="M24 0 L10 24 M24 0 L38 24" fill="none" stroke="currentColor" strokeWidth="0.85" opacity="0.88" />
              <path d="M10 24 L38 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.85" />
              <path d="M24 46 L10 24 M24 46 L38 24" fill="none" stroke="currentColor" strokeWidth="0.85" opacity="0.88" />
            </svg>
          </div>
        </div>
      </div>
      </>
      )}

      <div className="px-3 py-4 sm:px-5 sm:py-5">
        {/* 原子级界面工程：sp²|原子级共价桥接|sp³ 紧贴无分隔 + 原子级界面工程，占前两卡片宽度，置于底层技术核心行之上 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3 sm:gap-4 lg:gap-4 mb-4">
          <div className="lg:col-span-3 flex items-stretch rounded-xl overflow-hidden border border-[#00b4d8]/40 bg-[#001a33]/90 min-h-[52px] sm:min-h-[60px]">
            {/* sp² | 原子级共价桥接 | sp³ 三者紧贴，无中间分隔，表示界面状态 */}
            <div className="flex flex-col items-center justify-center flex-1 min-w-0 py-2 px-1.5 sm:px-2">
              <span className="font-mono font-semibold text-[#7dd3fc] text-xs sm:text-sm mb-0.5">{s.sp2LayerLabel}</span>
              <svg viewBox="0 0 52 28" className="w-full max-w-[40px] sm:max-w-[48px] h-auto text-[#00b4d8]/80" aria-hidden>
                <path d="M8 14 L14 10 L20 14 L20 20 L14 24 L8 20 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.95" />
                <path d="M20 14 L26 10 L32 14 L32 20 L26 24 L20 20 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.95" />
                <path d="M32 14 L38 10 L44 14 L44 20 L38 24 L32 20 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.95" />
                <path d="M14 20 L20 14 L26 20 L26 26 L20 30 L14 26 Z" fill="none" stroke="currentColor" strokeWidth="0.95" opacity="0.85" />
                <path d="M26 20 L32 14 L38 20 L38 26 L32 30 L26 26 Z" fill="none" stroke="currentColor" strokeWidth="0.95" opacity="0.85" />
              </svg>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center min-w-0 py-2 px-1.5 sm:px-2">
              <span className="page-caption text-[#73DBFF] font-semibold text-center leading-tight text-xs sm:text-sm">{s.layer4MeltLabel}</span>
              <svg viewBox="0 0 80 28" className="mt-1 w-full max-w-[60px] sm:max-w-[72px] h-auto text-[#00b4d8]/90" aria-hidden>
                <circle cx="16" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.95" />
                <circle cx="40" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.95" />
                <circle cx="64" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.95" />
                <line x1="20" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="2" opacity="0.9" className="text-[#73DBFF]" />
                <line x1="44" y1="14" x2="60" y2="14" stroke="currentColor" strokeWidth="2" opacity="0.9" className="text-[#73DBFF]" />
              </svg>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center min-w-0 py-2 px-1.5 sm:px-2">
              <span className="font-mono font-semibold text-[#7dd3fc] text-xs sm:text-sm mb-0.5">{s.sp3LayerLabel}</span>
              <svg viewBox="0 0 48 48" className="w-full max-w-[36px] sm:max-w-[44px] h-auto text-[#00b4d8]/90" aria-hidden>
                <path d="M24 0 L6 14 L10 24 L24 46 L38 24 L42 14 Z" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.95" />
                <path d="M24 0 L10 24 M24 0 L38 24" fill="none" stroke="currentColor" strokeWidth="0.85" opacity="0.88" />
                <path d="M10 24 L38 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.85" />
                <path d="M24 46 L10 24 M24 46 L38 24" fill="none" stroke="currentColor" strokeWidth="0.85" opacity="0.88" />
              </svg>
            </div>
            <div className="flex flex-shrink-0 items-center justify-center border-l border-[#00b4d8]/40 pl-3 pr-3">
              <div className="flex items-center gap-1.5">
                <ArrowLeft className="w-3.5 h-3.5 text-[#7dd3fc] shrink-0" aria-hidden />
                <span className="text-[#7dd3fc] font-semibold text-xs sm:text-sm whitespace-nowrap">{s.atomicTitle}</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center w-6 shrink-0 self-center" aria-hidden />
          <div className="hidden lg:block" aria-hidden />
        </div>

        {/* 水平流向：底层技术核心 → 物理效应 → 价值产出 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3 sm:gap-4 lg:gap-4">
          {/* 1. 底层技术核心（源头） */}
          <div className={`${cardBase} bg-[#0a1628]/95 border-[#0077b6]/50`}>
            <div className="w-8 h-8 rounded-full bg-[#001a33] border-2 border-[#0077b6]/50 flex items-center justify-center shrink-0 mb-2">
              <Layers className="w-4 h-4 text-[#7dd3fc]" />
            </div>
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
          <div className={`${cardBase}`}>
            <div className="flex justify-start gap-2 mb-2">
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

          {/* 3. 价值产出：图标与文字同行，一一对应 */}
          <div className={`${cardBase}`}>
            <h4 className="text-[#7dd3fc] font-semibold text-sm mb-2">{s.layer2Title}</h4>
            <div className="page-caption text-white/85 space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#ff9f43] shrink-0" aria-hidden />
                <span>{s.layer2Thermal}</span>
              </div>
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-[#54a0ff] shrink-0" aria-hidden />
                <span>{s.layer2Mechanical}</span>
              </div>
              <div className="flex items-center gap-2">
                <CircuitBoard className="w-4 h-4 text-[#5f27cd] shrink-0" aria-hidden />
                <span>{s.layer2Electrical}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
