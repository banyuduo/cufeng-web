"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { isValidLocale, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"
import { Cpu, Layers, Sparkles, ChevronDown, ArrowRight, Zap, Wrench, Thermometer, Box, Plane, Radio, Microscope, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { PageHero } from "@/components/page-hero"
import { DarkPagePatternBg } from "@/components/dark-page-pattern-bg"
import { MaterialComparisonRadarChart } from "@/components/material-comparison-radar-chart"

export default function PatentsPage() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null)
  const pathname = usePathname()
  const pathSegments = pathname.replace(/^\/+|\/+$/g, "").split("/")
  const localeFromPath = pathSegments[0]
  const locale = (isValidLocale(localeFromPath) ? localeFromPath : "zh") as Locale
  const t = getTranslations(locale)
  const prefix = `/${locale}`

  return (
    <div className="min-h-screen relative">
      <DarkPagePatternBg />
      <div className="relative z-10">
      <Navigation />

      <PageHero
        variant="dark"
        title={t("patents.hero.title")}
        subtitle={t("patents.hero.subtitle")}
        withDecoration
      >
        <div className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mt-4 space-y-3">
          <p>{t("patents.hero.desc")}</p>
          <p className="text-[#73DBFF]/90 font-medium">{t("patents.hero.dimensions")}</p>
        </div>
      </PageHero>

      {/* Cognition & Evolution Path Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(65, 105, 225, 0.35) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="page-h2 text-white mb-4">{t("patents.evolution.sectionTitle")}</h2>
            <p className="page-lead text-slate-400 max-w-3xl mx-auto">{t("patents.evolution.sectionSubtitle")}</p>
          </div>

          {/* Evolution Path Flow */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop horizontal flow */}
            <div className="hidden lg:flex items-stretch justify-between gap-3 mb-12">
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 text-center h-[120px] shrink-0">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.start")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.diamondTools")}</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-[#73DBFF] flex-shrink-0 self-center" />
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 text-center h-[120px] shrink-0">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.step1")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.compositeSystem")}</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-[#73DBFF] flex-shrink-0 self-center" />
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 text-center h-[120px] shrink-0">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.step2")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.allCarbon")}</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-[#73DBFF] flex-shrink-0 self-center" />
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 text-center h-[120px] shrink-0">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.step3")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.functionalMigration")}</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-[#73DBFF] flex-shrink-0 self-center" />
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 text-center h-[120px] shrink-0">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.step4")}</div>
                <div className="text-white font-bold text-xs leading-tight whitespace-pre-line break-words">{t("patents.evolution.physicsEvolution")}</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-[#73DBFF] flex-shrink-0 self-center" />
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 ring-2 ring-[#0077b6]/40 text-center h-[120px] shrink-0">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.end")}</div>
                <div className="text-white font-bold text-xs leading-tight whitespace-pre-line break-words">{t("patents.evolution.computingResource")}</div>
              </Card>
            </div>

            {/* Mobile/Tablet vertical flow */}
            <div className="lg:hidden space-y-4 mb-12">
              <Card className="flex flex-col items-center justify-center p-6 min-h-[88px] bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 text-center">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.start")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.diamondTools")}</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <Card className="flex flex-col items-center justify-center p-6 min-h-[88px] bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 text-center">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.step1")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.compositeSystem")}</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <Card className="flex flex-col items-center justify-center p-6 min-h-[88px] bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 text-center">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.step2")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.allCarbon")}</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <Card className="flex flex-col items-center justify-center p-6 min-h-[88px] bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 text-center">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.step3")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.functionalMigration")}</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <Card className="flex flex-col items-center justify-center p-6 min-h-[88px] bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 text-center">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.step4")}</div>
                <div className="text-white font-bold text-sm leading-tight break-words">{t("patents.evolution.physicsEvolution")}</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <Card className="flex flex-col items-center justify-center p-6 min-h-[88px] bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 text-center ring-2 ring-[#73DBFF]/40">
                <div className="text-[#73DBFF] text-sm font-medium mb-2">{t("patents.evolution.end")}</div>
                <div className="text-white font-bold text-sm leading-tight break-words">{t("patents.evolution.computingResource")}</div>
              </Card>
            </div>

            {/* Core Logic Summary */}
            <Card className="p-8 bg-gradient-to-br from-[#002244]/80 to-[#003366]/70 backdrop-blur-sm border border-[#0077b6]/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#002244] to-[#003366] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0077b6]/20 border border-[#0077b6]/30">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="page-h3 text-white mb-3">{t("patents.evolution.coreLogicTitle")}</h3>
                  <p className="page-lead text-slate-300">
                    {t("patents.evolution.coreLogicDesc")}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* General Overview Section */}
      <section className="py-16 relative overflow-hidden">
        {/* 借鉴首页的波浪光晕装饰 */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0077b6]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#00b4d8]/8 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 技术演进架构图 */}
          <div className="max-w-7xl mx-auto">
            <div className="p-4 md:p-8 bg-[#002244]/50 backdrop-blur-xl rounded-3xl border border-[#00b4d8]/30 shadow-2xl shadow-[#0077b6]/10">
              <h3 className="page-h3 text-white text-center mb-8 md:mb-12">{t("patents.architecture.title")}</h3>
              
              <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:relative lg:items-stretch">
                {/* 左侧：演化路径 */}
                <div className="space-y-3 md:space-y-6 lg:flex lg:flex-col">
                  <div className="text-center mb-4 md:mb-6">
                    <h4 className="text-base md:text-lg font-semibold text-[#73DBFF] mb-2">{t("patents.architecture.evolutionPath")}</h4>
                    <div className="h-px bg-gradient-to-r from-transparent via-[#73DBFF]/50 to-transparent"></div>
                  </div>
                  
                  {/* Stage 01 */}
                  <Card className="p-4 md:p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 hover:border-[#00b4d8]/50 hover:shadow-lg hover:shadow-[#0077b6]/15 transition-all duration-300 group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#73DBFF]/20 flex items-center justify-center group-hover:bg-[#73DBFF]/30 transition-colors flex-shrink-0">
                        <Wrench className="w-5 h-5 md:w-6 md:h-6 text-[#73DBFF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-base font-mono text-[#73DBFF] mb-1">Stage 01</div>
                        <h5 className="text-base text-white font-bold mb-1 md:mb-2">{t("patents.architecture.stage01Title")}</h5>
                        <p className="text-base text-slate-400 leading-relaxed">{t("patents.architecture.stage01Desc")}</p>
                      </div>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-2 md:hidden">
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-5 h-5 text-[#73DBFF]/60" />
                      <div className="h-8 w-px bg-gradient-to-b from-[#73DBFF]/40 via-[#73DBFF]/40 to-transparent"></div>
                    </div>
                  </div>

                  {/* Stage 02 */}
                  <Card className="p-4 md:p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 hover:border-[#00b4d8]/50 hover:shadow-lg hover:shadow-[#0077b6]/15 transition-all duration-300 group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#73DBFF]/20 flex items-center justify-center group-hover:bg-[#73DBFF]/30 transition-colors flex-shrink-0">
                        <Thermometer className="w-5 h-5 md:w-6 md:h-6 text-[#73DBFF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-base font-mono text-[#73DBFF] mb-1">Stage 02</div>
                        <h5 className="text-base text-white font-bold mb-1 md:mb-2">{t("patents.architecture.stage02Title")}</h5>
                        <p className="text-base text-slate-400 leading-relaxed">{t("patents.architecture.stage02Desc")}</p>
                      </div>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-2 md:hidden">
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-5 h-5 text-[#73DBFF]/60" />
                      <div className="h-8 w-px bg-gradient-to-b from-[#73DBFF]/40 via-[#73DBFF]/40 to-transparent"></div>
                    </div>
                  </div>

                  {/* Stage 03 */}
                  <Card className="p-4 md:p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 hover:border-[#00b4d8]/50 hover:shadow-lg hover:shadow-[#0077b6]/15 transition-all duration-300 group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#73DBFF]/20 flex items-center justify-center group-hover:bg-[#73DBFF]/30 transition-colors flex-shrink-0">
                        <Layers className="w-5 h-5 md:w-6 md:h-6 text-[#73DBFF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-base font-mono text-[#73DBFF] mb-1">Stage 03</div>
                        <h5 className="text-base text-white font-bold mb-1 md:mb-2">{t("patents.architecture.stage03Title")}</h5>
                        <p className="text-base text-slate-400 leading-relaxed">{t("patents.architecture.stage03Desc")}</p>
                      </div>
                    </div>
                  </Card>

                  {/* 移动端：演化路径到核心内核的连接 */}
                  <div className="flex justify-center py-3 md:hidden">
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-6 h-6 text-[#73DBFF]/80" />
                      <div className="h-12 w-px bg-gradient-to-b from-[#73DBFF]/50 via-[#73DBFF]/60 to-[#73DBFF]/50"></div>
                    </div>
                  </div>
                </div>

                {/* 中间：核心内核 */}
                <div className="flex items-center justify-center relative lg:my-0 my-4 md:my-8">
                  {/* 桌面端连接线装饰 */}
                  <div className="hidden lg:block absolute left-0 top-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#0077b6]/40 via-[#73DBFF]/60 to-transparent -translate-x-4"></div>
                  <div className="hidden lg:block absolute right-0 top-1/2 w-1/2 h-0.5 bg-gradient-to-l from-[#0077b6]/40 via-[#73DBFF]/60 to-transparent translate-x-4"></div>
                  
                  <div className="relative z-10 w-full">
                    <Card className="p-6 md:p-8 bg-gradient-to-br from-[#002244]/90 to-[#003366]/70 backdrop-blur-sm border-2 border-[#00b4d8]/40 rounded-2xl shadow-2xl shadow-[#0077b6]/20 hover:shadow-[#00b4d8]/25 transition-all duration-300 group">
                      <div className="relative">
                        {/* 发光效果 - 桌面端 */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0077b6]/15 to-[#00b4d8]/10 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        {/* 移动端外部阴影 - 增强发光效果 */}
                        <div className="md:hidden absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#0077b6]/20 to-[#00b4d8]/15 blur-2xl opacity-60"></div>
                        
                        <div className="relative z-10 text-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-xl bg-gradient-to-br from-[#002244] to-[#003366] flex items-center justify-center border-2 border-[#00b4d8]/40 group-hover:scale-110 transition-transform duration-300">
                            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-[#73DBFF]" />
                          </div>
                          <h4 className="page-h3 text-white mb-3 md:mb-4">{t("patents.architecture.coreKernel")}</h4>
                          <div className="space-y-2 md:space-y-3">
                            <div className="px-3 py-2 md:px-4 md:py-2 bg-[#002244]/60 rounded-lg border border-[#0077b6]/30">
                              <div className="text-[#73DBFF] font-mono font-semibold text-base">{t("patents.architecture.chemicalBonding")}</div>
                            </div>
                            <div className="px-3 py-2 md:px-4 md:py-2 bg-[#002244]/60 rounded-lg border border-[#0077b6]/30">
                              <div className="text-[#73DBFF] font-mono font-semibold text-base">{t("patents.architecture.stressRegulation")}</div>
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
                    <ChevronDown className="w-6 h-6 text-[#73DBFF]/80" />
                    <div className="h-12 w-px bg-gradient-to-b from-[#0077b6]/50 via-[#73DBFF]/40 to-transparent"></div>
                  </div>
                </div>

                {/* 右侧：应用视窗 - 与左侧对称布局 */}
                <div className="space-y-3 md:space-y-6 lg:flex lg:flex-col lg:gap-6 lg:flex-1 lg:min-h-0">
                  <div className="text-center mb-4 md:mb-6">
                    <h4 className="text-base md:text-lg font-semibold text-[#73DBFF] mb-2">{t("patents.architecture.applicationWindow")}</h4>
                    <div className="h-px bg-gradient-to-r from-transparent via-[#73DBFF]/50 to-transparent"></div>
                  </div>

                  {/* 极端工况应用 */}
                  <Card className="p-4 md:p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 hover:border-[#00b4d8]/50 hover:shadow-lg hover:shadow-[#0077b6]/15 transition-all duration-300 group lg:flex-1 lg:flex lg:flex-col lg:min-h-0">
                    <div className="flex items-start gap-3 md:gap-4 flex-1 min-h-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#73DBFF]/20 flex items-center justify-center group-hover:bg-[#73DBFF]/30 transition-colors flex-shrink-0">
                        <Plane className="w-5 h-5 md:w-6 md:h-6 text-[#73DBFF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-base text-white font-bold mb-1 md:mb-2">{t("patents.architecture.extremeConditions")}</h5>
                        <div className="space-y-1.5 text-base text-slate-400 leading-relaxed text-left">
                          <div>• {t("patents.architecture.extremeItem1")}</div>
                          <div>• {t("patents.architecture.extremeItem2")}</div>
                          <div>• {t("patents.architecture.extremeItem3")}</div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-2 md:hidden">
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-5 h-5 text-[#73DBFF]/60" />
                      <div className="h-8 w-px bg-gradient-to-b from-[#73DBFF]/40 via-[#73DBFF]/40 to-transparent"></div>
                    </div>
                  </div>

                  {/* 超导材料研究平台 */}
                  <Card className="p-4 md:p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 hover:border-[#00b4d8]/50 hover:shadow-lg hover:shadow-[#0077b6]/15 transition-all duration-300 group lg:flex-1 lg:flex lg:flex-col lg:min-h-0">
                    <div className="flex items-start gap-3 md:gap-4 flex-1 min-h-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#73DBFF]/20 flex items-center justify-center group-hover:bg-[#73DBFF]/30 transition-colors flex-shrink-0">
                        <Microscope className="w-5 h-5 md:w-6 md:h-6 text-[#73DBFF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-base text-white font-bold mb-1 md:mb-2">{t("patents.architecture.superconductorPlatform")}</h5>
                        <p className="text-base text-slate-400 leading-relaxed">
                          {t("patents.architecture.theoryExploration")}
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-2 md:hidden">
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-5 h-5 text-[#73DBFF]/60" />
                      <div className="h-8 w-px bg-gradient-to-b from-[#73DBFF]/40 via-[#73DBFF]/40 to-transparent"></div>
                    </div>
                  </div>

                  {/* 量子计算潜力 */}
                  <Card className="p-4 md:p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 hover:border-[#00b4d8]/50 hover:shadow-lg hover:shadow-[#0077b6]/15 transition-all duration-300 group lg:flex-1 lg:flex lg:flex-col lg:min-h-0">
                    <div className="flex items-start gap-3 md:gap-4 flex-1 min-h-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#73DBFF]/20 flex items-center justify-center group-hover:bg-[#73DBFF]/30 transition-colors flex-shrink-0">
                        <FlaskConical className="w-5 h-5 md:w-6 md:h-6 text-[#73DBFF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-base text-white font-bold mb-1 md:mb-2">{t("patents.architecture.quantumPotential")}</h5>
                        <p className="text-base text-slate-400 leading-relaxed">
                          {t("patents.architecture.visionPlanning")}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="evolution-path" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden scroll-mt-24">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(65, 105, 225, 0.35) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="page-h2 text-white mb-4">{t("patents.evolutionPath.sectionTitle")}</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t("patents.evolutionPath.sectionSubtitle")}</p>
          </div>

          {/* Four Stages - Horizontal Cards */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 01 */}
            <Card
              className={`p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 cursor-pointer transition-all hover:border-[#73DBFF]/60 ${expandedStage === 1 ? "md:col-span-2 lg:col-span-4 border-[#73DBFF]/60" : ""}`}
              onClick={() => setExpandedStage(expandedStage === 1 ? null : 1)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#002244] to-[#003366] flex items-center justify-center shadow-lg shadow-[#73DBFF]/30">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[#73DBFF] text-xs font-medium">Stage 01</div>
                  <div className="text-white font-bold">{t("patents.evolutionPath.stage01Title")}</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#73DBFF] transition-transform ${expandedStage === 1 ? "rotate-180" : ""}`}
                />
              </div>
              <p className="text-base text-slate-400 leading-relaxed">
                {t("patents.evolutionPath.stage01Desc")}
              </p>

              {expandedStage === 1 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-[#0077b6]/30">
                  <div>
                    <div className="text-[#73DBFF] text-base font-medium mb-2">{t("patents.evolutionPath.funcExtension")}</div>
                    <p className="text-base text-slate-300 leading-relaxed bg-[#002244]/50 p-4 rounded-lg">
                      {t("patents.evolutionPath.funcExtensionDescBefore")}
                      <strong className="text-white">{t("patents.evolutionPath.nonstickCoating")}</strong>
                      {t("patents.evolutionPath.funcExtensionDescAfter")}
                    </p>
                  </div>

                  <div>
                    <div className="text-[#73DBFF] text-base font-medium mb-3">{t("patents.evolutionPath.patentSupport")}</div>
                    <div className="space-y-2">
                      <div className="p-3 bg-[#002244]/50 rounded-lg">
                        <div className="text-base text-slate-500 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-slate-300">{t("patents.evolutionPath.patent1Title")}</div>
                        <div className="font-mono text-base text-slate-500 mt-1">{t("patents.evolutionPath.patent1No")}</div>
                      </div>
                      <div className="p-3 bg-[#002244]/50 rounded-lg">
                        <div className="text-base text-slate-500 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-slate-300">{t("patents.evolutionPath.patent2Title")}</div>
                        <div className="font-mono text-base text-slate-500 mt-1">{t("patents.evolutionPath.patent2No")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Stage 02 */}
            <Card
              className={`p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 cursor-pointer transition-all hover:border-[#73DBFF]/60 ${expandedStage === 2 ? "md:col-span-2 lg:col-span-4 border-[#73DBFF]/60" : ""}`}
              onClick={() => setExpandedStage(expandedStage === 2 ? null : 2)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#002244] to-[#003366] flex items-center justify-center shadow-lg shadow-[#73DBFF]/30">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[#73DBFF] text-xs font-medium">Stage 02</div>
                  <div className="text-white font-bold">{t("patents.evolutionPath.stage02Title")}</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#73DBFF] transition-transform ${expandedStage === 2 ? "rotate-180" : ""}`}
                />
              </div>
              <p className="text-base text-slate-400 leading-relaxed">
                {t("patents.evolutionPath.stage02Desc")}
              </p>

              {expandedStage === 2 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-[#0077b6]/30">
                  <div>
                    <div className="text-[#73DBFF] text-base font-medium mb-2">{t("patents.evolutionPath.techBranch")}</div>
                    <p className="text-base text-slate-300 leading-relaxed bg-[#002244]/50 p-4 rounded-lg">
                      {t("patents.evolutionPath.techBranchDesc")}
                    </p>
                  </div>

                  <div>
                    <div className="text-[#73DBFF] text-base font-medium mb-2">{t("patents.evolutionPath.typicalForms")}</div>
                    <p className="text-base text-slate-300 leading-relaxed bg-[#002244]/50 p-4 rounded-lg">
                      {t("patents.evolutionPath.typicalFormsDescBefore")}
                      <strong className="text-white">{t("patents.evolutionPath.thermalPadSubstrate")}</strong>
                      {t("patents.evolutionPath.typicalFormsDescAfter")}
                    </p>
                  </div>

                  <div>
                    <div className="text-[#73DBFF] text-base font-medium mb-3">{t("patents.evolutionPath.patentSupport")}</div>

                    <div className="mb-3">
                      <div className="text-base text-[#73DBFF]/90 font-medium mb-2">{t("patents.evolutionPath.diamondCopperGroup")}</div>
                      <div className="space-y-2">
                        <div className="p-3 bg-[#002244]/50 rounded-lg">
                          <div className="text-base text-slate-500 mb-1">{t("patents.evolutionPath.patentType")}</div>
                          <div className="text-base text-slate-300">{t("patents.evolutionPath.patent3Title")}</div>
                          <div className="font-mono text-base text-slate-500 mt-1">{t("patents.evolutionPath.patent3No")}</div>
                        </div>
                        <div className="p-3 bg-[#002244]/50 rounded-lg">
                          <div className="text-base text-slate-500 mb-1">{t("patents.evolutionPath.patentType")}</div>
                          <div className="text-base text-slate-300">{t("patents.evolutionPath.patent4Title")}</div>
                          <div className="font-mono text-base text-slate-500 mt-1">{t("patents.evolutionPath.patent4No")}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-base text-[#73DBFF]/90 font-medium mb-2">{t("patents.evolutionPath.flexibleThermal")}</div>
                      <div className="space-y-2">
                        <div className="p-3 bg-[#002244]/50 rounded-lg">
                          <div className="text-base text-slate-500 mb-1">{t("patents.evolutionPath.patentType")}</div>
                          <div className="text-base text-slate-300">
                            {t("patents.evolutionPath.patent5Title")}
                          </div>
                          <div className="font-mono text-base text-slate-500 mt-1">{t("patents.evolutionPath.patent5No")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Stage 03 */}
            <Card
              className={`p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 cursor-pointer transition-all hover:border-[#73DBFF]/60 ${expandedStage === 3 ? "md:col-span-2 lg:col-span-4 border-[#73DBFF]/60" : ""}`}
              onClick={() => setExpandedStage(expandedStage === 3 ? null : 3)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#002244] to-[#003366] flex items-center justify-center shadow-lg shadow-[#73DBFF]/30">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[#73DBFF] text-xs font-medium">Stage 03</div>
                  <div className="text-white font-bold">{t("patents.evolutionPath.stage03Title")}</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#73DBFF] transition-transform ${expandedStage === 3 ? "rotate-180" : ""}`}
                />
              </div>
              <p className="text-base text-slate-400 leading-relaxed">
                {t("patents.evolutionPath.stage03Desc")}
              </p>

              {expandedStage === 3 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-[#0077b6]/30">
                  <div>
                    <div className="text-[#73DBFF] text-base font-medium mb-2">{t("patents.evolutionPath.formDesc")}</div>
                    <p className="text-base text-slate-300 leading-relaxed bg-[#002244]/50 p-4 rounded-lg">
                      {t("patents.evolutionPath.formDescText")}
                    </p>
                  </div>

                  <div>
                    <div className="text-[#73DBFF] text-base font-medium mb-3">{t("patents.evolutionPath.patentSupport")}</div>

                    <div className="space-y-2">
                      <div className="p-3 bg-[#002244]/50 rounded-lg">
                        <div className="text-base text-slate-500 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-slate-300">
                          {t("patents.evolutionPath.patent6Title")}
                        </div>
                        <div className="font-mono text-base text-slate-500 mt-1">{t("patents.evolutionPath.patent6No")}</div>
                      </div>
                      <div className="p-3 bg-[#002244]/50 rounded-lg">
                        <div className="text-base text-slate-500 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-slate-300">{t("patents.evolutionPath.patent7Title")}</div>
                        <div className="font-mono text-base text-slate-500 mt-1">{t("patents.evolutionPath.patent7No")}</div>
                      </div>
                      <div className="p-3 bg-[#002244]/50 rounded-lg">
                        <div className="text-base text-slate-500 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-slate-300">{t("patents.evolutionPath.patent8Title")}</div>
                        <div className="font-mono text-base text-slate-500 mt-1">{t("patents.evolutionPath.patent8No")}</div>
                      </div>
                      <div className="p-3 bg-[#002244]/50 rounded-lg">
                        <div className="text-base text-slate-500 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-slate-300">{t("patents.evolutionPath.patent9Title")}</div>
                        <div className="font-mono text-base text-slate-500 mt-1">{t("patents.evolutionPath.patent9No")}</div>
                      </div>
                      <div className="p-3 bg-[#002244]/50 rounded-lg">
                        <div className="text-base text-slate-500 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-slate-300">{t("patents.evolutionPath.patent10Title")}</div>
                        <div className="font-mono text-base text-slate-500 mt-1">{t("patents.evolutionPath.patent10No")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Stage 04 */}
            <Card
              className={`p-6 bg-[#002244]/60 backdrop-blur-sm border-[#0077b6]/30 cursor-pointer transition-all hover:border-[#73DBFF]/60 ${expandedStage === 4 ? "md:col-span-2 lg:col-span-4 border-[#73DBFF]/60" : ""}`}
              onClick={() => setExpandedStage(expandedStage === 4 ? null : 4)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#002244] to-[#003366] flex items-center justify-center shadow-lg shadow-[#73DBFF]/30">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[#73DBFF] text-xs font-medium">Stage 04</div>
                  <div className="text-white font-bold">{t("patents.evolutionPath.stage04Title")}</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#73DBFF] transition-transform ${expandedStage === 4 ? "rotate-180" : ""}`}
                />
              </div>
              <p className="text-base text-slate-400 leading-relaxed">
                {t("patents.evolutionPath.stage04Desc")}
              </p>

              {expandedStage === 4 && (
                <div className="mt-6 pt-6 border-t border-[#0077b6]/30">
                  <p className="text-base text-slate-300 leading-relaxed bg-[#002244]/50 p-4 rounded-lg italic">
                    {t("patents.evolutionPath.stage04Explanation")}
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        {/* 借鉴首页的波浪光晕装饰 */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0077b6]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#00b4d8]/8 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="page-h2 text-white mb-4">{t("patents.platformCore.sectionTitle")}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{t("patents.platformCore.sectionSubtitle")}</p>
          </div>

          <Card className="max-w-5xl mx-auto p-10 bg-gradient-to-br from-[#002244]/80 to-[#003366]/70 backdrop-blur-sm border border-[#00b4d8]/30 ring-4 ring-[#0077b6]/15 shadow-xl shadow-[#0077b6]/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#002244] to-[#003366] flex items-center justify-center shadow-lg shadow-[#0077b6]/20 border border-[#00b4d8]/30">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-[#73DBFF] text-sm font-medium mb-1">Platform Core Technology</div>
                <h3 className="page-h3 text-white">{t("patents.platformCore.mainTitle")}</h3>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-8">
              {t("patents.platformCore.mainDesc")}
            </p>

            {/* Platform Core Principle Explanation */}
            <div className="p-8 bg-[#002244]/60 rounded-xl border border-[#0077b6]/30">
              <h4 className="text-[#73DBFF] font-semibold text-lg mb-6">{t("patents.platformCore.principleTitle")}</h4>

              <div className="space-y-4 text-base leading-relaxed text-slate-300">
                <p>{t("patents.platformCore.principleP1")}</p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <span className="text-[#73DBFF] font-mono font-semibold">sp³</span>{" "}
                    {t("patents.platformCore.sp3Role")}
                  </li>
                  <li>
                    <span className="text-[#73DBFF] font-mono font-semibold">sp²</span>{" "}
                    {t("patents.platformCore.sp2Role")}
                  </li>
                </ul>

                <p>
                  {t("patents.platformCore.principleP2")}
                  <strong className="text-white">{t("patents.platformCore.stressAnchor")}</strong>
                  {t("patents.platformCore.principleP2b")}
                </p>

                <div className="my-6 p-6 bg-gradient-to-br from-[#002244]/80 to-[#003366]/40 rounded-xl border border-[#0077b6]/30">
                  <h5 className="text-[#73DBFF] font-semibold text-base mb-5 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    {t("patents.platformCore.diagramTitle")}
                  </h5>

                  <div className="flex flex-col sm:flex-col md:grid md:grid-cols-3 gap-4">
                    {/* sp³ dominant */}
                    <div className="p-5 bg-[#002244]/60 rounded-lg border border-[#0077b6]/30">
                      <div className="text-[#73DBFF] font-mono font-semibold mb-3 text-base">
                        {t("patents.platformCore.domain1Title")}
                      </div>
                      <div className="text-slate-300 space-y-2 ml-4 text-base">
                        <div className="flex items-start gap-2">
                          <span className="text-[#73DBFF] mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain1a")}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#73DBFF] mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain1b")}</span>
                        </div>
                      </div>
                    </div>

                    {/* sp² dominant */}
                    <div className="p-5 bg-[#002244]/60 rounded-lg border border-[#0077b6]/30">
                      <div className="text-[#73DBFF] font-mono font-semibold mb-3 text-base">
                        {t("patents.platformCore.domain2Title")}
                      </div>
                      <div className="text-slate-300 space-y-2 ml-4 text-base">
                        <div className="flex items-start gap-2">
                          <span className="text-[#73DBFF] mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain2a")}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#73DBFF] mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain2b")}</span>
                        </div>
                      </div>
                    </div>

                    {/* Mixed state */}
                    <div className="p-5 bg-[#002244]/60 rounded-lg border border-[#0077b6]/30">
                      <div className="text-[#73DBFF] font-mono font-semibold mb-3 text-base">
                        {t("patents.platformCore.domain3Title")}
                      </div>
                      <div className="text-slate-300 space-y-2 ml-4 text-base">
                        <div className="flex items-start gap-2">
                          <span className="text-[#73DBFF] mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain3a")}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#73DBFF] mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain3b")}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                    {/* Control parameters */}
                    <div className="mt-5 pt-5 border-t border-[#0077b6]/30">
                      <p className="text-slate-400 mb-3 text-base">{t("patents.platformCore.tuningIntro")}</p>
                      <ul className="space-y-2 ml-4 text-base text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#73DBFF] font-bold">•</span>
                          <span>
                            <strong className="text-white">{t("patents.platformCore.tuning1")}</strong>
                            {t("patents.platformCore.tuning1Note")}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#73DBFF] font-bold">•</span>
                          <span>
                            <strong className="text-white">{t("patents.platformCore.tuning2")}</strong>
                            {t("patents.platformCore.tuning2Note")}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#73DBFF] font-bold">•</span>
                          <span>
                            <strong className="text-white">{t("patents.platformCore.tuning3")}</strong>
                          </span>
                        </li>
                      </ul>
                      <p className="text-slate-400 mt-3 text-base">{t("patents.platformCore.tuningOutro")}</p>
                    </div>
                </div>

                <p className="pt-4 border-t border-[#0077b6]/20 text-slate-200">
                  {t("patents.platformCore.platformConclusion")}
                  <strong className="text-[#73DBFF]">{t("patents.platformCore.platformName")}</strong>
                  {t("patents.platformCore.platformConclusionEnd")}
                </p>
              </div>
            </div>

            {/* 材料体系综合对比雷达图（浅底信息承载） */}
            <div className="mt-10 pt-8 border-t border-[#0077b6]/30">
              <div className="bg-[#F9FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h4 className="text-slate-900 font-semibold text-base mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#0077b6]" />
                  {t("patents.platformCore.radarChartTitle")}
                </h4>
                <MaterialComparisonRadarChart
                  variant="light"
                  labels={{
                    dim1: t("patents.platformCore.radarDim1"),
                    dim2: t("patents.platformCore.radarDim2"),
                    dim3: t("patents.platformCore.radarDim3"),
                    dim4: t("patents.platformCore.radarDim4"),
                    dim5: t("patents.platformCore.radarDim5"),
                    diamondCu: t("patents.platformCore.radarLabelDiamondCu"),
                    diamondSiC: t("patents.platformCore.radarLabelDiamondSiC"),
                    toSpike: t("patents.platformCore.radarLabelToSpike"),
                  }}
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0077b6]/15 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="page-h2 text-white mb-4">{t("patents.platformExtension.sectionTitle")}</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">{t("patents.platformExtension.sectionSubtitle")}</p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <Card className="p-8 bg-[#F9FAFC] border border-slate-200/80 shadow-sm">
              <p className="page-lead text-center text-slate-700">
                {t("patents.platformExtension.intro")}
              </p>
            </Card>
          </div>

          {/* Three exploration direction cards */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
            {/* Direction 1: Electronic state reconstruction */}
            <Card className="p-8 bg-gradient-to-br from-[#002244]/80 to-[#003366]/70 backdrop-blur-sm border-[#0077b6]/30 hover:border-[#73DBFF]/60 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#002244] to-[#003366] flex items-center justify-center shadow-lg shadow-[#73DBFF]/30 mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                {t("patents.platformExtension.superconductorP1")}
              </p>
              <p className="text-lg text-slate-400 leading-relaxed italic">
                {t("patents.platformExtension.superconductorP2")}
              </p>
            </Card>

            {/* Direction 2: Chaotic dynamics */}
            <Card className="p-8 bg-gradient-to-br from-[#002244]/80 to-[#003366]/70 backdrop-blur-sm border-[#0077b6]/30 hover:border-[#73DBFF]/60 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#002244] to-[#003366] flex items-center justify-center shadow-lg shadow-[#73DBFF]/30 mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                {t("patents.platformExtension.chaosP1")}
              </p>
              <p className="text-lg text-slate-400 leading-relaxed italic">
                {t("patents.platformExtension.chaosP2")}
              </p>
            </Card>

            {/* Direction 3: Physical computing */}
            <Card className="p-8 bg-gradient-to-br from-[#002244]/80 to-[#003366]/70 backdrop-blur-sm border-[#0077b6]/30 hover:border-[#73DBFF]/60 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#002244] to-[#003366] flex items-center justify-center shadow-lg shadow-[#73DBFF]/30 mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                {t("patents.platformExtension.quantumP1")}
              </p>
              <p className="text-lg text-slate-400 leading-relaxed italic">
                {t("patents.platformExtension.quantumP2")}
              </p>
            </Card>
          </div>

          {/* Disclaimer */}
          <Card className="max-w-5xl mx-auto p-6 bg-[#002244]/50 backdrop-blur-sm border-[#0077b6]/30">
            <p className="text-lg text-slate-300 leading-relaxed text-center italic">
              {t("patents.platformExtension.disclaimer")}
            </p>
          </Card>
        </div>
      </section>

      {/* Patent Cluster Value */}
      <section id="patent-cluster" className="py-20 relative overflow-hidden scroll-mt-24">
        {/* 借鉴首页的波浪光晕装饰 */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0077b6]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#00b4d8]/8 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="max-w-5xl mx-auto p-10 bg-gradient-to-br from-[#002244]/90 to-[#003366]/70 backdrop-blur-sm border border-[#00b4d8]/30 shadow-xl shadow-[#0077b6]/10">
            <div className="text-center mb-10">
              <h2 className="page-h2 text-white mb-4">{t("patents.patentCluster.title")}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0077b6] to-[#73DBFF] mx-auto rounded-full mb-6" />
              <p className="text-slate-300 leading-relaxed text-lg max-w-3xl mx-auto">
                {t("patents.patentCluster.intro")}
              </p>
            </div>

            <div className="space-y-8 mb-10">
              {/* 一、工程起点与功能延伸 */}
              <div className="p-6 bg-[#002244]/60 rounded-xl border border-[#0077b6]/30">
                <h3 className="text-[#73DBFF] font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#73DBFF]/20 flex items-center justify-center text-[#73DBFF] text-sm font-mono">
                    {t("patents.patentCluster.block1Num")}
                  </span>
                  {t("patents.patentCluster.block1Title")}
                </h3>
                <ul className="space-y-2 text-base text-slate-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-[#73DBFF]">•</span>
                    <span>{t("patents.patentCluster.block1Item")}</span>
                  </li>
                </ul>
              </div>

              {/* 二、功能材料阶段 */}
              <div className="p-6 bg-[#002244]/60 rounded-xl border border-[#0077b6]/30">
                <h3 className="text-[#73DBFF] font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#73DBFF]/20 flex items-center justify-center text-[#73DBFF] text-sm font-mono">
                    {t("patents.patentCluster.block2Num")}
                  </span>
                  {t("patents.patentCluster.block2Title")}
                </h3>
                <ul className="space-y-2 text-base text-slate-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-[#73DBFF]">•</span>
                    <span>{t("patents.patentCluster.block2Item1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#73DBFF]">•</span>
                    <span>{t("patents.patentCluster.block2Item2")}</span>
                  </li>
                </ul>
              </div>

              {/* 三、全碳体系阶段 */}
              <div className="p-6 bg-[#002244]/60 rounded-xl border border-[#0077b6]/30">
                <h3 className="text-[#73DBFF] font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#73DBFF]/20 flex items-center justify-center text-[#73DBFF] text-sm font-mono">
                    {t("patents.patentCluster.block3Num")}
                  </span>
                  {t("patents.patentCluster.block3Title")}
                </h3>
                <ul className="space-y-2 text-base text-slate-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-[#73DBFF]">•</span>
                    <span>{t("patents.patentCluster.block3Item1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#73DBFF]">•</span>
                    <span>{t("patents.patentCluster.block3Item2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#73DBFF]">•</span>
                    <span>{t("patents.patentCluster.block3Item3")}</span>
                  </li>
                </ul>
              </div>

              {/* 四、平台核心技术 */}
              <div className="p-6 bg-[#002244]/60 rounded-xl border border-[#0077b6]/30">
                <h3 className="text-[#73DBFF] font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#73DBFF]/20 flex items-center justify-center text-[#73DBFF] text-sm font-mono">
                    {t("patents.patentCluster.block4Num")}
                  </span>
                  {t("patents.patentCluster.block4Title")}
                </h3>
                <ul className="space-y-2 text-base text-slate-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-[#73DBFF]">•</span>
                    <span>{t("patents.patentCluster.block4Item")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 总结说明 */}
            <div className="p-6 bg-[#002244]/70 rounded-xl border border-[#0077b6]/30 mb-8">
              <p className="text-lg text-slate-300 leading-relaxed text-center">
                {t("patents.patentCluster.summary")}
                <strong className="text-[#73DBFF]">{t("patents.patentCluster.summaryMaterial")}</strong>、
                <strong className="text-[#73DBFF]">{t("patents.patentCluster.summaryDesign")}</strong>
                {t("patents.patentCluster.summaryTo")}
                <strong className="text-[#73DBFF]">{t("patents.patentCluster.summaryExtend")}</strong>
                {t("patents.patentCluster.summaryEnd")}
              </p>
            </div>

            {/* 统计数据 */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-[#002244]/60 rounded-xl border border-[#0077b6]/30">
                <div className="text-3xl font-bold text-[#73DBFF] mb-2">{t("patents.patentCluster.stat1Value")}</div>
                <div className="text-slate-400 text-sm">{t("patents.patentCluster.stat1Label")}</div>
              </div>
              <div className="p-6 bg-[#002244]/60 rounded-xl border border-[#0077b6]/30">
                <div className="text-3xl font-bold text-[#73DBFF] mb-2">{t("patents.patentCluster.stat2Value")}</div>
                <div className="text-slate-400 text-sm">{t("patents.patentCluster.stat2Label")}</div>
              </div>
              <div className="p-6 bg-[#002244]/60 rounded-xl border border-[#0077b6]/30">
                <div className="text-3xl font-bold text-[#73DBFF] mb-2">{t("patents.patentCluster.stat3Value")}</div>
                <div className="text-slate-400 text-sm">{t("patents.patentCluster.stat3Label")}</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="page-h2 text-white mb-4">{t("patents.cta.title")}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">{t("patents.cta.subtitle")}</p>
          <p className="text-slate-500 mb-6">{t("patents.cta.exploreCooperation")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href={`${prefix}/cooperation`}>
              <Button className="bg-[#0F2A5C] hover:bg-[#1E3A8A] text-white px-8 py-6 text-lg">{t("patents.cta.projectCooperation")}</Button>
            </Link>
            <a href="#patent-cluster">
              <Button
                variant="outline"
                className="border-slate-500 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg bg-transparent"
              >
                {t("patents.cta.viewPatentList")}
              </Button>
            </a>
            <Link href={`${prefix}/products`}>
              <Button
                variant="outline"
                className="border-slate-500 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg bg-transparent"
              >
                {t("patents.cta.learnProducts")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterNav locale={locale} />
      </div>
    </div>
  )
}
