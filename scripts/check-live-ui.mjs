const live = await fetch("https://www.tospike.com/zh/").then((r) => ({
  status: r.status,
  lastModified: r.headers.get("last-modified"),
  html: r.text(),
})).then(async (x) => ({ ...x, html: await x.html }))

console.log("zh/ status:", live.status, "last-modified:", live.lastModified)
const css = [...live.html.matchAll(/href="([^"]+\.css[^"]*)"/g)].map((m) => m[1])
console.log("css refs:", css)

for (const file of ["/site.css", ...css.map((c) => (c.startsWith("/") ? c : `/${c}`))]) {
  const res = await fetch(`https://www.tospike.com${file}`, { method: "HEAD" })
  console.log(file, res.status)
}
