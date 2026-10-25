import React from "react";

/**
 * Strong conversion CTA component placed directly after the portfolio grid.
 * Adheres strictly to:
 * - Heading: "Have a Project in Mind?"
 * - Description: "Let's turn your next idea into a digital experience built around your business goals."
 * - Primary button: "Start a Project →"
 * - Secondary link: "Explore Our Services"
 * - Navy background (#11182B), white typography, and electric orange (#FF6B1A) highlights.
 */
export default function PortfolioBottomCta() {
  return (
    <div className="portfolio-bottom-cta">
      <div className="portfolio-cta-glow"></div>
      <div className="portfolio-cta-grid-pattern"></div>

      <div className="portfolio-cta-content">
        <span className="portfolio-cta-eyebrow">
          <span className="cta-dot"></span>
          COLLABORATE WITH FLEXUS
        </span>

        <h2 className="portfolio-cta-heading">
          Have a Project in <span>Mind?</span>
        </h2>

        <p className="portfolio-cta-description">
          Let's turn your next idea into a digital experience built around your business goals.
        </p>

        <div className="portfolio-cta-actions">
          <a
            href="#ticketForm"
            className="hero-btn hero-btn-primary portfolio-primary-btn"
          >
            <span>Start a Project</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>

          <a
            href="#services"
            className="portfolio-secondary-link"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
