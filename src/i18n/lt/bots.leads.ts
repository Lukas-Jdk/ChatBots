// src/i18n/lt/bots.leads.ts
export const leadsBot = {
  welcome: "Sveiki! Aš esu Klientų Kvalifikavimo boto demonstracija. Ko ieškote?",
  welcomeEmbedded: "Labas! Aš esu Klientų kvalifikavimo boto demonstracija. Ko ieškote?",
  askBusiness: "Puiku — koks tai verslo tipas?",
  askSize: "Supratau. Koks jūsų įmonės dydis?",
  askTimeframe: "Kada norite pradėti?",
  askBudget: "Koks biudžeto rėžis būtų priimtinas?",
  askEmail: "Puiku. Kur su jumis susisiekti? (įveskite el. paštą)",
  askMessage: "Nebūtina: pridėkite trumpą žinutę.",
  done: "Ačiū! Štai potencialaus kliento santrauka.",
  invalidEmail: "Šis el. paštas atrodo neteisingas. Įveskite teisingą el. paštą.",

  emailPlaceholder: "jusu@email.com",
  messagePlaceholder: "Parašykite trumpai",
  restart: "Pradėti iš naujo",

  skipKeyword: "skip",
  skipped: "skip",

  emailSubjectPrefix: "[Naujas lead’as]",
  emailBodyTitle: "Naujas lead’as iš Klientų kvalifikavimo boto demonstracijos",
  sentFrom: "Išsiųsta iš Klientų kvalifikavimo boto demonstracijos.",

  summary: {
    lookingFor: "Ko ieško",
    businessType: "Verslo tipas",
    companySize: "Įmonės dydis",
    timeframe: "Laikotarpis",
    budget: "Biudžetas",
    email: "El. paštas",
    optionalMessage: "Papildoma žinutė",
  },

  intents: {
    new_website: "Nauja svetainė",
    chatbot: "Chatbotas",
    support_automation: "Pagalbos automatizavimas",
    exploring: "Tik domiuosi",
  },
  businessTypes: {
    service: "Paslaugų verslas",
    ecommerce: "El. parduotuvė",
    saas: "SaaS",
    other: "Kita",
  },
  companySizes: {
    solo: "Vienas",
    "1_5": "1–5",
    "6_20": "6–20",
    "20_plus": "20+",
  },
  timeframes: {
    researching: "Tyrinėju",
    this_month: "Šį mėnesį",
    asap: "Kuo greičiau",
  },
  budgets: {
    lt_500: "< €500",
    "500_1k": "€500–1k",
    "1k_3k": "€1k–3k",
    not_sure: "Nežinau",
  },
} as const;
