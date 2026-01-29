// src/i18n/en/bots.sales.ts

export const salesBot = {
  welcome: "What stage are you at with your home construction?",
  welcomeEmbedded: "Hi! I’m a Sales Assistant demo. What’s your goal?",
  askTraffic: "What kind of help would be most useful for you right now?",
  askChannel: "Have you already set a budget range?",
  askCrm: "When do you realistically plan to start construction?",
  askLanguages: "What matters most to you when choosing a builder?",
  askHandoff: "What’s the preferred next step for the visitor?",
  askEmail: "Great. Where should I send the recommendation? (enter email)",
  done: "All set — here’s the recommended setup.",
  invalidEmail: "That email doesn’t look right. Please enter a valid email.",
  emailPlaceholder: "your@email.com",
  restart: "Restart demo",

  emailSubjectPrefix: "[Recommendation]",
  emailBodyTitle: "Sales Assistant demo recommendation",
  sentFrom: "Sent from Sales Assistant demo.",

  summary: {
    goal: "Goal",
    traffic: "Service",
    channel: "Budget",
    crm: "Timeframe",
    languages: "Most important",
    handoff: "Next step",
    recommendedSetup: "Recommended setup",
    replyTo: "Reply-to email",
  },

  route: {
    crm: "your CRM/helpdesk",
    email: "email",
  },
  handoff: {
    book: "instant booking links",
    capture: "lead capture fallback",
  },

  recommendations: {
    reduceSupport: ({ multiLang, route }: { multiLang: boolean; route: string }) =>
      `Support Assistant + FAQ bot. Add ${multiLang ? "multi-language routing" : "a knowledge base"} and send tickets to ${route}.`,
    automateBookings: ({ handoff }: { handoff: string }) =>
      `Booking assistant with calendar integration + ${handoff}.`,
    increaseConversions: ({ highTraffic }: { highTraffic: boolean }) =>
      `Sales assistant that qualifies visitors and recommends the right option. ${
        highTraffic ? "Add A/B testing for questions and scripts." : "Start simple, then iterate."
      }`,
    moreLeads: ({ route, highTraffic }: { route: string; highTraffic: boolean }) =>
      `Lead qualification bot that captures intent/budget/timeframe and routes to ${route}. ${
        highTraffic ? "Consider lead scoring + automation." : "Start with structured lead capture."
      }`,
  },

  goals: {
    more_leads: "I’m comparing options",
    reduce_support: "I have a plot and I’m looking for solutions",
    increase_conversions: "I already have a project",
    automate_bookings: "I’m ready to start construction",
  },
  traffic: {
    low: "Project and solution consultation",
    medium: "Full home construction (turnkey)",
    high: "Specific / partial construction work",
    not_sure: "I just want to talk it through",
  },
  channels: {
    website_only: "Yes, I have a clear budget",
    website_ads: "I have an approximate range",
    website_social: "I’m still calculating",
    multiple: "I’d rather not discuss it yet",
  },
  crm: {
    no_crm: "Within the next 1–3 months",
    spreadsheet: "Later this year",
    have_crm: "Next year",
    not_sure: "I’m not sure yet",
  },
  languages: {
    en_only: "Reliability and experience",
    en_plus_one: "Price",
    multi: "Meeting deadlines",
    not_sure: "A clear, stress-free process",
  },
  handoffPref: {
    book_call: "Schedule a call",
    demo_trial: "Get an initial consultation",
    message_first: "Calculate a preliminary price",
  },
} as const;
