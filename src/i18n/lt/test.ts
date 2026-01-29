// src/i18n/en/test.ts
export const test = {
  back: "Back",
  h1: "Quick Bot Finder (Demo)",
  sub: "Answer a few questions and see which chatbot setup fits your business best.",

  chatTitle: "Test Bot",
  chatSub: "Demo only: pick options → see summary → opens a pre-filled email draft.",

  right1Title: "What it does",
  right1List: ["Asks a few short questions", "Suggests a chatbot setup", "Shows a clean summary"] as const,

  right2Title: "Important",
  right2Text:
    "This is a demo. Buttons like “Book a call” don’t actually book anything — they only show how the flow would work.",

  nextTitle: "Want this for your business?",
  nextText: "I can customize the questions and connect it to email/CRM/booking so it works for real visitors.",
  cta: "Contact me",
  mailSubject: "Test Bot demo — interested",
} as const;
