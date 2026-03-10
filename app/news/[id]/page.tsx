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
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import {
  getIndustryArticlesMap,
  parseBoldText,
  type IndustryArticle,
} from "@/lib/industry-articles"
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
  const industryMap = getIndustryArticlesMap("zh")
  const industryIds = Object.keys(industryMap)
  return [...companyIds, ...industryIds].map((id) => ({ id }))
}

function IndustryArticleDetail({ article, prefix, t }: { article: IndustryArticle; prefix: string; t: (key: string) => string }) {
  const IconComponent = article.icon

  return (
    <>
      {/* 面包屑 */}
      <section className="py-6 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
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

      {/* 行业文章正文 - 高端大气严谨风格 */}
      <article className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* 返回按钮 */}
            <Link
              href={`${prefix}/news#industry-info`}
              className="inline-flex items-center gap-2 text-primary hover:underline mb-12 text-base tracking-wide"
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
                  <span className="text-xs px-3 py-1.5 bg-secondary rounded-full text-secondary-foreground font-medium tracking-wide">
                    {article.category}
                  </span>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm text-slate-400 tracking-wide">
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
                      <Tag className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-400">{t("news.articleDetail.keywords")}：</span>
                      {article.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 bg-slate-700/60 text-slate-200 rounded"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-wide">
                {article.title}
              </h1>
            </header>

            {/* 文章正文 */}
            <div className="space-y-12">
              {article.sections.map((section, idx) => (
                <section key={idx}>
                  <h2 className="text-xl font-bold text-foreground mb-6 tracking-wide">
                    {section.title}
                  </h2>
                  <div className="space-y-2 text-slate-300 leading-relaxed tracking-wide">
                    {section.content.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-base leading-[1.8]">
                        {parseBoldText(paragraph)}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* 底部返回按钮 */}
            <footer className="mt-20 pt-12 border-t border-slate-600">
              <Link href={`${prefix}/news#industry-info`}>
                <Button
                  variant="outline"
                  className="border-slate-500 text-slate-200 hover:bg-slate-800 hover:text-white bg-transparent px-6 py-6 text-base tracking-wide"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t("news.articleDetail.backToList")}
                </Button>
              </Link>
            </footer>
          </div>
        </div>
      </article>
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
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
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

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Link href={`${prefix}/news`} className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
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
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {news.date}
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-balance">{news.title}</h1>
            </header>

            {/* Article Body */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {news.content.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-muted-foreground mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share and Navigation */}
            <footer className="mt-16 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link href={`${prefix}/news`}>
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t("news.articleDetail.backToNews")}
                  </Button>
                </Link>
                <Link href={`${prefix}/cooperation#contact`}>
                  <Button className="bg-[#0F2A5C] hover:bg-[#1E3A8A] text-white">{t("cooperation.contact.contactUs")}</Button>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
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

  const industryArticlesMap = getIndustryArticlesMap(validLocale)
  const companyNews = getCompanyNews(id, validLocale)
  const industryArticle = industryArticlesMap[id]

  if (!companyNews && !industryArticle) {
    notFound()
  }

  const t = getTranslations(validLocale)
  const NewsIcon = companyNews ? NEWS_ICONS[id] ?? Building : Building

  return (
    <div className={`min-h-screen relative ${industryArticle ? "" : "bg-[#F9FAFC]"}`}>
      {industryArticle && <DarkPagePatternBg />}
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
