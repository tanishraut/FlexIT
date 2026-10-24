import React from "react";
import { contactInfo } from "../../data/contactData";

export default function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-heading">
        <span className="section-label">CONTACT FLEXUS</span>

        <h2>
          Let's talk about
          <span> your business.</span>
        </h2>

        <p>
          Have a project in mind? Send us your requirements and we'll get back
          to you.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">✉</div>
          <span>Email</span>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">☎</div>
          <span>Phone</span>
          <a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">◉</div>
          <span>Location</span>
          <strong>{contactInfo.location}</strong>
        </div>
      </div>

      <a href="#home" className="back-top">
        ↑ Back to top
      </a>
    </section>
  );
}
