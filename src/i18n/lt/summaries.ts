// src/i18n/lt/summaries.ts
// ✅ Naujas failas. LT tekstų iš kitų failų nekeičiu – čia tik pridedu trūkstamus vertimus.

export const summaries = {
  salesSummary: {
    ariaLabel: "Pardavimų santrauka",
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
    note:
      "Demo: atidaro paruoštą el. laiško juodraštį. Produkcijoje tai galėtų rezervuoti laiką / siųsti į CRM automatiškai.",
  },

  ticketSummary: {
    ariaLabel: "Užklausos santrauka",
    title: "Užklausos santrauka",
    labels: {
      topic: "Tema",
      details: "Detalės",
      urgency: "Skubumas",
      contact: "Kontaktas",
      message: "Žinutė",
    },
    cta: "Siųsti į pagalbą (atidarys el. paštą)",
    note:
      "Demo: atidaro paruoštą el. laiško juodraštį. Produkcijoje tai keliautų į inbox/helpdesk ir prireikus inicijuotų skambutį.",
  },

  leadSummary: {
    ariaLabel: "Potencialaus kliento santrauka",
    title: "Potencialaus kliento santrauka",
    labels: {
      lookingFor: "Ko ieško",
      businessType: "Verslo tipas",
      companySize: "Įmonės dydis",
      timeframe: "Laikotarpis",
      budget: "Biudžetas",
      email: "El. paštas",
      optionalMessage: "Papildoma žinutė",
    },
    cta: "Siųsti užklausą (atidarys el. paštą)",
    note:
      "Demo: atidaro paruoštą el. laiško juodraštį. Produkcijoje tai būtų siunčiama į CRM/inbox automatiškai.",
  },
} as const;
