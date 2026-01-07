import Link from "next/link"
import { ArrowLeft, Layers, Zap, FlaskConical, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FooterNav } from "@/components/footer-nav"

export default function ThermalPadPage() {
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
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white">
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
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <FlaskConical className="w-7 h-7 text-sky-600" />
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">
                  第二代技术 · 业务扩展
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">柔性导热垫片</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                基于铜网/铜纤维三维骨架的创新型柔性导热方案。通过活性钎焊技术将金刚石等高导热颗粒
                固定在柔性金属骨架上，形成三维导热相网络，兼具高导热性能与优异的界面适应能力。
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                  获取样品
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                >
                  技术白皮书
                </Button>
              </div>
            </div>

            <Card className="p-8 bg-white border-slate-200 shadow-xl">
              <h3 className="text-lg font-semibold mb-6 text-slate-900">核心性能指标</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">导热系数（面内）</span>
                  <span className="font-semibold text-sky-600">200-400 W/m·K</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">导热系数（厚度方向）</span>
                  <span className="font-semibold text-sky-600">100-200 W/m·K</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">柔性变形能力</span>
                  <span className="font-semibold text-sky-600">优异</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">热膨胀系数</span>
                  <span className="font-semibold text-sky-600">与铜接近</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">厚度范围</span>
                  <span className="font-semibold text-sky-600">0.5-3 mm</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">技术优势</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">三维骨架结构</h3>
              <p className="text-slate-600 leading-relaxed">
                采用铜网或铜纤维作为三维骨架，提供连续的导热通道。骨架本身具有良好的柔性，
                可适应不平整界面与热应力变形。
              </p>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">活性钎焊固定</h3>
              <p className="text-slate-600 leading-relaxed">
                通过活性钎焊技术将金刚石、氮化硼等高导热颗粒牢固结合在金属骨架上，
                形成稳定的化学冶金连接，确保长期可靠性。
              </p>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                <FlaskConical className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">柔性与导热兼顾</h3>
              <p className="text-slate-600 leading-relaxed">
                突破传统硬质导热材料的局限，在保持高导热性能的同时，提供优异的柔性和界面适应能力，
                解决复杂装配场景的导热难题。
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">技术原理与制备</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-900">核心结构设计</h3>
              <Card className="p-6 bg-white border-slate-200 mb-6">
                <h4 className="font-semibold mb-3 text-slate-900">金属骨架选择</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  采用铜网（网孔50-200目）或铜纤维（直径20-100μm）作为导热骨架。 铜具有优异的导热性（~400
                  W/m·K）和良好的加工性能，易于编织成各种结构。
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                    铜网方案：网孔规整，厚度可控，适合批量生产
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                    铜纤维方案：三维随机分布，柔性更好，适应复杂界面
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <h4 className="font-semibold mb-3 text-slate-900">高导热颗粒填充</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  在铜骨架表面及孔隙中填充金刚石、氮化硼等高导热颗粒（粒径10-200μm），
                  通过活性钎焊实现颗粒与骨架的冶金结合。
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-600 mb-1">金刚石</div>
                    <div className="font-semibold text-slate-900 text-sm">1000+ W/m·K</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-600 mb-1">氮化硼</div>
                    <div className="font-semibold text-slate-900 text-sm">~300 W/m·K</div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-900">制备工艺流程</h3>
              <div className="space-y-4">
                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">骨架预处理</h4>
                      <p className="text-sm text-slate-600">
                        对铜网或铜纤维进行清洗、活化处理，去除表面氧化物，增强表面活性。
                        可选择性进行镀镍或镀钛处理，进一步改善钎焊润湿性。
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">颗粒分散填充</h4>
                      <p className="text-sm text-slate-600">
                        将镀钛金刚石或氮化硼颗粒与活性钎料粉末混合，通过超声振动或真空辅助方法
                        填充至铜骨架的三维孔隙中，确保均匀分布。
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">低压烧结钎焊</h4>
                      <p className="text-sm text-slate-600">
                        在真空或保护气氛下，升温至钎料熔点（800-950°C），施加小压力（0.1-1 MPa），
                        保温15-30分钟。活性元素与颗粒表面反应形成界面碳化物。
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">冷却与后处理</h4>
                      <p className="text-sm text-slate-600">
                        随炉冷却或控制冷却，获得柔性导热垫片整体结构。可根据需要裁剪成各种尺寸， 或进行表面平整化处理。
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Prospects */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">应用前景</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">高导热材料的未来方向</h3>
              <p className="text-slate-600 mb-6">
                柔性导热垫片结合了传统硬质散热材料的高导热性能与柔性材料的界面适应能力，正在成为复杂装配场景的标配解决方案。从电动汽车到5G基站，从航空航天到消费电子，应用前景广阔。
              </p>
              <Link
                href="/applications"
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold"
              >
                探索热管理应用领域
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">定制化解决方案</h3>
              <p className="text-slate-600 mb-6">
                我们可根据您的具体应用需求，从骨架材料、导热颗粒、厚度规格到性能指标，提供全面定制化设计与制备服务。与您共同开发创新的导热管理方案。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold"
              >
                联系应用工程师
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">相关专利技术</h2>
          <p className="text-center text-slate-600 mb-12">核心技术知识产权保护</p>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-white border-slate-200">
              <div className="text-xs font-medium text-sky-600 mb-2">发明专利</div>
              <h3 className="text-lg font-semibold mb-3 text-slate-900">
                一种基于活性钎焊金属骨架增强的柔性高导热复合材料及其制备方法
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                详细描述了以铜网或铜纤维为骨架，通过活性钎焊技术固定金刚石等高导热颗粒
                的柔性导热垫片制备方法。涵盖骨架预处理、颗粒填充、低压烧结等关键工艺步骤， 以及多种应用场景的优化方案。
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="text-xs text-slate-500">申请中</div>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                >
                  查看详情
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">获取柔性导热垫片样品</h2>
          <p className="text-slate-600 mb-8">我们提供定制化尺寸与性能参数的柔性导热垫片样品，欢迎联系技术团队</p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2 bg-sky-600 hover:bg-sky-700 text-white">
              申请样品
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
            >
              技术咨询
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterNav />
    </div>
  )
}
