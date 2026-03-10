"use client"

/**
 * 深色页面背景 - 与 PPT 风格一致的科技感图案
 * 包含：深蓝渐变 + 半透明光晕/椭圆 + 网格点阵 + 可选 L 形角标
 */
export function DarkPagePatternBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 深蓝渐变基底 - 与 PPT 主色 #023B99 对齐 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #012a6b 0%, #023B99 40%, #1E3A8A 100%)",
        }}
      />
      {/* 科技感网格点阵 - 参考 PPT 科技风 */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(115, 219, 255, 0.6) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* 半透明光晕/椭圆 - 钴蓝、皇家蓝、紫靛色 */}
      <div
        className="absolute top-[5%] right-[10%] w-64 h-48 rounded-full opacity-25"
        style={{
          background: "radial-gradient(ellipse, rgba(115, 219, 255, 0.25) 0%, rgba(65, 105, 225, 0.15) 50%, transparent 70%)",
          transform: "rotate(-15deg)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-[15%] left-[5%] w-48 h-48 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(65, 105, 225, 0.3) 0%, transparent 70%)",
          transform: "rotate(20deg)",
          filter: "blur(35px)",
        }}
      />
      <div
        className="absolute bottom-[20%] right-[15%] w-56 h-40 rounded-full opacity-22"
        style={{
          background: "radial-gradient(ellipse, rgba(0, 71, 171, 0.4) 0%, rgba(46, 58, 140, 0.1) 100%)",
          transform: "rotate(10deg)",
          filter: "blur(45px)",
        }}
      />
      <div
        className="absolute bottom-[30%] left-[20%] w-40 h-56 rounded-full opacity-18"
        style={{
          background: "radial-gradient(ellipse, rgba(65, 105, 225, 0.25) 0%, transparent 70%)",
          transform: "rotate(-25deg)",
          filter: "blur(50px)",
        }}
      />
      {/* 细线网格 - 科技感 */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(115, 219, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(115, 219, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  )
}
