import Link from "next/link"
import { Atom, Shield, Handshake, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FooterNav } from "@/components/footer-nav"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      <section className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6 sm:mb-8 opacity-100">
              应力调控 sp²–sp³ 碳基界面平台
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-sky-400 font-light mb-10 sm:mb-12 tracking-wide">
              从高导热应用到量子物理边界
            </p>

            <div className="max-w-4xl mx-auto space-y-8 mb-12">
              <Card className="bg-slate-800/50 border-slate-700/50 p-8">
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed opacity-100">
                  我们专注于基于 <span className="text-sky-400 font-medium">sp²–sp³ 杂化键合逻辑</span> 的源头研发。
                </p>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700/50 p-8">
                <p className="text-lg text-slate-200 leading-relaxed opacity-100">
                  核心设计理念是通过<span className="text-sky-400 font-medium">原子级界面熔固</span>，
                  实现碳原子多价态的可控共存，从而产生
                  <span className="text-sky-400 font-medium">可调控的内生应力场</span>和
                  <span className="text-sky-400 font-medium">异质能级环境</span>。
                </p>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/30 rounded-2xl p-8 w-full">
                <h3 className="text-lg font-semibold text-sky-400 mb-6 opacity-100">当前已实现</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                    <p className="text-slate-300 leading-relaxed opacity-100">
                      高导热金刚石–铜复合材料
                      <br />
                      <span className="text-sky-400 font-mono text-sm">体视热导率 ≥ 680 W/m·K</span>
                      <br />
                      <span className="text-slate-400 text-sm">并具备进一步提升潜力</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                    <p className="text-slate-300 leading-relaxed opacity-100">
                      可复现的全碳功能结构
                      <br />
                      样品制备能力
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-10">
              <p className="text-slate-300 leading-relaxed text-lg opacity-100">
                本平台初期面向<span className="text-white font-medium">先进热管理、界面材料及高硬度应用</span>，
                同时通过应力诱导的电子结构异质性，为更高阶物性探索
                <span className="text-sky-400">（如高导电、非常规输运或量子介观系统）</span>
                提供了可验证的材料基础。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                size="lg"
                asChild
                className="gap-2 bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/20 w-full sm:w-auto min-h-[44px]"
              >
                <Link href="/patents">查看技术架构</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2 text-white border-slate-600 hover:bg-slate-800 bg-slate-800/50 w-full sm:w-auto min-h-[44px]"
              >
                <Link href="/cooperation">项目合作</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <Card className="p-6 sm:p-8 bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                <Atom className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">源头级创新</h3>
              <p className="text-slate-600 leading-relaxed">
                本体系并非传统复合材料的物理混配，而是通过分子级化学键合构建 sp²–sp³ 桥接网络。
                这一结构使材料同时具备：持久的内应力场、空间异质的电子环境、较高的机械与热稳定性。
                上述特性为后续在热管理、电子输运及潜在非线性物理研究中提供了可调控的实验平台。
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">专利护城河</h3>
              <p className="text-slate-600 leading-relaxed">
                已围绕制备路径、键合结构设计、应力调控方法及功能外延，申请并布局近 10 项核心专利。
                形成相对完整的技术链条，可支持后续的授权、转让或合作开发。
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">合作与技术转让</h3>
              <div className="text-slate-600 leading-relaxed space-y-3">
                <p>本项目处于源头平台阶段，已具备工艺闭环与样品交付能力。</p>
                <p className="font-medium">我们对以下模式保持开放：</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>专利组合的整体或部分买断</li>
                  <li>按应用领域或区域进行独占/非独占授权</li>
                  <li>与具备长周期研发能力的机构或企业联合推进验证与放大</li>
                </ul>
                <p className="text-sm">我们优先寻找能够承担后续实验验证、规模化制备及产业化资源的合作伙伴。</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 text-center">平台定位与价值</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed">
              在高功率密度电子器件、AI 计算、新能源系统等领域，传统材料的导热、热膨胀匹配及可靠性已接近物理极限。
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mt-6">
              本平台不追求单一参数的极致优化，而是提供一种具有扩展性的材料基底：
            </p>
            <ul className="list-disc list-inside text-lg text-slate-700 leading-relaxed mt-4 space-y-2">
              <li>通过 sp²/sp³ 键合与应力工程，实现高导热与可调控电子环境的统一</li>
              <li>为未来新型热界面、散热基板、乃至探索性物理器件预留了结构与物性接口</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mt-6">
              我们将此视为长期可演进的底层平台，而非特定终端产品。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 text-center">从理论验证到样品交付</h2>
          <p className="text-slate-600 text-center mb-12">我们的阶段性成果</p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">工艺与性能闭环</h3>
                <p className="text-slate-600">已完成从物理假设 → 制备工艺 → 性能表征的实验室级全链路验证。</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">可交付样品</h3>
                <p className="text-slate-600">
                  具备稳定复现的金刚石–铜复合材料及超磨熔固工具样品，已实现部分热性能指标的工程级验证。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">独立知识产权</h3>
                <p className="text-slate-600">核心技术路线完全自主研发，不依赖外部开源框架或拼凑方案。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterNav />
    </div>
  )
}
