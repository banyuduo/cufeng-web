import { Calendar, Building, Users, MapPin, Wrench, ChefHat, Cpu, FileText, ArrowRight, BookOpen, Zap, TrendingUp, Atom, Microscope } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { IndustryInfoNav } from "@/components/industry-info-nav"
import { DarkPagePatternBg } from "@/components/dark-page-pattern-bg"
import { getIndustryArticles } from "@/lib/industry-articles"
import { getTranslations } from "@/lib/translations"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"

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
  const t = getTranslations(validLocale)
  const prefix = `/${validLocale}`

  const industryArticlesData = getIndustryArticles(validLocale)
  const companyNews = COMPANY_NEWS_IDS.map((id) => ({
    id,
    date: t(`news.items.${id}.date`),
    title: t(`news.items.${id}.title`),
    summary: t(`news.items.${id}.summary`),
    category: t(`news.items.${id}.category`),
    icon: NEWS_ICONS[id],
  }))

  return (
    <div className="min-h-screen relative">
      <DarkPagePatternBg />
      <div className="relative z-10">
      <Navigation locale={validLocale} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="page-h1 mb-6 text-balance text-white">{t("news.title")}</h1>
            <p className="text-xl text-white/85 text-pretty">
              {t("news.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-12 border-t border-[#0344b3]/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 公司动态卡片 */}
              <a
                href="#company-news"
                className="group rounded-xl p-8 bg-[#0344b3]/60 border border-[#4169E1]/35 hover:border-[#4169E1]/60 backdrop-blur-sm transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-[#73DBFF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#73DBFF]/30 transition-colors">
                    <Building className="h-7 w-7 text-[#73DBFF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-[#73DBFF] transition-colors">
                      {t("news.companyNews")}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {t("news.companyNewsDesc")}
                    </p>
                    <div className="mt-4 flex items-center text-[#73DBFF] text-sm font-medium">
                      {t("news.viewDetails")} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              {/* 行业信息卡片 */}
              <div className="group rounded-xl p-8 bg-[#0344b3]/60 border border-[#4169E1]/35 hover:border-[#4169E1]/60 backdrop-blur-sm transition-all hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-[#73DBFF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#73DBFF]/30 transition-colors">
                    <TrendingUp className="h-7 w-7 text-[#73DBFF]" />
                  </div>
                  <div className="flex-1">
                    <a
                      href="#industry-info"
                      className="block"
                    >
                      <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-[#73DBFF] transition-colors">
                        {t("news.industryInfo")}
                      </h3>
                    </a>
                    <p className="text-white/75 text-sm leading-relaxed mb-4">
                      {t("news.industryInfoDesc")}
                    </p>
                    <IndustryInfoNav />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company News */}
      <section id="company-news" className="py-16 border-t border-[#0344b3]/50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="page-h2 mb-4 text-2xl md:text-3xl text-white">{t("news.companyNews")}</h2>
            <p className="text-white/75 mb-12">
              {t("news.companyNewsDesc")}
            </p>

            <div className="space-y-6">
              {companyNews.map((news, index) => (
                <Link
                  key={index}
                  href={`${prefix}/news/${news.id}`}
                  className="block rounded-xl p-6 bg-[#0344b3]/60 border border-[#4169E1]/35 hover:border-[#4169E1]/60 backdrop-blur-sm transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#73DBFF]/20 flex items-center justify-center flex-shrink-0">
                      <news.icon className="h-6 w-6 text-[#73DBFF]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-white/70 flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {news.date}
                        </span>
                        <span className="text-xs px-2 py-1 bg-[#0344b3] rounded-full text-white/90">
                          {news.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#73DBFF] transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">{news.summary}</p>
                      <div className="mt-4 flex items-center text-[#73DBFF] text-sm font-medium">
                        {t("news.viewDetails")} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Information */}
      <section id="industry-info" className="py-16 border-t border-[#0344b3]/50 bg-[#0344b3]/30 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="page-h2 mb-4 text-2xl md:text-3xl text-white">{t("news.industryInfo")}</h2>
            <p className="text-white/75 mb-12">
              {t("news.industryInfoDesc")}
            </p>

            {/* 行业趋势 */}
            <div id="industry-trends" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-[#73DBFF]" />
                <h3 className="text-2xl font-semibold text-white">{t("news.industryTrends")}</h3>
              </div>
              <div className="space-y-6">
                {industryArticlesData
                  .filter((a) => a.sectionId === "industry-trends")
                  .map((article) => (
                    <Link
                      key={article.id}
                      href={`${prefix}/news/${article.id}`}
                      className="block rounded-xl p-6 bg-[#0344b3]/60 border border-[#4169E1]/35 hover:border-[#4169E1]/60 backdrop-blur-sm transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-[#73DBFF]/20 flex items-center justify-center flex-shrink-0">
                          <article.icon className="h-6 w-6 text-[#73DBFF]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-[#73DBFF] transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-white/80 line-clamp-2">
                            {getArticlePreview(article.sections[0]?.content ?? "")}
                          </p>
                          <div className="mt-4 flex items-center text-[#73DBFF] text-sm font-medium">
                            {t("news.viewDetails")} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* 基础理论 */}
            <div id="basic-theory" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-6 w-6 text-[#73DBFF]" />
                <h3 className="text-2xl font-semibold text-white">{t("news.basicTheory")}</h3>
              </div>
              <div className="space-y-6">
                {industryArticlesData
                  .filter((a) => a.sectionId === "basic-theory")
                  .map((article) => (
                    <Link
                      key={article.id}
                      href={`${prefix}/news/${article.id}`}
                      className="block rounded-xl p-6 bg-[#0344b3]/60 border border-[#4169E1]/35 hover:border-[#4169E1]/60 backdrop-blur-sm transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-[#73DBFF]/20 flex items-center justify-center flex-shrink-0">
                          <article.icon className="h-6 w-6 text-[#73DBFF]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-[#73DBFF] transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-white/80 line-clamp-2">
                            {getArticlePreview(article.sections[0]?.content ?? "")}
                          </p>
                          <div className="mt-4 flex items-center text-[#73DBFF] text-sm font-medium">
                            {t("news.viewDetails")} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* 前沿技术 */}
            <div id="frontier-tech" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-6 w-6 text-[#73DBFF]" />
                <h3 className="text-2xl font-semibold text-white">{t("news.frontierTech")}</h3>
              </div>
              <div className="space-y-6">
                {industryArticlesData
                  .filter((a) => a.sectionId === "frontier-tech")
                  .map((article) => (
                    <Link
                      key={article.id}
                      href={`${prefix}/news/${article.id}`}
                      className="block rounded-xl p-6 bg-[#0344b3]/60 border border-[#4169E1]/35 hover:border-[#4169E1]/60 backdrop-blur-sm transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-[#73DBFF]/20 flex items-center justify-center flex-shrink-0">
                          <article.icon className="h-6 w-6 text-[#73DBFF]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-[#73DBFF] transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-white/80 line-clamp-2">
                            {getArticlePreview(article.sections[0]?.content ?? "")}
                          </p>
                          <div className="mt-4 flex items-center text-[#73DBFF] text-sm font-medium">
                            {t("news.viewDetails")} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
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
  )
}
