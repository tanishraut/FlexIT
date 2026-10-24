import React from "react";

export default function CtaSection() {
  return (
    <section className="cta">
      <div className="cta-glow"></div>

      <span className="section-label">READY TO GROW?</span>

      <h2>
        Let's build something
        <span> great.</span>
      </h2>

      <p>
        Tell us about your business and let's find the right digital solution for
        you.
      </p>

      <a href="#ticketForm" className="hero-btn hero-btn-primary">
        Start a Project
        <span>→</span>
      </a>
    </section>
  );
}
