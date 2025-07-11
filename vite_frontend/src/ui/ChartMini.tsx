import React from "react";

// PUBLIC_INTERFACE
export default function ChartMini({ data, color }: { data: number[] | string[], color: string }) {
  // Only handle number arrays for now for mini-sparklines
  if (!Array.isArray(data) || typeof data[0] === "string") return null;
  const max = Math.max(...(data as number[]));
  const min = Math.min(...(data as number[]));
  const chartData = (data as number[]).map((v, i) => ({
    x: (i / (data.length - 1)) * 100,
    y: 40 - ((v - min) / (max - min || 1)) * 35
  }));

  return (
    <svg width="100%" height="44" viewBox="0 0 100 44" className="mini-chart" style={{ minHeight: 30 }}>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        points={chartData.map(p => `${p.x},${p.y}`).join(" ")}
        opacity="0.85"
      />
      {chartData.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="1.8" fill={color} opacity={0.77} />
      ))}
    </svg>
  );
}
