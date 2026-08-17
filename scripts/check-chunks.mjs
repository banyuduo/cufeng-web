import fs from "fs"

const html = fs.readFileSync("live-zh.html", "utf8")
const refs = [
  ...new Set([...html.matchAll(/\/_next\/static\/chunks\/[^"']+/g)].map((m) => m[0])),
]

let bad = 0
for (const f of refs) {
  const res = await fetch(`https://www.tospike.com${f}`, { method: "HEAD" })
  if (res.status !== 200) {
    console.log(res.status, f)
    bad++
  }
}
console.log(`checked ${refs.length} refs, ${bad} missing`)
