import CooperationPage from "../../cooperation/page"

export default async function LocaleCooperationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  return <CooperationPage params={params} />
}
