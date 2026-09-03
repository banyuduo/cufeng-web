import { Calendar, Building, Users, MapPin, Wrench, ChefHat, Cpu, FileText, ArrowRight, BookOpen, Zap, TrendingUp, Atom, Microscope } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { DarkPagePatternBg } from "@/components/dark-page-pattern-bg"
import { InPageAnchor, ScrollToHash } from "@/components/in-page-anchor"
import { getIndustryArticles } from "@/lib/industry-articles"
import { getTranslations } from "@/lib/translations"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"
import { ensureTrailingSlash } from "@/lib/site-path"

function getArticlePreview(content: string, maxLen = 120) {
  const clean = content.replace(/\*\*[^*]+\*\*/g, (m) => m.slice(2, -2))
  return clean.length > maxLen ? clean.slice(0, maxLen) + "…" : clean
}

const COMPANY_NEWS_IDS = [
  "2025-patents",
  "2025-diamond-copper",
  "2024-nonstick",
  "2023-brazing-tools",
  "2023-relocation",
  "2022-team",
  "2018-research-center",
  "2018-website",
  "2018-founding",
] as const

const NEWS_ICONS = {
  "2025-patents": FileText,
  "2025-diamond-copper": Cpu,
  "2024-nonstick": ChefHat,
  "2023-brazing-tools": Wrench,
  "2023-relocation": MapPin,
  "2022-team": Users,
  "2018-research-center": Building,
  "2018-website": Building,
  "2018-founding": Building,
} as const

export default async function NewsPage({
  params,
}: {
  params?: Promise<{ locale?: string }>
}) {
  const resolved = await (params ?? Promise.resolve({}))
  const validLocale: Locale = resolved.locale && isValidLocale(resolved.locale) ? resolved.locale : defaultLocale
  const t = await getTranslations(validLocale)
  const prefix = `/${validLocale}`

  const industryArticlesData = await getIndustryArticles(validLocale)
  const companyNews = COMPANY_NEWS_IDS.map((id) => ({
    id,
    date: t(`news.items.${id}.date`),
    title: t(`news.items.${id}.title`),
    summary: t(`news.items.${id}.summary`),
    category: t(`news.items.${id}.category`),
    icon: NEWS_ICONS[id],
  }))

  return (
    <div className="min-h-screen bg-[#0B1F33]">
      <Navigation locale={validLocale} />
      <div className="relative overflow-x-clip">
      <DarkPagePatternBg />
      <div className="relative z-10">
      <ScrollToHash />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 lg:pt-36 xl:pt-40 pb-12 sm:pb-16 lg:pb-20 overflow-hidden pointer-events-none">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 pointer-events-auto">
          <div className="max-w-3xl">
            <h1 className="page-h1 mb-6 text-balance text-white">{t("news.title")}</h1>
            <p className="page-lead text-white/75 text-pretty">
              {t("news.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-12 border-t border-white/12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 公司动态卡片 */}
              <InPageAnchor
                targetId="company-news"
                className="group rounded-xl p-5 sm:p-8 bg-white/[0.03] border border-white/12 hover:border-white/25  transition-all "
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0  transition-colors">
                    <Building className="h-7 w-7 text-white/80" />
                  </div>
                  <div className="flex-1">
                    <h3 className="page-h3 mb-2 text-white group-hover:text-white transition-colors">
                      {t("news.companyNews")}
                    </h3>
                    <p className="page-caption text-white/75">
                      {t("news.companyNewsDesc")}
                    </p>
                    <div className="mt-4 flex items-center text-white/80 page-caption font-medium">
                      {t("news.viewDetails")} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </InPageAnchor>

              {/* 行业信息卡片 */}
              <div className="group rounded-xl p-5 sm:p-8 bg-white/[0.03] border border-white/12 hover:border-white/25  transition-all ">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0  transition-colors">
                    <TrendingUp className="h-7 w-7 text-white/80" />
                  </div>
                  <div className="flex-1">
                    <InPageAnchor
                      targetId="industry-info"
                      className="block"
                    >
                      <h3 className="page-h3 mb-2 text-white group-hover:text-white transition-colors">
                        {t("news.industryInfo")}
                      </h3>
                    </InPageAnchor>
                    <p className="page-caption text-white/75 mb-4">
                      {t("news.industryInfoDesc")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <InPageAnchor
                        targetId="industry-trends"
                        className="text-xs px-3 py-1.5 bg-[#0F4C81] hover:bg-[#163A5F] rounded-full text-white/90 transition-colors border border-white/15"
                      >
                        {t("news.industryTrends")}
                      </InPageAnchor>
                      <InPageAnchor
                        targetId="basic-theory"
                        className="text-xs px-3 py-1.5 bg-[#0F4C81] hover:bg-[#163A5F] rounded-full text-white/90 transition-colors border border-white/15"
                      >
                        {t("news.basicTheory")}
                      </InPageAnchor>
                      <InPageAnchor
                        targetId="frontier-tech"
                        className="text-xs px-3 py-1.5 bg-[#0F4C81] hover:bg-[#163A5F] rounded-full text-white/90 transition-colors border border-white/15"
                      >
                        {t("news.frontierTech")}
                      </InPageAnchor>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company News */}
      <section
        id="company-news"
        className="py-10 sm:py-16 lg:py-24 border-t border-white/12 scroll-mt-24 bg-[#F9FAFC]"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="page-h2 mb-4 text-slate-900">{t("news.companyNews")}</h2>
            <p className="page-body text-slate-600 mb-6 sm:mb-8 lg:mb-12">
              {t("news.companyNewsDesc")}
            </p>

            <div className="space-y-6">
              {companyNews.map((news, index) => (
                <a
                  key={index}
                  href={ensureTrailingSlash(`${prefix}/news/${news.id}`)}
                  className="block rounded-xl p-4 sm:p-6 bg-white border border-slate-200 hover:border-[#0F4C81]/40 transition-colors group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#E8EEFF] flex items-center justify-center flex-shrink-0">
                      <news.icon className="h-6 w-6 text-[#0F4C81]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="page-caption text-slate-500 flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {news.date}
                        </span>
                        <span className="page-caption px-2 py-1 bg-slate-50 border border-slate-200 rounded-full text-slate-700">
                          {news.category}
                        </span>
                      </div>
                      <h3 className="page-h3 mb-3 text-slate-900 group-hover:text-[#0F2A5C] transition-colors">
                        {news.title}
                      </h3>
                      <p className="page-body text-slate-600">{news.summary}</p>
                      <div className="mt-4 flex items-center text-[#0F4C81] page-caption font-medium">
                        {t("news.viewDetails")} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Information */}
      <section id="industry-info" className="py-10 sm:py-16 lg:py-24 border-t border-white/12 bg-[#F9FAFC] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="page-h2 mb-4 text-slate-900">{t("news.industryInfo")}</h2>
            <p className="page-body text-slate-600 mb-6 sm:mb-8 lg:mb-12">
              {t("news.industryInfoDesc")}
            </p>

            {/* 行业趋势 */}
            <div id="industry-trends" className="mb-8 sm:mb-10 lg:mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-[#0F4C81]" />
                <h3 className="page-h3 text-slate-900">{t("news.industryTrends")}</h3>
              </div>
              <div className="space-y-6">
                {industryArticlesData
                  .filter((a) => a.sectionId === "industry-trends")
                  .map((article) => (
                    <a
                      key={article.id}
                      href={ensureTrailingSlash(`${prefix}/news/${article.id}`)}
                      className="block rounded-xl p-4 sm:p-6 bg-white border border-slate-200 hover:border-[#0F4C81]/40 transition-colors group shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-[#E8EEFF] flex items-center justify-center flex-shrink-0">
                          <article.icon className="h-6 w-6 text-[#0F4C81]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="page-h4 mb-2 text-slate-900 group-hover:text-[#0F2A5C] transition-colors">
                            {article.title}
                          </h4>
                          <p className="page-body text-slate-600 line-clamp-2">
                            {getArticlePreview(article.sections[0]?.content ?? "")}
                          </p>
                          <div className="mt-4 flex items-center text-[#0F4C81] page-caption font-medium">
                            {t("news.viewDetails")} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>

            {/* 基础理论 */}
            <div id="basic-theory" className="mb-8 sm:mb-10 lg:mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-6 w-6 text-[#0F4C81]" />
                <h3 className="page-h3 text-slate-900">{t("news.basicTheory")}</h3>
              </div>
              <div className="space-y-6">
                {industryArticlesData
                  .filter((a) => a.sectionId === "basic-theory")
                  .map((article) => (
                    <a
                      key={article.id}
                      href={ensureTrailingSlash(`${prefix}/news/${article.id}`)}
                      className="block rounded-xl p-4 sm:p-6 bg-white border border-slate-200 hover:border-[#0F4C81]/40 transition-colors group shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-[#E8EEFF] flex items-center justify-center flex-shrink-0">
                          <article.icon className="h-6 w-6 text-[#0F4C81]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="page-h4 mb-2 text-slate-900 group-hover:text-[#0F2A5C] transition-colors">
                            {article.title}
                          </h4>
                          <p className="page-body text-slate-600 line-clamp-2">
                            {getArticlePreview(article.sections[0]?.content ?? "")}
                          </p>
                          <div className="mt-4 flex items-center text-[#0F4C81] page-caption font-medium">
                            {t("news.viewDetails")} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>

            {/* 前沿技术 */}
            <div id="frontier-tech" className="mb-8 sm:mb-10 lg:mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-6 w-6 text-[#0F4C81]" />
                <h3 className="page-h3 text-slate-900">{t("news.frontierTech")}</h3>
              </div>
              <div className="space-y-6">
                {industryArticlesData
                  .filter((a) => a.sectionId === "frontier-tech")
                  .map((article) => (
                    <a
                      key={article.id}
                      href={ensureTrailingSlash(`${prefix}/news/${article.id}`)}
                      className="block rounded-xl p-4 sm:p-6 bg-white border border-slate-200 hover:border-[#0F4C81]/40 transition-colors group shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-[#E8EEFF] flex items-center justify-center flex-shrink-0">
                          <article.icon className="h-6 w-6 text-[#0F4C81]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="page-h4 mb-2 text-slate-900 group-hover:text-[#0F2A5C] transition-colors">
                            {article.title}
                          </h4>
                          <p className="page-body text-slate-600 line-clamp-2">
                            {getArticlePreview(article.sections[0]?.content ?? "")}
                          </p>
                          <div className="mt-4 flex items-center text-[#0F4C81] page-caption font-medium">
                            {t("news.viewDetails")} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterNav locale={validLocale} />
      </div>
      </div>
    </div>
  )
}
