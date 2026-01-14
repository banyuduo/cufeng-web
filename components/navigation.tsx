"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

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
            簇锋科技 | ToSpike
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
              技术视界
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
            <Menu 
              className={`h-6 w-6 transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          {/* 背景遮罩层 - 半透明黑色 */}
          <div
            className="fixed inset-0 w-full h-full z-[9998]"
            style={{ 
              backgroundColor: '#000000',
              opacity: 0.5
            }}
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* 菜单面板 - 右上角 */}
          <div
            id="mobile-menu-overlay"
            className="fixed top-16 right-0 w-24 sm:w-28 h-[calc(100vh-4rem)] z-[9999] flex flex-col"
            style={{ 
              backgroundColor: '#000000',
              opacity: 1,
              boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* 菜单项列表 */}
            <div 
              className="flex flex-col w-full pt-4 pb-4 fade-in-down"
              style={{
                backgroundColor: '#000000'
              }}
            >
              <Link
                href="/about"
                className="text-white text-sm font-medium py-2 px-2 border-b border-white/10 w-full text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                关于我们
              </Link>

              <Link
                href="/patents"
                className="text-white text-sm font-medium py-2 px-2 border-b border-white/10 w-full text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                技术架构
              </Link>

              <Link
                href="/products"
                className="text-white text-sm font-medium py-2 px-2 border-b border-white/10 w-full text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                产品中心
              </Link>

              <Link
                href="/applications"
                className="text-white text-sm font-medium py-2 px-2 border-b border-white/10 w-full text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                应用领域
              </Link>

              <Link
                href="/news"
                className="text-white text-sm font-medium py-2 px-2 border-b border-white/10 w-full text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                技术视界
              </Link>

              <Link
                href="/cooperation"
                className="text-white text-sm font-medium py-2 px-2 border-b border-white/10 w-full text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                项目合作
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
