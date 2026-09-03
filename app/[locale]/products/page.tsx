import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { PageHero } from "@/components/page-hero"
import { Link } from "@/components/app-link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getTranslations } from "@/lib/translations"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale: Locale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getTranslations(validLocale)
  const prefix = `/${validLocale}`
  const viewDetails = t("products.nonstickCookware.viewDetails")

  const catalog = [
    {
      href: `${prefix}/products/diamond-copper`,
      badge: t("products.badge.gen2Core"),
      badgeClass: "bg-[#0F2A5C] text-white",
      title: t("products.diamondCopper.title"),
      desc: t("products.diamondCopper.desc"),
    },
    {
      href: `${prefix}/products/thermal-pad`,
      badge: t("products.badge.gen2Expand"),
      badgeClass: "bg-slate-100 text-slate-700",
      title: t("products.thermalPad.title"),
      desc: t("products.thermalPad.desc"),
    },
    {
      href: `${prefix}/products/carbon-composite`,
      badge: t("products.badge.gen3Future"),
      badgeClass: "bg-slate-100 text-slate-700",
      title: t("products.carbonComposite.title"),
      desc: t("products.carbonComposite.desc"),
    },
    {
      href: `${prefix}/products/nonstick-cookware`,
      badge: t("products.badge.inStock"),
      badgeClass: "bg-green-100 text-green-700",
      title: t("products.nonstickCookware.title"),
      desc: t("products.nonstickCookware.desc"),
    },
    {
      href: `${prefix}/products/diamond-tools`,
      badge: t("products.badge.traditional"),
      badgeClass: "bg-slate-200 text-slate-700",
      title: t("products.diamondTools.title"),
      subtitle: t("products.diamondTools.subtitle"),
      desc: t("products.diamondTools.desc"),
      wide: true,
    },
  ] as const

  return (
    <div className="min-h-screen bg-[#F9FAFC]">
      <Navigation locale={validLocale} />

      <PageHero
        variant="light"
        title={t("products.title")}
        subtitle={t("products.subtitle")}
      />

      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 bg-[#F9FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {catalog.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block h-full min-h-0 ${"wide" in item && item.wide ? "md:col-span-2" : ""}`}
              >
                <Card className="flex h-full flex-col p-4 sm:p-8 gap-3 bg-white border-slate-200 hover:border-[#4169E1]/50 hover:shadow-lg transition-all group cursor-pointer">
                  <div className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${item.badgeClass}`}>
                    {item.badge}
                  </div>
                  <h2 className="page-h3 mb-2 text-slate-900">
                    {item.title}
                  </h2>
                  {"subtitle" in item && item.subtitle ? (
                    <p className="page-caption text-slate-500 mb-3">{item.subtitle}</p>
                  ) : null}
                  <p className="page-body text-slate-500 mb-6 flex-1">
                    {item.desc}
                  </p>
                  <div className="flex items-center text-[#0077b6] font-medium group-hover:gap-2 transition-all">
                    {viewDetails} <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 px-6 lg:px-8 bg-[#F9FAFC]">
        <div className="max-w-6xl mx-auto">
          <p className="page-caption text-slate-500 text-center">
            {t("products.disclaimer")}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="page-h2 mb-4 text-slate-900">
            {t("products.cta.title")}
          </h2>
          <p className="page-lead page-measure text-slate-600 mb-8">{t("products.cta.subtitle")}</p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2 bg-[#0F2A5C] hover:bg-[#1E3A8A] text-white" asChild>
              <Link href={`${prefix}/cooperation#contact`}>
                {t("products.cta.contactTech")}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
              asChild
            >
              <Link href={`${prefix}/products`}>{t("products.cta.browseProducts")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <FooterNav locale={validLocale} />
    </div>
  )
}
