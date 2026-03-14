"use client"

import {
  Layers,
  LayoutGrid,
  Atom,
  ArrowDown,
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
    <div className="w-full max-w-3xl mx-auto rounded-2xl border border-[#0077b6]/40 bg-[#001a33]/70 overflow-hidden shadow-xl shadow-[#0077b6]/10">
      {/* 1. 顶层：应用场景与未来接口 - 开放式插槽 */}
      <div className="border-b border-[#0077b6]/35 bg-gradient-to-b from-[#002244] to-[#002a50] px-4 py-4 sm:px-5 sm:py-5">
        <h4 className="text-[#7dd3fc] font-semibold text-xs sm:text-sm mb-3 text-center uppercase tracking-wide">
          {s.layer1Title}
        </h4>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <div className="flex flex-col items-center rounded-lg border-2 border-dashed border-[#00b4d8]/40 bg-[#001a33]/60 p-3 sm:p-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0077b6]/20 border border-[#00b4d8]/30 flex items-center justify-center mb-1.5">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#7dd3fc]" />
            </div>
            <span className="text-white/90 text-[10px] sm:text-xs font-medium text-center leading-tight">
              {s.layer1Tim}
            </span>
          </div>
          <div className="flex flex-col items-center rounded-lg border-2 border-dashed border-[#00b4d8]/40 bg-[#001a33]/60 p-3 sm:p-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0077b6]/20 border border-[#00b4d8]/30 flex items-center justify-center mb-1.5">
              <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5 text-[#7dd3fc]" />
            </div>
            <span className="text-white/90 text-[10px] sm:text-xs font-medium text-center leading-tight">
              {s.layer1Substrate}
            </span>
          </div>
          <div className="flex flex-col items-center rounded-lg border-2 border-dashed border-[#00b4d8]/40 bg-[#001a33]/60 p-3 sm:p-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0077b6]/20 border border-[#00b4d8]/30 flex items-center justify-center mb-1.5">
              <Atom className="w-4 h-4 sm:w-5 sm:h-5 text-[#7dd3fc]" />
            </div>
            <span className="text-white/90 text-[10px] sm:text-xs font-medium text-center leading-tight">
              {s.layer1Devices}
            </span>
          </div>
        </div>
        <p className="text-center text-white/70 text-[10px] sm:text-xs mt-2">
          {s.layer1Hint}
        </p>
      </div>

      <div className="flex justify-center py-0.5 bg-[#001a33]/50">
        <ArrowDown className="w-4 h-4 text-[#00b4d8]/50" aria-hidden />
      </div>

      {/* 2. 中层：平台核心机制 - 横向长条 + 微观结构意象 */}
      <div className="relative border-b border-[#0077b6]/35 bg-[#002244]/80 px-4 py-4 sm:px-5 sm:py-5 overflow-hidden">
        {/* 背景：交汇能量线 */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div
            className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00b4d8]/60 to-transparent"
            style={{ transform: "translateY(-50%)" }}
          />
          <div
            className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#73DBFF]/40 to-transparent"
            style={{ transform: "translateX(-50%)" }}
          />
        </div>
        <h4 className="text-[#7dd3fc] font-semibold text-xs sm:text-sm mb-3 text-center uppercase tracking-wide relative z-10">
          {s.layer2Title}
        </h4>
        <div className="grid grid-cols-3 gap-2 sm:gap-4 relative z-10">
          <div className="rounded-lg bg-[#001a33]/90 border border-[#00b4d8]/30 px-2 py-2.5 sm:px-3 sm:py-3 text-center">
            <span className="text-[#73DBFF] font-medium text-[10px] sm:text-xs block mb-0.5">{s.layer2Thermal}</span>
            <span className="text-white/90 text-[10px] sm:text-xs">{s.layer2Bonding}</span>
          </div>
          <div className="rounded-lg bg-[#001a33]/90 border border-[#00b4d8]/30 px-2 py-2.5 sm:px-3 sm:py-3 text-center">
            <span className="text-[#73DBFF] font-medium text-[10px] sm:text-xs block mb-0.5">{s.layer2Electronic}</span>
            <span className="text-white/90 text-[10px] sm:text-xs">{s.layer2Stress}</span>
          </div>
          <div className="rounded-lg bg-[#001a33]/90 border border-[#00b4d8]/30 px-2 py-2.5 sm:px-3 sm:py-3 text-center">
            <span className="text-white/90 text-[10px] sm:text-xs font-medium">{s.layer2Coexist}</span>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-2 relative z-10">
          <span className="inline-flex items-center gap-1 text-[10px] text-[#00b4d8]/80">
            <Zap className="w-3 h-3" /> {s.layer2Thermal}
          </span>
          <span className="text-white/40">+</span>
          <span className="inline-flex items-center gap-1 text-[10px] text-[#73DBFF]/80">
            <Cpu className="w-3 h-3" /> {s.layer2Electronic}
          </span>
        </div>
      </div>

      <div className="flex justify-center py-0.5 bg-[#001a33]/50">
        <ArrowDown className="w-4 h-4 text-[#00b4d8]/50" aria-hidden />
      </div>

      {/* 3. 底层：痛点与物理边界 - 传统材料基座（裂纹/受压意象） */}
      <div className="relative bg-[#0a0f1a] px-4 py-4 sm:px-5 sm:py-5">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0,0,0,0.15) 2px,
              rgba(0,0,0,0.15) 3px
            )`,
          }}
        />
        <div className="relative z-10 rounded-lg border-2 border-[#475569]/50 bg-[#1e293b]/80 px-3 py-3 sm:px-4 sm:py-4 shadow-inner">
          <h4 className="text-slate-400 font-semibold text-xs sm:text-sm mb-2 text-center">
            {s.layer3Title}
          </h4>
          <p className="text-slate-300 text-[10px] sm:text-xs text-center leading-relaxed">
            {s.layer3Label}
          </p>
        </div>
      </div>
    </div>
  )
}
