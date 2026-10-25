import React from "react";

/**
 * Visual mockup component for portfolio case studies.
 * Renders the verified KonkanTrip Beach Resort campaign preview.
 */
export default function ProjectMockup({ type, isDetailed = false }) {
  switch (type) {
    case "resort-marketing":
      return (
        <div className={`mockup-window mockup-resort ${isDetailed ? "mockup-detailed" : ""}`}>
          <div className="mockup-chrome">
            <div className="chrome-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="chrome-address-bar">
              <span className="chrome-lock">📸</span>
              <span className="chrome-url">instagram.com/konkantrip_dapoli</span>
            </div>
            <div className="chrome-actions">
              <span className="chrome-action-dot"></span>
              <span className="chrome-action-dot"></span>
            </div>
          </div>

          <div className="mockup-screen screen-resort">
            <div className="resort-preview-media">
              <img
                src="/images/konkantrip_resort_cover.jpg"
                alt="KonkanTrip Beach Resort Dapoli campaign visual"
                className="resort-card-img"
              />
              <div className="resort-media-overlay">
                <div className="resort-ad-tag">
                  <span className="ad-pill">SPONSORED CAMPAIGN</span>
                  <span className="account-name">@konkantrip_dapoli</span>
                </div>
                <div className="resort-cta-badge">Book Coastal Stay →</div>
              </div>
            </div>

            <div className="resort-preview-metrics">
              <div className="resort-metric-item primary">
                <strong>1,478</strong>
                <span>Website Visits</span>
              </div>
              <div className="resort-metric-item accent">
                <strong>32</strong>
                <span>Direct Inquiries</span>
              </div>
              <div className="resort-metric-item neutral">
                <strong>35k+</strong>
                <span>Campaign Views</span>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
