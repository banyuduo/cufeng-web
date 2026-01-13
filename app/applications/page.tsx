import Link from "next/link"
import { ArrowLeft, Cpu, Zap, Car, Radio, Sparkles, Home, Battery, Plane, FlaskConical, Droplets, FileText, Microscope, ShieldCheck, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"

export default function ApplicationsPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">应用领域矩阵</h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            基于 sp²–sp³
            碳杂化键合平台技术，我们将同一核心方法论应用于不同物理场景，形成从工业热管理到前沿物理探索的完整技术矩阵。
          </p>
        </div>
      </section>

      {/* 应用蓝图 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-full py-12 px-4 bg-slate-950 rounded-3xl border border-slate-800">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">应用蓝图：从底层物理到全场景落地</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">基于 SP²–SP³ 杂化键合平台的跨领域演化路径</p>
            </div>

            <div className="max-w-4xl mx-auto relative space-y-4">
              {[
                {
                  level: "L1: 核心业务 (Current)",
                  title: "高性能工业散热",
                  items: ["AI芯片散热基底", "功率半导体", "新能源汽车"],
                  description: "解决极端功率密度下的热瓶颈，提供500-800 W/mK的高效散热保障。",
                  color: "border-blue-500/50 bg-blue-500/20",
                  icon: <Cpu className="w-5 h-5 text-blue-400" />,
                  tag: "成熟应用"
                },
                {
                  level: "L2: 规模化落地 (Expanding)",
                  title: "消费电子与品质生活",
                  items: ["无线快充高导热线圈", "全碳化学键合不粘锅"],
                  description: "将工业级工艺降维打击民用市场，解决可靠性、附着力与食品安全痛点。",
                  color: "border-sky-500/50 bg-sky-500/10",
                  icon: <Zap className="w-5 h-5 text-sky-400" />,
                  tag: "市场放量"
                },
                {
                  level: "L3: 产业升级 (Growth)",
                  title: "能源与环境系统",
                  items: ["固态电池负极材料", "水处理粒子电极"],
                  description: "利用高模量碳骨架提升能量密度与电催化活性，具备快速落地潜力。",
                  color: "border-emerald-500/50 bg-emerald-500/10",
                  icon: <Battery className="w-5 h-5 text-emerald-400" />,
                  tag: "中试开发"
                },
                {
                  level: "L4: 前沿探索 (Vision)",
                  title: "极端物性探测",
                  items: ["超导基础研究", "量子介观系统愿景"],
                  description: "探索应力场诱导的特殊能带结构，作为未来10年计算架构的理论储备。",
                  color: "border-purple-500/50 bg-purple-500/10",
                  icon: <Microscope className="w-5 h-5 text-purple-400" />,
                  tag: "理论探索"
                }
              ].map((layer, index) => (
                <div 
                  key={index}
                  className={`relative group p-6 rounded-2xl border ${layer.color} transition-all duration-300 hover:translate-x-2`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 bg-slate-900 rounded-lg border border-slate-700">
                        {layer.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-mono tracking-tighter text-slate-500">{layer.level}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 uppercase tracking-wider">{layer.tag}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white">{layer.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {layer.items.map((item, i) => (
                            <span key={i} className="text-sm text-slate-300 flex items-center gap-1 text-balance italic">
                              <ArrowUpRight className="w-3 h-3 text-slate-500" /> {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:max-w-[280px]">
                      <p className="text-xs leading-relaxed text-slate-400 md:text-right italic">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* 底部基座 */}
              <div className="pt-8 flex flex-col items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>
                <div className="px-8 py-4 bg-slate-800 rounded-xl border border-slate-600 flex items-center gap-3 shadow-2xl">
                  <ShieldCheck className="w-6 h-6 text-sky-500" />
                  <div>
                    <div className="text-[10px] text-sky-500 font-bold uppercase tracking-[0.2em]">Foundation</div>
                    <div className="text-white font-black tracking-tight">SP²–SP³ 碳基杂化键合平台 (应力工程)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心工业散热版块 */}
      <section id="thermal-management" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-6 py-2 bg-sky-600 rounded-full text-white font-bold text-sm mb-4">
              第一优先级 · 已落地/工程化阶段
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">核心工业热管理方案</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              针对高功率密度电子器件的热管理瓶颈，提供超越传统铜铝材料极限的热界面基底解决方案，突出工业散热的领先地位
            </p>
          </div>

          <div className="mb-12 sm:mb-16">
            <Card className="p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-sky-50 to-white border-sky-200 hover:shadow-2xl hover:border-sky-400 transition-all">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-sky-600 flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="inline-block px-4 py-1 bg-sky-600 rounded-full text-white text-xs font-bold mb-2">
                      旗舰解决方案
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">AI 高密度芯片热管理方案</h3>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  随着 AI 算力芯片功率密度不断增加，热管理问题成为制约技术突破的瓶颈之一。我们基于 sp²–sp³
                  化学键合材料平台，提出了一种突破传统微通道液冷的热管理解决方案，能够有效解决超算和激光器领域的高密度热管理挑战。
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <div className="text-sky-600 font-bold mb-3 text-lg">几何耦合</div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      创新的 3D 表面仿形设计，精确贴合芯片封装，最大限度降低界面热阻
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <div className="text-sky-600 font-bold mb-3 text-lg">极速热稀释</div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      结合金刚石铜与全碳复合材料的卓越声子导热性能，实现局部高热流的快速均热
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <div className="text-sky-600 font-bold mb-3 text-lg">系统级协同</div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      与自研高导热 TIM 材料协同工作，提供长寿命、零风险的热管理解决方案
                    </p>
                  </div>
                </div>

                <div className="bg-sky-50 border border-sky-200 rounded-lg p-5 mb-6">
                  <div className="text-sky-900 font-semibold mb-2 text-sm">适用材料体系：</div>
                  <div className="grid md:grid-cols-3 gap-2 text-xs text-slate-700">
                    <div>• 金刚石铜复合材料</div>
                    <div>• 柔性高导热复合材料</div>
                    <div>• 全碳 sp²–sp³ 复合材料</div>
                  </div>
                </div>

                <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
                  <div className="text-sky-900 font-semibold mb-3">广泛应用场景：</div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                      <span>AI 芯片（GPU/NPU）超高功率密度热管理</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                      <span>工业/医疗激光器高功率热管理</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                      <span>超算中心数据中心液冷系统</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                      <span>边缘计算单元高密度热管理</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Power Semiconductors */}
            <Card className="mx-0 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">功率半导体器件热管理</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                降低 SiC/GaN 器件结温，大幅提升系统功率密度与可靠性
              </p>
              <div className="text-sm text-slate-700 space-y-2 mb-6">
                <div className="font-semibold">具体应用场景：</div>
                <div className="pl-4 space-y-1">
                  <div>• IGBT 模块高导热热界面基底</div>
                  <div>• 高铁动车组逆变器热管理方案</div>
                  <div>• 工业变频器功率模块热界面</div>
                  <div>• 光伏/储能逆变器热管理方案</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">适用材料体系：</div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>• 金刚石铜复合材料</div>
                  <div>• 柔性高导热复合材料</div>
                  <div>• 全碳 sp²–sp³ 复合材料</div>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <Link href="/products">查看可用材料与解决方案</Link>
              </Button>
            </Card>

            {/* EV & Transportation */}
            <Card className="mx-0 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Car className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">新能源汽车热管理</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                解决电池包和电控系统热失控风险，减轻系统重量
              </p>
              <div className="text-sm text-slate-700 space-y-2 mb-6">
                <div className="font-semibold">具体应用场景：</div>
                <div className="pl-4 space-y-1">
                  <div>• 动力电池热管理结构件</div>
                  <div>• 电机控制器热界面基底</div>
                  <div>• 车载充电机 (OBC) 热管理方案</div>
                  <div>• DC/DC 转换器热扩散片</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">适用材料体系：</div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>• 金刚石铜复合材料</div>
                  <div>• 全碳 sp²–sp³ 复合材料</div>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <Link href="/products">查看可用材料与解决方案</Link>
              </Button>
            </Card>

            {/* 5G Communications */}
            <Card className="mx-0 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Radio className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">5G 通信与射频器件</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                解决高频大功率器件的局部热流密度管理问题
              </p>
              <div className="text-sm text-slate-700 space-y-2 mb-6">
                <div className="font-semibold">具体应用场景：</div>
                <div className="pl-4 space-y-1">
                  <div>• 5G 基站功率放大器 (PA) 热管理</div>
                  <div>• 毫米波天线阵列热管理</div>
                  <div>• 卫星通信地面站射频单元</div>
                  <div>• 相控阵雷达 T/R 组件</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">适用材料体系：</div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>• 金刚石铜复合材料</div>
                  <div>• 柔性高导热复合材料</div>
                  <div>• 全碳 sp²–sp³ 复合材料</div>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <Link href="/products">查看可用材料与解决方案</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 消费电子与家居生活 */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">消费电子与家居生活</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto px-4">基于 sp²–sp³ 化学键合界面技术的消费级产品创新</p>
          </div>

          <div className="space-y-6">
            {/* 大功率无线充电高导热线圈 */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Radio className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">大功率无线充电用高导热线圈</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                针对 11kW/22kW+ 无线充电线圈，解决高频电流导致的集肤效应与邻近效应引发的 ACR 激增及热瓶颈问题
              </p>
              
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-800 mb-3">核心方案：</div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  采用金刚石-铜复合导体技术（电镀+中温扩散结合），利用 20μm 金刚石与纯铜构建超高导热、低热阻的径向散热通道。
                </p>
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-4">
                  <div className="text-xs font-semibold text-sky-900 mb-2">技术优势：</div>
                  <div className="text-xs text-slate-700 space-y-1">
                    <div>• 电导率达 100% IACS，大幅降低线圈发热量（降幅 20% 以上）</div>
                    <div>• 柔性结构适合小半径绕线</div>
                    <div>• 具备工业量产可行性</div>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="text-xs font-semibold text-slate-800 mb-2">物理机制：</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    采用金刚石+AlN/Al₂O₃ 多级填料网络，极大地稀释低导热树脂占比，实现 Ultra-Low R_th 效果。
                  </p>
                </div>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">适用材料体系：</div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>• 金刚石铜复合材料</div>
                  <div>• 柔性高导热复合材料</div>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <a href="/docs/diamond-coil.pdf" target="_blank" rel="noopener noreferrer">
                  查看解决方案
                </a>
              </Button>
            </Card>

            {/* 消费电子与家居生活 - 原有内容 */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Home className="w-8 h-8 text-sky-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 text-center">消费电子与家居生活</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                基于金刚石颗粒的表面固着技术，实现"硬度 + 导热 + 不粘性"的多功能耦合
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="font-semibold text-slate-800 mb-4 text-lg">家居厨具方向：</div>
                  <div className="space-y-2 text-slate-700 pl-4">
                    <div>• 金刚石涂层不粘锅（超长使用寿命）</div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-slate-800 mb-4 text-lg">消费电子方向：</div>
                  <div className="space-y-2 text-slate-700 pl-4">
                    <div>• 折叠屏手机超薄热管理方案</div>
                    <div>• 高性能笔记本电脑热界面基底</div>
                    <div>• VR/AR 设备轻量化热管理方案</div>
                    <div>• 游戏主机热管理系统</div>
                  </div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-5 mb-6">
                <div className="text-sm font-semibold text-sky-900 mb-2">适用材料体系：</div>
                <div className="text-xs text-slate-700 space-y-1">
                  <div>• 金刚石相关复合材料</div>
                  <div>• 全碳 sp²–sp³ 复合材料</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
                <div className="font-semibold text-sky-900 mb-3">技术价值点：</div>
                <div className="text-sm text-slate-700 leading-relaxed">
                  通过 sp²–sp³ 化学键合技术，将金刚石颗粒牢固固着于金属基材表面，形成"导热层 + 耐磨层 +
                  功能层"三位一体结构，同时解决传统涂层易脱落、导热差、耐久性低等问题。
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent mt-6"
                asChild
              >
                <Link href="/products/nonstick-cookware">查看全碳不粘锅产品</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 能源与环境系统 */}
      <section id="energy-environment" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-green-100 rounded-full text-green-700 text-sm font-semibold mb-4">
              具备快速落地潜力
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">能源与环境系统</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto px-4">
              基于成熟工艺平台，致力于解决当前能源存储与水治理中的电化学效率难题
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Solid-state Battery */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Battery className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">固态电池负极架构</h3>
              <div className="mb-6">
                <div className="text-sm font-semibold text-sky-600 mb-2">物理特性：</div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  利用 sp³–sp² 碳骨架的内生应力调控，作为高模量碳宿主材料，通过应力场抑制锂枝晶生长，提升高模量负极稳定性。
                </p>
                <div className="text-sm font-semibold text-slate-700 mb-2">技术优势：</div>
                <div className="text-sm text-slate-600 space-y-1 pl-4 mb-4">
                  <div>• 通过造孔剂工艺显著提升能量密度</div>
                  <div>• sp³–sp² 化学键合结构提供优异的结构稳定性</div>
                  <div>• 应力调控机制有效抑制枝晶生长</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">技术价值：</div>
                <div className="text-xs text-slate-600 leading-relaxed">解决固态电池循环寿命与安全性的底层材料瓶颈</div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <a href="/docs/diamond-battery.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2 inline" />
                  查看技术白皮书
                </a>
              </Button>
            </Card>

            {/* Water Treatment */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Droplets className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">水处理粒子电极</h3>
              <div className="mb-6">
                <div className="text-sm font-semibold text-sky-600 mb-2">物理特性：</div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  高内应力 sp²–sp³ 结构带来高硬度、长寿命以及优异的导电/催化活性，适用于电化学水处理系统。
                </p>
                <div className="text-sm font-semibold text-slate-700 mb-2">技术优势：</div>
                <div className="text-sm text-slate-600 space-y-1 pl-4 mb-4">
                  <div>• 高硬度确保长期稳定运行</div>
                  <div>• 优异的导电性能提升电化学效率</div>
                  <div>• 催化活性增强污染物降解能力</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">技术价值：</div>
                <div className="text-xs text-slate-600 leading-relaxed">为水处理系统提供高效、耐用的电化学电极材料</div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <a href="/docs/diamond-water.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2 inline" />
                  深度技术解析
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 前沿物理探索 */}
      <section id="frontier-research" className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold mb-4">
              中长期探索阶段 (3-10年)
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">前沿物理探索</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto px-4">平台技术在极端物理与未来计算领域的演化潜力</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {/* Superconductor Research */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-slate-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">超导材料基础探测</h3>
                </div>
                <div className="px-3 py-1 bg-slate-100/80 rounded-full text-xs font-medium text-slate-600">
                  初步研究阶段
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">物理设想：</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  基于 sp²–sp³ 界面在高内应力场下可能产生的能带结构畸变，探测其在极低温度或特殊能级匹配下是否存在非常规的电子输运特性。
                </p>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">研究切入点：</div>
                <div className="text-sm text-slate-600 space-y-1 pl-4">
                  <div>• 观测应力梯度对界面电子局域化的影响</div>
                  <div>• 探索非冯诺依曼结构下的界面非线性电导</div>
                  <div>• 配合外部实验室进行极低温输运特性普查</div>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-4">
                <div className="text-xs font-semibold text-slate-800 mb-1">愿景：</div>
                <div className="text-xs text-slate-600 leading-relaxed">作为一种新型碳基材料平台，为非常规超导机制的研究提供一种可能的实验基底。</div>
              </div>
            </Card>

            {/* Quantum Computing */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                    <FlaskConical className="w-7 h-7 text-slate-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">量子介观系统愿景</h3>
                </div>
                <div className="px-3 py-1 bg-slate-100/80 rounded-full text-xs font-medium text-slate-600">
                  长期规划阶段
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">物理设想：</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  通过精确调控全碳网络的晶格畸变，尝试研究相干电子在应力场诱导的异质电势中的演化行为，评估其作为量子计算候选材料的初步可行性。
                </p>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">研究切入点：</div>
                <div className="text-sm text-slate-600 space-y-1 pl-4">
                  <div>• 界面相干电子行为的理论建模</div>
                  <div>• 应力场诱导的能隙调控模拟</div>
                  <div>• 介观尺度下电子退相干因素的初步分析</div>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-4">
                <div className="text-xs font-semibold text-slate-800 mb-1">愿景：</div>
                <div className="text-xs text-slate-600 leading-relaxed">旨在探索应力工程在极微观尺度下的演化潜力，作为未来 10 年计算架构变革的理论技术储备。</div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="mx-4 sm:mx-0 min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
            >
              <Link href="/patents">查看完整技术架构</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 tracking-wide" style={{ letterSpacing: "0.15em" }}>
            底层逻辑的系统性输出
          </h2>

          <p className="text-xl text-slate-600 mb-8 font-light">同一个起点，多维度的坍缩，无限的工程边界</p>

          <p className="text-lg mb-12 leading-relaxed max-w-3xl mx-auto text-slate-600">
            这里的每一个应用领域，都不是孤立的产品开发，而是 sp²–sp³
            界面能级受控这一核心命题在不同物理尺度下的'坍缩'结果。从应对 1000W+
            瞬时热冲击的极致热管理，到跨越界面热阻的物理性能突破，我们始终坚持用同一套底层键合逻辑，去消解不同行业的性能瓶颈。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto min-h-[44px] gap-2 bg-sky-600 hover:bg-sky-700 text-white shadow-lg"
            >
              <Link href="/cooperation">技术交流与对齐</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto min-h-[44px] gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
            >
              <Link href="/patents">查看完整技术演化路径</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterNav />
    </div>
  )
}
