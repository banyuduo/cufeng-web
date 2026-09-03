"use client"

import { useState } from "react"
import { Link } from "@/components/app-link"
import { usePathname } from "next/navigation"
import { isValidLocale, type Locale } from "@/lib/i18n"
import { useTranslations } from "@/components/translations-provider"
import { Sparkles, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { PageHero } from "@/components/page-hero"
import { MaterialComparisonRadarChart } from "@/components/material-comparison-radar-chart"

export default function PatentsPage() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null)
  const pathname = usePathname()
  const pathSegments = pathname.replace(/^\/+|\/+$/g, "").split("/")
  const localeFromPath = pathSegments[0]
  const locale = (isValidLocale(localeFromPath) ? localeFromPath : "zh") as Locale
  const t = useTranslations()
  const prefix = `/${locale}`
  const labelSep = locale === "zh" ? "：" : ": "

  return (
    <div className="min-h-screen bg-[#0B1F33]">
      <Navigation />

      <div className="overflow-x-hidden">

      <PageHero
        variant="dark"
        background="solid"
        title={t("patents.hero.title")}
        subtitle={t("patents.hero.subtitle")}
      >
        <div className="page-measure mt-5 space-y-3 text-center">
          <p className="page-body text-white/70">{t("patents.hero.desc")}</p>
          <p className="page-caption text-white/55">{t("patents.hero.dimensions")}</p>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="page-h2 text-white mb-4">{t("patents.evolution.sectionTitle")}</h2>
            {t("patents.evolution.sectionSubtitle") ? (
              <p className="page-lead text-white/70 max-w-3xl mx-auto">{t("patents.evolution.sectionSubtitle")}</p>
            ) : null}
          </div>

          {/* Evolution Path Flow */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop horizontal flow */}
            <div className="hidden lg:flex items-stretch justify-between gap-3 mb-12">
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-5 bg-white/[0.03] border border-white/12 text-center min-h-[120px] shrink-0">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.start")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.diamondTools")}</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-white/35 flex-shrink-0 self-center" />
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-5 bg-white/[0.03] border border-white/12 text-center min-h-[120px] shrink-0">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.step1")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.compositeSystem")}</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-white/35 flex-shrink-0 self-center" />
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-5 bg-white/[0.03] border border-white/12 text-center min-h-[120px] shrink-0">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.step2")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.allCarbon")}</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-white/35 flex-shrink-0 self-center" />
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-5 bg-white/[0.03] border border-white/12 text-center min-h-[120px] shrink-0">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.step3")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.functionalMigration")}</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-white/35 flex-shrink-0 self-center" />
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-5 bg-white/[0.03] border border-white/12 text-center min-h-[120px] shrink-0">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.step4")}</div>
                <div className="text-white font-bold text-sm leading-tight whitespace-pre-line break-words">{t("patents.evolution.physicsEvolution")}</div>
              </Card>
              <ArrowRight className="w-6 h-6 text-white/35 flex-shrink-0 self-center" />
              <Card className="flex-1 min-w-0 flex flex-col items-center justify-center p-5 bg-white/[0.03] border border-white/12 ring-1 ring-white/20 text-center min-h-[120px] shrink-0">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.end")}</div>
                <div className="text-white font-bold text-sm leading-tight whitespace-pre-line break-words">{t("patents.evolution.computingResource")}</div>
              </Card>
            </div>

            {/* Mobile/Tablet vertical flow */}
            <div className="lg:hidden space-y-2 mb-8">
              <Card className="flex flex-col items-center justify-center p-3.5 gap-1 bg-white/[0.03] border border-white/12 text-center">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.start")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.diamondTools")}</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-4 h-4 text-white/35" />
              </div>
              <Card className="flex flex-col items-center justify-center p-3.5 gap-1 bg-white/[0.03] border border-white/12 text-center">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.step1")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.compositeSystem")}</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-4 h-4 text-white/35" />
              </div>
              <Card className="flex flex-col items-center justify-center p-3.5 gap-1 bg-white/[0.03] border border-white/12 text-center">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.step2")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.allCarbon")}</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-4 h-4 text-white/35" />
              </div>
              <Card className="flex flex-col items-center justify-center p-3.5 gap-1 bg-white/[0.03] border border-white/12 text-center">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.step3")}</div>
                <div className="text-white font-bold text-sm leading-tight">{t("patents.evolution.functionalMigration")}</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-4 h-4 text-white/35" />
              </div>
              <Card className="flex flex-col items-center justify-center p-3.5 gap-1 bg-white/[0.03] border border-white/12 text-center">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.step4")}</div>
                <div className="text-white font-bold text-sm leading-tight break-words">{t("patents.evolution.physicsEvolution")}</div>
              </Card>
              <div className="flex justify-center">
                <ChevronDown className="w-4 h-4 text-white/35" />
              </div>
              <Card className="flex flex-col items-center justify-center p-3.5 gap-1 bg-white/[0.03] border border-white/12 text-center ring-1 ring-white/20">
                <div className="text-white/45 text-sm font-medium">{t("patents.evolution.end")}</div>
                <div className="text-white font-bold text-sm leading-tight break-words">{t("patents.evolution.computingResource")}</div>
              </Card>
            </div>

            {/* Core Logic Summary */}
            <Card className="p-5 sm:p-8 gap-2 bg-white/[0.03] border border-white/12">
              <h3 className="page-h3 text-white mb-3">{t("patents.evolution.coreLogicTitle")}</h3>
              <p className="page-lead text-white/70">
                {t("patents.evolution.coreLogicDesc")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* 技术演进架构图 */}
          <div className="max-w-6xl mx-auto">
            <div className="p-4 sm:p-6 lg:p-10 bg-white/[0.03]  rounded-3xl border border-white/12 ">
              <h2 className="page-h2 text-white text-center mb-8 md:mb-12">{t("patents.architecture.title")}</h2>
              
              <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:relative lg:items-stretch">
                {/* 左侧：演化路径 */}
                <div className="space-y-3 md:space-y-6 lg:flex lg:flex-col lg:gap-6 lg:flex-1 lg:min-h-0">
                  <div className="text-center mb-4 md:mb-6">
                    <h4 className="text-base lg:text-lg font-semibold text-white mb-2">{t("patents.architecture.evolutionPath")}</h4>
                    <div className="h-px bg-white/15"></div>
                  </div>
                  
                  {/* Stage 01 */}
                  <Card className="p-4 md:p-6 gap-2 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-colors group lg:flex-1 lg:flex lg:flex-col lg:min-h-0">
                    <div className="min-w-0">
                        <div className="page-caption text-white/45 mb-1">Stage 01</div>
                        <h5 className="page-h3 text-white mb-2">{t("patents.architecture.stage01Title")}</h5>
                        <p className="page-caption text-white/70">{t("patents.architecture.stage01Desc")}</p>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-0.5 md:hidden" aria-hidden>
                    <ChevronDown className="w-4 h-4 text-white/30" />
                  </div>

                  {/* Stage 02 */}
                  <Card className="p-4 md:p-6 gap-2 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-colors group lg:flex-1 lg:flex lg:flex-col lg:min-h-0">
                    <div className="min-w-0">
                        <div className="page-caption text-white/45 mb-1">Stage 02</div>
                        <h5 className="page-h3 text-white mb-2">{t("patents.architecture.stage02Title")}</h5>
                        <p className="page-caption text-white/70">{t("patents.architecture.stage02Desc")}</p>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-0.5 md:hidden" aria-hidden>
                    <ChevronDown className="w-4 h-4 text-white/30" />
                  </div>

                  {/* Stage 03 */}
                  <Card className="p-4 md:p-6 gap-2 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-colors group lg:flex-1 lg:flex lg:flex-col lg:min-h-0">
                    <div className="min-w-0">
                        <div className="page-caption text-white/45 mb-1">Stage 03</div>
                        <h5 className="page-h3 text-white mb-2">{t("patents.architecture.stage03Title")}</h5>
                        <p className="page-caption text-white/70">{t("patents.architecture.stage03Desc")}</p>
                    </div>
                  </Card>

                  {/* 移动端：演化路径到核心内核的连接 */}
                  <div className="flex justify-center py-1 md:hidden" aria-hidden>
                    <ChevronDown className="w-4 h-4 text-white/30" />
                  </div>
                </div>

                {/* 中间：核心内核 */}
                <div className="flex items-center justify-center relative lg:my-0 my-4 md:my-8">
                  {/* 桌面端连接线装饰 */}
                  <div className="hidden lg:block absolute left-0 top-1/2 w-1/2 h-0.5 bg-white/15 -translate-x-4"></div>
                  <div className="hidden lg:block absolute right-0 top-1/2 w-1/2 h-0.5 bg-white/15 translate-x-4"></div>
                  
                  <div className="relative z-10 w-full h-full flex items-center">
                    <Card className="w-full p-4 md:p-8 gap-3 bg-white/[0.04] border border-white/20 rounded-2xl">
                      <div className="text-center">
                          <div className="w-11 h-11 md:w-16 md:h-16 mx-auto mb-3 md:mb-5 rounded-xl bg-[#0F4C81] flex items-center justify-center">
                            <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-white" />
                          </div>
                          <h4 className="page-h3 text-white mb-3 md:mb-4">{t("patents.architecture.coreKernel")}</h4>
                          <div className="space-y-2 md:space-y-3">
                            <div className="px-3 py-2 md:px-4 md:py-2 bg-white/[0.03] rounded-lg border border-white/12">
                              <div className="text-white font-mono font-semibold text-base">{t("patents.architecture.chemicalBonding")}</div>
                            </div>
                            <div className="px-3 py-2 md:px-4 md:py-2 bg-white/[0.03] rounded-lg border border-white/12">
                              <div className="text-white font-mono font-semibold text-base">{t("patents.architecture.stressRegulation")}</div>
                            </div>
                          </div>
                        </div>
                    </Card>
                  </div>
                </div>

                {/* 移动端：核心内核到应用视窗的连接 */}
                <div className="flex justify-center py-1 md:hidden" aria-hidden>
                    <ChevronDown className="w-4 h-4 text-white/30" />
                </div>

                {/* 右侧：应用视窗 - 与左侧对称布局 */}
                <div className="space-y-3 md:space-y-6 lg:flex lg:flex-col lg:gap-6 lg:flex-1 lg:min-h-0">
                  <div className="text-center mb-4 md:mb-6">
                    <h4 className="text-base lg:text-lg font-semibold text-white mb-2">{t("patents.architecture.applicationWindow")}</h4>
                    <div className="h-px bg-white/15"></div>
                  </div>

                  {/* 极端工况应用 */}
                  <Card className="p-4 md:p-6 gap-2 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-colors group lg:flex-1 lg:flex lg:flex-col lg:min-h-0">
                    <div className="min-w-0 flex-1">
                        <h5 className="page-h3 text-white mb-2">{t("patents.architecture.extremeConditions")}</h5>
                        <div className="space-y-1.5 page-caption text-white/70 text-left">
                          <div>{t("patents.architecture.extremeItem1")}</div>
                          <div>{t("patents.architecture.extremeItem2")}</div>
                          <div>{t("patents.architecture.extremeItem3")}</div>
                        </div>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-0.5 md:hidden" aria-hidden>
                    <ChevronDown className="w-4 h-4 text-white/30" />
                  </div>

                  {/* 超导材料研究平台 */}
                  <Card className="p-4 md:p-6 gap-2 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-colors group lg:flex-1 lg:flex lg:flex-col lg:min-h-0">
                    <div className="min-w-0 flex-1">
                        <h5 className="page-h3 text-white mb-2">{t("patents.architecture.superconductorPlatform")}</h5>
                        <p className="page-caption text-white/70">
                          {t("patents.architecture.theoryExploration")}
                        </p>
                    </div>
                  </Card>

                  {/* 移动端连接箭头 */}
                  <div className="flex justify-center py-0.5 md:hidden" aria-hidden>
                    <ChevronDown className="w-4 h-4 text-white/30" />
                  </div>

                  {/* 量子计算潜力 */}
                  <Card className="p-4 md:p-6 gap-2 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-colors group lg:flex-1 lg:flex lg:flex-col lg:min-h-0">
                    <div className="min-w-0 flex-1">
                        <h5 className="page-h3 text-white mb-2">{t("patents.architecture.quantumPotential")}</h5>
                        <p className="page-caption text-white/70">
                          {t("patents.architecture.visionPlanning")}
                        </p>
                    </div>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="evolution-path" className="py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="page-h2 text-white mb-4">{t("patents.evolutionPath.sectionTitle")}</h2>
            <p className="page-lead text-white/70 max-w-2xl mx-auto">{t("patents.evolutionPath.sectionSubtitle")}</p>
          </div>

          {/* Four Stages - Horizontal Cards */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 01 */}
            <Card
              className={`p-4 sm:p-6 gap-3 bg-white/[0.03] border border-white/12 cursor-pointer touch-manipulation transition-all hover:border-white/25 ${expandedStage === 1 ? "md:col-span-2 lg:col-span-4 border-white/25" : ""}`}
              onClick={() => setExpandedStage(expandedStage === 1 ? null : 1)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="page-caption text-white/45">Stage 01</div>
                  <div className="page-h3 text-white">{t("patents.evolutionPath.stage01Title")}</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-white/40 transition-transform ${expandedStage === 1 ? "rotate-180" : ""}`}
                />
              </div>
              <p className="page-caption text-white/70">
                {t("patents.evolutionPath.stage01Desc")}
              </p>

              {expandedStage === 1 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-white/80 text-base font-medium mb-2">{t("patents.evolutionPath.funcExtension")}</div>
                    <p className="text-base text-white/75 leading-relaxed bg-white/[0.03] p-4 rounded-lg">
                      {t("patents.evolutionPath.funcExtensionDescBefore")}
                      <strong className="text-white">{t("patents.evolutionPath.nonstickCoating")}</strong>
                      {t("patents.evolutionPath.funcExtensionDescAfter")}
                    </p>
                  </div>

                  <div>
                    <div className="text-white/80 text-base font-medium mb-3">{t("patents.evolutionPath.patentSupport")}</div>
                    <div className="space-y-2">
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="text-base text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-white/75">{t("patents.evolutionPath.patent1Title")}</div>
                        <div className="font-mono text-base text-white/45 mt-1">{t("patents.evolutionPath.patent1No")}</div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="text-base text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-white/75">{t("patents.evolutionPath.patent2Title")}</div>
                        <div className="font-mono text-base text-white/45 mt-1">{t("patents.evolutionPath.patent2No")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Stage 02 */}
            <Card
              className={`p-4 sm:p-6 gap-3 bg-white/[0.03] border border-white/12 cursor-pointer touch-manipulation transition-all hover:border-white/25 ${expandedStage === 2 ? "md:col-span-2 lg:col-span-4 border-white/25" : ""}`}
              onClick={() => setExpandedStage(expandedStage === 2 ? null : 2)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="page-caption text-white/45">Stage 02</div>
                  <div className="page-h3 text-white">{t("patents.evolutionPath.stage02Title")}</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-white/40 transition-transform ${expandedStage === 2 ? "rotate-180" : ""}`}
                />
              </div>
              <p className="page-caption text-white/70">
                {t("patents.evolutionPath.stage02Desc")}
              </p>

              {expandedStage === 2 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-white/80 text-base font-medium mb-2">{t("patents.evolutionPath.techBranch")}</div>
                    <p className="text-base text-white/75 leading-relaxed bg-white/[0.03] p-4 rounded-lg">
                      {t("patents.evolutionPath.techBranchDesc")}
                    </p>
                  </div>

                  <div>
                    <div className="text-white/80 text-base font-medium mb-2">{t("patents.evolutionPath.typicalForms")}</div>
                    <p className="text-base text-white/75 leading-relaxed bg-white/[0.03] p-4 rounded-lg">
                      {t("patents.evolutionPath.typicalFormsDescBefore")}
                      <strong className="text-white">{t("patents.evolutionPath.thermalPadSubstrate")}</strong>
                      {t("patents.evolutionPath.typicalFormsDescAfter")}
                    </p>
                  </div>

                  <div>
                    <div className="text-white/80 text-base font-medium mb-3">{t("patents.evolutionPath.patentSupport")}</div>

                    <div className="mb-3">
                      <div className="text-base text-white/70 font-medium mb-2">{t("patents.evolutionPath.diamondCopperGroup")}</div>
                      <div className="space-y-2">
                        <div className="p-3 bg-white/[0.03] rounded-lg">
                          <div className="text-base text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                          <div className="text-base text-white/75">{t("patents.evolutionPath.patent3Title")}</div>
                          <div className="font-mono text-base text-white/45 mt-1">{t("patents.evolutionPath.patent3No")}</div>
                        </div>
                        <div className="p-3 bg-white/[0.03] rounded-lg">
                          <div className="text-base text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                          <div className="text-base text-white/75">{t("patents.evolutionPath.patent4Title")}</div>
                          <div className="font-mono text-base text-white/45 mt-1">{t("patents.evolutionPath.patent4No")}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-base text-white/70 font-medium mb-2">{t("patents.evolutionPath.flexibleThermal")}</div>
                      <div className="space-y-2">
                        <div className="p-3 bg-white/[0.03] rounded-lg">
                          <div className="text-base text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                          <div className="text-base text-white/75">
                            {t("patents.evolutionPath.patent5Title")}
                          </div>
                          <div className="font-mono text-base text-white/45 mt-1">{t("patents.evolutionPath.patent5No")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Stage 03 */}
            <Card
              className={`p-4 sm:p-6 gap-3 bg-white/[0.03] border border-white/12 cursor-pointer touch-manipulation transition-all hover:border-white/25 ${expandedStage === 3 ? "md:col-span-2 lg:col-span-4 border-white/25" : ""}`}
              onClick={() => setExpandedStage(expandedStage === 3 ? null : 3)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="page-caption text-white/45">Stage 03</div>
                  <div className="page-h3 text-white">{t("patents.evolutionPath.stage03Title")}</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-white/40 transition-transform ${expandedStage === 3 ? "rotate-180" : ""}`}
                />
              </div>
              <p className="page-caption text-white/70">
                {t("patents.evolutionPath.stage03Desc")}
              </p>

              {expandedStage === 3 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-white/80 text-base font-medium mb-2">{t("patents.evolutionPath.formDesc")}</div>
                    <p className="text-base text-white/75 leading-relaxed bg-white/[0.03] p-4 rounded-lg">
                      {t("patents.evolutionPath.formDescText")}
                    </p>
                  </div>

                  <div>
                    <div className="text-white/80 text-base font-medium mb-3">{t("patents.evolutionPath.patentSupport")}</div>

                    <div className="space-y-2">
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="text-base text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-white/75">
                          {t("patents.evolutionPath.patent6Title")}
                        </div>
                        <div className="font-mono text-base text-white/45 mt-1">{t("patents.evolutionPath.patent6No")}</div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="text-base text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-white/75">{t("patents.evolutionPath.patent7Title")}</div>
                        <div className="font-mono text-base text-white/45 mt-1">{t("patents.evolutionPath.patent7No")}</div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="text-base text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-white/75">{t("patents.evolutionPath.patent8Title")}</div>
                        <div className="font-mono text-base text-white/45 mt-1">{t("patents.evolutionPath.patent8No")}</div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="text-base text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-white/75">{t("patents.evolutionPath.patent9Title")}</div>
                        <div className="font-mono text-base text-white/45 mt-1">{t("patents.evolutionPath.patent9No")}</div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="text-base text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="text-base text-white/75">{t("patents.evolutionPath.patent10Title")}</div>
                        <div className="font-mono text-base text-white/45 mt-1">{t("patents.evolutionPath.patent10No")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Stage 04 */}
            <Card
              className={`p-4 sm:p-6 gap-3 bg-white/[0.03] border border-white/12 cursor-pointer touch-manipulation transition-all hover:border-white/25 ${expandedStage === 4 ? "md:col-span-2 lg:col-span-4 border-white/25" : ""}`}
              onClick={() => setExpandedStage(expandedStage === 4 ? null : 4)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="page-caption text-white/45">Stage 04</div>
                  <div className="page-h3 text-white">{t("patents.evolutionPath.stage04Title")}</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-white/40 transition-transform ${expandedStage === 4 ? "rotate-180" : ""}`}
                />
              </div>
              <p className="page-caption text-white/70">
                {t("patents.evolutionPath.stage04Desc")}
              </p>

              {expandedStage === 4 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-base text-white/75 leading-relaxed bg-white/[0.03] p-4 rounded-lg italic">
                    {t("patents.evolutionPath.stage04Explanation")}
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="page-h2 text-white mb-3 sm:mb-4">{t("patents.platformCore.sectionTitle")}</h2>
            <p className="page-lead text-white/70 max-w-2xl mx-auto">{t("patents.platformCore.sectionSubtitle")}</p>
          </div>

          <Card className="p-4 sm:p-6 md:p-10 bg-white/[0.03] border border-white/12">
            <h3 className="page-h3 text-white mb-4 sm:mb-8">{t("patents.platformCore.mainTitle")}</h3>

            <p className="text-white/75 leading-relaxed mb-4 sm:mb-8 text-sm lg:text-base">
              {t("patents.platformCore.mainDesc")}
            </p>

            {/* Platform Core Principle Explanation */}
            <div className="p-4 sm:p-6 md:p-8 bg-white/[0.03] rounded-xl border border-white/12">
              <h4 className="text-white font-semibold text-base lg:text-lg mb-4 sm:mb-6">{t("patents.platformCore.principleTitle")}</h4>

              <div className="space-y-3 sm:space-y-4 text-sm lg:text-base leading-relaxed text-white/75">
                <p>{t("patents.platformCore.principleP1")}</p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <span className="text-white font-mono font-semibold">sp³</span>{" "}
                    {t("patents.platformCore.sp3Role")}
                  </li>
                  <li>
                    <span className="text-white font-mono font-semibold">sp²</span>{" "}
                    {t("patents.platformCore.sp2Role")}
                  </li>
                </ul>

                <p>
                  {t("patents.platformCore.principleP2")}
                  <strong className="text-white">{t("patents.platformCore.stressAnchor")}</strong>
                  {t("patents.platformCore.principleP2b")}
                </p>

                <div className="my-4 sm:my-6 p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                  <h5 className="text-white font-semibold text-sm lg:text-base mb-3 sm:mb-5">
                    {t("patents.platformCore.diagramTitle")}
                  </h5>

                  {/* 移动端：三域关系简要示意 */}
                  <div className="flex md:hidden items-center justify-center gap-1 mb-4 py-2 px-3 bg-white/[0.03] rounded-lg border border-white/10">
                    <span className="text-white font-mono text-xs font-semibold">sp³</span>
                    <span className="text-white/45">→</span>
                    <span className="text-white font-mono text-xs font-semibold">sp²</span>
                    <span className="text-white/45">→</span>
                    <span className="text-white/75 text-xs">{t("patents.platformCore.domain3Title")}</span>
                  </div>

                  <div className="flex flex-col md:grid md:grid-cols-3 gap-3 sm:gap-4">
                    {/* sp³ dominant */}
                    <div className="p-4 sm:p-5 bg-white/[0.03] rounded-lg border border-white/12">
                      <div className="text-white font-mono font-semibold mb-2 sm:mb-3 text-sm lg:text-base">
                        {t("patents.platformCore.domain1Title")}
                      </div>
                      <div className="text-white/75 space-y-1.5 sm:space-y-2 ml-3 sm:ml-4 text-sm lg:text-base">
                        <div className="flex items-start gap-2">
                          <span className="text-white mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain1a")}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-white mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain1b")}</span>
                        </div>
                      </div>
                    </div>

                    {/* sp² dominant */}
                    <div className="p-4 sm:p-5 bg-white/[0.03] rounded-lg border border-white/12">
                      <div className="text-white font-mono font-semibold mb-2 sm:mb-3 text-sm lg:text-base">
                        {t("patents.platformCore.domain2Title")}
                      </div>
                      <div className="text-white/75 space-y-1.5 sm:space-y-2 ml-3 sm:ml-4 text-sm lg:text-base">
                        <div className="flex items-start gap-2">
                          <span className="text-white mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain2a")}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-white mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain2b")}</span>
                        </div>
                      </div>
                    </div>

                    {/* Mixed state */}
                    <div className="p-4 sm:p-5 bg-white/[0.03] rounded-lg border border-white/12">
                      <div className="text-white font-mono font-semibold mb-2 sm:mb-3 text-sm lg:text-base">
                        {t("patents.platformCore.domain3Title")}
                      </div>
                      <div className="text-white/75 space-y-1.5 sm:space-y-2 ml-3 sm:ml-4 text-sm lg:text-base">
                        <div className="flex items-start gap-2">
                          <span className="text-white mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain3a")}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-white mt-0.5">→</span>
                          <span>{t("patents.platformCore.domain3b")}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                    {/* Control parameters */}
                    <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-white/10">
                      <p className="text-white/65 mb-2 sm:mb-3 text-sm lg:text-base">{t("patents.platformCore.tuningIntro")}</p>
                      <ul className="space-y-1.5 sm:space-y-2 ml-3 sm:ml-4 text-sm lg:text-base text-white/75">
                        <li className="flex items-start gap-2">
                          <span className="text-white font-bold">•</span>
                          <span>
                            <strong className="text-white">{t("patents.platformCore.tuning1")}</strong>
                            {t("patents.platformCore.tuning1Note")}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-white font-bold">•</span>
                          <span>
                            <strong className="text-white">{t("patents.platformCore.tuning2")}</strong>
                            {t("patents.platformCore.tuning2Note")}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-white font-bold">•</span>
                          <span>
                            <strong className="text-white">{t("patents.platformCore.tuning3")}</strong>
                          </span>
                        </li>
                      </ul>
                      <p className="text-white/65 mt-2 sm:mt-3 text-sm lg:text-base">{t("patents.platformCore.tuningOutro")}</p>
                    </div>
                </div>

                <p className="pt-4 border-t border-white/10 text-white/80">
                  {t("patents.platformCore.platformConclusion")}
                  <strong className="text-white">{t("patents.platformCore.platformName")}</strong>
                  {t("patents.platformCore.platformConclusionEnd")}
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-8 border-t border-white/10">
              <h4 className="text-white font-semibold text-base lg:text-lg mb-5 text-center">
                {t("patents.platformCore.radarChartTitle")}
              </h4>
              <MaterialComparisonRadarChart
                  variant="dark"
                  labels={{
                    dim1: t("patents.platformCore.radarDim1"),
                    dim2: t("patents.platformCore.radarDim2"),
                    dim3: t("patents.platformCore.radarDim3"),
                    dim4: t("patents.platformCore.radarDim4"),
                    dim5: t("patents.platformCore.radarDim5"),
                    dim1Mobile: t("patents.platformCore.radarDim1Mobile"),
                    dim2Mobile: t("patents.platformCore.radarDim2Mobile"),
                    dim3Mobile: t("patents.platformCore.radarDim3Mobile"),
                    dim4Mobile: t("patents.platformCore.radarDim4Mobile"),
                    dim5Mobile: t("patents.platformCore.radarDim5Mobile"),
                    diamondCu: t("patents.platformCore.radarLabelDiamondCu"),
                    diamondSiC: t("patents.platformCore.radarLabelDiamondSiC"),
                    toSpike: t("patents.platformCore.radarLabelToSpike"),
                  }}
                />
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="page-h2 text-white mb-4">{t("patents.platformExtension.sectionTitle")}</h2>
            <p className="page-lead text-white/70 max-w-3xl mx-auto">{t("patents.platformExtension.sectionSubtitle")}</p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <Card className="p-5 sm:p-8 gap-3 bg-white/[0.04] border-white/12">
              <p className="page-lead text-center text-white/80">
                {t("patents.platformExtension.intro")}
              </p>
            </Card>
          </div>

          {/* Three exploration direction cards */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
            {/* Direction 1: Electronic state reconstruction */}
            <Card className="p-5 sm:p-8 gap-3 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-all">
              <p className="page-body text-white/75 mb-4">
                {t("patents.platformExtension.superconductorP1")}
              </p>
              <p className="page-body text-white/65 italic">
                {t("patents.platformExtension.superconductorP2")}
              </p>
            </Card>

            {/* Direction 2: Chaotic dynamics */}
            <Card className="p-5 sm:p-8 gap-3 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-all">
              <p className="page-body text-white/75 mb-4">
                {t("patents.platformExtension.chaosP1")}
              </p>
              <p className="page-body text-white/65 italic">
                {t("patents.platformExtension.chaosP2")}
              </p>
            </Card>

            {/* Direction 3: Physical computing */}
            <Card className="p-5 sm:p-8 gap-3 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-all">
              <p className="page-body text-white/75 mb-4">
                {t("patents.platformExtension.quantumP1")}
              </p>
              <p className="page-body text-white/65 italic">
                {t("patents.platformExtension.quantumP2")}
              </p>
            </Card>
          </div>

          {/* Disclaimer */}
          <Card className="max-w-3xl mx-auto p-4 sm:p-6 gap-2 bg-transparent border-0">
            <p className="page-body text-white/75 text-center italic">
              {t("patents.platformExtension.disclaimer")}
            </p>
          </Card>
        </div>
      </section>

      {/* 平台优势：从首页迁入，置于专利证据之前 */}
      <section id="platform-advantages" className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 relative overflow-hidden scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="page-h2 text-white text-center mb-8 sm:mb-10 lg:mb-12">
            {t("home.hero.platformAdvantageTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <Card className="p-5 sm:p-8 gap-3 bg-white/[0.03] border-white/12 text-left">
              <h3 className="page-h3 text-white mb-4">
                01 {t("home.features.innovation")}
              </h3>
              <ul className="space-y-2 text-sm lg:text-base text-white/75">
                <li>
                  <strong className="text-white/90">{t("home.features.labelAction")}{labelSep}</strong>
                  {t("home.features.innovationAction")}
                </li>
                <li>
                  <strong className="text-white/90">{t("home.features.labelValue")}{labelSep}</strong>
                  {t("home.features.innovationValue")}
                </li>
                <li>
                  <strong className="text-white/90">{t("home.features.labelEffect")}{labelSep}</strong>
                  {t("home.features.innovationEffect")}
                </li>
              </ul>
            </Card>
            <Card className="p-5 sm:p-8 gap-3 bg-white/[0.03] border-white/12 text-left">
              <h3 className="page-h3 text-white mb-4">
                02 {t("home.features.patents")}
              </h3>
              <ul className="space-y-2 text-sm lg:text-base text-white/75">
                <li>
                  <strong className="text-white/90">{t("home.features.labelLogic")}{labelSep}</strong>
                  {t("home.features.patentsLogic")}
                </li>
                <li>
                  <strong className="text-white/90">{t("home.features.labelStatus")}{labelSep}</strong>
                  {t("home.features.patentsStatus")}
                </li>
                <li>
                  <strong className="text-white/90">{t("home.features.labelWorth")}{labelSep}</strong>
                  {t("home.features.patentsValue")}
                </li>
              </ul>
            </Card>
            <Card className="p-5 sm:p-8 gap-3 bg-white/[0.03] border-white/12 text-left">
              <h3 className="page-h3 text-white mb-4">
                03 {t("home.features.industrial")}
              </h3>
              <ul className="space-y-2 text-sm lg:text-base text-white/75">
                <li>
                  <strong className="text-white/90">{t("home.features.labelTechStatus")}{labelSep}</strong>
                  {t("home.features.industrialStatus")}
                </li>
                <li>
                  <strong className="text-white/90">{t("home.features.labelMode")}{labelSep}</strong>
                  {t("home.features.industrialMode")}
                </li>
                <li>
                  <strong className="text-white/90">{t("home.features.labelVision")}{labelSep}</strong>
                  {t("home.features.industrialVision")}
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Patent Cluster Value */}
      <section id="patent-cluster" className="py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Card className="p-5 sm:p-8 md:p-10 gap-5 bg-white/[0.03] border border-white/12">
            <div className="text-center mb-10">
              <h2 className="page-h2 text-white mb-4">{t("patents.patentCluster.title")}</h2>
              <div className="w-12 h-px bg-white/25 mx-auto mb-6" />
              <p className="text-white/75 leading-relaxed text-lg max-w-3xl mx-auto">
                {t("patents.patentCluster.intro")}
              </p>
            </div>

            <div className="space-y-4 sm:space-y-8 mb-8 sm:mb-10">
              {/* 一、工程起点与功能延伸 */}
              <div className="p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm font-mono">
                    {t("patents.patentCluster.block1Num")}
                  </span>
                  {t("patents.patentCluster.block1Title")}
                </h3>
                <ul className="space-y-2 text-base text-white/75 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{t("patents.patentCluster.block1Item")}</span>
                  </li>
                </ul>
              </div>

              {/* 二、功能材料阶段 */}
              <div className="p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm font-mono">
                    {t("patents.patentCluster.block2Num")}
                  </span>
                  {t("patents.patentCluster.block2Title")}
                </h3>
                <ul className="space-y-2 text-base text-white/75 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{t("patents.patentCluster.block2Item1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{t("patents.patentCluster.block2Item2")}</span>
                  </li>
                </ul>
              </div>

              {/* 三、全碳体系阶段 */}
              <div className="p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm font-mono">
                    {t("patents.patentCluster.block3Num")}
                  </span>
                  {t("patents.patentCluster.block3Title")}
                </h3>
                <ul className="space-y-2 text-base text-white/75 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{t("patents.patentCluster.block3Item1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{t("patents.patentCluster.block3Item2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{t("patents.patentCluster.block3Item3")}</span>
                  </li>
                </ul>
              </div>

              {/* 四、平台核心技术 */}
              <div className="p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm font-mono">
                    {t("patents.patentCluster.block4Num")}
                  </span>
                  {t("patents.patentCluster.block4Title")}
                </h3>
                <ul className="space-y-2 text-base text-white/75 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{t("patents.patentCluster.block4Item")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 总结说明 */}
            <div className="p-6 bg-white/[0.03] rounded-xl border border-white/12 mb-8">
              <p className="page-body text-white/75 text-center">
                {t("patents.patentCluster.summary")}
                <strong className="text-white">{t("patents.patentCluster.summaryMaterial")}</strong>、
                <strong className="text-white">{t("patents.patentCluster.summaryDesign")}</strong>
                {t("patents.patentCluster.summaryTo")}
                <strong className="text-white">{t("patents.patentCluster.summaryExtend")}</strong>
                {t("patents.patentCluster.summaryEnd")}
              </p>
            </div>

            {/* 统计数据 */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                <div className="page-stat-value text-white mb-2">{t("patents.patentCluster.stat1Value")}</div>
                <div className="text-white/65 text-sm">{t("patents.patentCluster.stat1Label")}</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                <div className="page-stat-value text-white mb-2">{t("patents.patentCluster.stat2Value")}</div>
                <div className="text-white/65 text-sm">{t("patents.patentCluster.stat2Label")}</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                <div className="page-stat-value text-white mb-2">{t("patents.patentCluster.stat3Value")}</div>
                <div className="text-white/65 text-sm">{t("patents.patentCluster.stat3Label")}</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="page-h2 text-white mb-4">{t("patents.cta.title")}</h2>
          <p className="page-lead text-white/70 max-w-2xl mx-auto mb-8">{t("patents.cta.subtitle")}</p>
          <p className="text-white/50 mb-6">{t("patents.cta.exploreCooperation")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button asChild className="bg-[#0F4C81] hover:bg-[#163A5F] text-white px-5 py-3 text-base sm:px-8 sm:py-6 sm:text-lg min-h-[44px]">
              <Link href={`${prefix}/cooperation`}>{t("patents.cta.projectCooperation")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/25 text-white/80 hover:bg-white/10 px-5 py-3 text-base sm:px-8 sm:py-6 sm:text-lg bg-transparent min-h-[44px]"
            >
              <a href="#patent-cluster">{t("patents.cta.viewPatentList")}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/25 text-white/80 hover:bg-white/10 px-5 py-3 text-base sm:px-8 sm:py-6 sm:text-lg bg-transparent min-h-[44px]"
            >
              <Link href={`${prefix}/products`}>{t("patents.cta.learnProducts")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <FooterNav locale={locale} />
      </div>
    </div>
  )
}
