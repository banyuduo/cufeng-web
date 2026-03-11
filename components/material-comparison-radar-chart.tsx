"use client"

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
    diamondCu: string
    diamondSiC: string
    toSpike: string
  }
  /** 浅色背景（如白/灰）时用 true，标注与图例使用深色以提升可读性 */
  variant?: "light" | "dark"
}

const DIMENSIONS = ["dim1", "dim2", "dim3", "dim4", "dim5"] as const

export function MaterialComparisonRadarChart({ labels, variant = "dark" }: MaterialComparisonRadarChartProps) {
  const dimensionLabels = DIMENSIONS.map((k) => labels[k])
  const isLight = variant === "light"

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

  const options: ChartOptions<"radar"> = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.25,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: isLight ? "rgba(30, 41, 59, 0.9)" : "rgba(203, 213, 225, 0.95)",
          font: { size: 13, family: "inherit" },
          padding: 20,
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
          font: { size: 13, family: "inherit", weight: "500" },
        },
      },
    },
  }

  return (
    <div className="w-full max-w-md lg:max-w-lg mx-auto min-h-[280px]">
      <Radar data={data} options={options} />
    </div>
  )
}
