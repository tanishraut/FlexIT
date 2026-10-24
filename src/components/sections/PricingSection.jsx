import React from "react";
import { pricingPlans } from "../../data/pricingData";

export default function PricingSection() {
  return (
    <section className="pricing section" id="pricing">
      <div className="section-heading">
        <span className="section-label">AGENCY PACKAGES</span>

        <h2>
          Marketing built for
          <span> measurable growth.</span>
        </h2>

        <p>
          Choose a monthly plan designed to grow your audience, generate
          enquiries and turn campaigns into bookings.
        </p>
      </div>

      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <article
            className={`pricing-card${
              index === 1 ? " pricing-card-featured" : ""
            }`}
            key={plan.name}
          >
            <span className="pricing-plan-label">PLAN {index + 1}</span>
            <h3>{plan.name}</h3>
            <p className="pricing-price">
              <strong>₹{plan.price}</strong>
              <span>/month</span>
            </p>
            <p className="pricing-reach">{plan.reach} audience reach target</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="pricing-commission">
              {plan.commission} commission on attributable bookings
            </p>
            <a className="pricing-button" href="#ticketForm">
              Choose this plan <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
