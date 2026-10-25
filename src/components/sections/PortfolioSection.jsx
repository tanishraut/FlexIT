import React, { useState, useEffect } from "react";
import { portfolioCategories, portfolioProjects } from "../../data/portfolioData";
import ProjectCard from "../portfolio/ProjectCard";
import CaseStudyModal from "../portfolio/CaseStudyModal";
import PortfolioBottomCta from "../portfolio/PortfolioBottomCta";

/**
 * "OUR WORK" Portfolio Section for FLEXUS Technology Consultancy.
 * Implements category filtering, editorial bento/masonry grid,
 * featured case study spotlight, deep-dive modal views, and conversion CTA.
 */
export default function PortfolioSection({ onOpenDedicatedCaseStudy }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check URL hash on initial load or popstate to support deep-linking to case studies
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#case-study-")) {
        const projectId = hash.replace("#case-study-", "");
        const matched = portfolioProjects.find((p) => p.id === projectId);
        if (matched) {
          if (matched.route && onOpenDedicatedCaseStudy) {
            onOpenDedicatedCaseStudy(matched.route);
          } else {
            setSelectedProject(matched);
          }
        } else {
          window.history.replaceState(null, "", "#work");
        }
      }
    };

    handleHashCheck();
    window.addEventListener("popstate", handleHashCheck);
    return () => window.removeEventListener("popstate", handleHashCheck);
  }, [onOpenDedicatedCaseStudy]);

  const handleSelectProject = (project) => {
    if (project.route && onOpenDedicatedCaseStudy) {
      onOpenDedicatedCaseStudy(project.route);
      return;
    }
    setSelectedProject(project);
    window.history.pushState(null, "", `#case-study-${project.id}`);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith("#case-study-")) {
      window.history.pushState(null, "", "#work");
    }
  };

  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return;
    setIsAnimating(true);
    setActiveCategory(categoryId);
    setTimeout(() => {
      setIsAnimating(false);
    }, 250);
  };

  // Filter projects according to chosen category
  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  // Determine featured project:
  // Always spotlight the featured project (or first project) so it renders prominently without empty grid gaps
  const featuredItem =
    filteredProjects.find((p) => p.isFeatured) || filteredProjects[0] || null;

  const standardItems = filteredProjects.filter(
    (p) => p.id !== featuredItem?.id
  );

  // Calculate project count for each category
  const getCategoryCount = (catId) => {
    if (catId === "all") return portfolioProjects.length;
    return portfolioProjects.filter((p) => p.category === catId).length;
  };

  return (
    <section className="portfolio-section section" id="work" aria-label="Our Work Portfolio">
      <div className="portfolio-container">
        {/* Section Heading & Eyebrow */}
        <div className="section-heading portfolio-heading">
          <span className="section-label portfolio-eyebrow">OUR WORK</span>

          <h2 className="portfolio-title">
            Ideas Into <span>Impact.</span>
          </h2>

          <p className="portfolio-description">
            Explore how we combine strategy, creativity, and technology to build
            digital experiences that help businesses grow.
          </p>
        </div>

        {/* Project Category Filter Tabs */}
        <nav
          className="portfolio-filters"
          role="tablist"
          aria-label="Project Category Filters"
        >
          <div className="filters-track">
            {portfolioCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="portfolio-grid-content"
                  className={`filter-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  <span className="tab-label">{cat.label}</span>
                  <span className="tab-count" aria-hidden="true">
                    {count}
                  </span>
                  {isActive && <span className="active-indicator" />}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Portfolio Grid Layout */}
        <div
          id="portfolio-grid-content"
          className={`portfolio-grid-wrapper ${isAnimating ? "grid-animating" : "grid-visible"}`}
        >
          {/* Featured Spotlight Card */}
          {featuredItem && (
            <div className="portfolio-spotlight-area">
              <ProjectCard
                project={featuredItem}
                onSelect={handleSelectProject}
                isFeatured={true}
              />
            </div>
          )}

          {/* Editorial Grid for Remaining Projects */}
          {standardItems.length > 0 && (
            <div className="portfolio-editorial-grid">
              {standardItems.map((project, index) => {
                const isWide =
                  activeCategory === "all" ? index === 2 || index === 5 : false;

                return (
                  <div
                    key={project.id}
                    className={`grid-cell ${isWide ? "grid-cell-wide" : ""}`}
                  >
                    <ProjectCard
                      project={project}
                      onSelect={handleSelectProject}
                      isFeatured={false}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="portfolio-empty-state">
              <p>No projects found in this category.</p>
              <button
                type="button"
                className="hero-btn hero-btn-secondary"
                onClick={() => handleCategoryChange("all")}
              >
                View All Projects
              </button>
            </div>
          )}
        </div>

        {/* Section 6: Strong Bottom Conversion Section */}
        <PortfolioBottomCta />
      </div>

      {/* Accessible Project Detail / Case Study View */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          allProjects={portfolioProjects}
          onClose={handleCloseModal}
          onSelectProject={handleSelectProject}
        />
      )}
    </section>
  );
}
