"use client"

/**
 * 深色渐变背景。避免多层 filter:blur（合成层开销大），在低端机与静态托管环境下易卡顿。
 */
export function DarkPagePatternBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #001a33 0%, #002244 15%, #003366 50%, #004080 85%, #005090 100%)",
        }}
      />
      <div
        className="absolute top-[5%] right-[10%] w-72 h-56 rounded-full opacity-[0.18]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0, 119, 182, 0.45) 0%, rgba(0, 150, 199, 0.2) 45%, transparent 72%)",
        }}
      />
      <div
        className="absolute top-[15%] left-[5%] w-56 h-56 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(0, 150, 199, 0.35) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute bottom-[20%] right-[15%] w-64 h-48 rounded-full opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0, 71, 171, 0.4) 0%, rgba(46, 58, 140, 0.08) 55%, transparent 75%)",
        }}
      />
      <div
        className="absolute bottom-[30%] left-[20%] w-48 h-60 rounded-full opacity-14"
        style={{
          background: "radial-gradient(ellipse, rgba(0, 119, 182, 0.35) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}
