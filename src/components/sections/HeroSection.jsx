import React from "react";
import logoIcon from "../../assets/images/logo-icon.png";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-orange"></div>
      <div className="hero-glow hero-glow-pink"></div>
      <div className="hero-glow hero-glow-yellow"></div>

      <span className="hero-dot dot-1"></span>
      <span className="hero-dot dot-2"></span>
      <span className="hero-dot dot-3"></span>
      <span className="hero-dot dot-4"></span>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            TECHNOLOGY • GROWTH • DIGITAL
          </div>

          <h1>
            Build your
            <span className="orange-text"> digital.</span>
            <br />
            Grow your
            <span className="gradient-text"> business.</span>
          </h1>

          <p className="hero-description">
            We build powerful digital solutions that help businesses establish
            their online presence, attract customers and grow.
          </p>

          <div className="hero-tags">
            <span className="hero-tag tag-web">
              <b>&lt;/&gt;</b>
              Web Development
            </span>

            <span className="hero-tag tag-ecommerce">
              <b>₹</b>
              Ecommerce Growth
            </span>

            <span className="hero-tag tag-google">
              <b>G</b>
              Google Business
            </span>

            <span className="hero-tag tag-seo">
              <b>↗</b>
              SEO Optimization
            </span>

            <span className="hero-tag tag-marketing">
              <b>✦</b>
              Digital Marketing
            </span>
          </div>

          <div className="hero-buttons">
            <a href="#ticketForm" className="hero-btn hero-btn-primary">
              Start a Project
              <span>→</span>
            </a>

            <a href="#services" className="hero-btn hero-btn-secondary">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>01</strong>
              <span>Strategy</span>
            </div>

            <div className="hero-stat">
              <strong>02</strong>
              <span>Technology</span>
            </div>

            <div className="hero-stat">
              <strong>03</strong>
              <span>Growth</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle circle-one"></div>
          <div className="visual-circle circle-two"></div>
          <div className="visual-circle circle-three"></div>

          <div className="visual-label">
            <span></span>
            FLEXUS DIGITAL SYSTEM
          </div>

          <div className="hero-center-card">
            <div className="center-logo-wrap">
              <img
                src={logoIcon}
                alt="FLEXUS"
                className="center-logo-img"
              />
            </div>

            <div className="center-line"></div>

            <span className="center-title">DIGITAL GROWTH</span>

            <span className="center-subtitle">
              TECHNOLOGY • STRATEGY • MARKETING
            </span>

            <div className="growth-indicator">
              <span className="growth-dot"></span>
              BUILD • SCALE • GROW
            </div>
          </div>

          <div className="floating-card floating-card-one">
            <div className="floating-icon orange">&lt;/&gt;</div>
            <div>
              <strong>Web Development</strong>
              <small>Websites & Web Apps</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <div className="floating-icon pink">₹</div>
            <div>
              <strong>Ecommerce Growth</strong>
              <small>Stores & Sales</small>
            </div>
          </div>

          <div className="floating-card floating-card-three">
            <div className="floating-icon yellow">G</div>
            <div>
              <strong>Google Business</strong>
              <small>Local Visibility</small>
            </div>
          </div>

          <div className="floating-card floating-card-four">
            <div className="floating-icon gradient">↑</div>
            <div>
              <strong>SEO Optimization</strong>
              <small>Search Visibility</small>
            </div>
          </div>

          <div className="visual-bottom">
            <strong>360°</strong>
            <span>Digital Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
