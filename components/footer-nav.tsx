"use client"

import Link from "next/link"
import { ChevronUp, Mail, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export function FooterNav() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* 悬浮回到顶部按钮 */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="回到顶部"
        >
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <footer className="border-t border-slate-200 bg-slate-50 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-8 lg:gap-12">
            <div>
              <div className="font-bold text-lg mb-4 text-slate-900">簇锋科技 | ToSpike</div>
              <p className="text-sm text-slate-600">sp²–sp³ 碳基界面平台技术</p>
            </div>
          <div>
            <div className="font-semibold mb-4 text-slate-900">产品</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/products/nonstick-cookware" className="hover:text-sky-600 transition-colors">
                  金刚石不粘锅
                </Link>
              </li>
              <li>
                <Link href="/products/diamond-copper" className="hover:text-sky-600 transition-colors">
                  金刚石铜材料
                </Link>
              </li>
              <li>
                <Link href="/products/thermal-pad" className="hover:text-sky-600 transition-colors">
                  柔性导热垫片
                </Link>
              </li>
              <li>
                <Link href="/products/carbon-composite" className="hover:text-sky-600 transition-colors">
                  碳基复合材料
                </Link>
              </li>
              <li>
                <Link href="/products/diamond-tools" className="hover:text-sky-600 transition-colors">
                  超磨熔固工具
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4 text-slate-900">技术与合作</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-sky-600 transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/patents" className="hover:text-sky-600 transition-colors">
                  技术架构
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-sky-600 transition-colors">
                  应用领域
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-sky-600 transition-colors">
                  新闻动态
                </Link>
              </li>
              <li>
                <Link href="/cooperation" className="hover:text-sky-600 transition-colors">
                  项目合作
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4 text-slate-900">合作与支持</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
                <span>南京市江北新区行知路2号</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
                <span>邮箱: wangbo@tospike.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-8 pt-8">
          <div className="text-xs text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8 px-4">
            <div className="font-semibold text-zinc-600">簇锋科技 | ToSpike</div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2 text-center">
              <span>Copyright © 2018 - 2026 南京簇锋机电科技有限公司</span>
              <span className="hidden sm:inline text-zinc-400">|</span>

              <div className="flex items-center gap-1.5 group">
                <img
                  src="/images/police-filing-badge.png"
                  alt="公安机关联网备案"
                  className="w-3.5 h-3.5 object-contain grayscale group-hover:grayscale-0 transition-all"
                />
                <Link
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-700 transition-colors"
                >
                  苏ICP备18019265号-1
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
