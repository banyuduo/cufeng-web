import Link from "next/link"
import { ArrowLeft, Cpu, Zap, Car, Radio, Sparkles, Home, Battery, Plane, FlaskConical } from "lucide-react"
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

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-6 py-2 bg-sky-600 rounded-full text-white font-bold text-sm mb-4">
              第一方阵 · 已落地/工程化阶段
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">高功率热管理方案集群</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              针对高功率密度电子器件的散热瓶颈，提供超越传统铜铝材料极限的解决方案
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
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">AI 高密度芯片散热解决方案</h3>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  随着 AI 算力芯片功率密度不断增加，散热问题成为制约技术突破的瓶颈之一。我们基于 sp²-sp³
                  材料平台，提出了一种突破传统微通道液冷的散热解决方案，能够有效解决超算和激光器领域的高密度热管理挑战。
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
                      与自研高导热 TIM 材料协同工作，提供长寿命、零风险的散热解决方案
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
                      <span>AI 芯片（GPU/NPU）超高功率密度散热</span>
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
                      <span>边缘计算单元高密度散热</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* AI Chips */}
            <Card className="mx-0 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">AI 芯片与高性能计算</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                针对 GPU、NPU 等 AI 加速芯片的超高功率密度散热需求
              </p>
              <div className="text-sm text-slate-700 space-y-2 mb-6">
                <div className="font-semibold">具体应用场景：</div>
                <div className="pl-4 space-y-1">
                  <div>• GPU 散热底座（热导率 &gt; 600 W/m·K）</div>
                  <div>• AI 服务器算力卡冷板</div>
                  <div>• 数据中心液冷系统热界面</div>
                  <div>• 边缘计算单元高密度散热</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-5 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-2">适用材料体系：</div>
                <div className="text-xs text-slate-700 space-y-1">
                  <div>• 金刚石铜复合材料</div>
                  <div>• 柔性高导热复合材料</div>
                  <div>• 全碳 sp²–sp³ 复合材料</div>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-sky-300 text-sky-700 hover:bg-sky-50 bg-transparent"
                asChild
              >
                <Link href="/products">查看可用材料与解决方案</Link>
              </Button>
            </Card>

            {/* Power Semiconductors */}
            <Card className="mx-0 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">功率半导体器件</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                降低 SiC/GaN 器件结温，大幅提升系统功率密度与可靠性
              </p>
              <div className="text-sm text-slate-700 space-y-2 mb-6">
                <div className="font-semibold">具体应用场景：</div>
                <div className="pl-4 space-y-1">
                  <div>• IGBT 模块高导热基板</div>
                  <div>• 高铁动车组逆变器散热</div>
                  <div>• 工业变频器功率模块</div>
                  <div>• 光伏/储能逆变器</div>
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
                className="w-full min-h-[44px] border-sky-300 text-sky-700 hover:bg-sky-50 bg-transparent"
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
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">新能源汽车</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                解决电池包和电控系统热失控风险，减轻系统重量
              </p>
              <div className="text-sm text-slate-700 space-y-2 mb-6">
                <div className="font-semibold">具体应用场景：</div>
                <div className="pl-4 space-y-1">
                  <div>• 动力电池热管理结构件</div>
                  <div>• 电机控制器散热底座</div>
                  <div>• 车载充电机 (OBC) 冷板</div>
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
                className="w-full min-h-[44px] border-sky-300 text-sky-700 hover:bg-sky-50 bg-transparent"
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
                  <div>• 5G 基站功率放大器 (PA) 散热</div>
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

            {/* Laser & Optoelectronics */}
            <Card className="mx-0 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">激光与光电子器件</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                高功率激光芯片的温度控制与波长稳定性保障
              </p>
              <div className="text-sm text-slate-700 space-y-2 mb-6">
                <div className="font-semibold">具体应用场景：</div>
                <div className="pl-4 space-y-1">
                  <div>• 工业切割/焊接激光器散热</div>
                  <div>• 激光雷达 (LiDAR) 发射模块</div>
                  <div>• 光通信高速调制器热管理</div>
                  <div>• 医疗激光设备冷却系统</div>
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

          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="mx-4 sm:mx-0 min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
            >
              <Link href="/products/diamond-copper">查看金刚石铜复合材料</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">先进表面工程与消费升级</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto px-4">基于 sp²–sp³ 界面技术的消费级产品创新</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="mx-4 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
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
                    <div>• 折叠屏手机超薄散热片</div>
                    <div>• 高性能笔记本电脑冷板</div>
                    <div>• VR/AR 设备轻量化散热方案</div>
                    <div>• 游戏主机散热系统</div>
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
                  通过 sp²–sp³ 键合技术，将金刚石颗粒牢固固着于金属基材表面，形成"导热层 + 耐磨层 +
                  功能层"三位一体结构，同时解决传统涂层易脱落、导热差、耐久性低等问题。
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

          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="mx-4 sm:mx-0 min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
            >
              <Link href="/products/nonstick-cookware">查看全碳不粘锅产品</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold mb-4">
              中长期探索阶段 (3-10年)
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">前沿物理与能源系统</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto px-4">平台技术在极端物理与未来能源领域的演化潜力</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Solid-state Battery */}
            <Card className="mx-4 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Battery className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">固态电池负极架构</h3>
              <div className="mb-6">
                <div className="text-sm font-semibold text-sky-600 mb-2">物理特性：</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  利用 sp²–sp³ 结构的内生应力调控，作为高模量碳宿主材料，抑制枝晶生长
                </p>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">探索方向：</div>
                <div className="text-sm text-slate-600 space-y-1 pl-4">
                  <div>• 一体化全固态电池骨架结构</div>
                  <div>• 高模量多孔碳负极宿主</div>
                  <div>• 锂金属枝晶抑制功能层</div>
                  <div>• 固-固界面应力匹配设计</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded p-4">
                <div className="text-xs font-semibold text-sky-900 mb-1">技术价值：</div>
                <div className="text-xs text-slate-600 leading-relaxed">解决固态电池循环寿命与安全性的底层材料瓶颈</div>
              </div>
            </Card>

            {/* Aerospace */}
            <Card className="mx-4 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Plane className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">极端环境与航空航天</h3>
              <div className="mb-6">
                <div className="text-sm font-semibold text-sky-600 mb-2">物理特性：</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  利用全碳材料的低密度、高结构刚性与极端温度稳定性
                </p>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">探索方向：</div>
                <div className="text-sm text-slate-600 space-y-1 pl-4">
                  <div>• 卫星电子设备轻量化冷板</div>
                  <div>• 高功率相控阵雷达散热系统</div>
                  <div>• 深空探测器热控结构件</div>
                  <div>• 超高音速飞行器热防护</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded p-4">
                <div className="text-xs font-semibold text-sky-900 mb-1">技术价值：</div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  满足航天级可靠性与极端工况下的多物理场耦合需求
                </div>
              </div>
            </Card>

            {/* Emergent Physics */}
            <Card className="mx-4 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <FlaskConical className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">前沿科研应用与量子探索</h3>
              <div className="mb-6">
                <div className="text-sm font-semibold text-sky-600 mb-2">物理特性：</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  探索 sp²–sp³ 界面在特殊能带结构下的非线性电学行为与应力场量子效应
                </p>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">研究方向：</div>
                <div className="text-sm text-slate-600 space-y-1 pl-4">
                  <div>• 非线性物理计算基础材料</div>
                  <div>• 应力调控的能带工程</div>
                  <div>• 极端物理环境电子输运研究</div>
                  <div>• 超导态探索与验证实验</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded p-4">
                <div className="text-xs font-semibold text-sky-900 mb-1">技术价值：</div>
                <div className="text-xs text-slate-600 leading-relaxed">为未来 10 年的新型计算架构提供材料底层支撑</div>
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

      <section className="py-20 px-6 lg:px-8 bg-slate-50">
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
