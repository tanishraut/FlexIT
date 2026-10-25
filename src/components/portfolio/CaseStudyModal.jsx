import React, { useEffect, useRef, useState } from "react";
import ProjectMockup from "./ProjectMockup";

/**
 * Dedicated Case Study Detail View / Modal
 * Implements the 11-part structured architecture:
 * 1. Project overview
 * 2. Client and industry
 * 3. Business challenge
 * 4. Objectives
 * 5. Strategy and planning
 * 6. Work delivered
 * 7. Technology and tools used
 * 8. Project visuals, screenshots & comparative views
 * 9. Results (verified benchmark data)
 * 10. Related projects
 * 11. Call to action
 */
export default function CaseStudyModal({
  project,
  allProjects,
  onClose,
  onSelectProject
}) {
  const modalRef = useRef(null);
  const [activeVisualTab, setActiveVisualTab] = useState("desktop");

  // Lock body scroll and set up ESC key listener
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Scroll modal container to top when project changes
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const relatedProjects = (caseStudy?.relatedProjectIds || [])
    .map((id) => allProjects.find((p) => p.id === id))
    .filter(Boolean);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="case-study-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="case-study-container" ref={modalRef}>
        {/* Sticky Header with Navigation Controls */}
        <header className="case-study-header">
          <div className="header-left">
            <span className="case-study-pill">{project.category}</span>
            <span className="case-study-number">Project {project.number}</span>
            <span className="case-study-label">{project.label}</span>
          </div>

          <div className="header-controls">
            {allProjects.length > 1 && (
              <div className="nav-arrows">
                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={() => onSelectProject(prevProject)}
                  aria-label={`Previous project: ${prevProject?.title}`}
                  title={`Previous: ${prevProject?.title}`}
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={() => onSelectProject(nextProject)}
                  aria-label={`Next project: ${nextProject?.title}`}
                  title={`Next: ${nextProject?.title}`}
                >
                  Next →
                </button>
              </div>
            )}

            <button
              type="button"
              className="case-study-close-btn"
              onClick={onClose}
              aria-label="Close Case Study"
              title="Close (Esc)"
            >
              ✕
            </button>
          </div>
        </header>

        {/* Hero Section of Case Study */}
        <section className="cs-hero-section">
          <div className="cs-hero-meta">
            <span className="cs-hero-eyebrow">CASE STUDY BRIEF</span>
            <h1 id="case-study-title" className="cs-hero-title">
              {project.title}
            </h1>
            <p className="cs-hero-excerpt">{project.excerpt}</p>

            <div className="cs-tags-row">
              {project.services.map((service, index) => (
                <span key={index} className="cs-tag-badge">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Section 2: Client and Industry Meta Card */}
          <div className="cs-client-card">
            <div className="cs-client-card-header">
              <span className="card-badge-dot"></span>
              <strong>ENGAGEMENT SPECIFICATIONS</strong>
            </div>
            <div className="cs-client-grid">
              <div className="cs-client-item">
                <span className="item-label">Client</span>
                <span className="item-value">{caseStudy.clientIndustry.clientName}</span>
              </div>
              <div className="cs-client-item">
                <span className="item-label">Industry</span>
                <span className="item-value">{caseStudy.clientIndustry.industry}</span>
              </div>
              <div className="cs-client-item">
                <span className="item-label">Timeline</span>
                <span className="item-value">{caseStudy.clientIndustry.timeline}</span>
              </div>
              <div className="cs-client-item">
                <span className="item-label">Disclosure Status</span>
                <span className="item-value highlight">{caseStudy.clientIndustry.disclosureStatus}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Visuals & Interactive Showcase */}
        <section className="cs-section cs-visuals-section">
          <div className="cs-section-header">
            <span className="cs-section-num">08</span>
            <h2>Project Visuals & Interface Architecture</h2>
          </div>

          <div className="visuals-tab-bar">
            <button
              type="button"
              className={`visual-tab-btn ${activeVisualTab === "desktop" ? "active" : ""}`}
              onClick={() => setActiveVisualTab("desktop")}
            >
              <span>🖥️ Desktop Platform</span>
            </button>
            <button
              type="button"
              className={`visual-tab-btn ${activeVisualTab === "mobile" ? "active" : ""}`}
              onClick={() => setActiveVisualTab("mobile")}
            >
              <span>📱 Mobile Experience</span>
            </button>
            <button
              type="button"
              className={`visual-tab-btn ${activeVisualTab === "diagnostics" ? "active" : ""}`}
              onClick={() => setActiveVisualTab("diagnostics")}
            >
              <span>⚙️ Technical Diagnostics</span>
            </button>
          </div>

          <div className="visuals-display-area">
            {activeVisualTab === "desktop" && (
              <div className="display-desktop-wrapper">
                <ProjectMockup type={project.mockType} isDetailed={true} />
              </div>
            )}

            {activeVisualTab === "mobile" && (
              <div className="display-mobile-wrapper">
                <div className="mobile-device-frame">
                  <div className="device-notch">
                    <span className="notch-camera"></span>
                    <span className="notch-speaker"></span>
                  </div>
                  <div className="device-screen">
                    <div className="mobile-screen-header">
                      <span>9:41</span>
                      <span>5G • 100%</span>
                    </div>
                    <div className="mobile-brand-bar">
                      <strong>{project.title}</strong>
                      <span className="mobile-menu-icon">☰</span>
                    </div>
                    <div className="mobile-screen-body">
                      <span className="mobile-pill">{project.category}</span>
                      <h4>Engineered for High-Intent Conversion.</h4>
                      <p>{project.excerpt}</p>
                      <div className="mobile-cta-mock">Explore Solutions →</div>
                      {project.metricPreview && (
                        <div className="mobile-stat-row">
                          {project.metricPreview.slice(0, 2).map((m, idx) => (
                            <div key={idx} className="m-stat">
                              <strong>{m.value}</strong>
                              <span>{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeVisualTab === "diagnostics" && (
              <div className="display-diagnostics-wrapper">
                <div className="diag-grid">
                  <div className="diag-card">
                    <h4>Visual Highlights</h4>
                    <ul className="diag-list">
                      {caseStudy.visualHighlights.map((hl, i) => (
                        <li key={i}>
                          <span className="diag-bullet">✓</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="diag-card">
                    <h4>Campaign Verification Standards</h4>
                    <div className="diag-code-box">
                      <code>
                        {`// Data Integrity Standard: ${project.category}\n` +
                          `• Verification: Verifiable platform export reports\n` +
                          `• Accountability: Zero aggregated cross-campaign numbers\n` +
                          `• Compliance: 100% verified baseline reporting\n` +
                          `• Transparency: Documented data boundaries`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Main Content 2-Column Grid */}
        <div className="cs-content-layout">
          <div className="cs-main-column">
            {/* Section 1: Project Overview */}
            <section className="cs-section">
              <div className="cs-section-header">
                <span className="cs-section-num">01</span>
                <h2>Project Overview</h2>
              </div>
              <p className="cs-paragraph">{caseStudy.overview}</p>
            </section>

            {/* Section 3: Business Challenge */}
            <section className="cs-section">
              <div className="cs-section-header">
                <span className="cs-section-num">03</span>
                <h2>Business Challenge</h2>
              </div>
              <p className="cs-paragraph">{caseStudy.businessChallenge}</p>
            </section>

            {/* Section 4: Objectives */}
            <section className="cs-section">
              <div className="cs-section-header">
                <span className="cs-section-num">04</span>
                <h2>Strategic Objectives</h2>
              </div>
              <div className="cs-objectives-grid">
                {caseStudy.objectives.map((obj, i) => (
                  <div key={i} className="objective-item">
                    <span className="objective-number">0{i + 1}</span>
                    <p>{obj}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Strategy & Planning */}
            <section className="cs-section">
              <div className="cs-section-header">
                <span className="cs-section-num">05</span>
                <h2>Strategy & Execution Methodology</h2>
              </div>
              <div className="cs-timeline">
                {caseStudy.strategyPlanning.map((step, i) => (
                  <div key={i} className="timeline-node">
                    <div className="node-marker">
                      <span className="node-dot"></span>
                      {i < caseStudy.strategyPlanning.length - 1 && <span className="node-line"></span>}
                    </div>
                    <div className="node-content">
                      <h4 className="node-phase">{step.phase}</h4>
                      <p className="node-desc">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Work Delivered */}
            <section className="cs-section">
              <div className="cs-section-header">
                <span className="cs-section-num">06</span>
                <h2>Deliverables & Artifacts</h2>
              </div>
              <div className="cs-deliverables-grid">
                {caseStudy.workDelivered.map((del, i) => (
                  <div key={i} className="deliverable-card">
                    <h4 className="deliverable-cat">{del.category}</h4>
                    <ul className="deliverable-list">
                      {del.items.map((item, j) => (
                        <li key={j}>
                          <span className="del-check">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Verified Results */}
            <section className="cs-section cs-results-section">
              <div className="cs-section-header">
                <span className="cs-section-num">09</span>
                <h2>Measured Results & Benchmark Outcomes</h2>
              </div>
              <div className="verified-notice">
                <span className="notice-icon">🛡️</span>
                <span>{caseStudy.results.verifiedNotice}</span>
              </div>
              <div className="results-metrics-grid">
                {caseStudy.results.metrics.map((metric, i) => (
                  <div key={i} className="metric-box">
                    <span className="metric-box-val">{metric.value}</span>
                    <strong className="metric-box-label">{metric.label}</strong>
                    <span className="metric-box-detail">{metric.detail}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Tech Stack & Meta */}
          <aside className="cs-sidebar-column">
            {/* Section 7: Technology & Tools Used */}
            <div className="sidebar-widget">
              <div className="widget-header">
                <span className="widget-num">07</span>
                <h3>Technology & Tools</h3>
              </div>
              <div className="tech-stack-list">
                {caseStudy.technologies.map((tech, i) => (
                  <div key={i} className="tech-stack-item">
                    <div className="tech-item-left">
                      <strong>{tech.name}</strong>
                      <span>{tech.role}</span>
                    </div>
                    <span className="tech-badge">{tech.badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="sidebar-widget summary-widget">
              <h3>Project Snapshot</h3>
              <ul className="snapshot-list">
                <li>
                  <span>Classification:</span>
                  <strong>{project.label}</strong>
                </li>
                <li>
                  <span>Discipline:</span>
                  <strong>{project.category}</strong>
                </li>
                <li>
                  <span>Architecture:</span>
                  <strong>Modern High-Speed Stack</strong>
                </li>
                <li>
                  <span>Status:</span>
                  <strong className="status-live">Verified Baseline</strong>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Section 10: Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="cs-section cs-related-section">
            <div className="cs-section-header">
              <span className="cs-section-num">10</span>
              <h2>Related Case Studies</h2>
            </div>
            <div className="related-projects-grid">
              {relatedProjects.map((rel) => (
                <div
                  key={rel.id}
                  className="related-project-card"
                  onClick={() => onSelectProject(rel)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelectProject(rel);
                    }
                  }}
                  aria-label={`View related case study: ${rel.title}`}
                >
                  <div className="related-card-meta">
                    <span className="rel-cat">{rel.category}</span>
                    <span className="rel-num">{rel.number}</span>
                  </div>
                  <h4>{rel.title}</h4>
                  <p>{rel.excerpt}</p>
                  <span className="rel-link">
                    <span>Explore Case Study</span>
                    <span>→</span>
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 11: Call to Action */}
        <section className="cs-section cs-cta-section">
          <div className="cs-cta-box">
            <span className="section-label">START YOUR ENGAGEMENT</span>
            <h2>{caseStudy.cta.heading}</h2>
            <p>{caseStudy.cta.text}</p>
            <div className="cs-cta-actions">
              <a
                href={caseStudy.cta.buttonLink}
                className="hero-btn hero-btn-primary"
                onClick={onClose}
              >
                <span>{caseStudy.cta.buttonText}</span>
              </a>
              <button
                type="button"
                className="hero-btn hero-btn-secondary"
                onClick={onClose}
              >
                Back to All Work
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
