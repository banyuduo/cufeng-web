import { TranslationsProvider } from "@/components/translations-provider"
import { getTranslationsData } from "@/lib/translations"
import { duplicateRouteMetadata } from "@/lib/seo"

export const metadata = duplicateRouteMetadata("/products/")

export default async function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getTranslationsData("zh")
  return <TranslationsProvider data={data}>{children}</TranslationsProvider>
}
