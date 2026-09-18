import type React from "react"
import type { Metadata } from "next"
import { HtmlLangSync } from "@/components/html-lang-sync"
import { JsonLd } from "@/components/json-ld"
import { fontVariableClassName } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tospike.com"),
  title: "ToSpike - 金刚石铜高导热复合材料",
  description: "专注金刚石铜复合材料、碳基复合材料等高性能热管理解决方案，从工具制造到材料科学的技术革命",
  icons: {
    icon: [{ url: "/og-image.png?v=2", sizes: "any", type: "image/png" }],
    apple: "/og-image.png?v=2",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.tospike.com",
    siteName: "ToSpike - 簇锋科技",
    images: [
      {
        url: "/og-image.png?v=2",
        width: 512,
        height: 512,
        alt: "簇锋科技 ToSpike Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png?v=2"],
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
        <HtmlLangSync />
        <JsonLd />
        <svg className="hidden" aria-hidden="true">
          <defs>
            <filter id="logo-white-remove" colorInterpolationFilters="sRGB">
              <feComponentTransfer>
                <feFuncA type="table" tableValues="1 1 1 1 1 1 1 1 1 0" />
              </feComponentTransfer>
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  )
}
