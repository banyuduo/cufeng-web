import Link from "next/link"
import { Atom, Shield, Handshake, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FooterNav } from "@/components/footer-nav"
import { Navigation } from "@/components/navigation"
import { HeroWaveBg } from "@/components/hero-wave-bg"
import { getTranslations } from "@/lib/translations"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale
  const t = getTranslations(validLocale)

  return (
    <div className="min-h-screen bg-background">
      <Navigation locale={validLocale} />

      <section className="relative pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <HeroWaveBg />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="page-h1 text-white mb-6 sm:mb-8 opacity-100">
              {t("home.hero.title")}
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/95 font-light mb-10 sm:mb-12 tracking-wide">
              {t("home.hero.subtitle")}
            </p>

            <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6 mb-12">
              <Card className="bg-[#002244]/60 border-[#4169E1]/35 backdrop-blur-sm p-6 sm:p-7">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  {t("home.hero.card1")}
                </p>
              </Card>

              <Card className="bg-[#002244]/60 border-[#4169E1]/35 backdrop-blur-sm p-6 sm:p-7">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  {t("home.hero.card2")}
                </p>
              </Card>

              <Card className="bg-[#002244]/60 border-[#4169E1]/35 backdrop-blur-sm p-6 sm:p-7">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  {t("home.hero.card3")}
                </p>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-[#002244]/50 border border-[#4169E1]/40 rounded-2xl p-8 w-full">
                <h3 className="text-lg font-semibold text-[#93b5ff] mb-6">
                  {t("home.hero.achieved")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                    <p className="text-white/85 leading-relaxed">
                      {t("home.hero.achievement1")}
                      <br />
                      <span className="text-[#93b5ff] font-mono text-sm">
                        {t("home.hero.achievement1Value")}
                      </span>
                      <br />
                      <span className="text-white/70 text-sm">
                        {t("home.hero.achievement1Note")}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                    <p className="text-white/85 leading-relaxed">
                      {t("home.hero.achievement2")}
                      <br />
                      {t("home.hero.achievement2Note")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-10">
              <p className="text-white/85 leading-relaxed text-lg">
                {t("home.hero.platformFocus")}
              </p>
            </div>

            {/* 技术演化路径 - 简化版 */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-[#002244]/50 border border-[#4169E1]/30 rounded-xl p-6 w-full">
                <h3 className="text-base font-semibold text-[#93b5ff] mb-3">
                  {t("home.techEvolution.title")}
                </h3>
                <p className="text-white/85 leading-relaxed text-sm mb-4">
                  {t("home.techEvolution.desc")}
                </p>
                <Link
                  href={`/${validLocale}/patents#evolution-path`}
                  className="inline-flex items-center gap-2 text-[#93b5ff] hover:text-[#b8d4ff] text-sm font-medium transition-colors"
                >
                  {t("home.techEvolution.viewFullPath")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                size="lg"
                asChild
                className="gap-2 bg-[#4169E1] hover:bg-[#5b7ef0] text-white shadow-lg shadow-[#4169E1]/30 w-full sm:w-auto min-h-[44px] border-0"
              >
                <Link href={`/${validLocale}/applications`}>
                  {t("home.hero.viewTechApplications")}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2 text-white border-[#93b5ff]/80 bg-transparent hover:bg-white/10 w-full sm:w-auto min-h-[44px]"
              >
                <Link href={`/${validLocale}/cooperation`}>
                  {t("home.hero.projectCooperation")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <Card className="p-6 sm:p-8 bg-white border-slate-200 hover:shadow-lg transition-shadow relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-light text-slate-300 tabular-nums">01</span>
                <span className="h-px flex-1 max-w-12 bg-slate-200" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#e8eeff] flex items-center justify-center mb-6">
                <Atom className="w-6 h-6 text-[#4169E1]" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">
                {t("home.features.innovation")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("home.features.innovationDesc")}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-white border-slate-200 hover:shadow-lg transition-shadow relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-light text-slate-300 tabular-nums">02</span>
                <span className="h-px flex-1 max-w-12 bg-slate-200" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#e8eeff] flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#4169E1]" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">
                {t("home.features.patents")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("home.features.patentsDesc")}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-white border-slate-200 hover:shadow-lg transition-shadow relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-light text-slate-300 tabular-nums">03</span>
                <span className="h-px flex-1 max-w-12 bg-slate-200" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#e8eeff] flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6 text-[#4169E1]" />
              </div>
              <h3 className="page-h3 mb-3 text-slate-900">
                {t("home.features.cooperation")}
              </h3>
              <div className="text-slate-600 leading-relaxed space-y-3">
                <p>{t("home.features.cooperationIntro")}</p>
                <p className="font-medium">{t("home.features.cooperationPath")}</p>
                <p className="text-sm">{t("home.features.cooperationDesc")}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 mb-8 text-slate-900 text-center">
            {t("home.platform.title")}
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed">
              {t("home.platform.p1")}
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mt-6">
              {t("home.platform.p2")}
            </p>
            <ul className="list-disc list-inside text-lg text-slate-700 leading-relaxed mt-4 space-y-2">
              <li>{t("home.platform.li1")}</li>
              <li>{t("home.platform.li2")}</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mt-6">
              {t("home.platform.p3")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 mb-4 text-slate-900 text-center">
            {t("home.results.title")}
          </h2>
          <p className="text-slate-600 text-center mb-12">
            {t("home.results.subtitle")}
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {t("home.results.process")}
                </h3>
                <p className="text-slate-600">
                  {t("home.results.processDesc")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {t("home.results.deliverables")}
                </h3>
                <p className="text-slate-600">
                  {t("home.results.deliverablesDesc")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {t("home.results.ip")}
                </h3>
                <p className="text-slate-600">
                  {t("home.results.ipDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部行动召唤 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="page-h3 mb-4 text-slate-900">
            {t("home.hero.ctaTitle")}
          </h2>
          <p className="text-slate-600 mb-8">
            {t("home.hero.ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="gap-2 bg-[#4169E1] hover:bg-[#5b7ef0] text-white border-0">
              <Link href={`/${validLocale}/patents`}>
                {t("home.hero.viewWhitepaper")}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 bg-white border-[#4169E1]/60 text-slate-900 hover:bg-slate-50 hover:border-[#4169E1]">
              <Link href={`/${validLocale}/cooperation#contact`}>
                {t("home.hero.contactTeam")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FooterNav locale={validLocale} />
    </div>
  )
}
