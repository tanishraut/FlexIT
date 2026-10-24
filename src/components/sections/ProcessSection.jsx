import React from "react";
import { processSteps } from "../../data/processData";

export default function ProcessSection() {
  return (
    <section className="process section">
      <div className="section-heading">
        <span className="section-label">OUR PROCESS</span>

        <h2>
          From idea to
          <span> growth.</span>
        </h2>

        <p>
          A simple process designed to turn your business requirements into
          practical digital solutions.
        </p>
      </div>

      <div className="process-grid">
        {processSteps.map((step) => (
          <div className="process-item" key={step.step}>
            <span>{step.step}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
