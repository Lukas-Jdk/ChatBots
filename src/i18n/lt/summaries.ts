// src/i18n/lt/summaries.ts
export const summaries = {
  salesSummary: {
    ariaLabel: "Sales summary",
    title: "Rekomendacijos santrauka",
    labels: {
      goal: "Tikslas",
      traffic: "Paslauga",
      channel: "Biudžetas",
      crm: "Laikotarpis",
      languages: "Svarbiausia",
      handoff: "Kitas žingsnis",
      recommendedSetup: "Rekomenduojamas sprendimas",
      email: "El. paštas",
    },
    cta: "Siųsti rekomendaciją (atidarys el. paštą)",
    note: "Demo: atidaro paruoštą el. laišką. Produkcijoje galima automatiškai nukreipti į CRM / rezervavimą.",
  },

  ticketSummary: {
    ariaLabel: "Ticket summary",
    title: "Bilieto santrauka",
    labels: {
      ticketId: "Bilieto ID",
      responseTime: "Atsakymo laikas",
      topic: "Tema",
      details: "Detalės",
      urgency: "Skubumas",
      contact: "Kontaktas",
      message: "Žinutė",
    },
    cta: "Siųsti į pagalbą (atidarys el. paštą)",
    note: "Demo: atidaro paruoštą el. laišką. Produkcijoje galima nukreipti į inbox/helpdesk ir, jei reikia, paskambinti.",
  },

  leadSummary: {
    ariaLabel: "Lead summary",
    title: "Potencialaus kliento santrauka",
    labels: {
      fitLevel: "Atitikimas",
      fitScore: "Įvertis",
      reasons: "Kodėl",
      lookingFor: "Ko ieško",
      businessType: "Verslo tipas",
      companySize: "Įmonės dydis",
      timeframe: "Laikotarpis",
      budget: "Biudžetas",
      email: "El. paštas",
      optionalMessage: "Papildoma žinutė",
      optionalMessageEmpty: "—",
    },
    fit: {
      hot: "Karšta",
      warm: "Šilta",
      cool: "Šalta",
    },
    reasons: {
      fast: "Trumpas starto laikotarpis",
      budgetHigh: "Didesnis biudžeto rėžis",
      budgetMid: "Aiškesnis biudžeto rėžis",
      biggerTeam: "Didesnis komandos dydis",
      specificNeed: "Aiškus poreikis",
      exploring: "Dar tik domisi (mažesnis skubumas)",
    },
    cta: "Siųsti užklausą (atidarys el. paštą)",
    note: "Demo: atidaro paruoštą el. laišką. Produkcijoje galima automatiškai siųsti į CRM / inbox.",
  },
} as const;
