"use client"

import {
  Layers,
  LayoutGrid,
  Atom,
  ArrowUp,
  Zap,
  Cpu,
} from "lucide-react"

export type PlatformDiagramStrings = {
  layer1Title: string
  layer1Tim: string
  layer1Substrate: string
  layer1Devices: string
  layer1Hint: string
  layer2Title: string
  layer2Bonding: string
  layer2Stress: string
  layer2Coexist: string
  layer2Thermal: string
  layer2Electronic: string
  layer3Title: string
  layer3Label: string
  platformAttr: string
  rdConcept: string
}

export function PlatformValueDiagram({ strings }: { strings: PlatformDiagramStrings }) {
  const s = strings
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-[#0077b6]/40 bg-[#001a33]/60 overflow-hidden shadow-xl shadow-[#0077b6]/10">
      {/* 1. 顶层：应用场景与未来接口 - 开放式插槽 */}
      <div className="border-b border-[#0077b6]/40 bg-gradient-to-b from-[#002244] to-[#002a50] px-3 py-4 sm:px-5 sm:py-5">
        <h4 className="text-[#7dd3fc] font-semibold text-sm mb-3 text-center uppercase tracking-wide">
          {s.layer1Title}
        </h4>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <div className="flex flex-col items-center rounded-xl border border-[#0077b6]/35 bg-[#001a33]/80 backdrop-blur-sm p-3 sm:p-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0077b6]/20 border border-[#00b4d8]/30 flex items-center justify-center mb-2">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#7dd3fc]" />
            </div>
            <span className="page-caption text-white/90 text-center leading-tight">
              {s.layer1Tim}
            </span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-[#0077b6]/35 bg-[#001a33]/80 backdrop-blur-sm p-3 sm:p-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0077b6]/20 border border-[#00b4d8]/30 flex items-center justify-center mb-2">
              <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5 text-[#7dd3fc]" />
            </div>
            <span className="page-caption text-white/90 text-center leading-tight">
              {s.layer1Substrate}
            </span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-[#0077b6]/35 bg-[#001a33]/80 backdrop-blur-sm p-3 sm:p-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0077b6]/20 border border-[#00b4d8]/30 flex items-center justify-center mb-2">
              <Atom className="w-4 h-4 sm:w-5 sm:h-5 text-[#7dd3fc]" />
            </div>
            <span className="page-caption text-white/90 text-center leading-tight">
              {s.layer1Devices}
            </span>
          </div>
        </div>
        <p className="page-caption text-center text-white/70 mt-2">
          {s.layer1Hint}
        </p>
      </div>

      <div className="flex justify-center py-0.5 bg-[#001a33]/50">
        <ArrowUp className="w-4 h-4 text-[#00b4d8]/50" aria-hidden />
      </div>

      {/* 2. 中层：平台核心机制 */}
      <div className="relative border-b border-[#0077b6]/40 bg-[#002244]/70 px-3 py-4 sm:px-5 sm:py-5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00b4d8]/60 to-transparent" style={{ transform: "translateY(-50%)" }} />
          <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#73DBFF]/40 to-transparent" style={{ transform: "translateX(-50%)" }} />
        </div>
        <h4 className="text-[#7dd3fc] font-semibold text-sm mb-3 text-center uppercase tracking-wide relative z-10">
          {s.layer2Title}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 relative z-10">
          {/* 左列：界面工程 — sp²/sp³ 杂化键合，上方加晶格示意图 */}
          <div className="rounded-xl border-2 border-[#00b4d8]/40 bg-[#001a33]/95 backdrop-blur-sm px-3 py-3 sm:px-4 sm:py-3 text-center shadow-[0_0_12px_rgba(0,180,216,0.08)]">
            <div className="flex justify-center mb-2" aria-hidden>
              <svg viewBox="0 0 80 28" className="w-20 h-7 sm:w-24 sm:h-8 text-[#00b4d8]/85" role="img" aria-label="sp²-共价键-sp³ 界面示意">
                {/* 左：二维石墨烯结构 */}
                <path d="M6 14 L10 11 L14 14 L14 18 L10 21 L6 18 Z" fill="none" stroke="currentColor" strokeWidth="0.95" opacity="0.95" />
                <path d="M14 14 L18 11 L22 14 L22 18 L18 21 L14 18 Z" fill="none" stroke="currentColor" strokeWidth="0.95" opacity="0.95" />
                <path d="M10 18 L14 14 L18 18 L18 22 L14 25 L10 22 Z" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.8" />
                {/* 中间：化学键合 — 共价键表达 */}
                <circle cx="30" cy="14" r="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9" />
                <circle cx="50" cy="14" r="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9" />
                <line x1="33" y1="14" x2="47" y2="14" stroke="currentColor" strokeWidth="1.8" opacity="0.95" className="text-[#73DBFF]" />
                {/* 右：金刚石 Logo（刻面钻石） */}
                <path d="M64 8 L54 14 L58 22 L64 28 L70 22 L74 14 Z" fill="none" stroke="currentColor" strokeWidth="0.95" opacity="0.95" />
                <path d="M64 8 L58 22 M64 8 L70 22" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.85" />
                <path d="M58 22 L70 22" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.8" />
                <path d="M64 28 L58 22 M64 28 L70 22" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.85" />
                <g stroke="currentColor" strokeWidth="0.6" opacity="0.88">
                  <line x1="56" y1="18" x2="56" y2="20" /><line x1="55" y1="19" x2="57" y2="19" />
                  <line x1="72" y1="18" x2="72" y2="20" /><line x1="71" y1="19" x2="73" y2="19" />
                </g>
              </svg>
            </div>
            <span className="text-[10px] sm:text-xs text-[#73DBFF]/90 font-medium uppercase tracking-wider block mb-0.5">界面</span>
            <span className="text-[#73DBFF] font-semibold text-sm block mb-0.5">{s.layer2Thermal}</span>
            <span className="text-sm font-semibold text-white/95">{s.layer2Bonding}</span>
          </div>
          <div className="rounded-xl border border-[#0077b6]/35 bg-[#001a33]/90 backdrop-blur-sm px-3 py-3 sm:px-4 sm:py-3 text-center">
            <span className="text-[#73DBFF] font-medium text-sm block mb-0.5">{s.layer2Electronic}</span>
            <span className="page-caption text-white/90">{s.layer2Stress}</span>
          </div>
          <div className="rounded-xl border border-[#0077b6]/35 bg-[#001a33]/90 backdrop-blur-sm px-3 py-3 sm:px-4 sm:py-3 text-center">
            <span className="page-caption text-white/90 font-medium">{s.layer2Coexist}</span>
          </div>
        </div>
        <p className="page-caption text-center text-white/75 mt-2 relative z-10">
          <span className="inline-flex items-center gap-1 text-[#00b4d8]/90"><Zap className="w-3.5 h-3.5" /> {s.layer2Thermal}</span>
          <span className="mx-1.5 text-white/40">+</span>
          <span className="inline-flex items-center gap-1 text-[#73DBFF]/90"><Cpu className="w-3.5 h-3.5" /> {s.layer2Electronic}</span>
        </p>
      </div>

      <div className="flex justify-center py-0.5 bg-[#001a33]/50">
        <ArrowUp className="w-4 h-4 text-[#00b4d8]/50" aria-hidden />
      </div>

      {/* 3. 底层：传统材料物理极限 */}
      <div className="relative bg-[#0a1628] px-3 py-4 sm:px-5 sm:py-5">
        <div className="absolute inset-0 pointer-events-none opacity-50" style={{ background: "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 3px)" }} />
        <div className="relative z-10 rounded-xl border border-[#0077b6]/35 bg-[#002244]/80 backdrop-blur-sm px-3 py-3 sm:px-4 sm:py-4">
          <h4 className="text-[#7dd3fc] font-semibold text-sm mb-2 text-center opacity-90">
            {s.layer3Title}
          </h4>
          <p className="page-caption text-slate-300 text-center leading-relaxed">
            {s.layer3Label}
          </p>
        </div>
      </div>
    </div>
  )
}
