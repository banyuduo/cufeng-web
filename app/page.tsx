import { defaultLocale } from "@/lib/i18n"

/** 静态导出下 next/navigation 的 redirect() 会生成带 __next_error__ 的 HTML，依赖 RSC  Hydration 才跳转，易卡顿；行内脚本可立即跳转。 */
export default function RootPage() {
  const to = `/${defaultLocale}/`
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(to)})`,
        }}
      />
      <noscript>
        <p>
          <a href={to}>进入中文首页</a>
        </p>
      </noscript>
    </>
  )
}
