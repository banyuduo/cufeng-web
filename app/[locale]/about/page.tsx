import AboutPage from "../../about/page"
import { localeSeo } from "@/lib/seo"

export const generateMetadata = localeSeo("/about/")

export default async function LocaleAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  return <AboutPage params={params} />
}
