import type React from "react"
import type { Metadata } from "next"
import { HtmlLangSync } from "@/components/html-lang-sync"
import { AnalyticsEmbed } from "@/components/analytics-embed"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tospike.com"),
  title: "ToSpike - 先进热管理材料技术",
  description: "专注金刚石铜复合材料、碳基复合材料等高性能热管理解决方案，从工具制造到材料科学的技术革命",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/og-image.png", sizes: "any", type: "image/png" }],
    apple: "/og-image.png",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.tospike.com",
    siteName: "ToSpike - 簇锋科技",
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: "簇锋科技 ToSpike Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <HtmlLangSync />
        {children}
        <AnalyticsEmbed />
      </body>
    </html>
  )
}
