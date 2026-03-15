import { TranslationsProvider } from "@/components/translations-provider"
import { getTranslationsData } from "@/lib/translations"
import { defaultLocale } from "@/lib/i18n"

export default async function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getTranslationsData(defaultLocale)
  return <TranslationsProvider data={data}>{children}</TranslationsProvider>
}
