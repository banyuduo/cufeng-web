import AboutPage from "../../about/page"

export default async function LocaleAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  return <AboutPage params={params} />
}
