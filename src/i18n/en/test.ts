// src/i18n/en/test.ts
export const test = {
  back: "Back",
  h1: "Quick Bot Finder (Demo)",
  sub: "Answer a few questions and see which chatbot setup fits your business best.",
  
  centerTitle: "Answer a few questions — we’ll suggest the best bot for your business.",
  centerSub: "This is a demo: you’ll see a summary at the end and an email draft will open (nothing is booked automatically).",

  chatTitle: "Test Bot",
  chatSub: "",

  right1Title: "What it does",
  right1List: [
    "Asks a few short questions",
    "Suggests a suitable bot setup",
    "Shows a clean summary at the end",
  ] as const,

  right2Title: "Important",
  right2Text:
    "This is a demo. Buttons like “Schedule a call” don’t book anything — they only show how the flow would work.",

  nextTitle: "Want this for your business?",
  nextText:
    "I can customize questions, logic and connect it to email/CRM/booking so it works for real visitors.",

  cta: "Contact me",
  mailSubject: "Test Bot demo — interested",
} as const;
