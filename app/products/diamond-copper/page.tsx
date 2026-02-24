import Link from "next/link"
import { ArrowLeft, ArrowRight, Layers, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FooterNav } from "@/components/footer-nav"
import { Navigation } from "@/components/navigation"

export default function DiamondCopperPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white">
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
                <div className="w-14 h-14 rounded-xl bg-sky-600 flex items-center justify-center">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <div className="px-3 py-1 bg-sky-600 rounded-full text-xs font-medium text-white">
                  第二代技术 · 战略核心
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">金刚石铜复合材料</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                基于散热需求的技术转型核心产品。已成功研发出热导率达 680 W/m·K 的样品，
                并规划了两条产品线：极致性价比的大批量民用方案，以及热导率超 1200 W/m·K
                的极致性能版本，可代替昂贵的CVD金刚石。
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-sky-50 to-white border-sky-200 shadow-xl">
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-slate-200">
                  <div className="text-5xl font-bold text-sky-600 mb-2">680</div>
                  <div className="text-sm text-slate-600">已达成热导率 (W/m·K)</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
                    <span className="text-sm text-slate-700">CVD金刚石</span>
                    <span className="font-semibold text-slate-900">1000-2000</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-sky-100 rounded-lg border-2 border-sky-600">
                    <span className="text-sm font-medium text-slate-900">ToSpike 极致版</span>
                    <span className="font-bold text-sky-600 text-lg">1200+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
                    <span className="text-sm text-slate-700">传统金刚石铜 (70%)</span>
                    <span className="font-semibold text-slate-900">~600</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
                    <span className="text-sm text-slate-700">纯铜</span>
                    <span className="font-semibold text-slate-900">~400</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Prospects */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">应用前景</h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">热管理材料新标杆</h3>
              <p className="text-slate-600 mb-6">
                金刚石铜复合材料正在成为高功率电子设备的标配散热解决方案。从AI芯片到新能源汽车，从5G基站到航空航天，应用前景广阔。
              </p>
              <Link
                href="/applications"
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold"
              >
                查看完整应用领域
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">双产品线驱动增长</h3>
              <p className="text-slate-600 mb-6">
                性价比版本面向大批量民用市场，极致性能版本面向高端工业应用。两条产品线协同发展，覆盖从消费到工业的全市场。
              </p>
              <Link
                href="/cooperation"
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold"
              >
                与我们合作开发
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">双产品线策略</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Line A */}
            <Card className="p-10 bg-slate-50 border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-sky-600" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-slate-900">性价比方案</h3>
                <div className="px-3 py-1 bg-slate-300 rounded-full text-xs font-semibold text-slate-900">民用市场</div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                通过工艺优化实现低成本大批量制备，面向民用市场，支持规模化应用。
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">热导率</span>
                    <span className="font-semibold text-sky-600">450~700 W/m·K</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "70%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">成本优势</span>
                    <span className="font-semibold text-sky-600">极高</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "95%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">批量生产能力</span>
                    <span className="font-semibold text-sky-600">优秀</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-semibold mb-3 text-slate-900">应用场景</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    消费电子散热（手机、平板、笔记本）
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    LED照明散热
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    通用工业散热器
                  </li>
                </ul>
              </div>
            </Card>

            {/* Product Line B */}
            <Card className="p-10 bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-sky-600 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-slate-900">极致性能方案</h3>
                <div className="px-3 py-1 bg-sky-600 rounded-full text-xs font-medium text-white">高端市场</div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                活性熔固多级金刚石颗粒复合，热导率 1200+ W/m·K，可代替昂贵的 CVD 方案，面向高端散热需求。
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">热导率</span>
                    <span className="font-semibold text-sky-600">最高可达1200+ W/m·K</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">性能优势</span>
                    <span className="font-semibold text-sky-600">接近CVD，更相近的线膨胀系数</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "98%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">金刚石含量</span>
                    <span className="font-semibold text-sky-600">80-90 vol%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">成本优势</span>
                    <span className="font-semibold text-sky-600">最低可达CVD金刚石的十分之一</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-semibold mb-3 text-slate-900">应用场景</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    AI芯片、GPU散热（高功率密度）
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    功率器件（IGBT、SiC、GaN）
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    激光器、5G基站、航空航天
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">技术原理与创新</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-900">核心技术</h3>
              <Card className="p-6 bg-white border-slate-200 mb-6">
                <h4 className="font-semibold mb-3 text-slate-900">三维结构化金刚石骨架</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  采用多级粒径梯度配比技术，利用特殊表面改性的金刚石颗粒构建自支撑三维连续骨架。通过精密堆积算法优化，金刚石相实现极高比例的体积分数，形成互联互通的高速声子传输通道。
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs font-semibold text-slate-700 mb-1">级配逻辑</div>
                    <div className="text-xs text-slate-600">大尺寸颗粒构建主体框架，中、小颗粒实现微米级空隙的逐级精密填充。</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs font-semibold text-slate-700 mb-1">界面改性</div>
                    <div className="text-xs text-slate-600">颗粒表面预处理技术确保了骨架极高的自支撑强度与界面热导。</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <h4 className="font-semibold mb-3 text-slate-900">ToSpike 活性熔固方案</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  依托自研的低熔点活性钎料体系，我们突破了传统金刚石复合材料润湿性差的瓶颈。该技术允许合金液相在极佳的流动性下，自发渗透至复杂的骨架深处，构建出近乎完美的传热网络。
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs font-semibold text-slate-700 mb-1">技术优势</div>
                    <div className="text-xs text-slate-600">温和的工艺条件有效避免了金刚石表面的热损伤。</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs font-semibold text-slate-700 mb-1">界面强度</div>
                    <div className="text-xs text-slate-600">压力辅助下的化学键合，赋予材料卓越的机械性能与热稳定性。</div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-900">制备工艺</h3>
              <div className="space-y-4">
                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">骨架构建</h4>
                      <p className="text-sm text-slate-600">
                        将镀钛金刚石颗粒按大、中、小顺序填充至模具，通过振动达到致密堆积，形成三维连续多孔骨架。
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
                      <h4 className="font-semibold mb-2 text-slate-900">熔固合金填充</h4>
                      <p className="text-sm text-slate-600">
                        将活性熔固合金粉末振动填充至金刚石骨架的孔隙中，确保合金均匀分布。
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
                      <h4 className="font-semibold mb-2 text-slate-900">压力辅助熔固</h4>
                      <p className="text-sm text-slate-600">
                        在真空热压炉中升温至熔固合金液相线以上，施加压力并保温。
                        活性元素协同作用形成复合碳化物界面，实现金刚石与金属基体的可靠连接。
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
                      <h4 className="font-semibold mb-2 text-slate-900">冷却成型</h4>
                      <p className="text-sm text-slate-600">
                        随炉冷却凝固，形成完全致密的金刚石铜复合材料整体结构。 可进一步通过线切割加工成所需尺寸。
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Parameters */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">性能参数</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-slate-50 border-slate-200 text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">680</div>
              <div className="text-sm text-slate-600 mb-1">已达成热导率</div>
              <div className="text-xs text-slate-500">W/m·K</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-sky-50 to-white border-sky-300 text-center shadow-lg">
              <div className="text-3xl font-bold text-sky-600 mb-2">1200+</div>
              <div className="text-sm text-slate-700 font-medium mb-1">极致性能版本</div>
              <div className="text-xs text-slate-500">W/m·K</div>
            </Card>

            <Card className="p-6 bg-slate-50 border-slate-200 text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">80-90</div>
              <div className="text-sm text-slate-600 mb-1">金刚石体积分数</div>
              <div className="text-xs text-slate-500">vol%</div>
            </Card>

            <Card className="p-6 bg-slate-50 border-slate-200 text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">优异</div>
              <div className="text-sm text-slate-600 mb-1">平面度</div>
              <div className="text-xs text-slate-500">单层排布</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">相关专利技术</h2>
          <p className="text-center text-slate-600 mb-12">完整的知识产权保护体系</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-white border-slate-200">
              <div className="text-xs font-medium text-sky-600 mb-2">发明专利</div>
              <h3 className="font-semibold mb-2 text-slate-900">一种金刚石铜复合材料及其制备方法</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                公开了通过多级金刚石颗粒堆积构建骨架，活性熔固液相填充的制备方法。 实现高导热、低成本、可大尺寸制备。
              </p>
              <div className="text-xs text-slate-500">申请号：202511708386.6</div>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="text-xs font-medium text-sky-600 mb-2">发明专利</div>
              <h3 className="font-semibold mb-2 text-slate-900">一种结构化金刚石热管理基板及其制备方法</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                详细描述了大、中、小三级金刚石颗粒配比、镀钛处理、包衣工艺、 限位筛网辅助填充等关键技术。
              </p>
              <div className="text-xs text-slate-500">申请号：202511708387.0</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">需要金刚石铜散热解决方案？</h2>
          <p className="text-slate-600 mb-8">我们的技术团队将根据您的散热需求，提供最优化的产品选型与定制化设计服务</p>
          <div className="flex items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 bg-sky-600 hover:bg-sky-700 text-white"
              asChild
            >
              <a href="/docs/sample test result.pdf" target="_blank" rel="noopener noreferrer">
                查看样品数据
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
              asChild
            >
              <a href="/docs/2026 cufeng diamond-cu.pdf" target="_blank" rel="noopener noreferrer">
                下载技术资料
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterNav />
    </div>
  )
}
