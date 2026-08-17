export interface MaterialComparisonRadarChartProps {
  labels: {
    dim1: string
    dim2: string
    dim3: string
    dim4: string
    dim5: string
    dim1Mobile?: string
    dim2Mobile?: string
    dim3Mobile?: string
    dim4Mobile?: string
    dim5Mobile?: string
    diamondCu: string
    diamondSiC: string
    toSpike: string
  }
  variant?: "light" | "dark"
}

const DIMENSIONS = ["dim1", "dim2", "dim3", "dim4", "dim5"] as const

const DATASETS = [
  {
    data: [40, 85, 30, 20, 70],
    stroke: "rgba(148, 163, 184, 0.9)",
    fill: "rgba(148, 163, 184, 0.08)",
    point: "rgba(148, 163, 184, 0.9)",
    labelKey: "diamondCu" as const,
  },
  {
    data: [60, 80, 60, 30, 90],
    stroke: "rgba(65, 105, 225, 0.9)",
    fill: "rgba(65, 105, 225, 0.08)",
    point: "rgba(65, 105, 225, 0.9)",
    labelKey: "diamondSiC" as const,
  },
  {
    data: [95, 95, 95, 95, 85],
    stroke: "rgba(115, 219, 255, 1)",
    fill: "rgba(115, 219, 255, 0.25)",
    point: "rgba(115, 219, 255, 1)",
    labelKey: "toSpike" as const,
  },
]

function polarPoint(index: number, value: number, cx: number, cy: number, maxR: number, count: number) {
  const angle = (Math.PI * 2 * index) / count - Math.PI / 2
  const r = (value / 100) * maxR
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
}

function polygonPoints(data: number[], cx: number, cy: number, maxR: number, count: number) {
  return data
    .map((value, index) => {
      const point = polarPoint(index, value, cx, cy, maxR, count)
      return `${point.x},${point.y}`
    })
    .join(" ")
}

function renderLabelLines(text: string, x: number, y: number, anchor: "start" | "middle" | "end", fill: string, size: number) {
  const lines = text.split("\n")
  return lines.map((line, lineIndex) => (
    <tspan
      key={`${text}-${lineIndex}`}
      x={x}
      dy={lineIndex === 0 ? 0 : size * 1.15}
      textAnchor={anchor}
      fill={fill}
      fontSize={size}
      fontWeight={500}
    >
      {line}
    </tspan>
  ))
}

export function MaterialComparisonRadarChart({ labels, variant = "dark" }: MaterialComparisonRadarChartProps) {
  const isLight = variant === "light"
  const count = DIMENSIONS.length
  const cx = 200
  const cy = 190
  const maxR = 118
  const labelR = 152

  const gridColor = isLight ? "rgba(148, 163, 184, 0.25)" : "rgba(148, 163, 184, 0.15)"
  const axisColor = isLight ? "rgba(148, 163, 184, 0.22)" : "rgba(148, 163, 184, 0.12)"
  const tickColor = isLight ? "rgba(71, 85, 105, 0.7)" : "rgba(148, 163, 184, 0.6)"
  const labelColor = isLight ? "rgba(30, 41, 59, 0.92)" : "rgba(203, 213, 225, 0.9)"
  const legendColor = isLight ? "rgba(30, 41, 59, 0.9)" : "rgba(203, 213, 225, 0.95)"

  const gridLevels = [20, 40, 60, 80, 100]

  return (
    <div className="w-full max-w-[min(100%,calc(100vw-2rem))] sm:max-w-md lg:max-w-lg mx-auto">
      <svg
        viewBox="0 0 400 430"
        role="img"
        aria-label={labels.toSpike}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {gridLevels.map((level) => (
          <polygon
            key={level}
            points={polygonPoints(Array(count).fill(level), cx, cy, maxR, count)}
            fill="none"
            stroke={gridColor}
            strokeWidth={0.8}
          />
        ))}

        {DIMENSIONS.map((_, index) => {
          const end = polarPoint(index, 100, cx, cy, maxR, count)
          return <line key={`axis-${index}`} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke={axisColor} strokeWidth={0.8} />
        })}

        {gridLevels.map((level) => {
          const point = polarPoint(0, level, cx, cy, maxR, count)
          return (
            <text key={`tick-${level}`} x={point.x + 6} y={point.y + 4} fill={tickColor} fontSize={11}>
              {level}
            </text>
          )
        })}

        {DATASETS.map((dataset) => (
          <g key={dataset.labelKey}>
            <polygon
              points={polygonPoints(dataset.data, cx, cy, maxR, count)}
              fill={dataset.fill}
              stroke={dataset.stroke}
              strokeWidth={dataset.labelKey === "toSpike" ? 1.5 : 1}
            />
            {dataset.data.map((value, index) => {
              const point = polarPoint(index, value, cx, cy, maxR, count)
              return (
                <circle
                  key={`${dataset.labelKey}-${index}`}
                  cx={point.x}
                  cy={point.y}
                  r={2.5}
                  fill={dataset.point}
                  stroke="rgba(30, 41, 59, 1)"
                  strokeWidth={0.5}
                />
              )
            })}
          </g>
        ))}

        {DIMENSIONS.map((dimKey, index) => {
          const labelPoint = polarPoint(index, 100, cx, cy, labelR, count)
          const mobileKey = `${dimKey}Mobile` as keyof typeof labels
          const mobileLabel = labels[mobileKey]
          const desktopLabel = labels[dimKey]
          const anchor = index === 0 ? "middle" : index === 1 || index === 2 ? "start" : index === 3 || index === 4 ? "end" : "middle"

          return (
            <g key={dimKey}>
              <text x={labelPoint.x} y={labelPoint.y} className="hidden md:inline">
                {renderLabelLines(desktopLabel, labelPoint.x, labelPoint.y, anchor, labelColor, 13)}
              </text>
              <text x={labelPoint.x} y={labelPoint.y} className="md:hidden">
                {renderLabelLines(
                  typeof mobileLabel === "string" ? mobileLabel : desktopLabel,
                  labelPoint.x,
                  labelPoint.y,
                  anchor,
                  labelColor,
                  9
                )}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-2 pb-1">
        {DATASETS.map((dataset) => (
          <div key={dataset.labelKey} className="inline-flex items-center gap-2">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: dataset.point }}
              aria-hidden
            />
            <span className="text-[11px] sm:text-[13px]" style={{ color: legendColor }}>
              {labels[dataset.labelKey]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
