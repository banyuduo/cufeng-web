import { Link } from "@/components/app-link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { getTranslations } from "@/lib/translations"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"

import { HeroPlatformDiagram } from "@/components/hero-platform-diagram"
import { FooterNav } from "@/components/footer-nav"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getTranslations(validLocale)

  return (
    <div className="min-h-screen bg-[#0B1F33]">
      <Navigation locale={validLocale} />

      <div className="overflow-x-hidden">
      <section className="relative pt-24 sm:pt-28 lg:pt-28 pb-10 sm:pb-12 lg:pb-14 px-6 lg:px-8 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <div className="space-y-7 sm:space-y-8 lg:space-y-8">
            {/* 第一层：愿景（最顶部） */}
            <div className="text-center">
              <h1 className="page-h1 text-white mb-4 sm:mb-5 lg:mb-6 opacity-100">
                {t("home.hero.visionTitle")}
              </h1>
              <p className="page-lead page-measure text-white/75 font-light">
                {t("home.hero.visionSubtitle")}
              </p>
            </div>

            {/* 应用方向 + 查看技术应用领域按钮（先介绍应用方向与愿景） */}
            <div className="text-center">
              <p className="page-body page-measure text-white/70 mb-5">
                {t("home.hero.platformFocus")}
              </p>
              <div className="flex flex-row flex-wrap items-stretch justify-center gap-2 sm:gap-3">
                <Button
                  size="lg"
                  asChild
                  className="w-auto max-w-[48%] min-w-0 shrink sm:max-w-none min-h-[44px] h-auto py-2.5 px-3 sm:px-6 bg-[#0F4C81] hover:bg-[#163A5F] text-white border-0 text-sm sm:text-base whitespace-normal leading-snug text-center"
                >
                  <Link href={`/${validLocale}/patents`}>
                    {t("home.hero.viewTechArchitecture")}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-auto max-w-[48%] min-w-0 shrink sm:max-w-none min-h-[44px] h-auto py-2.5 px-3 sm:px-6 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white text-sm sm:text-base whitespace-normal leading-snug text-center"
                >
                  <Link href={`/${validLocale}/applications`}>
                    {t("home.hero.viewTechApplications")}
                  </Link>
                </Button>
              </div>
            </div>

            {/* 第二层：技术平台（标题 + 图自带边框） */}
            <div>
              <h2 className="page-h2 text-white text-center mb-4 sm:mb-5 lg:mb-6">
                {t("home.hero.title")}
              </h2>
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
                  sp2LayerLabel: t("home.hero.sp2LayerLabel"),
                  sp3LayerLabel: t("home.hero.sp3LayerLabel"),
                  atomicTitle: t("home.hero.atomicTitle"),
                  applicationsTitle: t("home.platform.diagram.layer1Title"),
                  applicationTim: t("home.platform.diagram.layer1Tim"),
                  applicationSubstrate: t("home.platform.diagram.layer1Substrate"),
                  applicationDevices: t("home.platform.diagram.layer1Devices"),
                  applicationHint: t("home.platform.diagram.layer1Hint"),
                  limitsTitle: t("home.platform.diagram.layer3Title"),
                  limitsLabel: t("home.platform.diagram.layer3Label"),
                  mechanismTitle: t("home.platform.diagram.layer2Title"),
                  mechanismItem1: t("home.platform.diagram.layer2Item1"),
                  mechanismItem2: t("home.platform.diagram.layer2Item2"),
                  mechanismItem3: t("home.platform.diagram.layer2Item3"),
                  mechanismItem4: t("home.platform.diagram.layer2Item4"),
                  mechanismItem5: t("home.platform.diagram.layer2Item5"),
                  mechanismItem6: t("home.platform.diagram.layer2Item6"),
                }}
              />
            </div>

            {/* 阶段性成果：已实现条目 + 工艺/样品/IP */}
            <div>
              <h2 className="page-h2 text-white text-center mb-4 sm:mb-5 lg:mb-6">
                {t("home.results.title")}
              </h2>
              <ol className="space-y-5 sm:space-y-6 max-w-3xl mx-auto mb-8 sm:mb-10">
                <li>
                  <p className="page-h3 text-white mb-1.5">
                    <span className="text-white/45 font-medium">1. </span>
                    {t("home.hero.achievement1")}
                  </p>
                  <p className="page-body text-white/70">
                    {t("home.hero.achievement1Value")}
                  </p>
                </li>
                <li>
                  <p className="page-h3 text-white mb-1.5">
                    <span className="text-white/45 font-medium">2. </span>
                    {t("home.hero.achievement2")}
                  </p>
                  <p className="page-body text-white/70">
                    {t("home.hero.achievement2Value")}
                  </p>
                </li>
              </ol>
              <div className="grid md:grid-cols-3 gap-5 md:gap-6 border-t border-white/15 pt-6 sm:pt-8">
                <div>
                  <h3 className="page-h3 text-white mb-2">{t("home.results.process")}</h3>
                  <p className="page-body text-white/70">{t("home.results.processDesc")}</p>
                </div>
                <div>
                  <h3 className="page-h3 text-white mb-2">{t("home.results.deliverables")}</h3>
                  <p className="page-body text-white/70">{t("home.results.deliverablesDesc")}</p>
                </div>
                <div>
                  <h3 className="page-h3 text-white mb-2">{t("home.results.ip")}</h3>
                  <p className="page-body text-white/70">{t("home.results.ipDesc")}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FooterNav locale={validLocale} />
      </div>
    </div>
  )
}
