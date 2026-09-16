import type { ReactNode } from "react"
import { duplicateRouteMetadata } from "@/lib/seo"

export const metadata = duplicateRouteMetadata("/products/carbon-composite/")

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
