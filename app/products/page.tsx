import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Zap, Layers, FlaskConical, Sparkles, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-sky-600 mb-8">
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">产品中心</h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            从消费级不粘锅产品到前沿碳基复合材料，我们的每一项技术都代表着材料科学的突破
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <Link href="/products/nonstick-cookware">
              <Card className="p-6 sm:p-10 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                    <ChefHat className="w-7 h-7 text-sky-600" />
                  </div>
                  <div className="px-3 py-1 bg-green-100 rounded-full text-xs font-medium text-green-700">
                    即时供货 · 成熟产品
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">金刚石涂层不粘锅</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  专利金刚石颗粒固着技术，实现超强耐磨与持久不粘性能。较传统涂层寿命提升10倍以上，已具备量产能力。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    钎焊固着金刚石颗粒涂层，永久结合
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    耐磨性提升10+倍，使用寿命大幅延长
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    食品安全认证，民用消费级产品
                  </div>
                </div>
                <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                  查看详情 <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            {/* Product 2 */}
            <Link href="/products/diamond-copper">
              <Card className="p-6 sm:p-10 bg-gradient-to-br from-sky-50 to-white border-sky-200 hover:shadow-2xl hover:border-sky-400 transition-all group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-sky-600 flex items-center justify-center group-hover:bg-sky-700 transition-colors">
                    <Layers className="w-7 h-7 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-sky-600 rounded-full text-xs font-medium text-white">
                    第二代 · 战略核心
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">金刚石铜复合材料</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  已达成680 W/m·K热导率，极致版本可达1200+ W/m·K。双产品线策略，覆盖性价比民用与高端应用市场。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    性价比版本：大批量民用方案
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    极致性能版本：1200+ W/m·K，代替CVD
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    AI芯片、功率器件等高端散热应用
                  </div>
                </div>
                <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                  查看详情 <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            {/* Product 3 */}
            <Link href="/products/thermal-pad">
              <Card className="p-6 sm:p-10 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                    <FlaskConical className="w-7 h-7 text-sky-600" />
                  </div>
                  <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">
                    第二代 · 业务扩展
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">柔性导热垫片</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  基于铜网/铜纤维的柔性导热方案。活性钎焊金刚石颗粒，形成三维骨架导热相，兼具高导热与柔性。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    铜网/铜纤维骨架结构
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    活性钎焊高导热颗粒
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    适配复杂界面柔性导热
                  </div>
                </div>
                <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                  查看详情 <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            {/* Product 4 */}
            <Link href="/products/carbon-composite">
              <Card className="p-6 sm:p-10 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center group-hover:from-sky-600 group-hover:to-cyan-600 transition-colors">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full text-xs font-medium text-white">
                    第三代 · 未来平台
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">全碳复合材料</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  SP3-SP2三维结构技术平台。可拓展至固态电池负极、超导材料等前沿领域，是5-10年核心技术储备。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    SP3-SP2化学键合结构
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    固态电池负极材料
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    高导电/超导潜力应用
                  </div>
                </div>
                <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                  查看详情 <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            {/* Product 5 */}
            <Link href="/products/diamond-tools" className="md:col-span-2">
              <Card className="p-6 sm:p-10 bg-slate-50 border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <Zap className="w-7 h-7 text-slate-600" />
                  </div>
                  <div className="px-3 py-1 bg-slate-200 rounded-full text-xs font-medium text-slate-700">
                    传统业务 · 定制服务
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">
                  超磨熔固工具解决方案
                  <br />
                  <span className="text-lg text-slate-600 font-normal">(Superabrasive Fusion-Bonded Solutions)</span>
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  基于界面化学冶金原理，通过活性钎焊实现金刚石或立方氮化硼（CBN）与异质金属基体的原子级可靠连接。我们不局限于提供工具单品，而是通过"基体-磨料-焊料"三要素的精准匹配，为航空航天、半导体及新型复合材料提供定制化的精密加工与材料去除方案。
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    3D 仿形结构设计
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    高硬度/难加工材料适配
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    极端工况可靠性验证
                  </div>
                </div>
                <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                  查看详情 <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">需要定制化热管理解决方案？</h2>
          <p className="text-slate-600 mb-8">我们的技术团队将根据您的具体需求，提供最优化的产品选型与技术支持</p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2 bg-sky-600 hover:bg-sky-700 text-white" asChild>
              <Link href="/cooperation#contact">联系技术团队</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
              asChild
            >
              <Link href="/products">浏览全部产品</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterNav />
    </div>
  )
}
