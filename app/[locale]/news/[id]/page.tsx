import NewsDetailPage from "../../../news/[id]/page"
import { isValidLocale } from "@/lib/i18n"
import { getIndustryArticlesMap } from "@/lib/industry-articles"

const industryIds = Object.keys(getIndustryArticlesMap("zh"))
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

export default async function LocaleNewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params
  return <NewsDetailPage params={Promise.resolve({ locale, id })} />
}
