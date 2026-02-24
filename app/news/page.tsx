import { Calendar, Building, Users, MapPin, Wrench, ChefHat, Cpu, FileText, ArrowRight, BookOpen, Zap, TrendingUp, Atom, Microscope } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { IndustryInfoNav } from "@/components/industry-info-nav"
import { industryArticlesData } from "@/lib/industry-articles"

function getArticlePreview(content: string, maxLen = 120) {
  const clean = content.replace(/\*\*[^*]+\*\*/g, (m) => m.slice(2, -2))
  return clean.length > maxLen ? clean.slice(0, maxLen) + "…" : clean
}

export default function NewsPage() {
  const companyNews = [
    {
      id: "2025-patents",
      date: "2025年",
      title: "技术爆发之年，专利群形成",
      summary:
        "将多年积累的技术方案进行系统化转化，完成9项核心专利布局，构建从金刚石工具到全碳复合材料的完整技术壁垒。",
      category: "技术突破",
      icon: FileText,
    },
    {
      id: "2025-diamond-copper",
      date: "2025年",
      title: "金刚石铜复合材料开发成功",
      summary:
        "成功开发金刚石铜复合材料产品，制备热导率可达680 W/mK以上的试样，标志着公司正式进入高性能热管理材料领域。",
      category: "产品开发",
      icon: Cpu,
    },
    {
      id: "2024-nonstick",
      date: "2024年",
      title: "金刚石涂层不粘锅开发成功",
      summary:
        "基于金刚石颗粒耐磨涂层技术，成功开发新型不粘锅产品，初步具有可用样品，实现从工业领域向消费品领域的跨越。",
      category: "产品开发",
      icon: ChefHat,
    },
    {
      id: "2023-brazing-tools",
      date: "2023年",
      title: "活性熔固超硬工具系列开发成功",
      summary:
        "针对高强度牙科磨头、活性熔固CBN磨具等产品进行攻关，成功开发高强度金刚石磨头和活性熔固CBN砂轮，使用寿命达电镀工具3倍以上。",
      category: "产品开发",
      icon: Wrench,
    },
    {
      id: "2023-relocation",
      date: "2023年初",
      title: "公司迁址南京，开启新征程",
      summary: "公司由镇江搬迁至南京市江北新区，获得更优质的研发平台与产业环境，为后续技术突破和业务拓展奠定坚实基础。",
      category: "公司动态",
      icon: MapPin,
    },
    {
      id: "2022-team",
      date: "2022年",
      title: "核心团队组建完成",
      summary:
        "形成三人核心团队，分别负责技术研发、工程实施、业务拓展三大方向，开始在超硬磨粒工具及金刚石功能材料领域进行系统布局。",
      category: "团队建设",
      icon: Users,
    },
    {
      id: "2018-research-center",
      date: "2018-06-12",
      title: "簇锋科技研发中心成立",
      summary: "公司正式成立研发中心，专注于超硬磨料工具技术创新，为后续产品开发和技术积累奠定组织基础。",
      category: "公司动态",
      icon: Building,
    },
    {
      id: "2018-website",
      date: "2018-06-06",
      title: "簇锋科技官方网站正式上线",
      summary: "公司官方网站 www.tospike.com 正式上线运营，建立与客户、合作伙伴沟通交流的线上平台。",
      category: "公司动态",
      icon: Building,
    },
    {
      id: "2018-founding",
      date: "2018-03-12",
      title: "南京簇锋科技有限公司成立",
      summary: "公司在江苏正式注册成立，定位为超硬磨料工具行业解决方案提供商，开启创业征程。",
      category: "公司动态",
      icon: Building,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-balance">技术视界</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              从实验室假说到产业实证，见证 sp²–sp³ 结构的性能越迁
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 公司动态卡片 */}
              <a
                href="#company-news"
                className="group glass-card rounded-xl p-8 hover:bg-card/60 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Building className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      公司动态
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      聚焦公司未来技术突破、战略合作与产业布局，记录从超硬工具到碳基复合材料的创新历程
                    </p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      查看详情 <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              {/* 行业信息卡片 */}
              <div className="group glass-card rounded-xl p-8 hover:bg-card/60 transition-all hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <a
                      href="#industry-info"
                      className="block"
                    >
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        行业信息
                      </h3>
                    </a>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      聚焦行业前沿技术、基础理论的科普，用新闻形式发布最新的技术动态与术语解释
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
      <section id="company-news" className="py-16 border-t border-border/50 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">公司动态</h2>
            <p className="text-muted-foreground mb-12">
              聚焦公司未来技术突破、战略合作与产业布局，记录从超硬工具到碳基复合材料的创新历程
            </p>

            <div className="space-y-6">
              {companyNews.map((news, index) => (
                <Link
                  key={index}
                  href={`/news/${news.id}`}
                  className="block glass-card rounded-xl p-6 hover:bg-card/60 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <news.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {news.date}
                        </span>
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground">
                          {news.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{news.summary}</p>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium">
                        查看详情 <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
      <section id="industry-info" className="py-16 border-t border-border/50 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">行业信息</h2>
            <p className="text-muted-foreground mb-12">
              聚焦行业前沿技术、基础理论的科普，用新闻形式发布最新的技术动态与术语解释
            </p>

            {/* 行业趋势 */}
            <div id="industry-trends" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">行业趋势</h3>
              </div>
              <div className="space-y-6">
                {industryArticlesData
                  .filter((a) => a.sectionId === "industry-trends")
                  .map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.id}`}
                      className="block glass-card rounded-xl p-6 hover:bg-card/60 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <article.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-muted-foreground line-clamp-2">
                            {getArticlePreview(article.sections[0]?.content ?? "")}
                          </p>
                          <div className="mt-4 flex items-center text-primary text-sm font-medium">
                            查看详情 <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">基础理论</h3>
              </div>
              <div className="space-y-6">
                {industryArticlesData
                  .filter((a) => a.sectionId === "basic-theory")
                  .map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.id}`}
                      className="block glass-card rounded-xl p-6 hover:bg-card/60 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <article.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-muted-foreground line-clamp-2">
                            {getArticlePreview(article.sections[0]?.content ?? "")}
                          </p>
                          <div className="mt-4 flex items-center text-primary text-sm font-medium">
                            查看详情 <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">前沿技术</h3>
              </div>
              <div className="space-y-6">
                {industryArticlesData
                  .filter((a) => a.sectionId === "frontier-tech")
                  .map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.id}`}
                      className="block glass-card rounded-xl p-6 hover:bg-card/60 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <article.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-muted-foreground line-clamp-2">
                            {getArticlePreview(article.sections[0]?.content ?? "")}
                          </p>
                          <div className="mt-4 flex items-center text-primary text-sm font-medium">
                            查看详情 <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
      <FooterNav />
    </div>
  )
}
