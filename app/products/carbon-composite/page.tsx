import Link from "next/link"
import { ArrowLeft, Sparkles, Zap, Activity, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FooterNav } from "@/components/footer-nav"

export default function CarbonCompositePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/60 backdrop-blur-sm fixed w-full z-50 bg-background/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-foreground">
              南京簇锋机电科技
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/products" className="text-sm text-foreground font-medium">
                产品中心
              </Link>
              <Link
                href="/applications"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                应用领域
              </Link>
              <Link href="/patents" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                专利技术
              </Link>
              <Link href="/cooperation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                项目合作
              </Link>
              <Link href="/cooperation#contact">
              <Button size="sm" className="bg-primary text-primary-foreground">
                联系我们
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-b from-cyan-50 via-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-sky-600 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            返回产品中心
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full text-xs font-medium text-white">
                  第三代技术 · 未来平台
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">全碳复合材料</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                基于SP³-SP²化学键合的革命性全碳复合材料技术平台。通过纳米金刚石表面石墨化作为"钎料"，
                实现金刚石（SP³）与石墨/碳纤维（SP²）的化学键合，构建三维全碳网络结构。
                可拓展至热管理、固态电池、超导材料等多个前沿领域。
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-white to-cyan-50 border-sky-300 shadow-2xl">
              <h3 className="text-lg font-semibold mb-6 text-slate-900">核心技术特征</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/80 rounded-lg border-2 border-sky-200">
                  <div className="text-xs text-slate-600 mb-1">核心技术</div>
                  <div className="font-bold text-slate-900">SP³-SP² 化学键合</div>
                </div>
                <div className="p-4 bg-white/80 rounded-lg">
                  <div className="text-xs text-slate-600 mb-1">导热性能</div>
                  <div className="font-semibold text-sky-600">500-1000+ W/m·K</div>
                </div>
                <div className="p-4 bg-white/80 rounded-lg">
                  <div className="text-xs text-slate-600 mb-1">柔性潜力</div>
                  <div className="font-semibold text-sky-600">碳纤维基可弯曲</div>
                </div>
                <div className="p-4 bg-white/80 rounded-lg">
                  <div className="text-xs text-slate-600 mb-1">应用前景</div>
                  <div className="font-semibold text-sky-600">5-10年战略储备</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Technology */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">SP³-SP² 核心技术原理</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            突破传统材料组合界面的物理接触限制，通过化学键合实现碳材料间的原子级连接
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-slate-50 border-slate-200">
              <h3 className="text-xl font-semibold mb-6 text-slate-900">技术突破点</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-slate-900">纳米金刚石表面石墨化</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    在惰性或还原气氛下，纳米金刚石表面（外壳1-3nm）可发生石墨化转变，
                    形成薄层石墨化"软壳"。这层软壳具有SP²杂化特征，能够与其他碳材料的SP²结构 形成共价键连接。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-slate-900">化学键合机制</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    石墨化外壳中的SP²碳原子与石墨烯、碳纤维、碳纳米管等SP²碳材料
                    在高温下发生碳原子扩散与重排，形成C-C共价键连接，实现金刚石与碳材料的 原子级化学键合。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-slate-900">三维网络构建</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    通过合理设计金刚石颗粒与SP²碳材料的配比和空间分布，构建出
                    SP³-SP²互连的三维碳网络结构，兼具金刚石的高硬度、高导热特性 与石墨/碳纤维的导电、柔性特性。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-sky-50 to-cyan-50 border-sky-200">
              <h3 className="text-xl font-semibold mb-6 text-slate-900">关键优势</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-sky-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900">全碳体系</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    无金属相，避免金属热膨胀失配、电化学腐蚀等问题。 轻质、高强度、化学稳定性优异。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-sky-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900">化学键合</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    C-C共价键连接，界面结合强度远超物理接触或弱范德华力。 导热、导电通道连续，无界面热阻/电阻。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-sky-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900">性能可调</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    通过调整金刚石粒度、含量、SP²材料种类（石墨烯、碳纤维、碳管），
                    可实现导热、导电、力学性能的灵活定制。
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-sky-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900">多功能平台</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    同一技术原理可拓展至多个领域：高导热材料、固态电池负极、 粒子电极、超导材料等，具有广阔的应用前景。
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Prospects */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">应用前景</h2>
          <p className="text-center text-slate-600 mb-12">基于SP³-SP²平台技术的多领域应用潜力</p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">热管理与能源存储</h3>
              <p className="text-slate-600 mb-6">
                全碳复合材料在高导热散热片、柔性导热垫片与固态电池负极材料中拥有广阔应用空间。SP³-SP²结构既能提供卓越的热传导能力，又能满足储能材料的多孔结构和导电要求。
              </p>
              <Link
                href="/applications#thermal-management"
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold"
              >
                查看热管理与储能应用
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">环保与前沿科研</h3>
              <p className="text-slate-600 mb-6">
                作为环境友好型材料，全碳复合材料可用于水处理粒子电极与电催化应用。更前沿地，高压力下的内应力诱导可能实现高导电甚至超导特性，为前沿科学研究提供全新材料平台。
              </p>
              <Link
                href="/applications#energy-environment"
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold"
              >
                查看前沿应用领域
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">制备工艺</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">纳米金刚石表面石墨化</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    将纳米金刚石在惰性气氛或真空中加热至一定温度，
                    控制时间使表面特定厚度发生石墨化转变，形成石墨化外壳。 核心保持金刚石结构。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">SP²碳材料混合</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    将石墨化纳米金刚石与石墨烯片、碳纤维、碳纳米管等SP²碳材料按设计比例混合。
                    可采用溶液分散、机械混合或层层组装等方法，确保均匀分布。
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                      石墨烯方案：用于刚性高导热材料
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                      碳纤维方案：用于柔性导热垫片
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                      多孔碳方案：加造孔剂用于固态电池
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">高温压力烧结</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    在真空或惰性气氛热压炉中，升温至特定温度，施加一定压力，
                    进行保温。石墨化外壳与SP²碳材料发生碳原子扩散，形成C-C共价键连接。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">冷却与后处理</h3>
                  <p className="text-slate-600 leading-relaxed">
                    控制冷却至室温，获得SP³-SP²互连的全碳复合材料整体。可根据应用需求进行
                    切割、打磨、造孔、功能化修饰等后处理。对于固态电池应用，需进一步刻蚀造孔剂 形成多孔结构。
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">相关专利技术</h2>
          <p className="text-center text-slate-600 mb-12">完整的知识产权保护与技术储备</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-white border-slate-200">
              <div className="text-xs font-medium text-sky-600 mb-2">发明专利</div>
              <h3 className="font-semibold mb-2 text-slate-900">
                一种基于金刚石原位低温石墨化键合的高导热复合材料及其制备方法与应用
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                详细描述了纳米金刚石表面石墨化、与石墨烯/碳纤维混合、高温压力烧结的完整工艺。
                覆盖热管理材料应用的各种实施例。
              </p>
              <div className="text-xs text-slate-500">申请中</div>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="text-xs font-medium text-sky-600 mb-2">发明专利</div>
              <h3 className="font-semibold mb-2 text-slate-900">
                一种通过化学键合内生应力的SP²-SP³互连全碳复合材料及其制备方法与应用
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                重点描述高压力条件下形成的内应力结构，以及可能的超导特性。 覆盖高端功能材料与前沿研究方向。
              </p>
              <div className="text-xs text-slate-500">申请中</div>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="text-xs font-medium text-sky-600 mb-2">发明专利</div>
              <h3 className="font-semibold mb-2 text-slate-900">一种高模量多孔碳宿主材料及其制备方法与应用</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                专门针对固态电池负极应用的多孔SP³-SP²结构设计，包括造孔剂选择、 孔隙率控制、电化学性能优化等关键技术。
              </p>
              <div className="text-xs text-slate-500">申请中</div>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="text-xs font-medium text-sky-600 mb-2">发明专利</div>
              <h3 className="font-semibold mb-2 text-slate-900">
                一种基于分区功能化骨架的一体化全固态电池及其共烧结制备方法
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                基于SP³-SP²骨架的全固态电池一体化设计方案，实现正极、负极、隔膜的 一体化共烧结制备，大幅简化工艺。
              </p>
              <div className="text-xs text-slate-500">申请中</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Value */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">战略价值与投资潜力</h2>
          <p className="text-center text-slate-600 mb-12">5-10年技术储备，多领域应用前景</p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-slate-200">
              <h3 className="text-xl font-semibold mb-6 text-slate-900">技术壁垒</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  纳米金刚石表面可控石墨化技术，精确控制石墨化层厚度
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  SP³-SP²化学键合机制，实现原子级界面连接
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  高温高压烧结工艺优化，确保结构稳定性
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  完整的专利保护体系，覆盖工艺与应用
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-slate-200">
              <h3 className="text-xl font-semibold mb-6 text-slate-900">市场前景</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  高端热管理：AI芯片散热市场快速增长，对高导热材料需求强劲
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  固态电池：全球储能与电动汽车市场爆发，固态电池是未来方向
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  超导材料：室温超导是材料科学圣杯，潜在颠覆性应用
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  平台技术：一个核心技术衍生多个产品线，投资回报潜力巨大
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-sky-600 to-cyan-600 text-white mt-8">
            <h3 className="text-xl font-semibold mb-4">合作模式</h3>
            <p className="leading-relaxed mb-6">
              我们欢迎与产业资本、研究机构、应用企业开展多种形式的合作。
              可提供技术授权、联合研发、定制开发等灵活合作方式，共同推动全碳复合材料技术的产业化应用。
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-slate-100" asChild>
                <Link href="/cooperation#contact">项目合作</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
                <Link href="/about#wang">技术交流</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <FooterNav />
    </div>
  )
}
