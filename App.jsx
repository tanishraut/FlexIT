import React, { useEffect, useState } from "react";
import "./style.css";

const pricingPlans = [
  {
    name: "Starter Growth",
    price: "15,000",
    reach: "5,000+",
    commission: "10%",
    features: [
      "4 promotional reels per month",
      "Boosting of all 4 reels",
      "Advertising campaign setup and management",
      "Festival and occasion posts",
      "Advertising budget and agency fee included",
      "Target audience reach: 5,000+ unique accounts per month",
    ],
  },
  {
    name: "Business Growth",
    price: "25,000",
    reach: "10,000+",
    commission: "8%",
    features: [
      "8 promotional reels per month",
      "Boosting of all 8 reels",
      "Up to 2 active advertising campaigns",
      "Festival posts and promotional creatives",
      "WhatsApp enquiry funnel setup",
      "Audience targeting and retargeting",
      "Monthly campaign performance report",
      "Advertising budget and agency fee included within an agreed allocation",
      "Target audience reach: 10,000+ unique accounts per month",
    ],
  },
  {
    name: "Premium Booking Engine",
    price: "40,000",
    reach: "15,000+",
    commission: "5%",
    features: [
      "12 promotional reels per month",
      "Boosting of all 12 reels",
      "Up to 3 active advertising campaigns",
      "Festival creatives and seasonal campaigns",
      "WhatsApp enquiry funnel and follow-up workflow",
      "Email marketing campaigns for eligible contacts",
      "Booking conversion tracking and monthly performance analysis",
      "Priority campaign optimization",
      "Advertising budget and agency fee included within an agreed allocation",
      "Target audience reach: 15,000+ unique accounts per month",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formMessageIsError, setFormMessageIsError] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest('a[href^="#"]');
      if (link) {
        const targetId = link.getAttribute("href");
        const target = targetId && targetId !== "#"
          ? document.getElementById(targetId.slice(1))
          : null;

        if (target) {
          event.preventDefault();
          const navbarHeight = document.querySelector(".navbar")?.offsetHeight ?? 0;
          const targetPosition = target.getBoundingClientRect().top
            + window.scrollY
            - navbarHeight;

          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }

        if (link.closest("#navLinks")) {
          setMenuOpen(false);
        }
      }

      if (
        menuOpen
        && !event.target.closest("#navLinks")
        && !event.target.closest("#menuBtn")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [menuOpen]);

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
      document.querySelector(".navbar")?.classList.toggle(
        "navbar-scrolled",
        window.scrollY > 50,
      );
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

  const handleSupportSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const customerName = String(formData.get("name") ?? "").trim();
    const customerEmail = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();

    if (!customerName || !customerEmail || !company || !subject || !description) {
      setFormMessageIsError(true);
      setFormMessage("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      setFormMessageIsError(true);
      setFormMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setFormMessage("");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormMessageIsError(false);
        setFormMessage(
          "Support request sent successfully! We will contact you soon.",
        );
        form.reset();
        return;
      }

      const data = await response.json().catch(() => ({}));
      const errors = data.errors?.map((error) => error.message).filter(Boolean);
      setFormMessageIsError(true);
      setFormMessage(
        errors?.length
          ? errors.join(", ")
          : "Unable to send your request. Please try again.",
      );
    } catch (error) {
      console.error("Formspree Error:", error);
      setFormMessageIsError(true);
      setFormMessage(
        "Unable to send your request. Please check your internet connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>




<header className="navbar">

    <div className="nav-container">

        <a href="#home" className="logo">
            <span className="logo-wordmark">flex-us</span>
        </a>


        <nav className={`nav-links${menuOpen ? " active nav-open" : ""}`} id="navLinks">

            <a href="#home">Home</a>

            <a href="#services">Services</a>

            <a href="#pricing">Packages</a>

            <a href="#about">About</a>

            <a href="#support">Support</a>

            <a href="#contact">Contact</a>

            <a href="#contact" className="mobile-cta-btn">Start a Project</a>

        </nav>


        <a href="#contact" className="nav-cta">
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
                <span className="orange-text">
                    digital.
                </span>

                <br />

                Grow your
                <span className="gradient-text">
                    business.
                </span>

            </h1>


            <p className="hero-description">

                We build powerful digital solutions that help
                businesses establish their online presence,
                attract customers and grow.

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

                <a
                    href="#contact"
                    className="hero-btn hero-btn-primary"
                >

                    Start a Project

                    <span>→</span>

                </a>


                <a
                    href="#services"
                    className="hero-btn hero-btn-secondary"
                >

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

                FLEX-US DIGITAL SYSTEM

            </div>


            <div className="hero-center-card">

                <div className="center-logo-wrap">
                    <span className="center-brand-wordmark">flex-us</span>
                </div>


                <div className="center-line"></div>


                <span className="center-title">
                    DIGITAL GROWTH
                </span>


                <span className="center-subtitle">
                    TECHNOLOGY • STRATEGY • MARKETING
                </span>


                <div className="growth-indicator">

                    <span className="growth-dot"></span>

                    BUILD • SCALE • GROW

                </div>

            </div>


            <div className="floating-card floating-card-one">

                <div className="floating-icon orange">
                    &lt;/&gt;
                </div>

                <div>

                    <strong>
                        Web Development
                    </strong>

                    <small>
                        Websites & Web Apps
                    </small>

                </div>

            </div>


            <div className="floating-card floating-card-two">

                <div className="floating-icon pink">
                    ₹
                </div>

                <div>

                    <strong>
                        Ecommerce Growth
                    </strong>

                    <small>
                        Stores & Sales
                    </small>

                </div>

            </div>


            <div className="floating-card floating-card-three">

                <div className="floating-icon yellow">
                    G
                </div>

                <div>

                    <strong>
                        Google Business
                    </strong>

                    <small>
                        Local Visibility
                    </small>

                </div>

            </div>


            <div className="floating-card floating-card-four">

                <div className="floating-icon gradient">
                    ↑
                </div>

                <div>

                    <strong>
                        SEO Optimization
                    </strong>

                    <small>
                        Search Visibility
                    </small>

                </div>

            </div>


            <div className="visual-bottom">

                <strong>
                    360°
                </strong>

                <span>
                    Digital Solutions
                </span>

            </div>

        </div>

    </div>

</section>





<section className="services section" id="services">

    <div className="section-heading">

        <span className="section-label">
            WHAT WE DO
        </span>


        <h2>

            Everything your business
            <span>needs to grow.</span>

        </h2>


        <p>

            From building your digital foundation to bringing
            customers through the door, flex-us provides
            technology and growth solutions under one roof.

        </p>

    </div>


    <div className="services-grid">


        <article className="service-card">

            <div className="service-card-icon orange">
                &lt;/&gt;
            </div>

            <span className="service-number">
                01
            </span>

            <h3>
                Web Development
            </h3>

            <p>
                Modern, responsive and high-performance
                websites and web applications built for your business.
            </p>

            <a href="#contact">
                Learn More →
            </a>

        </article>


        <article className="service-card">

            <div className="service-card-icon pink">
                ₹
            </div>

            <span className="service-number">
                02
            </span>

            <h3>
                Ecommerce Solutions
            </h3>

            <p>
                Build and optimize ecommerce stores that
                turn visitors into customers and increase sales.
            </p>

            <a href="#contact">
                Learn More →
            </a>

        </article>


        <article className="service-card">

            <div className="service-card-icon yellow">
                G
            </div>

            <span className="service-number">
                03
            </span>

            <h3>
                Google Business Management
            </h3>

            <p>
                Improve your Google Business Profile,
                local visibility, reviews and customer discovery.
            </p>

            <a href="#contact">
                Learn More →
            </a>

        </article>


        <article className="service-card">

            <div className="service-card-icon gradient">
                ↑
            </div>

            <span className="service-number">
                04
            </span>

            <h3>
                SEO Optimization
            </h3>

            <p>
                Improve your search visibility and help
                potential customers find your business online.
            </p>

            <a href="#contact">
                Learn More →
            </a>

        </article>


        <article className="service-card">

            <div className="service-card-icon pink">
                ◎
            </div>

            <span className="service-number">
                05
            </span>

            <h3>
                Social Media Management
            </h3>

            <p>
                Build a consistent social presence through
                content, strategy and audience engagement.
            </p>

            <a href="#contact">
                Learn More →
            </a>

        </article>


        <article className="service-card">

            <div className="service-card-icon orange">
                ✦
            </div>

            <span className="service-number">
                06
            </span>

            <h3>
                Branding
            </h3>

            <p>
                Create a recognizable brand identity that
                communicates your business clearly and professionally.
            </p>

            <a href="#contact">
                Learn More →
            </a>

        </article>


        <article className="service-card">

            <div className="service-card-icon yellow">
                ↗
            </div>

            <span className="service-number">
                07
            </span>

            <h3>
                Digital Marketing
            </h3>

            <p>
                Reach the right audience through strategic
                digital campaigns designed for business growth.
            </p>

            <a href="#contact">
                Learn More →
            </a>

        </article>


        <article className="service-card">

            <div className="service-card-icon gradient">
                ⚙
            </div>

            <span className="service-number">
                08
            </span>

            <h3>
                IT Solutions
            </h3>

            <p>
                Technology consulting and digital solutions
                designed around your business requirements.
            </p>

            <a href="#contact">
                Learn More →
            </a>

        </article>


    </div>

</section>




<section className="pricing section" id="pricing">

    <div className="section-heading">

        <span className="section-label">AGENCY PACKAGES</span>

        <h2>
            Marketing built for
            <span> measurable growth.</span>
        </h2>

        <p>
            Choose a monthly plan designed to grow your audience,
            generate enquiries and turn campaigns into bookings.
        </p>

    </div>

    <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
            <article
                className={`pricing-card${index === 1 ? " pricing-card-featured" : ""}`}
                key={plan.name}
            >
                <span className="pricing-plan-label">PLAN {index + 1}</span>
                <h3>{plan.name}</h3>
                <p className="pricing-price">
                    <strong>₹{plan.price}</strong>
                    <span>/month</span>
                </p>
                <p className="pricing-reach">
                    {plan.reach} audience reach target
                </p>
                <ul>
                    {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
                <p className="pricing-commission">
                    {plan.commission} commission on attributable bookings
                </p>
                <a className="pricing-button" href="#contact">
                    Choose this plan <span>→</span>
                </a>
            </article>
        ))}
    </div>

</section>



<section className="about section" id="about">

    <div className="about-visual">

        <div className="about-glow"></div>


        <div className="about-box">

            <span className="about-small">
                FLEX-US
            </span>

            <strong>
                DIGITAL
            </strong>

            <strong className="about-orange">
                GROWTH
            </strong>

            <div className="about-line"></div>

            <p>
                Technology + Strategy + Marketing
            </p>

        </div>


        <div className="about-floating about-float-1">
            WEB
        </div>

        <div className="about-floating about-float-2">
            SEO
        </div>

        <div className="about-floating about-float-3">
            GROWTH
        </div>

    </div>


    <div className="about-content">

        <span className="section-label">
            ABOUT FLEX-US
        </span>


        <h2>

            We don't just
            <span>build websites.</span>

        </h2>


        <p>

            We help businesses build a stronger digital
            presence and create systems that support long-term growth.

        </p>


        <p>

            From your website and ecommerce store to Google,
            social media, SEO and digital marketing, we bring
            the important pieces together.

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





<section className="process section">

    <div className="section-heading">

        <span className="section-label">
            OUR PROCESS
        </span>

        <h2>

            From idea to
            <span>growth.</span>

        </h2>

        <p>

            A simple process designed to turn your business
            requirements into practical digital solutions.

        </p>

    </div>


    <div className="process-grid">


        <div className="process-item">

            <span>01</span>

            <h3>
                Discover
            </h3>

            <p>
                Understand your business, customers and goals.
            </p>

        </div>


        <div className="process-item">

            <span>02</span>

            <h3>
                Strategize
            </h3>

            <p>
                Create the right technology and growth strategy.
            </p>

        </div>


        <div className="process-item">

            <span>03</span>

            <h3>
                Build
            </h3>

            <p>
                Design and develop your digital solution.
            </p>

        </div>


        <div className="process-item">

            <span>04</span>

            <h3>
                Grow
            </h3>

            <p>
                Optimize, market and continuously improve.
            </p>

        </div>


    </div>

</section>





<section className="support section" id="support">

    <div className="support-decoration">

        <span></span>
        <span></span>
        <span></span>
        <span></span>

    </div>


    <div className="support-wrapper">


        <div className="support-content">

            <span className="section-label">
                FLEX-US SUPPORT
            </span>


            <h2>

                Need help?
                <span>We're here.</span>

            </h2>


            <p>

                Have a website issue, technical problem,
                marketing requirement or need help with
                your existing digital setup?

            </p>


            <div className="support-features">

                <div>
                    <span>✓</span>
                    Technical Support
                </div>

                <div>
                    <span>✓</span>
                    Website Maintenance
                </div>

                <div>
                    <span>✓</span>
                    Digital Consultation
                </div>

                <div>
                    <span>✓</span>
                    Growth Assistance
                </div>

            </div>

        </div>



        

        <form
            className="support-form"
            id="ticketForm"
            action="https://formspree.io/f/mwleqnye"
            method="POST"
            onSubmit={handleSupportSubmit}
        >

            <div className="form-header">

                <div className="form-icon">
                    ?
                </div>

                <div>

                    <span>
                        SUPPORT
                    </span>

                    <h3>
                        Raise a Support Request
                    </h3>

                </div>

            </div>



            <div className="form-row">


                <div className="form-group">

                    <label htmlFor="customerName">
                        Name
                    </label>

                    <input
                        type="text"
                        id="customerName"
                        name="name"
                        placeholder="Your name"
                        required
                     />

                </div>


                <div className="form-group">

                    <label htmlFor="customerEmail">
                        Email
                    </label>

                    <input
                        type="email"
                        id="customerEmail"
                        name="email"
                        placeholder="you@example.com"
                        required
                     />

                </div>


            </div>



            <div className="form-row">


                <div className="form-group">

                    <label htmlFor="company">
                        Company
                    </label>

                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company name"
                        required
                     />

                </div>


                <div className="form-group">

                    <label htmlFor="category">
                        Category
                    </label>

                    <select
                        id="category"
                        name="category"
                    >

                        <option>Website</option>

                        <option>Ecommerce</option>

                        <option>SEO</option>

                        <option>Digital Marketing</option>

                        <option>Google Business</option>

                        <option>Social Media</option>

                        <option>Branding</option>

                        <option>IT Solutions</option>

                        <option>Other</option>

                    </select>

                </div>


            </div>



            <div className="form-group">

                <label htmlFor="priority">
                    Priority
                </label>

                <select
                    id="priority"
                    name="priority"
                >

                    <option>Normal</option>

                    <option>High</option>

                    <option>Urgent</option>

                </select>

            </div>



            <div className="form-group">

                <label htmlFor="subject">
                    Subject
                </label>

                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What do you need help with?"
                    required
                 />

            </div>



            <div className="form-group">

                <label htmlFor="description">
                    Description
                </label>

                <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Describe your requirement..."
                    required
                ></textarea>

            </div>



            

            <input
                type="hidden"
                name="_subject"
                value="New flex-us Support Request"
                readOnly
             />


            <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
            >

                {isSubmitting ? "Sending Request..." : "Submit Support Request"}

                <span>→</span>

            </button>


            <div
                className="form-message"
                id="formMessage"
                role="status"
                aria-live="polite"
                style={{ color: formMessageIsError ? "#d62828" : "#218844" }}
            >
                {formMessage}
            </div>


        </form>

    </div>

</section>





<section className="cta">

    <div className="cta-glow"></div>


    <span className="section-label">
        READY TO GROW?
    </span>


    <h2>

        Let's build something
        <span>great.</span>

    </h2>


    <p>

        Tell us about your business and let's find
        the right digital solution for you.

    </p>


    <a
        href="#contact"
        className="hero-btn hero-btn-primary"
    >

        Start a Project

        <span>→</span>

    </a>

</section>





<section className="contact section" id="contact">


    <div className="contact-heading">

        <span className="section-label">
            CONTACT FLEX-US
        </span>


        <h2>

            Let's talk about
            <span>your business.</span>

        </h2>


        <p>

            Have a project in mind? Send us your requirements
            and we'll get back to you.

        </p>

    </div>



    <div className="contact-grid">


        <div className="contact-card">

            <div className="contact-icon">
                ✉
            </div>

            <span>
                Email
            </span>

            <a href="mailto:khomaneshivam@gmail.com">
                khomaneshivam@gmail.com
            </a>

        </div>



        <div className="contact-card">

            <div className="contact-icon">
                ☎
            </div>

            <span>
                Phone
            </span>

            <a href="tel:+919307382030">
                +91 9307382030
            </a>

        </div>



        <div className="contact-card">

            <div className="contact-icon">
                ◉
            </div>

            <span>
                Location
            </span>

            <strong>
                Pune, India
            </strong>

        </div>


    </div>



    <a
        href="#home"
        className="back-top"
    >
        ↑ Back to top
    </a>

</section>





<footer className="footer">


    <div className="footer-container">


        <div className="footer-brand">


            <a
                href="#home"
                className="logo footer-logo"
            >

                <span className="logo-wordmark">flex-us</span>
            </a>


            <p>

                Technology, digital solutions and growth
                strategies for modern businesses.

            </p>

        </div>



        <div className="footer-links">

            <h4>
                Company
            </h4>

            <a href="#about">
                About
            </a>

            <a href="#services">
                Services
            </a>

            <a href="#pricing">
                Packages
            </a>

            <a href="#support">
                Support
            </a>

            <a href="#contact">
                Contact
            </a>

        </div>



        <div className="footer-links">

            <h4>
                Services
            </h4>

            <a href="#services">
                Web Development
            </a>

            <a href="#services">
                Ecommerce
            </a>

            <a href="#services">
                SEO
            </a>

            <a href="#services">
                Digital Marketing
            </a>

        </div>



        <div className="footer-links">

            <h4>
                Connect
            </h4>

            <a href="#" target="_blank" rel="noreferrer">
                Instagram
            </a>

            <a href="#" target="_blank" rel="noreferrer">
                LinkedIn
            </a>

            <a
                href="https://wa.me/919307382030"
                target="_blank"
                rel="noreferrer"
            >
                WhatsApp
            </a>

            <a href="mailto:khomaneshivam@gmail.com">
                Email Us
            </a>

        </div>


    </div>



    <div className="footer-bottom">

        <span id="copyright">
            © {new Date().getFullYear()} flex-us. All Rights Reserved.
        </span>

        <span>
            Technology Consultancy
        </span>

    </div>


</footer>






    </>
  );
}

export default App;
