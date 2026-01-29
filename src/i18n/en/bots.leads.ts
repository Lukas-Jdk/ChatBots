export const leadsBot = {
  welcome: "Welcome! I’m the Leads Bot demo. What are you looking for?",
  welcomeEmbedded: "Hi! I’m the Leads Bot demo. What are you looking for?",
  askBusiness: "Nice — what type of business is this?",
  askSize: "Got it. What’s your company size?",
  askTimeframe: "When do you want to start?",
  askBudget: "What budget range are you thinking?",
  askEmail: "Perfect. Where should we contact you? (enter your email)",
  askMessage: 'Optional: add a short message (or type "skip").',
  done: "Thanks! Here’s the summary of your lead.",
  invalidEmail: "That email doesn’t look right. Please enter a valid email.",

  emailPlaceholder: "your@email.com",
  messagePlaceholder: 'Type a short note (or "skip")',
  restart: "Restart demo",

  skipKeyword: "skip",
  skipped: "skip",

  emailSubjectPrefix: "[New Lead]",
  emailBodyTitle: "New lead from Leads Bot demo",
  sentFrom: "Sent from Leads Bot demo.",

  summary: {
    lookingFor: "Looking for",
    businessType: "Business type",
    companySize: "Company size",
    timeframe: "Timeframe",
    budget: "Budget",
    email: "Email",
    optionalMessage: "Optional message",
  },

  intents: {
    new_website: "New website",
    chatbot: "Chatbot",
    support_automation: "Support automation",
    exploring: "Just exploring",
  },
  businessTypes: {
    service: "Service business",
    ecommerce: "E-commerce",
    saas: "SaaS",
    other: "Other",
  },
  companySizes: {
    solo: "Solo",
    "1_5": "1–5",
    "6_20": "6–20",
    "20_plus": "20+",
  },
  timeframes: {
    researching: "Just researching",
    this_month: "This month",
    asap: "ASAP",
  },
  budgets: {
    lt_500: "< €500",
    "500_1k": "€500–1k",
    "1k_3k": "€1k–3k",
    not_sure: "Not sure",
  },
} as const;
