import ApplicationsPage from "../../applications/page"

export default async function LocaleApplicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  return <ApplicationsPage params={params} />
}
