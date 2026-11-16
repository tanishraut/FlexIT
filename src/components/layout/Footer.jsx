import React from "react";
import logoTextWhite from "../../assets/images/logo-text-white.png";
import { contactInfo } from "../../data/contactData";

export default function Footer({ onOpenPrivacyPolicy }) {
  const currentYear = new Date().getFullYear();

  const handlePrivacyClick = (event) => {
    if (onOpenPrivacyPolicy) {
      event.preventDefault();
      onOpenPrivacyPolicy();
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="logo footer-logo" aria-label="FLEXUS Home">
            <img
              src={logoTextWhite}
              alt="FLEXUS Technology Consultancy"
              className="footer-logo-img"
            />
          </a>

          <p>
            Technology, digital solutions and growth strategies for modern
            businesses.
          </p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#pricing">Packages</a>
          <a href="#support">Support</a>
          <a href="#contact">Contact</a>
          <a
            href="/privacy-policy"
            onClick={handlePrivacyClick}
          >
            Privacy Policy
          </a>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <a href="#services">Web Development</a>
          <a href="#services">Ecommerce</a>
          <a href="#services">SEO</a>
          <a href="#services">Digital Marketing</a>
        </div>

        <div className="footer-links">
          <h4>Connect</h4>
          {contactInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={social.url.startsWith("http") ? "noreferrer" : undefined}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span id="copyright">
          © {currentYear} FLEXUS. All Rights Reserved.
        </span>

        <div className="footer-bottom-links">
          <a
            href="/privacy-policy"
            className="footer-bottom-link"
            onClick={handlePrivacyClick}
          >
            Privacy Policy
          </a>
        </div>

        <span>Technology Consultancy</span>
      </div>
    </footer>
  );
}
