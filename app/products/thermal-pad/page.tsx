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
                基于铜网/铜纤维三维骨架的创新型柔性导热方案。通过活性熔固技术将金刚石等高导热颗粒
                固定在柔性金属骨架上，形成三维导热相网络，兼具高导热性能与优异的界面适应能力。
              </p>
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
                  <span className="font-semibold text-sky-600">30-150W/m·K</span>
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
              <h3 className="text-xl font-semibold mb-4 text-slate-900">活性熔固结合</h3>
              <p className="text-slate-600 leading-relaxed">
                通过活性熔固技术将金刚石、氮化硼等高导热颗粒牢固结合在金属骨架上，
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
                <h4 className="font-semibold mb-3 text-slate-900">高性能导热骨架选择</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  采用精密微米级金属网或定向排列金属纤维作为三维导热支架。利用金属优异的本征导热特性与良好的力学延展性，构建连续的热传导网络。
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                    网格结构方案：几何排布规整，厚度精准受控，确保大面积应用时的一致性。
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                    纤维网络方案：三维无序交织，具备卓越的机械柔韧性，完美适配非平整界面。
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <h4 className="font-semibold mb-3 text-slate-900">高导热复合增强相</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  在金属骨架的微观孔隙内，精准嵌入改性碳基增强颗粒（如金刚石、氮化硼等）。通过界面亲和力工程，实现增强颗粒与金属骨架的原子级冶金结合，消除传统材料的物理间隙。
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-600 mb-1">金刚石增强</div>
                    <div className="font-semibold text-slate-900 text-sm">提供极速垂直热传导通道</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-600 mb-1">陶瓷基增强</div>
                    <div className="font-semibold text-slate-900 text-sm">平衡高导热与系统电绝缘需求</div>
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
                      <h4 className="font-semibold mb-2 text-slate-900">界面活化预处理</h4>
                      <p className="text-sm text-slate-600">
                        对金属骨架进行深层清洁与表面能调控，去除微观氧化层。通过自主研发的表面改性工艺，显著提升后续钎焊过程中的界面润湿性与结合强度。
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
                      <h4 className="font-semibold mb-2 text-slate-900">多维弥散填充</h4>
                      <p className="text-sm text-slate-600">
                        将经过特殊包覆处理的增强颗粒与活性界面组分均匀分散，利用真空辅助技术或高频物理能量，使填料满布于骨架的三维空间，构建无死角导热路径。
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
                      <h4 className="font-semibold mb-2 text-slate-900">受控物理冶金结合</h4>
                      <p className="text-sm text-slate-600">
                        在真空或精密控制的保护气氛下，通过优化热物理循环方案，诱导活性元素在界面处发生原位化学反应。该过程在低压环境下完成，实现碳化物/氮化物界面的稳定生成，彻底消除界面热阻。
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
                      <h4 className="font-semibold mb-2 text-slate-900">精密后处理与定制化</h4>
                      <p className="text-sm text-slate-600">
                        通过受控冷却逻辑释放内应力，获得具备优异性能的整体柔性结构。可根据终端需求进行表面平整化精加工，或根据设计图纸进行精密裁剪。
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
              <h3 className="text-xl font-semibold mb-4 text-slate-900">高导热界面材料的演进方向</h3>
              <p className="text-slate-600 mb-4">
                本方案结合了金属的高强度、碳基材料的极速传热以及聚合物的柔顺性。作为下一代高性能热界面材料（TIM），它正在解决传统散热垫片"导热率低、易干裂、界面不服帖"的顽疾，广泛应用于：
              </p>
              <ul className="text-slate-600 mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  <span>新能源动力系统：保障电池包与电机控制器的长效热安全。</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  <span>高集成通信基站：应对5G/6G射频模块的极端热流密度。</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  <span>宇航级电子载荷：在轻量化要求下实现极致的热扩散。</span>
                </li>
              </ul>
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
                我们提供从底层骨架设计、颗粒配方优化到成品规格定制的全链条研发服务。针对客户特定的热流密度需求，通过调整界面应力与增强相分布，提供独有的性能定制化方案。
              </p>
              <Link
                href="/about"
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
          <p className="text-center text-slate-600 mb-12">核心知识产权布局</p>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-white border-slate-200">
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                我司已构建严密的专利护城河，覆盖了材料组分、界面工程及核心制备工艺。
              </p>
              <div className="text-xs font-medium text-sky-600 mb-2">核心发明专利</div>
              <h3 className="text-lg font-semibold mb-3 text-slate-900">
                一种基于活性钎焊金属骨架增强的柔性高导热复合材料及其制备方法
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                该专利详细定义了以金属网/纤维为结构底座，通过原位冶金焊接技术固定高导热颗粒的系统方法。其核心价值在于通过界面化学键合取代了传统的物理掺杂，从根本上提升了界面传热效率与抗老化可靠性。
              </p>
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs text-slate-500">申请号：202511963728.9</div>
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
            <Button size="lg" className="gap-2 bg-sky-600 hover:bg-sky-700 text-white" asChild>
              <Link href="/cooperation#contact">申请样品</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
              asChild
            >
              <a href="/docs/diamond-pad.pdf" target="_blank" rel="noopener noreferrer">
                下载技术白皮书
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
