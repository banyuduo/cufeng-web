import { Calendar, Building, Users, MapPin, Wrench, ChefHat, Cpu, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

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
      title: "钎焊超硬工具系列开发成功",
      summary:
        "针对高强度牙科磨头、钎焊CBN磨具等产品进行攻关，成功开发高强度金刚石磨头和钎焊CBN砂轮，使用寿命达电镀工具3倍以上。",
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
      id: "2018-grinding-wheel",
      date: "2018-11-09",
      title: "铸件打磨清理用新型金刚石磨轮开发成功",
      summary:
        "针对含硅、钼成分铸铁材料加工时的表面粘附问题，经多次试验改进，成功开发新型金刚石磨轮，有效解决行业痛点。",
      category: "产品开发",
      icon: Wrench,
    },
    {
      id: "2018-research-center",
      date: "2018-06-12",
      title: "簇锋机电研发中心成立",
      summary: "公司正式成立研发中心，专注于超硬磨料工具技术创新，为后续产品开发和技术积累奠定组织基础。",
      category: "公司动态",
      icon: Building,
    },
    {
      id: "2018-website",
      date: "2018-06-06",
      title: "簇锋机电官方网站正式上线",
      summary: "公司官方网站 www.tospike.com 正式上线运营，建立与客户、合作伙伴沟通交流的线上平台。",
      category: "公司动态",
      icon: Building,
    },
    {
      id: "2018-founding",
      date: "2018-03-12",
      title: "南京簇锋机电科技有限公司成立",
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
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-6">
              2018 - 2025 · 七年磨一剑
            </div>
            <h1 className="text-5xl font-bold mb-6 text-balance">新闻中心</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              记录簇锋机电从超硬磨料工具到碳基复合材料的技术演进之路，见证每一次突破与创新
            </p>
          </div>
        </div>
      </section>

      {/* Company News */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">公司动态</h2>

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

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
                <span className="font-bold text-lg">ToSpike</span>
              </div>
              <p className="text-sm text-muted-foreground">突破性热管理材料技术</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">产品中心</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/products/nonstick-cookware" className="hover:text-primary transition-colors">
                    金刚石涂层不粘锅
                  </Link>
                </li>
                <li>
                  <Link href="/products/diamond-copper" className="hover:text-primary transition-colors">
                    金刚石铜复合材料
                  </Link>
                </li>
                <li>
                  <Link href="/products/thermal-pad" className="hover:text-primary transition-colors">
                    柔性导热垫片
                  </Link>
                </li>
                <li>
                  <Link href="/products/carbon-composite" className="hover:text-primary transition-colors">
                    全碳复合材料
                  </Link>
                </li>
                <li>
                  <Link href="/products/diamond-tools" className="hover:text-primary transition-colors">
                    超磨熔固工具
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">关于我们</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    公司介绍
                  </Link>
                </li>
                <li>
                  <Link href="/patents" className="hover:text-primary transition-colors">
                    专利技术
                  </Link>
                </li>
                <li>
                  <Link href="/applications" className="hover:text-primary transition-colors">
                    应用领域
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-primary transition-colors">
                    新闻中心
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">联系我们</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>电话: 15305191423</li>
                <li>地址: 南京市江北新区行知路2号</li>
                <li>邮箱: wangbo@tospike.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-sm text-muted-foreground text-center">
            <p>© 2025 南京簇锋机电科技有限公司 版权所有</p>
            <p className="mt-2">
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                苏ICP备18019265号-1
              </a>
              {" · "}
              <a
                href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32118302000194"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                苏公网安备32118302000194号
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
