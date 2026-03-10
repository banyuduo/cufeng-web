"use client"

export function DarkPagePatternBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #001a33 0%, #002244 15%, #003366 50%, #004080 85%, #005090 100%)",
        }}
      />
      <div
        className="absolute top-[5%] right-[10%] w-64 h-48 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0, 119, 182, 0.25) 0%, rgba(0, 150, 199, 0.15) 50%, transparent 70%)",
          transform: "rotate(-15deg)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-[15%] left-[5%] w-48 h-48 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 150, 199, 0.3) 0%, transparent 70%)",
          transform: "rotate(20deg)",
          filter: "blur(35px)",
        }}
      />
      <div
        className="absolute bottom-[20%] right-[15%] w-56 h-40 rounded-full opacity-22"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0, 71, 171, 0.4) 0%, rgba(46, 58, 140, 0.1) 100%)",
          transform: "rotate(10deg)",
          filter: "blur(45px)",
        }}
      />
      <div
        className="absolute bottom-[30%] left-[20%] w-40 h-56 rounded-full opacity-18"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0, 119, 182, 0.25) 0%, transparent 70%)",
          transform: "rotate(-25deg)",
          filter: "blur(50px)",
        }}
      />
    </div>
  )
}
