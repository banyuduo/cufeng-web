import NewsPage from "../../news/page"

export default async function LocaleNewsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  return <NewsPage params={params} />
}
