import Link from "next/link"
import { ArrowRight, Calendar, Building2, Target, Zap, Eye, Rocket, Layers, Sparkles, Shield, TrendingUp, ChefHat, FlaskConical, Battery, Droplet, Award, Handshake, Users, GraduationCap, Briefcase, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-sky-500/20 rounded-full text-sky-300 text-sm font-medium mb-6 border border-sky-500/30">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              关于我们
            </h1>
            <p className="text-xl text-sky-400 font-semibold mb-2">新科技，新巅峰</p>
            <p className="text-lg text-slate-300 leading-relaxed">
              源起超硬磨料工具领域，转型高性能热管理材料。从超硬工具设计者，到碳基复合材料技术创新者，我们致力于成为客户理想的方案解决商。
            </p>
          </div>
        </div>
      </section>

      {/* 企业概览 */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-slate-800/50 border-slate-700/50">
            <div className="space-y-6 text-slate-200 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-sky-400" />
                  簇锋科技 | ToSpike：定义碳基界面的物理边界
                </h2>
                <p className="text-slate-300 mb-2">
                  Nanjing CuFeng Mechanical & Electrical Technology Co., LTD
                </p>
                <p className="text-slate-400 text-sm">座落于南京江北新区</p>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">公司概况</h3>
                <p className="mb-4">
                  簇锋科技（ToSpike）是全球领先的碳基界面工程技术先驱。我们依托对 <span className="text-sky-400 font-semibold">sp²–sp³ 杂化键合</span> 机制的底层深度理解，构建了从原子级"活性熔固"工艺到高维度"碳基复合材料平台"的完整技术链路。
                </p>
                <p className="mb-4">
                  我们不单生产超硬磨料工具（Diamond/CBN），更致力于在极端工况下，为半导体制造、航空航天、AI 算力及新能源系统等高精尖领域，提供解决散热、结构强度、电磁防护等应用解决方案。
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-sky-400" />
                  研发积淀与工程能力
                </h3>
                <p className="mb-4">
                  公司在真空界面冶金、活性熔固以及工程应用领域拥有逾十年的技术积累。凭借对活性熔固（Active Fusion-Bonding）过程的微观调控，我们成功攻克了铸造金属、碳纤维复合材料（CFRP）及硬脆材料在极端制造中的加工瓶颈，为客户提供从定制化工具到前沿功能材料的垂直整合解决方案。
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-sky-400" />
                  从工业实践到物理探索
                </h3>
                <p className="mb-4">
                  我们坚持<strong className="text-white">"新科技，新巅峰"的演进路径</strong>。通过将超硬磨料工具的设计原则迁移至高性能热管理领域，簇锋科技正在实现从"精密加工工具"向"高性能功能材料平台"的战略升华。
                </p>
                <p className="mb-4">
                  基于 <span className="text-sky-400 font-semibold">sp²–sp³ 键合</span> 的内生应力调控，我们已实现体视热导率 ≥ 680 W/m·K 的材料突破，并持续探索碳基结构在超导、非常规输运及量子物理边界的无限可能。
                </p>
              </div>

              {/* 企业愿景与核心理念 */}
              <div className="pt-4 border-t border-slate-700/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-sky-400" />
                      企业愿景
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      致力于成为客户理想的方案解决商，通过持续技术创新，为高功率密度热管理、新能源、固态电池等前沿领域提供突破性材料解决方案。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-sky-400" />
                      核心理念
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      <span className="text-sky-400 font-semibold">新科技，新巅峰</span>。以技术创新为驱动，从超硬磨料工具到碳基复合材料平台，不断突破材料科学边界，与客户共同攀登行业新高峰。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 核心团队 */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心团队</h2>
            <p className="text-slate-400">专业、专注、专精的技术团队</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 王博士 */}
            <Card id="wang" className="p-6 bg-slate-900/80 border-slate-700/50 hover:border-sky-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-sky-600/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">王博士</h3>
                  <p className="text-sm text-slate-400">Wang, PhD</p>
                </div>
              </div>
              <div className="mb-3">
                <div className="inline-block px-3 py-1 bg-sky-600/20 text-sky-300 text-xs font-medium rounded-full mb-2">
                  技术研发与应用负责人
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <div className="flex items-start gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold text-slate-200">专业背景</span>
                  </div>
                  <p className="ml-6 leading-relaxed">
                    2016年取得博士学位，长期致力于超硬磨料工具在难加工材料领域的精密加工研究。
                  </p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-1">
                    <Award className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold text-slate-200">技术背书</span>
                  </div>
                  <p className="ml-6 leading-relaxed">
                    拥有深厚的产业化经验，累计申请并获得授权的发明专利及实用新型专利达 <span className="text-sky-400 font-semibold">29 项</span>。
                  </p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-1">
                    <Zap className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold text-slate-200">核心能力</span>
                  </div>
                  <p className="ml-6 leading-relaxed">
                    擅长针对钛合金、镍基高温合金、碳化硅及碳纤维复合材料（CFRP）等极端工况，通过 <span className="text-sky-400 font-semibold">sp²–sp³ 界面参数</span>的深度匹配，提供定制化的系统解决方案。
                  </p>
                </div>
              </div>
            </Card>

            {/* 何工 */}
            <Card className="p-6 bg-slate-900/80 border-slate-700/50 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">何工</h3>
                  <p className="text-sm text-slate-400">He, M.E.</p>
                </div>
              </div>
              <div className="mb-3">
                <div className="inline-block px-3 py-1 bg-cyan-600/20 text-cyan-300 text-xs font-medium rounded-full mb-2">
                  工程设计与结构负责人
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <div className="flex items-start gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold text-slate-200">专业背景</span>
                  </div>
                  <p className="ml-6 leading-relaxed">
                    机械制造及其自动化专业硕士，拥有逾 <span className="text-cyan-400 font-semibold">15 年</span>的高端装备结构设计与优化经验。
                  </p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-1">
                    <Award className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold text-slate-200">技术背书</span>
                  </div>
                  <p className="ml-6 leading-relaxed">
                    曾负责多项涉及军工与民用领域的复杂结构工程项目。
                  </p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-1">
                    <Zap className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold text-slate-200">核心能力</span>
                  </div>
                  <p className="ml-6 leading-relaxed">
                    专注于机器人自动化打磨与精密磨削研究，能够基于现场工况自主设计超硬磨具的物理结构与夹具系统，实现从单点工具到自动化生产线的无缝集成。
                  </p>
                </div>
              </div>
            </Card>

            {/* 张工 */}
            <Card id="zhang-gong" className="p-6 bg-slate-900/80 border-slate-700/50 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">张工</h3>
                  <p className="text-sm text-slate-400">Zhang</p>
                </div>
              </div>
              <div className="mb-3">
                <div className="inline-block px-3 py-1 bg-purple-600/20 text-purple-300 text-xs font-medium rounded-full mb-2">
                  应用工程与现场支持负责人
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <div className="flex items-start gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold text-slate-200">专业背景</span>
                  </div>
                  <p className="ml-6 leading-relaxed">
                    资深磨料磨具应用专家，拥有多年金刚石工具在铸铁、铸钢及合金钢领域的推广与现场经验。
                  </p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-1">
                    <Zap className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold text-slate-200">核心能力</span>
                  </div>
                  <p className="ml-6 leading-relaxed">
                    擅长处理复杂的加工现场难题，通过对材料加工特性的深刻理解，为客户提供精准的工具选型、配套方案及及时的技术响应。
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 核心历程 - 时间轴 */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心历程</h2>
            <p className="text-slate-400">从启航到技术突破的关键节点</p>
          </div>

          <div className="relative">
            {/* 时间轴竖线 */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-600/50 transform md:-translate-x-1/2"></div>

            {/* 时间轴项目 */}
            <div className="space-y-12">
              {/* 2025 - 专利集群 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 md:w-24 text-right md:text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-600 text-white font-bold text-lg shadow-lg shadow-sky-600/30 relative z-10">
                    2025
                  </div>
                </div>
                <div className="flex-1 md:ml-8">
                  <Card className="p-6 bg-slate-900/80 border-slate-700/50 hover:border-sky-500/50 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-5 h-5 text-sky-400" />
                      <h3 className="text-xl font-bold text-white">专利集群与技术壁垒形成</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      完成 9 项核心专利布局，构建起从金刚石工具到 <span className="text-sky-400 font-semibold">sp²–sp³</span> 碳基界面的完整知识产权护城河。
                    </p>
                  </Card>
                </div>
              </div>

              {/* 2025 - 热管理材料突破 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 md:w-24 text-right md:text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-600 text-white font-bold text-lg shadow-lg shadow-cyan-600/30 relative z-10">
                    2025
                  </div>
                </div>
                <div className="flex-1 md:ml-8">
                  <Card className="p-6 bg-slate-900/80 border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white">高性能热管理材料突破</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      成功开发金刚石铜复合材料，热导率突破 <span className="text-cyan-400 font-semibold">680 W/m·K</span>，标志着公司正式进入高功率电子散热领域。
                    </p>
                  </Card>
                </div>
              </div>

              {/* 2023 - 战略迁址 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 md:w-24 text-right md:text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white font-bold text-lg shadow-lg shadow-purple-600/30 relative z-10">
                    2023
                  </div>
                </div>
                <div className="flex-1 md:ml-8">
                  <Card className="p-6 bg-slate-900/80 border-slate-700/50 hover:border-purple-500/50 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-5 h-5 text-purple-400" />
                      <h3 className="text-xl font-bold text-white">战略迁址与能级提升</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      研发中心进驻南京江北新区，依托区域科研优势，加速超硬材料底层逻辑的商业化转化。
                    </p>
                  </Card>
                </div>
              </div>

              {/* 2018 - 公司启航 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 md:w-24 text-right md:text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-600 text-white font-bold text-lg shadow-lg shadow-slate-600/30 relative z-10">
                    2018
                  </div>
                </div>
                <div className="flex-1 md:ml-8">
                  <Card className="p-6 bg-slate-900/80 border-slate-700/50 hover:border-slate-500/50 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-slate-400" />
                      <h3 className="text-xl font-bold text-white">簇锋科技启航</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      公司于镇江注册成立，确立"<span className="text-slate-400 font-semibold">新科技，新巅峰</span>"理念，专注解决难加工材料的界面连接难题。
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* 查看更多动态链接 */}
          <div className="text-center mt-16">
            <Link href="/news">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white bg-slate-900/50"
              >
                查看更多动态
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterNav />
    </div>
  )
}

