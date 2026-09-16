import NewsDetailPage from "../../../news/[id]/page"
import { isValidLocale, defaultLocale } from "@/lib/i18n"
import { INDUSTRY_ARTICLE_IDS } from "@/lib/industry-article-ids"
import { seoMetadata } from "@/lib/seo"
import type { Metadata } from "next"

const industryIds = [...INDUSTRY_ARTICLE_IDS]
const newsIds = [
  "2025-patents",
  "2025-diamond-copper",
  "2024-nonstick",
  "2023-brazing-tools",
  "2023-relocation",
  "2022-team",
  "2018-research-center",
  "2018-website",
  "2018-founding",
  ...industryIds,
]

export async function generateStaticParams() {
  const locales = (["zh", "en"] as const).filter(isValidLocale)
  return locales.flatMap((locale) => newsIds.map((id) => ({ locale, id })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}): Promise<Metadata> {
  const { locale, id } = await params
  const loc = isValidLocale(locale) ? locale : defaultLocale
  return seoMetadata({
    locale: loc,
    path: `/news/${id}/`,
    title:
      loc === "en"
        ? `Tech Vision | ToSpike`
        : `技术视界 | 簇锋科技 ToSpike`,
  })
}

export default async function LocaleNewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params
  return <NewsDetailPage params={Promise.resolve({ locale, id })} />
}
