import type React from "react"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { AnalyticsEmbed } from "@/components/analytics-embed"
import { fontVariableClassName } from "@/lib/fonts"
import { defaultLocale } from "@/lib/i18n"
import { localizedUrl, ROOT_METADATA } from "@/lib/seo"
import "../globals.css"

export const metadata: Metadata = {
  ...ROOT_METADATA,
  robots: { index: false, follow: true },
  alternates: {
    canonical: localizedUrl(defaultLocale, "/"),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={fontVariableClassName} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
        <AnalyticsEmbed />
      </body>
    </html>
  )
}
