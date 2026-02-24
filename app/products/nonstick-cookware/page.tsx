import Link from "next/link"
import { ArrowLeft, Shield, Zap, CheckCircle2, Flame, Droplet, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ResponsivePicture } from "@/components/responsive-picture"
import { FooterNav } from "@/components/footer-nav"

export default function NonstickCookwarePage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-700 mb-4">
                <CheckCircle2 className="w-4 h-4" />
                即时供货 · 成熟产品
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">真正的金刚石不粘锅</h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                告别涂层脱落的烦恼。采用专利活性熔固技术，将真实金刚石颗粒永久键合于锅体表面。超强耐磨、持久不粘、食品安全，使用寿命是传统涂层的10倍以上。
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  </div>
                  <span>真金刚石颗粒活性熔固 - 永不脱落</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  </div>
                  <span>无PFOA/PTFE - 通过食品安全认证</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  </div>
                  <span>耐高温500°C - 适用各类烹饪方式</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  </div>
                  <span>可金属铲具 - 经久耐用不怕刮</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-[400px]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ResponsivePicture
                  src="/images/diamond pan.jpg"
                  alt="金刚石涂层不粘锅"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ResponsivePicture
                  src="/images/sem-pan.jpg"
                  alt="金刚石涂层不粘锅SEM图"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Diamond */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">为什么选择金刚石？</h2>
            <p className="text-slate-600">
              金刚石是自然界最硬的材料，同时具有卓越的导热性和化学稳定性。我们将这些天然优势应用于厨具，重新定义不粘锅的性能标准。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2 text-slate-900">硬度之王</h3>
              <p className="text-sm text-slate-600">莫氏硬度10级，抗刮擦能力是不锈钢的1000倍</p>
            </Card>

            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2 text-slate-900">超强导热</h3>
              <p className="text-sm text-slate-600">热导率2000+ W/m·K，受热快速且均匀</p>
            </Card>

            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Droplet className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2 text-slate-900">化学惰性</h3>
              <p className="text-sm text-slate-600">不与食物反应，无有害物质释放</p>
            </Card>

            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="font-semibold mb-2 text-slate-900">持久耐用</h3>
              <p className="text-sm text-slate-600">活性熔固，高强度结合，可达10年以上使用寿命。</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">核心优势</h2>
            <p className="text-slate-600">专利技术赋能，重新定义不粘锅性能标准</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            <Card className="p-8 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">超长使用寿命</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                金刚石颗粒通过活性熔固技术永久固着于基材，形成化学键合。较传统涂层寿命提升10倍以上，可承受100,000+次使用循环。金属铲具随意使用，不会损坏涂层。
              </p>
              <div className="text-2xl font-bold text-sky-600">10倍+</div>
              <div className="text-sm text-slate-500">耐磨性提升</div>
            </Card>

            <Card className="p-8 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">食品安全认证</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                金刚石材料本身无毒无害，涂层不含PFOA/PTFE等有害物质。可通过GB
                4806.1-2016食品接触材料安全检测，具备通过FDA认可的能力，可放心使用。
              </p>
              <div className="text-2xl font-bold text-green-600">0添加</div>
              <div className="text-sm text-slate-500">有害化学物质</div>
            </Card>

            <Card className="p-8 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">卓越导热性能</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                金刚石的超高导热性能（2000+
                W/m·K）确保热量均匀快速分布，避免局部过热。烹饪效率提升30%以上，食物受热更均匀，锁住营养与口感。
              </p>
              <div className="text-2xl font-bold text-amber-600">2000+</div>
              <div className="text-sm text-slate-500">W/m·K 热导率</div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">性能对比：一目了然的优势</h2>
            <p className="text-slate-600">金刚石不粘锅 vs 传统涂层锅具</p>
          </div>
          <Card className="overflow-hidden border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-900">性能指标</th>
                    <th className="text-center p-4 font-semibold text-sky-600">金刚石不粘锅</th>
                    <th className="text-center p-4 font-semibold text-slate-500">特氟龙涂层</th>
                    <th className="text-center p-4 font-semibold text-slate-500">陶瓷涂层</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">使用寿命</td>
                    <td className="p-4 text-center font-semibold text-sky-600">10年+</td>
                    <td className="p-4 text-center text-slate-600">6-12个月</td>
                    <td className="p-4 text-center text-slate-600">1-2年</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">耐高温</td>
                    <td className="p-4 text-center font-semibold text-sky-600">500°C</td>
                    <td className="p-4 text-center text-slate-600">260°C</td>
                    <td className="p-4 text-center text-slate-600">350°C</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">可用金属铲</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="p-4 text-center text-slate-400">✗</td>
                    <td className="p-4 text-center text-slate-400">✗</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">无PFOA/PTFE</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="p-4 text-center text-slate-400">✗</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">抗刮擦性</td>
                    <td className="p-4 text-center font-semibold text-sky-600">极强（莫氏10级）</td>
                    <td className="p-4 text-center text-slate-600">弱</td>
                    <td className="p-4 text-center text-slate-600">中等</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">导热性能</td>
                    <td className="p-4 text-center font-semibold text-sky-600">优异（快速均匀）</td>
                    <td className="p-4 text-center text-slate-600">一般</td>
                    <td className="p-4 text-center text-slate-600">一般</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">洗碗机安全</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="p-4 text-center text-slate-400">✗（会加速老化）</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-sky-50">
                    <td className="p-4 text-slate-900 font-semibold">综合评分</td>
                    <td className="p-4 text-center">
                      <div className="text-2xl font-bold text-sky-600">9.5/10</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-lg font-semibold text-slate-500">6.0/10</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-lg font-semibold text-slate-500">7.0/10</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">了解更多金刚石不粘锅技术</h2>
          <p className="text-slate-600 mb-8">我们的工程团队将为您详细介绍技术原理与应用前景</p>
          <div className="flex items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 bg-sky-600 hover:bg-sky-700 text-white"
              asChild
            >
              <Link href="/cooperation#contact">联系我们</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
              asChild
            >
              <a href="/docs/cufeng-diamond-pan.pdf" target="_blank" rel="noopener noreferrer">
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
