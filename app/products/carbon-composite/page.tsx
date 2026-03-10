"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, Sparkles, Zap, Activity, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FooterNav } from "@/components/footer-nav"
import { Navigation } from "@/components/navigation"
import { isValidLocale, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

export default function CarbonCompositePage() {
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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50 via-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`${prefix}/products`}
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#73DBFF] mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("products.backToProducts")}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full text-xs font-medium text-white">
                  {t("products.carbonComposite.hero.badge")}
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">{t("products.carbonComposite.hero.title")}</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t("products.carbonComposite.hero.intro")}
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-white to-cyan-50 border-sky-300 shadow-2xl">
              <h3 className="text-lg font-semibold mb-6 text-slate-900">{t("products.carbonComposite.hero.coreFeaturesTitle")}</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/80 rounded-lg border-2 border-sky-200">
                  <div className="text-xs text-slate-600 mb-1">{t("products.carbonComposite.hero.coreTech")}</div>
                  <div className="font-bold text-slate-900">{t("products.carbonComposite.hero.coreTechValue")}</div>
                </div>
                <div className="p-4 bg-white/80 rounded-lg">
                  <div className="text-xs text-slate-600 mb-1">{t("products.carbonComposite.hero.thermalPerf")}</div>
                  <div className="font-semibold text-[#73DBFF]">{t("products.carbonComposite.hero.thermalPerfValue")}</div>
                </div>
                <div className="p-4 bg-white/80 rounded-lg">
                  <div className="text-xs text-slate-600 mb-1">{t("products.carbonComposite.hero.flexibility")}</div>
                  <div className="font-semibold text-[#73DBFF]">{t("products.carbonComposite.hero.flexibilityValue")}</div>
                </div>
                <div className="p-4 bg-white/80 rounded-lg">
                  <div className="text-xs text-slate-600 mb-1">{t("products.carbonComposite.hero.applicationProspect")}</div>
                  <div className="font-semibold text-[#73DBFF]">{t("products.carbonComposite.hero.applicationProspectValue")}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Technology */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">{t("products.carbonComposite.coreTech.title")}</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            {t("products.carbonComposite.coreTech.subtitle")}
          </p>

          {/* 全碳复合材料对比优势表格 - 小屏卡片式布局 */}
          <div className="sm:hidden space-y-4 mb-16">
            {([1, 2, 3, 4, 5, 6, 7, 8] as const).map((i) => (
              <Card key={i} className="p-4 border-slate-200 bg-white">
                <div className="font-semibold text-slate-800 mb-3 pb-2 border-b border-slate-100">
                  {t(`products.carbonComposite.comparisonTable.row${i}Dim`)}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-2">
                    <span className="text-slate-500 shrink-0">{t("products.carbonComposite.comparisonTable.colDiamondCu")}</span>
                    <span className="text-slate-700 text-right break-words">{t(`products.carbonComposite.comparisonTable.row${i}Cu`)}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-slate-500 shrink-0">{t("products.carbonComposite.comparisonTable.colDiamondSiC")}</span>
                    <span className="text-slate-700 text-right break-words">{t(`products.carbonComposite.comparisonTable.row${i}SiC`)}</span>
                  </div>
                  <div className="flex justify-between gap-2 bg-sky-50/50 rounded px-2 py-1.5">
                    <span className="text-[#0F2A5C] font-medium shrink-0">{t("products.carbonComposite.comparisonTable.colToSpike")}</span>
                    <span className="text-[#0F2A5C] font-medium text-right break-words">{t(`products.carbonComposite.comparisonTable.row${i}ToSpike`)}</span>
                  </div>
                  <div className="flex justify-between gap-2 pt-1">
                    <span className="text-slate-500 shrink-0">{t("products.carbonComposite.comparisonTable.colValue")}</span>
                    <span className="text-slate-600 text-right break-words">{t(`products.carbonComposite.comparisonTable.row${i}Value`)}</span>
                  </div>
                </div>
              </Card>
            ))}
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              {t("products.carbonComposite.comparisonTable.footnote")}
            </p>
          </div>

          <div className="hidden sm:block mb-16 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-800 border-b border-slate-200 w-[100px]">{t("products.carbonComposite.comparisonTable.colDimension")}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-800 border-b border-slate-200">{t("products.carbonComposite.comparisonTable.colDiamondCu")}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-800 border-b border-slate-200">{t("products.carbonComposite.comparisonTable.colDiamondSiC")}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#0F2A5C] border-b border-slate-200 bg-sky-50/50">{t("products.carbonComposite.comparisonTable.colToSpike")}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-800 border-b border-slate-200">{t("products.carbonComposite.comparisonTable.colValue")}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-700">{t("products.carbonComposite.comparisonTable.row1Dim")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row1Cu")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row1SiC")}</td>
                  <td className="px-4 py-3 font-medium text-[#0F2A5C] bg-sky-50/30">{t("products.carbonComposite.comparisonTable.row1ToSpike")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row1Value")}</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-700">{t("products.carbonComposite.comparisonTable.row2Dim")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row2Cu")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row2SiC")}</td>
                  <td className="px-4 py-3 font-medium text-[#0F2A5C] bg-sky-50/30">{t("products.carbonComposite.comparisonTable.row2ToSpike")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row2Value")}</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-700">{t("products.carbonComposite.comparisonTable.row3Dim")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row3Cu")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row3SiC")}</td>
                  <td className="px-4 py-3 font-medium text-[#0F2A5C] bg-sky-50/30">{t("products.carbonComposite.comparisonTable.row3ToSpike")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row3Value")}</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-700">{t("products.carbonComposite.comparisonTable.row4Dim")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row4Cu")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row4SiC")}</td>
                  <td className="px-4 py-3 font-medium text-[#0F2A5C] bg-sky-50/30">{t("products.carbonComposite.comparisonTable.row4ToSpike")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row4Value")}</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-700">{t("products.carbonComposite.comparisonTable.row5Dim")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row5Cu")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row5SiC")}</td>
                  <td className="px-4 py-3 font-medium text-[#0F2A5C] bg-sky-50/30">{t("products.carbonComposite.comparisonTable.row5ToSpike")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row5Value")}</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-700">{t("products.carbonComposite.comparisonTable.row6Dim")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row6Cu")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row6SiC")}</td>
                  <td className="px-4 py-3 font-medium text-[#0F2A5C] bg-sky-50/30">{t("products.carbonComposite.comparisonTable.row6ToSpike")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row6Value")}</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-700">{t("products.carbonComposite.comparisonTable.row7Dim")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row7Cu")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row7SiC")}</td>
                  <td className="px-4 py-3 font-medium text-[#0F2A5C] bg-sky-50/30">{t("products.carbonComposite.comparisonTable.row7ToSpike")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row7Value")}</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-700">{t("products.carbonComposite.comparisonTable.row8Dim")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row8Cu")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row8SiC")}</td>
                  <td className="px-4 py-3 font-medium text-[#0F2A5C] bg-sky-50/30">{t("products.carbonComposite.comparisonTable.row8ToSpike")}</td>
                  <td className="px-4 py-3 text-slate-600">{t("products.carbonComposite.comparisonTable.row8Value")}</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              {t("products.carbonComposite.comparisonTable.footnote")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-slate-50 border-slate-200">
              <h3 className="text-xl font-semibold mb-6 text-slate-900">{t("products.carbonComposite.coreTech.breakthroughTitle")}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-slate-900">{t("products.carbonComposite.coreTech.graphitizationTitle")}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t("products.carbonComposite.coreTech.graphitizationDesc")}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-slate-900">{t("products.carbonComposite.coreTech.bondingTitle")}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t("products.carbonComposite.coreTech.bondingDesc")}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-slate-900">{t("products.carbonComposite.coreTech.networkTitle")}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t("products.carbonComposite.coreTech.networkDesc")}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-sky-50 to-cyan-50 border-sky-200">
              <h3 className="text-xl font-semibold mb-6 text-slate-900">{t("products.carbonComposite.coreTech.advantagesTitle")}</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#73DBFF]" />
                    </div>
                    <h4 className="font-semibold text-slate-900">{t("products.carbonComposite.coreTech.allCarbonTitle")}</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    {t("products.carbonComposite.coreTech.allCarbonDesc")}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#73DBFF]" />
                    </div>
                    <h4 className="font-semibold text-slate-900">{t("products.carbonComposite.coreTech.chemicalBondingTitle")}</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    {t("products.carbonComposite.coreTech.chemicalBondingDesc")}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-[#73DBFF]" />
                    </div>
                    <h4 className="font-semibold text-slate-900">{t("products.carbonComposite.coreTech.tunableTitle")}</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    {t("products.carbonComposite.coreTech.tunableDesc")}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#73DBFF]" />
                    </div>
                    <h4 className="font-semibold text-slate-900">{t("products.carbonComposite.coreTech.multifunctionTitle")}</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    {t("products.carbonComposite.coreTech.multifunctionDesc")}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Prospects */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">{t("products.carbonComposite.applicationProspects.title")}</h2>
          <p className="text-center text-slate-600 mb-12">{t("products.carbonComposite.applicationProspects.subtitle")}</p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">{t("products.carbonComposite.applicationProspects.card1Title")}</h3>
              <p className="text-slate-600 mb-6">
                {t("products.carbonComposite.applicationProspects.card1Desc")}
              </p>
              <Link
                href={`${prefix}/applications#thermal-management`}
                className="inline-flex items-center gap-2 text-[#73DBFF] hover:text-[#0F2A5C] font-semibold"
              >
                {t("products.carbonComposite.applicationProspects.viewThermal")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">{t("products.carbonComposite.applicationProspects.card2Title")}</h3>
              <p className="text-slate-600 mb-6">
                {t("products.carbonComposite.applicationProspects.card2Desc")}
              </p>
              <Link
                href={`${prefix}/applications#energy-environment`}
                className="inline-flex items-center gap-2 text-[#73DBFF] hover:text-[#0F2A5C] font-semibold"
              >
                {t("products.carbonComposite.applicationProspects.viewFrontier")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">{t("products.carbonComposite.manufacturing.title")}</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#0F2A5C] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{t("products.carbonComposite.manufacturing.step1Title")}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {t("products.carbonComposite.manufacturing.step1Desc")}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#0F2A5C] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{t("products.carbonComposite.manufacturing.step2Title")}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {t("products.carbonComposite.manufacturing.step2Desc")}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                      {t("products.carbonComposite.manufacturing.step2Item1")}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                      {t("products.carbonComposite.manufacturing.step2Item2")}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                      {t("products.carbonComposite.manufacturing.step2Item3")}
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#0F2A5C] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{t("products.carbonComposite.manufacturing.step3Title")}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {t("products.carbonComposite.manufacturing.step3Desc")}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#0F2A5C] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{t("products.carbonComposite.manufacturing.step4Title")}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t("products.carbonComposite.manufacturing.step4Desc")}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">{t("products.carbonComposite.patents.title")}</h2>
          <p className="text-center text-slate-600 mb-12">{t("products.carbonComposite.patents.subtitle")}</p>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* 第一排：两个专利并列 */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border-slate-200">
                <div className="text-xs font-medium text-[#73DBFF] mb-2">{t("products.carbonComposite.patents.inventionPatent")}</div>
                <h3 className="font-semibold mb-2 text-slate-900">
                  {t("products.carbonComposite.patents.patent1Title")}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t("products.carbonComposite.patents.patent1Desc")}
                </p>
                <div className="text-xs text-slate-500">{t("products.carbonComposite.patents.patent1No")}</div>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="text-xs font-medium text-[#73DBFF] mb-2">{t("products.carbonComposite.patents.inventionPatent")}</div>
                <h3 className="font-semibold mb-2 text-slate-900">
                  {t("products.carbonComposite.patents.patent2Title")}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t("products.carbonComposite.patents.patent2Desc")}
                </p>
                <div className="text-xs text-slate-500">{t("products.carbonComposite.patents.patent2No")}</div>
              </Card>
            </div>

            {/* 第二排：两个专利并列 */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border-slate-200">
                <div className="text-xs font-medium text-[#73DBFF] mb-2">{t("products.carbonComposite.patents.inventionPatent")}</div>
                <h3 className="font-semibold mb-2 text-slate-900">{t("products.carbonComposite.patents.patent3Title")}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t("products.carbonComposite.patents.patent3Desc")}
                </p>
                <div className="text-xs text-slate-500">{t("products.carbonComposite.patents.patent3No")}</div>
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="text-xs font-medium text-[#73DBFF] mb-2">{t("products.carbonComposite.patents.inventionPatent")}</div>
                <h3 className="font-semibold mb-2 text-slate-900">
                  {t("products.carbonComposite.patents.patent4Title")}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t("products.carbonComposite.patents.patent4Desc")}
                </p>
                <div className="text-xs text-slate-500">{t("products.carbonComposite.patents.patent4No")}</div>
              </Card>
            </div>

            {/* 第三排：核心专利单独一行 */}
            <div className="grid md:grid-cols-1 gap-6">
              <Card className="p-6 bg-white border-2 border-purple-300 shadow-lg">
                <div className="text-xs font-medium text-purple-600 mb-2">{t("products.carbonComposite.patents.corePatent")}</div>
                <h3 className="font-semibold mb-2 text-slate-900">
                  {t("products.carbonComposite.patents.patent5Title")}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t("products.carbonComposite.patents.patent5Desc")}
                </p>
                <div className="text-xs text-slate-500">{t("products.carbonComposite.patents.patent5No")}</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Value */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900">{t("products.carbonComposite.investmentValue.title")}</h2>
          <p className="text-center text-slate-600 mb-12">{t("products.carbonComposite.investmentValue.subtitle")}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-slate-200">
              <h3 className="text-xl font-semibold mb-6 text-slate-900">{t("products.carbonComposite.investmentValue.techBarrierTitle")}</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                  {t("products.carbonComposite.investmentValue.barrier1")}
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                  {t("products.carbonComposite.investmentValue.barrier2")}
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                  {t("products.carbonComposite.investmentValue.barrier3")}
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                  {t("products.carbonComposite.investmentValue.barrier4")}
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-slate-200">
              <h3 className="text-xl font-semibold mb-6 text-slate-900">{t("products.carbonComposite.investmentValue.marketTitle")}</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                  {t("products.carbonComposite.investmentValue.market1")}
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                  {t("products.carbonComposite.investmentValue.market2")}
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                  {t("products.carbonComposite.investmentValue.market3")}
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C] mt-2 flex-shrink-0" />
                  {t("products.carbonComposite.investmentValue.market4")}
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-[#0F2A5C] to-[#1E3A8A] text-white mt-8">
            <h3 className="text-xl font-semibold mb-4">{t("products.carbonComposite.investmentValue.cooperationTitle")}</h3>
            <p className="leading-relaxed mb-6">
              {t("products.carbonComposite.investmentValue.cooperationDesc")}
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg" className="bg-white text-[#73DBFF] hover:bg-slate-100" asChild>
                <Link href={`${prefix}/cooperation#contact`}>{t("products.carbonComposite.investmentValue.projectCooperation")}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
                <Link href={`${prefix}/about#wang`}>{t("products.carbonComposite.investmentValue.techExchange")}</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <FooterNav />
    </div>
  )
}
