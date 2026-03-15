import { cache } from "react"
import type { Locale } from "./i18n"
import { getNested } from "./get-nested"

export { getNested }

const cacheMap: Partial<Record<Locale, Record<string, unknown>>> = {}

/** 按需加载当前语言的翻译数据（可序列化，供 client 使用） */
export const getTranslationsData = cache(async (locale: Locale): Promise<Record<string, unknown>> => {
  if (!cacheMap[locale]) {
    const mod =
      locale === "zh"
        ? await import(/* webpackChunkName: "locale-zh" */ "@/locales/zh.json")
        : await import(/* webpackChunkName: "locale-en" */ "@/locales/en.json")
    cacheMap[locale] = mod.default as Record<string, unknown>
  }
  return cacheMap[locale]!
})

/** 按需加载当前语言的翻译，减少首屏 bundle（约 100KB/语言） */
export async function getTranslations(locale: Locale) {
  const data = await getTranslationsData(locale)
  const t = (key: string): string => {
    const value = getNested(data, key)
    return typeof value === "string" ? value : key
  }
  return t
}

export type TFunction = (key: string) => string
