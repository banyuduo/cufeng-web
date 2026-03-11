"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, Shield, Zap, CheckCircle2, Flame, Droplet, Award } from "lucide-react"
import { isValidLocale, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ResponsivePicture } from "@/components/responsive-picture"
import { FooterNav } from "@/components/footer-nav"
import { Navigation } from "@/components/navigation"

export default function NonstickCookwarePage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-700 mb-4">
                <CheckCircle2 className="w-4 h-4" />
                {t("products.nonstickCookware.hero.badge")}
              </div>
              <h1 className="page-h1 mb-6 text-slate-900">{t("products.nonstickCookware.hero.title")}</h1>
              <p className="page-lead text-slate-600 mb-6">
                {t("products.nonstickCookware.hero.intro")}
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 page-caption text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#73DBFF]" />
                  </div>
                  <span>{t("products.nonstickCookware.hero.feature1")}</span>
                </div>
                <div className="flex items-center gap-3 page-caption text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#73DBFF]" />
                  </div>
                  <span>{t("products.nonstickCookware.hero.feature2")}</span>
                </div>
                <div className="flex items-center gap-3 page-caption text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#73DBFF]" />
                  </div>
                  <span>{t("products.nonstickCookware.hero.feature3")}</span>
                </div>
                <div className="flex items-center gap-3 page-caption text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#73DBFF]" />
                  </div>
                  <span>{t("products.nonstickCookware.hero.feature4")}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-[300px] sm:h-[400px]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ResponsivePicture
                  src="/images/diamond pan.jpg"
                  alt={t("products.nonstickCookware.hero.imgAlt")}
                  fill
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ResponsivePicture
                  src="/images/sem-pan.jpg"
                  alt={t("products.nonstickCookware.hero.imgAltSem")}
                  fill
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Diamond */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="page-h2 mb-4 text-slate-900">{t("products.nonstickCookware.whyDiamond.title")}</h2>
            <p className="page-lead text-slate-600">
              {t("products.nonstickCookware.whyDiamond.intro")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-[#F9FAFC] border-slate-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="page-h3 mb-2 text-slate-900">{t("products.nonstickCookware.whyDiamond.hardnessTitle")}</h3>
              <p className="page-caption text-slate-600">{t("products.nonstickCookware.whyDiamond.hardnessDesc")}</p>
            </Card>

            <Card className="p-6 bg-[#F9FAFC] border-slate-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="page-h3 mb-2 text-slate-900">{t("products.nonstickCookware.whyDiamond.thermalTitle")}</h3>
              <p className="page-caption text-slate-600">{t("products.nonstickCookware.whyDiamond.thermalDesc")}</p>
            </Card>

            <Card className="p-6 bg-[#F9FAFC] border-slate-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Droplet className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="page-h3 mb-2 text-slate-900">{t("products.nonstickCookware.whyDiamond.inertTitle")}</h3>
              <p className="page-caption text-slate-600">{t("products.nonstickCookware.whyDiamond.inertDesc")}</p>
            </Card>

            <Card className="p-6 bg-[#F9FAFC] border-slate-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#73DBFF]" />
              </div>
              <h3 className="page-h3 mb-2 text-slate-900">{t("products.nonstickCookware.whyDiamond.durableTitle")}</h3>
              <p className="page-caption text-slate-600">{t("products.nonstickCookware.whyDiamond.durableDesc")}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="page-h2 mb-4 text-slate-900">{t("products.nonstickCookware.keyFeatures.title")}</h2>
            <p className="page-lead text-slate-600">{t("products.nonstickCookware.keyFeatures.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            <Card className="p-8 bg-[#F9FAFC] border-slate-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#73DBFF]" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">{t("products.nonstickCookware.keyFeatures.lifespanTitle")}</h3>
              <p className="page-body text-slate-600 mb-4">
                {t("products.nonstickCookware.keyFeatures.lifespanDesc")}
              </p>
              <div className="text-2xl font-bold text-[#73DBFF]">{t("products.nonstickCookware.keyFeatures.lifespanValue")}</div>
              <div className="page-caption text-slate-500">{t("products.nonstickCookware.keyFeatures.lifespanNote")}</div>
            </Card>

            <Card className="p-8 bg-[#F9FAFC] border-slate-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">{t("products.nonstickCookware.keyFeatures.safetyTitle")}</h3>
              <p className="page-body text-slate-600 mb-4">
                {t("products.nonstickCookware.keyFeatures.safetyDesc")}
              </p>
              <div className="text-2xl font-bold text-green-600">{t("products.nonstickCookware.keyFeatures.safetyValue")}</div>
              <div className="page-caption text-slate-500">{t("products.nonstickCookware.keyFeatures.safetyNote")}</div>
            </Card>

            <Card className="p-8 bg-[#F9FAFC] border-slate-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">{t("products.nonstickCookware.keyFeatures.thermalTitle")}</h3>
              <p className="page-body text-slate-600 mb-4">
                {t("products.nonstickCookware.keyFeatures.thermalDesc")}
              </p>
              <div className="text-2xl font-bold text-amber-600">{t("products.nonstickCookware.keyFeatures.thermalValue")}</div>
              <div className="page-caption text-slate-500">{t("products.nonstickCookware.keyFeatures.thermalNote")}</div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="page-h2 mb-4 text-slate-900">{t("products.nonstickCookware.comparison.title")}</h2>
            <p className="page-lead text-slate-600">{t("products.nonstickCookware.comparison.subtitle")}</p>
          </div>
          <Card className="overflow-hidden border-slate-200 bg-[#F9FAFC]">
            {/* 小屏卡片式布局 */}
            <div className="sm:hidden divide-y divide-slate-200">
              <div className="p-4">
                <div className="font-semibold text-slate-900 mb-2">{t("products.nonstickCookware.comparison.lifespan")}</div>
                <div className="grid grid-cols-3 gap-1.5 text-xs sm:gap-2 sm:text-sm">
                  <div className="text-center p-2 rounded bg-[#E8EEFF]"><span className="font-semibold text-[#0F2A5C]">{t("products.nonstickCookware.comparison.lifespanDiamond")}</span></div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-600">{t("products.nonstickCookware.comparison.lifespanTeflon")}</div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-600">{t("products.nonstickCookware.comparison.lifespanCeramic")}</div>
                </div>
              </div>
              <div className="p-4">
                <div className="font-semibold text-slate-900 mb-2">{t("products.nonstickCookware.comparison.heatResistant")}</div>
                <div className="grid grid-cols-3 gap-1.5 text-xs sm:gap-2 sm:text-sm">
                  <div className="text-center p-2 rounded bg-[#E8EEFF]"><span className="font-semibold text-[#0F2A5C]">500°C</span></div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-600">260°C</div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-600">350°C</div>
                </div>
              </div>
              <div className="p-4">
                <div className="font-semibold text-slate-900 mb-2">{t("products.nonstickCookware.comparison.metalSpatula")}</div>
                <div className="grid grid-cols-3 gap-1.5 text-xs sm:gap-2 sm:text-sm">
                  <div className="text-center p-2 rounded bg-[#E8EEFF]"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-400">✗</div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-400">✗</div>
                </div>
              </div>
              <div className="p-4">
                <div className="font-semibold text-slate-900 mb-2">{t("products.nonstickCookware.comparison.noPfoa")}</div>
                <div className="grid grid-cols-3 gap-1.5 text-xs sm:gap-2 sm:text-sm">
                  <div className="text-center p-2 rounded bg-[#E8EEFF]"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-400">✗</div>
                  <div className="text-center p-2 rounded bg-slate-50"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></div>
                </div>
              </div>
              <div className="p-4">
                <div className="font-semibold text-slate-900 mb-2">{t("products.nonstickCookware.comparison.scratchResist")}</div>
                <div className="grid grid-cols-3 gap-1.5 text-xs sm:gap-2 sm:text-sm">
                  <div className="text-center p-2 rounded bg-[#E8EEFF]"><span className="font-semibold text-[#0F2A5C] text-xs break-words">{t("products.nonstickCookware.comparison.scratchDiamond")}</span></div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-600">{t("products.nonstickCookware.comparison.scratchTeflon")}</div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-600">{t("products.nonstickCookware.comparison.scratchCeramic")}</div>
                </div>
              </div>
              <div className="p-4">
                <div className="font-semibold text-slate-900 mb-2">{t("products.nonstickCookware.comparison.thermalPerf")}</div>
                <div className="grid grid-cols-3 gap-1.5 text-xs sm:gap-2 sm:text-sm">
                  <div className="text-center p-2 rounded bg-[#E8EEFF]"><span className="font-semibold text-[#0F2A5C] text-xs break-words">{t("products.nonstickCookware.comparison.thermalDiamond")}</span></div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-600">{t("products.nonstickCookware.comparison.thermalTeflon")}</div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-600">{t("products.nonstickCookware.comparison.thermalCeramic")}</div>
                </div>
              </div>
              <div className="p-4">
                <div className="font-semibold text-slate-900 mb-2">{t("products.nonstickCookware.comparison.dishwasherSafe")}</div>
                <div className="grid grid-cols-3 gap-1.5 text-xs sm:gap-2 sm:text-sm">
                  <div className="text-center p-2 rounded bg-[#E8EEFF]"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></div>
                  <div className="text-center p-2 rounded bg-slate-50 text-slate-400 text-xs">{t("products.nonstickCookware.comparison.dishwasherTeflon")}</div>
                  <div className="text-center p-2 rounded bg-slate-50"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></div>
                </div>
              </div>
              <div className="p-4 bg-[#E8EEFF]">
                <div className="font-semibold text-slate-900 mb-2">{t("products.nonstickCookware.comparison.overallScore")}</div>
                <div className="grid grid-cols-3 gap-1.5 text-xs sm:gap-2 sm:text-sm">
                  <div className="text-center"><div className="text-2xl font-bold text-[#0F2A5C]">9.5/10</div></div>
                  <div className="text-center"><div className="text-lg font-semibold text-slate-500">6.0/10</div></div>
                  <div className="text-center"><div className="text-lg font-semibold text-slate-500">7.0/10</div></div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full min-w-[400px]">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-900">{t("products.nonstickCookware.comparison.metric")}</th>
                    <th className="text-center p-4 font-semibold text-[#0F2A5C]">{t("products.nonstickCookware.comparison.diamondPan")}</th>
                    <th className="text-center p-4 font-semibold text-slate-500">{t("products.nonstickCookware.comparison.teflon")}</th>
                    <th className="text-center p-4 font-semibold text-slate-500">{t("products.nonstickCookware.comparison.ceramic")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">{t("products.nonstickCookware.comparison.lifespan")}</td>
                    <td className="p-4 text-center font-semibold text-[#0F2A5C]">{t("products.nonstickCookware.comparison.lifespanDiamond")}</td>
                    <td className="p-4 text-center text-slate-600">{t("products.nonstickCookware.comparison.lifespanTeflon")}</td>
                    <td className="p-4 text-center text-slate-600">{t("products.nonstickCookware.comparison.lifespanCeramic")}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">{t("products.nonstickCookware.comparison.heatResistant")}</td>
                    <td className="p-4 text-center font-semibold text-[#0F2A5C]">500°C</td>
                    <td className="p-4 text-center text-slate-600">260°C</td>
                    <td className="p-4 text-center text-slate-600">350°C</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">{t("products.nonstickCookware.comparison.metalSpatula")}</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="p-4 text-center text-slate-400">✗</td>
                    <td className="p-4 text-center text-slate-400">✗</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">{t("products.nonstickCookware.comparison.noPfoa")}</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="p-4 text-center text-slate-400">✗</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">{t("products.nonstickCookware.comparison.scratchResist")}</td>
                    <td className="p-4 text-center font-semibold text-[#0F2A5C]">{t("products.nonstickCookware.comparison.scratchDiamond")}</td>
                    <td className="p-4 text-center text-slate-600">{t("products.nonstickCookware.comparison.scratchTeflon")}</td>
                    <td className="p-4 text-center text-slate-600">{t("products.nonstickCookware.comparison.scratchCeramic")}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">{t("products.nonstickCookware.comparison.thermalPerf")}</td>
                    <td className="p-4 text-center font-semibold text-[#0F2A5C]">{t("products.nonstickCookware.comparison.thermalDiamond")}</td>
                    <td className="p-4 text-center text-slate-600">{t("products.nonstickCookware.comparison.thermalTeflon")}</td>
                    <td className="p-4 text-center text-slate-600">{t("products.nonstickCookware.comparison.thermalCeramic")}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">{t("products.nonstickCookware.comparison.dishwasherSafe")}</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="p-4 text-center text-slate-400">{t("products.nonstickCookware.comparison.dishwasherTeflon")}</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-[#E8EEFF]">
                    <td className="p-4 text-slate-900 font-semibold">{t("products.nonstickCookware.comparison.overallScore")}</td>
                    <td className="p-4 text-center">
                      <div className="text-2xl font-bold text-[#0F2A5C]">9.5/10</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-lg font-semibold text-slate-500">6.0/10</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-lg font-semibold text-slate-500">7.0/10</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="page-h2 mb-4 text-slate-900">{t("products.nonstickCookware.cta.title")}</h2>
          <p className="page-lead text-slate-600 mb-8">{t("products.nonstickCookware.cta.subtitle")}</p>
          <div className="flex items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 bg-[#0F2A5C] hover:bg-[#1E3A8A] text-white"
              asChild
            >
              <Link href={`${prefix}/cooperation#contact`}>{t("products.nonstickCookware.cta.contactUs")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
              asChild
            >
              <a href="/docs/cufeng-diamond-pan.pdf" target="_blank" rel="noopener noreferrer">
                {t("products.nonstickCookware.cta.downloadWhitepaper")}
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
