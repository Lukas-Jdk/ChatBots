// src/i18n/lt/bots.test.ts
export const testBot = {
  welcome: "Sveiki! Aš padesiu issirinkti jums tinkama bota jusu verslui. Koks jūsų pagrindinis tikslas?",
  welcomeEmbedded: "Labas! Aš esu Testo boto demo. Koks jūsų pagrindinis tikslas?",
  askTraffic: "Ačiū. Koks jūsų svetainės lankomumas?",
  askChannel: "Iš kur dažniausiai ateina klientai?",
  askCrm: "Kaip šiuo metu tvarkote užklausas iš klientų?",
  askLanguages: "Ar reikia kelių kalbų?",
  askHandoff: "Koks geriausias kitas žingsnis lankytojui?",
  askEmail: "Puiku — kur atsiųsti rekomendaciją? (įveskite el. paštą)",
  done: "Viskas — štai rekomenduojamas sprendimas.",
  invalidEmail: "Šis el. paštas atrodo neteisingas. Įveskite teisingą el. paštą.",
  emailPlaceholder: "jusu@email.com",
  restart: "Pradėti iš naujo",

  emailSubjectPrefix: "[Rekomendacija]",
  emailBodyTitle: "Testo boto rekomendacija (demo)",
  sentFrom: "Išsiųsta iš Testo boto demo.",

  summary: {
    goal: "Tikslas",
    traffic: "Lankomumas",
    channel: "Kanalai",
    crm: "CRM",
    languages: "Kalbos",
    handoff: "Kitas žingsnis",
    recommendedSetup: "Rekomenduojamas sprendimas",
    replyTo: "Atsakymo el. paštas",
  },

  route: { crm: "CRM / helpdesk", email: "el. paštą" },
  handoff: { book: "momentinius booking link’us", capture: "lead surinkimą kaip fallback" },

  recommendations: {
    reduceSupport: ({ multiLang, route }: { multiLang: boolean; route: string }) =>
      `Pagalbos asistentas + FAQ botas. Pridėkite ${multiLang ? "kelių kalbų nukreipimą" : "žinių bazę"} ir siųskite užklausas į ${route}.`,
    automateBookings: ({ handoff }: { handoff: string }) =>
      `Booking asistentas su kalendoriaus integracija + ${handoff}.`,
    increaseConversions: ({ highTraffic }: { highTraffic: boolean }) =>
      `Pardavimų asistentas, kuris kvalifikuoja lankytojus ir rekomenduoja. ${
        highTraffic ? "Pridėkite A/B testavimą klausimams ir skriptams." : "Pradėkite paprastai, tada iteruokite."
      }`,
    moreLeads: ({ route, highTraffic }: { route: string; highTraffic: boolean }) =>
      `Klientų kvalifikavimo botas, kuris surenka kliento poreikius, biudžetą ir planuojamą laikotarpį ir nukreipia į ${route}. ${
        highTraffic ? "Apsvarstykite užklausų vertinimą ir automatizaciją." : "Pradėkite nuo struktūruoto užklausų surinkimo.."
      }`,
  },

  goals: {
    more_leads: "Gauti daugiau užklausų",
    reduce_support: "Sumažinti klientų aptarnavimo krūvį",
    increase_conversions: "Padidinti pardavimus",
    automate_bookings: "Automatizuoti registracijas",
  },
  traffic: {
    low: "Mažas (0–500/mėn.)",
    medium: "Vidutinis (500–5k/mėn.)",
    high: "Didelis (5k+/mėn.)",
    not_sure: "Nežinau",
  },
  channels: {
    website_only: "Tik svetainė",
    website_ads: "Svetainė + reklamos",
    website_social: "Svetainė + social",
    multiple: "Keli kanalai",
  },
  crm: {
    no_crm: "El. paštas, žinutės, „kur papuola",
    spreadsheet: "Naudoju Excel / lentelę",
    have_crm: "Turiu CRM (HubSpot, Pipedrive ir pan.)",
    not_sure: "Nežinau",
  },
  languages: {
    en_only: "Tik anglų",
    en_plus_one: "Anglų + dar viena",
    multi: "Kelios kalbos",
    not_sure: "Nežinau",
  },
  handoffPref: {
    book_call: "Rezervuoti skambutį",
    demo_trial: "Pradėti nuo demo / trial",
    message_first: "Parašyti žinutę",
  },
} as const;
