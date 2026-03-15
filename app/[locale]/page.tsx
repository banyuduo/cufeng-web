import Link from "next/link"
import dynamic from "next/dynamic"
import { Atom, Shield, Handshake, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { getTranslations } from "@/lib/translations"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"

import { HeroWaveBg } from "@/components/hero-wave-bg"
import { HeroPlatformDiagram } from "@/components/hero-platform-diagram"
import { FooterNav } from "@/components/footer-nav"

const PlatformValueDiagram = dynamic(
  () => import("@/components/platform-value-diagram").then((mod) => mod.PlatformValueDiagram),
  { ssr: true }
)

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getTranslations(validLocale)

  return (
    <div className="min-h-screen bg-background">
      <Navigation locale={validLocale} />

      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <HeroWaveBg />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto space-y-14 sm:space-y-16">
            {/* 第一层：愿景（最顶部） */}
            <div className="text-center">
              <h1 className="page-h1 text-white mb-4 sm:mb-5 opacity-100">
                {t("home.hero.visionTitle")}
              </h1>
              <p className="page-lead text-white/90 font-light">
                {t("home.hero.visionSubtitle")}
              </p>
            </div>

            {/* 应用方向 + 查看技术应用领域按钮（先介绍应用方向与愿景） */}
            <div className="text-center rounded-2xl border border-[#0077b6]/40 bg-[#001a33]/40 p-6 sm:p-8">
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-6 leading-relaxed">
                {t("home.hero.platformFocus")}
              </p>
              <Button
                size="lg"
                asChild
                className="gap-2 bg-[#0077b6] hover:bg-[#0096c7] text-white shadow-lg shadow-[#0077b6]/30 min-h-[44px] border-0 text-base"
              >
                <Link href={`/${validLocale}/applications`}>
                  {t("home.hero.viewTechApplications")}
                </Link>
              </Button>
            </div>

            {/* 第二层：技术平台大模块（标题 + 简短说明 + 三卡片图），为主标题愿景服务 */}
            <div className="rounded-2xl border border-[#0077b6]/40 bg-[#001a33]/40 overflow-hidden shadow-xl shadow-[#0077b6]/10">
              <div className="px-4 pt-6 sm:px-6 sm:pt-8 pb-2 text-center">
                <h2 className="page-h2 text-white mb-3 sm:mb-4">
                  {t("home.hero.title")}
                </h2>
              </div>
              <div className="px-3 pb-4 sm:px-5 sm:pb-6">
                <HeroPlatformDiagram
                  showLattice={false}
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
                    sp2LayerLabel: t("home.hero.sp2LayerLabel"),
                    sp3LayerLabel: t("home.hero.sp3LayerLabel"),
                    atomicTitle: t("home.hero.atomicTitle"),
                  }}
                />
              </div>
            </div>

            {/* 技术演化路径 */}
            <div className="rounded-2xl border border-[#0077b6]/40 bg-[#001a33]/40 overflow-hidden">
              <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                    <h3 className="page-h3 text-[#7dd3fc] text-center sm:text-left">
                      {t("home.techEvolution.title")}
                    </h3>
                    <Link
                      href={`/${validLocale}/patents#evolution-path`}
                      className="inline-flex items-center justify-center gap-2 text-[#7dd3fc] hover:text-[#8EE8FF] text-sm font-medium transition-colors shrink-0"
                    >
                      {t("home.techEvolution.viewFullPath")}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                <p className="text-white/85 leading-relaxed text-sm">
                  {t("home.techEvolution.desc")}
                </p>
              </div>
            </div>

            {/* 阶段性成果（当前已实现 + 工艺/样品/IP 整合为一块） */}
            <div>
              <h2 className="page-h2 text-white text-center mb-2 sm:mb-3">
                {t("home.results.title")}
              </h2>
              <p className="text-center text-[#7dd3fc] text-base sm:text-lg mb-6 sm:mb-8">
                {t("home.results.subtitle")}
              </p>
              <div className="max-w-4xl lg:max-w-5xl mx-auto rounded-2xl border border-[#00b4d8]/40 bg-[#002244]/50 overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-[#0077b6]/30">
                  <h3 className="page-h3 text-[#7dd3fc] mb-4">
                    {t("home.hero.achieved")}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 text-base text-white/92">
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="font-normal">
                        <span className="text-[#7dd3fc]">1. </span>
                        {t("home.hero.achievement1")}
                      </div>
                      <div className="text-[#7dd3fc] font-mono text-lg sm:text-xl">
                        {t("home.hero.achievement1Value")}
                        <span className="text-white/80 font-sans font-normal text-base ml-1">
                          （{t("home.hero.achievement1Note")}）
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="font-normal">
                        <span className="text-[#7dd3fc]">2. </span>
                        {t("home.hero.achievement2")}
                      </div>
                      <div className="text-white/80 font-normal">
                        {t("home.hero.achievement2Note")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-[#0077b6]/25">
                  <div className="flex items-start gap-4 p-5 sm:p-6">
                    <div className="w-10 h-10 rounded-full bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#73DBFF]" />
                    </div>
                    <div>
                      <h3 className="page-h3 text-white mb-1.5">{t("home.results.process")}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{t("home.results.processDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 sm:p-6">
                    <div className="w-10 h-10 rounded-full bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#73DBFF]" />
                    </div>
                    <div>
                      <h3 className="page-h3 text-white mb-1.5">{t("home.results.deliverables")}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{t("home.results.deliverablesDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 sm:p-6">
                    <div className="w-10 h-10 rounded-full bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#73DBFF]" />
                    </div>
                    <div>
                      <h3 className="page-h3 text-white mb-1.5">{t("home.results.ip")}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{t("home.results.ipDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 平台优势 — 三张卡片（图标置顶、标题加粗、短句项目符号） */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="page-h2 text-white text-center mb-8 sm:mb-10">
            {t("home.hero.platformAdvantageTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 bg-[#002244]/60 border-[#0077b6]/30 hover:border-[#00b4d8]/45 backdrop-blur-sm text-left">
              <div className="w-14 h-14 rounded-xl bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center mb-5">
                <Atom className="w-7 h-7 text-[#73DBFF]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                01 {t("home.features.innovation")}
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-[#00b4d8] mt-1.5">·</span>
                  <span><strong className="text-white/90">核心动作：</strong>{t("home.features.innovationAction")}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00b4d8] mt-1.5">·</span>
                  <span><strong className="text-white/90">核心价值：</strong>{t("home.features.innovationValue")}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00b4d8] mt-1.5">·</span>
                  <span><strong className="text-white/90">物理效应：</strong>{t("home.features.innovationEffect")}</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6 sm:p-8 bg-[#002244]/60 border-[#0077b6]/30 hover:border-[#00b4d8]/45 backdrop-blur-sm text-left">
              <div className="w-14 h-14 rounded-xl bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center mb-5">
                <Shield className="w-7 h-7 text-[#73DBFF]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                02 {t("home.features.patents")}
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-[#00b4d8] mt-1.5">·</span>
                  <span><strong className="text-white/90">布局逻辑：</strong>{t("home.features.patentsLogic")}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00b4d8] mt-1.5">·</span>
                  <span><strong className="text-white/90">现状：</strong>{t("home.features.patentsStatus")}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00b4d8] mt-1.5">·</span>
                  <span><strong className="text-white/90">价值：</strong>{t("home.features.patentsValue")}</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6 sm:p-8 bg-[#002244]/60 border-[#0077b6]/30 hover:border-[#00b4d8]/45 backdrop-blur-sm text-left">
              <div className="w-14 h-14 rounded-xl bg-[#73DBFF]/15 border border-[#0077b6]/25 flex items-center justify-center mb-5">
                <Handshake className="w-7 h-7 text-[#73DBFF]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                03 {t("home.features.industrial")}
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-[#00b4d8] mt-1.5">·</span>
                  <span><strong className="text-white/90">技术状态：</strong>{t("home.features.industrialStatus")}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00b4d8] mt-1.5">·</span>
                  <span><strong className="text-white/90">合作模式：</strong>{t("home.features.industrialMode")}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00b4d8] mt-1.5">·</span>
                  <span><strong className="text-white/90">愿景：</strong>{t("home.features.industrialVision")}</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 平台定位与价值 */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 mb-6 sm:mb-8 text-white text-center">
            {t("home.platform.title")}
          </h2>

          {/* 纵向生态基底图：应用接口 → 平台机制 → 传统材料极限 */}
          <PlatformValueDiagram
            strings={{
              layer1Title: t("home.platform.diagram.layer1Title"),
              layer1Tim: t("home.platform.diagram.layer1Tim"),
              layer1Substrate: t("home.platform.diagram.layer1Substrate"),
              layer1Devices: t("home.platform.diagram.layer1Devices"),
              layer1Hint: t("home.platform.diagram.layer1Hint"),
              layer2Title: t("home.platform.diagram.layer2Title"),
              layer2Item1: t("home.platform.diagram.layer2Item1"),
              layer2Item2: t("home.platform.diagram.layer2Item2"),
              layer2Item3: t("home.platform.diagram.layer2Item3"),
              layer2Item4: t("home.platform.diagram.layer2Item4"),
              layer2Item5: t("home.platform.diagram.layer2Item5"),
              layer2Item6: t("home.platform.diagram.layer2Item6"),
              layer2InterfaceLabel: t("home.platform.diagram.layer2InterfaceLabel"),
              layer2Bonding: t("home.platform.diagram.layer2Bonding"),
              layer2Stress: t("home.platform.diagram.layer2Stress"),
              layer2Coexist: t("home.platform.diagram.layer2Coexist"),
              layer2Thermal: t("home.platform.diagram.layer2Thermal"),
              layer2Electronic: t("home.platform.diagram.layer2Electronic"),
              layer3Title: t("home.platform.diagram.layer3Title"),
              layer3Label: t("home.platform.diagram.layer3Label"),
              platformAttr: t("home.platform.diagram.platformAttr"),
              rdConcept: t("home.platform.diagram.rdConcept"),
            }}
          />
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
