import { Inter, Noto_Sans_SC } from "next/font/google"

/** Latin, digits, superscripts (sp² / sp³): Inter only. */
export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

/** CJK only in the stack after Inter, so Latin never picks Noto metrics. */
export const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sc",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
})

export const fontVariableClassName = `${inter.variable} ${notoSansSC.variable}`
