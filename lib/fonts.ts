import { Inter, Noto_Sans_SC } from "next/font/google"

/** Latin / numbers: Inter first so CJK falls through to Noto. */
export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})

/** Simplified Chinese pair for Inter; system fonts remain as last resort. */
export const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sc",
  display: "swap",
})

export const fontVariableClassName = `${inter.variable} ${notoSansSC.variable}`
