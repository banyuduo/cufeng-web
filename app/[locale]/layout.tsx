import type React from "react"
import type { Metadata } from "next"
import { locales, type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"
import { LocaleProvider } from "@/components/locale-provider"
import { TranslationsProvider } from "@/components/translations-provider"
import { getTranslationsData } from "@/lib/translations"
import { LOCALE_DESCRIPTION } from "@/lib/seo"

const localeMetadata: Record<Locale, { title: string; description: string }> = {
  zh: {
    title: "ToSpike - 金刚石铜高导热复合材料",
    description: LOCALE_DESCRIPTION.zh,
  },
  en: {
    title: "ToSpike - High-Thermal-Conductivity Diamond-Copper Composite",
    description: LOCALE_DESCRIPTION.en,
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
  const translationsData = await getTranslationsData(validLocale)

  return (
    <div data-locale={validLocale} className="contents">
      <LocaleProvider locale={validLocale}>
        <TranslationsProvider data={translationsData}>
          {children}
        </TranslationsProvider>
      </LocaleProvider>
    </div>
  )
}
