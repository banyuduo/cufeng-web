"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { isValidLocale, type Locale } from "@/lib/i18n"

const COPY: Record<Locale, { code: string; title: string; subtitle: string; back: string }> = {
  zh: {
    code: "404",
    title: "页面未找到",
    subtitle: "您访问的页面不存在或已被移动，请返回首页继续浏览。",
    back: "返回首页",
  },
  en: {
    code: "404",
    title: "Page Not Found",
    subtitle: "The page you are looking for does not exist or has been moved. Please return to the home page.",
    back: "Back to Home",
  },
}

export default function NotFound() {
  const params = useParams<{ locale?: string }>()
  const locale: Locale =
    params?.locale && isValidLocale(params.locale) ? params.locale : "zh"
  const copy = COPY[locale]

  return (
    <main className="min-h-screen bg-[#0B1F33] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center py-24 sm:py-32">
        <div className="text-[#2A7FC4] font-semibold tracking-[0.2em] text-sm sm:text-base mb-6">
          {copy.code}
        </div>
        <h1 className="page-h1 lg:text-6xl xl:text-7xl text-white mb-6">{copy.title}</h1>
        <p className="page-lead page-measure text-white/70 mx-auto mb-10">{copy.subtitle}</p>
        <Link
          href={`/${locale}/`}
          className="inline-flex items-center justify-center rounded-lg bg-[#2A7FC4] hover:bg-[#1B5F96] text-white px-8 py-3 text-base font-medium transition-colors"
        >
          {copy.back}
        </Link>
      </div>
    </main>
  )
}
