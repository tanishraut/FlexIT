import React, { useEffect } from "react";
import { contactInfo } from "../../data/contactData";

/**
 * Privacy Policy Page for FLEXUS Technology Consultancy
 * Route: /privacy-policy
 * Compliant with IT Industry & Digital Marketing Standards
 * (GDPR, CCPA, India Digital Personal Data Protection Act 2023, CAN-SPAM)
 */
export default function PrivacyPolicyPage({ onNavigateBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = "Privacy Policy | FLEXUS Technology Consultancy";
    return () => {
      document.title = "FLEXUS | Technology Consultancy";
    };
  }, []);

  const effectiveDate = "January 1, 2026";
  const lastUpdated = "November 16, 2026";

  return (
    <article className="privacy-page" id="privacy-policy-page">
      {/* STICKY TOP BREADCRUMB BAR */}
      <nav className="privacy-breadcrumb-bar" aria-label="Privacy Policy Breadcrumbs">
        <div className="privacy-breadcrumb-container">
          <div className="privacy-breadcrumbs">
            <button
              type="button"
              className="privacy-breadcrumb-home-btn"
              onClick={() => onNavigateBack("#home")}
            >
              Home
            </button>
            <span className="privacy-crumb-separator">/</span>
            <span className="privacy-crumb-current">Privacy Policy</span>
          </div>

          <button
            type="button"
            className="privacy-back-btn"
            onClick={() => onNavigateBack("#home")}
            aria-label="Back to Home Page"
          >
            <span>←</span>
            <span>Back to Home</span>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="privacy-hero">
        <div className="privacy-hero-container">
          <div className="privacy-badge-row">
            <span className="privacy-badge">Legal &amp; Regulatory Standard</span>
            <span className="privacy-meta-badge">Effective Date: {effectiveDate}</span>
            <span className="privacy-meta-badge">Last Updated: {lastUpdated}</span>
          </div>

          <h1>Privacy Policy &amp; Data Governance</h1>
          <p>
            At FLEXUS Technology Consultancy, we design and deliver high-performance
            software, web applications, and data-driven digital marketing campaigns.
            This policy outlines our transparent data practices, IT industry security
            controls, and digital marketing advertising standards.
          </p>

          <div className="privacy-key-highlights">
            <div className="privacy-highlight-card">
              <h3>
                <span className="icon">🛡️</span> Zero Data Sale
              </h3>
              <p>
                We never sell, rent, or trade your personal data or client proprietary
                code to data brokers or third-party marketplaces.
              </p>
            </div>

            <div className="privacy-highlight-card">
              <h3>
                <span className="icon">🔒</span> IT Industry Security
              </h3>
              <p>
                Strict role-based access, SSL/TLS encryption in transit, isolated staging
                environments, and strict NDA-level client confidentiality.
              </p>
            </div>

            <div className="privacy-highlight-card">
              <h3>
                <span className="icon">📊</span> Marketing Standards
              </h3>
              <p>
                Transparent cookie usage, ethical Meta/Google advertising telemetry,
                anonymized analytics, and one-click marketing opt-outs.
              </p>
            </div>

            <div className="privacy-highlight-card">
              <h3>
                <span className="icon">⚖️</span> Global Compliance
              </h3>
              <p>
                Aligned with the Digital Personal Data Protection Act (DPDP),
                EU GDPR, California CCPA/CPRA, and CAN-SPAM regulations.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div className="privacy-body-container">
        {/* TABLE OF CONTENTS SIDEBAR */}
        <aside className="privacy-toc-sidebar" aria-label="Privacy Table of Contents">
          <div className="privacy-toc-title">
            <span>📑</span> Table of Contents
          </div>
          <nav>
            <ul className="privacy-toc-list">
              <li><a href="#scope">1. Scope &amp; Applicability</a></li>
              <li><a href="#collection">2. Information We Collect</a></li>
              <li><a href="#cookies">3. Cookies &amp; Tracking Tech</a></li>
              <li><a href="#purpose">4. Purpose &amp; Processing Bases</a></li>
              <li><a href="#it-standards">5. IT Industry &amp; Client IP</a></li>
              <li><a href="#marketing-standards">6. Digital Marketing Standards</a></li>
              <li><a href="#third-parties">7. Sub-Processors &amp; Sharing</a></li>
              <li><a href="#security">8. Security &amp; Encryption</a></li>
              <li><a href="#retention">9. Data Retention &amp; Disposal</a></li>
              <li><a href="#rights">10. Your Privacy Rights</a></li>
              <li><a href="#children">11. Children&apos;s Privacy</a></li>
              <li><a href="#contact">12. Contact &amp; Grievances</a></li>
            </ul>
          </nav>
        </aside>

        {/* POLICY ARTICLES */}
        <div className="privacy-content">
          {/* SECTION 1 */}
          <section className="privacy-section" id="scope">
            <h2>
              <span className="privacy-section-number">1</span> Scope &amp; Applicability
            </h2>
            <p>
              This Privacy Policy applies to <strong>FLEXUS Technology Consultancy</strong> (&quot;FLEXUS&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;),
              headquartered in Pune, India. It governs the collection, processing, storage, and transfer of information
              collected through our website, mobile interfaces, software development platforms, client portals, and
              digital marketing campaigns.
            </p>
            <p>
              This policy covers all individuals who interact with us, including:
            </p>
            <ul>
              <li><strong>Website Visitors:</strong> Individuals browsing our site, accessing case studies, or reviewing service offerings.</li>
              <li><strong>Prospective &amp; Active Clients:</strong> Representatives of businesses engaging FLEXUS for custom software, web development, SEO, branding, or performance marketing.</li>
              <li><strong>Campaign Audiences:</strong> Individuals who view or interact with advertisements, lead forms, or promotional media operated by FLEXUS on behalf of our clients or brand.</li>
            </ul>
          </section>

          {/* SECTION 2 */}
          <section className="privacy-section" id="collection">
            <h2>
              <span className="privacy-section-number">2</span> Information We Collect
            </h2>
            <p>
              In alignment with IT industry transparency and digital marketing disclosure benchmarks, we categorize
              the information we collect into three operational channels:
            </p>

            <h3>A. Information You Voluntarily Provide</h3>
            <ul>
              <li><strong>Inquiry &amp; Contact Details:</strong> Full name, professional email address, telephone/WhatsApp number, company name, website URL, and geographic location.</li>
              <li><strong>Project Scoping &amp; Requirements:</strong> Technology stack specifications, business objectives, budget ranges, timeline requirements, and project briefs submitted via our project starter or support ticket forms.</li>
              <li><strong>Communication Records:</strong> Transcripts of emails, WhatsApp discussions, customer service inquiries, and project consultation logs.</li>
            </ul>

            <h3>B. IT Project &amp; Client Technical Data (Strict Confidentiality)</h3>
            <div className="privacy-callout privacy-callout-it">
              <h4><span>💻</span> IT Industry Standard: Client Assets &amp; Repositories</h4>
              <p>
                When clients contract FLEXUS for software engineering, website development, or maintenance,
                they may share repository access (GitHub/GitLab), API keys, server credentials, or database
                schemas. All such assets are protected under strict Non-Disclosure Agreements (NDAs), encrypted,
                and never used outside the contracted scope.
              </p>
            </div>

            <h3>C. Automatically Collected Technical &amp; Marketing Telemetry</h3>
            <ul>
              <li><strong>Device &amp; Connection Data:</strong> IP address (anonymized where applicable), browser type and version, language settings, operating system, device manufacturer, screen resolution, and mobile carrier.</li>
              <li><strong>Usage &amp; Interaction Data:</strong> Pages visited, scroll depth, dwell time, navigation paths, click events, referring URLs, and exit pages.</li>
              <li><strong>Campaign Attribution:</strong> UTM parameters (source, medium, campaign name, creative ID) and landing page interactions to assess marketing return on investment.</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section className="privacy-section" id="cookies">
            <h2>
              <span className="privacy-section-number">3</span> Cookies, Pixels &amp; Tracking Technologies
            </h2>
            <p>
              As a modern digital agency, we utilize cookies, tracking pixels, and local storage to optimize user experience,
              analyze traffic patterns, and deliver tailored advertising.
            </p>

            <div className="privacy-table-wrapper">
              <table className="privacy-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Purpose</th>
                    <th>Examples / Providers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Strictly Necessary</strong></td>
                    <td>Core website navigation, security, session integrity, form spam protection.</td>
                    <td>FLEXUS session identifiers, CSRF tokens.</td>
                  </tr>
                  <tr>
                    <td><strong>Performance &amp; Analytics</strong></td>
                    <td>Aggregate telemetry to measure visitor engagement, page speeds, bounce rates, and traffic sources.</td>
                    <td>Google Analytics 4 (GA4) with IP masking.</td>
                  </tr>
                  <tr>
                    <td><strong>Advertising &amp; Retargeting</strong></td>
                    <td>Delivering relevant advertising, measuring ad conversions, and building custom audiences.</td>
                    <td>Meta Pixel (Facebook/Instagram), Google Ads Remarketing, LinkedIn Insight Tag.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="privacy-callout privacy-callout-marketing">
              <h4><span>📢</span> Digital Marketing Standard: Cookie Control &amp; Opt-Out</h4>
              <p>
                You have full control over cookie preferences. You may configure your browser to refuse all cookies
                or indicate when a cookie is sent. To opt out of behavioral ad retargeting, you can visit the
                Digital Advertising Alliance at <a href="https://optout.aboutads.info" target="_blank" rel="noreferrer">aboutads.info</a>,
                the Network Advertising Initiative at <a href="https://optout.networkadvertising.org" target="_blank" rel="noreferrer">networkadvertising.org</a>,
                or manage your Google Ad Settings and Meta Ad Preferences directly.
              </p>
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="privacy-section" id="purpose">
            <h2>
              <span className="privacy-section-number">4</span> Purpose of Processing &amp; Legal Bases
            </h2>
            <p>
              We process personal information only when backed by valid legal bases recognized under international
              data protection frameworks (including GDPR Art. 6 and the DPDP Act 2023):
            </p>
            <ul>
              <li><strong>Performance of Contract:</strong> To develop, deliver, host, test, and maintain digital applications, fulfill statements of work (SOWs), and provide technical support.</li>
              <li><strong>Legitimate Interests:</strong> To optimize our web performance, secure our infrastructure against malicious attacks, conduct client relationship management, and measure marketing campaign efficacy.</li>
              <li><strong>Explicit Consent:</strong> When you subscribe to our newsletters, consent to advertising cookies, or submit an explicit project inquiry.</li>
              <li><strong>Legal Compliance:</strong> To maintain statutory financial records, tax invoices, and comply with binding court or law enforcement orders.</li>
            </ul>
          </section>

          {/* SECTION 5 */}
          <section className="privacy-section" id="it-standards">
            <h2>
              <span className="privacy-section-number">5</span> IT Industry Standards: Client Code &amp; IP Protection
            </h2>
            <p>
              Information Technology consultancy demands exceptional integrity regarding software architecture,
              confidential client data, and proprietary codebases. FLEXUS implements the following IT industry standards:
            </p>
            <ul>
              <li><strong>Intellectual Property Integrity:</strong> All custom code, database designs, creative brand assets, and proprietary algorithms crafted for a client belong exclusively to that client upon contract fulfillment.</li>
              <li><strong>Environment Isolation:</strong> Development, staging, and production environments are strictly segregated. Live production customer data is never mirrored into unencrypted test environments.</li>
              <li><strong>Least Privilege Access (PoLP):</strong> Developers and engineers are granted credential access strictly on a need-to-know basis required to complete specific assigned milestones.</li>
              <li><strong>Secret Management:</strong> Sensitive API keys, database connection strings, and certificates are managed via encrypted environment managers (never committed into plain-text version control).</li>
              <li><strong>Non-Disclosure Compliance:</strong> Every employee, developer, and specialist bound to FLEXUS is subject to binding non-disclosure covenants enforceable by law.</li>
            </ul>
          </section>

          {/* SECTION 6 */}
          <section className="privacy-section" id="marketing-standards">
            <h2>
              <span className="privacy-section-number">6</span> Digital Marketing Standards &amp; Ethical Advertising
            </h2>
            <p>
              As a full-spectrum digital marketing agency, FLEXUS adheres to rigorous digital advertising benchmarks
              set by the Interactive Advertising Bureau (IAB), Meta Advertising Standards, and Google Ads Policies:
            </p>
            <ul>
              <li><strong>Zero Cross-Client Data Leakage:</strong> Marketing audiences, lead lists, pixel event data, and campaign insights belonging to one client are strictly quarantined and never used to benefit another client or competitor.</li>
              <li><strong>Hashed Audience Ingestion:</strong> Any customer email or telephone lists utilized for custom audience targeting or lookalike generation on Meta or Google are hashed cryptographically (SHA-256) prior to transmission.</li>
              <li><strong>Anti-Spam Compliance:</strong> All commercial email communications include verifiable sender identification, physical mailing coordinates, and an immediate one-click unsubscribe mechanism adhering to the CAN-SPAM Act and global anti-spam regulations.</li>
              <li><strong>Truth in Advertising:</strong> We do not deploy deceptive clickbait, misleading metric claims, or unauthorized consumer data scraping.</li>
            </ul>
          </section>

          {/* SECTION 7 */}
          <section className="privacy-section" id="third-parties">
            <h2>
              <span className="privacy-section-number">7</span> Third-Party Sub-Processors &amp; Data Transfers
            </h2>
            <p>
              We do not monetize your data. We share personal information only with vetted third-party service providers
              necessary to conduct our core business operations:
            </p>
            <ul>
              <li><strong>Cloud &amp; Hosting Infrastructure:</strong> Vercel, Amazon Web Services (AWS), DigitalOcean, and Cloudflare for resilient website delivery, SSL termination, and DDoS mitigation.</li>
              <li><strong>Analytics &amp; Optimization:</strong> Google Analytics (Google LLC) for user flow analysis.</li>
              <li><strong>Advertising Platforms:</strong> Meta Platforms Inc. (Instagram &amp; Facebook Ads) and Google LLC (Google Ads) for sponsored campaign delivery.</li>
              <li><strong>Communications &amp; Messaging:</strong> WhatsApp Business API (Meta) and secure transactional email gateways for responding to client queries.</li>
            </ul>
            <p>
              All third-party sub-processors are required under Data Processing Agreements (DPAs) to implement
              confidentiality and security measures equivalent to our own.
            </p>
          </section>

          {/* SECTION 8 */}
          <section className="privacy-section" id="security">
            <h2>
              <span className="privacy-section-number">8</span> Data Security &amp; Technical Safeguards
            </h2>
            <p>
              FLEXUS enforces multi-layered technical and organizational defenses designed to safeguard personal
              and proprietary client data against unauthorized access, loss, or alteration:
            </p>
            <ul>
              <li><strong>Encryption in Transit:</strong> 256-bit Transport Layer Security (TLS 1.3 / SSL) enforced across all web domains and API communication channels.</li>
              <li><strong>Encryption at Rest:</strong> Industry-standard AES-256 encryption applied to sensitive records and backups.</li>
              <li><strong>Multi-Factor Authentication (MFA):</strong> Enforced across all internal developer consoles, code repositories, hosting accounts, and client communication platforms.</li>
              <li><strong>Continuous Security Auditing:</strong> Periodic dependency updates, vulnerability monitoring, and code security linting prior to deployment.</li>
            </ul>
          </section>

          {/* SECTION 9 */}
          <section className="privacy-section" id="retention">
            <h2>
              <span className="privacy-section-number">9</span> Data Retention &amp; Disposal
            </h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes for which it was
              collected, including legal, accounting, and technical warranty requirements:
            </p>
            <ul>
              <li><strong>Client Project Records:</strong> Retained for the active duration of the contract plus a standard warranty/SLA retention period (typically 12 to 24 months post-handover) unless early deletion is requested.</li>
              <li><strong>Marketing &amp; Sales Leads:</strong> Retained for up to 24 months from the last documented contact, after which inactive leads are securely purged.</li>
              <li><strong>Server &amp; Access Logs:</strong> Automatically rotated and purged after 90 days.</li>
              <li><strong>Secure Cryptographic Disposal:</strong> When data reaches the end of its retention schedule, digital files are permanently shredded and database records securely expunged.</li>
            </ul>
          </section>

          {/* SECTION 10 */}
          <section className="privacy-section" id="rights">
            <h2>
              <span className="privacy-section-number">10</span> Your Privacy Rights &amp; Global Protections
            </h2>
            <p>
              Regardless of your geographic location, FLEXUS provides you with full transparency and control over your personal data:
            </p>
            <ul>
              <li><strong>Right to Access:</strong> You may request a confirmation and copy of all personal information we hold regarding you.</li>
              <li><strong>Right to Rectification:</strong> You may request the correction of any inaccurate, obsolete, or incomplete personal records.</li>
              <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You may request that we delete your personal data, subject to legitimate legal and statutory retention duties.</li>
              <li><strong>Right to Restrict or Object to Processing:</strong> You have an absolute right to object to direct marketing communications, profiling, or automated processing.</li>
              <li><strong>Right to Data Portability:</strong> You may request your data in a structured, commonly used, and machine-readable format.</li>
              <li><strong>Right to Withdraw Consent:</strong> Where processing is predicated upon your consent, you may revoke that consent at any time without retroactive penalty.</li>
            </ul>
            <p>
              To exercise any of these statutory rights, please send an email to our compliance desk at{" "}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>. We respond to all verified requests
              within 30 calendar days.
            </p>
          </section>

          {/* SECTION 11 */}
          <section className="privacy-section" id="children">
            <h2>
              <span className="privacy-section-number">11</span> Children&apos;s Privacy Protection
            </h2>
            <p>
              FLEXUS operates strictly in the commercial B2B and professional technology sector. Our services,
              marketing collateral, and website are not directed toward children under 16 years of age (or 18 in jurisdictions
              governed by higher majority thresholds). We do not knowingly collect personal information from minors.
              If we discover that a child has provided us with personal information, we will immediately delete such data
              from our active systems.
            </p>
          </section>

          {/* SECTION 12 */}
          <section className="privacy-section" id="contact">
            <h2>
              <span className="privacy-section-number">12</span> Policy Updates &amp; Contact Information
            </h2>
            <p>
              FLEXUS may update this Privacy Policy periodically to reflect technological advances, new service additions,
              or changing statutory guidelines. When updates are published, the &quot;Last Updated&quot; revision timestamp
              at the top of this document will be amended accordingly.
            </p>

            <div className="privacy-contact-card">
              <h3>Data Protection &amp; Compliance Office</h3>
              <p>
                For questions, concerns, data subject requests, or grievance redressal regarding our privacy policies,
                please contact our compliance officer directly:
              </p>

              <div className="privacy-contact-grid">
                <div className="privacy-contact-item">
                  <div className="privacy-contact-label">Organization</div>
                  <div className="privacy-contact-value">FLEXUS Technology Consultancy</div>
                </div>

                <div className="privacy-contact-item">
                  <div className="privacy-contact-label">Compliance Desk</div>
                  <div className="privacy-contact-value">
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                </div>

                <div className="privacy-contact-item">
                  <div className="privacy-contact-label">Direct Phone / WhatsApp</div>
                  <div className="privacy-contact-value">
                    <a href={contactInfo.whatsappUrl} target="_blank" rel="noreferrer">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="privacy-contact-item">
                  <div className="privacy-contact-label">Registered Location</div>
                  <div className="privacy-contact-value">{contactInfo.location}</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
