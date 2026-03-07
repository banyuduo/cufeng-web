import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import { ArrowRight, Zap, Layers, FlaskConical, Sparkles, ChefHat } from "lucide-react"
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
  const t = getTranslations(validLocale)
  const prefix = `/${validLocale}`

  return (
    <div className="min-h-screen bg-background">
      <Navigation locale={validLocale} />

      <PageHero
        variant="light"
        title={t("products.title")}
        subtitle={t("products.subtitle")}
      />

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <Link href={`${prefix}/products/nonstick-cookware`}>
              <Card className="p-6 sm:p-10 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                    <ChefHat className="w-7 h-7 text-sky-600" />
                  </div>
                  <div className="px-3 py-1 bg-green-100 rounded-full text-xs font-medium text-green-700">
                    {t("products.badge.inStock")}
                  </div>
                </div>
                <h2 className="page-h2 mb-3 text-slate-900">
                  {t("products.nonstickCookware.title")}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t("products.nonstickCookware.desc")}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.nonstickCookware.feature1")}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.nonstickCookware.feature2")}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.nonstickCookware.feature3")}
                  </div>
                </div>
                <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                  {t("products.nonstickCookware.viewDetails")} <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            <Link href={`${prefix}/products/diamond-copper`}>
              <Card className="p-6 sm:p-10 bg-gradient-to-br from-sky-50 to-white border-sky-200 hover:shadow-2xl hover:border-sky-400 transition-all group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-sky-600 flex items-center justify-center group-hover:bg-sky-700 transition-colors">
                    <Layers className="w-7 h-7 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-sky-600 rounded-full text-xs font-medium text-white">
                    {t("products.badge.gen2Core")}
                  </div>
                </div>
                <h2 className="page-h2 mb-3 text-slate-900">
                  {t("products.diamondCopper.title")}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t("products.diamondCopper.desc")}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.diamondCopper.feature1")}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.diamondCopper.feature2")}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.diamondCopper.feature3")}
                  </div>
                </div>
                <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                  {t("products.nonstickCookware.viewDetails")} <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            <Link href={`${prefix}/products/thermal-pad`}>
              <Card className="p-6 sm:p-10 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                    <FlaskConical className="w-7 h-7 text-sky-600" />
                  </div>
                  <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">
                    {t("products.badge.gen2Expand")}
                  </div>
                </div>
                <h2 className="page-h2 mb-3 text-slate-900">
                  {t("products.thermalPad.title")}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t("products.thermalPad.desc")}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.thermalPad.feature1")}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.thermalPad.feature2")}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.thermalPad.feature3")}
                  </div>
                </div>
                <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                  {t("products.nonstickCookware.viewDetails")} <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            <Link href={`${prefix}/products/carbon-composite`}>
              <Card className="p-6 sm:p-10 bg-white border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center group-hover:from-sky-600 group-hover:to-cyan-600 transition-colors">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full text-xs font-medium text-white">
                    {t("products.badge.gen3Future")}
                  </div>
                </div>
                <h2 className="page-h2 mb-3 text-slate-900">
                  {t("products.carbonComposite.title")}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t("products.carbonComposite.desc")}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.carbonComposite.feature1")}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.carbonComposite.feature2")}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    {t("products.carbonComposite.feature3")}
                  </div>
                </div>
                <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                  {t("products.nonstickCookware.viewDetails")} <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            <Link href={`${prefix}/products/diamond-tools`} className="md:col-span-2">
              <Card className="p-6 sm:p-10 bg-slate-50 border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <Zap className="w-7 h-7 text-slate-600" />
                  </div>
                  <div className="px-3 py-1 bg-slate-200 rounded-full text-xs font-medium text-slate-700">
                    {t("products.badge.traditional")}
                  </div>
                </div>
                <h2 className="page-h2 mb-3 text-slate-900">
                  {t("products.diamondTools.title")}
                  <br />
                  <span className="text-lg text-slate-600 font-normal">
                    {t("products.diamondTools.subtitle")}
                  </span>
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t("products.diamondTools.desc")}
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    {t("products.diamondTools.feature1")}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    {t("products.diamondTools.feature2")}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    {t("products.diamondTools.feature3")}
                  </div>
                </div>
                <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                  {t("products.nonstickCookware.viewDetails")} <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-slate-500 text-center leading-relaxed">
            {t("products.disclaimer")}
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="page-h2 mb-4 text-slate-900">
            {t("products.cta.title")}
          </h2>
          <p className="text-slate-600 mb-8">{t("products.cta.subtitle")}</p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2 bg-sky-600 hover:bg-sky-700 text-white" asChild>
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
