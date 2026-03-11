"use client"

import { usePathname } from "next/navigation"
import { isValidLocale, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

export function RadarChartLoading() {
  const pathname = usePathname()
  const pathSegments = pathname?.replace(/^\/+|\/+$/g, "").split("/") ?? []
  const localeFromPath = pathSegments[0]
  const locale: Locale = isValidLocale(localeFromPath) ? localeFromPath : "zh"
  const t = getTranslations(locale)

  return (
    <div className="w-full max-w-[min(100%,calc(100vw-2rem))] sm:max-w-md lg:max-w-lg mx-auto min-h-[min(90vw,420px)] sm:min-h-[380px] md:min-h-[280px] -mx-4 sm:mx-auto flex items-center justify-center text-slate-400">
      {t("common.loading")}
    </div>
  )
}
