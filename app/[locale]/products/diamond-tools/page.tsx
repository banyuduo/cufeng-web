"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, Settings, Wrench, Sparkles } from "lucide-react"
import { isValidLocale, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ResponsivePicture } from "@/components/responsive-picture"
import { FooterNav } from "@/components/footer-nav"
import { Navigation } from "@/components/navigation"

export default function DiamondToolsPage() {
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
                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">
                  {t("products.diamondTools.hero.badge")}
                </div>
              </div>
              <h1 className="page-h1 mb-6 text-slate-900">{t("products.diamondTools.hero.title")}</h1>
              <p className="page-caption text-slate-500 mb-4">{t("products.diamondTools.hero.subtitle")}</p>
              <p className="page-lead text-slate-600 mb-8">
                {t("products.diamondTools.hero.intro")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-[#73DBFF] mb-1">10+</div>
                  <div className="page-caption text-slate-600">{t("products.diamondTools.hero.stat1")}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-[#73DBFF] mb-1">30+</div>
                  <div className="page-caption text-slate-600">{t("products.diamondTools.hero.stat2")}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-[#73DBFF] mb-1">100+</div>
                  <div className="page-caption text-slate-600">{t("products.diamondTools.hero.stat3")}</div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ResponsivePicture
                src="/images/diamond.jpg"
                alt={t("products.diamondTools.hero.imgAlt")}
                fill
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="page-h2 mb-4 text-center text-slate-900">{t("products.diamondTools.coreCapabilities.title")}</h2>
          <p className="page-lead text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            {t("products.diamondTools.coreCapabilities.subtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-slate-50 border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">{t("products.diamondTools.coreCapabilities.card1Title")}</h3>
              <p className="page-caption text-slate-600">
                {t("products.diamondTools.coreCapabilities.card1Desc")}
              </p>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">{t("products.diamondTools.coreCapabilities.card2Title")}</h3>
              <p className="page-caption text-slate-600">
                {t("products.diamondTools.coreCapabilities.card2Desc")}
              </p>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">{t("products.diamondTools.coreCapabilities.card3Title")}</h3>
              <p className="page-caption text-slate-600">
                {t("products.diamondTools.coreCapabilities.card3Desc")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Design Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="page-h2 mb-4 text-center text-slate-900">{t("products.diamondTools.designPrinciples.title")}</h2>
          <p className="page-lead text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            {t("products.diamondTools.designPrinciples.subtitle")}
          </p>

          {/* Three Elements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-white border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">{t("products.diamondTools.designPrinciples.substrateTitle")}</h3>
              <p className="page-caption text-slate-600">
                {t("products.diamondTools.designPrinciples.substrateDesc")}
              </p>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">{t("products.diamondTools.designPrinciples.superabrasiveTitle")}</h3>
              <p className="page-caption text-slate-600">
                {t("products.diamondTools.designPrinciples.superabrasiveDesc")}
              </p>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">{t("products.diamondTools.designPrinciples.alloyTitle")}</h3>
              <p className="page-caption text-slate-600">
                {t("products.diamondTools.designPrinciples.alloyDesc")}
              </p>
            </Card>
          </div>

          {/* Technical Diagrams */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white border-slate-200">
              <div className="relative aspect-[4/3] mb-4 bg-slate-50 rounded-lg overflow-hidden">
                <ResponsivePicture
                  src="/images/diamond-brazed.png"
                  alt={t("products.diamondTools.designPrinciples.diagram1Alt")}
                  fill
                  format="png"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
              <p className="page-caption text-slate-600 text-center">{t("products.diamondTools.designPrinciples.diagram1Alt")}</p>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <div className="relative aspect-[4/3] mb-4 bg-slate-50 rounded-lg overflow-hidden">
                <ResponsivePicture
                  src="/images/brazing tech.png"
                  alt={t("products.diamondTools.designPrinciples.diagram2Alt")}
                  fill
                  format="png"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
              <p className="page-caption text-slate-600 text-center">{t("products.diamondTools.designPrinciples.diagram2Alt")}</p>
            </Card>
          </div>

          {/* Design Logic */}
          <Card className="p-8 bg-gradient-to-br from-slate-50 to-[#F9FAFC] border-[#4169E1]/30">
            <h3 className="page-h3 mb-4 text-slate-900">{t("products.diamondTools.designPrinciples.designLogicTitle")}</h3>
            <p className="page-body text-slate-700 mb-6">
              {t("products.diamondTools.designPrinciples.designLogicDesc")}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#73DBFF] mt-0.5 flex-shrink-0" />
                <div className="page-caption text-slate-700">
                  {t("products.diamondTools.designPrinciples.logic1")}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#73DBFF] mt-0.5 flex-shrink-0" />
                <div className="page-caption text-slate-700">
                  {t("products.diamondTools.designPrinciples.logic2")}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#73DBFF] mt-0.5 flex-shrink-0" />
                <div className="page-caption text-slate-700">
                  {t("products.diamondTools.designPrinciples.logic3")}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#73DBFF] mt-0.5 flex-shrink-0" />
                <div className="page-caption text-slate-700">
                  {t("products.diamondTools.designPrinciples.logic4")}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Extreme Working Conditions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="page-h2 mb-4 text-center text-slate-900">{t("products.diamondTools.extremeConditions.title")}</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            {t("products.diamondTools.extremeConditions.subtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-slate-50 border-slate-200">
              <h4 className="font-semibold mb-3 text-slate-900">{t("products.diamondTools.extremeConditions.cmcTitle")}</h4>
              <p className="page-caption text-slate-600 mb-4">
                {t("products.diamondTools.extremeConditions.cmcDesc")}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#73DBFF]">
                <Check className="w-4 h-4" />
                <span>{t("products.diamondTools.extremeConditions.cmcSpec")}</span>
              </div>
            </Card>

            <Card className="p-6 bg-slate-50 border-slate-200">
              <h4 className="font-semibold mb-3 text-slate-900">{t("products.diamondTools.extremeConditions.cfrpTitle")}</h4>
              <p className="page-caption text-slate-600 mb-4">
                {t("products.diamondTools.extremeConditions.cfrpDesc")}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#73DBFF]">
                <Check className="w-4 h-4" />
                <span>{t("products.diamondTools.extremeConditions.cfrpSpec")}</span>
              </div>
            </Card>

            <Card className="p-6 bg-slate-50 border-slate-200">
              <h4 className="font-semibold mb-3 text-slate-900">{t("products.diamondTools.extremeConditions.tiTitle")}</h4>
              <p className="page-caption text-slate-600 mb-4">
                {t("products.diamondTools.extremeConditions.tiDesc")}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#73DBFF]">
                <Check className="w-4 h-4" />
                <span>{t("products.diamondTools.extremeConditions.tiSpec")}</span>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-[#F9FAFC] to-slate-50 border-[#4169E1]/30">
            <h3 className="page-h3 mb-4 text-slate-900">{t("products.diamondTools.extremeConditions.valueTitle")}</h3>
            <p className="page-body text-slate-700 mb-6">
              {t("products.diamondTools.extremeConditions.valueDesc")}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="page-caption font-semibold mb-3 text-slate-900">{t("products.diamondTools.extremeConditions.processOutputTitle")}</h4>
                <ul className="space-y-2 page-caption text-slate-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#73DBFF] mt-0.5 flex-shrink-0" />
                    <span>{t("products.diamondTools.extremeConditions.processItem1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#73DBFF] mt-0.5 flex-shrink-0" />
                    <span>{t("products.diamondTools.extremeConditions.processItem2")}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="page-caption font-semibold mb-3 text-slate-900">{t("products.diamondTools.extremeConditions.lifecycleTitle")}</h4>
                <ul className="space-y-2 page-caption text-slate-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#73DBFF] mt-0.5 flex-shrink-0" />
                    <span>{t("products.diamondTools.extremeConditions.lifecycleItem1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#73DBFF] mt-0.5 flex-shrink-0" />
                    <span>{t("products.diamondTools.extremeConditions.lifecycleItem2")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Active Fusion-Bonding Technology Deep Analysis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="page-h2 mb-12 text-center text-slate-900">{t("products.diamondTools.fusionBonding.title")}</h2>

          {/* Core Principle */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h3 className="page-h3 mb-4 text-slate-900">{t("products.diamondTools.fusionBonding.principleTitle")}</h3>
              <p className="page-caption text-slate-500 mb-4">{t("products.diamondTools.fusionBonding.principleSubtitle")}</p>
              <p className="page-body text-slate-600">
                {t("products.diamondTools.fusionBonding.principleDesc")}
              </p>
            </div>

            {/* Technical Parameters */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              <Card className="p-6 bg-white border-slate-200">
                <div className="page-caption text-slate-500 mb-2">{t("products.diamondTools.fusionBonding.tempLabel")}</div>
                <div className="text-2xl font-bold text-[#73DBFF] mb-1">{t("products.diamondTools.fusionBonding.tempValue")}</div>
                <p className="page-caption text-slate-600">{t("products.diamondTools.fusionBonding.tempNote")}</p>
              </Card>
              <Card className="p-6 bg-white border-slate-200">
                <div className="page-caption text-slate-500 mb-2">{t("products.diamondTools.fusionBonding.envLabel")}</div>
                <div className="text-lg font-semibold text-[#73DBFF] mb-1">{t("products.diamondTools.fusionBonding.envValue")}</div>
                <p className="page-caption text-slate-600">{t("products.diamondTools.fusionBonding.envNote")}</p>
              </Card>
            </div>
          </div>

          {/* Core Advantages */}
          <div className="mb-16">
            <h3 className="page-h3 mb-8 text-center text-slate-900">{t("products.diamondTools.fusionBonding.advantagesTitle")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-white border-slate-200 hover:border-[#4169E1]/60 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#73DBFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="page-h3 mb-3 text-slate-900">{t("products.diamondTools.fusionBonding.adv1Title")}</h4>
                <p className="page-caption text-slate-600">
                  {t("products.diamondTools.fusionBonding.adv1Desc")}
                </p>
              </Card>

              <Card className="p-6 bg-white border-slate-200 hover:border-[#4169E1]/60 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="page-h3 mb-3 text-slate-900">{t("products.diamondTools.fusionBonding.adv2Title")}</h4>
                <p className="page-caption text-slate-600">
                  {t("products.diamondTools.fusionBonding.adv2Desc")}
                </p>
              </Card>

              <Card className="p-6 bg-white border-slate-200 hover:border-[#4169E1]/60 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
                <h4 className="page-h3 mb-3 text-slate-900">{t("products.diamondTools.fusionBonding.adv3Title")}</h4>
                <p className="page-caption text-slate-600">
                  {t("products.diamondTools.fusionBonding.adv3Desc")}
                </p>
              </Card>

              <Card className="p-6 bg-white border-slate-200 hover:border-[#4169E1]/60 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <h4 className="page-h3 mb-3 text-slate-900">{t("products.diamondTools.fusionBonding.adv4Title")}</h4>
                <p className="page-caption text-slate-600">
                  {t("products.diamondTools.fusionBonding.adv4Desc")}
                </p>
              </Card>
            </div>
          </div>

          {/* Key Materials System */}
          <div className="mb-16">
            <h3 className="page-h3 mb-8 text-center text-slate-900">{t("products.diamondTools.fusionBonding.materialsTitle")}</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6 bg-white border-slate-200">
                <div className="font-semibold text-slate-900 mb-3">{t("products.diamondTools.fusionBonding.superabrasiveSeries")}</div>
                <ul className="page-caption text-slate-600 space-y-2">
                  <li>• {t("products.diamondTools.fusionBonding.superabrasive1")}</li>
                  <li>• {t("products.diamondTools.fusionBonding.superabrasive2")}</li>
                  <li>• {t("products.diamondTools.fusionBonding.superabrasive3")}</li>
                </ul>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="font-semibold text-slate-900 mb-3">{t("products.diamondTools.fusionBonding.fusionAlloy")}</div>
                <ul className="page-caption text-slate-600 space-y-2">
                  <li>• {t("products.diamondTools.fusionBonding.alloy1")}</li>
                  <li>• {t("products.diamondTools.fusionBonding.alloy2")}</li>
                  <li>• {t("products.diamondTools.fusionBonding.alloy3")}</li>
                </ul>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="font-semibold text-slate-900 mb-3">{t("products.diamondTools.fusionBonding.substrateAdapt")}</div>
                <ul className="page-caption text-slate-600 space-y-2">
                  <li>• {t("products.diamondTools.fusionBonding.substrate1")}</li>
                  <li>• {t("products.diamondTools.fusionBonding.substrate2")}</li>
                  <li>• {t("products.diamondTools.fusionBonding.substrate3")}</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Expanded Applications */}
          <div>
            <h3 className="page-h3 mb-8 text-center text-slate-900">{t("products.diamondTools.fusionBonding.applicationsTitle")}</h3>
            <Card className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-0 text-white">
              <p className="page-body text-slate-300 mb-6 text-center">{t("products.diamondTools.fusionBonding.applicationsIntro")}</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="page-h3 mb-3 text-[#73DBFF]">{t("products.diamondTools.fusionBonding.hardBrittleTitle")}</h4>
                  <ul className="page-caption text-slate-300 space-y-2">
                    <li>• {t("products.diamondTools.fusionBonding.hardBrittle1")}</li>
                    <li>• {t("products.diamondTools.fusionBonding.hardBrittle2")}</li>
                    <li>• {t("products.diamondTools.fusionBonding.hardBrittle3")}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="page-h3 mb-3 text-green-400">{t("products.diamondTools.fusionBonding.compositeTitle")}</h4>
                  <ul className="page-caption text-slate-300 space-y-2">
                    <li>• {t("products.diamondTools.fusionBonding.composite1")}</li>
                    <li>• {t("products.diamondTools.fusionBonding.composite2")}</li>
                    <li>• {t("products.diamondTools.fusionBonding.composite3")}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="page-h3 mb-3 text-amber-400">{t("products.diamondTools.fusionBonding.highEndTitle")}</h4>
                  <ul className="page-caption text-slate-300 space-y-2">
                    <li>• {t("products.diamondTools.fusionBonding.highEnd1")}</li>
                    <li>• {t("products.diamondTools.fusionBonding.highEnd2")}</li>
                    <li>• {t("products.diamondTools.fusionBonding.highEnd3")}</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Migration: From Interface Bonding to Full-Carbon Platform - Repositioned as Summary & Transition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="page-h2 mb-4">{t("products.diamondTools.techMigration.title")}</h2>
            <p className="page-lead text-slate-300 max-w-2xl mx-auto">
              {t("products.diamondTools.techMigration.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-amber-500" />
              </div>
              <h3 className="page-h3 mb-3 text-amber-400">{t("products.diamondTools.techMigration.origin")}</h3>
              <p className="page-caption text-slate-300">
                {t("products.diamondTools.techMigration.originDesc")}
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-[#73DBFF]/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-[#73DBFF]" />
              </div>
              <h3 className="page-h3 mb-3 text-[#73DBFF]">{t("products.diamondTools.techMigration.extension")}</h3>
              <p className="page-caption text-slate-300">
                {t("products.diamondTools.techMigration.extensionDesc")}
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-green-500" />
              </div>
              <h3 className="page-h3 mb-3 text-green-400">{t("products.diamondTools.techMigration.evolution")}</h3>
              <p className="page-caption text-slate-300">
                {t("products.diamondTools.techMigration.evolutionDesc")}
              </p>
            </Card>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white gap-2" asChild>
              <Link href={`${prefix}/patents`}>{t("products.diamondTools.techMigration.viewArchitecture")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="page-h2 mb-4 text-slate-900">{t("products.diamondTools.cta.title")}</h2>
          <p className="page-lead text-slate-600 mb-8">
            {t("products.diamondTools.cta.subtitle")}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-[#0F2A5C] hover:bg-[#1E3A8A] text-white" asChild>
              <Link href={`${prefix}/about#zhang-gong`}>{t("products.diamondTools.cta.contactEngineer")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
              asChild
            >
              <a href="/docs/cufeng-diamond-products.pdf" target="_blank" rel="noopener noreferrer">
                {t("products.diamondTools.cta.downloadCatalog")}
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
