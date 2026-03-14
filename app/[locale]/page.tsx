import Link from "next/link"
import { Atom, Shield, Handshake, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FooterNav } from "@/components/footer-nav"
import { Navigation } from "@/components/navigation"
import { HeroWaveBg } from "@/components/hero-wave-bg"
import { HeroPlatformDiagram } from "@/components/hero-platform-diagram"
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

      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <HeroWaveBg />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="page-h1 text-white mb-10 sm:mb-12 opacity-100">
              {t("home.hero.title")}
            </h1>

            <div className="mb-12">
              <HeroPlatformDiagram
                strings={{
                  layer1Title: t("home.hero.diagram.layer1Title"),
                  layer1Text: t("home.hero.diagram.layer1Text"),
                  layer2Title: t("home.hero.diagram.layer2Title"),
                  layer2Text: t("home.hero.diagram.layer2Text"),
                  layer2Thermal: t("home.hero.diagram.layer2Thermal"),
                  layer2Mechanical: t("home.hero.diagram.layer2Mechanical"),
                  layer2Electrical: t("home.hero.diagram.layer2Electrical"),
                  layer3Title: t("home.hero.diagram.layer3Title"),
                  layer3Line1: t("home.hero.diagram.layer3Line1"),
                  layer3Line2: t("home.hero.diagram.layer3Line2"),
                  layer4Title: t("home.hero.diagram.layer4Title"),
                  layer4Line1: t("home.hero.diagram.layer4Line1"),
                  layer4Line2: t("home.hero.diagram.layer4Line2"),
                  layer4Line3: t("home.hero.diagram.layer4Line3"),
                  layer4MeltLabel: t("home.hero.diagram.layer4MeltLabel"),
                }}
              />
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-[#002244]/50 border border-[#00b4d8]/40 rounded-2xl p-8 w-full">
                <h3 className="page-h3 text-[#7dd3fc] mb-6">
                  {t("home.hero.achieved")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00b4d8] mt-2 flex-shrink-0" />
                    <p className="text-white/85 leading-relaxed">
                      {t("home.hero.achievement1")}
                      <br />
                      <span className="text-[#7dd3fc] font-mono text-sm">
                        {t("home.hero.achievement1Value")}
                      </span>
                      <br />
                      <span className="text-white/70 text-sm">
                        {t("home.hero.achievement1Note")}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00b4d8] mt-2 flex-shrink-0" />
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
              <p className="page-lead text-white/85">
                {t("home.hero.platformFocus")}
              </p>
            </div>

            {/* 技术演化路径 - 简化版 */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-[#002244]/50 border border-[#00b4d8]/30 rounded-xl p-6 w-full">
                <h3 className="page-h3 text-[#7dd3fc] mb-3 text-base sm:text-lg">
                  {t("home.techEvolution.title")}
                </h3>
                <p className="text-white/85 leading-relaxed text-sm mb-4">
                  {t("home.techEvolution.desc")}
                </p>
                <Link
                  href={`/${validLocale}/patents#evolution-path`}
                  className="inline-flex items-center gap-2 text-[#7dd3fc] hover:text-[#8EE8FF] text-sm font-medium transition-colors"
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
                className="gap-2 bg-[#0077b6] hover:bg-[#0096c7] text-white shadow-lg shadow-[#0077b6]/30 w-full sm:w-auto min-h-[44px] border-0"
              >
                <Link href={`/${validLocale}/applications`}>
                  {t("home.hero.viewTechApplications")}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2 text-white border-[#00b4d8]/80 bg-transparent hover:bg-white/10 w-full sm:w-auto min-h-[44px]"
              >
                <Link href={`/${validLocale}/cooperation`}>
                  {t("home.hero.projectCooperation")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0077b6]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#00b4d8]/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 relative z-10">
            <Card className="p-6 sm:p-8 bg-[#002244]/60 border-[#0077b6]/30 hover:border-[#00b4d8]/45 backdrop-blur-sm hover:shadow-lg hover:shadow-[#0077b6]/10 transition-all relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-light text-slate-500 tabular-nums">01</span>
                <span className="h-px flex-1 max-w-12 bg-[#0077b6]/30" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center mb-6">
                <Atom className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <h3 className="page-h3 mb-3 text-white">
                {t("home.features.innovation")}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {t("home.features.innovationDesc")}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-[#002244]/60 border-[#0077b6]/30 hover:border-[#00b4d8]/45 backdrop-blur-sm hover:shadow-lg hover:shadow-[#0077b6]/10 transition-all relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-light text-slate-500 tabular-nums">02</span>
                <span className="h-px flex-1 max-w-12 bg-[#0077b6]/30" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <h3 className="page-h3 mb-3 text-white">
                {t("home.features.patents")}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {t("home.features.patentsDesc")}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-[#002244]/60 border-[#0077b6]/30 hover:border-[#00b4d8]/45 backdrop-blur-sm hover:shadow-lg hover:shadow-[#0077b6]/10 transition-all relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-light text-slate-500 tabular-nums">03</span>
                <span className="h-px flex-1 max-w-12 bg-[#0077b6]/30" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6 text-[#73DBFF]" />
              </div>
              <h3 className="page-h3 mb-3 text-white">
                {t("home.features.cooperation")}
              </h3>
              <div className="text-slate-300 leading-relaxed space-y-3">
                <p>{t("home.features.cooperationIntro")}</p>
                <p className="font-medium text-white">{t("home.features.cooperationPath")}</p>
                <p className="text-sm text-slate-400">{t("home.features.cooperationDesc")}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 mb-8 text-white text-center">
            {t("home.platform.title")}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="page-lead text-slate-300">
              {t("home.platform.p1")}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mt-6">
              {t("home.platform.p2")}
            </p>
            <ul className="list-disc list-inside page-lead text-slate-300 mt-4 space-y-2">
              <li>{t("home.platform.li1")}</li>
              <li>{t("home.platform.li2")}</li>
            </ul>
            <p className="text-lg text-slate-300 leading-relaxed mt-6">
              {t("home.platform.p3")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 mb-4 text-white text-center">
            {t("home.results.title")}
          </h2>
          <p className="page-caption text-slate-400 text-center mb-12">
            {t("home.results.subtitle")}
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-[#002244]/50 border border-[#0077b6]/25 backdrop-blur-sm rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#73DBFF]" />
              </div>
              <div>
                <h3 className="page-h3 text-white mb-2">
                  {t("home.results.process")}
                </h3>
                <p className="page-body text-slate-300">
                  {t("home.results.processDesc")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#002244]/50 border border-[#0077b6]/25 backdrop-blur-sm rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#73DBFF]" />
              </div>
              <div>
                <h3 className="page-h3 text-white mb-2">
                  {t("home.results.deliverables")}
                </h3>
                <p className="page-body text-slate-300">
                  {t("home.results.deliverablesDesc")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#002244]/50 border border-[#0077b6]/25 backdrop-blur-sm rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#73DBFF]" />
              </div>
              <div>
                <h3 className="page-h3 text-white mb-2">
                  {t("home.results.ip")}
                </h3>
                <p className="page-body text-slate-300">
                  {t("home.results.ipDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部行动召唤 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="page-h3 mb-4 text-white">
            {t("home.hero.ctaTitle")}
          </h2>
          <p className="page-caption text-slate-400 mb-8">
            {t("home.hero.ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="gap-2 bg-[#0077b6] hover:bg-[#0096c7] text-white border-0">
              <Link href={`/${validLocale}/patents`}>
                {t("home.hero.viewWhitepaper")}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent border-[#00b4d8]/80 text-white hover:bg-white/10 hover:border-[#00b4d8]">
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
