import type { ReactNode } from "react"
import { duplicateRouteMetadata } from "@/lib/seo"

export const metadata = duplicateRouteMetadata("/products/diamond-tools/")

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
