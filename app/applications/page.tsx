import Link from "next/link"
import { Cpu, Zap, Car, Sparkles, Home, Battery, Microscope, ShieldCheck, Droplets, Atom } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { PageHero } from "@/components/page-hero"
import { DarkPagePatternBg } from "@/components/dark-page-pattern-bg"
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
  const t = await getTranslations(validLocale)
  const prefix = `/${validLocale}`

  const ACCENTS = {
    hpc: { hex: "#73DBFF", text: "text-[#73DBFF]", hoverText: "hover:text-[#8EE8FF]", tag: "bg-[#73DBFF]/15 border border-[#0077b6]/25 text-[#73DBFF]" },
    power: { hex: "#60a5fa", text: "text-blue-300", hoverText: "hover:text-blue-200", tag: "bg-blue-400/15 border border-blue-400/25 text-blue-200" },
    ev: { hex: "#34d399", text: "text-emerald-300", hoverText: "hover:text-emerald-200", tag: "bg-emerald-400/15 border border-emerald-400/25 text-emerald-200" },
    consumer: { hex: "#fbbf24", text: "text-amber-300", hoverText: "hover:text-amber-200", tag: "bg-amber-400/15 border border-amber-400/25 text-amber-200" },
    frontier: { hex: "#c084fc", text: "text-purple-300", hoverText: "hover:text-purple-200", tag: "bg-purple-400/15 border border-purple-400/25 text-purple-200" },
  } as const

  const layers = [
    { accent: ACCENTS.hpc, levelKey: "layer1Level", titleKey: "layer1Title", itemsKey: "layer1Items", descKey: "layer1Desc", tagKey: "layer1Tag", color: "border-[#0077b6]/35 bg-[#002244]/50", Icon: Cpu, href: "#hpc" },
    { accent: ACCENTS.power, levelKey: "layer2Level", titleKey: "layer2Title", itemsKey: "layer2Items", descKey: "layer2Desc", tagKey: "layer2Tag", color: "border-[#0077b6]/35 bg-[#002244]/50", Icon: Zap, href: "#power-semiconductor" },
    { accent: ACCENTS.ev, levelKey: "layer3Level", titleKey: "layer3Title", itemsKey: "layer3Items", descKey: "layer3Desc", tagKey: "layer3Tag", color: "border-[#0077b6]/35 bg-[#002244]/50", Icon: Battery, href: "#ev-storage" },
    { accent: ACCENTS.consumer, levelKey: "layer4Level", titleKey: "layer4Title", itemsKey: "layer4Items", descKey: "layer4Desc", tagKey: "layer4Tag", color: "border-[#0077b6]/35 bg-[#002244]/50", Icon: Home, href: "#consumer" },
    { accent: ACCENTS.frontier, levelKey: "layer5Level", titleKey: "layer5Title", itemsKey: "layer5Items", descKey: "layer5Desc", tagKey: "layer5Tag", color: "border-[#0077b6]/35 bg-[#002244]/50", Icon: Microscope, href: "#frontier" },
  ] as const

  const categoryConfig = [
    { id: "hpc", key: "hpc", Icon: Cpu, accent: ACCENTS.hpc },
    { id: "power-semiconductor", key: "powerSemiconductor", Icon: Zap, accent: ACCENTS.power },
    { id: "ev-storage", key: "evStorage", Icon: Car, accent: ACCENTS.ev },
    { id: "consumer", key: "consumer", Icon: Home, accent: ACCENTS.consumer },
    { id: "frontier", key: "frontier", Icon: Sparkles, accent: ACCENTS.frontier, isExploration: true },
  ] as const

  return (
    <div className="min-h-screen relative">
      <DarkPagePatternBg />
      <div className="relative z-10">
      <Navigation locale={validLocale} />

      <PageHero
        variant="dark"
        title={t("applications.title")}
        subtitle={t("applications.subtitle")}
      />

      {/* 应用蓝图 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="w-full py-8 sm:py-12 px-4 sm:px-6 bg-[#002244]/55 backdrop-blur-xl rounded-3xl border border-[#00b4d8]/30 shadow-2xl shadow-[#0077b6]/10 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none opacity-60">
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0077b6]/12 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#00b4d8]/10 rounded-full blur-3xl" />
            </div>
            <div className="text-center mb-12 px-1">
              <h2 className="page-h2 text-white mb-4 break-words">{t("applications.blueprint.title")}</h2>
              <p className="page-caption sm:text-base text-slate-400 max-w-2xl mx-auto break-words">{t("applications.blueprint.subtitle")}</p>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 space-y-4">
              {layers.map((layer, index) => (
                <ApplicationCard
                  key={index}
                  level={t(`applications.blueprint.${layer.levelKey}`)}
                  title={t(`applications.blueprint.${layer.titleKey}`)}
                  items={t(`applications.blueprint.${layer.itemsKey}`).split("|")}
                  description={t(`applications.blueprint.${layer.descKey}`)}
                  color={layer.color}
                  icon={<layer.Icon className={`w-5 h-5 ${layer.accent.text}`} />}
                  tag={t(`applications.blueprint.${layer.tagKey}`)}
                  href={layer.href}
                  tagClassName={layer.accent.tag}
                />
              ))}

              {/* 底部基座 */}
              <div className="pt-8 flex flex-col items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#73DBFF]/30 to-transparent mb-8"></div>
                <div className="px-8 py-4 bg-[#002244]/70 rounded-xl border border-[#0077b6]/30 flex items-center gap-3 shadow-2xl shadow-[#0077b6]/10">
                  <ShieldCheck className="w-6 h-6 text-[#73DBFF]" />
                  <div>
                    <div className="text-xs text-[#73DBFF] font-bold uppercase tracking-[0.2em]">{t("applications.blueprint.foundationLabel")}</div>
                    <div className="text-white font-black tracking-tight">{t("applications.blueprint.foundation")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 五大应用分类卡片 */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
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
                    accentHex={cat.accent.hex}
                    accentClassName={cat.accent.text}
                    accentHoverClassName={cat.accent.hoverText}
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
                    whitepaperHref={validLocale === "en" ? "/docs/diamond-coil-en.pdf" : "/docs/diamond-coil.pdf"}
                    accentHex={cat.accent.hex}
                    accentClassName={cat.accent.text}
                    accentHoverClassName={cat.accent.hoverText}
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
                        whitepaperHref: validLocale === "en" ? "/docs/diamond-battery-en.pdf" : "/docs/diamond-battery.pdf",
                        deepTechHref: `${prefix}/news/solid-state-battery`,
                        expandContent: (
                          <div className="space-y-4 text-sm">
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.solidStatePhysics`)}</div>
                              <p className="text-slate-300 leading-relaxed break-words">{t(`${energy}.solidStatePhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.solidStateTech`)}</div>
                              <ul className="space-y-1 text-slate-300">
                                <li>• {t(`${energy}.solidStateAdv1`)}</li>
                                <li>• {t(`${energy}.solidStateAdv2`)}</li>
                                <li>• {t(`${energy}.solidStateAdv3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.solidStateValue`)}</div>
                              <p className="text-slate-300 leading-relaxed break-words">{t(`${energy}.solidStateValueDesc`)}</p>
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
                        whitepaperHref: validLocale === "en" ? "/docs/diamond-water-en.pdf" : "/docs/diamond-water.pdf",
                        deepTechHref: `${prefix}/news/3d-covalent-composite-electrode`,
                        expandContent: (
                          <div className="space-y-4 text-sm">
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.waterPhysics`)}</div>
                              <p className="text-slate-300 leading-relaxed break-words">{t(`${energy}.waterPhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.waterTech`)}</div>
                              <ul className="space-y-1 text-slate-300">
                                <li>• {t(`${energy}.waterAdv1`)}</li>
                                <li>• {t(`${energy}.waterAdv2`)}</li>
                                <li>• {t(`${energy}.waterAdv3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.waterValue`)}</div>
                              <p className="text-slate-300 leading-relaxed break-words">{t(`${energy}.waterValueDesc`)}</p>
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
                              <div className="font-semibold text-white mb-1">{t(`${frontier}.superconductorPhysics`)}</div>
                              <p className="text-slate-300 leading-relaxed break-words">{t(`${frontier}.superconductorPhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${frontier}.researchPoints`)}</div>
                              <ul className="space-y-1 text-slate-300">
                                <li>• {t(`${frontier}.superconductorRes1`)}</li>
                                <li>• {t(`${frontier}.superconductorRes2`)}</li>
                                <li>• {t(`${frontier}.superconductorRes3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${frontier}.vision`)}</div>
                              <p className="text-slate-300 leading-relaxed break-words">{t(`${frontier}.superconductorVision`)}</p>
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
                              <p className="text-slate-300 leading-relaxed break-words">{t(`${frontier}.quantumPhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${frontier}.quantumResearch`)}</div>
                              <ul className="space-y-1 text-slate-300">
                                <li>• {t(`${frontier}.quantumRes1`)}</li>
                                <li>• {t(`${frontier}.quantumRes2`)}</li>
                                <li>• {t(`${frontier}.quantumRes3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${frontier}.vision`)}</div>
                              <p className="text-slate-300 leading-relaxed break-words">{t(`${frontier}.quantumVision`)}</p>
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
                  className={`p-6 sm:p-8 lg:p-10 bg-[#002244]/55 backdrop-blur-sm border border-[#0077b6]/30 hover:border-[#00b4d8]/45 hover:shadow-xl hover:shadow-[#0077b6]/10 transition-all scroll-mt-20 ${
                    cat.isExploration ? "ring-1 ring-[#73DBFF]/15" : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#002244] to-[#003366] border border-[#0077b6]/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0077b6]/10">
                      <cat.Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${cat.accent.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h2 className="page-h2 text-white">
                          {title}
                        </h2>
                        {badge && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${cat.accent.tag}`}>
                            {badge}
                          </span>
                        )}
                      </div>
                      {subtitle && (
                        <p className="text-slate-300 font-medium mb-2">{subtitle}</p>
                      )}
                      {features && (
                        <p className="text-sm text-slate-400 mb-4">{features}</p>
                      )}
                      <div className="space-y-4 mb-4">
                        {items.map((item, i) => (
                          <div key={i} className="border-l-2 pl-4" style={{ borderColor: `${cat.accent.hex}55` }}>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 opacity-80" style={{ backgroundColor: cat.accent.hex }} />
                              <div className="min-w-0">
                                <div className="font-medium text-slate-200 text-sm sm:text-base break-words">{item}</div>
                                {itemsDesc[i] && (
                                  <p className="text-slate-400 text-sm mt-1 leading-relaxed break-words">{itemsDesc[i]}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {materials && (
                        <div className="mt-4">
                          <div className="text-sm font-semibold text-white mb-2">{t("applications.thermal.materialsLabel")}</div>
                          <div className="flex flex-wrap gap-2">
                            {materials.split("|").map((m, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border break-words max-w-full bg-[#002244]/60 text-slate-200"
                                style={{ borderColor: `${cat.accent.hex}55` }}
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
                          className="min-h-[44px] border-[#00b4d8]/80 text-white hover:bg-white/10 bg-transparent"
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
          <h2 className="page-h2 text-slate-900 mb-4 break-words px-1 tracking-[0.05em] sm:tracking-[0.12em]">
            {t("applications.summary.title")}
          </h2>

          <p className="page-lead text-slate-600 mb-8 font-light break-words">{t("applications.summary.tagline")}</p>

          <p className="page-body mb-12 max-w-3xl mx-auto text-slate-700 break-words">
            {t("applications.summary.desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto min-h-[44px] gap-2 bg-[#0077b6] hover:bg-[#0096c7] text-white shadow-lg shadow-[#0077b6]/30 border-0"
            >
              <Link href={`${prefix}/cooperation`}>{t("applications.cta.techDialogue")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto min-h-[44px] gap-2 border-[#0077b6]/35 text-[#0F2A5C] hover:bg-slate-50 bg-transparent"
            >
              <Link href={`${prefix}/patents`}>{t("applications.cta.viewTechPath")}</Link>
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
