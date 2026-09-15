import { Link } from "@/components/app-link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { PageHero } from "@/components/page-hero"
import { getTranslations } from "@/lib/translations"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"

export default async function AboutPage({
  params,
}: {
  params?: Promise<{ locale?: string }>
}) {
  const resolved = await (params ?? Promise.resolve({}))
  const validLocale: Locale = resolved.locale && isValidLocale(resolved.locale) ? resolved.locale : defaultLocale
  const [t, tEn] = await Promise.all([
    getTranslations(validLocale),
    getTranslations("en"),
  ])
  const prefix = `/${validLocale}`

  return (
    <div className="page-stage min-h-screen">
      <Navigation locale={validLocale} />
      <div>

      <PageHero
        variant="dark"
        background="stage"
        title={t("about.hero.title")}
        tagline={t("about.hero.tagline")}
        subtitle={t("about.hero.subtitle")}
      />

      {/* 企业概览 */}
      <section className="section-block relative">
        <div className="max-w-4xl mx-auto">
          <Card className="p-5 sm:p-8 md:p-12 gap-4 bg-white/[0.03] border border-white/12 ">
            <div className="space-y-6 page-body text-white/75">
              <div>
                <h2 className="page-h2 text-white mb-4">
                  {t("about.overview.title")}
                </h2>
                <p className="page-body text-white/70 mb-2">
                  {t("about.overview.companyName")}
                </p>
                <p className="page-caption text-white/55">{t("about.overview.location")}</p>
              </div>

              <div className="pt-4 border-t border-white/12">
                <h3 className="page-h3 text-white mb-4">{t("about.overview.companyProfile")}</h3>
                <p className="mb-4">
                  {t("about.overview.profile1")}
                </p>
                <p className="mb-4">
                  {t("about.overview.profile2")}
                </p>
              </div>

              <div className="pt-4 border-t border-white/12">
                <h3 className="page-h3 text-white mb-4">
                  {t("about.overview.rdCapability")}
                </h3>
                <p className="mb-4">
                  {t("about.overview.rdDesc")}
                </p>
              </div>

              <div className="pt-4 border-t border-white/12">
                <h3 className="page-h3 text-white mb-4">
                  {t("about.overview.evolution")}
                </h3>
                <p className="mb-4">
                  {t("about.overview.evolution1")}
                </p>
                <p className="mb-4">
                  {t("about.overview.evolution2")}
                </p>
              </div>

              {/* 企业愿景与核心理念 */}
              <div className="pt-4 border-t border-white/12">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="page-h3 text-white mb-3">
                      {t("about.overview.vision")}
                    </h3>
                    <p className="page-body text-white/70">
                      {t("about.overview.visionDesc")}
                    </p>
                  </div>
                  <div>
                    <h3 className="page-h3 text-white mb-3">
                      {t("about.overview.coreIdea")}
                    </h3>
                    <p className="page-body text-white/70">
                      {t("about.overview.coreIdeaDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 核心团队 */}
      <section className="section-block relative bg-[#F9FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="page-h2 text-slate-900 mb-4">{t("about.team.title")}</h2>
            <p className="page-body page-measure text-slate-600">{t("about.team.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 王博士 */}
            <Card id="wang" className="p-4 sm:p-6 gap-3 bg-white border border-slate-200 hover:border-[#0F4C81]/35 transition-colors shadow-sm">
              <div className="mb-4">
                <h3 className="page-h3 text-slate-900">{t("about.team.wang.name")}</h3>
                <p className="page-caption text-slate-500">
                  {validLocale === "zh" ? tEn("about.team.wang.name") : t("about.team.wang.name")}
                </p>
              </div>
              <div className="mb-3">
                <div className="inline-block px-3 py-1 bg-[#0F2A5C]/10 text-[#0F2A5C] text-xs font-medium rounded-full mb-2">
                  {t("about.team.wang.title")}
                </div>
              </div>
              <div className="space-y-3 page-body text-slate-600">
                <div>
                  <div className="mb-1">
                    <span className="font-semibold text-slate-900">{t("about.team.wang.background")}</span>
                  </div>
                  <p className="leading-relaxed">
                    {t("about.team.wang.backgroundDesc")}
                  </p>
                </div>
                <div>
                  <div className="mb-1">
                    <span className="font-semibold text-slate-900">{t("about.team.wang.credentials")}</span>
                  </div>
                  <p className="leading-relaxed">
                    {t("about.team.wang.credentialsDesc")}
                  </p>
                </div>
                <div>
                  <div className="mb-1">
                    <span className="font-semibold text-slate-900">{t("about.team.wang.capability")}</span>
                  </div>
                  <div className="space-y-2 leading-relaxed">
                    <p>{t("about.team.wang.capabilityDesc1")}</p>
                    <p>{t("about.team.wang.capabilityDesc2")}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* 何工 */}
            <Card className="p-4 sm:p-6 gap-3 bg-white border border-slate-200 hover:border-[#0F4C81]/35 transition-colors shadow-sm">
              <div className="mb-4">
                <h3 className="page-h3 text-slate-900">{t("about.team.he.name")}</h3>
                <p className="page-caption text-slate-500">
                  {validLocale === "zh" ? tEn("about.team.he.name") : t("about.team.he.name")}
                </p>
              </div>
              <div className="mb-3">
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full mb-2">
                  {t("about.team.he.title")}
                </div>
              </div>
              <div className="space-y-4 page-body text-slate-600">
                <div>
                  <div className="mb-2">
                    <span className="font-semibold text-slate-900">{t("about.team.he.background")}</span>
                  </div>
                  <div className="space-y-2 leading-relaxed">
                    <p>{t("about.team.he.backgroundDesc1")}</p>
                    <p>{t("about.team.he.backgroundDesc2")}</p>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <span className="font-semibold text-slate-900">{t("about.team.he.capability")}</span>
                  </div>
                  <div className="space-y-2 leading-relaxed">
                    <p>{t("about.team.he.capabilityDesc1")}</p>
                    <p>{t("about.team.he.capabilityDesc2")}</p>
                    <p>{t("about.team.he.capabilityDesc3")}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* 张工 */}
            <Card id="zhang-gong" className="p-4 sm:p-6 gap-3 bg-white border border-slate-200 hover:border-[#0F4C81]/35 transition-colors shadow-sm">
              <div className="mb-4">
                <h3 className="page-h3 text-slate-900">{t("about.team.zhang.name")}</h3>
                <p className="page-caption text-slate-500">
                  {validLocale === "zh" ? tEn("about.team.zhang.name") : t("about.team.zhang.name")}
                </p>
              </div>
              <div className="mb-3">
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full mb-2">
                  {t("about.team.zhang.title")}
                </div>
              </div>
              <div className="space-y-4 page-body text-slate-600">
                <div>
                  <div className="mb-2">
                    <span className="font-semibold text-slate-900">{t("about.team.zhang.background")}</span>
                  </div>
                  <p className="leading-relaxed">
                    {t("about.team.zhang.backgroundDesc")}
                  </p>
                </div>
                <div>
                  <div className="mb-2">
                    <span className="font-semibold text-slate-900">{t("about.team.zhang.capability")}</span>
                  </div>
                  <div className="space-y-3 leading-relaxed">
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{t("about.team.zhang.solution")}</p>
                      <p>{t("about.team.zhang.solutionDesc")}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{t("about.team.zhang.response")}</p>
                      <p>{t("about.team.zhang.responseDesc")}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{t("about.team.zhang.ev")}</p>
                      <div className="space-y-2 mt-2">
                        <p>
                          <span className="font-semibold">{t("about.team.zhang.evAssembly")}</span> {t("about.team.zhang.evAssemblyDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 核心历程 - 时间轴 */}
      <section className="section-block relative bg-[#F9FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="page-h2 text-slate-900 mb-4">{t("about.timeline.title")}</h2>
            <p className="page-body page-measure text-slate-600">{t("about.timeline.subtitle")}</p>
          </div>

          <div className="relative">
            {/* 时间轴竖线 */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

            {/* 时间轴项目 */}
            <div className="space-y-12">
              {/* 2025 - 专利集群 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 md:w-24 text-right md:text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2A7FC4] text-white font-semibold text-lg relative z-10">
                    2025
                  </div>
                </div>
                <div className="flex-1 md:ml-8">
                  <Card className="p-4 sm:p-6 gap-3 bg-white border border-slate-200 hover:border-[#0F4C81]/35 transition-colors shadow-sm">
                    <h3 className="page-h3 text-slate-900 mb-3">{t("about.timeline.2025Patents")}</h3>
                    <p className="page-body text-slate-600">
                      {t("about.timeline.2025PatentsDesc")}
                    </p>
                  </Card>
                </div>
              </div>

              {/* 2025 - 热管理材料突破 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 md:w-24 text-right md:text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B5F96] text-white font-semibold text-lg relative z-10">
                    2025
                  </div>
                </div>
                <div className="flex-1 md:ml-8">
                  <Card className="p-4 sm:p-6 gap-3 bg-white border border-slate-200 hover:border-[#0F4C81]/35 transition-colors shadow-sm">
                    <h3 className="page-h3 text-slate-900 mb-3">{t("about.timeline.2025Thermal")}</h3>
                    <p className="page-body text-slate-600">
                      {t("about.timeline.2025ThermalDesc")}
                    </p>
                  </Card>
                </div>
              </div>

              {/* 2023 - 战略迁址 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 md:w-24 text-right md:text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F4C81] text-white font-semibold text-lg relative z-10">
                    2023
                  </div>
                </div>
                <div className="flex-1 md:ml-8">
                  <Card className="p-4 sm:p-6 gap-3 bg-white border border-slate-200 hover:border-[#0F4C81]/35 transition-colors shadow-sm">
                    <h3 className="page-h3 text-slate-900 mb-3">{t("about.timeline.2023Relocate")}</h3>
                    <p className="page-body text-slate-600">
                      {t("about.timeline.2023RelocateDesc")}
                    </p>
                  </Card>
                </div>
              </div>

              {/* 2018 - 公司启航 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 md:w-24 text-right md:text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#163A5F] text-white font-semibold text-lg relative z-10">
                    2018
                  </div>
                </div>
                <div className="flex-1 md:ml-8">
                  <Card className="p-4 sm:p-6 gap-3 bg-white border border-slate-200 hover:border-[#0F4C81]/35 transition-colors shadow-sm">
                    <h3 className="page-h3 text-slate-900 mb-3">{t("about.timeline.2018Founding")}</h3>
                    <p className="page-body text-slate-600">
                      {t("about.timeline.2018FoundingDesc")}
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* 查看更多动态链接 */}
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-[#2A7FC4]/40 text-[#0F2A5C] hover:bg-slate-50 bg-transparent min-h-[44px]"
            >
              <Link href={`${prefix}/news`}>
                {t("about.timeline.moreNews")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterNav locale={validLocale} />
      </div>
    </div>
  )
}

