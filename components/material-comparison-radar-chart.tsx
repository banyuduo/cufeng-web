"use client"

import { useMemo, useState, useEffect } from "react"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"
import { Radar } from "react-chartjs-2"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export interface MaterialComparisonRadarChartProps {
  labels: {
    dim1: string
    dim2: string
    dim3: string
    dim4: string
    dim5: string
    /** 移动端两行显示，可选；无则回退到 dim1…dim5 */
    dim1Mobile?: string
    dim2Mobile?: string
    dim3Mobile?: string
    dim4Mobile?: string
    dim5Mobile?: string
    diamondCu: string
    diamondSiC: string
    toSpike: string
  }
  /** 浅色背景（如白/灰）时用 true，标注与图例使用深色以提升可读性 */
  variant?: "light" | "dark"
}

const DIMENSIONS = ["dim1", "dim2", "dim3", "dim4", "dim5"] as const

export function MaterialComparisonRadarChart({ labels, variant = "dark" }: MaterialComparisonRadarChartProps) {
  const isLight = variant === "light"
  const [isMobile, setIsMobile] = useState(false)
  const [devicePixelRatio, setDevicePixelRatio] = useState(2)
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)")
    const update = () => {
      setIsMobile(window.innerWidth < 768)
      const dpr = window.devicePixelRatio ?? 1
      setDevicePixelRatio(Math.min(Math.round(dpr), 2))
    }
    update()
    mql.addEventListener("change", update)
    return () => mql.removeEventListener("change", update)
  }, [])

  const dimensionLabels = useMemo(
    () =>
      DIMENSIONS.map((k) => {
        if (!isMobile) return labels[k]
        const mobileKey = `${k}Mobile` as keyof typeof labels
        const mobileVal = labels[mobileKey]
        return typeof mobileVal === "string" ? mobileVal : labels[k]
      }),
    [labels, isMobile]
  )

  const data = {
    labels: dimensionLabels,
    datasets: [
      {
        label: labels.diamondCu,
        data: [40, 85, 30, 20, 70],
        borderColor: "rgba(148, 163, 184, 0.9)",
        backgroundColor: "rgba(148, 163, 184, 0.08)",
        borderWidth: 1,
        pointBackgroundColor: "rgba(148, 163, 184, 0.9)",
        pointBorderColor: "rgba(30, 41, 59, 1)",
        pointRadius: 2.5,
        fill: true,
      },
      {
        label: labels.diamondSiC,
        data: [60, 80, 60, 30, 90],
        borderColor: "rgba(65, 105, 225, 0.9)",
        backgroundColor: "rgba(65, 105, 225, 0.08)",
        borderWidth: 1,
        pointBackgroundColor: "rgba(65, 105, 225, 0.9)",
        pointBorderColor: "rgba(30, 41, 59, 1)",
        pointRadius: 2.5,
        fill: true,
      },
      {
        label: labels.toSpike,
        data: [95, 95, 95, 95, 85],
        borderColor: "rgba(115, 219, 255, 1)",
        backgroundColor: "rgba(115, 219, 255, 0.25)",
        borderWidth: 1.5,
        pointBackgroundColor: "rgba(115, 219, 255, 1)",
        pointBorderColor: "rgba(30, 41, 59, 1)",
        pointRadius: 2.5,
        fill: true,
      },
    ],
  }

  const options: ChartOptions<"radar"> = useMemo(
    () => ({
    responsive: true,
    maintainAspectRatio: !isMobile,
    aspectRatio: 1.25,
    devicePixelRatio,
    layout: {
      padding: isMobile ? 2 : 16,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: isLight ? "rgba(30, 41, 59, 0.9)" : "rgba(203, 213, 225, 0.95)",
          font: { size: isMobile ? 11 : 13, family: "inherit" },
          padding: isMobile ? 10 : 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: isLight ? "rgba(255, 255, 255, 0.98)" : "rgba(30, 41, 59, 0.95)",
        titleColor: isLight ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)",
        bodyColor: isLight ? "rgba(51, 65, 85, 0.95)" : "rgba(203, 213, 225, 0.95)",
        borderColor: isLight ? "rgba(148, 163, 184, 0.4)" : "rgba(148, 163, 184, 0.3)",
        borderWidth: 1,
        padding: 12,
        titleFont: { size: 13 },
        bodyFont: { size: 12 },
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          color: isLight ? "rgba(71, 85, 105, 0.7)" : "rgba(148, 163, 184, 0.6)",
          font: { size: 11 },
          backdropColor: "transparent",
        },
        grid: {
          color: isLight ? "rgba(148, 163, 184, 0.25)" : "rgba(148, 163, 184, 0.15)",
          lineWidth: 0.8,
        },
        angleLines: {
          color: isLight ? "rgba(148, 163, 184, 0.22)" : "rgba(148, 163, 184, 0.12)",
          lineWidth: 0.8,
        },
        pointLabels: {
          color: isLight ? "rgba(30, 41, 59, 0.92)" : "rgba(203, 213, 225, 0.9)",
          font: { size: isMobile ? 9 : 13, family: "inherit", weight: "500" },
          callback(label: string) {
            if (typeof label === "string" && label.includes("\n")) {
              return label.split("\n")
            }
            return label
          },
        },
      },
    },
  }),
  [isLight, isMobile, devicePixelRatio]
  )

  // 移动端布局与两行标签对中英文均生效（labels 由当前 locale 的 t() 注入）
  return (
    <div
      className={
        isMobile
          ? "w-full -mx-1 sm:mx-auto h-[min(88vh,98vw)] min-h-[340px] max-h-[none]"
          : "w-full max-w-[min(100%,calc(100vw-2rem))] sm:max-w-md lg:max-w-lg mx-auto min-h-[380px] md:min-h-[280px]"
      }
    >
      <Radar data={data} options={options} />
    </div>
  )
}
