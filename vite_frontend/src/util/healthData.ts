/* eslint-disable no-unused-vars */
export enum MetricType {
  Weight = "Weight",
  Steps = "Steps",
  Sleep = "Sleep",
  BloodPressure = "BloodPressure"
}
/* eslint-enable no-unused-vars */

export const MetricTypes = [MetricType.Weight, MetricType.Steps, MetricType.Sleep, MetricType.BloodPressure];

export const sampleMetrics: Record<MetricType, number[] | string[]> = {
  [MetricType.Weight]: [72.0, 71.8, 72.4, 72.1, 71.5, 71.9, 71.7],
  [MetricType.Steps]: [5300, 8200, 7600, 10100, 12000, 7800, 6400],
  [MetricType.Sleep]: [7.2, 6.8, 7.5, 8.0, 7.3, 7.0, 7.8],
  [MetricType.BloodPressure]: [ "120/80", "118/76", "121/82", "119/79", "116/75", "115/75", "115/73"]
};

export function getColorForMetric(type: MetricType): string {
  switch (type) {
    case MetricType.Weight: return "#2E8B57"; // primary
    case MetricType.Steps: return "#FFD700"; // accent
    case MetricType.Sleep: return "#4682B4"; // secondary
    case MetricType.BloodPressure: return "#333";
    default: return "#aaa";
  }
}
