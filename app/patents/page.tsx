"use client"

import { useEffect, useState } from "react"
import { Link } from "@/components/app-link"
import { usePathname } from "next/navigation"
import { isValidLocale, type Locale } from "@/lib/i18n"
import { useTranslations } from "@/components/translations-provider"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { PageHero } from "@/components/page-hero"
import { MaterialComparisonRadarChart } from "@/components/material-comparison-radar-chart"
import { ArchitecturePanoramaDiagram } from "@/components/architecture-panorama-diagram"

export default function PatentsPage() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null)
  const [clusterOpen, setClusterOpen] = useState(false)
  const pathname = usePathname()
  const pathSegments = pathname.replace(/^\/+|\/+$/g, "").split("/")
  const localeFromPath = pathSegments[0]
  const locale = (isValidLocale(localeFromPath) ? localeFromPath : "zh") as Locale
  const t = useTranslations()
  const prefix = `/${locale}`

  useEffect(() => {
    const openIfHash = () => {
      if (window.location.hash === "#patent-cluster") {
        setClusterOpen(true)
      }
    }
    openIfHash()
    window.addEventListener("hashchange", openIfHash)
    return () => window.removeEventListener("hashchange", openIfHash)
  }, [])

  const cognitionSteps = [
    { label: t("patents.evolution.start"), title: t("patents.evolution.diamondTools") },
    { label: t("patents.evolution.step1"), title: t("patents.evolution.compositeSystem") },
    { label: t("patents.evolution.step2"), title: t("patents.evolution.allCarbon") },
    { label: t("patents.evolution.step3"), title: t("patents.evolution.functionalMigration") },
    { label: t("patents.evolution.step4"), title: t("patents.evolution.physicsEvolution") },
    { label: t("patents.evolution.end"), title: t("patents.evolution.computingResource") },
  ]

  return (
    <div className="page-stage min-h-screen">
      <Navigation />

      <div className="overflow-x-hidden">

      <PageHero
        variant="dark"
        background="stage"
        titleWeight="light"
        title={t("patents.hero.title")}
        subtitle={t("patents.hero.subtitle")}
      >
        <div className="page-measure mt-5 space-y-3 text-center">
          <p className="page-lead text-white/70">{t("patents.hero.desc")}</p>
          {t("patents.hero.dimensions") ? (
            <p className="page-caption text-white/55">{t("patents.hero.dimensions")}</p>
          ) : null}
        </div>
      </PageHero>

      <section className="py-8 sm:py-14 lg:py-14 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6 lg:mb-8">
            <h2 className="page-h2 text-white mb-4">{t("patents.evolution.sectionTitle")}</h2>
            {t("patents.evolution.sectionSubtitle") ? (
              <p className="page-body text-white/70 max-w-3xl mx-auto">{t("patents.evolution.sectionSubtitle")}</p>
            ) : null}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="hidden lg:block">
              <div className="relative flex">
                <div className="absolute left-[8%] right-[8%] top-1.5 h-px bg-white/15" />
                {cognitionSteps.map((step) => (
                  <div key={step.label} className="relative flex-1 min-w-0 px-2 text-center">
                    <div className="mx-auto mb-4 h-2.5 w-2.5 rounded-full bg-[#5BA3D4] ring-4 ring-[#0B1F33]" />
                    <p className="page-caption text-white/45 mb-1">{step.label}</p>
                    <p className="page-caption text-white whitespace-pre-line leading-snug">{step.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:hidden border-l border-white/15 pl-5 space-y-5">
              {cognitionSteps.map((step) => (
                <div key={step.label} className="relative">
                  <div className="absolute -left-[1.41rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[#5BA3D4]" />
                  <p className="page-caption text-white/45 mb-0.5">{step.label}</p>
                  <p className="page-body text-white whitespace-pre-line leading-snug">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-14 lg:py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6 lg:mb-8">
            <h2 className="page-h2 text-white">{t("patents.architecture.title")}</h2>
          </div>
          <ArchitecturePanoramaDiagram
            strings={{
              evolutionPath: t("patents.architecture.evolutionPath"),
              stage01Title: t("patents.architecture.stage01Title"),
              stage01Desc: t("patents.architecture.stage01Desc"),
              stage02Title: t("patents.architecture.stage02Title"),
              stage02Desc: t("patents.architecture.stage02Desc"),
              stage03Title: t("patents.architecture.stage03Title"),
              stage03Desc: t("patents.architecture.stage03Desc"),
              coreKernel: t("patents.architecture.coreKernel"),
              chemicalBonding: t("patents.architecture.chemicalBonding"),
              stressRegulation: t("patents.architecture.stressRegulation"),
              applicationWindow: t("patents.architecture.applicationWindow"),
              extremeConditions: t("patents.architecture.extremeConditions"),
              extremeItem1: t("patents.architecture.extremeItem1"),
              extremeItem2: t("patents.architecture.extremeItem2"),
              extremeItem3: t("patents.architecture.extremeItem3"),
              superconductorPlatform: t("patents.architecture.superconductorPlatform"),
              theoryExploration: t("patents.architecture.theoryExploration"),
              quantumPotential: t("patents.architecture.quantumPotential"),
              visionPlanning: t("patents.architecture.visionPlanning"),
            }}
          />
        </div>
      </section>

      <section id="evolution-path" className="py-8 sm:py-14 lg:py-14 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6 lg:mb-8">
            <h2 className="page-h2 text-white mb-4">{t("patents.evolutionPath.sectionTitle")}</h2>
            <p className="page-body text-white/70 max-w-2xl mx-auto">{t("patents.evolutionPath.sectionSubtitle")}</p>
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
              <p className="page-body text-white/70">
                {t("patents.evolutionPath.stage01Desc")}
              </p>

              {expandedStage === 1 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="page-caption text-white/80 font-medium mb-2">{t("patents.evolutionPath.funcExtension")}</div>
                    <p className="page-body text-white/70 bg-white/[0.03] p-4 rounded-lg">
                      {t("patents.evolutionPath.funcExtensionDescBefore")}
                      <strong className="text-white">{t("patents.evolutionPath.nonstickCoating")}</strong>
                      {t("patents.evolutionPath.funcExtensionDescAfter")}
                    </p>
                  </div>

                  <div>
                    <div className="page-caption text-white/80 font-medium mb-3">{t("patents.evolutionPath.patentSupport")}</div>
                    <div className="space-y-2">
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="page-caption text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="page-caption text-white/75">{t("patents.evolutionPath.patent1Title")}</div>
                        <div className="page-caption font-mono text-xs text-white/45 mt-1">{t("patents.evolutionPath.patent1No")}</div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="page-caption text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="page-caption text-white/75">{t("patents.evolutionPath.patent2Title")}</div>
                        <div className="page-caption font-mono text-xs text-white/45 mt-1">{t("patents.evolutionPath.patent2No")}</div>
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
              <p className="page-body text-white/70">
                {t("patents.evolutionPath.stage02Desc")}
              </p>

              {expandedStage === 2 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="page-caption text-white/80 font-medium mb-2">{t("patents.evolutionPath.techBranch")}</div>
                    <p className="page-body text-white/70 bg-white/[0.03] p-4 rounded-lg">
                      {t("patents.evolutionPath.techBranchDesc")}
                    </p>
                  </div>

                  <div>
                    <div className="page-caption text-white/80 font-medium mb-2">{t("patents.evolutionPath.typicalForms")}</div>
                    <p className="page-body text-white/70 bg-white/[0.03] p-4 rounded-lg">
                      {t("patents.evolutionPath.typicalFormsDescBefore")}
                      <strong className="text-white">{t("patents.evolutionPath.thermalPadSubstrate")}</strong>
                      {t("patents.evolutionPath.typicalFormsDescAfter")}
                    </p>
                  </div>

                  <div>
                    <div className="page-caption text-white/80 font-medium mb-3">{t("patents.evolutionPath.patentSupport")}</div>

                    <div className="mb-3">
                      <div className="page-caption text-white/70 font-medium mb-2">{t("patents.evolutionPath.diamondCopperGroup")}</div>
                      <div className="space-y-2">
                        <div className="p-3 bg-white/[0.03] rounded-lg">
                          <div className="page-caption text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                          <div className="page-caption text-white/75">{t("patents.evolutionPath.patent3Title")}</div>
                          <div className="page-caption font-mono text-xs text-white/45 mt-1">{t("patents.evolutionPath.patent3No")}</div>
                        </div>
                        <div className="p-3 bg-white/[0.03] rounded-lg">
                          <div className="page-caption text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                          <div className="page-caption text-white/75">{t("patents.evolutionPath.patent4Title")}</div>
                          <div className="page-caption font-mono text-xs text-white/45 mt-1">{t("patents.evolutionPath.patent4No")}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="page-caption text-white/70 font-medium mb-2">{t("patents.evolutionPath.flexibleThermal")}</div>
                      <div className="space-y-2">
                        <div className="p-3 bg-white/[0.03] rounded-lg">
                          <div className="page-caption text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                          <div className="page-caption text-white/75">
                            {t("patents.evolutionPath.patent5Title")}
                          </div>
                          <div className="page-caption font-mono text-xs text-white/45 mt-1">{t("patents.evolutionPath.patent5No")}</div>
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
              <p className="page-body text-white/70">
                {t("patents.evolutionPath.stage03Desc")}
              </p>

              {expandedStage === 3 && (
                <div className="mt-6 space-y-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="page-caption text-white/80 font-medium mb-2">{t("patents.evolutionPath.formDesc")}</div>
                    <p className="page-body text-white/70 bg-white/[0.03] p-4 rounded-lg">
                      {t("patents.evolutionPath.formDescText")}
                    </p>
                  </div>

                  <div>
                    <div className="page-caption text-white/80 font-medium mb-3">{t("patents.evolutionPath.patentSupport")}</div>

                    <div className="space-y-2">
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="page-caption text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="page-caption text-white/75">
                          {t("patents.evolutionPath.patent6Title")}
                        </div>
                        <div className="page-caption font-mono text-xs text-white/45 mt-1">{t("patents.evolutionPath.patent6No")}</div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="page-caption text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="page-caption text-white/75">{t("patents.evolutionPath.patent7Title")}</div>
                        <div className="page-caption font-mono text-xs text-white/45 mt-1">{t("patents.evolutionPath.patent7No")}</div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="page-caption text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="page-caption text-white/75">{t("patents.evolutionPath.patent8Title")}</div>
                        <div className="page-caption font-mono text-xs text-white/45 mt-1">{t("patents.evolutionPath.patent8No")}</div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="page-caption text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="page-caption text-white/75">{t("patents.evolutionPath.patent9Title")}</div>
                        <div className="page-caption font-mono text-xs text-white/45 mt-1">{t("patents.evolutionPath.patent9No")}</div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <div className="page-caption text-white/45 mb-1">{t("patents.evolutionPath.patentType")}</div>
                        <div className="page-caption text-white/75">{t("patents.evolutionPath.patent10Title")}</div>
                        <div className="page-caption font-mono text-xs text-white/45 mt-1">{t("patents.evolutionPath.patent10No")}</div>
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
              <p className="page-body text-white/70">
                {t("patents.evolutionPath.stage04Desc")}
              </p>

              {expandedStage === 4 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="page-body text-white/70 bg-white/[0.03] p-4 rounded-lg max-w-3xl">
                    {t("patents.evolutionPath.stage04Explanation")}
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-14 lg:py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-14">
            <h2 className="page-h2 text-white mb-4">{t("patents.platformCore.sectionTitle")}</h2>
            <p className="page-body text-white/70 max-w-2xl mx-auto">{t("patents.platformCore.sectionSubtitle")}</p>
          </div>

          <div className="max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
            <h3 className="page-h3 text-white mb-3 sm:mb-4">{t("patents.platformCore.mainTitle")}</h3>
            <p className="page-body text-white/75 mb-8 sm:mb-10">{t("patents.platformCore.mainDesc")}</p>

            <h3 className="page-h3 text-white mb-3 sm:mb-4">{t("patents.platformCore.principleP1")}</h3>
            <div className="space-y-2 mb-6 sm:mb-8">
              <p className="page-body text-white/75">
                <span className="text-white font-medium">sp³</span>{" "}
                {t("patents.platformCore.sp3Role")}
              </p>
              <p className="page-body text-white/75">
                <span className="text-white font-medium">sp²</span>{" "}
                {t("patents.platformCore.sp2Role")}
              </p>
            </div>
            <p className="page-body text-white/75">
              {t("patents.platformCore.principleP2")}
              <strong className="text-white">{t("patents.platformCore.stressAnchor")}</strong>
              {t("patents.platformCore.principleP2b")}
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h3 className="page-h3 text-white text-center mb-6 sm:mb-8">
              {t("patents.platformCore.diagramTitle")}
            </h3>
            <div className="grid md:grid-cols-3 gap-3 sm:gap-5">
              <div className="p-5 sm:p-6 bg-white/[0.03] rounded-lg border border-white/12">
                <div className="h-px w-8 bg-white/30 mb-4" />
                <h4 className="page-h4 text-white mb-3">
                  {t("patents.platformCore.domain1Title")}
                </h4>
                <p className="page-body text-white/70 mb-2">{t("patents.platformCore.domain1a")}</p>
                <p className="page-caption text-white/50">{t("patents.platformCore.domain1b")}</p>
              </div>
              <div className="p-5 sm:p-6 bg-white/[0.03] rounded-lg border border-white/12">
                <div className="h-px w-8 bg-white/30 mb-4" />
                <h4 className="page-h4 text-white mb-3">
                  {t("patents.platformCore.domain2Title")}
                </h4>
                <p className="page-body text-white/70 mb-2">{t("patents.platformCore.domain2a")}</p>
                <p className="page-caption text-white/50">{t("patents.platformCore.domain2b")}</p>
              </div>
              <div className="p-5 sm:p-6 bg-white/[0.03] rounded-lg border border-white/12">
                <div className="h-px w-8 bg-white/30 mb-4" />
                <h4 className="page-h4 text-white mb-3">
                  {t("patents.platformCore.domain3Title")}
                </h4>
                <p className="page-body text-white/70 mb-2">{t("patents.platformCore.domain3a")}</p>
                <p className="page-caption text-white/50">{t("patents.platformCore.domain3b")}</p>
              </div>
            </div>
          </div>

          <p className="page-body text-white/55 text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            {t("patents.platformCore.tuningIntro")}{" "}
            {t("patents.platformCore.tuning1")}
            {t("patents.platformCore.tuning1Note")}
            <span className="text-white/25"> · </span>
            {t("patents.platformCore.tuning2")}
            {t("patents.platformCore.tuning2Note")}
            <span className="text-white/25"> · </span>
            {t("patents.platformCore.tuning3")}
            {" "}
            {t("patents.platformCore.tuningOutro")}
          </p>

          <div className="mb-12 sm:mb-14">
            <h3 className="page-h3 text-white mb-5 text-center">
              {t("patents.platformCore.radarChartTitle")}
            </h3>
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

          <p className="page-body text-white/70 max-w-3xl mx-auto text-center italic border-t border-white/10 pt-8 sm:pt-10">
            {t("patents.platformCore.platformConclusion")}
            <strong className="text-white not-italic font-medium">{t("patents.platformCore.platformName")}</strong>
            {t("patents.platformCore.platformConclusionEnd")}
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-14 lg:py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6 lg:mb-8">
            <h2 className="page-h2 text-white mb-4">{t("patents.platformExtension.sectionTitle")}</h2>
            <p className="page-body text-white/70 max-w-3xl mx-auto">{t("patents.platformExtension.sectionSubtitle")}</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-12">
            <Card className="p-5 sm:p-8 gap-3 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-all">
              <p className="page-body text-white/75 mb-4">
                {t("patents.platformExtension.superconductorP1")}
              </p>
              <p className="page-caption text-white/50 border-l border-white/15 pl-3">
                {t("patents.platformExtension.superconductorP2")}
              </p>
            </Card>

            <Card className="p-5 sm:p-8 gap-3 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-all">
              <p className="page-body text-white/75 mb-4">
                {t("patents.platformExtension.chaosP1")}
              </p>
              <p className="page-caption text-white/50 border-l border-white/15 pl-3">
                {t("patents.platformExtension.chaosP2")}
              </p>
            </Card>

            <Card className="p-5 sm:p-8 gap-3 bg-white/[0.03] border border-white/12 hover:border-white/25 transition-all">
              <p className="page-body text-white/75 mb-4">
                {t("patents.platformExtension.quantumP1")}
              </p>
              <p className="page-caption text-white/50 border-l border-white/15 pl-3">
                {t("patents.platformExtension.quantumP2")}
              </p>
            </Card>
          </div>

          <p className="page-caption text-white/55 text-center italic max-w-3xl mx-auto">
            {t("patents.platformExtension.disclaimer")}
          </p>
        </div>
      </section>

      {/* 平台优势：从首页迁入，置于专利证据之前 */}
      <section id="platform-advantages" className="py-8 sm:py-14 lg:py-14 px-6 lg:px-8 relative overflow-hidden scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-5 sm:mb-6 lg:mb-8">
            <h2 className="page-h2 text-white">{t("home.hero.platformAdvantageTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6 gap-2 bg-white/[0.03] border-white/12 text-left">
              <h3 className="page-h3 text-white mb-2">
                01 {t("home.features.innovation")}
              </h3>
              <p className="page-body text-white/75 mb-2">{t("home.features.innovationAction")}</p>
              <p className="page-caption text-white/50">{t("home.features.innovationEffect")}</p>
            </Card>
            <Card className="p-4 sm:p-6 gap-2 bg-white/[0.03] border-white/12 text-left">
              <h3 className="page-h3 text-white mb-2">
                02 {t("home.features.patents")}
              </h3>
              <p className="page-body text-white/75 mb-2">{t("home.features.patentsStatus")}</p>
              <p className="page-caption text-white/50">{t("home.features.patentsValue")}</p>
            </Card>
            <Card className="p-4 sm:p-6 gap-2 bg-white/[0.03] border-white/12 text-left">
              <h3 className="page-h3 text-white mb-2">
                03 {t("home.features.industrial")}
              </h3>
              <p className="page-body text-white/75 mb-2">{t("home.features.industrialStatus")}</p>
              <p className="page-caption text-white/50">{t("home.features.industrialMode")}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Patent Cluster Value */}
      <section id="patent-cluster" className="py-8 sm:py-14 lg:py-14 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-5 sm:mb-6 lg:mb-8">
              <h2 className="page-h2 text-white mb-4">{t("patents.patentCluster.title")}</h2>
              <p className="page-body text-white/70 max-w-3xl mx-auto">
                {t("patents.patentCluster.intro")}
              </p>
              <button
                type="button"
                onClick={() => setClusterOpen((open) => !open)}
                className="mt-5 inline-flex items-center gap-2 page-caption text-white/70 hover:text-white min-h-[44px] px-3"
                aria-expanded={clusterOpen}
              >
                {clusterOpen ? t("patents.patentCluster.collapseList") : t("patents.patentCluster.expandList")}
                <ChevronDown className={`w-4 h-4 transition-transform ${clusterOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            {clusterOpen ? (
            <>
            <div className="space-y-4 sm:space-y-8 mb-8 sm:mb-10">
              {/* 一、工程起点与功能延伸 */}
              <div className="p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                <h3 className="page-h3 text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm font-mono">
                    {t("patents.patentCluster.block1Num")}
                  </span>
                  {t("patents.patentCluster.block1Title")}
                </h3>
                <ul className="space-y-2 page-body text-white/75 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{t("patents.patentCluster.block1Item")}</span>
                  </li>
                </ul>
              </div>

              {/* 二、功能材料阶段 */}
              <div className="p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                <h3 className="page-h3 text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm font-mono">
                    {t("patents.patentCluster.block2Num")}
                  </span>
                  {t("patents.patentCluster.block2Title")}
                </h3>
                <ul className="space-y-2 page-body text-white/75 ml-11">
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
                <h3 className="page-h3 text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm font-mono">
                    {t("patents.patentCluster.block3Num")}
                  </span>
                  {t("patents.patentCluster.block3Title")}
                </h3>
                <ul className="space-y-2 page-body text-white/75 ml-11">
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
                <h3 className="page-h3 text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm font-mono">
                    {t("patents.patentCluster.block4Num")}
                  </span>
                  {t("patents.patentCluster.block4Title")}
                </h3>
                <ul className="space-y-2 page-body text-white/75 ml-11">
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
                <div className="page-caption text-white/65">{t("patents.patentCluster.stat1Label")}</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                <div className="page-stat-value text-white mb-2">{t("patents.patentCluster.stat2Value")}</div>
                <div className="page-caption text-white/65">{t("patents.patentCluster.stat2Label")}</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/[0.03] rounded-xl border border-white/12">
                <div className="page-stat-value text-white mb-2">{t("patents.patentCluster.stat3Value")}</div>
                <div className="page-caption text-white/65">{t("patents.patentCluster.stat3Label")}</div>
              </div>
            </div>
            </>
            ) : null}
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-14 lg:py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="page-h2 text-white mb-4">{t("patents.cta.title")}</h2>
          <p className="page-body text-white/70 max-w-2xl mx-auto mb-8">{t("patents.cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button asChild className="page-btn-primary bg-[#2A7FC4] hover:bg-[#1B5F96] text-white px-5 py-3 text-base sm:px-8 sm:py-6 sm:text-lg min-h-[44px] h-auto whitespace-normal leading-snug">
              <Link href={`${prefix}/cooperation`}>{t("patents.cta.projectCooperation")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/35 text-white/80 hover:bg-white/10 px-5 py-3 text-base sm:px-8 sm:py-6 sm:text-lg bg-transparent min-h-[44px] h-auto whitespace-normal leading-snug"
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
