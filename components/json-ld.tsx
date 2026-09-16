import { SITE_ORIGIN } from "@/lib/seo"

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: "南京簇锋机电科技有限公司",
      alternateName: ["簇锋科技", "ToSpike", "CuFeng"],
      url: SITE_ORIGIN,
      logo: `${SITE_ORIGIN}/og-image.png`,
      email: "wangbo@tospike.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "行知路2号",
        addressLocality: "南京市江北新区",
        addressRegion: "江苏省",
        addressCountry: "CN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: "簇锋科技 | ToSpike",
      inLanguage: ["zh-CN", "en"],
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    },
  ],
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  )
}
