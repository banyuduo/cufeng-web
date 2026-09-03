"use client"

import { type ReactNode } from "react"
import { DarkPagePatternBg } from "@/components/dark-page-pattern-bg"

type PageHeroVariant = "dark" | "light"

interface PageHeroProps {
  variant?: PageHeroVariant
  badge?: string
  title: string
  subtitle?: string
  tagline?: string
  /** 深色 variant 时是否显示网格与光晕装饰 */
  withDecoration?: boolean
  /** 深色页底：gradient 为旧渐变；solid 为整页海军蓝 */
  background?: "gradient" | "solid"
  /** 标题字重，cooperation 页使用 light */
  titleWeight?: "bold" | "light"
  children?: ReactNode
}

export function PageHero({
  variant = "dark",
  badge,
  title,
  subtitle,
  tagline,
  withDecoration = false,
  background = "gradient",
  titleWeight = "bold",
  children,
}: PageHeroProps) {
  const isDark = variant === "dark"
  const isSolidNavy = isDark && background === "solid"

  const showSubtitle = Boolean(subtitle && subtitle.trim() !== title.trim())

  return (
    <section
      className={`relative pt-24 sm:pt-32 lg:pt-36 xl:pt-40 pb-10 sm:pb-16 lg:pb-24 overflow-hidden pointer-events-none ${
        isSolidNavy ? "bg-[#0B1F33]" : isDark ? "" : "bg-[#F9FAFC]"
      }`}
    >
      {isDark && !isSolidNavy && (
        <>
          <DarkPagePatternBg />
        </>
      )}
      {isDark && withDecoration && !isSolidNavy && (
        <>
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 119, 182, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 119, 182, 0.25) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>
          <div
            className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-70 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0,119,182,0.22) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full opacity-70 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0,150,199,0.2) 0%, transparent 70%)",
            }}
          />
        </>
      )}

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 pointer-events-auto">
        <div className="text-center max-w-4xl mx-auto">
          {badge && (
            <div
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
                isDark
                  ? "bg-white/10 text-white/80 border-white/15"
                  : "bg-[#E8EEFF] text-[#023B99] border-[#4169E1]/30"
              }`}
            >
              {badge}
            </div>
          )}
          <h1
            className={`page-h1 mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            } ${titleWeight === "light" ? "font-light" : ""}`}
          >
            {title}
          </h1>
          {tagline && (
            <p
              className={`page-kicker mb-3 break-words ${
                isDark ? "text-white/55" : "text-[#0077b6]"
              }`}
            >
              {tagline}
            </p>
          )}
          {showSubtitle && (
            <p
              className={`page-lead page-measure break-words ${
                isDark ? "text-white/75" : "text-slate-500"
              }`}
            >
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
