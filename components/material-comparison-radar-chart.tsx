"use client"

import { useState } from "react"

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
    stroke: "rgba(168, 162, 148, 0.95)",
    fill: "rgba(168, 162, 148, 0.14)",
    point: "rgba(168, 162, 148, 1)",
    strokeWidth: 2,
    labelKey: "diamondCu" as const,
  },
  {
    data: [60, 80, 60, 30, 90],
    stroke: "rgba(139, 146, 154, 0.95)",
    fill: "rgba(139, 146, 154, 0.14)",
    point: "rgba(139, 146, 154, 1)",
    strokeWidth: 2.1,
    labelKey: "diamondSiC" as const,
  },
  {
    data: [95, 95, 95, 95, 85],
    stroke: "rgba(248, 250, 252, 1)",
    fill: "rgba(42, 127, 196, 0.42)",
    point: "rgba(248, 250, 252, 1)",
    strokeWidth: 2.7,
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
      dy={lineIndex === 0 ? 0 : size * 1.2}
      textAnchor={anchor}
      fill={fill}
      fontSize={size}
      fontWeight={500}
    >
      {line}
    </tspan>
  ))
}

type DatasetKey = (typeof DATASETS)[number]["labelKey"]

export function MaterialComparisonRadarChart({ labels, variant = "dark" }: MaterialComparisonRadarChartProps) {
  const [solo, setSolo] = useState<DatasetKey | null>(null)
  const isLight = variant === "light"
  const count = DIMENSIONS.length
  const cx = 270
  const cy = 228
  const maxR = 118
  const labelR = 162
  const visibleDatasets = DATASETS.filter((dataset) => solo === null || dataset.labelKey === solo)

  const gridColor = isLight ? "rgba(100, 116, 139, 0.28)" : "rgba(226, 232, 240, 0.28)"
  const axisColor = isLight ? "rgba(100, 116, 139, 0.22)" : "rgba(226, 232, 240, 0.2)"
  const tickColor = isLight ? "rgba(71, 85, 105, 0.75)" : "rgba(226, 232, 240, 0.55)"
  const labelColor = isLight ? "rgba(30, 41, 59, 0.92)" : "rgba(248, 250, 252, 0.92)"
  const legendColor = isLight ? "rgba(30, 41, 59, 0.9)" : "rgba(226, 232, 240, 0.88)"
  const pointStroke = isLight ? "rgba(255, 255, 255, 1)" : "rgba(11, 31, 51, 1)"

  const gridLevels = [20, 40, 60, 80, 100]

  return (
    <div className="w-full max-w-[18.5rem] sm:max-w-[22rem] lg:max-w-[36rem] xl:max-w-[42rem] mx-auto">
      <svg
        viewBox="0 0 540 408"
        role="img"
        aria-label={labels.toSpike}
        className="w-full h-auto overflow-visible"
        overflow="visible"
        preserveAspectRatio="xMidYMid meet"
      >
        {gridLevels.map((level) => (
          <polygon
            key={level}
            points={polygonPoints(Array(count).fill(level), cx, cy, maxR, count)}
            fill="none"
            stroke={gridColor}
            strokeWidth={level === 100 ? 1.4 : 1.15}
          />
        ))}

        {DIMENSIONS.map((_, index) => {
          const end = polarPoint(index, 100, cx, cy, maxR, count)
          return <line key={`axis-${index}`} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke={axisColor} strokeWidth={1.15} />
        })}

        {gridLevels.map((level) => {
          const point = polarPoint(0, level, cx, cy, maxR, count)
          return (
            <text key={`tick-${level}`} x={point.x + 7} y={point.y + 4} fill={tickColor} fontSize={11}>
              {level}
            </text>
          )
        })}

        {visibleDatasets.map((dataset) => (
          <g key={dataset.labelKey}>
            <polygon
              points={polygonPoints(dataset.data, cx, cy, maxR, count)}
              fill={dataset.fill}
              stroke={dataset.stroke}
              strokeWidth={dataset.strokeWidth}
              strokeLinejoin="round"
            />
            {dataset.data.map((value, index) => {
              const point = polarPoint(index, value, cx, cy, maxR, count)
              return (
                <circle
                  key={`${dataset.labelKey}-${index}`}
                  cx={point.x}
                  cy={point.y}
                  r={dataset.labelKey === "toSpike" ? 3.4 : 2.8}
                  fill={dataset.point}
                  stroke={pointStroke}
                  strokeWidth={1}
                />
              )
            })}
          </g>
        ))}

        {DIMENSIONS.map((dimKey, index) => {
          const labelPoint = polarPoint(index, 100, cx, cy, labelR, count)
          const mobileKey = `${dimKey}Mobile` as keyof typeof labels
          const mobileLabel = labels[mobileKey]
          const desktopLabel =
            dimKey === "dim5" && typeof mobileLabel === "string" ? mobileLabel : labels[dimKey]
          const compactLabel = typeof mobileLabel === "string" ? mobileLabel : desktopLabel
          const anchor = index === 0 ? "middle" : index === 1 || index === 2 ? "start" : index === 3 || index === 4 ? "end" : "middle"

          return (
            <g key={dimKey}>
              <text className="lg:hidden" x={labelPoint.x} y={labelPoint.y}>
                {renderLabelLines(compactLabel, labelPoint.x, labelPoint.y, anchor, labelColor, 13)}
              </text>
              <text className="hidden lg:inline" x={labelPoint.x} y={labelPoint.y}>
                {renderLabelLines(desktopLabel, labelPoint.x, labelPoint.y, anchor, labelColor, 15)}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 gap-y-1 px-2 pt-1 pb-1">
        {DATASETS.map((dataset) => {
          const dimmed = solo !== null && solo !== dataset.labelKey
          return (
            <button
              key={dataset.labelKey}
              type="button"
              onClick={() => setSolo((current) => (current === dataset.labelKey ? null : dataset.labelKey))}
              className={`inline-flex items-center gap-2 min-h-[44px] px-1.5 rounded-sm transition-opacity ${
                dimmed ? "opacity-35" : "opacity-100"
              }`}
              style={{ color: legendColor }}
              aria-pressed={solo === dataset.labelKey}
            >
              <span
                className="inline-block w-5 h-[3px] rounded-full shrink-0"
                style={{ backgroundColor: dataset.stroke }}
                aria-hidden
              />
              <span className="page-caption text-left">
                {labels[dataset.labelKey]}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
