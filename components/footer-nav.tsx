"use client"

import Link from "next/link"
import { ChevronUp } from "lucide-react"

export function FooterNav() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-lg mb-4 text-slate-900">南京簇锋机电科技</div>
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
              <li>南京市江北新区行知路2号</li>
              <li>邮箱: wangbo@tospike.com</li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 transition-colors mt-2"
                >
                  <ChevronUp className="w-4 h-4" />
                  回到顶部
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-8 pt-8">
          <div className="mb-2 text-center">
            <Link href="/" className="text-sky-600 hover:text-sky-700 transition-colors text-sm">
              返回首页
            </Link>
          </div>
          <div className="text-xs text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8 px-4">
            <div className="font-semibold text-zinc-600">sp²–sp³ 碳基界面平台 · 簇锋科技</div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2 text-center">
              <span>COPYRIGHT © 2018 - 2026</span>
              <span className="hidden sm:inline text-zinc-400">|</span>

              <div className="flex items-center gap-1.5 group">
                <img
                  src="/images/police-filing-badge.png"
                  alt="公安机关联网备案"
                  className="w-3.5 h-3.5 object-contain grayscale group-hover:grayscale-0 transition-all"
                />
                <Link
                  href="https://beian.mps.gov.cn/#/query/webSearch?code=32118302000194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-700 transition-colors"
                >
                  苏公网安备 32118302000194号
                </Link>
              </div>

              <span className="hidden sm:inline text-zinc-400">|</span>

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
    </footer>
  )
}
