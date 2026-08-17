/** 静态托管（阿里云等）下，目录路由必须以尾斜杠访问，否则会触发错误的 Apache 301。 */
export function ensureTrailingSlash(href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href

  // 静态资源、带扩展名的文件不处理
  if (/^\/(_next|docs|images)\//.test(href)) return href
  if (/\.[a-zA-Z0-9]+([?#]|$)/.test(href)) return href

  const hashIndex = href.indexOf("#")
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : ""
  const withoutHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href

  const queryIndex = withoutHash.indexOf("?")
  const query = queryIndex >= 0 ? withoutHash.slice(queryIndex) : ""
  const pathname = queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash

  if (pathname === "/" || pathname.endsWith("/")) return href

  return `${pathname}/${query}${hash}`
}
