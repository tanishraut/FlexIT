import React from "react";
import logoIcon from "../../assets/images/logo-icon.png";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" aria-label="FLEXUS Home">
          <img
            src={logoIcon}
            alt="FLEXUS"
            className="logo-img"
          />
        </a>

        <nav
          className={`nav-links${menuOpen ? " active nav-open" : ""}`}
          id="navLinks"
        >
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#pricing">Packages</a>
          <a href="#about">About</a>
          <a href="#support">Support</a>
          <a href="#contact">Contact</a>
          <a href="#ticketForm" className="mobile-cta-btn">
            Start a Project
          </a>
        </nav>

        <a href="#ticketForm" className="nav-cta">
          Start a Project
        </a>

        <button
          id="menuBtn"
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className={`menu-btn${menuOpen ? " active" : ""}`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
