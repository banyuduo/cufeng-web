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
      <section className="relative pt-24 sm:pt-32 lg:pt-36 xl:pt-40 pb-12 sm:pb-16 lg:pb-24 px-6 lg:px-8 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <div className="space-y-10 sm:space-y-16 lg:space-y-24">
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
              <p className="page-body page-measure text-white/70 mb-6">
                {t("home.hero.platformFocus")}
              </p>
              <Button
                size="lg"
                asChild
                className="gap-2 w-full sm:w-auto bg-[#0F4C81] hover:bg-[#163A5F] text-white min-h-[44px] border-0 text-base"
              >
                <Link href={`/${validLocale}/patents`}>
                  {t("home.hero.viewTechArchitecture")}
                </Link>
              </Button>
              <div className="mt-4">
                <Link
                  href={`/${validLocale}/applications`}
                  className="text-white/80 hover:text-white text-sm lg:text-base font-medium underline-offset-4 hover:underline"
                >
                  {t("home.hero.viewTechApplications")}
                </Link>
              </div>
            </div>

            {/* 第二层：技术平台（标题 + 图自带边框） */}
            <div>
              <h2 className="page-h2 text-white text-center mb-5 sm:mb-8 lg:mb-10">
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
                  platformAttr: t("home.platform.diagram.platformAttr"),
                }}
              />
            </div>

            {/* 技术演化路径 */}
            <div>
              <h2 className="page-h2 text-white text-center mb-4 sm:mb-6 lg:mb-8">
                {t("home.techEvolution.title")}
              </h2>
              <div className="text-white/75">
                <p className="page-body mb-3">{t("home.techEvolution.desc")}</p>
                <ul className="page-body list-disc pl-5 space-y-2">
                  <li>{t("home.techEvolution.evolution1")}</li>
                  <li>{t("home.techEvolution.evolution2")}</li>
                  <li>{t("home.techEvolution.evolution3")}</li>
                </ul>
              </div>
            </div>

            {/* 阶段性成果：已实现条目 + 工艺/样品/IP */}
            <div>
              <h2 className="page-h2 text-white text-center mb-5 sm:mb-8 lg:mb-10">
                {t("home.results.title")}
              </h2>
              <ol className="space-y-4 sm:space-y-5 lg:space-y-8 max-w-3xl lg:max-w-none mb-8 sm:mb-12 lg:mb-14">
                <li>
                  <p className="page-h3 text-white mb-1.5">
                    <span className="text-white/45 font-medium">1. </span>
                    {t("home.hero.achievement1")}
                  </p>
                  <p className="page-body text-white/70">
                    {t("home.hero.achievement1Value")}
                  </p>
                  {t("home.hero.achievement1Note") ? (
                    <p className="page-caption text-white/55 mt-1">
                      {t("home.hero.achievement1Note")}
                    </p>
                  ) : null}
                </li>
                <li>
                  <p className="page-h3 text-white mb-1.5">
                    <span className="text-white/45 font-medium">2. </span>
                    {t("home.hero.achievement2")}
                  </p>
                  {t("home.hero.achievement2Note") ? (
                    <p className="page-caption text-white/55 mt-1">
                      {t("home.hero.achievement2Note")}
                    </p>
                  ) : null}
                </li>
              </ol>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 border-t border-white/15 pt-6 sm:pt-8 lg:pt-10">
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
