/**
 * FLEXUS Technology Consultancy - KonkanTrip Beach Resort Case Study Data
 * Source of Truth:
 * 1. Instagram Campaign Report.xlsx (Diwali promotion)
 * 2. Post report(1).csv (Paid Messaging Campaign, 28 Feb – 2 Mar 2026)
 * 3. Jun-29-2026_Jul-26-2026_2107830266777829.csv (Organic Instagram Reel, 24 July 2026)
 *
 * Strict Data Integrity:
 * - All numbers are verbatim from the original export files.
 * - Metrics across reports are not aggregated or combined.
 * - Unspecified currencies are not fabricated.
 * - No unreported bookings, revenue, or conversion rates are claimed.
 */

export const konkantripCaseStudyData = {
  meta: {
    id: "konkantrip-instagram-marketing",
    category: "Digital Marketing",
    title: "Instagram Marketing for KonkanTrip Beach Resort",
    clientName: "KonkanTrip Beach Resort",
    clientLocation: "Dapoli, Maharashtra (Konkan Coast)",
    headline: "From Seasonal Campaigns to Measurable Digital Engagement",
    description:
      "An Instagram marketing project focused on promoting KonkanTrip Beach Resort through seasonal campaigns, paid social advertising, website traffic generation, and organic Reel content.",
    serviceTags: [
      "Instagram Marketing",
      "Paid Social Campaigns",
      "Website Traffic Generation",
      "Content Promotion",
      "Campaign Analytics"
    ],
    route: "/our-work/konkantrip-instagram-marketing",
    coverImage: "/images/konkantrip_resort_cover.jpg",
    reelThumbImage: "/images/konkantrip_reel_thumb.jpg",
    disclosureAuthorized: true
  },

  overview: {
    brandContext:
      "KonkanTrip Beach Resort is a seaside getaway located in Dapoli along the Konkan coastline of Maharashtra. In the competitive coastal tourism sector, establishing a reliable digital presence requires measurable engagement across distinct audience touchpoints.",
    strategicFocus:
      "FLEXUS managed Instagram promotional initiatives designed to address three distinct marketing functions: driving high-volume seasonal web traffic for festival travel, initiating direct guest messaging conversations during weekend booking windows, and maintaining organic visual storytelling of the resort's beachfront ambiance through short-form video.",
    integrityPledge:
      "This case study strictly presents the verifiable data recorded in three separate Instagram campaign export reports. Metrics from different reporting periods and objectives are analyzed individually rather than combined, ensuring transparent, traceable marketing accountability."
  },

  highlights: [
    {
      metric: "1,478",
      label: "Website Visits",
      source: "Diwali Promotion (Traffic Campaign)",
      highlightType: "primary"
    },
    {
      metric: "1,827",
      label: "Link Clicks",
      source: "Diwali Promotion (Traffic Campaign)",
      highlightType: "primary"
    },
    {
      metric: "32",
      label: "Messaging Conversations",
      source: "Get Messages Campaign (28 Feb – 2 Mar 2026)",
      highlightType: "accent"
    },
    {
      metric: "35,039",
      label: "Campaign Views",
      source: "Diwali Promotion (Traffic Campaign)",
      highlightType: "neutral"
    }
  ],

  // Campaign One — Diwali Promotion (Source: Instagram Campaign Report.xlsx)
  campaignOneDiwali: {
    campaignName: "Diwali promotion",
    sourceFile: "Instagram Campaign Report.xlsx",
    objectiveLabel: "Website Traffic Generation & Seasonal Visibility",
    reportingPeriodLabel: "Reporting dates omitted in export file",
    summary:
      "The Diwali promotion focused on seasonal awareness and visitor acquisition, directing Instagram users to the resort's website during the high-demand festival holiday period. This report contains the largest recorded views, reach, link clicks, and website visits among the provided files.",
    coreMetrics: {
      views: 35039,
      reach: 28846,
      linkClicks: 1827,
      websiteVisits: 1478,
      threeSecondPlays: 15033,
      likesAndReactions: 203,
      shares: 33,
      saves: 17,
      comments: 1,
      profileVisits: 45,
      follows: 0,
      reportedCostPerWebsiteVisit: 0.56,
      currencySpecifiedInReport: false
    },
    funnelComparison: [
      {
        metricName: "Total Campaign Views",
        value: 35039,
        percentage: 100,
        description: "Cumulative impressions recorded across Instagram feeds and stories."
      },
      {
        metricName: "Outbound Link Clicks",
        value: 1827,
        percentage: 5.2,
        description: "Direct user click interactions on the promotional campaign URL."
      },
      {
        metricName: "Recorded Website Visits",
        value: 1478,
        percentage: 4.2,
        description: "Sessions that successfully loaded the destination website page."
      }
    ],
    videoMetric: {
      label: "3-Second Video Plays",
      value: "15,033",
      description: "Recorded video watch duration indicating initial creative retention."
    },
    secondaryEngagement: {
      likes: 203,
      shares: 33,
      saves: 17,
      comments: 1,
      profileVisits: 45,
      follows: 0
    },
    integrityNotes: [
      "The source report records exactly 0 new follows for this campaign. No follower acquisition is claimed.",
      "The reported cost per website visit is 0.56. Because the source file does not state the currency, no currency symbol is assumed.",
      "Campaign reporting dates are not provided in the source spreadsheet and have not been fabricated."
    ]
  },

  // Campaign Two — Paid Messaging Campaign (Source: Post report(1).csv)
  campaignTwoMessaging: {
    title: "Turning Instagram Engagement Into Conversations",
    campaignName: "Paid Messaging Campaign",
    sourceFile: "Post report(1).csv",
    campaignObjective: "Get Messages",
    reportingPeriod: "28 February 2026 – 2 March 2026",
    reportingPeriodShort: "28 Feb – 2 Mar 2026",
    summary:
      "A concentrated 3-day paid messaging campaign structured around the 'Get Messages' objective, encouraging users to connect directly with the resort via Instagram Direct Messaging.",
    coreMetrics: {
      views: 5011,
      reach: 3982,
      messagingConversationsStarted: 32,
      likes: 26,
      shares: 8,
      saves: 8,
      comments: 0,
      follows: 4,
      amountSpent: 242.57,
      costPerMessagingConversation: 7.57,
      currencySpecifiedInReport: false
    },
    secondaryEngagement: {
      likes: 26,
      shares: 8,
      saves: 8,
      comments: 0,
      follows: 4
    },
    integrityNotes: [
      "Messaging conversations started (32) measure conversation initiation on Instagram Direct. They are distinct from qualified inquiries, confirmed bookings, or completed guest stays.",
      "Reported amount spent (242.57) and cost per messaging conversation (7.57) are recorded without currency denomination in the original export."
    ]
  },

  // Campaign Three — Organic Instagram Reel (Source: Jun-29-2026_Jul-26-2026_2107830266777829.csv)
  campaignThreeOrganicReel: {
    title: "Organic Content Performance",
    account: "konkantrip_dapoli",
    postType: "Instagram Reel",
    publishDate: "24 July 2026",
    sourceFile: "Jun-29-2026_Jul-26-2026_2107830266777829.csv",
    reportingScope: "Lifetime data for individual Reel",
    summary:
      "An organic short-form Reel published to the @konkantrip_dapoli account, highlighting coastal resort visuals without paid promotion. Evaluated independently as lifetime individual post performance.",
    coreMetrics: {
      views: 1884,
      reach: 1426,
      likes: 9,
      shares: 0,
      saves: 2,
      comments: 0,
      follows: 1
    },
    integrityNotes: [
      "Metrics reflect the lifetime organic performance of an individual Reel, as documented in the account export.",
      "These results are presented independently and are not merged with paid traffic or messaging totals."
    ]
  },

  // Section 6: Campaign Insights ("What the Data Shows")
  insights: [
    {
      number: "01",
      topic: "Website Traffic",
      title: "Measurable Traffic Generation",
      verbatimQuote:
        "The Diwali promotion report recorded 1,827 link clicks and 1,478 website visits, providing a clear example of measurable traffic-generation activity.",
      analysis:
        "Demonstrates that seasonal promotional creative on Instagram was capable of generating external web sessions at volume without relying on assumptions."
    },
    {
      number: "02",
      topic: "Direct Conversations",
      title: "Real-Time Inquiries Started",
      verbatimQuote:
        "The paid messaging campaign recorded 32 messaging conversations started during its reported period.",
      analysis:
        "Validates the 'Get Messages' campaign objective as an active channel for initiating direct, one-on-one communication with travelers over a 3-day window."
    },
    {
      number: "03",
      topic: "Organic Content",
      title: "Unpaid Video Distribution",
      verbatimQuote:
        "The individual Instagram Reel recorded 1,884 lifetime views and reached 1,426 accounts, alongside 9 likes, 2 saves, and 1 follow.",
      analysis:
        "Provides a baseline measurement of organic video distribution for a single Reel published on the @konkantrip_dapoli profile."
    }
  ]
};
