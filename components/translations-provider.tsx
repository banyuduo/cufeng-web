"use client"

import { createContext, useContext, useMemo } from "react"
import { getNested } from "@/lib/get-nested"

const TranslationsContext = createContext<((key: string) => string) | null>(null)

export function TranslationsProvider({
  data,
  children,
}: {
  data: Record<string, unknown>
  children: React.ReactNode
}) {
  const t = useMemo(
    () => (key: string) => {
      const value = getNested(data, key)
      return typeof value === "string" ? value : key
    },
    [data]
  )
  return (
    <TranslationsContext.Provider value={t}>
      {children}
    </TranslationsContext.Provider>
  )
}

export function useTranslations() {
  const t = useContext(TranslationsContext)
  if (!t) {
    throw new Error("useTranslations must be used within TranslationsProvider")
  }
  return t
}
