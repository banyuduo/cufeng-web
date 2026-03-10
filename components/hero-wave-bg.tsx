"use client"

export function HeroWaveBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background:
            "linear-gradient(180deg, #001a33 0%, #002244 15%, #003366 50%, #004080 85%, #005090 100%)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0077b6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00b4d8" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0096c7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#48cae4" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path
          d="M0,120 Q200,80 400,120 T800,120 T1200,100 T1600,130 V400 H0 Z"
          fill="url(#waveGrad1)"
        />
        <path
          d="M0,180 Q300,140 600,180 T1200,160 T1800,200 V400 H0 Z"
          fill="url(#waveGrad2)"
        />
        <path
          d="M0,250 Q500,200 1000,250 T2000,220 V400 H0 Z"
          fill="rgba(0, 180, 216, 0.08)"
        />
      </svg>
      <div className="absolute top-[15%] right-[10%] w-32 h-32 rounded-full bg-[#2e47c1]/25 blur-sm" />
      <div className="absolute top-[25%] right-[25%] w-24 h-24 rounded-full bg-[#0077b6]/30 blur-[1px]" />
      <div
        className="absolute top-[10%] right-[35%] w-40 h-28 rounded-full bg-[#1a3099]/20"
        style={{ transform: "rotate(-15deg)" }}
      />
      <div
        className="absolute bottom-[30%] left-[15%] w-48 h-36 rounded-full bg-[#0096c7]/15"
        style={{ transform: "rotate(10deg)" }}
      />
      <div className="absolute bottom-[20%] right-[20%] w-28 h-28 rounded-full bg-[#48cae4]/20 blur-sm" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0077b6]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#00b4d8]/12 rounded-full blur-3xl" />
    </div>
  )
}
