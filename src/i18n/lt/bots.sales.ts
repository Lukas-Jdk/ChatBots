// src/i18n/lt/bots.sales.ts
export const salesBot = {
  welcome: "Kokiame etape dabar esate su namo statyba?",
  welcomeEmbedded:
    "Labas! Aš esu Pardavimų asistento demonstracija. Koks tikslas?",
  askTraffic: "Kokia pagalba šiuo metu būtų naudingiausia?",
  askChannel: "Ar jau esi nusimatęs biudžeto ribas?",
  askCrm: "Kada realistiškai planuoji pradėti statybas?",
  askLanguages: "Kas tau svarbiausia renkantis statytoją?",
  askHandoff: "Kaip norėtum tęsti?",
  askEmail: "Puiku. Kur atsiųsti rekomendaciją? (įveskite el. paštą)",
  done: "Viskas — štai rekomenduojamas setup’as.",
  invalidEmail:
    "Šis el. paštas atrodo neteisingas. Įveskite teisingą el. paštą.",
  emailPlaceholder: "jusu@email.com",
  restart: "Pradėti iš naujo",

  emailSubjectPrefix: "[Rekomendacija]",
  emailBodyTitle: "Pardavimų asistento demonstracijos rekomendacija",
  sentFrom: "Išsiųsta iš Pardavimų asistento demonstracijos.",

  summary: {
    goal: "Tikslas",
    traffic: "Paslauga",
    channel: "Biudžetas",
    crm: "Laikotarpis",
    languages: "Svarbiausia",
    handoff: "Kitas žingsnis",
    recommendedSetup: "Rekomenduojamas sprendimas",
    replyTo: "Atsakymo el. paštas",
  },

  route: {
    crm: "CRM / helpdesk",
    email: "el. paštą",
  },
  handoff: {
    book: "momentinius booking link’us",
    capture: "lead surinkimą kaip fallback",
  },

  recommendations: {
    reduceSupport: ({
      multiLang,
      route,
    }: {
      multiLang: boolean;
      route: string;
    }) =>
      `Pagalbos asistentas + FAQ botas. Pridėkite ${
        multiLang ? "kelių kalbų nukreipimą" : "žinių bazę"
      } ir siųskite užklausas į ${route}.`,
    automateBookings: ({ handoff }: { handoff: string }) =>
      `Booking asistentas su kalendoriaus integracija + ${handoff}.`,
    increaseConversions: ({ highTraffic }: { highTraffic: boolean }) =>
      `Pardavimų asistentas, kuris kvalifikuoja lankytojus ir rekomenduoja. ${
        highTraffic
          ? "Pridėkite A/B testavimą klausimams ir skriptams."
          : "Pradėkite paprastai, tada iteruokite."
      }`,
    moreLeads: ({
      route,
      highTraffic,
    }: {
      route: string;
      highTraffic: boolean;
    }) =>
      `Klientų kvalifikavimo botas, kuris surenka kliento poreikius, biudžetą ir planuojamą laikotarpį bei nukreipia į ${route}. ${
        highTraffic
          ? "Apsvarstykite užklausų vertinimą ir automatizaciją."
          : "Pradėkite nuo struktūruoto užklausų surinkimo."
      }`,
  },

  goals: {
    more_leads: "Tik renkuosi ir lyginu variantus",
    reduce_support: "Turiu sklypą, ieškau sprendimų",
    increase_conversions: "Jau turiu projektą",
    automate_bookings: "Esu pasiruošęs pradėti statybas",
  },
  traffic: {
    low: "Projekto ir sprendimų konsultacija",
    medium: "Pilna namo statyba „iki raktų“",
    high: "Tik daliniai darbai",
    not_sure: "Dar tik noriu pasikalbėti",
  },
  channels: {
    website_only: "Taip, turiu aiškų biudžetą",
    website_ads: "Turiu apytikslį rėžį",
    website_social: "Dar skaičiuoju",
    multiple: "Kol kas nenoriu apie tai kalbėti",
  },
  crm: {
    no_crm: "Per artimiausius 1–3 mėnesius",
    spreadsheet: "Šiais metais",
    have_crm: "Kitais metais",
    not_sure: "Dar neaišku",
  },
  languages: {
    en_only: "Patikimumas ir patirtis",
    en_plus_one: "Kaina",
    multi: "Terminų laikymasis",
    not_sure: "Aiškus procesas be streso",
  },
  handoffPref: {
    book_call: "Rezervuoti skambutį",
    demo_trial: "Gauti pirminę konsultaciją",
    message_first: "Paskaičiuoti preliminarią kainą",
  },
} as const;
