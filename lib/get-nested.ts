export function getNested(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".")
  let current: unknown = obj
  for (const key of keys) {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return undefined
    }
  }
  return current
}
