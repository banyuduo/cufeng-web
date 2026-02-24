"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Settings, Wrench, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ResponsivePicture } from "@/components/responsive-picture"
import { FooterNav } from "@/components/footer-nav"
import { Navigation } from "@/components/navigation"

export default function DiamondToolsPage() {
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
                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">
                  平台技术起点 · 工程基石
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">底层工程基石：超硬磨料熔固技术</h1>
              <p className="text-sm text-slate-500 mb-4">Superabrasive Brazing Technology</p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                基于 10 余年对金刚石与立方氮化硼（CBN）界面润湿性的深度研究，我们掌握了核心的"超磨熔固"技术。这是
                sp²–sp³
                平台技术的工程起点，通过活性熔固实现超硬磨料与金属基体的原子级化学键合，为全球客户提供极端工况下的精密加工解决方案。
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-sky-600 mb-1">10+</div>
                  <div className="text-xs text-slate-600">年熔固技术积累</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-sky-600 mb-1">30+</div>
                  <div className="text-xs text-slate-600">项超硬专利基础</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-sky-600 mb-1">100+</div>
                  <div className="text-xs text-slate-600">种定制化解决方案</div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ResponsivePicture
                src="/images/diamond.jpg"
                alt="超硬磨料熔固技术"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">核心能力</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            从界面改性到系统工程，构建 sp²–sp³ 平台的底层技术基础
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-slate-50 border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-slate-900">界面改性与连接</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                专注于解决超硬磨料（Diamond/CBN）与异质基材的连接难题，利用活性熔固（Active
                Fusion-Bonding）形成高强度连接界面化合物，实现原子级化学键合。
              </p>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-slate-900">极端工况适配</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                针对航空航天高温合金、碳纤维复合材料（CFRP）、陶瓷基复合材料（CMC）等"难加工材料"提供定制化切削/磨削方案，确保工艺稳定性与高效加工。
              </p>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-slate-900">技术向下兼容</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                将工业级精密控制能力，转化为支撑 sp²–sp³
                消费级产品（如金刚石涂层锅具）和工业级散热（金刚石铜）的底层工艺规范，实现技术体系的连续演化。
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Design Principles */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">产品设计原理：超硬磨料熔固的三要素架构</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            活性熔固超硬磨料工具的性能由 <strong>基体 (Substrate)</strong>、<strong>磨料 (Superabrasive)</strong>、
            <strong>活性熔固合金</strong> 三大核心要素共同决定
          </p>

          {/* Three Elements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-white border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-slate-900">基体 (Substrate)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                作为磨粒载体，通过几何仿形适配特定加工条件，为工具提供结构支撑与刚性基础。
              </p>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-slate-900">磨料 (Superabrasive)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                作为微型刀具，承担材料去除任务（Diamond/CBN），决定工具的切削能力与使用寿命。
              </p>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-slate-900">活性熔固合金</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                作为连接纽带，通过化学冶金反应决定工具的整体服役性能，是性能的关键控制点。
              </p>
            </Card>
          </div>

          {/* Technical Diagrams */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white border-slate-200">
              <div className="relative aspect-[4/3] mb-4 bg-slate-50 rounded-lg overflow-hidden">
                <ResponsivePicture
                  src="/images/diamond-brazed.png"
                  alt="钎焊金刚石工具基本结构"
                  fill
                  format="png"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
              <p className="text-sm text-slate-600 text-center">钎焊金刚石工具基本结构</p>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="relative aspect-[4/3] mb-4 bg-slate-50 rounded-lg overflow-hidden">
                <ResponsivePicture
                  src="/images/brazing tech.png"
                  alt="钎焊金刚石工具研制影响要素及之间关系"
                  fill
                  format="png"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
              <p className="text-sm text-slate-600 text-center">钎焊金刚石工具研制影响要素及之间关系</p>
            </Card>
          </div>

          {/* Design Logic */}
          <Card className="p-8 bg-gradient-to-br from-slate-50 to-sky-50 border-sky-200">
            <h3 className="text-xl font-semibold mb-4 text-slate-900">系统设计逻辑</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              工具设计并非要素的简单叠加，而是基于<strong>加工对象</strong>（如高温合金、复材）与
              <strong>工况条件</strong>
              （干/湿切）的综合优化。我们从基体结构、磨料选配、布料工艺、活性熔固气氛四个维度进行全系统匹配，寻找最优的制备工艺体系。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <strong>基体与活性熔固合金的适应性</strong>：润湿性、热膨胀匹配
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <strong>磨料与活性熔固合金的结合性能</strong>：界面化学键合强度
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <strong>加工对象的材料特性</strong>：硬度、脆性、热敏感性
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <strong>加工条件的影响</strong>：冷却方式、磨削/切削模式
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Extreme Working Conditions */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">极端工况下的工程支撑</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            在航空航天、半导体制造、国防工业等领域，难加工材料对工具的可靠性有着严苛要求
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-slate-50 border-slate-200">
              <h4 className="font-semibold mb-3 text-slate-900">陶瓷基复合材料 (CMC)</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                航空发动机热端部件的核心材料，加工难度极高，对工具的耐磨性与热稳定性要求苛刻。
              </p>
              <div className="flex items-center gap-2 text-xs text-sky-600">
                <Check className="w-4 h-4" />
                <span>高温稳定性 &gt; 1000°C</span>
              </div>
            </Card>

            <Card className="p-6 bg-slate-50 border-slate-200">
              <h4 className="font-semibold mb-3 text-slate-900">碳纤维复材 (CFRP)</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                航空结构件、新能源汽车车身的主流材料，加工时易产生分层、毛刺，需要精密的切削控制。
              </p>
              <div className="flex items-center gap-2 text-xs text-sky-600">
                <Check className="w-4 h-4" />
                <span>低崩边率 &lt; 0.1mm</span>
              </div>
            </Card>

            <Card className="p-6 bg-slate-50 border-slate-200">
              <h4 className="font-semibold mb-3 text-slate-900">钛合金 (Ti-6Al-4V)</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                航空航天与医疗器械的关键材料，加工时产生高热量，对工具的散热与强度提出双重挑战。
              </p>
              <div className="flex items-center gap-2 text-xs text-sky-600">
                <Check className="w-4 h-4" />
                <span>切削速度 &gt; 80 m/min</span>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-sky-50 to-slate-50 border-sky-200">
            <h3 className="text-xl font-semibold mb-4 text-slate-900">我们的方案价值</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              我们的方案不仅提供工具，更提供基于<strong>"材料匹配"</strong>
              的加工工艺规范。通过超磨熔固技术，解决高价值复杂零件在加工过程中的崩边、热损伤及效率瓶颈。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-sm mb-3 text-slate-900">工艺规范化输出</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                    <span>提供完整的切削参数推荐（转速、进给、冷却方式）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                    <span>针对特定材料的工具选型指南</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-3 text-slate-900">全生命周期支持</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                    <span>现场技术支持与工艺优化</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                    <span>工具性能追踪与持续改进</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Active Fusion-Bonding Technology Deep Analysis */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">活性熔固技术深度解析</h2>

          {/* Core Principle */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">超硬磨料活性熔固原理</h3>
              <p className="text-sm text-slate-500 mb-4">Active Fusion-Bonding Technology</p>
              <p className="text-slate-600 leading-relaxed">
                利用定制化熔固合金在超高洁净真空环境或受控保护气氛下，驱动活性组分与超硬材料（金刚石、CBN、PCD）表层元素发生原子级化学键合。这不仅是物理上的连接，更是原子级的深度耦合，旨在构建高强度、低热阻的整体式工程结构。
              </p>
            </div>

            {/* Technical Parameters */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              <Card className="p-6 bg-white border-slate-200">
                <div className="text-sm text-slate-500 mb-2">熔固温度</div>
                <div className="text-2xl font-bold text-sky-600 mb-1">780°C - 1050°C</div>
                <p className="text-xs text-slate-600">基于合金体系精确调控</p>
              </Card>
              <Card className="p-6 bg-white border-slate-200">
                <div className="text-sm text-slate-500 mb-2">工艺环境</div>
                <div className="text-lg font-semibold text-sky-600 mb-1">超高洁净真空负压控制</div>
                <p className="text-xs text-slate-600">有效抑制成分挥发，保障熔固层致密性</p>
              </Card>
            </div>
          </div>

          {/* Core Advantages */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-center text-slate-900">核心优势四维度对比</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-white border-slate-200 hover:border-sky-400 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-3 text-slate-900">高强度化学键合</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  熔固合金与超硬材料优化匹配，在实现极高连接强度的同时，避免过度熔蚀，完整保留超硬材料的理化性能。
                </p>
              </Card>

              <Card className="p-6 bg-white border-slate-200 hover:border-sky-400 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-3 text-slate-900">物理性能保障</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  真空环境不仅防止氧化，更通过负压精确控制技术，保证了熔固合金成分的稳定性，使工具表面清洁度与一致性达到极致。
                </p>
              </Card>

              <Card className="p-6 bg-white border-slate-200 hover:border-sky-400 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-3 text-slate-900">极致出刃高度</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  相比电镀和传统钎焊，活性熔固技术使磨粒露出感更强，切削刃口更多，显著提升材料去除率。
                </p>
              </Card>

              <Card className="p-6 bg-white border-slate-200 hover:border-sky-400 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-3 text-slate-900">精密加工适配</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  熔固合金采用雾化制备与多级筛选，与不同规格磨料精准配对，表面一致性佳，专为精密与超精密加工场景设计。
                </p>
              </Card>
            </div>
          </div>

          {/* Key Materials System */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-center text-slate-900">关键材料体系</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6 bg-white border-slate-200">
                <div className="font-semibold text-slate-900 mb-3">超硬磨料系列</div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• 高品级人造金刚石</li>
                  <li>• 立方氮化硼 (CBN)</li>
                  <li>• 聚晶金刚石 (PCD)</li>
                </ul>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="font-semibold text-slate-900 mb-3">熔固合金</div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• 高性能雾化活性合金粉末</li>
                  <li>• 适配多种复杂熔固工艺</li>
                  <li>• 多级筛选精准配对</li>
                </ul>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="font-semibold text-slate-900 mb-3">基体适配</div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• 不锈钢</li>
                  <li>• 高强度合金钢</li>
                  <li>• 低碳合金钢等工程材料</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Expanded Applications */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center text-slate-900">应用领域升级</h3>
            <Card className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-0 text-white">
              <p className="text-slate-300 mb-6 text-center">活性熔固工具广泛应用于：</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-sky-400">硬脆/黑色金属</h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    <li>• 超硬陶瓷</li>
                    <li>• 高强度钢</li>
                    <li>• 球墨铸铁</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-400">新型复合材料</h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    <li>• CFRP (碳纤维增强复合材料)</li>
                    <li>• 微晶玻璃</li>
                    <li>• 复合板材</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-amber-400">高端制造</h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    <li>• 航空航天部件加工</li>
                    <li>• 新能源精密结构件</li>
                    <li>• 海陆重型装备</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Migration: From Interface Bonding to Full-Carbon Platform - Repositioned as Summary & Transition */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">技术迁移：从"界面连接"到"全碳平台"</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              超硬磨料熔固技术的核心原理，如何演化为 sp²–sp³ 全碳复合材料平台
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-amber-500" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-amber-400">起源</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                超硬磨料活性熔固机理——实现 Diamond 与金属的<strong className="text-white">化学键合</strong>
                ，突破传统物理包镶的性能瓶颈。
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-sky-500" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-sky-400">延伸</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                金刚石与铜的结合——通过<strong className="text-white">高强度、低热阻界面</strong>
                ，打造金刚石铜散热基板，进入热管理领域。
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-green-500" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-green-400">升华</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                sp³ 金刚石与 sp² 碳材料的<strong className="text-white">同质异构结合</strong>
                ——打破金属限制，构建全碳复合材料平台，探索物理计算潜力。
              </p>
            </Card>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white gap-2" asChild>
              <Link href="/patents">查看 sp²–sp³ 技术架构全景</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">需要专业的加工解决方案？</h2>
          <p className="text-slate-600 mb-8">
            我们的工程师团队拥有10余年超硬磨料工具研发经验，可为您提供定制化技术咨询
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white" asChild>
              <Link href="/about#zhang-gong">联系工程师</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
              asChild
            >
              <a href="/docs/cufeng-diamond-products.pdf" target="_blank" rel="noopener noreferrer">
                下载产品画册
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
