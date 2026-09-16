import { Link } from "@/components/app-link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { PageHero } from "@/components/page-hero"
import { ApplicationCard } from "@/components/application-card"
import { HpcExpandableCard } from "@/components/hpc-expandable-card"
import { ConsumerExpandableCard } from "@/components/consumer-expandable-card"
import { FrontierExpandableCard } from "@/components/frontier-expandable-card"
import { ApplicationsCategoryCard } from "@/components/applications-category-card"
import { getTranslations } from "@/lib/translations"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"

function pipeItems(value: string, missingKey?: string): string[] {
  if (!value || value === missingKey) return []
  return value.split("|").map((item) => item.trim()).filter(Boolean)
}

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
    <div className="page-stage min-h-screen">
      <Navigation locale={validLocale} />
      <div>

      <PageHero
        variant="dark"
        background="stage"
        title={t("applications.title")}
        subtitle={t("applications.subtitle")}
      />

      <section className="section-block pb-6 sm:pb-8 lg:pb-10">
        <div className="max-w-6xl mx-auto space-y-4">
          {layers.map((layer, index) => (
            <ApplicationCard
              key={index}
              level={t(`applications.blueprint.${layer.levelKey}`)}
              title={t(`applications.blueprint.${layer.titleKey}`)}
              items={pipeItems(t(`applications.blueprint.${layer.itemsKey}`))}
              description={t(`applications.blueprint.${layer.descKey}`)}
              color={layer.color}
              tag={t(`applications.blueprint.${layer.tagKey}`)}
              href={layer.href}
              tagClassName={layer.accent.tag}
              expandLabel={t("applications.categories.frontier.expandLabel")}
              collapseLabel={t("applications.categories.frontier.collapseLabel")}
            />
          ))}
        </div>
      </section>

      {/* 五大应用分类卡片 */}
      <section className="section-block pt-10 sm:pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {categoryConfig.map((cat) => {
              const base = `applications.categories.${cat.key}`
              const items = pipeItems(t(`${base}.items`), `${base}.items`)
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
                const itemsDesc = pipeItems(t(`${base}.itemsDesc`), `${base}.itemsDesc`)
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
                const itemsDesc = pipeItems(t(`${base}.itemsDesc`), `${base}.itemsDesc`)
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
                        hasWhitepaper: true,
                        hasDeepTech: true,
                        whitepaperHref: validLocale === "en" ? "/docs/diamond-battery-en.html" : "/docs/diamond-battery.html",
                        deepTechHref: `${prefix}/news/solid-state-battery`,
                        sections: [
                          {
                            heading: t(`${energy}.solidStatePhysics`),
                            body: t(`${energy}.solidStatePhysicsDesc`),
                          },
                          {
                            heading: t(`${energy}.solidStateTech`),
                            bullets: [
                              t(`${energy}.solidStateAdv1`),
                              t(`${energy}.solidStateAdv2`),
                              t(`${energy}.solidStateAdv3`),
                            ],
                          },
                          {
                            heading: t(`${energy}.solidStateValue`),
                            body: t(`${energy}.solidStateValueDesc`),
                          },
                        ],
                      },
                      {
                        key: "water",
                        title: t(`${energy}.waterTitle`),
                        shortDesc: itemsDesc[1] ?? "",
                        hasWhitepaper: true,
                        hasDeepTech: true,
                        whitepaperHref: validLocale === "en" ? "/docs/diamond-water-en.html" : "/docs/diamond-water.html",
                        deepTechHref: `${prefix}/news/3d-covalent-composite-electrode`,
                        sections: [
                          {
                            heading: t(`${energy}.waterPhysics`),
                            body: t(`${energy}.waterPhysicsDesc`),
                          },
                          {
                            heading: t(`${energy}.waterTech`),
                            bullets: [
                              t(`${energy}.waterAdv1`),
                              t(`${energy}.waterAdv2`),
                              t(`${energy}.waterAdv3`),
                            ],
                          },
                          {
                            heading: t(`${energy}.waterValue`),
                            body: t(`${energy}.waterValueDesc`),
                          },
                        ],
                      },
                    ]}
                    longTermItems={[
                      {
                        key: "superconductor",
                        title: t(`${frontier}.superconductorTitle`),
                        shortDesc: itemsDesc[2] ?? "",
                        hasWhitepaper: false,
                        hasDeepTech: true,
                        deepTechHref: `${prefix}/news/superconducting-materials`,
                        sections: [
                          {
                            heading: t(`${frontier}.superconductorPhysics`),
                            body: t(`${frontier}.superconductorPhysicsDesc`),
                          },
                          {
                            heading: t(`${frontier}.researchPoints`),
                            bullets: [
                              t(`${frontier}.superconductorRes1`),
                              t(`${frontier}.superconductorRes2`),
                              t(`${frontier}.superconductorRes3`),
                            ],
                          },
                          {
                            heading: t(`${frontier}.vision`),
                            body: t(`${frontier}.superconductorVision`),
                          },
                        ],
                      },
                      {
                        key: "quantum",
                        title: t(`${frontier}.quantumTitle`),
                        shortDesc: itemsDesc[3] ?? "",
                        hasWhitepaper: false,
                        hasDeepTech: true,
                        deepTechHref: `${prefix}/news/quantum-chaos-computing`,
                        sections: [
                          {
                            body: t(`${frontier}.quantumPhysicsDesc`),
                          },
                          {
                            heading: t(`${frontier}.quantumResearch`),
                            bullets: [
                              t(`${frontier}.quantumRes1`),
                              t(`${frontier}.quantumRes2`),
                              t(`${frontier}.quantumRes3`),
                            ],
                          },
                          {
                            heading: t(`${frontier}.vision`),
                            body: t(`${frontier}.quantumVision`),
                          },
                        ],
                      },
                    ]}
                  />
                )
              }

              const itemsDesc = pipeItems(t(`${base}.itemsDesc`), `${base}.itemsDesc`)

              return (
                <ApplicationsCategoryCard
                  key={cat.id}
                  id={cat.id}
                  title={title}
                  badge={badge}
                  items={items}
                  itemsDesc={itemsDesc}
                  materials={materials}
                  materialsLabel={t("applications.thermal.materialsLabel")}
                  viewMaterialsLabel={t("applications.cta.viewMaterials")}
                  productsHref={`${prefix}/products`}
                  expandLabel={t("applications.categories.hpc.expandLabel")}
                  collapseLabel={t("applications.categories.hpc.collapseLabel")}
                  accentHex={cat.accent.hex}
                />
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-block">
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
