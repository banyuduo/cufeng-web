import type { Locale } from "./i18n"
import zh from "@/locales/zh.json"
import en from "@/locales/en.json"

const translations: Record<Locale, Record<string, unknown>> = {
  zh: zh as Record<string, unknown>,
  en: en as Record<string, unknown>,
}

function getNested(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".")
  let current: unknown = obj
  for (const key of keys) {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return undefined
    }
  }
  return current
}

export function getTranslations(locale: Locale) {
  const t = (key: string): string => {
    const value = getNested(translations[locale], key)
    return typeof value === "string" ? value : key
  }
  return t
}
