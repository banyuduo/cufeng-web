import { Link } from "@/components/app-link"
import { Battery, Droplets, Atom, Microscope } from "lucide-react"
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
  const t = await getTranslations(validLocale)
  const prefix = `/${validLocale}`

  const ACCENTS = {
    hpc: { hex: "#E2E8F0", text: "text-white", hoverText: "hover:text-white", tag: "bg-white/10 border border-white/15 text-white/80" },
    power: { hex: "#E2E8F0", text: "text-white", hoverText: "hover:text-white", tag: "bg-white/10 border border-white/15 text-white/80" },
    ev: { hex: "#E2E8F0", text: "text-white", hoverText: "hover:text-white", tag: "bg-white/10 border border-white/15 text-white/80" },
    consumer: { hex: "#E2E8F0", text: "text-white", hoverText: "hover:text-white", tag: "bg-white/10 border border-white/15 text-white/80" },
    frontier: { hex: "#E2E8F0", text: "text-white", hoverText: "hover:text-white", tag: "bg-white/10 border border-white/15 text-white/80" },
  } as const

  const layers = [
    { accent: ACCENTS.hpc, levelKey: "layer1Level", titleKey: "layer1Title", itemsKey: "layer1Items", descKey: "layer1Desc", tagKey: "layer1Tag", color: "border-white/12 bg-white/[0.03]", href: "#hpc" },
    { accent: ACCENTS.power, levelKey: "layer2Level", titleKey: "layer2Title", itemsKey: "layer2Items", descKey: "layer2Desc", tagKey: "layer2Tag", color: "border-white/12 bg-white/[0.03]", href: "#power-semiconductor" },
    { accent: ACCENTS.ev, levelKey: "layer3Level", titleKey: "layer3Title", itemsKey: "layer3Items", descKey: "layer3Desc", tagKey: "layer3Tag", color: "border-white/12 bg-white/[0.03]", href: "#ev-storage" },
    { accent: ACCENTS.consumer, levelKey: "layer4Level", titleKey: "layer4Title", itemsKey: "layer4Items", descKey: "layer4Desc", tagKey: "layer4Tag", color: "border-white/12 bg-white/[0.03]", href: "#consumer" },
    { accent: ACCENTS.frontier, levelKey: "layer5Level", titleKey: "layer5Title", itemsKey: "layer5Items", descKey: "layer5Desc", tagKey: "layer5Tag", color: "border-white/12 bg-white/[0.03]", href: "#frontier" },
  ] as const

  const categoryConfig = [
    { id: "hpc", key: "hpc", accent: ACCENTS.hpc },
    { id: "power-semiconductor", key: "powerSemiconductor", accent: ACCENTS.power },
    { id: "ev-storage", key: "evStorage", accent: ACCENTS.ev },
    { id: "consumer", key: "consumer", accent: ACCENTS.consumer },
    { id: "frontier", key: "frontier", accent: ACCENTS.frontier, isExploration: true },
  ] as const

  return (
    <div className="page-stage min-h-screen relative">
      <Navigation locale={validLocale} />
      <div className="relative z-10">

      <PageHero
        variant="dark"
        background="stage"
        title={t("applications.title")}
        subtitle={t("applications.subtitle")}
      />

      {/* 应用蓝图 */}
      <section className="py-8 sm:py-14 lg:py-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="w-full py-6 sm:py-8 lg:py-8 px-4 sm:px-6 bg-white/[0.03] rounded-2xl border border-white/12 overflow-hidden relative">
            <div className="text-center mb-5 sm:mb-6 lg:mb-6 px-1">
              <h2 className="page-h2 text-white mb-4 break-words">{t("applications.blueprint.title")}</h2>
              {t("applications.blueprint.subtitle") ? (
                <p className="page-body text-white/55 max-w-2xl mx-auto break-words">{t("applications.blueprint.subtitle")}</p>
              ) : null}
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
                  tag={t(`applications.blueprint.${layer.tagKey}`)}
                  href={layer.href}
                  tagClassName={layer.accent.tag}
                />
              ))}

              {/* 底部基座 */}
              <div className="pt-8 flex flex-col items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
                <div className="px-5 sm:px-8 py-3 sm:py-4 bg-white/[0.03] rounded-xl border border-white/12 text-center">
                  <div className="page-kicker text-white/55">{t("applications.blueprint.foundationLabel")}</div>
                  <div className="page-h4 text-white">{t("applications.blueprint.foundation")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 五大应用分类卡片 */}
      <section className="py-8 sm:py-14 lg:py-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
                    whitepaperHref={validLocale === "en" ? "/docs/diamond-coil-en.html" : "/docs/diamond-coil.html"}
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
                        whitepaperHref: validLocale === "en" ? "/docs/diamond-battery-en.html" : "/docs/diamond-battery.html",
                        deepTechHref: `${prefix}/news/solid-state-battery`,
                        expandContent: (
                          <div className="space-y-4 page-body">
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.solidStatePhysics`)}</div>
                              <p className="page-body text-white/70 break-words">{t(`${energy}.solidStatePhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.solidStateTech`)}</div>
                              <ul className="space-y-1 page-body text-white/70">
                                <li>• {t(`${energy}.solidStateAdv1`)}</li>
                                <li>• {t(`${energy}.solidStateAdv2`)}</li>
                                <li>• {t(`${energy}.solidStateAdv3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.solidStateValue`)}</div>
                              <p className="page-body text-white/70 break-words">{t(`${energy}.solidStateValueDesc`)}</p>
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
                        whitepaperHref: validLocale === "en" ? "/docs/diamond-water-en.html" : "/docs/diamond-water.html",
                        deepTechHref: `${prefix}/news/3d-covalent-composite-electrode`,
                        expandContent: (
                          <div className="space-y-4 page-body">
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.waterPhysics`)}</div>
                              <p className="page-body text-white/70 break-words">{t(`${energy}.waterPhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.waterTech`)}</div>
                              <ul className="space-y-1 page-body text-white/70">
                                <li>• {t(`${energy}.waterAdv1`)}</li>
                                <li>• {t(`${energy}.waterAdv2`)}</li>
                                <li>• {t(`${energy}.waterAdv3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${energy}.waterValue`)}</div>
                              <p className="page-body text-white/70 break-words">{t(`${energy}.waterValueDesc`)}</p>
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
                          <div className="space-y-4 page-body">
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${frontier}.superconductorPhysics`)}</div>
                              <p className="page-body text-white/70 break-words">{t(`${frontier}.superconductorPhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${frontier}.researchPoints`)}</div>
                              <ul className="space-y-1 page-body text-white/70">
                                <li>• {t(`${frontier}.superconductorRes1`)}</li>
                                <li>• {t(`${frontier}.superconductorRes2`)}</li>
                                <li>• {t(`${frontier}.superconductorRes3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${frontier}.vision`)}</div>
                              <p className="page-body text-white/70 break-words">{t(`${frontier}.superconductorVision`)}</p>
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
                          <div className="space-y-4 page-body">
                            <div>
                              <p className="page-body text-white/70 break-words">{t(`${frontier}.quantumPhysicsDesc`)}</p>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${frontier}.quantumResearch`)}</div>
                              <ul className="space-y-1 page-body text-white/70">
                                <li>• {t(`${frontier}.quantumRes1`)}</li>
                                <li>• {t(`${frontier}.quantumRes2`)}</li>
                                <li>• {t(`${frontier}.quantumRes3`)}</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{t(`${frontier}.vision`)}</div>
                              <p className="page-body text-white/70 break-words">{t(`${frontier}.quantumVision`)}</p>
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
                  className={`p-4 sm:p-8 lg:p-10 gap-4 bg-white/[0.03] border border-white/12 hover:border-white/25  transition-all scroll-mt-20 ${
                    cat.isExploration ? "" : ""
                  }`}
                >
                  <div className="min-w-0">
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
                        <p className="page-body text-white/70 font-medium mb-2">{subtitle}</p>
                      )}
                      {features && (
                        <p className="page-caption text-white/55 mb-4">{features}</p>
                      )}
                      <div className="space-y-4 mb-4">
                        {items.map((item, i) => (
                          <div key={i} className="border-l-2 pl-4" style={{ borderColor: `${cat.accent.hex}55` }}>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 opacity-80" style={{ backgroundColor: cat.accent.hex }} />
                              <div className="min-w-0">
                                <div className="page-body font-medium text-white break-words">{item}</div>
                                {itemsDesc[i] && (
                                  <p className="page-caption text-white/55 mt-1 break-words">{itemsDesc[i]}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {materials && (
                        <div className="mt-4">
                          <div className="page-body font-semibold text-white mb-2">{t("applications.thermal.materialsLabel")}</div>
                          <div className="flex flex-wrap gap-2">
                            {materials.split("|").map((m, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-3 py-1.5 rounded-lg page-caption font-medium border break-words max-w-full bg-white/[0.04] text-white/80"
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
                          className="min-h-[44px] border-white/25 text-white hover:bg-white/10 bg-transparent"
                          asChild
                        >
                          <Link href={`${prefix}/products`}>{t("applications.cta.viewMaterials")}</Link>
                        </Button>
                      </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-14 lg:py-14 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="page-h2 text-white mb-4 break-words px-1">
            {t("applications.summary.title")}
          </h2>

          <p className="page-body mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto text-white/75 break-words">
            {t("applications.summary.desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              size="lg"
              asChild
              className="page-btn-primary w-full sm:w-auto min-h-[44px] gap-2 bg-[#2A7FC4] hover:bg-[#1B5F96] text-white border-0"
            >
              <Link href={`${prefix}/cooperation`}>{t("applications.cta.techDialogue")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto min-h-[44px] gap-2 border-white/35 text-white hover:bg-white/10 bg-transparent"
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
