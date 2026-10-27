import type React from "react"
import type { Metadata } from "next"
import { TranslationsProvider } from "@/components/translations-provider"
import { getTranslationsData } from "@/lib/translations"
import { AnalyticsEmbed } from "@/components/analytics-embed"
import { JsonLd } from "@/components/json-ld"
import { fontVariableClassName } from "@/lib/fonts"
import { duplicateRouteMetadata, ROOT_METADATA } from "@/lib/seo"
import "../globals.css"

export const metadata: Metadata = {
  ...ROOT_METADATA,
  ...duplicateRouteMetadata("/products/"),
}

export default async function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getTranslationsData("zh")
  return (
    <html lang="zh-CN" className={fontVariableClassName} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <JsonLd />
        <TranslationsProvider data={data}>{children}</TranslationsProvider>
        <AnalyticsEmbed />
      </body>
    </html>
  )
}
