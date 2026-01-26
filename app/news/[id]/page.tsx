import { Calendar, ArrowLeft, Building, Users, MapPin, Wrench, ChefHat, Cpu, FileText } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const newsData: Record<
  string,
  {
    date: string
    title: string
    category: string
    icon: any
    content: string[]
    image?: string
  }
> = {
  "2025-patents": {
    date: "2025年",
    title: "技术爆发之年，专利群形成",
    category: "技术突破",
    icon: FileText,
    content: [
      "2025年标志着簇锋科技从产品驱动向知识产权（IP）平台的华丽转变。在这一年里，公司研发团队将过去数年在界面力学、原子级键合及内生应力调控方面的零散技术成果进行了系统化整理与转化。",
      "通过密集的研发攻关，我们成功布局了9项核心发明专利。这套专利群不仅仅涵盖了高性能散热基板的制备工艺，更深入到了sp²-sp³全碳复合材料的底层物理架构。",
      "这一壁垒的构建，实现了从传统金刚石活性熔固工具到前沿全碳功能材料的完整覆盖，为公司在半导体热管理、新能源汽车及未来物理计算领域的商业授权与技术转让奠定了坚实的法律与技术基础。",
    ],
  },
  "2025-diamond-copper": {
    date: "2025年",
    title: "金刚石铜复合材料开发成功",
    category: "产品开发",
    icon: Cpu,
    content: [
      "在高性能热管理领域，簇锋科技取得了里程碑式的进展。经过数十次的配方优化与界面浸润优化实验，我们成功开发出新一代金刚石铜复合材料。",
      "实测数据显示，该材料样品的室温热导率稳定达到680 W/m·K以上，远超传统纯铜（380 W/m·K）及常规铝碳化硅材料。",
      "通过独特的界面键合技术，我们有效解决了金刚石与铜之间热胀系数不匹配导致的结合难题。这一产品的成功开发，标志着簇锋科技有能力正式进入全球高功率密度电子器件（如AI芯片、大功率激光器）散热方案的供应商行列，为解决算力热瓶颈提供了核心材料支撑。",
    ],
  },
  "2024-nonstick": {
    date: "2024年",
    title: "金刚石涂层不粘锅开发成功",
    category: "产品开发",
    icon: ChefHat,
    content: [
      "簇锋科技始终坚持高精尖技术民用化的理念。2024-2025年，我们将工业级金刚石颗粒固着技术引入消费品领域，成功研发出新型金刚石涂层不粘锅。",
      "不同于传统易脱落的特氟龙涂层，我们的技术通过活性金属与 sp³ 的界面键合将金刚石微粉牢固地锚定在锅具表面。这不仅赋予了锅具极高的表面硬度和耐磨性（支持金属铲使用），更利用金刚石极佳的导热性实现了快热匀热。",
      "这一跨界尝试的成功，证明了我们的材料平台在提升国民生活品质方面具有巨大的溢价能力和市场空间。",
    ],
  },
  "2023-brazing-tools": {
    date: "2024年",
    title: "活性熔固超硬工具系列开发成功",
    category: "产品开发",
    icon: Wrench,
    content: [
      "2023年起，公司在超硬工具领域继续深入开发，再次取得突破。2024年，针对高精度医疗器械及工业精密加工需求，我们成功开发出高强度牙科磨头与活性熔固CBN（立方氮化硼）砂轮系列。",
      "通过优化的活性熔料配方和真空活性熔固工艺，我们实现了磨粒与基体之间原子级的化学结合。对比测试显示，该系列工具在高速加工过程中的磨粒掉落率极低，使用寿命达到了传统电镀工具的3倍以上。",
      "这一技术不仅解决了高强度材料加工的效率难题，也为公司在精密制造领域的推广赢得了机会。",
    ],
  },
  "2023-relocation": {
    date: "2023年",
    title: "公司迁址南京，开启新征程",
    category: "公司动态",
    icon: MapPin,
    content: [
      "簇锋科技：新起点，新征程。",
      "随着制造业向高端化、智能化迈进，超硬工具的应用边界正被不断打破。",
      "2023年，簇锋科技正式由镇江迁址至南京市江北新区，在江北新区的新型研发平台支撑下，我们进一步优化了研发资源，逐步开拓超硬工具应用潜力与应用领域。簇锋科技充分利用该地区的产学研一体化优势，旨在攻克超硬材料在复杂工况下的稳定性瓶颈。",
      "在新型研发平台的加持下，簇锋科技实现了研发流程的标准化与实验资源的集约化。我们正针对超硬工具的耐磨性、抗冲击性及材料配方进行全方位的迭代优化。簇锋科技正从一家产品供应商，转型为深耕行业痛点的全场景技术解决方案提供商。",
    ],
  },
  "2022-team": {
    date: "2022年",
    title: "核心团队组建完成",
    category: "团队建设",
    icon: Users,
    content: [
      "企业的灵魂在于人。2022年，簇锋科技确立了以技术研发、工程实施、业务拓展为核心的三人核心架构。",
      "三位核心成员分别深耕于超硬材料开发、制备与自动化装备工程及新能源领域市场开发。这种组合确保了公司能够将最前沿的物理假设迅速转化为可工程化的产品，并精准对接市场痛点。",
      "自此，公司在金刚石工具应用领域以及金刚石功能材料领域的系统布局正式启动，开启了从零到一的创业突破。",
    ],
  },
  "2018-research-center": {
    date: "2018年6月12日",
    title: "簇锋科技研发中心成立",
    category: "公司动态",
    icon: Building,
    content: [
      "在公司成立初期，我们就意识到核心技术自研的重要性。2018年6月，簇锋科技研发中心正式在镇江的句容产业园成立。",
      "研发中心初始配置了感应焊接炉、自动化焊接工装、切割测试平台以及显微观测仪等关键研发设备，专注于超硬磨料工具的底层机理研究以及应用工具开发。",
      "研发中心的建立，标志着公司从简单的技术服务型转向技术创新型，为后续数年内爆发式的技术产出奠定了坚实的组织基础。",
    ],
  },
  "2018-website": {
    date: "2018年6月6日",
    title: "官方网站正式上线",
    category: "公司动态",
    icon: Building,
    content: [
      "为了更好地连接客户与行业伙伴，簇锋科技官方网站（www.tospike.com）于2018年6月6日正式上线运营。",
      "网站不仅是展示公司产品和技术实力的窗口，更是我们倾听行业声音、进行数字化服务的阵地。通过线上平台的建立，公司迅速吸引了来自全国各地精密制造行业的关注与咨询。",
      "ToSpike，寓意突破巅峰，体现了公司新科技，新巅峰的企业理念。",
    ],
  },
  "2018-founding": {
    date: "2018年3月12日",
    title: "南京簇锋科技有限公司成立",
    category: "公司动态",
    icon: Building,
    content: [
      "2018年3月12日，南京簇锋科技有限公司在江苏省正式注册成立。这标志着创始团队正式踏上了超硬材料技术创业的征程。",
      "公司成立之初，定位为超硬磨料工具行业产品需求解决方案提供商，专注于铸件加工、硬脆材料加工及高精密工具的技术研发与定制化服务。",
      "回首七年创业路，从最初的工程工具制造商，到如今构建基于sp²-sp³键合原理的全碳材料平台，簇锋科技始终秉持以技术解决实际问题的初心，朝着成为客户理想的方案解决商这一目标不断前行。",
    ],
  },
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const news = newsData[id]

  if (!news) {
    notFound()
  }

  const IconComponent = news.icon

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <section className="py-6 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              首页
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary transition-colors">
              技术视界
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
            <Link href="/news" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="h-4 w-4" />
              返回新闻列表
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
                <Link href="/news">
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    返回技术视界
                  </Button>
                </Link>
                <Link href="/cooperation#contact">
                  <Button className="bg-sky-600 hover:bg-sky-700 text-white">联系我们</Button>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>

      {/* Footer */}
      <FooterNav />
    </div>
  )
}
