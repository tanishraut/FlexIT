import React from "react";

export default function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="about-visual">
        <div className="about-glow"></div>

        <div className="about-box">
          <span className="about-small">FLEXUS</span>
          <strong>DIGITAL</strong>
          <strong className="about-orange">GROWTH</strong>
          <div className="about-line"></div>
          <p>Technology + Strategy + Marketing</p>
        </div>

        <div className="about-floating about-float-1">WEB</div>
        <div className="about-floating about-float-2">SEO</div>
        <div className="about-floating about-float-3">GROWTH</div>
      </div>

      <div className="about-content">
        <span className="section-label">ABOUT FLEXUS</span>

        <h2>
          We don't just
          <span> build websites.</span>
        </h2>

        <p>
          We help businesses build a stronger digital presence and create
          systems that support long-term growth.
        </p>

        <p>
          From your website and ecommerce store to Google, social media, SEO and
          digital marketing, we bring the important pieces together.
        </p>

        <div className="about-points">
          <div>
            <span>✓</span>
            Business-focused technology
          </div>

          <div>
            <span>✓</span>
            Modern digital solutions
          </div>

          <div>
            <span>✓</span>
            Growth-oriented strategy
          </div>

          <div>
            <span>✓</span>
            Long-term support
          </div>
        </div>
      </div>
    </section>
  );
}
