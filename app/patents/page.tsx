"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Cpu, Layers, Sparkles, ChevronDown, ArrowRight, Zap, Wrench, Thermometer, Box, Plane, Radio, Microscope, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"

export default function PatentsPage() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null)

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
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 mb-8">
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-sky-500/20 rounded-full text-sky-300 text-sm font-medium mb-6 border border-sky-500/30">
              Technical Architecture & Patent Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              技术架构与演化路径
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">构建全碳物理系统的确定性</p>
            <p className="text-base text-slate-400 leading-relaxed max-w-3xl mx-auto">
              我们不只是在制造一种材料，而是在定义一套基于应力工程（Stress Engineering）的底层硬件体系。
              我们的技术路线经历了从理论假说到实物验证的完整闭环，并由10余项核心专利构成严密的知识产权保护网。
            </p>
          </div>
        </div>
      </section>

      {/* Cognition & Evolution Path Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.4) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-sky-500/20 rounded-full text-sky-300 text-sm font-medium mb-6 border border-sky-500/30">
              Cognition & Evolution Path
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">跨领域连续认知链：从材料物性到计算内核</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">我们的研发并非孤立的点，而是一条清晰的演化曲线</p>
          </div>

          {/* Evolution Path Flow */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop horizontal flow */}
            <div className="hidden lg:flex items-center justify-between gap-4 mb-12">
              <Card className="flex-1 p-6 bg-slate-800/80 backdrop-blur-sm border-sky-500/30 text-center">
                <div className="text-sky-400 text-sm font-medium mb-2">起点</div>
                <div className="text-white font-bold">金刚石工具</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-sky-400 flex-shrink-0" />
              <Card className="flex-1 p-6 bg-slate-800/80 backdrop-blur-sm border-sky-500/30 text-center">
                <div className="text-sky-400 text-sm font-medium mb-2">第一步</div>
                <div className="text-white font-bold">复合材料体系</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <Card className="flex-1 p-6 bg-slate-800/80 backdrop-blur-sm border-cyan-500/30 text-center">
                <div className="text-cyan-400 text-sm font-medium mb-2">第二步</div>
                <div className="text-white font-bold">全碳复合材料</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <Card className="flex-1 p-6 bg-slate-800/80 backdrop-blur-sm border-cyan-500/30 text-center">
                <div className="text-cyan-400 text-sm font-medium mb-2">第三步</div>
                <div className="text-white font-bold text-sm">功能性材料迁移</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <Card className="flex-1 p-6 bg-slate-800/80 backdrop-blur-sm border-purple-500/30 text-center">
                <div className="text-purple-400 text-sm font-medium mb-2">第四步</div>
                <div className="text-white font-bold text-sm">
                  物理系统演化
                  <br />
                  (应力工程)
                </div>
              </Card>
              <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <Card className="flex-1 p-6 bg-slate-800/80 backdrop-blur-sm border-purple-500/30 ring-2 ring-purple-500/40">
                <div className="text-purple-400 text-sm font-medium mb-2">终点</div>
                <div className="text-white font-bold text-sm">
                  潜在物理
                  <br />
                  计算资源
                </div>
              </Card>
            </div>

            {/* Mobile/Tablet vertical flow */}
            <div className="lg:hidden space-y-4 mb-12">
              <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-sky-500/30 text-center">
                <div className="text-sky-400 text-sm font-medium mb-2">起点</div>
                <div className="text-white font-bold">金刚石工具</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-6 h-6 text-sky-400" />
              </div>
              <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-sky-500/30 text-center">
                <div className="text-sky-400 text-sm font-medium mb-2">第一步</div>
                <div className="text-white font-bold">复合材料体系</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-6 h-6 text-cyan-400" />
              </div>
              <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-cyan-500/30 text-center">
                <div className="text-cyan-400 text-sm font-medium mb-2">第二步</div>
                <div className="text-white font-bold">全碳复合材料</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-6 h-6 text-cyan-400" />
              </div>
              <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-cyan-500/30 text-center">
                <div className="text-cyan-400 text-sm font-medium mb-2">第三步</div>
                <div className="text-white font-bold">功能性材料迁移</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-6 h-6 text-purple-400" />
              </div>
              <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-purple-500/30 text-center">
                <div className="text-purple-400 text-sm font-medium mb-2">第四步</div>
                <div className="text-white font-bold">物理系统演化 (应力工程)</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-6 h-6 text-purple-400" />
              </div>
              <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-purple-500/30 text-center ring-2 ring-purple-500/40">
                <div className="text-purple-400 text-sm font-medium mb-2">终点</div>
                <div className="text-white font-bold">潜在物理计算资源</div>
              </Card>
            </div>

            {/* Core Logic Summary */}
            <Card className="p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border-sky-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-500/30">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">核心逻辑总结</h3>
                  <p className="text-slate-300 leading-relaxed text-base">
                    我们的研发并非孤立的点，而是一条清晰的演化曲线。通过对 sp²-sp³
                    键合结构的应力调控，我们将材料从单纯的"散热工具"提升为具备"物理计算潜力"的功能基底。
                    这条演化路径不仅验证了技术的可行性，更揭示了材料科学与计算物理交叉的巨大想象空间。
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* General Overview Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto p-8 bg-slate-800/50 backdrop-blur-sm border-sky-500/20">
            <p className="text-slate-300 leading-relaxed text-lg text-center">
              本项目的技术体系并非由单一材料或单一产品构成，而是沿着清晰的工程与材料演化路径逐步发展形成。其核心逻辑是从工程工具出发，经过功能材料阶段，最终演化为具备平台属性的全碳复合材料体系。
            </p>
          </Card>

          {/* 技术演进架构图 */}
          <div className="mt-12 max-w-7xl mx-auto">
            <div className="p-4 md:p-8 bg-slate-950/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8 md:mb-12">技术深化路径与平台架构全景图</h3>
              
              <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:relative">
                {/* 左侧：演化路径 */}
                <div className="space-y-3 md:space-y-6">
                  <div className="text-center mb-4 md:mb-6">
                    <h4 className="text-base md:text-lg font-semibold text-sky-400 mb-2">演化路径</h4>
                    <div className="h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
                  </div>
                  
                  {/* Stage 01 */}
                  <Card className="p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm border-sky-500/30 hover:border-sky-400/60 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/30 transition-colors flex-shrink-0">
                        <Wrench className="w-5 h-5 md:w-6 md:h-6 text-sky-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-mono text-sky-400 mb-1">Stage 01</div>
                        <h5 className="text-sm md:text-base text-white font-bold mb-1 md:mb-2">精密活性熔固钻石工具</h5>
                        <p className="text-xs text-slate-400 leading-relaxed">建立极端工况下的界面连接与结构稳定性工程能力</p>
                      </div>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-2 md:hidden">
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-5 h-5 text-sky-400/60" />
                      <div className="h-8 w-px bg-gradient-to-b from-sky-500/40 via-cyan-500/40 to-transparent"></div>
                    </div>
                  </div>

                  {/* Stage 02 */}
                  <Card className="p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                        <Thermometer className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-mono text-cyan-400 mb-1">Stage 02</div>
                        <h5 className="text-sm md:text-base text-white font-bold mb-1 md:mb-2">金刚石-铜复合散热基底</h5>
                        <p className="text-xs text-slate-400 leading-relaxed">实现从工程工具向功能材料的跃迁</p>
                      </div>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-2 md:hidden">
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-5 h-5 text-cyan-400/60" />
                      <div className="h-8 w-px bg-gradient-to-b from-cyan-500/40 via-purple-500/40 to-transparent"></div>
                    </div>
                  </div>

                  {/* Stage 03 */}
                  <Card className="p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors flex-shrink-0">
                        <Layers className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-mono text-purple-400 mb-1">Stage 03</div>
                        <h5 className="text-sm md:text-base text-white font-bold mb-1 md:mb-2">全碳复合功能材料</h5>
                        <p className="text-xs text-slate-400 leading-relaxed">构建完全由碳体系组成的复合材料平台</p>
                      </div>
                    </div>
                  </Card>

                  {/* 移动端：演化路径到核心内核的连接 */}
                  <div className="flex justify-center py-3 md:hidden">
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-6 h-6 text-amber-400/80" />
                      <div className="h-12 w-px bg-gradient-to-b from-purple-500/50 via-amber-400/60 to-amber-500/50"></div>
                    </div>
                  </div>
                </div>

                {/* 中间：核心内核 */}
                <div className="flex items-center justify-center relative lg:my-0 my-4 md:my-8">
                  {/* 桌面端连接线装饰 */}
                  <div className="hidden lg:block absolute left-0 top-1/2 w-1/2 h-0.5 bg-gradient-to-r from-sky-500/40 via-amber-400/60 to-transparent -translate-x-4"></div>
                  <div className="hidden lg:block absolute right-0 top-1/2 w-1/2 h-0.5 bg-gradient-to-l from-purple-500/40 via-amber-400/60 to-transparent translate-x-4"></div>
                  
                  <div className="relative z-10 w-full">
                    <Card className="p-6 md:p-8 bg-gradient-to-br from-amber-900/40 to-yellow-900/40 backdrop-blur-sm border-2 border-amber-500/50 rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 group">
                      <div className="relative">
                        {/* 发光效果 - 桌面端 */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        {/* 移动端外部阴影 - 增强发光效果 */}
                        <div className="md:hidden absolute -inset-2 rounded-2xl bg-gradient-to-br from-amber-500/30 to-yellow-500/30 blur-2xl opacity-60"></div>
                        
                        <div className="relative z-10 text-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-xl bg-gradient-to-br from-amber-500/30 to-yellow-500/30 flex items-center justify-center border-2 border-amber-400/50 group-hover:scale-110 transition-transform duration-300">
                            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-amber-300" />
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">核心内核</h4>
                          <div className="space-y-2 md:space-y-3">
                            <div className="px-3 py-2 md:px-4 md:py-2 bg-slate-900/60 rounded-lg border border-amber-500/30">
                              <div className="text-amber-300 font-mono font-semibold text-xs md:text-sm">sp²–sp³ 化学键合</div>
                            </div>
                            <div className="px-3 py-2 md:px-4 md:py-2 bg-slate-900/60 rounded-lg border border-amber-500/30">
                              <div className="text-amber-300 font-mono font-semibold text-xs md:text-sm">内生应力调控</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* 移动端：核心内核到应用视窗的连接 */}
                <div className="flex justify-center py-3 md:hidden">
                  <div className="flex flex-col items-center">
                    <ChevronDown className="w-6 h-6 text-amber-400/80" />
                    <div className="h-12 w-px bg-gradient-to-b from-amber-500/50 via-sky-500/40 to-transparent"></div>
                  </div>
                </div>

                {/* 右侧：应用视窗 */}
                <div className="space-y-3 md:space-y-6">
                  <div className="text-center mb-4 md:mb-6">
                    <h4 className="text-base md:text-lg font-semibold text-purple-400 mb-2">应用视窗</h4>
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                  </div>

                  {/* 极端工况应用 */}
                  <Card className="p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm border-sky-500/30 hover:border-sky-400/60 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/30 transition-colors flex-shrink-0">
                        <Plane className="w-5 h-5 md:w-6 md:h-6 text-sky-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm md:text-base text-white font-bold mb-2">极端工况应用</h5>
                        <div className="space-y-1.5 text-xs text-slate-400 leading-relaxed text-left">
                          <div>• 航天散热</div>
                          <div>• 大功率线圈</div>
                          <div>• 核聚变热件</div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-2 md:hidden">
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-5 h-5 text-sky-400/60" />
                      <div className="h-8 w-px bg-gradient-to-b from-sky-500/40 via-purple-500/40 to-transparent"></div>
                    </div>
                  </div>

                  {/* 超导材料研究平台 */}
                  <Card className="p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors flex-shrink-0">
                        <Microscope className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm md:text-base text-white font-bold mb-2">超导材料研究平台</h5>
                        <div className="inline-block px-2 py-1 bg-slate-800/60 rounded text-[10px] text-purple-300 font-medium mt-1">
                          理论探索阶段
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-2 md:hidden">
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-5 h-5 text-purple-400/60" />
                      <div className="h-8 w-px bg-gradient-to-b from-purple-500/40 via-indigo-500/40 to-transparent"></div>
                    </div>
                  </div>

                  {/* 量子计算潜力 */}
                  <Card className="p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm border-indigo-500/30 hover:border-indigo-400/60 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors flex-shrink-0">
                        <FlaskConical className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm md:text-base text-white font-bold mb-2">量子计算潜力</h5>
                        <div className="inline-block px-2 py-1 bg-slate-800/60 rounded text-[10px] text-indigo-300 font-medium mt-1">
                          远景规划阶段
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.4) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-sky-500/20 rounded-full text-sky-300 text-sm font-medium mb-6 border border-sky-500/30">
              Engineering Evolution Path
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">技术演化路径</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">从工程工具到全碳材料体系的系统性演化</p>
          </div>

          {/* Three Stages - Horizontal Cards */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            {/* Stage 01 */}
            <Card
              className={`p-6 bg-slate-800/80 backdrop-blur-sm border-sky-500/30 cursor-pointer transition-all hover:border-sky-500/60 ${expandedStage === 1 ? "md:col-span-3 border-sky-500/60" : ""}`}
              onClick={() => setExpandedStage(expandedStage === 1 ? null : 1)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/30">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sky-400 text-xs font-medium">Stage 01</div>
                  <div className="text-white font-bold">活性熔固钻石工具</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-sky-400 transition-transform ${expandedStage === 1 ? "rotate-180" : ""}`}
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                以活性熔固钻石工具为核心，建立了在极端工况下对金刚石界面、高温连接与结构稳定性的工程能力。
              </p>

              {expandedStage === 1 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-slate-700">
                  <div>
                    <div className="text-sky-400 text-sm font-medium mb-2">功能延伸</div>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-lg">
                      基于活性熔固钻石工具阶段积累的界面与耐磨技术，相关能力被延伸至耐磨、稳定与安全要求更高的民用功能场景，
                      <strong className="text-white">不粘涂层</strong>即属于该阶段的功能延伸应用。
                    </p>
                  </div>

                  <div>
                    <div className="text-sky-400 text-sm font-medium mb-3">专利支撑</div>
                    <div className="space-y-2">
                      <div className="p-3 bg-slate-900/50 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">发明专利</div>
                        <div className="text-xs text-slate-300">一种基于金刚石涂层的高耐磨不粘表面及其制备方法</div>
                        <div className="font-mono text-xs text-slate-500 mt-1">申请号: 待公开</div>
                      </div>
                      <div className="p-3 bg-slate-900/50 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">发明专利</div>
                        <div className="text-xs text-slate-300">一种适用于高温与复杂工况的不粘功能复合涂层结构</div>
                        <div className="font-mono text-xs text-slate-500 mt-1">申请号: 待公开</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Stage 02 */}
            <Card
              className={`p-6 bg-slate-800/80 backdrop-blur-sm border-cyan-500/30 cursor-pointer transition-all hover:border-cyan-500/60 ${expandedStage === 2 ? "md:col-span-3 border-cyan-500/60" : ""}`}
              onClick={() => setExpandedStage(expandedStage === 2 ? null : 2)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-cyan-400 text-xs font-medium">Stage 02</div>
                  <div className="text-white font-bold">金刚石铜复合材料</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 transition-transform ${expandedStage === 2 ? "rotate-180" : ""}`}
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                引入金属相形成复合材料，实现从工程工具向功能材料的跃迁，重点在于导热、结构复合与界面传输能力。
              </p>

              {expandedStage === 2 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-slate-700">
                  <div>
                    <div className="text-cyan-400 text-sm font-medium mb-2">技术分支说明</div>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-lg">
                      该阶段的专利布局同时覆盖面向规模化应用的低成本方案，以及面向高端散热与极限性能需求的高性能方案，形成互补的技术组合。
                    </p>
                  </div>

                  <div>
                    <div className="text-cyan-400 text-sm font-medium mb-2">典型功能形态</div>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-lg">
                      <strong className="text-white">导热垫片、散热基板</strong>
                      等应用属于金刚石铜复合材料阶段的典型功能形态，其目标是将材料的高导热与结构稳定性转化为可工程化的热管理解决方案。
                    </p>
                  </div>

                  <div>
                    <div className="text-cyan-400 text-sm font-medium mb-3">专利支撑</div>

                    <div className="mb-3">
                      <div className="text-xs text-cyan-300 font-medium mb-2">金刚石铜复合材料（低成本 / 高性能）</div>
                      <div className="space-y-2">
                        <div className="p-3 bg-slate-900/50 rounded-lg">
                          <div className="text-xs text-slate-500 mb-1">发明专利</div>
                          <div className="text-xs text-slate-300">一种金刚石/铜复合材料及其制备方法</div>
                          <div className="font-mono text-xs text-slate-500 mt-1">申请号: 2025117083866</div>
                        </div>
                        <div className="p-3 bg-slate-900/50 rounded-lg">
                          <div className="text-xs text-slate-500 mb-1">发明专利</div>
                          <div className="text-xs text-slate-300">一种结构化金刚石热管理基板及其制备方法</div>
                          <div className="font-mono text-xs text-slate-500 mt-1">申请号: 2025117083870</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-cyan-300 font-medium mb-2">柔性导热材料</div>
                      <div className="space-y-2">
                        <div className="p-3 bg-slate-900/50 rounded-lg">
                          <div className="text-xs text-slate-500 mb-1">发明专利</div>
                          <div className="text-xs text-slate-300">
                            一种基于活性钎焊金属骨架增强的柔性高导热复合材料及其制备方法
                          </div>
                          <div className="font-mono text-xs text-slate-500 mt-1">申请号: 2025119637289</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Stage 03 */}
            <Card
              className={`p-6 bg-slate-800/80 backdrop-blur-sm border-purple-500/30 cursor-pointer transition-all hover:border-purple-500/60 ${expandedStage === 3 ? "md:col-span-3 border-purple-500/60" : ""}`}
              onClick={() => setExpandedStage(expandedStage === 3 ? null : 3)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-purple-400 text-xs font-medium">Stage 03</div>
                  <div className="text-white font-bold">无铜/全碳复合材料</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform ${expandedStage === 3 ? "rotate-180" : ""}`}
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                通过去金属化，构建完全由碳体系组成的复合材料，为更复杂的结构调控和物理行为探索提供条件。
              </p>

              {expandedStage === 3 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-slate-700">
                  <div>
                    <div className="text-purple-400 text-sm font-medium mb-2">形态说明</div>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-lg">
                      全碳复合材料阶段同时覆盖结构型与柔性型两种形态，以适应不同热管理与结构集成需求。
                    </p>
                  </div>

                  <div>
                    <div className="text-purple-400 text-sm font-medium mb-3">专利支撑</div>

                    <div className="mb-3">
                      <div className="text-xs text-purple-300 font-medium mb-2">结构型全碳复合材料（散热片）</div>
                      <div className="space-y-2">
                        <div className="p-3 bg-slate-900/50 rounded-lg">
                          <div className="text-xs text-slate-500 mb-1">发明专利</div>
                          <div className="text-xs text-slate-300">
                            一种基于金刚石原位低温石墨化键合的高导热复合材料及其制备方法与应用
                          </div>
                          <div className="font-mono text-xs text-slate-500 mt-1">申请号: 2025115185390</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="text-xs text-purple-300 font-medium mb-2">柔性全碳复合材料（垫片）</div>
                      <div className="space-y-2">
                        <div className="p-3 bg-slate-900/50 rounded-lg">
                          <div className="text-xs text-slate-500 mb-1">发明专利</div>
                          <div className="text-xs text-slate-300">一种高模量多孔碳宿主材料及其制备方法与应用</div>
                          <div className="font-mono text-xs text-slate-500 mt-1">申请号: 待公开</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-purple-700/30">
                      <p className="text-xs text-purple-300 mb-2 italic">
                        该专利属于全碳材料平台在能源系统方向的结构与功能延伸应用。
                      </p>
                      <div className="p-3 bg-slate-900/50 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">发明专利</div>
                        <div className="text-xs text-slate-300">
                          一种基于分区功能化骨架的一体化全固态电池及其共烧结制备方法
                        </div>
                        <div className="font-mono text-xs text-slate-500 mt-1">申请号: 待公开</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-pink-500/20 rounded-full text-pink-300 text-sm font-medium mb-6 border border-pink-500/30">
              Platform Core
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">平台核心</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">底层技术原理与可调控参数空间</p>
          </div>

          <Card className="max-w-5xl mx-auto p-10 bg-gradient-to-br from-pink-900/30 to-purple-950/30 backdrop-blur-sm border-pink-500/40 ring-4 ring-pink-500/20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/30">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-pink-300 text-sm font-medium mb-1">Platform Core Technology</div>
                <h3 className="text-white font-bold text-2xl">sp³–sp² 化学键合与内生应力结构</h3>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-8">
              sp³–sp²
              化学键合结构是全碳复合材料阶段自然演化出的核心内核。该结构通过内生应力与化学键合的协同作用，形成具备长期稳定性与可扩展性的材料平台，为后续功能材料与物理探索提供基础。
            </p>

            {/* Platform Core Principle Explanation */}
            <div className="p-8 bg-slate-950/60 rounded-xl border border-pink-500/30">
              <h4 className="text-pink-300 font-semibold text-lg mb-6">平台核心原理说明</h4>

              <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                <p>在全碳复合材料体系中，碳原子可以以不同的键合方式存在：</p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <span className="text-pink-400 font-mono font-semibold">sp³</span>{" "}
                    键合主要提供三维刚性结构（类似金刚石）
                  </li>
                  <li>
                    <span className="text-pink-400 font-mono font-semibold">sp²</span>{" "}
                    键合主要提供二维导电/导热平面（类似石墨/石墨烯）
                  </li>
                </ul>

                <p>
                  将这两种键合方式在纳米尺度内通过高温和高压工艺进行化学级耦合，会产生一种
                  <strong className="text-white">内部应力锚定效应</strong>
                  。这种效应一方面来自晶格结构的错配，另一方面来自界面应力的持续保持。
                </p>

                <div className="my-6 p-6 bg-gradient-to-br from-slate-900/80 to-purple-950/30 rounded-xl border border-pink-500/30">
                  <h5 className="text-pink-300 font-semibold text-base mb-5 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    原理示意：不同参数组合生成不同宏观功能域
                  </h5>

                  <div className="space-y-4">
                    {/* sp³ dominant */}
                    <div className="p-5 bg-slate-950/70 rounded-lg border border-blue-500/30">
                      <div className="text-blue-300 font-mono font-semibold mb-3 text-sm">
                        sp³ 占主导，相对低 sp² 含量
                      </div>
                      <div className="text-slate-300 space-y-2 ml-4 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400 mt-0.5">→</span>
                          <span>结构刚性强、热稳定性高</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400 mt-0.5">→</span>
                          <span>适合高强度、耐磨、稳定工况材料</span>
                        </div>
                      </div>
                    </div>

                    {/* sp² dominant */}
                    <div className="p-5 bg-slate-950/70 rounded-lg border border-green-500/30">
                      <div className="text-green-300 font-mono font-semibold mb-3 text-sm">
                        sp² 占主导，相对高 sp² 含量
                      </div>
                      <div className="text-slate-300 space-y-2 ml-4 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-green-400 mt-0.5">→</span>
                          <span>导热/导电性显著提升</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green-400 mt-0.5">→</span>
                          <span>适合散热、电子界面耦合、传输相关功能</span>
                        </div>
                      </div>
                    </div>

                    {/* Mixed state */}
                    <div className="p-5 bg-slate-950/70 rounded-lg border border-purple-500/30">
                      <div className="text-purple-300 font-mono font-semibold mb-3 text-sm">
                        中间态 sp²/sp³ 混合比例
                      </div>
                      <div className="text-slate-300 space-y-2 ml-4 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5">→</span>
                          <span>内生应力最大</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5">→</span>
                          <span>表现出复杂界面能态与非线性响应行为</span>
                        </div>
                      </div>
                    </div>

                    {/* Control parameters */}
                    <div className="mt-5 pt-5 border-t border-pink-500/30">
                      <p className="text-slate-400 mb-3 text-sm">这些参数通常通过以下方式进行协同调节：</p>
                      <ul className="space-y-2 ml-4 text-sm text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 font-bold">•</span>
                          <span>
                            <strong className="text-white">原料选择</strong>
                            （纳米金刚石、石墨、碳纳米管等）
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 font-bold">•</span>
                          <span>
                            <strong className="text-white">热压/烧结工艺</strong>
                            （温度、压力、保温时间）
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 font-bold">•</span>
                          <span>
                            <strong className="text-white">颗粒尺寸分布</strong>
                          </span>
                        </li>
                      </ul>
                      <p className="text-slate-400 mt-3 text-sm">以达到目标的多尺度结构状态。</p>
                    </div>
                  </div>
                </div>

                <p className="pt-4 border-t border-pink-500/20 text-slate-200">
                  这种带有内生应力和化学相互连接的"多状态碳网络"，从工程功能材料的角度看是优势，从物理学探索的角度看则提供了高维复杂物性空间，这正是我们称之为
                  <strong className="text-pink-400">"全碳复合材料平台"</strong>的原因。
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-6 border border-indigo-500/30">
              Platform Extension
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">平台延展：sp²–sp³ 结构的物理潜力窗口</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">远期物理潜力：全碳 sp²–sp³ 结构的涌现行为</p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-indigo-500/30">
              <p className="text-slate-300 leading-relaxed text-center">
                在去金属化的全碳复合材料阶段，我们构建了一类以 sp²–sp³
                化学键合与内生应力场为核心的连续碳网络结构。该结构在工程层面已表现出优异的导热、力学与长期稳定性，而在更高层次上，也自然打开了一系列尚未被充分探索的物理窗口。
              </p>
            </Card>
          </div>

          {/* Three exploration direction cards */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
            {/* Direction 1: Electronic state reconstruction */}
            <Card className="p-8 bg-gradient-to-br from-indigo-950/70 to-slate-900/70 backdrop-blur-sm border-indigo-500/30 hover:border-indigo-400/60 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-indigo-300 font-bold text-lg mb-4">高内应力调控下的电子态重构与非常规超导潜力</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                在强内生应力与非均匀键合环境下，局域电子结构可能发生重整，为非常规超导或相关集体现象提供结构基础。
              </p>
              <p className="text-sm text-slate-400 leading-relaxed italic">
                在现有材料体系中，同时具备强内生应力、连续 sp²–sp³
                键合以及可工程调控窗口的碳基结构仍属少见，这使该平台在非常规超导材料的基础结构探索中具备独特性。
              </p>
            </Card>

            {/* Direction 2: Chaotic dynamics */}
            <Card className="p-8 bg-gradient-to-br from-violet-950/70 to-slate-900/70 backdrop-blur-sm border-violet-500/30 hover:border-violet-400/60 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30 mb-6">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-violet-300 font-bold text-lg mb-4">非线性耦合碳网络的混沌动力学行为</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                sp²–sp³
                互连网络在介观尺度上形成高度耦合、无序但可控的结构单元，为复杂动力学与类储层计算行为提供物理载体。
              </p>
            </Card>

            {/* Direction 3: Physical computing */}
            <Card className="p-8 bg-gradient-to-br from-purple-950/70 to-slate-900/70 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/60 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-purple-300 font-bold text-lg mb-4">量子储层计算的远期探索</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                相较于超导等凝聚态物理方向，该方向更偏向远期探索。我们正在探索基于平台的"量子储层计算"模型，但其不作为当前的主要技术目标。
              </p>
              <p className="text-xs text-slate-500 italic">
                该平台并非以当前量子计算架构为直接目标，而是为探索新型、非冯·诺依曼、物理驱动计算范式提供材料级基础。
              </p>
            </Card>
          </div>

          {/* Disclaimer */}
          <Card className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-amber-900/20 to-orange-900/20 border-amber-500/30">
            <p className="text-sm text-slate-300 leading-relaxed text-center italic">
              需要强调的是，上述方向目前仍处于物理探索阶段，尚未进入工程化或产品化进程。但正是这种尚未被充分开发的物理上限，使该平台在长期战略层面具备区别于传统功能材料的潜在价值。
            </p>
          </Card>
        </div>
      </section>

      {/* Patent Cluster Value */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <Card className="max-w-5xl mx-auto p-10 bg-gradient-to-br from-slate-900 to-slate-800 border-sky-500/20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">专利集群价值</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto rounded-full mb-6" />
              <p className="text-slate-300 leading-relaxed text-lg max-w-3xl mx-auto">
                本平台技术专利覆盖从工程基础、功能材料到平台核心的关键技术节点：
              </p>
            </div>

            <div className="space-y-8 mb-10">
              {/* 一、工程起点与功能延伸 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border border-slate-700">
                <h3 className="text-sky-400 font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-mono">
                    一
                  </span>
                  工程起点与功能延伸
                </h3>
                <ul className="space-y-2 text-slate-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400">•</span>
                    <span>基于钻石固着的新型不粘锅具专利（2项）</span>
                  </li>
                </ul>
              </div>

              {/* 二、功能材料阶段 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border border-slate-700">
                <h3 className="text-cyan-400 font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-mono">
                    二
                  </span>
                  功能材料阶段
                </h3>
                <ul className="space-y-2 text-slate-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>金刚石铜复合材料及其制备方法专利（低成本/高性能）（2 项）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>铜纤维活性熔固金刚石导热复合材料专利（1项）</span>
                  </li>
                </ul>
              </div>

              {/* 三、全碳体系阶段 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border border-slate-700">
                <h3 className="text-purple-400 font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-mono">
                    三
                  </span>
                  全碳体系阶段
                </h3>
                <ul className="space-y-2 text-slate-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>基于原位石墨化键合的高导热全碳复合材料专利（1 项）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>柔性碳基复合材料导热垫片专利（1项）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>全固态电池一体化制备方法专利（2 项）</span>
                  </li>
                </ul>
              </div>

              {/* 四、平台核心技术 */}
              <div className="p-6 bg-gradient-to-br from-pink-950/50 to-purple-950/50 rounded-xl border border-pink-500/30">
                <h3 className="text-pink-400 font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 text-sm font-mono">
                    四
                  </span>
                  平台核心技术
                </h3>
                <ul className="space-y-2 text-slate-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>sp²–sp³ 化学键合内生应力复合材料及制备方法专利（1 项）</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 总结说明 */}
            <div className="p-6 bg-slate-900/80 rounded-xl border border-sky-500/20 mb-8">
              <p className="text-slate-300 leading-relaxed text-center">
                上述专利组合构建了从<strong className="text-sky-400">材料制备</strong>、
                <strong className="text-cyan-400">结构设计</strong>到
                <strong className="text-purple-400">功能扩展</strong>的完整知识产权体系。
              </p>
            </div>

            {/* 统计数据 */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-sky-400 mb-2">9 项</div>
                <div className="text-slate-400 text-sm">核心发明专利</div>
              </div>
              <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400 mb-2">4 层</div>
                <div className="text-slate-400 text-sm">技术架构</div>
              </div>
              <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">多领域</div>
                <div className="text-slate-400 text-sm">产业潜力</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">探索技术合作机会</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">我们欢迎技术授权、联合研发、专利转让等多种合作形式</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cooperation">
              <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg">项目合作</Button>
            </Link>
            <Link href="/products">
              <Button
                variant="outline"
                className="border-slate-500 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg bg-transparent"
              >
                了解产品应用
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterNav />
    </div>
  )
}
