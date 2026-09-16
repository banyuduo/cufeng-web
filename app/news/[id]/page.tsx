import { Calendar, ArrowLeft, Tag, User } from "lucide-react"
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
import { ensureTrailingSlash } from "@/lib/site-path"
import { duplicateRouteMetadata } from "@/lib/seo"
import type { Metadata } from "next"

// 生成静态路径参数，用于静态导出（无 locale 的旧路由）
export async function generateStaticParams() {
  const companyIds = getCompanyNewsIds()
  return [...companyIds, ...INDUSTRY_ARTICLE_IDS].map((id) => ({ id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  return duplicateRouteMetadata(`/news/${id}/`)
}

function IndustryArticleDetail({ article, prefix, t }: { article: IndustryArticle; prefix: string; t: (key: string) => string }) {
  return (
    <>
      {/* 面包屑 */}
      <section className="py-6 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 page-caption text-muted-foreground">
            <Link href={prefix || "/"} className="hover:text-primary transition-colors">
              {t("common.home")}
            </Link>
            <span>/</span>
            <Link href={`${prefix}/news`} className="hover:text-primary transition-colors">
              {t("news.title")}
            </Link>
            <span>/</span>
            <a
              href={`${ensureTrailingSlash(`${prefix}/news`)}#industry-info`}
              className="hover:text-primary transition-colors"
            >
              {t("news.industryInfo")}
            </a>
            <span>/</span>
            <span className="text-foreground">{article.title}</span>
          </div>
        </div>
      </section>

      {/* 行业文章正文 - 浅底阅读区 */}
      <section className="section-y bg-[#F9FAFC]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            {/* 返回按钮 */}
            <a
              href={`${ensureTrailingSlash(`${prefix}/news`)}#industry-info`}
              className="inline-flex items-center gap-2 text-[#2A7FC4] hover:underline mb-10 page-caption font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("news.articleDetail.backToList")}
            </a>

            {/* 文章头部 */}
            <header className="mb-16">
              <div className="mb-6">
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
              <h1 className="page-h1 text-slate-900 tracking-tight leading-[1.15]">
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
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent px-6 py-6 text-base tracking-wide"
              >
                <a href={`${ensureTrailingSlash(`${prefix}/news`)}#industry-info`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t("news.articleDetail.backToList")}
                </a>
              </Button>
            </footer>
          </div>
        </div>
      </section>
    </>
  )
}

function CompanyNewsDetail({
  news,
  prefix,
  t,
}: {
  news: { date: string; title: string; category: string; content: string[] }
  prefix: string
  t: (key: string) => string
}) {
  return (
    <>
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
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
      <section className="section-y bg-[#F9FAFC]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            {/* Back Button */}
            <Link href={`${prefix}/news`} className="inline-flex items-center gap-2 text-[#2A7FC4] hover:underline mb-8 page-caption font-medium">
              <ArrowLeft className="h-4 w-4" />
              {t("news.articleDetail.backToNews")}
            </Link>

            {/* Article Header */}
            <header className="mb-6 sm:mb-8 lg:mb-12">
              <div className="mb-4">
                  <span className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-2 mt-1 page-caption text-slate-500">
                    <Calendar className="h-4 w-4" />
                    {news.date}
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
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                >
                  <Link href={`${prefix}/news`}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t("news.articleDetail.backToNews")}
                  </Link>
                </Button>
                <Button asChild className="bg-[#0B1F33] hover:bg-[#163A5F] border border-[#2A7FC4]/30 text-white">
                  <Link href={`${prefix}/cooperation#contact`}>
                    {t("cooperation.contact.contactUs")}
                  </Link>
                </Button>
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

  return (
    <div className="min-h-screen bg-[#F9FAFC]">
      <Navigation locale={validLocale} />
      <div>

      {industryArticle ? (
        <IndustryArticleDetail article={industryArticle} prefix={prefix} t={t} />
      ) : companyNews ? (
        <CompanyNewsDetail news={companyNews} prefix={prefix} t={t} />
      ) : null}

      <FooterNav locale={validLocale} />
      </div>
    </div>
  )
}
