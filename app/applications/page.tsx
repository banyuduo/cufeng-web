import Link from "next/link"
import { Cpu, Zap, Car, Sparkles, Home, Battery, Microscope, ShieldCheck, Droplets, Atom } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { PageHero } from "@/components/page-hero"
import { ApplicationCard } from "@/components/application-card"
import { HpcExpandableCard } from "@/components/hpc-expandable-card"
import { ConsumerExpandableCard } from "@/components/consumer-expandable-card"
import { FrontierExpandableCard } from "@/components/frontier-expandable-card"
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
    { levelKey: "layer1Level", titleKey: "layer1Title", itemsKey: "layer1Items", descKey: "layer1Desc", tagKey: "layer1Tag", color: "border-blue-500/50 bg-blue-500/20", Icon: Cpu, iconColor: "text-blue-400", href: "#hpc" },
    { levelKey: "layer2Level", titleKey: "layer2Title", itemsKey: "layer2Items", descKey: "layer2Desc", tagKey: "layer2Tag", color: "border-[#4169E1]/50 bg-[#73DBFF]/10", Icon: Zap, iconColor: "text-[#73DBFF]", href: "#power-semiconductor" },
    { levelKey: "layer3Level", titleKey: "layer3Title", itemsKey: "layer3Items", descKey: "layer3Desc", tagKey: "layer3Tag", color: "border-emerald-500/50 bg-emerald-500/10", Icon: Battery, iconColor: "text-emerald-400", href: "#ev-storage" },
    { levelKey: "layer4Level", titleKey: "layer4Title", itemsKey: "layer4Items", descKey: "layer4Desc", tagKey: "layer4Tag", color: "border-amber-500/50 bg-amber-500/10", Icon: Home, iconColor: "text-amber-400", href: "#consumer" },
    { levelKey: "layer5Level", titleKey: "layer5Title", itemsKey: "layer5Items", descKey: "layer5Desc", tagKey: "layer5Tag", color: "border-purple-500/50 bg-purple-500/10", Icon: Microscope, iconColor: "text-purple-400", href: "#frontier" },
  ] as const

  const categoryConfig = [
    { id: "hpc", key: "hpc", Icon: Cpu, color: "sky", bgClass: "bg-[#F9FAFC]", borderClass: "border-[#4169E1]/30", iconBg: "bg-[#0F2A5C]", iconColor: "text-[#73DBFF]" },
    { id: "power-semiconductor", key: "powerSemiconductor", Icon: Zap, color: "blue", bgClass: "bg-white", borderClass: "border-slate-200", iconBg: "bg-blue-600", iconColor: "text-blue-600" },
    { id: "ev-storage", key: "evStorage", Icon: Car, color: "emerald", bgClass: "bg-white", borderClass: "border-slate-200", iconBg: "bg-emerald-600", iconColor: "text-emerald-600" },
    { id: "consumer", key: "consumer", Icon: Home, color: "amber", bgClass: "bg-slate-50", borderClass: "border-slate-200", iconBg: "bg-amber-600", iconColor: "text-amber-600" },
    { id: "frontier", key: "frontier", Icon: Sparkles, color: "purple", bgClass: "bg-purple-50/50", borderClass: "border-purple-200", iconBg: "bg-purple-600", iconColor: "text-purple-600", isExploration: true },
  ] as const

  return (
    <div className="min-h-screen bg-[#F9FAFC]">
      <Navigation locale={validLocale} />

      <PageHero
        variant="light"
        title={t("applications.title")}
        subtitle={t("applications.subtitle")}
      />

      {/* 应用蓝图 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F9FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="w-full py-8 sm:py-12 px-4 sm:px-6 bg-[#0344b3] rounded-3xl border border-[#4169E1]/40 overflow-hidden">
            <div className="text-center mb-12 px-1">
              <h2 className="page-h2 text-white mb-4 md:text-3xl break-words">{t("applications.blueprint.title")}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base break-words">{t("applications.blueprint.subtitle")}</p>
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
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4169E1]/50 to-transparent mb-8"></div>
                <div className="px-8 py-4 bg-[#023B99] rounded-xl border border-[#4169E1]/40 flex items-center gap-3 shadow-2xl">
                  <ShieldCheck className="w-6 h-6 text-[#73DBFF]" />
                  <div>
                    <div className="text-[10px] text-[#73DBFF] font-bold uppercase tracking-[0.2em]">{t("applications.blueprint.foundationLabel")}</div>
                    <div className="text-white font-black tracking-tight">{t("applications.blueprint.foundation")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 五大应用分类卡片 */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {categoryConfig.map((cat) => {
              const base = `applications.categories.${cat.key}`
              const itemsStr = t(`${base}.items`)
              const items = itemsStr ? itemsStr.split("|").filter(Boolean) : []
              const materials = t(`${base}.materials`) !== `${base}.materials` ? t(`${base}.materials`) : undefined
              const badge = t(`${base}.badge`) !== `${base}.badge` ? t(`${base}.badge`) : undefined
              const subtitle = t(`${base}.subtitle`) !== `${base}.subtitle` ? t(`${base}.subtitle`) : undefined
              const features = t(`${base}.features`) !== `${base}.features` ? t(`${base}.features`) : undefined
              const title = t(`${base}.title`)

              if (cat.key === "hpc") {
                return (
                  <HpcExpandableCard
                    key={cat.id}
                    title={title}
                    subtitle={subtitle ?? ""}
                    features={features ?? ""}
                    items={items}
                    materials={materials ?? ""}
                    viewMaterialsLabel={t("applications.cta.viewMaterials")}
                    productsHref={`${prefix}/products`}
                    expandLabel={t(`${base}.expandLabel`)}
                    collapseLabel={t(`${base}.collapseLabel`)}
                    materialsLabel={t("applications.thermal.materialsLabel")}
                    intro={t("applications.thermal.aiChipDesc")}
                    geoCoupling={t("applications.thermal.geoCoupling")}
                    geoCouplingDesc={t("applications.thermal.geoCouplingDesc")}
                    thermalDilution={t("applications.thermal.thermalDilution")}
                    thermalDilutionDesc={t("applications.thermal.thermalDilutionDesc")}
                    systemSync={t("applications.thermal.systemSync")}
                    systemSyncDesc={t("applications.thermal.systemSyncDesc")}
                  />
                )
              }

              if (cat.key === "consumer") {
                const itemsDescStr = t(`${base}.itemsDesc`)
                const itemsDesc = itemsDescStr && itemsDescStr !== `${base}.itemsDesc` ? itemsDescStr.split("|") : []
                return (
                  <ConsumerExpandableCard
                    key={cat.id}
                    title={title}
                    items={items}
                    itemsDesc={itemsDesc}
                    materials={materials}
                    materialsLabel={t("applications.thermal.materialsLabel")}
                    viewMaterialsLabel={t("applications.cta.viewMaterials")}
                    productsHref={`${prefix}/products`}
                    expandLabel={t(`${base}.expandLabel`)}
                    collapseLabel={t(`${base}.collapseLabel`)}
                    coilIntro={t(`${base}.coilIntro`)}
                    coilSolution={t(`${base}.coilSolution`)}
                    coilAdv1={t(`${base}.coilAdv1`)}
                    coilAdv2={t(`${base}.coilAdv2`)}
                    coilAdv3={t(`${base}.coilAdv3`)}
                    coilMech={t(`${base}.coilMech`)}
                    coilCoreSolution={t(`${base}.coilCoreSolution`)}
                    coilTechAdvantage={t(`${base}.coilTechAdvantage`)}
                    coilPhysicsMech={t(`${base}.coilPhysicsMech`)}
                    viewWhitepaper={t(`${base}.viewWhitepaper`)}
                    whitepaperHref="/docs/diamond-coil.html"
                  />
                )
              }

              if (cat.key === "frontier") {
                const energy = "applications.energy"
                const frontier = "applications.frontier"
                const itemsDesc = t(`${base}.itemsDesc`).split("|")
                return (
                  <FrontierExpandableCard
                    key={cat.id}
                    sectionTitle={title}
                    sectionBadge={badge ?? ""}
                    sectionSubtitle={t(`${base}.sectionSubtitle`)}
                    mediumTermLabel={t(`${base}.mediumTermLabel`)}
                    mediumTermSubtitle={t(`${base}.mediumTermSubtitle`)}
                    longTermLabel={t(`${base}.longTermLabel`)}
                    longTermSubtitle={t(`${base}.longTermSubtitle`)}
                    viewWhitepaperLabel={t(`${energy}.viewWhitepaper`)}
                    viewDeepLabel={t(`${energy}.viewDeep`)}
                    expandLabel={t(`${base}.expandLabel`)}
                    collapseLabel={t(`${base}.collapseLabel`)}
                    mediumTermItems={[
                      {
                        key: "solidState",
                        title: t(`${energy}.solidStateTitle`),
                        shortDesc: itemsDesc[0] ?? "",
                        icon: <Battery className="w-5 h-5" />,
                        hasWhitepaper: true,
                        hasDeepTech: true,
                        whitepaperHref: `${prefix}/news/solid-state-battery`,
                        deepTechHref: `${prefix}/news/solid-state-battery`,
                        expandContent: (
                          <div className="space-y-4 text-sm">
                            <div>
                              <div className="font-semibold text-slate-800 mb-1">{t(`${energy}.solidStatePhysics`)}</div>
                              <p className="text-slate-600 leading-relaxed break-words">{t(`${energy}.solidStatePhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-slate-800 mb-1">{t(`${energy}.solidStateTech`)}</div>
                              <ul className="space-y-1 text-slate-600">
                                <li>• {t(`${energy}.solidStateAdv1`)}</li>
                                <li>• {t(`${energy}.solidStateAdv2`)}</li>
                                <li>• {t(`${energy}.solidStateAdv3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-slate-800 mb-1">{t(`${energy}.solidStateValue`)}</div>
                              <p className="text-slate-600 leading-relaxed break-words">{t(`${energy}.solidStateValueDesc`)}</p>
                            </div>
                          </div>
                        ),
                      },
                      {
                        key: "water",
                        title: t(`${energy}.waterTitle`),
                        shortDesc: itemsDesc[1] ?? "",
                        icon: <Droplets className="w-5 h-5" />,
                        hasWhitepaper: true,
                        hasDeepTech: true,
                        whitepaperHref: `${prefix}/news/3d-covalent-composite-electrode`,
                        deepTechHref: `${prefix}/news/3d-covalent-composite-electrode`,
                        expandContent: (
                          <div className="space-y-4 text-sm">
                            <div>
                              <div className="font-semibold text-slate-800 mb-1">{t(`${energy}.waterPhysics`)}</div>
                              <p className="text-slate-600 leading-relaxed break-words">{t(`${energy}.waterPhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-slate-800 mb-1">{t(`${energy}.waterTech`)}</div>
                              <ul className="space-y-1 text-slate-600">
                                <li>• {t(`${energy}.waterAdv1`)}</li>
                                <li>• {t(`${energy}.waterAdv2`)}</li>
                                <li>• {t(`${energy}.waterAdv3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-slate-800 mb-1">{t(`${energy}.waterValue`)}</div>
                              <p className="text-slate-600 leading-relaxed break-words">{t(`${energy}.waterValueDesc`)}</p>
                            </div>
                          </div>
                        ),
                      },
                    ]}
                    longTermItems={[
                      {
                        key: "superconductor",
                        title: t(`${frontier}.superconductorTitle`),
                        shortDesc: itemsDesc[2] ?? "",
                        icon: <Atom className="w-5 h-5" />,
                        hasWhitepaper: false,
                        hasDeepTech: true,
                        deepTechHref: `${prefix}/news/superconducting-materials`,
                        expandContent: (
                          <div className="space-y-4 text-sm">
                            <div>
                              <div className="font-semibold text-slate-800 mb-1">{t(`${frontier}.superconductorPhysics`)}</div>
                              <p className="text-slate-600 leading-relaxed break-words">{t(`${frontier}.superconductorPhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-slate-800 mb-1">{t(`${frontier}.researchPoints`)}</div>
                              <ul className="space-y-1 text-slate-600">
                                <li>• {t(`${frontier}.superconductorRes1`)}</li>
                                <li>• {t(`${frontier}.superconductorRes2`)}</li>
                                <li>• {t(`${frontier}.superconductorRes3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-slate-800 mb-1">{t(`${frontier}.vision`)}</div>
                              <p className="text-slate-600 leading-relaxed break-words">{t(`${frontier}.superconductorVision`)}</p>
                            </div>
                          </div>
                        ),
                      },
                      {
                        key: "quantum",
                        title: t(`${frontier}.quantumTitle`),
                        shortDesc: itemsDesc[3] ?? "",
                        icon: <Microscope className="w-5 h-5" />,
                        hasWhitepaper: false,
                        hasDeepTech: true,
                        deepTechHref: `${prefix}/news/quantum-chaos-computing`,
                        expandContent: (
                          <div className="space-y-4 text-sm">
                            <div>
                              <p className="text-slate-600 leading-relaxed break-words">{t(`${frontier}.quantumPhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-slate-800 mb-1">{t(`${frontier}.quantumResearch`)}</div>
                              <ul className="space-y-1 text-slate-600">
                                <li>• {t(`${frontier}.quantumRes1`)}</li>
                                <li>• {t(`${frontier}.quantumRes2`)}</li>
                                <li>• {t(`${frontier}.quantumRes3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-slate-800 mb-1">{t(`${frontier}.vision`)}</div>
                              <p className="text-slate-600 leading-relaxed break-words">{t(`${frontier}.quantumVision`)}</p>
                            </div>
                          </div>
                        ),
                      },
                    ]}
                  />
                )
              }

              const itemsDescStr = t(`${base}.itemsDesc`)
              const itemsDesc = itemsDescStr && itemsDescStr !== `${base}.itemsDesc` ? itemsDescStr.split("|") : []

              return (
                <Card
                  key={cat.id}
                  id={cat.id}
                  className={`p-6 sm:p-8 lg:p-10 ${cat.bgClass} ${cat.borderClass} hover:shadow-xl transition-all scroll-mt-20 ${
                    cat.isExploration ? "border-purple-200/80 ring-1 ring-purple-100" : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${cat.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <cat.Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {title}
                        </h2>
                        {badge && (
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            {badge}
                          </span>
                        )}
                      </div>
                      {subtitle && (
                        <p className="text-slate-600 font-medium mb-2">{subtitle}</p>
                      )}
                      {features && (
                        <p className="text-sm text-slate-600 mb-4">{features}</p>
                      )}
                      <div className="space-y-4 mb-4">
                        {items.map((item, i) => (
                          <div key={i} className="border-l-2 border-slate-200 pl-4">
                            <div className="flex items-start gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${cat.isExploration ? "bg-purple-500" : "bg-[#F9FAFC]0"}`} />
                              <div className="min-w-0">
                                <div className="font-medium text-slate-800 text-sm sm:text-base break-words">{item}</div>
                                {itemsDesc[i] && (
                                  <p className="text-slate-600 text-sm mt-1 leading-relaxed break-words">{itemsDesc[i]}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {materials && (
                        <div className="mt-4">
                          <div className="text-sm font-semibold text-slate-800 mb-2">{t("applications.thermal.materialsLabel")}</div>
                          <div className="flex flex-wrap gap-2">
                            {materials.split("|").map((m, i) => (
                              <span
                                key={i}
                                className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border break-words max-w-full ${
                                  cat.isExploration
                                    ? "bg-purple-50 text-purple-800 border-purple-200/60"
                                    : "bg-[#F9FAFC] text-[#023B99] border-[#4169E1]/40"
                                }`}
                              >
                                {m.trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="mt-6">
                        <Button
                          size="lg"
                          variant="outline"
                          className="min-h-[44px] border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                          asChild
                        >
                          <Link href={`${prefix}/products`}>{t("applications.cta.viewMaterials")}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl sm:text-5xl font-bold mb-4 text-slate-900 break-words px-1 tracking-[0.05em] sm:tracking-[0.15em]">
            {t("applications.summary.title")}
          </h2>

          <p className="text-base sm:text-xl text-slate-600 mb-8 font-light break-words">{t("applications.summary.tagline")}</p>

          <p className="text-base sm:text-lg mb-12 leading-relaxed max-w-3xl mx-auto text-slate-600 break-words">
            {t("applications.summary.desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto min-h-[44px] gap-2 bg-[#0F2A5C] hover:bg-[#1E3A8A] text-white shadow-lg"
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
