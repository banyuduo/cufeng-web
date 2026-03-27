import {
  Calendar,
  ArrowLeft,
  Building,
  Users,
  MapPin,
  Wrench,
  ChefHat,
  Cpu,
  FileText,
  Tag,
  User,
} from "lucide-react"
import { Link } from "@/components/app-link"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import {
  getIndustryArticlesMap,
  parseBoldText,
  type IndustryArticle,
} from "@/lib/industry-articles"
import { INDUSTRY_ARTICLE_IDS } from "@/lib/industry-article-ids"
import { getTranslations } from "@/lib/translations"
import { getCompanyNews, getCompanyNewsIds } from "@/lib/company-news"
import { DarkPagePatternBg } from "@/components/dark-page-pattern-bg"

const NEWS_ICONS: Record<string, typeof FileText> = {
  "2025-patents": FileText,
  "2025-diamond-copper": Cpu,
  "2024-nonstick": ChefHat,
  "2023-brazing-tools": Wrench,
  "2023-relocation": MapPin,
  "2022-team": Users,
  "2018-research-center": Building,
  "2018-website": Building,
  "2018-founding": Building,
}

// 生成静态路径参数，用于静态导出（无 locale 的旧路由）
export async function generateStaticParams() {
  const companyIds = getCompanyNewsIds()
  return [...companyIds, ...INDUSTRY_ARTICLE_IDS].map((id) => ({ id }))
}

function IndustryArticleDetail({ article, prefix, t }: { article: IndustryArticle; prefix: string; t: (key: string) => string }) {
  const IconComponent = article.icon

  return (
    <>
      {/* 面包屑 */}
      <section className="py-6 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 page-caption text-muted-foreground">
            <Link href={prefix || "/"} className="hover:text-primary transition-colors">
              {t("common.home")}
            </Link>
            <span>/</span>
            <Link href={`${prefix}/news`} className="hover:text-primary transition-colors">
              {t("news.title")}
            </Link>
            <span>/</span>
            <Link href={`${prefix}/news#industry-info`} className="hover:text-primary transition-colors">
              {t("news.industryInfo")}
            </Link>
            <span>/</span>
            <span className="text-foreground">{article.title}</span>
          </div>
        </div>
      </section>

      {/* 行业文章正文 - 浅底阅读区 */}
      <section className="py-20 bg-[#F9FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            {/* 返回按钮 */}
            <Link
              href={`${prefix}/news#industry-info`}
              className="inline-flex items-center gap-2 text-[#0077b6] hover:underline mb-10 page-caption font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("news.articleDetail.backToList")}
            </Link>

            {/* 文章头部 */}
            <header className="mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="page-caption px-3 py-1.5 bg-slate-100 rounded-full text-slate-700 font-medium tracking-wide">
                    {article.category}
                  </span>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 page-caption text-slate-500 tracking-wide">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {t("news.articleDetail.publishDate")}：{article.date}
                    </span>
                    {article.author && (
                      <span className="flex items-center gap-1.5">
                        <User className="h-4 w-4" />
                        {article.author}
                      </span>
                    )}
                  </div>
                  {article.keywords && article.keywords.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <Tag className="h-4 w-4 text-slate-500" />
                      <span className="page-caption text-slate-500">{t("news.articleDetail.keywords")}：</span>
                      {article.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="page-caption px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <h1 className="page-h2 text-slate-900 tracking-tight leading-[1.15]">
                {article.title}
              </h1>
            </header>

            {/* 文章正文 */}
            <div className="space-y-12">
              {article.sections.map((section, idx) => (
                <section key={idx}>
                  <h2 className="page-h3 text-slate-900 mb-6 tracking-tight">
                    {section.title}
                  </h2>
                  <div className="space-y-3 text-slate-700">
                    {section.content.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="page-body">
                        {parseBoldText(paragraph)}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* 底部返回按钮 */}
            <footer className="mt-16 pt-10 border-t border-slate-200">
              <Link href={`${prefix}/news#industry-info`}>
                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent px-6 py-6 text-base tracking-wide"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t("news.articleDetail.backToList")}
                </Button>
              </Link>
            </footer>
          </div>
        </div>
      </section>
    </>
  )
}

function CompanyNewsDetail({
  news,
  IconComponent,
  prefix,
  t,
}: {
  news: { date: string; title: string; category: string; content: string[] }
  IconComponent: React.ComponentType<{ className?: string }>
  prefix: string
  t: (key: string) => string
}) {
  return (
    <>
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 page-caption text-muted-foreground">
            <Link href={prefix || "/"} className="hover:text-primary transition-colors">
              {t("common.home")}
            </Link>
            <span>/</span>
            <Link href={`${prefix}/news`} className="hover:text-primary transition-colors">
              {t("news.title")}
            </Link>
            <span>/</span>
            <span className="text-foreground">{news.title}</span>
          </div>
        </div>
      </section>

      {/* Article Content - 浅底阅读区 */}
      <section className="py-16 bg-[#F9FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            {/* Back Button */}
            <Link href={`${prefix}/news`} className="inline-flex items-center gap-2 text-[#0077b6] hover:underline mb-8 page-caption font-medium">
              <ArrowLeft className="h-4 w-4" />
              {t("news.articleDetail.backToNewsList")}
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-2 mt-1 page-caption text-slate-500">
                    <Calendar className="h-4 w-4" />
                    {news.date}
                  </div>
                </div>
              </div>
              <h1 className="page-h1 text-slate-900 text-balance">{news.title}</h1>
            </header>

            {/* Article Body */}
            <div className="prose prose-slate max-w-none">
              {news.content.map((paragraph, index) => (
                <p key={index} className="page-body text-slate-700 mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share and Navigation */}
            <footer className="mt-16 pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link href={`${prefix}/news`}>
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t("news.articleDetail.backToNews")}
                  </Button>
                </Link>
                <Link href={`${prefix}/cooperation#contact`}>
                  <Button className="bg-[#002244] hover:bg-[#003366] border border-[#0077b6]/30 text-white">{t("cooperation.contact.contactUs")}</Button>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </>
  )
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale?: string; id: string }>
}) {
  const { locale, id } = await params
  const { isValidLocale } = await import("@/lib/i18n")
  const validLocale = locale && isValidLocale(locale) ? locale : "zh"
  const prefix = locale && isValidLocale(locale) ? `/${validLocale}` : ""

  const industryArticlesMap = await getIndustryArticlesMap(validLocale)
  const companyNews = getCompanyNews(id, validLocale)
  const industryArticle = industryArticlesMap[id]

  if (!companyNews && !industryArticle) {
    notFound()
  }

  const t = await getTranslations(validLocale)
  const NewsIcon = companyNews ? NEWS_ICONS[id] ?? Building : Building

  return (
    <div className="min-h-screen relative">
      <DarkPagePatternBg />
      <div className="relative z-10">
      <Navigation locale={validLocale} />

      {industryArticle ? (
        <IndustryArticleDetail article={industryArticle} prefix={prefix} t={t} />
      ) : companyNews ? (
        <CompanyNewsDetail news={companyNews} IconComponent={NewsIcon} prefix={prefix} t={t} />
      ) : null}

      <FooterNav locale={validLocale} />
      </div>
    </div>
  )
}
