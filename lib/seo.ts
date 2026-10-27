import type { Metadata } from "next"
import { defaultLocale, isValidLocale, type Locale } from "@/lib/i18n"

export const SITE_ORIGIN = "https://www.tospike.com"

export function withTrailingSlash(path: string): string {
  if (path === "/") return "/"
  const normalized = path.startsWith("/") ? path : `/${path}`
  return normalized.endsWith("/") ? normalized : `${normalized}/`
}

export function localizedPath(locale: Locale, path: string): string {
  const p = withTrailingSlash(path)
  if (p === "/") return `/${locale}/`
  return `/${locale}${p}`
}

export function localizedUrl(locale: Locale, path: string): string {
  return `${SITE_ORIGIN}${localizedPath(locale, path)}`
}

const HOME_TITLE: Record<Locale, string> = {
  zh: "ToSpike - 金刚石铜高导热复合材料",
  en: "ToSpike - High-Thermal-Conductivity Diamond-Copper Composite",
}

export const LOCALE_DESCRIPTION: Record<Locale, string> = {
  zh: "金刚石铜复合材料 · 碳基复合材料 · 高性能热管理解决方案 | 簇锋科技 ToSpike",
  en: "Advanced thermal management solutions for diamond-copper composites, carbon-based composites, and beyond. From tool manufacturing to materials science.",
}

const SECTION_TITLE: Record<string, Record<Locale, string>> = {
  "/": HOME_TITLE,
  "/architecture/": {
    zh: "技术架构 | 簇锋科技 ToSpike",
    en: "Technology Architecture | ToSpike",
  },
  "/products/": {
    zh: "技术成果 | 簇锋科技 ToSpike",
    en: "Technical Achievements | ToSpike",
  },
  "/products/diamond-copper/": {
    zh: "金刚石铜复合材料 | 簇锋科技 ToSpike",
    en: "Diamond-Copper Composite | ToSpike",
  },
  "/products/thermal-pad/": {
    zh: "柔性导热垫片 | 簇锋科技 ToSpike",
    en: "Thermal Interface Material | ToSpike",
  },
  "/products/carbon-composite/": {
    zh: "碳基复合材料 | 簇锋科技 ToSpike",
    en: "All-Carbon Composite | ToSpike",
  },
  "/products/nonstick-cookware/": {
    zh: "钻石不粘涂层 | 簇锋科技 ToSpike",
    en: "Diamond Nonstick Coating | ToSpike",
  },
  "/products/diamond-tools/": {
    zh: "超磨熔固工具 | 簇锋科技 ToSpike",
    en: "Superabrasive Fusion-Bonded Tools | ToSpike",
  },
  "/applications/": {
    zh: "应用领域 | 簇锋科技 ToSpike",
    en: "Applications | ToSpike",
  },
  "/news/": {
    zh: "技术视界 | 簇锋科技 ToSpike",
    en: "Tech Vision | ToSpike",
  },
  "/about/": {
    zh: "关于我们 | 簇锋科技 ToSpike",
    en: "About Us | ToSpike",
  },
  "/cooperation/": {
    zh: "项目合作 | 簇锋科技 ToSpike",
    en: "Project Cooperation | ToSpike",
  },
}

export function seoMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: string
  path: string
  title?: string
  description?: string
}): Metadata {
  const loc: Locale = isValidLocale(locale) ? locale : defaultLocale
  const p = withTrailingSlash(path)
  const canonical = localizedUrl(loc, p)
  const zh = localizedUrl("zh", p)
  const en = localizedUrl("en", p)
  const sectionTitle = title ?? SECTION_TITLE[p]?.[loc] ?? HOME_TITLE[loc]

  return {
    title: sectionTitle,
    ...(description ? { description } : {}),
    alternates: {
      canonical,
      languages: {
        "zh-CN": zh,
        en,
        "x-default": zh,
      },
    },
    openGraph: {
      url: canonical,
      locale: loc === "en" ? "en_US" : "zh_CN",
      alternateLocale: loc === "en" ? ["zh_CN"] : ["en_US"],
    },
  }
}

/** Locale-prefixed pages: canonical + hreflang. */
export function localeSeo(path: string) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>
  }): Promise<Metadata> {
    const { locale } = await params
    const loc = isValidLocale(locale) ? locale : defaultLocale
    return seoMetadata({ locale: loc, path, description: LOCALE_DESCRIPTION[loc] })
  }
}

/** Shared site-wide metadata reused by every root layout (single source of truth). */
export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: HOME_TITLE.zh,
  description: "专注金刚石铜、碳基复合材料等高性能热管理方案——从工具制造到材料科学的持续演进",
  icons: {
    icon: [{ url: "/og-image.png?v=2", sizes: "any", type: "image/png" }],
    apple: "/og-image.png?v=2",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: SITE_ORIGIN,
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

/**
 * Unprefixed duplicate routes (/architecture/ etc.): keep noindex + canonical=zh,
 * and give each route a proper title + hreflang alternate so crawlers never
 * see the homepage title on section pages.
 */
export function duplicateRouteMetadata(path: string): Metadata {
  const p = withTrailingSlash(path)
  const zh = localizedUrl("zh", p)
  const en = localizedUrl("en", p)
  const sectionTitle =
    SECTION_TITLE[p]?.zh ??
    (p.startsWith("/news/") ? SECTION_TITLE["/news/"].zh : HOME_TITLE.zh)
  return {
    title: sectionTitle,
    alternates: {
      canonical: zh,
      languages: {
        "zh-CN": zh,
        en,
        "x-default": zh,
      },
    },
    robots: {
      index: false,
      follow: true,
    },
  }
}

export const SITE_PATHS = [
  "/",
  "/architecture/",
  "/products/",
  "/products/diamond-copper/",
  "/products/thermal-pad/",
  "/products/carbon-composite/",
  "/products/nonstick-cookware/",
  "/products/diamond-tools/",
  "/applications/",
  "/news/",
  "/about/",
  "/cooperation/",
] as const
