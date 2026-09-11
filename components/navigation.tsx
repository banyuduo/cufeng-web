"use client"

import { Link } from "@/components/app-link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
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
  const [menuMounted, setMenuMounted] = useState(false)
  const pathname = usePathname()
  const t = useTranslations()

  // 从 pathname 解析 locale：/zh/xxx 或 /en/xxx，兼容 trailingSlash
  const pathSegments = pathname.replace(/^\/+|\/+$/g, "").split("/")
  const localeFromPath = pathSegments[0]
  const locale: Locale =
    localeProp ?? (isValidLocale(localeFromPath) ? localeFromPath : "zh")
  const prefix = `/${locale}`

  useEffect(() => {
    setMenuMounted(true)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

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
  const isSolidNavyPage = isDarkPage
  const navBg = isSolidNavyPage
    ? "bg-[#0B1F33]/95 border-white/10"
    : isDarkPage
    ? "bg-[#001a33]/95 border-[#003366]/50"
    : "bg-white/95 border-slate-200/80"
  const navText = isDarkPage ? "text-white" : "text-[#0F2A5C]"
  const navMuted = isDarkPage
    ? "text-white/80 hover:text-white"
    : "text-slate-600 hover:text-[#0F2A5C]"

  const desktopNavClass =
    locale === "en"
      ? "hidden xl:flex items-center gap-4 2xl:gap-8"
      : "hidden lg:flex items-center gap-4 xl:gap-8"
  const mobileToggleClass =
    locale === "en" ? "flex items-center gap-2 xl:hidden" : "flex items-center gap-2 lg:hidden"

  return (
    <nav className={`border-b fixed inset-x-0 top-0 z-[300] isolate pointer-events-auto ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={prefix} className={`text-xl font-bold whitespace-nowrap shrink-0 ${navText}`}>
            {t("common.nav.brand")}
          </Link>

          <div className={desktopNavClass}>
            <Link
              href={`${prefix}/patents`}
              className={`whitespace-nowrap text-sm lg:text-base transition-colors ${
                isActive("/patents") ? `${navText} font-semibold` : navMuted
              }`}
            >
              {t("common.nav.techArchitecture")}
            </Link>
            <div className="relative group">
              <Link
                href={`${prefix}/products`}
                className={`inline-flex items-center gap-1 whitespace-nowrap text-sm lg:text-base transition-colors ${
                  isActive("/products") ? `${navText} font-semibold` : navMuted
                }`}
              >
                {t("common.nav.products")}
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute left-1/2 top-full z-[110] w-max -translate-x-1/2 pt-2">
                <div
                  className={`min-w-[11.5rem] rounded-lg border py-1.5 shadow-lg ${
                    isDarkPage
                      ? "bg-[#0B1F33] border-white/12"
                      : "bg-white border-slate-200"
                  }`}
                >
                  {PRODUCT_SUBLINKS.map(({ path, key }) => (
                    <Link
                      key={path}
                      href={`${prefix}${path}`}
                      className={`block px-3.5 py-2 text-sm whitespace-nowrap transition-colors ${
                        isDarkPage
                          ? "text-white/80 hover:bg-white/10 hover:text-white"
                          : "text-slate-600 hover:bg-slate-50 hover:text-[#0F2A5C]"
                      }`}
                    >
                      {t(key)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href={`${prefix}/applications`}
              className={`whitespace-nowrap text-sm lg:text-base transition-colors ${
                isActive("/applications") ? `${navText} font-semibold` : navMuted
              }`}
            >
              {t("common.nav.applications")}
            </Link>
            <Link
              href={`${prefix}/news`}
              className={`whitespace-nowrap text-sm lg:text-base transition-colors ${
                isActive("/news") ? `${navText} font-semibold` : navMuted
              }`}
            >
              {t("common.nav.techVision")}
            </Link>
            <Link
              href={`${prefix}/about`}
              className={`whitespace-nowrap text-sm lg:text-base transition-colors ${
                isActive("/about") ? `${navText} font-semibold` : navMuted
              }`}
            >
              {t("common.nav.about")}
            </Link>
            <Link href={`${prefix}/cooperation`}>
              <Button size="sm" className="page-btn-primary bg-[#2A7FC4] hover:bg-[#1B5F96] text-white border-0">
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

          <div className={mobileToggleClass}>
            <Link
              href={localeSwitchHref}
              className={`inline-flex items-center min-h-[44px] text-xs px-2 touch-manipulation transition-colors ${isDarkPage ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-[#0F2A5C]"}`}
            >
              {otherLocaleName}
            </Link>
            <button
              type="button"
              className={`relative z-[301] p-2 touch-manipulation pointer-events-auto transition-colors ${isDarkPage ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-[#0F2A5C]"}`}
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={t("common.nav.toggleMenu")}
            >
              <Menu
                className={`h-6 w-6 pointer-events-none transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {menuMounted &&
        mobileMenuOpen &&
        createPortal(
          <div
            className="fixed inset-x-0 top-16 bottom-0 z-[400] pointer-events-auto"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div
              id="mobile-menu-overlay"
              className="absolute top-16 right-0 w-max min-w-[100px] max-w-[90vw] max-h-[calc(100vh-4rem)] overflow-y-auto flex flex-col pointer-events-auto"
              style={{
                backgroundColor: "#000000",
                boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.5)",
              }}
              onClick={(event) => event.stopPropagation()}
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
                  <div className="flex items-stretch">
                    <Link
                      href={`${prefix}/products`}
                      className="flex-1 min-w-0 text-white text-sm font-medium py-2.5 px-2 hover:bg-white/10 active:bg-white/15 transition-colors text-left"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("common.nav.products")}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setProductsExpanded(!productsExpanded)}
                      className="shrink-0 px-2 text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                      aria-expanded={productsExpanded}
                      aria-label={t("common.nav.products")}
                    >
                      <ChevronDown
                        className={`w-4 h-4 pointer-events-none transition-transform duration-200 ${
                          productsExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
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
          </div>,
          document.body
        )}
    </nav>
  )
}
