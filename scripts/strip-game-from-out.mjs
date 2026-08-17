import fs from "fs"
import path from "path"

const outGame = path.join("out", "game")

if (fs.existsSync(outGame)) {
  fs.rmSync(outGame, { recursive: true, force: true })
  console.log("Removed out/game from static export.")
}
