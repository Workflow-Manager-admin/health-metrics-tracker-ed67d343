import React from "react";
import { sampleMetrics, MetricType, getColorForMetric } from "../util/healthData";
import ChartMini from "../ui/ChartMini";

// PUBLIC_INTERFACE
export default function Dashboard() {
  return (
    <section>
      <h2>Dashboard</h2>
      <div className="dashboard-metrics">
        {Object.values(MetricType).map(type => (
          <div className="metric-card" key={type} style={{ borderColor: getColorForMetric(type) }}>
            <div className="metric-card-header">
              <span className="metric-label" style={{ color: getColorForMetric(type) }}>
                {type}
              </span>
              <span className="metric-value">
                {sampleMetrics[type][sampleMetrics[type].length - 1]} 
                <small>
                  {type === MetricType.Weight && "kg"}
                  {type === MetricType.Steps && ""}
                  {type === MetricType.Sleep && "h"}
                  {type === MetricType.BloodPressure && " mmHg"}
                </small>
              </span>
            </div>
            <ChartMini data={sampleMetrics[type]} color={getColorForMetric(type)} />
          </div>
        ))}
      </div>
    </section>
  );
}
