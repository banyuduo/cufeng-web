import ApplicationsPage from "../../applications/page"
import { localeSeo } from "@/lib/seo"

export const generateMetadata = localeSeo("/applications/")

export default async function LocaleApplicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  return <ApplicationsPage params={params} />
}
