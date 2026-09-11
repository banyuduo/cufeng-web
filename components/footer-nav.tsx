"use client"

import { Link } from "@/components/app-link"
import { usePathname } from "next/navigation"
import { ChevronUp, Mail, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import type { Locale } from "@/lib/i18n"
import { useTranslations } from "@/components/translations-provider"
import { isValidLocale } from "@/lib/i18n"

export function FooterNav({ locale: localeProp }: { locale?: Locale }) {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const pathname = usePathname()

  const pathSegments = pathname.replace(/^\/+|\/+$/g, "").split("/")
  const localeFromPath = pathSegments[0]
  const locale: Locale =
    localeProp ?? (isValidLocale(localeFromPath) ? localeFromPath : "zh")

  const t = useTranslations()
  const prefix = `/${locale}`

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-[90] w-12 h-12 rounded-full bg-[#2A7FC4] hover:bg-[#1B5F96] text-white transition-colors duration-300 flex items-center justify-center group border-0 touch-manipulation"
          aria-label={t("common.footer.scrollToTop")}
        >
          <ChevronUp className="w-6 h-6 pointer-events-none group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <footer className="border-t border-white/10 bg-[#0B1F33] py-12 sm:py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-8 lg:gap-12">
            <div className="order-1 lg:order-2">
              <div className="page-body font-semibold mb-4 text-white text-left">
                {t("common.footer.products")}
              </div>
              <ul className="space-y-2 page-body text-white/70 text-left">
                <li>
                  <Link href={`${prefix}/products/diamond-copper`} className="text-white/70 hover:text-white transition-colors">
                    {t("common.footer.diamondCopper")}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/products/thermal-pad`} className="text-white/70 hover:text-white transition-colors">
                    {t("common.footer.thermalPad")}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/products/carbon-composite`} className="text-white/70 hover:text-white transition-colors">
                    {t("common.footer.carbonComposite")}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/products/nonstick-cookware`} className="text-white/70 hover:text-white transition-colors">
                    {t("common.footer.nonstickCookware")}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/products/diamond-tools`} className="text-white/70 hover:text-white transition-colors">
                    {t("common.footer.superabrasiveTools")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="order-2 lg:order-3">
              <div className="page-body font-semibold mb-4 text-white text-left">
                {t("common.footer.techAndExchange")}
              </div>
              <ul className="space-y-2 page-body text-white/70 text-left">
                <li>
                  <Link href={`${prefix}/about`} className="text-white/70 hover:text-white transition-colors">
                    {t("common.nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/patents`} className="text-white/70 hover:text-white transition-colors">
                    {t("common.nav.techArchitecture")}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/applications`} className="text-white/70 hover:text-white transition-colors">
                    {t("common.nav.applications")}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/news`} className="text-white/70 hover:text-white transition-colors">
                    {t("common.nav.techVision")}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/cooperation`} className="text-white/70 hover:text-white transition-colors">
                    {t("common.nav.projectCooperation")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="order-3 col-span-2 lg:col-span-1 lg:order-1 min-w-0">
              <div className="font-bold text-lg lg:text-xl mb-4 text-white text-left">
                {t("common.footer.brand")}
              </div>
              <p className="page-caption text-white/55 text-left break-words">{t("common.footer.platformTech")}</p>
            </div>
            <div className="order-4 col-span-2 lg:col-span-1 lg:order-4">
              <div className="page-body font-semibold mb-4 text-white text-left">
                {t("common.footer.cooperationAndSupport")}
              </div>
              <ul className="space-y-2 page-body text-white/70 text-left">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/45" />
                  <span>{t("common.footer.address")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/45" />
                  <span>{t("common.footer.email")}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8">
            <div className="page-caption text-white/45 flex flex-col md:flex-row items-start md:items-center justify-center gap-3 md:gap-8 px-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2 text-left sm:text-center">
                <span>{t("common.footer.copyright")}</span>
                <span className="hidden sm:inline text-white/30">|</span>
                <div className="flex items-center gap-1.5 group">
                  <img
                    src="/images/police-filing-badge.png"
                    alt={t("common.footer.policeFiling")}
                    className="w-3.5 h-3.5 object-contain grayscale group-hover:grayscale-0 transition-all opacity-80"
                  />
                  <Link
                    href="https://beian.miit.gov.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/45 hover:text-white transition-colors"
                  >
                    {t("common.footer.icp")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
