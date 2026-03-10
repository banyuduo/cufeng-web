"use client"

export function IndustryInfoNav() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => scrollToSection('industry-trends')}
        className="text-xs px-3 py-1.5 bg-[#0344b3] hover:bg-[#0452cc] rounded-full text-white/90 transition-colors cursor-pointer border border-[#4169E1]/40"
      >
        行业趋势
      </button>
      <button
        onClick={() => scrollToSection('basic-theory')}
        className="text-xs px-3 py-1.5 bg-[#0344b3] hover:bg-[#0452cc] rounded-full text-white/90 transition-colors cursor-pointer border border-[#4169E1]/40"
      >
        基础理论
      </button>
      <button
        onClick={() => scrollToSection('frontier-tech')}
        className="text-xs px-3 py-1.5 bg-[#0344b3] hover:bg-[#0452cc] rounded-full text-white/90 transition-colors cursor-pointer border border-[#4169E1]/40"
      >
        前沿技术
      </button>
    </div>
  )
}
