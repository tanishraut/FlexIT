import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import PricingSection from "./components/sections/PricingSection";
import AboutSection from "./components/sections/AboutSection";
import ProcessSection from "./components/sections/ProcessSection";
import SupportSection from "./components/sections/SupportSection";
import CtaSection from "./components/sections/CtaSection";
import ContactSection from "./components/sections/ContactSection";
import KonkanTripCaseStudyPage from "./components/case-study/KonkanTripCaseStudyPage";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (
        path === "/our-work/konkantrip-instagram-marketing" ||
        path.endsWith("/our-work/konkantrip-instagram-marketing") ||
        hash === "#our-work/konkantrip-instagram-marketing" ||
        hash === "#/our-work/konkantrip-instagram-marketing"
      ) {
        return "/our-work/konkantrip-instagram-marketing";
      }
    }
    return "/";
  });

  const handleOpenDedicatedCaseStudy = (route) => {
    window.history.pushState(null, "", route);
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateBack = (targetHash = "#work") => {
    window.history.pushState(null, "", "/" + targetHash);
    setCurrentRoute("/");
    setTimeout(() => {
      if (targetHash) {
        const target = document.getElementById(targetHash.replace("#", ""));
        if (target) {
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
        }
      }
    }, 60);
  };

  // Popstate history listener for back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (
        path === "/our-work/konkantrip-instagram-marketing" ||
        path.endsWith("/our-work/konkantrip-instagram-marketing") ||
        hash === "#our-work/konkantrip-instagram-marketing" ||
        hash === "#/our-work/konkantrip-instagram-marketing"
      ) {
        setCurrentRoute("/our-work/konkantrip-instagram-marketing");
      } else {
        setCurrentRoute("/");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Smooth scroll handler for anchor links
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      // Intercept direct case study links
      const caseStudyLink = event.target.closest(
        'a[href="/our-work/konkantrip-instagram-marketing"]',
      );
      if (caseStudyLink) {
        event.preventDefault();
        handleOpenDedicatedCaseStudy(
          "/our-work/konkantrip-instagram-marketing",
        );
        return;
      }

      // If user is on dedicated case study page, route header navigation back to home anchor
      if (currentRoute !== "/") {
        const homeLogoLink = event.target.closest('a[href="#home"], a.logo');
        if (homeLogoLink) {
          event.preventDefault();
          handleNavigateBack("#home");
          return;
        }

        const navAnchor = event.target.closest('a[href^="#"]');
        if (navAnchor) {
          event.preventDefault();
          const targetId = navAnchor.getAttribute("href");
          handleNavigateBack(targetId);
          return;
        }
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
  }, [menuOpen, currentRoute]);

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
        ".about-visual, .support-form, .support-content, .cta, .hero-content, .hero-visual, " +
        ".portfolio-featured-card, .portfolio-grid-card, .portfolio-bottom-cta",
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
  }, [currentRoute]);

  if (currentRoute === "/our-work/konkantrip-instagram-marketing") {
    return (
      <>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <KonkanTripCaseStudyPage onNavigateBack={handleNavigateBack} />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection
          onOpenDedicatedCaseStudy={handleOpenDedicatedCaseStudy}
        />
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
