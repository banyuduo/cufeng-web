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
        <div className="page-lead text-white/70 mt-6 sm:mt-8 text-left max-w-3xl mx-auto">
          <p>
            {t("cooperation.hero.p1")}
            <br />
            {t("cooperation.hero.p2")}
          </p>
        </div>
      </PageHero>

      <section className="py-10 sm:py-16 lg:py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 font-light mb-6 sm:mb-8 text-white border-b border-white/12 pb-4 sm:pb-6">
            {t("cooperation.platform.title")}
          </h2>
          <div className="space-y-6 page-body text-slate-300 font-light">
            <p>{t("cooperation.platform.content")}</p>
            <p>
              {t("cooperation.platform.content2")}
              <br />
              {t("cooperation.platform.content3")}
            </p>
            <p className="text-white/80 italic border-l-2 border-white/25 pl-6 py-1">
              {t("cooperation.platform.content4")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 font-light mb-4 sm:mb-5 text-white border-b border-white/12 pb-4 sm:pb-6">
            {t("cooperation.audience.title")}
          </h2>
          <p className="page-body text-slate-300 font-light mb-6 sm:mb-8">
            {t("cooperation.audience.intro")}
          </p>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/[0.03] p-5 sm:p-7 rounded-lg border border-white/12 hover:border-white/25 transition-colors ">
              <div className="h-px w-10 bg-white/25 mb-3 sm:mb-5"></div>
              <p className="page-body text-slate-300 font-light">
                {t("cooperation.audience.research")}
                <strong className="text-white font-medium"> {t("cooperation.audience.researchBold")}</strong>
              </p>
            </div>

            <div className="bg-white/[0.03] p-5 sm:p-7 rounded-lg border border-white/12 hover:border-white/25 transition-colors ">
              <div className="h-px w-10 bg-white/25 mb-3 sm:mb-5"></div>
              <p className="page-body text-slate-300 font-light">
                {t("cooperation.audience.industry")}
                <strong className="text-white font-medium"> {t("cooperation.audience.industryBold")}</strong>
              </p>
            </div>

            <div className="bg-white/[0.03] p-5 sm:p-7 rounded-lg border border-white/12 hover:border-white/25 transition-colors ">
              <div className="h-px w-10 bg-white/25 mb-3 sm:mb-5"></div>
              <p className="page-body text-slate-300 font-light">
                {t("cooperation.audience.tech")}
                <strong className="text-white font-medium"> {t("cooperation.audience.techBold")}</strong>
              </p>
            </div>

            <div className="bg-white/[0.03] p-5 sm:p-7 rounded-lg border border-white/12 hover:border-white/25 transition-colors ">
              <div className="h-px w-10 bg-white/25 mb-3 sm:mb-5"></div>
              <p className="page-body text-slate-300 font-light">
                {t("cooperation.audience.investor")}
                <strong className="text-white font-medium"> {t("cooperation.audience.investorBold")}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
          <div>
            <h2 className="page-h2 font-light mb-4 sm:mb-5 text-white border-b border-white/12 pb-4 sm:pb-6">
              {t("cooperation.nextSteps.title")}
            </h2>
            <p className="page-body text-slate-300 font-light">
              {t("cooperation.nextSteps.p1")}
            </p>
          </div>
          <div>
            <h2 className="page-h2 font-light mb-4 sm:mb-5 text-white border-b border-white/12 pb-4 sm:pb-6">
              {t("cooperation.resonance.title")}
            </h2>
            <p className="page-body text-slate-300 font-light">
              {t("cooperation.resonance.p1")}
              <br />
              {t("cooperation.resonance.p2")}
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-10 sm:py-16 lg:py-20 px-6 lg:px-8 scroll-mt-24 bg-[#F9FAFC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="page-h2 font-light mb-6 sm:mb-8 text-slate-900 border-b border-slate-200 pb-4 sm:pb-6">
            {t("cooperation.contact.title")}
          </h2>

          <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[#E8EEFF] flex items-center justify-center flex-shrink-0 border border-slate-200">
                <MapPin className="h-5 w-5 text-[#0F4C81]" />
              </div>
              <div>
                <div className="page-kicker text-slate-500 mb-2 font-light">{t("cooperation.contact.entity")}</div>
                <div className="page-body text-slate-900 font-light">{t("cooperation.contact.entityName")}</div>
                <div className="page-caption text-slate-500 mt-2 font-light">
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
                  className="page-body text-slate-900 font-light hover:text-[#0F4C81] transition-colors"
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
                  className="page-body text-slate-900 font-light hover:text-[#0F4C81] transition-colors"
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
                <div className="page-body text-slate-900 font-light">{t("cooperation.contact.addressValue")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16 px-6 lg:px-8 bg-gradient-to-b from-[#002244]/60 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="page-body text-slate-300 font-light italic">
            &quot;{t("cooperation.quote")}&quot;
          </blockquote>
        </div>
      </section>

      <FooterNav locale={validLocale} />
      </div>
    </div>
  )
}
