import { defaultLocale } from "@/lib/i18n"

export default function ProductsPage() {
  const to = `/${defaultLocale}/products/`
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(to)})`,
        }}
      />
      <noscript>
        <p>
          <a href={to}>进入产品页</a>
        </p>
      </noscript>
    </>
  )
}
