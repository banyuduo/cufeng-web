"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, ArrowRight, Layers, TrendingUp, Zap } from "lucide-react"
import { isValidLocale, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FooterNav } from "@/components/footer-nav"
import { Navigation } from "@/components/navigation"

export default function DiamondCopperPage() {
  const pathname = usePathname()
  const pathSegments = pathname.replace(/^\/+|\/+$/g, "").split("/")
  const localeFromPath = pathSegments[0]
  const locale = (isValidLocale(localeFromPath) ? localeFromPath : "zh") as Locale
  const t = getTranslations(locale)
  const prefix = `/${locale}`

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`${prefix}/products`}
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-sky-600 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("products.backToProducts")}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-600 flex items-center justify-center">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <div className="px-3 py-1 bg-sky-600 rounded-full text-xs font-medium text-white">
                  {t("products.diamondCopper.hero.badge")}
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">{t("products.diamondCopper.hero.title")}</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t("products.diamondCopper.hero.intro")}
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-sky-50 to-white border-sky-200 shadow-xl">
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-slate-200">
                  <div className="text-5xl font-bold text-sky-600 mb-2">680</div>
                  <div className="text-sm text-slate-600">{t("products.diamondCopper.hero.achievedLabel")}</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
                    <span className="text-sm text-slate-700">{t("products.diamondCopper.hero.cvdDiamond")}</span>
                    <span className="font-semibold text-slate-900">1000-2000</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-sky-100 rounded-lg border-2 border-sky-600">
                    <span className="text-sm font-medium text-slate-900">{t("products.diamondCopper.hero.tospikePremium")}</span>
                    <span className="font-bold text-sky-600 text-lg">1200+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
                    <span className="text-sm text-slate-700">{t("products.diamondCopper.hero.traditionalDiamondCu")}</span>
                    <span className="font-semibold text-slate-900">~600</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
                    <span className="text-sm text-slate-700">{t("products.diamondCopper.hero.pureCopper")}</span>
                    <span className="font-semibold text-slate-900">~400</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Prospects */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">{t("products.diamondCopper.applicationProspects.title")}</h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">{t("products.diamondCopper.applicationProspects.card1Title")}</h3>
              <p className="text-slate-600 mb-6">
                {t("products.diamondCopper.applicationProspects.card1Desc")}
              </p>
              <Link
                href={`${prefix}/applications`}
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold"
              >
                {t("products.diamondCopper.applicationProspects.viewApplications")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">{t("products.diamondCopper.applicationProspects.card2Title")}</h3>
              <p className="text-slate-600 mb-6">
                {t("products.diamondCopper.applicationProspects.card2Desc")}
              </p>
              <Link
                href={`${prefix}/cooperation`}
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold"
              >
                {t("products.diamondCopper.applicationProspects.cooperateWithUs")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">{t("products.diamondCopper.productLines.title")}</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Line A */}
            <Card className="p-10 bg-slate-50 border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-sky-600" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-slate-900">{t("products.diamondCopper.productLines.lineA.title")}</h3>
                <div className="px-3 py-1 bg-slate-300 rounded-full text-xs font-semibold text-slate-900">{t("products.diamondCopper.productLines.lineA.badge")}</div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("products.diamondCopper.productLines.lineA.desc")}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">{t("products.diamondCopper.productLines.lineA.thermalConductivity")}</span>
                    <span className="font-semibold text-sky-600">{t("products.diamondCopper.productLines.lineA.thermalConductivityValue")}</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "70%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">{t("products.diamondCopper.productLines.lineA.costAdvantage")}</span>
                    <span className="font-semibold text-sky-600">{t("products.diamondCopper.productLines.lineA.costAdvantageValue")}</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "95%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">{t("products.diamondCopper.productLines.lineA.batchProduction")}</span>
                    <span className="font-semibold text-sky-600">{t("products.diamondCopper.productLines.lineA.batchProductionValue")}</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-semibold mb-3 text-slate-900">{t("products.diamondCopper.productLines.lineA.applicationScenarios")}</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    {t("products.diamondCopper.productLines.lineA.scenario1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    {t("products.diamondCopper.productLines.lineA.scenario2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    {t("products.diamondCopper.productLines.lineA.scenario3")}
                  </li>
                </ul>
              </div>
            </Card>

            {/* Product Line B */}
            <Card className="p-10 bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-sky-600 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-slate-900">{t("products.diamondCopper.productLines.lineB.title")}</h3>
                <div className="px-3 py-1 bg-sky-600 rounded-full text-xs font-medium text-white">{t("products.diamondCopper.productLines.lineB.badge")}</div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("products.diamondCopper.productLines.lineB.desc")}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">{t("products.diamondCopper.productLines.lineB.thermalConductivity")}</span>
                    <span className="font-semibold text-sky-600">{t("products.diamondCopper.productLines.lineB.thermalConductivityValue")}</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">{t("products.diamondCopper.productLines.lineB.performanceAdvantage")}</span>
                    <span className="font-semibold text-sky-600">{t("products.diamondCopper.productLines.lineB.performanceAdvantageValue")}</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "98%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">{t("products.diamondCopper.productLines.lineB.diamondContent")}</span>
                    <span className="font-semibold text-sky-600">{t("products.diamondCopper.productLines.lineB.diamondContentValue")}</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">{t("products.diamondCopper.productLines.lineB.costAdvantage")}</span>
                    <span className="font-semibold text-sky-600">{t("products.diamondCopper.productLines.lineB.costAdvantageValue")}</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-semibold mb-3 text-slate-900">{t("products.diamondCopper.productLines.lineB.applicationScenarios")}</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    {t("products.diamondCopper.productLines.lineB.scenario1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    {t("products.diamondCopper.productLines.lineB.scenario2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2" />
                    {t("products.diamondCopper.productLines.lineB.scenario3")}
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">{t("products.diamondCopper.technicalDetails.title")}</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-900">{t("products.diamondCopper.technicalDetails.coreTech")}</h3>
              <Card className="p-6 bg-white border-slate-200 mb-6">
                <h4 className="font-semibold mb-3 text-slate-900">{t("products.diamondCopper.technicalDetails.skeletonTitle")}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t("products.diamondCopper.technicalDetails.skeletonDesc")}
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs font-semibold text-slate-700 mb-1">{t("products.diamondCopper.technicalDetails.gradingLogic")}</div>
                    <div className="text-xs text-slate-600">{t("products.diamondCopper.technicalDetails.gradingLogicDesc")}</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs font-semibold text-slate-700 mb-1">{t("products.diamondCopper.technicalDetails.interfaceModification")}</div>
                    <div className="text-xs text-slate-600">{t("products.diamondCopper.technicalDetails.interfaceModificationDesc")}</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <h4 className="font-semibold mb-3 text-slate-900">{t("products.diamondCopper.technicalDetails.tospikeTitle")}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t("products.diamondCopper.technicalDetails.tospikeDesc")}
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs font-semibold text-slate-700 mb-1">{t("products.diamondCopper.technicalDetails.techAdvantage")}</div>
                    <div className="text-xs text-slate-600">{t("products.diamondCopper.technicalDetails.techAdvantageDesc")}</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs font-semibold text-slate-700 mb-1">{t("products.diamondCopper.technicalDetails.interfaceStrength")}</div>
                    <div className="text-xs text-slate-600">{t("products.diamondCopper.technicalDetails.interfaceStrengthDesc")}</div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-900">{t("products.diamondCopper.technicalDetails.processTitle")}</h3>
              <div className="space-y-4">
                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">{t("products.diamondCopper.technicalDetails.step1Title")}</h4>
                      <p className="text-sm text-slate-600">
                        {t("products.diamondCopper.technicalDetails.step1Desc")}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">{t("products.diamondCopper.technicalDetails.step2Title")}</h4>
                      <p className="text-sm text-slate-600">
                        {t("products.diamondCopper.technicalDetails.step2Desc")}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">{t("products.diamondCopper.technicalDetails.step3Title")}</h4>
                      <p className="text-sm text-slate-600">
                        {t("products.diamondCopper.technicalDetails.step3Desc")}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">{t("products.diamondCopper.technicalDetails.step4Title")}</h4>
                      <p className="text-sm text-slate-600">
                        {t("products.diamondCopper.technicalDetails.step4Desc")}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Parameters */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">{t("products.diamondCopper.performanceParams.title")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-slate-50 border-slate-200 text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">680</div>
              <div className="text-sm text-slate-600 mb-1">{t("products.diamondCopper.performanceParams.achievedTC")}</div>
              <div className="text-xs text-slate-500">W/m·K</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-sky-50 to-white border-sky-300 text-center shadow-lg">
              <div className="text-3xl font-bold text-sky-600 mb-2">1200+</div>
              <div className="text-sm text-slate-700 font-medium mb-1">{t("products.diamondCopper.performanceParams.premiumVersion")}</div>
              <div className="text-xs text-slate-500">W/m·K</div>
            </Card>

            <Card className="p-6 bg-slate-50 border-slate-200 text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">80-90</div>
              <div className="text-sm text-slate-600 mb-1">{t("products.diamondCopper.performanceParams.diamondVolFraction")}</div>
              <div className="text-xs text-slate-500">vol%</div>
            </Card>

            <Card className="p-6 bg-slate-50 border-slate-200 text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">{t("products.diamondCopper.performanceParams.flatnessValue")}</div>
              <div className="text-sm text-slate-600 mb-1">{t("products.diamondCopper.performanceParams.flatness")}</div>
              <div className="text-xs text-slate-500">{t("products.diamondCopper.performanceParams.flatnessNote")}</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">{t("products.diamondCopper.patents.title")}</h2>
          <p className="text-center text-slate-600 mb-12">{t("products.diamondCopper.patents.subtitle")}</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-white border-slate-200">
              <div className="text-xs font-medium text-sky-600 mb-2">{t("products.diamondCopper.patents.inventionPatent")}</div>
              <h3 className="font-semibold mb-2 text-slate-900">{t("products.diamondCopper.patents.patent1Title")}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {t("products.diamondCopper.patents.patent1Desc")}
              </p>
              <div className="text-xs text-slate-500">{t("products.diamondCopper.patents.patent1No")}</div>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="text-xs font-medium text-sky-600 mb-2">{t("products.diamondCopper.patents.inventionPatent")}</div>
              <h3 className="font-semibold mb-2 text-slate-900">{t("products.diamondCopper.patents.patent2Title")}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {t("products.diamondCopper.patents.patent2Desc")}
              </p>
              <div className="text-xs text-slate-500">{t("products.diamondCopper.patents.patent2No")}</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">{t("products.diamondCopper.cta.title")}</h2>
          <p className="text-slate-600 mb-8">{t("products.diamondCopper.cta.subtitle")}</p>
          <div className="flex items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 bg-sky-600 hover:bg-sky-700 text-white"
              asChild
            >
              <a href="/docs/sample test result.pdf" target="_blank" rel="noopener noreferrer">
                {t("products.diamondCopper.cta.viewSampleData")}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
              asChild
            >
              <a href="/docs/2026 cufeng diamond-cu.pdf" target="_blank" rel="noopener noreferrer">
                {t("products.diamondCopper.cta.downloadTech")}
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
