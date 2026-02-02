// src/i18n/en/bots.test.ts
export const testBot = {
  welcome: "Hi! I’m the Test Bot demo. What are you trying to improve?",
  welcomeEmbedded: "Hi! I’m the Test Bot demo. What are you trying to improve?",
  askTraffic: "Thanks. What’s your website traffic level?",
  askChannel: "Where do your customers come from?",
  askCrm: "How do you currently handle leads/support requests?",
  askLanguages: "Do you need multiple languages?",
  askHandoff:
    "What would you like to do next? (Demo only — this won’t actually book anything.)",
  askEmail:
    "Great — where should I send the summary? (enter your email, we’ll open a draft)",
  done: "All set — here’s the recommended setup.",
  invalidEmail: "That email doesn’t look right. Please enter a valid email.",

  emailPlaceholder: "your@email.com",
  restart: "Restart demo",

  emailSubjectPrefix: "[Test Recommendation]",
  emailBodyTitle: "Test Bot demo recommendation",
  sentFrom: "Sent from Test Bot demo.",

  summary: {
    goal: "Goal",
    traffic: "Traffic",
    channel: "Channel",
    crm: "CRM",
    languages: "Languages",
    handoff: "Preferred next step",
    recommendedSetup: "Recommended setup",
    replyTo: "Reply-to email",
  },

  route: { crm: "your CRM/helpdesk", email: "email" },
  handoff: { book: "instant booking links", capture: "lead capture fallback" },

  goals: {
    more_leads: "Get more leads",
    reduce_support: "Reduce support workload",
    increase_conversions: "Increase conversions",
    automate_bookings: "Automate bookings",
  },
  traffic: {
    low: "Low (0–500/month)",
    medium: "Medium (500–5k/month)",
    high: "High (5k+/month)",
    not_sure: "Not sure",
  },
  channels: {
    website_only: "Website only",
    website_ads: "Website + ads",
    website_social: "Website + social",
    multiple: "Multiple channels",
  },
  crm: {
    no_crm: "No CRM yet",
    spreadsheet: "Using a spreadsheet",
    have_crm: "Have a CRM (HubSpot, Pipedrive, etc.)",
    not_sure: "Not sure",
  },
  languages: {
    en_only: "English only",
    en_plus_one: "English + one more",
    multi: "Multiple languages",
    not_sure: "Not sure",
  },
  handoffPref: {
    book_call: "Schedule a call (demo)",
    demo_trial: "Get a consultation (demo)",
    message_first: "Send a message first (demo)",
  },

  recommendations: {
    reduceSupport: ({ multiLang, route }: { multiLang: boolean; route: string }) =>
      `Support Assistant + FAQ bot. Add ${
        multiLang ? "multi-language routing" : "a knowledge base"
      } and send tickets to ${route}.`,
    automateBookings: ({ handoff }: { handoff: string }) =>
      `Booking Assistant with calendar integration + ${handoff}.`,
    increaseConversions: ({ highTraffic }: { highTraffic: boolean }) =>
      `Sales Assistant that qualifies visitors + recommends plans. ${
        highTraffic ? "Add A/B testing for scripts and questions." : "Start simple, then iterate."
      }`,
    moreLeads: ({ route, highTraffic }: { route: string; highTraffic: boolean }) =>
      `Leads Bot that qualifies by intent, budget and timeframe, then routes to ${route}. ${
        highTraffic ? "Consider lead scoring + automation." : "Start with structured lead capture."
      }`,
  },
} as const;
