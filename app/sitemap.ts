import type { MetadataRoute } from "next"
import { SITE_PATHS, localizedUrl } from "@/lib/seo"
import { INDUSTRY_ARTICLE_IDS } from "@/lib/industry-article-ids"
import { getCompanyNewsIds } from "@/lib/company-news"
import type { Locale } from "@/lib/i18n"

export const dynamic = "force-static"

const locales: Locale[] = ["zh", "en"]

function entry(path: string): MetadataRoute.Sitemap[number][] {
  return locales.map((locale) => ({
    url: localizedUrl(locale, path),
    lastModified: new Date(),
    alternates: {
      languages: {
        "zh-CN": localizedUrl("zh", path),
        en: localizedUrl("en", path),
        "x-default": localizedUrl("zh", path),
      },
    },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const newsPaths = [...getCompanyNewsIds(), ...INDUSTRY_ARTICLE_IDS].map(
    (id) => `/news/${id}/`
  )
  return [...SITE_PATHS, ...newsPaths].flatMap((path) => entry(path))
}
