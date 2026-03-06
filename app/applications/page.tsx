import Link from "next/link"
import { Cpu, Zap, Car, Radio, Sparkles, Home, Battery, Plane, FlaskConical, Droplets, FileText, Microscope, ShieldCheck, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { ApplicationCard } from "@/components/application-card"
import { getTranslations } from "@/lib/translations"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"

export default async function ApplicationsPage({
  params,
}: {
  params?: Promise<{ locale?: string }>
}) {
  const resolved = await (params ?? Promise.resolve({}))
  const validLocale: Locale = resolved.locale && isValidLocale(resolved.locale) ? resolved.locale : defaultLocale
  const t = getTranslations(validLocale)
  const prefix = `/${validLocale}`

  const layers = [
    { levelKey: "layer1Level", titleKey: "layer1Title", itemsKey: "layer1Items", descKey: "layer1Desc", tagKey: "layer1Tag", color: "border-blue-500/50 bg-blue-500/20", Icon: Cpu, iconColor: "text-blue-400", href: "#thermal-management" },
    { levelKey: "layer2Level", titleKey: "layer2Title", itemsKey: "layer2Items", descKey: "layer2Desc", tagKey: "layer2Tag", color: "border-sky-500/50 bg-sky-500/10", Icon: Zap, iconColor: "text-sky-400", href: "#consumer-electronics" },
    { levelKey: "layer3Level", titleKey: "layer3Title", itemsKey: "layer3Items", descKey: "layer3Desc", tagKey: "layer3Tag", color: "border-emerald-500/50 bg-emerald-500/10", Icon: Battery, iconColor: "text-emerald-400", href: "#energy-environment" },
    { levelKey: "layer4Level", titleKey: "layer4Title", itemsKey: "layer4Items", descKey: "layer4Desc", tagKey: "layer4Tag", color: "border-purple-500/50 bg-purple-500/10", Icon: Microscope, iconColor: "text-purple-400", href: "#frontier-research" },
  ] as const

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation locale={validLocale} />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">{t("applications.title")}</h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            {t("applications.subtitle")}
          </p>
        </div>
      </section>

      {/* 应用蓝图 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-full py-12 px-4 bg-slate-950 rounded-3xl border border-slate-800">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("applications.blueprint.title")}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{t("applications.blueprint.subtitle")}</p>
            </div>

            <div className="max-w-4xl mx-auto relative space-y-4">
              {layers.map((layer, index) => (
                <ApplicationCard
                  key={index}
                  level={t(`applications.blueprint.${layer.levelKey}`)}
                  title={t(`applications.blueprint.${layer.titleKey}`)}
                  items={t(`applications.blueprint.${layer.itemsKey}`).split("|")}
                  description={t(`applications.blueprint.${layer.descKey}`)}
                  color={layer.color}
                  icon={<layer.Icon className={`w-5 h-5 ${layer.iconColor}`} />}
                  tag={t(`applications.blueprint.${layer.tagKey}`)}
                  href={layer.href}
                />
              ))}

              {/* 底部基座 */}
              <div className="pt-8 flex flex-col items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>
                <div className="px-8 py-4 bg-slate-800 rounded-xl border border-slate-600 flex items-center gap-3 shadow-2xl">
                  <ShieldCheck className="w-6 h-6 text-sky-500" />
                  <div>
                    <div className="text-[10px] text-sky-500 font-bold uppercase tracking-[0.2em]">{t("applications.blueprint.foundationLabel")}</div>
                    <div className="text-white font-black tracking-tight">{t("applications.blueprint.foundation")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心工业散热版块 */}
      <section id="thermal-management" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-6 py-2 bg-sky-600 rounded-full text-white font-bold text-sm mb-4">
              {t("applications.thermal.badge")}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t("applications.thermal.title")}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t("applications.thermal.subtitle")}
            </p>
          </div>

          <div className="mb-12 sm:mb-16">
            <Card className="p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-sky-50 to-white border-sky-200 hover:shadow-2xl hover:border-sky-400 transition-all">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-sky-600 flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="inline-block px-4 py-1 bg-sky-600 rounded-full text-white text-xs font-bold mb-2">
                      {t("applications.thermal.aiChipBadge")}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">{t("applications.thermal.aiChipTitle")}</h3>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {t("applications.thermal.aiChipDesc")}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <div className="text-sky-600 font-bold mb-3 text-lg">{t("applications.thermal.geoCoupling")}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t("applications.thermal.geoCouplingDesc")}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <div className="text-sky-600 font-bold mb-3 text-lg">{t("applications.thermal.thermalDilution")}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t("applications.thermal.thermalDilutionDesc")}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <div className="text-sky-600 font-bold mb-3 text-lg">{t("applications.thermal.systemSync")}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t("applications.thermal.systemSyncDesc")}
                    </p>
                  </div>
                </div>

                <div className="bg-sky-50 border border-sky-200 rounded-lg p-5 mb-6">
                  <div className="text-sky-900 font-semibold mb-2 text-sm">{t("applications.thermal.materialsLabel")}</div>
                  <div className="grid md:grid-cols-3 gap-2 text-xs text-slate-700">
                    <div>• {t("applications.thermal.material1")}</div>
                    <div>• {t("applications.thermal.material2")}</div>
                    <div>• {t("applications.thermal.material3")}</div>
                  </div>
                </div>

                <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
                  <div className="text-sky-900 font-semibold mb-3">{t("applications.thermal.scenariosLabel")}</div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                      <span>{t("applications.thermal.scenario1")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                      <span>{t("applications.thermal.scenario2")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                      <span>{t("applications.thermal.scenario3")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                      <span>{t("applications.thermal.scenario4")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Power Semiconductors */}
            <Card className="mx-0 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">{t("applications.thermal.powerSemiconductorTitle")}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                {t("applications.thermal.powerSemiconductorDesc")}
              </p>
              <div className="text-sm text-slate-700 space-y-2 mb-6">
                <div className="font-semibold">{t("applications.thermal.scenariosSubLabel")}</div>
                <div className="pl-4 space-y-1">
                  <div>• {t("applications.thermal.psScenario1")}</div>
                  <div>• {t("applications.thermal.psScenario2")}</div>
                  <div>• {t("applications.thermal.psScenario3")}</div>
                  <div>• {t("applications.thermal.psScenario4")}</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">{t("applications.thermal.materialsLabel")}</div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>• {t("applications.thermal.material1")}</div>
                  <div>• {t("applications.thermal.material2")}</div>
                  <div>• {t("applications.thermal.material3")}</div>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <Link href={`${prefix}/products`}>{t("applications.cta.viewMaterials")}</Link>
              </Button>
            </Card>

            {/* EV & Transportation */}
            <Card className="mx-0 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Car className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">{t("applications.thermal.evTitle")}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                {t("applications.thermal.evDesc")}
              </p>
              <div className="text-sm text-slate-700 space-y-2 mb-6">
                <div className="font-semibold">{t("applications.thermal.scenariosSubLabel")}</div>
                <div className="pl-4 space-y-1">
                  <div>• {t("applications.thermal.evScenario1")}</div>
                  <div>• {t("applications.thermal.evScenario2")}</div>
                  <div>• {t("applications.thermal.evScenario3")}</div>
                  <div>• {t("applications.thermal.evScenario4")}</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">{t("applications.thermal.materialsLabel")}</div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>• {t("applications.thermal.material1")}</div>
                  <div>• {t("applications.thermal.material3")}</div>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <Link href={`${prefix}/products`}>{t("applications.cta.viewMaterials")}</Link>
              </Button>
            </Card>

            {/* 5G Communications */}
            <Card className="mx-0 sm:mx-0 p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Radio className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">{t("applications.thermal.fiveGTitle")}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                {t("applications.thermal.fiveGDesc")}
              </p>
              <div className="text-sm text-slate-700 space-y-2 mb-6">
                <div className="font-semibold">{t("applications.thermal.scenariosSubLabel")}</div>
                <div className="pl-4 space-y-1">
                  <div>• {t("applications.thermal.fiveGScenario1")}</div>
                  <div>• {t("applications.thermal.fiveGScenario2")}</div>
                  <div>• {t("applications.thermal.fiveGScenario3")}</div>
                  <div>• {t("applications.thermal.fiveGScenario4")}</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">{t("applications.thermal.materialsLabel")}</div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>• {t("applications.thermal.material1")}</div>
                  <div>• {t("applications.thermal.material2")}</div>
                  <div>• {t("applications.thermal.material3")}</div>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <Link href={`${prefix}/products`}>{t("applications.cta.viewMaterials")}</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 消费电子与家居生活 */}
      <section id="consumer-electronics" className="py-20 px-6 lg:px-8 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("applications.consumer.sectionTitle")}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto px-4">{t("applications.consumer.sectionSubtitle")}</p>
          </div>

          <div className="space-y-6">
            {/* 大功率无线充电高导热线圈 */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Radio className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 text-center">{t("applications.consumer.coilTitle")}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                {t("applications.consumer.coilDesc")}
              </p>
              
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-800 mb-3">{t("applications.consumer.coreSolution")}</div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t("applications.consumer.coilSolution")}
                </p>
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-4">
                  <div className="text-xs font-semibold text-sky-900 mb-2">{t("applications.consumer.techAdvantage")}</div>
                  <div className="text-xs text-slate-700 space-y-1">
                    <div>• {t("applications.consumer.coilAdv1")}</div>
                    <div>• {t("applications.consumer.coilAdv2")}</div>
                    <div>• {t("applications.consumer.coilAdv3")}</div>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="text-xs font-semibold text-slate-800 mb-2">{t("applications.consumer.physicsMech")}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t("applications.consumer.coilMech")}
                  </p>
                </div>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">{t("applications.thermal.materialsLabel")}</div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>• {t("applications.thermal.material1")}</div>
                  <div>• {t("applications.thermal.material2")}</div>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <a href="/docs/diamond-coil.pdf" target="_blank" rel="noopener noreferrer">
                  {t("applications.consumer.viewSolution")}
                </a>
              </Button>
            </Card>

            {/* 消费电子与家居生活 - 原有内容 */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Home className="w-8 h-8 text-sky-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 text-center">{t("applications.consumer.lifeTitle")}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-center text-lg">
                {t("applications.consumer.lifeDesc")}
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="font-semibold text-slate-800 mb-4 text-lg">{t("applications.consumer.homeDir")}</div>
                  <div className="space-y-2 text-slate-700 pl-4">
                    <div>• {t("applications.consumer.homeItem")}</div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-slate-800 mb-4 text-lg">{t("applications.consumer.consumerDir")}</div>
                  <div className="space-y-2 text-slate-700 pl-4">
                    <div>• {t("applications.consumer.consumerItem1")}</div>
                    <div>• {t("applications.consumer.consumerItem2")}</div>
                    <div>• {t("applications.consumer.consumerItem3")}</div>
                    <div>• {t("applications.consumer.consumerItem4")}</div>
                  </div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-5 mb-6">
                <div className="text-sm font-semibold text-sky-900 mb-2">{t("applications.thermal.materialsLabel")}</div>
                <div className="text-xs text-slate-700 space-y-1">
                  <div>• {t("applications.consumer.materialRelated")}</div>
                  <div>• {t("applications.thermal.material3")}</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
                <div className="font-semibold text-sky-900 mb-3">{t("applications.consumer.techValue")}</div>
                <div className="text-sm text-slate-700 leading-relaxed">
                  {t("applications.consumer.techValueDesc")}
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent mt-6"
                asChild
              >
                <Link href={`${prefix}/products`}>{t("applications.cta.viewMaterials")}</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 能源与环境系统 */}
      <section id="energy-environment" className="py-20 px-6 lg:px-8 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-green-100 rounded-full text-green-700 text-sm font-semibold mb-4">
              {t("applications.energy.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("applications.energy.sectionTitle")}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto px-4">
              {t("applications.energy.sectionSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Solid-state Battery */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Battery className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{t("applications.energy.solidStateTitle")}</h3>
              <div className="mb-6">
                <div className="text-sm font-semibold text-sky-600 mb-2">{t("applications.energy.solidStatePhysics")}</div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t("applications.energy.solidStatePhysicsDesc")}
                </p>
                <div className="text-sm font-semibold text-slate-700 mb-2">{t("applications.energy.solidStateTech")}</div>
                <div className="text-sm text-slate-600 space-y-1 pl-4 mb-4">
                  <div>• {t("applications.energy.solidStateAdv1")}</div>
                  <div>• {t("applications.energy.solidStateAdv2")}</div>
                  <div>• {t("applications.energy.solidStateAdv3")}</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">{t("applications.energy.solidStateValue")}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{t("applications.energy.solidStateValueDesc")}</div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <a href="/docs/diamond-battery.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2 inline" />
                  {t("applications.energy.viewWhitepaper")}
                </a>
              </Button>
            </Card>

            {/* Water Treatment */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Droplets className="w-7 h-7 text-sky-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{t("applications.energy.waterTitle")}</h3>
              <div className="mb-6">
                <div className="text-sm font-semibold text-sky-600 mb-2">{t("applications.energy.solidStatePhysics")}</div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t("applications.energy.waterPhysicsDesc")}
                </p>
                <div className="text-sm font-semibold text-slate-700 mb-2">{t("applications.energy.solidStateTech")}</div>
                <div className="text-sm text-slate-600 space-y-1 pl-4 mb-4">
                  <div>• {t("applications.energy.waterAdv1")}</div>
                  <div>• {t("applications.energy.waterAdv2")}</div>
                  <div>• {t("applications.energy.waterAdv3")}</div>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded p-4 mb-6">
                <div className="text-xs font-semibold text-sky-900 mb-1">{t("applications.energy.solidStateValue")}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{t("applications.energy.waterValueDesc")}</div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                asChild
              >
                <a href="/docs/diamond-water.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2 inline" />
                  {t("applications.energy.viewDeep")}
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 前沿物理探索 */}
      <section id="frontier-research" className="py-20 px-6 lg:px-8 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold mb-4">
              {t("applications.frontier.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("applications.frontier.sectionTitle")}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto px-4">{t("applications.frontier.sectionSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {/* Superconductor Research */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-slate-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{t("applications.frontier.superconductorTitle")}</h3>
                </div>
                <div className="px-3 py-1 bg-slate-100/80 rounded-full text-xs font-medium text-slate-600">
                  {t("applications.frontier.superconductorBadge")}
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">{t("applications.frontier.superconductorPhysics")}</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t("applications.frontier.superconductorPhysicsDesc")}
                </p>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">{t("applications.frontier.researchPoints")}</div>
                <div className="text-sm text-slate-600 space-y-1 pl-4">
                  <div>• {t("applications.frontier.superconductorRes1")}</div>
                  <div>• {t("applications.frontier.superconductorRes2")}</div>
                  <div>• {t("applications.frontier.superconductorRes3")}</div>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-4">
                <div className="text-xs font-semibold text-slate-800 mb-1">{t("applications.frontier.vision")}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{t("applications.frontier.superconductorVision")}</div>
              </div>
            </Card>

            {/* Quantum Computing */}
            <Card className="p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                    <FlaskConical className="w-7 h-7 text-slate-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{t("applications.frontier.quantumTitle")}</h3>
                </div>
                <div className="px-3 py-1 bg-slate-100/80 rounded-full text-xs font-medium text-slate-600">
                  {t("applications.frontier.quantumBadge")}
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">{t("applications.frontier.superconductorPhysics")}</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t("applications.frontier.quantumPhysicsDesc")}
                </p>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">{t("applications.frontier.researchPoints")}</div>
                <div className="text-sm text-slate-600 space-y-1 pl-4">
                  <div>• {t("applications.frontier.quantumRes1")}</div>
                  <div>• {t("applications.frontier.quantumRes2")}</div>
                  <div>• {t("applications.frontier.quantumRes3")}</div>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-4">
                <div className="text-xs font-semibold text-slate-800 mb-1">{t("applications.frontier.vision")}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{t("applications.frontier.quantumVision")}</div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="mx-4 sm:mx-0 min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
            >
              <Link href={`${prefix}/patents`}>{t("applications.cta.viewFullTech")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 tracking-wide" style={{ letterSpacing: "0.15em" }}>
            {t("applications.summary.title")}
          </h2>

          <p className="text-xl text-slate-600 mb-8 font-light">{t("applications.summary.tagline")}</p>

          <p className="text-lg mb-12 leading-relaxed max-w-3xl mx-auto text-slate-600">
            {t("applications.summary.desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto min-h-[44px] gap-2 bg-sky-600 hover:bg-sky-700 text-white shadow-lg"
            >
              <Link href={`${prefix}/cooperation`}>{t("applications.cta.techDialogue")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto min-h-[44px] gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
            >
              <Link href={`${prefix}/patents`}>{t("applications.cta.viewTechPath")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterNav locale={validLocale} />
    </div>
  )
}
