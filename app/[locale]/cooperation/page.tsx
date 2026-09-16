import CooperationPage from "../../cooperation/page"
import { localeSeo } from "@/lib/seo"

export const generateMetadata = localeSeo("/cooperation/")

export default async function LocaleCooperationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  return <CooperationPage params={params} />
}
