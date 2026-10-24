import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import PricingSection from "./components/sections/PricingSection";
import AboutSection from "./components/sections/AboutSection";
import ProcessSection from "./components/sections/ProcessSection";
import SupportSection from "./components/sections/SupportSection";
import CtaSection from "./components/sections/CtaSection";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler for anchor links
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest('a[href^="#"]');
      if (link) {
        const targetId = link.getAttribute("href");
        const target =
          targetId && targetId !== "#"
            ? document.getElementById(targetId.slice(1))
            : null;

        if (target) {
          event.preventDefault();
          const navbarHeight =
            document.querySelector(".navbar")?.offsetHeight ?? 0;
          const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            16;

          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: "smooth",
          });

          if (targetId === "#ticketForm" || targetId === "#support") {
            const nameInput = document.getElementById("customerName");
            if (nameInput) {
              setTimeout(() => {
                nameInput.focus({ preventScroll: true });
              }, 450);
            }
          }
        }

        if (link.closest("#navLinks")) {
          setMenuOpen(false);
        }
      }

      if (
        menuOpen &&
        !event.target.closest("#navLinks") &&
        !event.target.closest("#menuBtn")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [menuOpen]);

  // Window listeners & Reveal animations
  useEffect(() => {
    const closeMenuOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    const updateNavbar = () => {
      document
        .querySelector(".navbar")
        ?.classList.toggle("navbar-scrolled", window.scrollY > 50);
    };

    document.addEventListener("keydown", closeMenuOnEscape);
    window.addEventListener("resize", closeMenuOnResize);
    window.addEventListener("scroll", updateNavbar);
    updateNavbar();

    const revealElements = document.querySelectorAll(
      ".service-card, .pricing-card, .process-item, .contact-card, .about-content, " +
        ".about-visual, .support-form, .support-content, .cta, .hero-content, .hero-visual",
    );
    let revealObserver;

    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );

      revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
      });
    }

    return () => {
      document.removeEventListener("keydown", closeMenuOnEscape);
      window.removeEventListener("resize", closeMenuOnResize);
      window.removeEventListener("scroll", updateNavbar);
      revealObserver?.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <ProcessSection />
        <SupportSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
