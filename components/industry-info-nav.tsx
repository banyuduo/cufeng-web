"use client"

export function IndustryInfoNav() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => scrollToSection('industry-trends')}
        className="text-xs px-3 py-1.5 bg-secondary hover:bg-secondary/80 rounded-full text-secondary-foreground transition-colors cursor-pointer"
      >
        行业趋势
      </button>
      <button
        onClick={() => scrollToSection('basic-theory')}
        className="text-xs px-3 py-1.5 bg-secondary hover:bg-secondary/80 rounded-full text-secondary-foreground transition-colors cursor-pointer"
      >
        基础理论
      </button>
      <button
        onClick={() => scrollToSection('frontier-tech')}
        className="text-xs px-3 py-1.5 bg-secondary hover:bg-secondary/80 rounded-full text-secondary-foreground transition-colors cursor-pointer"
      >
        前沿技术
      </button>
    </div>
  )
}
