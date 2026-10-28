import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B1F33] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center py-24 sm:py-32">
        <div className="text-[#2A7FC4] font-semibold tracking-[0.2em] text-sm sm:text-base mb-6">
          404
        </div>
        <h1 className="page-h1 lg:text-6xl xl:text-7xl text-white mb-6">页面未找到</h1>
        <p className="page-lead page-measure text-white/70 mx-auto mb-10">
          您访问的页面不存在或已被移动，请返回首页继续浏览。
        </p>
        <Link
          href="/zh/"
          className="inline-flex items-center justify-center rounded-lg bg-[#2A7FC4] hover:bg-[#1B5F96] text-white px-8 py-3 text-base font-medium transition-colors"
        >
          返回首页
        </Link>
      </div>
    </main>
  )
}
