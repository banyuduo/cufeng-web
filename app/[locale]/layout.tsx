import type React from "react"
import type { Metadata } from "next"
import { locales, type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"
import { LocaleProvider } from "@/components/locale-provider"

const localeMetadata: Record<Locale, { title: string; description: string }> = {
  zh: {
    title: "ToSpike - 先进热管理材料技术",
    description: "专注金刚石铜复合材料、碳基复合材料等高性能热管理解决方案，从工具制造到材料科学的技术革命",
  },
  en: {
    title: "ToSpike - Advanced Thermal Management Materials",
    description: "Advanced thermal management solutions for diamond-copper composites, carbon-based composites, and beyond. From tool manufacturing to materials science.",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale
  return localeMetadata[validLocale]
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale

  return <LocaleProvider locale={validLocale}>{children}</LocaleProvider>
}
