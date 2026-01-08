import { Calendar, Building, Users, MapPin, Wrench, ChefHat, Cpu, FileText, ArrowRight, BookOpen, Zap, TrendingUp, Atom, Microscope } from "lucide-react"
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
            <h1 className="text-5xl font-bold mb-6 text-balance">技术视界</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              聚焦公司技术突破与合作动态，探索行业前沿理论与技术趋势，构建从基础研究到产业应用的完整知识体系
            </p>
          </div>
        </div>
      </section>

      {/* Company News */}
      <section className="py-16 border-t border-border/50">
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
      <section className="py-16 border-t border-border/50 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">行业信息</h2>
            <p className="text-muted-foreground mb-12">
              聚焦行业前沿技术、基础理论的科普，用新闻形式发布最新的技术动态与术语解释
            </p>

            {/* 基础理论 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">基础理论</h3>
              </div>
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6 hover:bg-card/60 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Atom className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">碳基复合材料</h4>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">定义：</span>
                        由碳元素构成的复合材料体系，通过 sp²–sp³ 杂化键合机制实现原子级界面连接，形成从金刚石到石墨烯的连续碳相结构。
                      </p>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">应用领域：</span>
                        高性能热管理材料、超硬工具、电子封装、航空航天热控系统、新能源汽车电池热管理。
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">当前研究方向：</span>
                        界面能级调控、应力分布优化、多尺度结构设计、极端工况下的稳定性研究。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6 hover:bg-card/60 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Microscope className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">莫特绝缘体</h4>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">定义：</span>
                        一种强关联电子系统，由于电子间的库仑排斥作用，即使在能带未填满的情况下也表现为绝缘态，是理解高温超导和量子相变的关键物理模型。
                      </p>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">应用领域：</span>
                        高温超导材料设计、量子计算、拓扑绝缘体、强关联电子器件、新型电子材料开发。
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">当前研究方向：</span>
                        莫特相变的调控机制、与超导态的竞争关系、在二维材料中的实现、量子多体系统的数值模拟。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6 hover:bg-card/60 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">约瑟夫森结</h4>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">定义：</span>
                        由两个超导体通过弱连接（薄绝缘层或正常金属）形成的量子隧道结，允许库珀对隧穿，是超导量子计算和量子信息处理的核心元件。
                      </p>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">应用领域：</span>
                        超导量子比特、量子计算机、超灵敏磁强计、电压标准、量子传感器。
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">当前研究方向：</span>
                        提高相干时间、降低噪声、可扩展量子电路设计、拓扑量子计算、量子纠错算法实现。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 前沿技术 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">前沿技术</h3>
              </div>
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6 hover:bg-card/60 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">超导材料</h4>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">定义：</span>
                        在临界温度以下电阻为零的材料，可分为传统超导体和高温超导体，具有完全抗磁性和量子相干性，是未来能源传输和量子计算的关键材料。
                      </p>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">应用领域：</span>
                        超导磁体、量子计算机、超导电缆、磁悬浮交通、核磁共振成像、粒子加速器。
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">当前研究方向：</span>
                        室温超导材料探索、高温超导机理、拓扑超导体、超导量子比特、超导材料的产业化应用。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6 hover:bg-card/60 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">量子混沌计算</h4>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">定义：</span>
                        利用量子系统的混沌动力学特性进行信息处理的计算范式，通过量子纠缠和叠加态实现指数级加速，是突破经典计算极限的前沿方向。
                      </p>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">应用领域：</span>
                        量子机器学习、优化问题求解、密码学、药物设计、金融建模、复杂系统模拟。
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">当前研究方向：</span>
                        量子算法设计、噪声抑制、量子纠错、可扩展量子硬件、量子-经典混合计算架构。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 行业趋势 */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">行业趋势</h3>
              </div>
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6 hover:bg-card/60 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">碳基材料在热管理领域的产业化加速</h4>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">趋势概述：</span>
                        随着 AI 算力芯片、新能源汽车和 5G 通信设备对散热性能要求的不断提升，碳基复合材料正从实验室走向大规模产业化应用。
                      </p>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">关键驱动因素：</span>
                        功率密度持续提升、成本下降、制备工艺成熟、产业链完善、政策支持力度加大。
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">未来发展方向：</span>
                        从单一热管理功能向多功能集成（导热+电磁屏蔽+结构支撑）、从消费电子向工业级应用扩展、从材料供应商向系统解决方案提供商转型。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6 hover:bg-card/60 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Atom className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">量子计算从实验室走向实用化</h4>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">趋势概述：</span>
                        量子计算正从概念验证阶段进入实用化探索，超导量子比特、离子阱、光量子等多种技术路线并行发展，预计未来 5-10 年将出现突破性应用。
                      </p>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">关键驱动因素：</span>
                        量子纠错技术突破、相干时间延长、错误率降低、算法优化、产业资本投入。
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">未来发展方向：</span>
                        专用量子计算机率先落地、量子-经典混合计算成为主流、量子云服务普及、在密码学、优化、机器学习等领域实现实际应用。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                    技术视界
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
