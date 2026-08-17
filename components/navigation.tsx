"use client"

import { Link } from "@/components/app-link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { useTranslations } from "@/components/translations-provider"
import { isValidLocale } from "@/lib/i18n"
import { ensureTrailingSlash } from "@/lib/site-path"

const PRODUCT_SUBLINKS = [
  { path: "/products/diamond-copper", key: "common.footer.diamondCopper" },
  { path: "/products/thermal-pad", key: "common.footer.thermalPad" },
  { path: "/products/carbon-composite", key: "common.footer.carbonComposite" },
  { path: "/products/nonstick-cookware", key: "common.footer.nonstickCookware" },
  { path: "/products/diamond-tools", key: "common.footer.superabrasiveTools" },
] as const

export function Navigation({ locale: localeProp }: { locale?: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsExpanded, setProductsExpanded] = useState(false)
  const pathname = usePathname()
  const t = useTranslations()

  // 从 pathname 解析 locale：/zh/xxx 或 /en/xxx，兼容 trailingSlash
  const pathSegments = pathname.replace(/^\/+|\/+$/g, "").split("/")
  const localeFromPath = pathSegments[0]
  const locale: Locale =
    localeProp ?? (isValidLocale(localeFromPath) ? localeFromPath : "zh")
  const prefix = `/${locale}`

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      setProductsExpanded(false)
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const isActive = (path: string) => {
    const fullPath = `${prefix}${path === "/" ? "" : path}`
    return pathname === fullPath || pathname.startsWith(`${fullPath}/`)
  }

  const otherLocale: Locale = locale === "zh" ? "en" : "zh"
  const otherLocaleName = locale === "zh" ? "English" : "中文"

  const localeSwitchHref = ensureTrailingSlash(
    pathname.startsWith(`/${locale}`)
      ? pathname.replace(`/${locale}`, `/${otherLocale}`)
      : `/${otherLocale}${pathname === "/" ? "" : pathname}`
  )

  const isHome = pathname === prefix || pathname === `${prefix}/`
  // 深蓝底页面统一用深色导航；浅色产品页用浅色导航（避免 shadcn 近黑底）
  const isDarkPage =
    isHome ||
    isActive("/patents") ||
    isActive("/about") ||
    isActive("/news") ||
    isActive("/applications") ||
    isActive("/cooperation")
  const navBg = isDarkPage
    ? "bg-[#001a33]/95 border-[#003366]/50"
    : "bg-white/95 border-slate-200/80"
  const navText = isDarkPage ? "text-white" : "text-[#0F2A5C]"
  const navMuted = isDarkPage
    ? "text-white/80 hover:text-white"
    : "text-slate-600 hover:text-[#0F2A5C]"

  return (
    <nav className={`border-b fixed w-full z-50 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={prefix} className={`text-xl font-bold ${navText}`}>
            {t("common.nav.brand")}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href={`${prefix}/patents`}
              className={`text-sm transition-colors ${
                isActive("/patents") ? `${navText} font-semibold` : navMuted
              }`}
            >
              {t("common.nav.techArchitecture")}
            </Link>
            <Link
              href={`${prefix}/products`}
              className={`text-sm transition-colors ${
                isActive("/products") ? `${navText} font-semibold` : navMuted
              }`}
            >
              {t("common.nav.products")}
            </Link>
            <Link
              href={`${prefix}/applications`}
              className={`text-sm transition-colors ${
                isActive("/applications") ? `${navText} font-semibold` : navMuted
              }`}
            >
              {t("common.nav.applications")}
            </Link>
            <Link
              href={`${prefix}/news`}
              className={`text-sm transition-colors ${
                isActive("/news") ? `${navText} font-semibold` : navMuted
              }`}
            >
              {t("common.nav.techVision")}
            </Link>
            <Link
              href={`${prefix}/about`}
              className={`text-sm transition-colors ${
                isActive("/about") ? `${navText} font-semibold` : navMuted
              }`}
            >
              {t("common.nav.about")}
            </Link>
            <Link href={`${prefix}/cooperation`}>
              <Button size="sm" className={isDarkPage ? "bg-[#0077b6] hover:bg-[#0096c7] text-white border-0" : "bg-[#0F2A5C] hover:bg-[#1E3A8A] text-white border-0"}>
                {t("common.nav.projectCooperation")}
              </Button>
            </Link>
            <Link
              href={localeSwitchHref}
              className={`text-xs border rounded px-2 py-1 transition-colors ${isDarkPage ? "text-white/80 hover:text-white border-white/40" : "text-slate-600 hover:text-[#0F2A5C] border-slate-300"}`}
            >
              {otherLocaleName}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={localeSwitchHref}
              className={`text-xs px-2 transition-colors ${isDarkPage ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-[#0F2A5C]"}`}
            >
              {otherLocaleName}
            </Link>
            <button
              className={`p-2 transition-colors ${isDarkPage ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-[#0F2A5C]"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={t("common.nav.toggleMenu")}
            >
              <Menu
                className={`h-6 w-6 transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 w-full h-full z-[9998]"
            style={{ backgroundColor: "#000000", opacity: 0.5 }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            id="mobile-menu-overlay"
            className="fixed top-16 right-0 w-max min-w-[100px] max-w-[90vw] h-[calc(100vh-4rem)] z-[9999] flex flex-col"
            style={{
              backgroundColor: "#000000",
              opacity: 1,
              boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="flex flex-col w-max pt-3 pb-3 fade-in-down px-2" style={{ backgroundColor: "#000000" }}>
              <Link
                href={`${prefix}/about`}
                className="text-white text-sm font-medium py-2.5 px-2 border-b border-white/10 w-max whitespace-nowrap text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("common.nav.about")}
              </Link>
              <Link
                href={`${prefix}/patents`}
                className="text-white text-sm font-medium py-2.5 px-2 border-b border-white/10 w-max whitespace-nowrap text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("common.nav.techArchitecture")}
              </Link>
              <div className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setProductsExpanded(!productsExpanded)}
                  className="flex items-center justify-between gap-2 w-full text-white text-sm font-medium py-2.5 px-2 hover:bg-white/10 active:bg-white/15 transition-colors text-left"
                >
                  {t("common.nav.products")}
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      productsExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {productsExpanded && (
                  <div className="pl-4 pb-2 flex flex-col gap-0.5">
                    {PRODUCT_SUBLINKS.map(({ path, key }) => (
                      <Link
                        key={path}
                        href={`${prefix}${path}`}
                        className="text-white/85 text-sm py-1.5 px-2 hover:bg-white/10 rounded transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t(key)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href={`${prefix}/applications`}
                className="text-white text-sm font-medium py-2.5 px-2 border-b border-white/10 w-max whitespace-nowrap text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("common.nav.applications")}
              </Link>
              <Link
                href={`${prefix}/news`}
                className="text-white text-sm font-medium py-2.5 px-2 border-b border-white/10 w-max whitespace-nowrap text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("common.nav.techVision")}
              </Link>
              <Link
                href={`${prefix}/cooperation`}
                className="text-white text-sm font-medium py-2.5 px-2 border-b border-white/10 w-max whitespace-nowrap text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("common.nav.projectCooperation")}
              </Link>
              <Link
                href={localeSwitchHref}
                className="text-white text-sm font-medium py-2.5 px-2 w-max whitespace-nowrap text-center hover:bg-white/10 active:bg-white/15 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {otherLocaleName}
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
