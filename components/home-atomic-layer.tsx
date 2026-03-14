"use client"

export type HomeAtomicLayerStrings = {
  meltLabel: string
  mechanism1: string
  mechanism2: string
}

export function HomeAtomicLayer({ strings }: { strings: HomeAtomicLayerStrings }) {
  const s = strings
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-[#0077b6]/40 bg-[#001a33]/60 overflow-hidden shadow-xl shadow-[#0077b6]/10">
      <div className="relative border border-[#00b4d8]/40 bg-[#0a1628] px-3 py-5 sm:px-5 sm:py-6">
        <div
          className="relative flex items-stretch justify-between gap-0 rounded-xl overflow-hidden border border-[#00b4d8]/40 bg-[#001a33]/90 min-h-[72px] sm:min-h-[80px]"
          style={{ boxShadow: "0 0 20px rgba(0, 180, 216, 0.12), inset 0 0 0 1px rgba(0, 180, 216, 0.08)" }}
        >
          <div className="flex flex-col items-center justify-center flex-[0_0_28%] sm:flex-[0_0_30%] py-3 px-2">
            <span className="font-mono font-semibold text-[#7dd3fc] text-sm mb-2">sp²</span>
            <svg viewBox="0 0 52 28" className="w-full max-w-[72px] sm:max-w-[88px] h-auto text-[#00b4d8]/80" aria-hidden>
              <path d="M8 14 L14 10 L20 14 L20 20 L14 24 L8 20 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.95" />
              <path d="M20 14 L26 10 L32 14 L32 20 L26 24 L20 20 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.95" />
              <path d="M32 14 L38 10 L44 14 L44 20 L38 24 L32 20 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.95" />
              <path d="M14 20 L20 14 L26 20 L26 26 L20 30 L14 26 Z" fill="none" stroke="currentColor" strokeWidth="0.95" opacity="0.85" />
              <path d="M26 20 L32 14 L38 20 L38 26 L32 30 L26 26 Z" fill="none" stroke="currentColor" strokeWidth="0.95" opacity="0.85" />
            </svg>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center px-2 sm:px-4 py-3 bg-gradient-to-r from-[#002244]/90 via-[#002a50]/95 to-[#002244]/90 border-x border-[#00b4d8]/25">
            <span className="page-caption text-[#73DBFF] font-semibold text-center leading-tight">
              {s.meltLabel}
            </span>
            <svg viewBox="0 0 80 28" className="mt-2 w-full max-w-[100px] sm:max-w-[120px] h-auto opacity-90 text-[#00b4d8]" aria-hidden>
              <circle cx="16" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.95" />
              <circle cx="40" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.95" />
              <circle cx="64" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.95" />
              <line x1="20" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="2" opacity="0.9" className="text-[#73DBFF]" />
              <line x1="44" y1="14" x2="60" y2="14" stroke="currentColor" strokeWidth="2" opacity="0.9" className="text-[#73DBFF]" />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center flex-[0_0_28%] sm:flex-[0_0_30%] py-3 px-2">
            <span className="font-mono font-semibold text-[#7dd3fc] text-sm mb-2">sp³</span>
            <svg viewBox="0 0 44 46" className="w-full max-w-[56px] sm:max-w-[72px] h-auto text-[#00b4d8]/90" aria-hidden>
              <path d="M22 2 L8 14 L14 28 L22 44 L30 28 L36 14 Z" fill="none" stroke="currentColor" strokeWidth="1.15" opacity="0.95" />
              <path d="M22 2 L14 28 M22 2 L30 28" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.85" />
              <path d="M14 28 L30 28" fill="none" stroke="currentColor" strokeWidth="0.85" opacity="0.8" />
              <path d="M22 44 L14 28 M22 44 L30 28" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.85" />
              <g stroke="currentColor" strokeWidth="0.8" opacity="0.9">
                <line x1="10" y1="20" x2="10" y2="24" /><line x1="8" y1="22" x2="12" y2="22" />
                <line x1="9" y1="21" x2="11" y2="23" /><line x1="9" y1="23" x2="11" y2="21" />
              </g>
              <g stroke="currentColor" strokeWidth="0.8" opacity="0.9">
                <line x1="34" y1="20" x2="34" y2="24" /><line x1="32" y1="22" x2="36" y2="22" />
                <line x1="33" y1="21" x2="35" y2="23" /><line x1="33" y1="23" x2="35" y2="21" />
              </g>
            </svg>
          </div>
        </div>
        <ul className="mt-4 space-y-2 text-center">
          <li className="page-caption text-white/90">· {s.mechanism1}</li>
          <li className="page-caption text-white/90">· {s.mechanism2}</li>
        </ul>
      </div>
    </div>
  )
}
