import { MapPin, Mail, Phone, Globe } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function CooperationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4 text-white">技术交流与潜在协同</h1>
          <p className="text-lg text-slate-400 font-light tracking-wide mb-8">
            Technical Dialogue & Strategic Alignment
          </p>
          <div className="space-y-6 text-base text-slate-300 leading-relaxed font-light">
            <p>
              我们并不将本项目视为一个已经完成定义、等待复制或规模化的成熟产品。
              <br />
              它更接近于一个正在展开中的材料与物理平台——
              <br />
              起源于工程实践，但已逐步演化出跨越材料科学、功能材料与基础物理探索的潜在空间。
            </p>
            <p className="pt-4">
              因此，本页面的目的并非推介具体合作模式，
              <br />
              而是对外声明一种可被理解、可被对接的技术状态。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-light tracking-tight mb-12 text-slate-900 border-b border-slate-200 pb-6">
              一个正在展开的平台，而非单点技术
            </h2>
            <div className="space-y-8 text-slate-600 leading-relaxed font-light text-base">
              <p>
                本项目所构建的，并不是单一材料、单一器件或单一应用方案，
                <br />
                而是一套围绕 <strong className="text-slate-900 font-medium">sp³–sp² 化学键合与内生应力调控</strong>{" "}
                展开的全碳材料体系。
              </p>
              <p>
                这一体系在工程层面已形成明确的材料制备与功能验证路径，
                <br />
                在更深层次上，则呈现出作为平台继续演化的可能性。
              </p>
              <p className="text-slate-700 italic border-l-4 border-sky-600 pl-6 py-2">
                我们深知从实验室到产业化（Lab to
                Fab）的鸿沟，因此在追求物理极限的同时，始终保持着对工艺复现性与工业化边界的严谨敬畏。
              </p>
              <p>
                这意味着，它既可以被用于现实工程问题的解决，
                <br />
                也可能在未来被纳入更高层级的系统性研究与应用框架之中。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-12 text-slate-900 border-b border-slate-200 pb-6">
            我们愿意进行交流的对象
          </h2>
          <div className="space-y-8 text-slate-600 leading-relaxed font-light mb-12">
            <p>
              在当前阶段，我们更关注认知层面的对齐，而非形式上的合作安排。
              <br />
              因此，我们愿意与以下类型的机构或个人保持开放交流：
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-sky-300 transition-colors">
              <div className="h-1 w-12 bg-sky-600 mb-6"></div>
              <p className="text-slate-700 leading-relaxed font-light text-sm">
                对材料底层物理、界面结构与多尺度演化具有长期研究兴趣的
                <strong className="text-slate-900 font-medium">研究机构</strong>
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-sky-300 transition-colors">
              <div className="h-1 w-12 bg-sky-600 mb-6"></div>
              <p className="text-slate-700 leading-relaxed font-light text-sm">
                正在寻找下一代功能材料或基础材料平台，并愿意在应用场景中共同定义产品边界的
                <strong className="text-slate-900 font-medium">产业方</strong>
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-sky-300 transition-colors">
              <div className="h-1 w-12 bg-sky-600 mb-6"></div>
              <p className="text-slate-700 leading-relaxed font-light text-sm">
                具备跨学科判断能力，能够理解"平台价值"而非单点产品价值的
                <strong className="text-slate-900 font-medium">技术团队</strong>
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-sky-300 transition-colors">
              <div className="h-1 w-12 bg-sky-600 mb-6"></div>
              <p className="text-slate-700 leading-relaxed font-light text-sm">
                关注中长期技术拐点、具备耐心与独立判断能力的
                <strong className="text-slate-900 font-medium">战略投资者</strong>
              </p>
            </div>
          </div>

          <p className="mt-12 text-slate-500 text-sm italic text-center">
            我们并不追求广泛覆盖，而更在意讨论是否发生在同一技术视角之上。
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-12 text-slate-900 border-b border-slate-200 pb-6">
            关于进一步推进方式
          </h2>
          <div className="space-y-8 text-slate-600 leading-relaxed font-light">
            <p>在合适的认知前提下，围绕本技术体系的后续推进，可以存在多种可能性。</p>
            <p>
              这些可能性并不预设具体形式，也不以既定路径为前提，
              <br />
              而是取决于双方在技术理解深度、发展节奏与长期目标上的匹配程度。
            </p>
            <p className="text-slate-500 italic">在此之前，任何形式上的界定都显得过早。</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-12 text-slate-900 border-b border-slate-200 pb-6">
            一种共鸣，而非单纯的招募
          </h2>
          <div className="space-y-8 text-slate-600 leading-relaxed font-light">
            <p>我们并不期望通过一次网页浏览完成所有判断。</p>
            <p>
              如果文中所述的物理逻辑与您对未来材料演进的直觉产生了共鸣，
              <br />
              如果您同样认为底层材料的突破才是跨越行业周期、解决散热与能效瓶颈的终极钥匙，
              <br />
              那么我们很可能已经站在相近的技术视角上。
            </p>
            <p className="text-slate-700 font-light pt-4">我们期待的是这种跨越时空的认知交汇。</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-12 text-slate-900 border-b border-slate-200 pb-6">
            联系方式
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-light mb-12">
            <p>如需进一步交流，可通过以下方式取得联系。</p>
            <p className="text-slate-500 italic text-sm">我们通常更倾向于围绕具体问题或明确讨论主题展开沟通。</p>
          </div>

          <div className="bg-slate-50 rounded-lg p-10 space-y-8">
            <div className="flex items-start gap-6">
              <div className="h-12 w-12 rounded bg-slate-200 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <div className="text-slate-500 text-xs mb-2 uppercase tracking-widest font-light">主体名称</div>
                <div className="text-slate-900 font-light text-lg">南京簇锋机电科技有限公司</div>
                <div className="text-slate-500 text-xs mt-2 font-light">
                  Nanjing CuFeng Mechanical & Electrical Technology Co., LTD
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="h-12 w-12 rounded bg-slate-200 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <div className="text-slate-500 text-xs mb-2 uppercase tracking-widest font-light">技术联络</div>
                <a
                  href="mailto:wangbo@tospike.com"
                  className="text-slate-900 font-light text-lg hover:text-sky-600 transition-colors font-mono"
                >
                  wangbo@tospike.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="h-12 w-12 rounded bg-slate-200 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <div className="text-slate-500 text-xs mb-2 uppercase tracking-widest font-light">联系电话</div>
                <a
                  href="tel:15305191423"
                  className="text-slate-900 font-light text-lg hover:text-sky-600 transition-colors"
                >
                  153 0519 1423
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="h-12 w-12 rounded bg-slate-200 flex items-center justify-center flex-shrink-0">
                <Globe className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <div className="text-slate-500 text-xs mb-2 uppercase tracking-widest font-light">地址</div>
                <div className="text-slate-900 font-light text-lg">中国江苏省南京市江北新区行知路2号</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-lg lg:text-xl text-slate-300 font-light italic leading-relaxed">
            "技术的真正价值，往往并不在它被命名的那一刻，
            <br />
            而在它被理解之前，所保留的那段空间。"
          </blockquote>
        </div>
      </section>

      {/* 简化页脚 */}
      <footer className="border-t border-slate-200 bg-white py-8 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} 南京簇锋机电科技有限公司</p>
        </div>
      </footer>
    </div>
  )
}
