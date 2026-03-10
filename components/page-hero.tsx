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
  titleWeight = "bold",
  children,
}: PageHeroProps) {
  const isDark = variant === "dark"

  return (
    <section
      className={`relative pt-32 pb-16 sm:pb-20 overflow-hidden ${
        isDark
          ? ""
          : "bg-[#F9FAFC]"
      }`}
      style={isDark ? undefined : undefined}
    >
      {isDark && (
        <>
          <DarkPagePatternBg />
        </>
      )}
      {isDark && withDecoration && (
        <>
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(65, 105, 225, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(65, 105, 225, 0.25) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#4169E1]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#0047AB]/15 rounded-full blur-3xl" />
        </>
      )}

      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10`}>
        <div className={`text-center ${isDark ? "max-w-4xl" : "max-w-7xl"} mx-auto`}>
          {badge && (
            <div
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
                isDark
                  ? "bg-[#0344b3]/50 text-[#73DBFF] border-[#4169E1]/40"
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
              className={`text-base sm:text-xl mb-2 break-words ${
                isDark ? "text-[#73DBFF] font-semibold" : "text-[#73DBFF]"
              }`}
            >
              {tagline}
            </p>
          )}
          {subtitle && (
            <p
              className={`text-base sm:text-lg leading-relaxed break-words ${
                isDark ? "text-white/85" : "text-slate-600"
              } ${tagline ? "max-w-3xl mx-auto" : ""}`}
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
