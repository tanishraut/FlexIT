import React, { useState, useEffect } from "react";
import { konkantripCaseStudyData } from "../../data/konkantripCaseStudyData";

/**
 * Dedicated Case Study Detail Page for KonkanTrip Beach Resort
 * Route: /our-work/konkantrip-instagram-marketing
 *
 * Implements the 8-part structure:
 * 1. Project Hero
 * 2. Campaign Overview
 * 3. Performance Highlights
 * 4. Seasonal Website-Traffic Campaign (Diwali Promotion)
 * 5. Paid Messaging Campaign (Get Messages, 28 Feb – 2 Mar 2026)
 * 6. Organic Reel Performance (Lifetime, 24 July 2026)
 * 7. Campaign Insights ("What the Data Shows")
 * 8. Call to Action
 */
export default function KonkanTripCaseStudyPage({ onNavigateBack }) {
  const {
    meta,
    overview,
    highlights,
    campaignOneDiwali,
    campaignTwoMessaging,
    campaignThreeOrganicReel,
    insights
  } = konkantripCaseStudyData;

  // Currency Verification & Display state (defaults to unverified/raw to maintain 100% data integrity)
  const [currencyMode, setCurrencyMode] = useState("raw"); // "raw" | "inr" | "usd" | "hidden"

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = "Instagram Marketing for KonkanTrip Beach Resort | FLEXUS Case Study";
    return () => {
      document.title = "FLEXUS | Technology Consultancy";
    };
  }, []);

  const formatCost = (value) => {
    if (currencyMode === "hidden") return "Hidden (Admin Choice)";
    if (currencyMode === "inr") return `₹${value}`;
    if (currencyMode === "usd") return `$${value}`;
    return `${value} (Unspecified Currency)`;
  };

  return (
    <article className="konkan-case-study" id="konkantrip-case-study-page">
      {/* STICKY TOP BREADCRUMB BAR */}
      <nav className="cs-breadcrumb-bar" aria-label="Case Study Breadcrumbs">
        <div className="cs-breadcrumb-container">
          <div className="cs-breadcrumbs">
            <button
              type="button"
              className="breadcrumb-home-btn"
              onClick={() => onNavigateBack()}
            >
              Home
            </button>
            <span className="crumb-separator">/</span>
            <button
              type="button"
              className="breadcrumb-work-btn"
              onClick={() => onNavigateBack("#work")}
            >
              Our Work
            </button>
            <span className="crumb-separator">/</span>
            <span className="crumb-current">KonkanTrip Beach Resort</span>
          </div>

          <button
            type="button"
            className="cs-back-to-work-btn"
            onClick={() => onNavigateBack("#work")}
            aria-label="Back to Our Work section"
          >
            <span className="back-arrow">←</span>
            <span>Back to All Work</span>
          </button>
        </div>
      </nav>

      {/* 1. PROJECT HERO */}
      <header className="konkan-hero">
        <div className="konkan-hero-container">
          <div className="konkan-hero-badge-row">
            <span className="cs-cat-badge">{meta.category}</span>
            <span className="cs-client-badge">
              <span className="client-dot"></span>
              {meta.clientName} • {meta.clientLocation}
            </span>
            <span className="cs-source-badge">Verified Instagram Reports</span>
          </div>

          <h1 className="konkan-hero-title">{meta.title}</h1>
          <h2 className="konkan-hero-headline">{meta.headline}</h2>

          <p className="konkan-hero-description">{meta.description}</p>

          <div className="konkan-service-tags" aria-label="Services Delivered">
            {meta.serviceTags.map((tag, i) => (
              <span key={i} className="konkan-service-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Hero Banner Visual */}
          <div className="konkan-hero-banner-wrapper">
            <img
              src={meta.coverImage}
              alt="KonkanTrip Beach Resort coastal villas and beachfront at sunset in Dapoli"
              className="konkan-hero-cover-img"
              loading="eager"
            />
            <div className="hero-banner-overlay">
              <div className="banner-overlay-caption">
                <span className="caption-tag">Dapoli, Konkan Coast</span>
                <h3>Hospitality Marketing Campaign</h3>
                <p>Multi-channel Instagram engagement & traffic analysis</p>
              </div>

              <div className="banner-quick-stats">
                <div className="quick-stat-box">
                  <strong>1,478</strong>
                  <span>Website Visits</span>
                </div>
                <div className="quick-stat-box">
                  <strong>32</strong>
                  <span>Direct Conversations</span>
                </div>
                <div className="quick-stat-box">
                  <strong>35,039</strong>
                  <span>Campaign Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="konkan-main-body">
        {/* 2. CAMPAIGN OVERVIEW */}
        <section className="cs-section konkan-overview-section" aria-labelledby="section-overview-title">
          <div className="konkan-container">
            <div className="section-label-row">
              <span className="section-eyebrow">01 / BACKGROUND & CONTEXT</span>
              <h2 id="section-overview-title" className="cs-section-heading">
                Campaign Overview
              </h2>
            </div>

            <div className="overview-cards-grid">
              <div className="overview-card">
                <div className="overview-icon">🏖️</div>
                <h3>Brand & Destination Context</h3>
                <p>{overview.brandContext}</p>
              </div>

              <div className="overview-card">
                <div className="overview-icon">🎯</div>
                <h3>Multi-Channel Strategy</h3>
                <p>{overview.strategicFocus}</p>
              </div>

              <div className="overview-card highlight-card">
                <div className="overview-icon">🛡️</div>
                <h3>Data Integrity Pledge</h3>
                <p>{overview.integrityPledge}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PERFORMANCE HIGHLIGHTS */}
        <section className="cs-section konkan-highlights-section" aria-labelledby="section-highlights-title">
          <div className="konkan-container">
            <div className="section-label-row">
              <span className="section-eyebrow">02 / KEY REPORTED OUTCOMES</span>
              <h2 id="section-highlights-title" className="cs-section-heading">
                Performance Highlights
              </h2>
              <p className="section-subtext">
                Primary metrics recorded across the three independent Instagram reports. Metrics represent individual campaign activities and are not combined.
              </p>
            </div>

            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className={`highlight-box ${item.highlightType}`}>
                  <span className="highlight-number">{item.metric}</span>
                  <strong className="highlight-label">{item.label}</strong>
                  <span className="highlight-source">{item.source}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SEASONAL WEBSITE-TRAFFIC CAMPAIGN (DIWALI PROMOTION) */}
        <section className="cs-section konkan-campaign-section diwali-campaign-panel" aria-labelledby="section-diwali-title">
          <div className="konkan-container">
            <div className="campaign-panel-card">
              <div className="panel-top-banner">
                <div className="panel-meta-left">
                  <span className="panel-badge-num">CAMPAIGN 01</span>
                  <span className="panel-badge-source">Source: {campaignOneDiwali.sourceFile}</span>
                  <span className="panel-badge-period">{campaignOneDiwali.reportingPeriodLabel}</span>
                </div>
                <div className="panel-objective-tag">
                  {campaignOneDiwali.objectiveLabel}
                </div>
              </div>

              <div className="panel-content-body">
                <h2 id="section-diwali-title" className="panel-title">
                  Seasonal Website-Traffic Campaign — Diwali Promotion
                </h2>
                <p className="panel-summary">{campaignOneDiwali.summary}</p>

                {/* 4 Prominent Metric Cards */}
                <div className="traffic-metric-cards-grid">
                  <div className="traffic-metric-card primary-card">
                    <span className="metric-super-label">VIEWS</span>
                    <strong className="metric-main-value">35,039</strong>
                    <span className="metric-explanation">Total Campaign Impressions Recorded</span>
                  </div>

                  <div className="traffic-metric-card primary-card">
                    <span className="metric-super-label">REACH</span>
                    <strong className="metric-main-value">28,846</strong>
                    <span className="metric-explanation">Unique Accounts That Saw The Promotion</span>
                  </div>

                  <div className="traffic-metric-card accent-card">
                    <span className="metric-super-label">LINK CLICKS</span>
                    <strong className="metric-main-value">1,827</strong>
                    <span className="metric-explanation">Direct Clicks on the Resort Booking URL</span>
                  </div>

                  <div className="traffic-metric-card accent-card">
                    <span className="metric-super-label">WEBSITE VISITS</span>
                    <strong className="metric-main-value">1,478</strong>
                    <span className="metric-explanation">External Web Destination Sessions Loaded</span>
                  </div>
                </div>

                {/* Horizontal Data Visualization */}
                <div className="horizontal-visualization-box">
                  <div className="viz-header">
                    <h3>Traffic Generation Funnel Visualization</h3>
                    <span className="viz-note">
                      Comparing Impressions, Click Actions, and Resulting Website Visits
                    </span>
                  </div>

                  <div className="viz-bars-container">
                    {campaignOneDiwali.funnelComparison.map((stage, idx) => (
                      <div key={idx} className="viz-bar-row">
                        <div className="bar-meta-col">
                          <strong className="bar-stage-name">{stage.metricName}</strong>
                          <span className="bar-stage-desc">{stage.description}</span>
                        </div>
                        <div className="bar-track-col">
                          <div className="bar-track">
                            <div
                              className={`bar-fill fill-${idx}`}
                              style={{ width: `${Math.max(stage.percentage, 7)}%` }}
                              role="progressbar"
                              aria-valuenow={stage.value}
                              aria-valuemin="0"
                              aria-valuemax="35039"
                            >
                              <span className="bar-fill-label">
                                {stage.value.toLocaleString()} ({stage.percentage}%)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="viz-legend">
                    <span>• <strong>Views:</strong> Raw volume of times the ad appeared in user feeds.</span>
                    <span>• <strong>Link Clicks:</strong> Specific user actions clicking the ad button.</span>
                    <span>• <strong>Website Visits:</strong> Confirmed page-load sessions recorded on the resort website.</span>
                  </div>
                </div>

                {/* Secondary Engagement Row & Video Viewing Metric */}
                <div className="engagement-video-grid">
                  <div className="secondary-engagement-box">
                    <h4>Secondary Engagement Breakdown</h4>
                    <div className="engagement-pills-row">
                      <div className="eng-pill">
                        <span className="eng-val">203</span>
                        <span className="eng-lbl">Likes & Reactions</span>
                      </div>
                      <div className="eng-pill">
                        <span className="eng-val">33</span>
                        <span className="eng-lbl">Shares</span>
                      </div>
                      <div className="eng-pill">
                        <span className="eng-val">17</span>
                        <span className="eng-lbl">Saves</span>
                      </div>
                      <div className="eng-pill">
                        <span className="eng-val">1</span>
                        <span className="eng-lbl">Comment</span>
                      </div>
                      <div className="eng-pill">
                        <span className="eng-val">45</span>
                        <span className="eng-lbl">Profile Visits</span>
                      </div>
                    </div>
                  </div>

                  <div className="video-metric-box">
                    <span className="video-badge">VIDEO PERFORMANCE</span>
                    <strong className="video-val">{campaignOneDiwali.videoMetric.value}</strong>
                    <span className="video-lbl">{campaignOneDiwali.videoMetric.label}</span>
                    <p className="video-desc">{campaignOneDiwali.videoMetric.description}</p>
                  </div>
                </div>

                {/* Follower Integrity & Cost Display Verification Tool */}
                <div className="integrity-cost-grid">
                  <div className="follower-truth-box">
                    <div className="truth-icon">ℹ️</div>
                    <div>
                      <strong>Follower Recording: 0 Follows</strong>
                      <p>
                        The Diwali promotion report recorded 0 new follows. This project focused on outbound website traffic generation; no follower acquisition or direct online bookings are claimed.
                      </p>
                    </div>
                  </div>

                  <div className="cost-verification-box">
                    <div className="cost-header">
                      <span>COST PER WEBSITE VISIT</span>
                      <strong className="cost-val-display">{formatCost(campaignOneDiwali.coreMetrics.reportedCostPerWebsiteVisit)}</strong>
                    </div>

                    <p className="cost-explainer">
                      The source export records a cost per visit of <strong>0.56</strong> without a currency designation. Below, site administrators can toggle verified currency display:
                    </p>

                    <div className="currency-toggle-bar">
                      <button
                        type="button"
                        className={`curr-btn ${currencyMode === "raw" ? "active" : ""}`}
                        onClick={() => setCurrencyMode("raw")}
                      >
                        Raw: 0.56 (Default)
                      </button>
                      <button
                        type="button"
                        className={`curr-btn ${currencyMode === "inr" ? "active" : ""}`}
                        onClick={() => setCurrencyMode("inr")}
                      >
                        Verify as INR (₹0.56)
                      </button>
                      <button
                        type="button"
                        className={`curr-btn ${currencyMode === "usd" ? "active" : ""}`}
                        onClick={() => setCurrencyMode("usd")}
                      >
                        Verify as USD ($0.56)
                      </button>
                      <button
                        type="button"
                        className={`curr-btn ${currencyMode === "hidden" ? "active" : ""}`}
                        onClick={() => setCurrencyMode("hidden")}
                      >
                        Hide Cost
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PAID MESSAGING CAMPAIGN */}
        <section className="cs-section konkan-campaign-section messaging-campaign-panel" aria-labelledby="section-messaging-title">
          <div className="konkan-container">
            <div className="campaign-panel-card messaging-theme">
              <div className="panel-top-banner">
                <div className="panel-meta-left">
                  <span className="panel-badge-num">CAMPAIGN 02</span>
                  <span className="panel-badge-source">Source: {campaignTwoMessaging.sourceFile}</span>
                  <span className="panel-badge-period highlight-date">
                    Reporting Period: {campaignTwoMessaging.reportingPeriodShort}
                  </span>
                </div>
                <div className="panel-objective-tag messaging-tag">
                  Objective: {campaignTwoMessaging.campaignObjective}
                </div>
              </div>

              <div className="panel-content-body">
                <h2 id="section-messaging-title" className="panel-title">
                  {campaignTwoMessaging.title}
                </h2>
                <p className="panel-summary">{campaignTwoMessaging.summary}</p>

                {/* 4 Messaging Highlight Cards */}
                <div className="messaging-metric-cards-grid">
                  <div className="messaging-card hero-msg-card">
                    <span className="msg-icon">💬</span>
                    <strong className="msg-metric-val">32</strong>
                    <span className="msg-metric-label">Messaging Conversations Started</span>
                    <span className="msg-sublabel">Direct Instagram Dialogues Initiated</span>
                  </div>

                  <div className="messaging-card">
                    <strong className="msg-metric-val">5,011</strong>
                    <span className="msg-metric-label">Total Views</span>
                    <span className="msg-sublabel">Campaign Impressions</span>
                  </div>

                  <div className="messaging-card">
                    <strong className="msg-metric-val">3,982</strong>
                    <span className="msg-metric-label">Total Reach</span>
                    <span className="msg-sublabel">Unique Accounts Reached</span>
                  </div>

                  <div className="messaging-card">
                    <strong className="msg-metric-val">4</strong>
                    <span className="msg-metric-label">New Follows</span>
                    <span className="msg-sublabel">Account Follows Recorded</span>
                  </div>
                </div>

                {/* Engagement Breakdown & Spend Data */}
                <div className="messaging-secondary-grid">
                  <div className="msg-eng-breakdown">
                    <h4>Engagement Breakdown (28 Feb – 2 Mar 2026)</h4>
                    <div className="breakdown-chips">
                      <div className="chip">
                        <strong>26</strong>
                        <span>Likes</span>
                      </div>
                      <div className="chip">
                        <strong>8</strong>
                        <span>Shares</span>
                      </div>
                      <div className="chip">
                        <strong>8</strong>
                        <span>Saves</span>
                      </div>
                      <div className="chip">
                        <strong>0</strong>
                        <span>Comments</span>
                      </div>
                    </div>
                  </div>

                  <div className="msg-spend-box">
                    <h4>Reported Advertising Spend</h4>
                    <div className="spend-row">
                      <div className="spend-col">
                        <span className="spend-label">Amount Spent:</span>
                        <strong className="spend-val">{formatCost(campaignTwoMessaging.coreMetrics.amountSpent)}</strong>
                      </div>
                      <div className="spend-col">
                        <span className="spend-label">Cost per Conversation Started:</span>
                        <strong className="spend-val">{formatCost(campaignTwoMessaging.coreMetrics.costPerMessagingConversation)}</strong>
                      </div>
                    </div>
                    <span className="spend-note">
                      * Currency not verified in source export. Retained as raw reported numerical metric.
                    </span>
                  </div>
                </div>

                {/* Boundary Definition Note */}
                <div className="conversation-boundary-note">
                  <span className="note-badge">CONVERSATION DISCLOSURE</span>
                  <p>
                    Reported conversations started (32) measure prospective travelers initiating communication on Instagram Direct Messaging. They remain distinct from qualified leads, reservation requests, or confirmed guest bookings. No customer conversion rate is claimed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. ORGANIC INSTAGRAM REEL PERFORMANCE */}
        <section className="cs-section konkan-campaign-section reel-campaign-panel" aria-labelledby="section-reel-title">
          <div className="konkan-container">
            <div className="campaign-panel-card reel-theme">
              <div className="panel-top-banner">
                <div className="panel-meta-left">
                  <span className="panel-badge-num">CONTENT 03</span>
                  <span className="panel-badge-source">Source: {campaignThreeOrganicReel.sourceFile}</span>
                  <span className="panel-badge-period">
                    Published: {campaignThreeOrganicReel.publishDate}
                  </span>
                </div>
                <div className="panel-objective-tag reel-tag">
                  {campaignThreeOrganicReel.reportingScope}
                </div>
              </div>

              <div className="panel-content-body">
                <h2 id="section-reel-title" className="panel-title">
                  {campaignThreeOrganicReel.title}
                </h2>
                <p className="panel-summary">{campaignThreeOrganicReel.summary}</p>

                <div className="reel-presentation-layout">
                  {/* Left: Reel Frame Showcase */}
                  <div className="reel-visual-frame-container">
                    <div className="reel-phone-frame">
                      <img
                        src={meta.reelThumbImage}
                        alt="Instagram Reel video frame featuring KonkanTrip Beach Resort beach view at sunset"
                        className="reel-frame-img"
                      />
                      <div className="reel-frame-overlay">
                        <div className="reel-header-overlay">
                          <span className="account-tag">@{campaignThreeOrganicReel.account}</span>
                          <span className="reel-type-pill">Reel</span>
                        </div>
                        <div className="reel-center-play">▶</div>
                        <div className="reel-bottom-overlay">
                          <span className="reel-caption-text">Dapoli Sunset Magic ✨ | Coastal Resort Life</span>
                          <span className="reel-audio-text">🎵 Original Audio • @konkantrip_dapoli</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Reel Metric Overlays & Verification */}
                  <div className="reel-metrics-content">
                    <div className="reel-scope-banner">
                      <span className="scope-icon">📊</span>
                      <span>Lifetime metrics for single published Reel (Published 24 July 2026)</span>
                    </div>

                    <div className="reel-metric-cards-grid">
                      <div className="reel-stat-card">
                        <strong className="reel-stat-number">1,884</strong>
                        <span className="reel-stat-label">Views</span>
                        <span className="reel-stat-sub">Lifetime Video Plays</span>
                      </div>

                      <div className="reel-stat-card">
                        <strong className="reel-stat-number">1,426</strong>
                        <span className="reel-stat-label">Reach</span>
                        <span className="reel-stat-sub">Unique Accounts</span>
                      </div>

                      <div className="reel-stat-card">
                        <strong className="reel-stat-number">9</strong>
                        <span className="reel-stat-label">Likes</span>
                        <span className="reel-stat-sub">Reactions</span>
                      </div>

                      <div className="reel-stat-card">
                        <strong className="reel-stat-number">2</strong>
                        <span className="reel-stat-label">Saves</span>
                        <span className="reel-stat-sub">Bookmarks</span>
                      </div>

                      <div className="reel-stat-card highlight-follow">
                        <strong className="reel-stat-number">1</strong>
                        <span className="reel-stat-label">Follow</span>
                        <span className="reel-stat-sub">Profile Follower</span>
                      </div>

                      <div className="reel-stat-card muted-stat">
                        <strong className="reel-stat-number">0</strong>
                        <span className="reel-stat-label">Shares & Comments</span>
                        <span className="reel-stat-sub">Zero Recorded</span>
                      </div>
                    </div>

                    <div className="reel-isolation-note">
                      <strong>Independent Evaluation:</strong>
                      <p>
                        These organic video metrics evaluate an individual Reel post independently. They have not been combined or merged with either the Diwali website-traffic campaign or the paid messaging campaign.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CAMPAIGN INSIGHTS ("WHAT THE DATA SHOWS") */}
        <section className="cs-section konkan-insights-section" aria-labelledby="section-insights-title">
          <div className="konkan-container">
            <div className="section-label-row">
              <span className="section-eyebrow">03 / EVIDENCE & ANALYSIS</span>
              <h2 id="section-insights-title" className="cs-section-heading">
                What the Data Shows
              </h2>
              <p className="section-subtext">
                Factual insights grounded strictly in the three supplied export reports without speculative extrapolations.
              </p>
            </div>

            <div className="insights-cards-grid">
              {insights.map((insight) => (
                <article key={insight.number} className="insight-card">
                  <div className="insight-card-top">
                    <span className="insight-number">{insight.number}</span>
                    <span className="insight-topic">{insight.topic}</span>
                  </div>

                  <h3 className="insight-title">{insight.title}</h3>

                  <blockquote className="insight-quote">
                    "{insight.verbatimQuote}"
                  </blockquote>

                  <p className="insight-analysis">{insight.analysis}</p>
                </article>
              ))}
            </div>

            {/* Integrity Boundary Box */}
            <div className="insights-integrity-callout">
              <div className="callout-header">
                <span className="callout-shield">🛡️</span>
                <strong>FLEXUS Reporting Methodology & Integrity Standards</strong>
              </div>
              <p>
                In strict adherence to evidence-based consulting standards, these results are not characterized as "improvements" because the provided files contain no pre-campaign baseline comparison. Furthermore, FLEXUS does not assert unverified return on ad spend (ROAS), booking conversion percentages, cost per room booking, or overall revenue increases that cannot be established from the source exports.
              </p>
            </div>
          </div>
        </section>

        {/* 8. CALL TO ACTION */}
        <section className="cs-section konkan-cta-section" aria-labelledby="section-cta-title">
          <div className="konkan-container">
            <div className="konkan-cta-box">
              <div className="cta-glow"></div>
              <span className="cta-eyebrow">COLLABORATE WITH FLEXUS</span>
              <h2 id="section-cta-title" className="cta-heading">
                Ready to Build <span>Measurable</span> Digital Marketing?
              </h2>
              <p className="cta-description">
                Let's turn your next marketing campaign into a transparent, data-driven initiative built around your business goals.
              </p>

              <div className="cta-actions-row">
                <a
                  href="#ticketForm"
                  className="hero-btn hero-btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateBack("#ticketForm");
                  }}
                >
                  <span>Start a Project</span>
                  <span className="btn-arrow">→</span>
                </a>

                <button
                  type="button"
                  className="hero-btn hero-btn-secondary"
                  onClick={() => onNavigateBack("#work")}
                >
                  Explore All Portfolio Projects
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
