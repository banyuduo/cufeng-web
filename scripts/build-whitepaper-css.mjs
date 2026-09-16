import { readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import postcss from "postcss"
import tailwindcss from "@tailwindcss/postcss"

const dir = dirname(fileURLToPath(import.meta.url))
const input = join(dir, "whitepaper-tw-input.css")
const output = join(dir, "../public/docs/whitepaper-tw.css")
const css = await readFile(input, "utf8")
const result = await postcss([tailwindcss()]).process(css, { from: input, to: output })
await writeFile(output, result.css)
console.log(`wrote ${output} (${result.css.length} bytes)`)
