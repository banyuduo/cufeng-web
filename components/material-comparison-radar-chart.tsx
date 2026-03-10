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
}

const DIMENSIONS = ["dim1", "dim2", "dim3", "dim4", "dim5"] as const

export function MaterialComparisonRadarChart({ labels }: MaterialComparisonRadarChartProps) {
  const dimensionLabels = DIMENSIONS.map((k) => labels[k])

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
    aspectRatio: 1.1,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "rgba(203, 213, 225, 0.95)",
          font: { size: 12, family: "inherit" },
          padding: 16,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "rgba(30, 41, 59, 0.95)",
        titleColor: "rgba(255, 255, 255, 0.95)",
        bodyColor: "rgba(203, 213, 225, 0.95)",
        borderColor: "rgba(148, 163, 184, 0.3)",
        borderWidth: 1,
        padding: 10,
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
          color: "rgba(148, 163, 184, 0.6)",
          font: { size: 10 },
          backdropColor: "transparent",
        },
        grid: {
          color: "rgba(148, 163, 184, 0.15)",
          lineWidth: 0.8,
        },
        angleLines: {
          color: "rgba(148, 163, 184, 0.12)",
          lineWidth: 0.8,
        },
        pointLabels: {
          color: "rgba(203, 213, 225, 0.9)",
          font: { size: 11, family: "inherit" },
        },
      },
    },
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Radar data={data} options={options} />
    </div>
  )
}
