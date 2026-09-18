"use client"

import dynamic from "next/dynamic"

const Analytics =
  process.env.NEXT_PUBLIC_VERCEL === "1"
    ? dynamic(() => import("@vercel/analytics/next").then((mod) => mod.Analytics), { ssr: false })
    : () => null

/** 仅在 Vercel 部署时加载 Analytics，避免阿里云等静态托管环境的多余脚本。 */
export function AnalyticsEmbed() {
  return <Analytics />
}
