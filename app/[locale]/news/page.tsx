import NewsPage from "../../news/page"
import { localeSeo } from "@/lib/seo"

export const generateMetadata = localeSeo("/news/")

export default async function LocaleNewsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  return <NewsPage params={params} />
}
