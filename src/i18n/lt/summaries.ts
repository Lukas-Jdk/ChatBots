// src/i18n/en/summaries.ts
export const summaries = {
  salesSummary: {
    ariaLabel: "Sales summary",
    title: "Recommendation Summary",
    labels: {
      goal: "Goal",
      traffic: "Traffic",
      channel: "Channel",
      crm: "CRM",
      languages: "Languages",
      handoff: "Preferred next step",
      recommendedSetup: "Recommended setup",
      email: "Email",
    },
    cta: "Send setup recommendation (opens email)",
    note: "Demo: opens a pre-filled email draft. In production this could book meetings / route to CRM automatically.",
  },
} as const;
