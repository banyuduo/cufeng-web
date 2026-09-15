import { cn } from "@/lib/utils"

const CHEM_TOKEN = /(sp[²³23])/g

export function ChemText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const parts = text.split(CHEM_TOKEN)
  if (parts.length === 1) {
    return <>{text}</>
  }

  return (
    <>
      {parts.map((part, index) =>
        /^sp[²³23]$/.test(part) ? (
          <span key={`${part}-${index}`} className={cn("page-chem", className)}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  )
}
