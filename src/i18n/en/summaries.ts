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

  ticketSummary: {
    ariaLabel: "Ticket summary",
    title: "Ticket Summary",
    labels: {
      ticketId: "Ticket ID",
      responseTime: "Response time",
      topic: "Topic",
      details: "Details",
      urgency: "Urgency",
      contact: "Contact",
      message: "Message",
    },
    cta: "Send to support (opens email)",
    note: "Demo: opens a pre-filled email draft. In production you’d route this to inbox/helpdesk and call if needed.",
  },

  leadSummary: {
    ariaLabel: "Lead summary",
    title: "Lead Summary",
    labels: {
      fitLevel: "Fit",
      fitScore: "Score",
      reasons: "Why",
      lookingFor: "Looking for",
      businessType: "Business type",
      companySize: "Company size",
      timeframe: "Timeframe",
      budget: "Budget",
      email: "Email",
      optionalMessage: "Optional message",
      optionalMessageEmpty: "—",
    },
    fit: {
      hot: "High",
      warm: "Medium",
      cool: "Low",
    },
    reasons: {
      fast: "Short start timeframe",
      budgetHigh: "Higher budget range",
      budgetMid: "Clear budget range",
      biggerTeam: "Larger team size",
      specificNeed: "Clear need stated",
      exploring: "Still exploring (lower urgency)",
    },
    cta: "Send qualified lead (opens email)",
    note: "Demo: opens a pre-filled email draft. In production you’d send this to your CRM/inbox automatically.",
  },
  
} as const;
