import React from "react";
import { sampleMetrics, MetricType, getColorForMetric } from "../util/healthData";
import ChartLine from "../ui/ChartLine";

// PUBLIC_INTERFACE
export default function Trends() {
  return (
    <section>
      <h2>History &amp; Trends</h2>
      <div className="trends-metrics">
        {Object.values(MetricType).map(type => (
          <div className="trend-item" key={type}>
            <span className="trend-label" style={{ color: getColorForMetric(type) }}>
              {type} ({type === MetricType.Weight ? "kg" : type === MetricType.Steps ? "" : type === MetricType.Sleep ? "hours" : "mmHg"})
            </span>
            <ChartLine data={sampleMetrics[type]} color={getColorForMetric(type)} />
          </div>
        ))}
      </div>
    </section>
  );
}
