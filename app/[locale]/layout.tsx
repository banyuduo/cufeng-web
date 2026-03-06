import type React from "react"
import { locales, type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"
import { LocaleProvider } from "@/components/locale-provider"

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
