"use client"

/**
 * Hero 背景 - 从参考图提取的颜色与图案
 * 背景：深蓝渐变（左上→右下）
 * 图案：钴蓝、皇家蓝、紫靛色半透明圆/椭圆，玻璃质感，倾斜堆叠
 */
export function HeroWaveBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 深蓝渐变基底 - 自上而下，与 PPT 风格一致 (#0A1F44 → #1E3A8A) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0A1F44 0%, #0F2A5C 40%, #1E3A8A 100%)",
        }}
      />
      {/* 半透明圆/椭圆 - 从图片提取的钴蓝 #0047AB、皇家蓝 #4169E1、紫靛 #2E3A8C */}
      <div
        className="absolute top-[10%] right-[15%] w-40 h-32 rounded-full opacity-35"
        style={{
          background: "radial-gradient(ellipse, rgba(65, 105, 225, 0.5) 0%, rgba(0, 71, 171, 0.2) 100%)",
          transform: "rotate(-20deg)",
          boxShadow: "0 0 40px rgba(65, 105, 225, 0.2)",
        }}
      />
      <div
        className="absolute top-[20%] right-[8%] w-28 h-28 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(0, 71, 171, 0.5) 0%, transparent 70%)",
          transform: "rotate(15deg)",
          boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)",
        }}
      />
      <div
        className="absolute top-[15%] right-[28%] w-36 h-28 rounded-full opacity-25"
        style={{
          background: "radial-gradient(ellipse, rgba(46, 58, 140, 0.6) 0%, rgba(75, 0, 130, 0.15) 100%)",
          transform: "rotate(-10deg)",
        }}
      />
      <div
        className="absolute top-[25%] right-[22%] w-24 h-24 rounded-full opacity-28"
        style={{
          background: "radial-gradient(circle, rgba(65, 105, 225, 0.4) 0%, transparent 70%)",
          transform: "rotate(25deg)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}
      />
      <div
        className="absolute bottom-[35%] left-[12%] w-44 h-36 rounded-full opacity-22"
        style={{
          background: "radial-gradient(ellipse, rgba(0, 71, 171, 0.4) 0%, rgba(46, 58, 140, 0.1) 100%)",
          transform: "rotate(12deg)",
        }}
      />
      <div
        className="absolute bottom-[25%] right-[18%] w-32 h-32 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(65, 105, 225, 0.35) 0%, transparent 70%)",
          transform: "rotate(-15deg)",
          boxShadow: "inset 0 0 15px rgba(255,255,255,0.08)",
        }}
      />
    </div>
  )
}
