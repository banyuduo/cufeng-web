"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, Layers, Zap, FlaskConical, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FooterNav } from "@/components/footer-nav"
import { Navigation } from "@/components/navigation"
import { isValidLocale, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

export default function ThermalPadPage() {
  const pathname = usePathname()
  const pathSegments = pathname.replace(/^\/+|\/+$/g, "").split("/")
  const localeFromPath = pathSegments[0]
  const locale = (isValidLocale(localeFromPath) ? localeFromPath : "zh") as Locale
  const t = getTranslations(locale)
  const prefix = `/${locale}`

  return (
    <div className="min-h-screen bg-[#F9FAFC]">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F9FAFC] to-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`${prefix}/products`}
            className="inline-flex items-center gap-2 page-caption text-slate-600 hover:text-[#73DBFF] mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("products.backToProducts")}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#E8EEFF] flex items-center justify-center">
                  <FlaskConical className="w-7 h-7 text-[#73DBFF]" />
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">
                  {t("products.thermalPad.hero.badge")}
                </div>
              </div>
              <h1 className="page-h1 mb-6 text-slate-900">{t("products.thermalPad.hero.title")}</h1>
              <p className="page-lead text-slate-600 mb-8">
                {t("products.thermalPad.hero.intro")}
              </p>
            </div>

            <Card className="p-8 bg-white border-slate-200 shadow-xl">
              <h3 className="page-h3 mb-6 text-slate-900">{t("products.thermalPad.hero.corePerfTitle")}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="page-caption text-slate-700">{t("products.thermalPad.hero.inPlaneTC")}</span>
                  <span className="font-semibold text-[#73DBFF]">{t("products.thermalPad.hero.inPlaneTCValue")}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="page-caption text-slate-700">{t("products.thermalPad.hero.throughTC")}</span>
                  <span className="font-semibold text-[#73DBFF]">{t("products.thermalPad.hero.throughTCValue")}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="page-caption text-slate-700">{t("products.thermalPad.hero.flexibility")}</span>
                  <span className="font-semibold text-[#73DBFF]">{t("products.thermalPad.hero.flexibilityValue")}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="page-caption text-slate-700">{t("products.thermalPad.hero.cte")}</span>
                  <span className="font-semibold text-[#73DBFF]">{t("products.thermalPad.hero.cteValue")}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="page-caption text-slate-700">{t("products.thermalPad.hero.thicknessRange")}</span>
                  <span className="font-semibold text-[#73DBFF]">{t("products.thermalPad.hero.thicknessValue")}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="page-h2 mb-12 text-center text-slate-900">{t("products.thermalPad.techAdvantages.title")}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <h3 className="page-h3 mb-4 text-slate-900">{t("products.thermalPad.techAdvantages.card1Title")}</h3>
              <p className="page-body text-slate-600">
                {t("products.thermalPad.techAdvantages.card1Desc")}
              </p>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <h3 className="page-h3 mb-4 text-slate-900">{t("products.thermalPad.techAdvantages.card2Title")}</h3>
              <p className="page-body text-slate-600">
                {t("products.thermalPad.techAdvantages.card2Desc")}
              </p>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                <FlaskConical className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <h3 className="page-h3 mb-4 text-slate-900">{t("products.thermalPad.techAdvantages.card3Title")}</h3>
              <p className="page-body text-slate-600">
                {t("products.thermalPad.techAdvantages.card3Desc")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="page-h2 mb-12 text-center text-slate-900">{t("products.thermalPad.technicalDetails.title")}</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="page-h3 mb-6 text-slate-900">{t("products.thermalPad.technicalDetails.designTitle")}</h3>
              <Card className="p-6 bg-white border-slate-200 mb-6">
                <h4 className="page-h3 mb-3 text-slate-900">{t("products.thermalPad.technicalDetails.skeletonTitle")}</h4>
                <p className="page-caption text-slate-600 mb-4">
                  {t("products.thermalPad.technicalDetails.skeletonDesc")}
                </p>
                <ul className="space-y-2 page-caption text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                    {t("products.thermalPad.technicalDetails.skeletonItem1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                    {t("products.thermalPad.technicalDetails.skeletonItem2")}
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <h4 className="page-h3 mb-3 text-slate-900">{t("products.thermalPad.technicalDetails.enhancementTitle")}</h4>
                <p className="page-caption text-slate-600 mb-4">
                  {t("products.thermalPad.technicalDetails.enhancementDesc")}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="page-caption text-slate-600 mb-1">{t("products.thermalPad.technicalDetails.diamondEnhancement")}</div>
                    <div className="page-caption font-semibold text-slate-900">{t("products.thermalPad.technicalDetails.diamondEnhancementDesc")}</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="page-caption text-slate-600 mb-1">{t("products.thermalPad.technicalDetails.ceramicEnhancement")}</div>
                    <div className="page-caption font-semibold text-slate-900">{t("products.thermalPad.technicalDetails.ceramicEnhancementDesc")}</div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="page-h3 mb-6 text-slate-900">{t("products.thermalPad.technicalDetails.processTitle")}</h3>
              <div className="space-y-4">
                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0F2A5C] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">{t("products.thermalPad.technicalDetails.step1Title")}</h4>
                      <p className="page-caption text-slate-600">
                        {t("products.thermalPad.technicalDetails.step1Desc")}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0F2A5C] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">{t("products.thermalPad.technicalDetails.step2Title")}</h4>
                      <p className="page-caption text-slate-600">
                        {t("products.thermalPad.technicalDetails.step2Desc")}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0F2A5C] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">{t("products.thermalPad.technicalDetails.step3Title")}</h4>
                      <p className="page-caption text-slate-600">
                        {t("products.thermalPad.technicalDetails.step3Desc")}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0F2A5C] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-900">{t("products.thermalPad.technicalDetails.step4Title")}</h4>
                      <p className="page-caption text-slate-600">
                        {t("products.thermalPad.technicalDetails.step4Desc")}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Prospects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="page-h2 mb-12 text-center text-slate-900">{t("products.thermalPad.applicationProspects.title")}</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="page-h3 mb-4 text-slate-900">{t("products.thermalPad.applicationProspects.card1Title")}</h3>
              <p className="page-body text-slate-600 mb-4">
                {t("products.thermalPad.applicationProspects.card1Desc")}
              </p>
              <ul className="page-body text-slate-600 mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                  <span>{t("products.thermalPad.applicationProspects.card1Item1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                  <span>{t("products.thermalPad.applicationProspects.card1Item2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                  <span>{t("products.thermalPad.applicationProspects.card1Item3")}</span>
                </li>
              </ul>
              <Link
                href={`${prefix}/applications`}
                className="inline-flex items-center gap-2 text-[#73DBFF] hover:text-[#73DBFF] font-semibold"
              >
                {t("products.thermalPad.applicationProspects.exploreApplications")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="page-h3 mb-4 text-slate-900">{t("products.thermalPad.applicationProspects.card2Title")}</h3>
              <p className="page-body text-slate-600 mb-6">
                {t("products.thermalPad.applicationProspects.card2Desc")}
              </p>
              <Link
                href={`${prefix}/about#zhang-gong`}
                className="inline-flex items-center gap-2 text-[#73DBFF] hover:text-[#73DBFF] font-semibold"
              >
                {t("products.thermalPad.applicationProspects.contactEngineer")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="page-h2 mb-4 text-center text-slate-900">{t("products.thermalPad.patents.title")}</h2>
          <p className="page-lead text-center text-slate-600 mb-12">{t("products.thermalPad.patents.subtitle")}</p>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-white border-slate-200">
              <p className="page-body text-slate-600 mb-6">
                {t("products.thermalPad.patents.intro")}
              </p>
              <div className="text-xs font-medium text-[#73DBFF] mb-2">{t("products.thermalPad.patents.corePatent")}</div>
              <h3 className="page-h3 mb-3 text-slate-900">
                {t("products.thermalPad.patents.patentTitle")}
              </h3>
              <p className="page-caption text-slate-600 mb-4">
                {t("products.thermalPad.patents.patentDesc")}
              </p>
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs text-slate-500">{t("products.thermalPad.patents.patentNo")}</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="page-h2 mb-4 text-slate-900">{t("products.thermalPad.cta.title")}</h2>
          <p className="page-lead text-slate-600 mb-8">{t("products.thermalPad.cta.subtitle")}</p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2 bg-[#0F2A5C] hover:bg-[#1E3A8A] text-white" asChild>
              <Link href={`${prefix}/cooperation#contact`}>{t("products.thermalPad.cta.applySample")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
              asChild
            >
              <a href="/docs/diamond-pad.pdf" target="_blank" rel="noopener noreferrer">
                {t("products.thermalPad.cta.downloadWhitepaper")}
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
