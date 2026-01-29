// src/i18n/en/demos.ts
export const support = {
  back: "",
  badge: "Support Assistant Demo",
  h1_a: "Turn the problem into",
  h1_b: "a chat support summary:",
  sub: "This demo shows a Support Assistant chatbot that generates the issue, urgency and contact information - then provides a chat summary that is ready to be sent straight to your inbox.",
  chatTitle: "Support Assistant",
  chatSub: "Try it: pick a topic → set urgency → enter email → describe the issue.",
  whatTitle: "What it does",
  what: [
    "Collects topic, urgency, email and message.",
    "Prepares a clean support summary.",
    "Avoids repeated follow-up messages",
    "Works 24/7 on your website.",
  ] as const,
  greatTitle: "Great for",
  great: ["Service businesses", "Agencies", "Bookings", "Tech support", "Website inquiries"] as const,
  nextTitle: "Next step",
  nextText: "Want this customized for your business? I can adapt questions, tone, and routing (email/helpdesk/CRM).",
  cta: "Discuss your chatbot",
} as const;

export const leads = {
  back: "",
  badge: "Customers Qualification Demo",
  h1: "Identify potential customers",
  sub: "This demo collects key info (goal, business type, company size, timeframe, optional budget) and generates a clean potential customer summary.",
  chatTitle: "Customers Qualification Bot",
  chatSub: "Answer a few questions — see how a qualified lead is captured.",
  right1Title: "What it does",
  right1List: ["Asks 5–7 simple questions", "Collects structured lead info", "Generates a clean summary"] as const,
  right2Title: "Why it’s useful",
  right2Text: "You get fewer low-quality inquiries and more context for fast follow-ups. Visitors feel guided instead of filling a boring form.",
  nextTitle: "Next step",
  nextText: "Want this adapted to your niche? We can add scoring, route to CRM, or book a call automatically.",
  cta: "Send qualified lead",
} as const;

export const sales = {
  back: "",
  badge: "Sales Assistant Demo",
  h1: "Helps to find the most suitable service for your client:",
  sub: "This demo shows a sales assistant bot that asks a few questions, understands your client’s needs, and helps you find the most suitable service for your client.",
  chatTitle: "Sales Assistant",
  chatSub: "Construction company business example.",
  right1Title: "What it does",
  right1List: ["asks precise questions", "helps understand what the client really wants", "saves time for both sides"] as const,
  right2Title: "Why it’s useful",
  right2Text: "Visitors get clarity fast — you get structured information that make sales follow-ups easy.",
  nextTitle: "Next step",
  nextText: "You can add client scoring, CRM integration, and phone call requests.",
  cta: "Contact",
} as const;
