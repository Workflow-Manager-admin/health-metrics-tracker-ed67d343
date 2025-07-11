/* eslint-env browser */
/* global setTimeout */
import React, { useState } from "react";
import { MetricType, getColorForMetric } from "../util/healthData";

// PUBLIC_INTERFACE
export default function MetricEntry() {
  const [form, setForm] = useState({
    [MetricType.Weight]: "",
    [MetricType.Steps]: "",
    [MetricType.Sleep]: "",
    [MetricType.BloodPressure]: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  // Simulate storing data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1500);
  };

  return (
    <section className="entry-section">
      <h2>Enter Health Metrics</h2>
      <form className="entry-form" onSubmit={handleSubmit}>
        {Object.values(MetricType).map(type => (
          <label key={type} className="entry-label">
            <span style={{ color: getColorForMetric(type) }}>{type}</span>
            <input
              className="entry-input"
              type={type === MetricType.BloodPressure ? "text" : "number"}
              name={type}
              value={form[type]}
              onChange={handleChange}
              inputMode={type === MetricType.BloodPressure ? "text" : "decimal"}
              min="0"
              step={type === MetricType.Sleep ? "0.25" : "1"}
              placeholder={
                type === MetricType.BloodPressure
                  ? "e.g. 115/75"
                  : type === MetricType.Weight
                  ? "kg"
                  : type === MetricType.Steps
                  ? "steps"
                  : "hours"
              }
              required
            />
          </label>
        ))}
        <button className="entry-submit" type="submit">Add Entry</button>
        {submitted && (
          <span className="entry-confirm">Metrics submitted!</span>
        )}
      </form>
    </section>
  );
}
