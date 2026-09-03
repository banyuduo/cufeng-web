import { MapPin, Mail, Phone, Globe } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { FooterNav } from "@/components/footer-nav"
import { PageHero } from "@/components/page-hero"
import { DarkPagePatternBg } from "@/components/dark-page-pattern-bg"
import { getTranslations } from "@/lib/translations"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n"

export default async function CooperationPage({
  params,
}: {
  params?: Promise<{ locale?: string }>
}) {
  const resolved = await (params ?? Promise.resolve({}))
  const validLocale: Locale = resolved.locale && isValidLocale(resolved.locale) ? resolved.locale : defaultLocale
  const t = await getTranslations(validLocale)
  const prefix = `/${validLocale}`

  return (
    <div className="min-h-screen relative">
      <DarkPagePatternBg />
      <Navigation locale={validLocale} />
      <div className="relative z-10">

      <PageHero
        variant="dark"
        background="solid"
        title={t("cooperation.hero.title")}
        subtitle={t("cooperation.hero.subtitle")}
        titleWeight="light"
      >
        <div className="space-y-6 page-body text-white/70 mt-8 text-left max-w-3xl mx-auto">
          <p>
            {t("cooperation.hero.p1")}
            <br />
            {t("cooperation.hero.p2")}
            <br />
            {t("cooperation.hero.p3")}
          </p>
          <p className="pt-4">
            {t("cooperation.hero.p4")}
            <br />
            {t("cooperation.hero.p5")}
          </p>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="page-h2 font-light mb-8 sm:mb-12 lg:mb-16 text-white border-b border-white/12 pb-4 sm:pb-6">
              {t("cooperation.platform.title")}
            </h2>
            <div className="space-y-8 text-slate-300 leading-relaxed font-light text-base">
              <p>
                {t("cooperation.platform.content")}
              </p>
              <p>
                {t("cooperation.platform.content2")}
                <br />
                {t("cooperation.platform.content3")}
              </p>
              <p className="page-body text-white/80 italic border-l-2 border-white/25 pl-6 py-1">
                {t("cooperation.platform.content4")}
              </p>
              <p>
                {t("cooperation.platform.content5")}
                <br />
                {t("cooperation.platform.content6")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 font-light mb-8 sm:mb-12 lg:mb-16 text-white border-b border-white/12 pb-4 sm:pb-6">
            {t("cooperation.audience.title")}
          </h2>
          <div className="space-y-8 text-slate-300 leading-relaxed font-light mb-12">
            <p>
              {t("cooperation.audience.intro")}
              <br />
              {t("cooperation.audience.intro2")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-white/[0.03] p-5 sm:p-8 rounded-lg border border-white/12 hover:border-white/25 transition-colors ">
              <div className="h-px w-10 bg-white/25 mb-3 sm:mb-6"></div>
              <p className="page-caption text-slate-300 font-light">
                {t("cooperation.audience.research")}
                <strong className="text-white font-medium"> {t("cooperation.audience.researchBold")}</strong>
              </p>
            </div>

            <div className="bg-white/[0.03] p-5 sm:p-8 rounded-lg border border-white/12 hover:border-white/25 transition-colors ">
              <div className="h-px w-10 bg-white/25 mb-3 sm:mb-6"></div>
              <p className="page-caption text-slate-300 font-light">
                {t("cooperation.audience.industry")}
                <strong className="text-white font-medium"> {t("cooperation.audience.industryBold")}</strong>
              </p>
            </div>

            <div className="bg-white/[0.03] p-5 sm:p-8 rounded-lg border border-white/12 hover:border-white/25 transition-colors ">
              <div className="h-px w-10 bg-white/25 mb-3 sm:mb-6"></div>
              <p className="page-caption text-slate-300 font-light">
                {t("cooperation.audience.tech")}
                <strong className="text-white font-medium"> {t("cooperation.audience.techBold")}</strong>
              </p>
            </div>

            <div className="bg-white/[0.03] p-5 sm:p-8 rounded-lg border border-white/12 hover:border-white/25 transition-colors ">
              <div className="h-px w-10 bg-white/25 mb-3 sm:mb-6"></div>
              <p className="page-caption text-slate-300 font-light">
                {t("cooperation.audience.investor")}
                <strong className="text-white font-medium"> {t("cooperation.audience.investorBold")}</strong>
              </p>
            </div>
          </div>

          <p className="mt-12 page-caption text-slate-400 italic text-center">
            {t("cooperation.audience.footnote")}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 font-light mb-8 sm:mb-12 lg:mb-16 text-white border-b border-white/12 pb-4 sm:pb-6">
            {t("cooperation.nextSteps.title")}
          </h2>
          <div className="space-y-8 page-body text-slate-300 font-light">
            <p>{t("cooperation.nextSteps.p1")}</p>
            <p>
              {t("cooperation.nextSteps.p2")}
              <br />
              {t("cooperation.nextSteps.p3")}
            </p>
            <p className="text-slate-400 italic">{t("cooperation.nextSteps.p4")}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 font-light mb-8 sm:mb-12 lg:mb-16 text-white border-b border-white/12 pb-4 sm:pb-6">
            {t("cooperation.resonance.title")}
          </h2>
          <div className="space-y-8 page-body text-slate-300 font-light">
            <p>{t("cooperation.resonance.p1")}</p>
            <p>
              {t("cooperation.resonance.p2")}
              <br />
              {t("cooperation.resonance.p3")}
              <br />
              {t("cooperation.resonance.p4")}
            </p>
            <p className="text-slate-200 font-light pt-4">{t("cooperation.resonance.p5")}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 scroll-mt-24 bg-[#F9FAFC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 font-light mb-8 sm:mb-12 lg:mb-16 text-slate-900 border-b border-slate-200 pb-4 sm:pb-6">
            {t("cooperation.contact.title")}
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed font-light mb-12">
            <p>{t("cooperation.contact.intro")}</p>
            <p className="page-caption text-slate-500 italic">{t("cooperation.contact.introNote")}</p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[#E8EEFF] flex items-center justify-center flex-shrink-0 border border-slate-200">
                <MapPin className="h-5 w-5 text-[#0F4C81]" />
              </div>
              <div>
                <div className="page-kicker text-slate-500 mb-2 font-light">{t("cooperation.contact.entity")}</div>
                <div className="page-lead text-slate-900 font-light">{t("cooperation.contact.entityName")}</div>
                <div className="text-slate-500 text-xs mt-2 font-light">
                  Nanjing CuFeng Mechanical & Electrical Technology Co., LTD
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[#E8EEFF] flex items-center justify-center flex-shrink-0 border border-slate-200">
                <Mail className="h-5 w-5 text-[#0F4C81]" />
              </div>
              <div>
                <div className="page-kicker text-slate-500 mb-2 font-light">{t("cooperation.contact.techContact")}</div>
                <a
                  href="mailto:wangbo@tospike.com"
                  className="text-slate-900 font-light text-lg hover:text-[#0F4C81] transition-colors font-mono"
                >
                  wangbo@tospike.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[#E8EEFF] flex items-center justify-center flex-shrink-0 border border-slate-200">
                <Phone className="h-5 w-5 text-[#0F4C81]" />
              </div>
              <div>
                <div className="page-kicker text-slate-500 mb-2 font-light">{t("cooperation.contact.phone")}</div>
                <a
                  href="tel:15305191423"
                  className="text-slate-900 font-light text-lg hover:text-[#0F4C81] transition-colors"
                >
                  153 0519 1423
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[#E8EEFF] flex items-center justify-center flex-shrink-0 border border-slate-200">
                <Globe className="h-5 w-5 text-[#0F4C81]" />
              </div>
              <div>
                <div className="page-kicker text-slate-500 mb-2 font-light">{t("cooperation.contact.address")}</div>
                <div className="text-slate-900 font-light text-lg">{t("cooperation.contact.addressValue")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 bg-gradient-to-b from-[#002244]/60 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-lg lg:text-xl text-slate-300 font-light italic leading-relaxed">
            &quot;{t("cooperation.quote")}&quot;
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <FooterNav locale={validLocale} />
      </div>
    </div>
  )
}
