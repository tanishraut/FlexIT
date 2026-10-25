import React from "react";
import ProjectMockup from "./ProjectMockup";

/**
 * Individual Project Card component supporting both Featured and Editorial layout variants.
 * Incorporates subtle hover zoom, service tags, client disclosure badges,
 * and seamless case study exploration triggers.
 */
export default function ProjectCard({ project, onSelect, isFeatured = false }) {
  const handleClick = (e) => {
    e.preventDefault();
    onSelect(project);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(project);
    }
  };

  if (isFeatured) {
    return (
      <article
        className="portfolio-card portfolio-featured-card"
        id={`project-${project.id}`}
        aria-label={`Featured Case Study: ${project.title}`}
      >
        <div className="featured-card-inner">
          <div className="featured-card-visual" onClick={handleClick}>
            <div className="visual-zoom-wrapper">
              <ProjectMockup type={project.mockType} />
            </div>
            <div className="visual-overlay-badge">
              <span className="badge-featured-star">★</span>
              <span>{project.featuredTag || "Featured Project"}</span>
            </div>
          </div>

          <div className="featured-card-content">
            <div className="card-top-meta">
              <span className="project-number-badge">{project.number}</span>
              <span className="project-category-tag">{project.category}</span>
              <span className="project-label-pill">{project.label}</span>
            </div>

            <h3 className="featured-card-title">
              <a
                href={project.route || `#case-study-${project.id}`}
                onClick={handleClick}
                className="card-title-link"
              >
                {project.title}
              </a>
            </h3>

            {project.headline && (
              <h4 className="featured-card-headline">{project.headline}</h4>
            )}

            <div className="card-client-industry">
              <span className="meta-icon">🏢</span>
              <span className="meta-client">{project.client}</span>
              <span className="meta-bullet">•</span>
              <span className="meta-industry">{project.industry}</span>
            </div>

            <p className="featured-card-description">{project.excerpt}</p>

            {project.metricPreview && (
              <div className="featured-metrics-preview-row" aria-label="Key campaign results">
                {project.metricPreview.map((m, idx) => (
                  <div key={idx} className="preview-chip">
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="card-services-list" aria-label="Services delivered">
              {project.services.map((service, index) => (
                <span key={index} className="service-pill">
                  {service}
                </span>
              ))}
            </div>

            <div className="featured-card-actions">
              <button
                type="button"
                className="hero-btn hero-btn-primary explore-project-btn"
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                aria-label={`View Case Study: ${project.title}`}
              >
                <span>View Case Study</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </button>

              <span className="case-study-quick-stat">
                <span className="stat-pulse"></span>
                <span>Verified Source Reports</span>
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="portfolio-card portfolio-grid-card"
      id={`project-${project.id}`}
      aria-label={`Case Study: ${project.title}`}
    >
      <div
        className="card-visual-container"
        onClick={handleClick}
        tabIndex={0}
        role="button"
        onKeyDown={handleKeyDown}
        aria-label={`View ${project.title} visual preview and case study`}
      >
        <div className="visual-zoom-wrapper">
          <ProjectMockup type={project.mockType} />
        </div>

        <div className="card-hover-overlay" aria-hidden="true">
          <span className="hover-explore-btn">
            <span>View Full Case Study</span>
            <span className="hover-arrow">→</span>
          </span>
        </div>

        <div className="card-floating-badge">
          <span className="project-number-badge">{project.number}</span>
          <span className="project-label-pill">{project.label}</span>
        </div>
      </div>

      <div className="card-body">
        <div className="card-category-row">
          <span className="project-category-tag">{project.category}</span>
          <span className="card-industry-text">{project.industry}</span>
        </div>

        <h3 className="card-title">
          <a
            href={`#case-study-${project.id}`}
            onClick={handleClick}
            className="card-title-link"
          >
            {project.title}
          </a>
        </h3>

        <div className="card-client-row">
          <span className="client-label">Client:</span>
          <span className="client-name">{project.client}</span>
        </div>

        <p className="card-description">{project.excerpt}</p>

        <div className="card-services-list" aria-label="Services delivered">
          {project.services.slice(0, 3).map((service, index) => (
            <span key={index} className="service-pill">
              {service}
            </span>
          ))}
          {project.services.length > 3 && (
            <span className="service-pill service-pill-more">
              +{project.services.length - 3} more
            </span>
          )}
        </div>

        <div className="card-footer">
          <button
            type="button"
            className="view-case-study-link"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            aria-label={`View Case Study for ${project.title}`}
          >
            <span>View Case Study</span>
            <span className="link-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
