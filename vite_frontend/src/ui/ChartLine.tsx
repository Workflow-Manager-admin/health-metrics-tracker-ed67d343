import React from "react";

// PUBLIC_INTERFACE
export default function ChartLine({ data, color }: { data: number[] | string[], color: string }) {
  // For Blood Pressure, plot systolic as line.
  let yData: number[] = [];
  if (typeof data[0] === "string") {
    yData = (data as string[]).map(v => Number(v.split("/")[0]) || 0);
  } else yData = data as number[];

  const max = Math.max(...yData);
  const min = Math.min(...yData);
  const chartData = yData.map((v, i) => ({
    x: (i / (yData.length - 1)) * 100,
    y: 50 - ((v - min) / (max - min || 1)) * 38
  }));

  return (
    <svg width="100%" height="54" viewBox="0 0 100 54" className="line-chart" style={{ minHeight: 38 }}>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2.7"
        points={chartData.map(p => `${p.x},${p.y}`).join(" ")}
        opacity="0.77"
      />
      {chartData.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="2.4" fill={color} opacity={0.87} />
      ))}
    </svg>
  );
}
