"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="border-b border-border/60 backdrop-blur-sm fixed w-full z-50 bg-background/95">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-foreground">
            南京簇锋机电科技
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/patents"
              className={`text-sm transition-colors ${
                isActive("/patents") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              技术架构
            </Link>
            <Link
              href="/products"
              className={`text-sm transition-colors ${
                isActive("/products") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              产品中心
            </Link>
            <Link
              href="/applications"
              className={`text-sm transition-colors ${
                isActive("/applications")
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              应用领域
            </Link>
            <Link
              href="/news"
              className={`text-sm transition-colors ${
                isActive("/news") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              新闻中心
            </Link>
            <Link href="/cooperation">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                项目合作
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 w-full h-full bg-slate-950 z-[9999] flex flex-col items-center justify-center"
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="flex flex-col w-full">
            <Link
              href="/patents"
              className="text-white text-2xl font-semibold py-6 border-b border-white/10 w-full text-center hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              技术架构
            </Link>

            <Link
              href="/products"
              className="text-white text-2xl font-semibold py-6 border-b border-white/10 w-full text-center hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              产品中心
            </Link>

            <Link
              href="/applications"
              className="text-white text-2xl font-semibold py-6 border-b border-white/10 w-full text-center hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              应用领域
            </Link>

            <Link
              href="/news"
              className="text-white text-2xl font-semibold py-6 border-b border-white/10 w-full text-center hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              新闻中心
            </Link>

            <Link
              href="/cooperation"
              className="text-white text-2xl font-semibold py-6 border-b border-white/10 w-full text-center hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              项目合作
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
