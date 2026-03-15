"use client"

import { useTranslations } from "@/components/translations-provider"

export function RadarChartLoading() {
  const t = useTranslations()

  return (
    <div className="w-full max-w-[min(100%,calc(100vw-2rem))] sm:max-w-md lg:max-w-lg mx-auto min-h-[min(90vw,420px)] sm:min-h-[380px] md:min-h-[280px] -mx-4 sm:mx-auto flex items-center justify-center text-slate-400">
      {t("common.loading")}
    </div>
  )
}
