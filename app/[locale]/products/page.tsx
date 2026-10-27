import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { PageHero } from "@/components/page-hero"
import { Link } from "@/components/app-link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getTranslations } from "@/lib/translations"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"
import { localeSeo } from "@/lib/seo"

export const generateMetadata = localeSeo("/products/")

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
      featured: true,
      image: {
        src: "/docs/diamond-copper-render.webp",
        srcSet: "/docs/diamond-copper-render-400w.webp 400w, /docs/diamond-copper-render-800w.webp 800w",
        alt: t("products.diamondCopper.imageAlt"),
      },
    },
    {
      href: `${prefix}/products/thermal-pad`,
      badge: t("products.badge.gen2Expand"),
      badgeClass: "bg-slate-100 text-slate-700",
      title: t("products.thermalPad.title"),
      desc: t("products.thermalPad.desc"),
      image: {
        src: "/docs/thermal-pad-thumb.webp",
        srcSet: "/docs/thermal-pad-thumb-400w.webp 400w, /docs/thermal-pad-thumb-800w.webp 800w",
        alt: t("products.thermalPad.imageAlt"),
      },
    },
    {
      href: `${prefix}/products/carbon-composite`,
      badge: t("products.badge.gen3Future"),
      badgeClass: "bg-slate-100 text-slate-700",
      title: t("products.carbonComposite.title"),
      desc: t("products.carbonComposite.desc"),
      image: {
        src: "/docs/carbon-composite-thumb.webp",
        srcSet: "/docs/carbon-composite-thumb-400w.webp 400w, /docs/carbon-composite-thumb-800w.webp 800w",
        alt: t("products.carbonComposite.imageAlt"),
      },
    },
    {
      href: `${prefix}/products/nonstick-cookware`,
      badge: t("products.badge.inStock"),
      badgeClass: "bg-slate-100 text-slate-700",
      title: t("products.nonstickCookware.title"),
      desc: t("products.nonstickCookware.desc"),
      image: {
        src: "/images/diamond pan.jpg",
        srcSet: "/images/diamond-pan-400w.webp 400w, /images/diamond-pan.webp 765w",
        alt: t("products.nonstickCookware.imageAlt"),
      },
    },
    {
      href: `${prefix}/products/diamond-tools`,
      badge: t("products.badge.traditional"),
      badgeClass: "bg-slate-200 text-slate-700",
      title: t("products.diamondTools.title"),
      subtitle: t("products.diamondTools.subtitle"),
      desc: t("products.diamondTools.desc"),
      image: {
        src: "/images/diamond.jpg",
        srcSet: "/images/diamond-400w.webp 400w, /images/diamond-800w.webp 800w, /images/diamond.webp 1280w",
        alt: t("products.diamondTools.imageAlt"),
      },
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

      <section className="section-block bg-[#F9FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {catalog.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block h-full min-h-0 ${"featured" in item && item.featured ? "md:col-span-2" : ""}`}
              >
                <Card className="flex h-full flex-col p-4 sm:p-8 gap-3 bg-white border-slate-200 hover:border-[#94A3B8]/50 hover:shadow-lg transition-all group cursor-pointer">
                  <div className="relative -mx-4 sm:-mx-8 -mt-4 sm:-mt-8 mb-4 overflow-hidden rounded-t-xl bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image.src}
                      srcSet={item.image.srcSet}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      alt={item.image.alt}
                      className={`w-full object-cover ${"featured" in item && item.featured ? "h-[300px] sm:h-[420px]" : "h-[240px] sm:h-[300px]"}`}
                    />
                  </div>
                  <div className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-normal ${item.badgeClass}`}>
                    {item.badge}
                  </div>
                  <h3 className="page-h3 mb-2 text-slate-900">
                    {item.title}
                  </h3>
                  {"subtitle" in item && item.subtitle ? (
                    <p className="page-caption text-slate-500 mb-3">{item.subtitle}</p>
                  ) : null}
                  <p className="page-body text-slate-500 mb-6 flex-1">
                    {item.desc}
                  </p>
                  <div className="flex items-center text-[#2A7FC4] font-normal group-hover:gap-2 transition-all">
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

      <section className="section-block bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="page-body page-measure text-slate-600 mb-6 sm:mb-8">
            {t("products.cta.title")}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Button size="lg" className="gap-2 bg-[#2A7FC4] hover:bg-[#1B5F96] text-white" asChild>
              <Link href={`${prefix}/cooperation#contact`}>
                {t("products.cta.contactTech")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FooterNav locale={validLocale} />
    </div>
  )
}
