// src/i18n/translations.ts

export type Lang = "en" | "lt";

export const translations = {
  en: {
    nav: {
      home: "Home",
      faq: "FAQ",
      support: "Support",
      leads: "Customers Qualification",
      sales: "Sales",
    },

    home: {
      h1_a: "Power Up Your Business with",
      h1_b: "Smart Chatbots!",
      sub: "Automate conversations & boost efficiency.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Why Chatbots?",
      learnMore: "Learn More →",

      cards: {
        faq: {
          title: "FAQ Bot",
          type: "Self-Service / Knowledge Base",
          b1: "answers common customer questions",
          b2: "explains your product or service",
          b3: "reduces support workload",
          tagline: "Instant answers to common questions.",
        },
        support: {
          title: "Support Assistant",
          type: "Post-sale / Helpdesk Bot",
          b1: "identifies issue, urgency and contact information",
          b2: "creates a customer request summary",
          b3: "routes to inbox/helpdesk/CRM",
          tagline: "Turns chats into support summaries.",
        },
        leads: {
          title: "Customers Qualification Bot",
          type: "Customers Qualification",
          b1: "asks visitors smart questions",
          b2: "collects contact information automatically",
          b3: "sends qualified customers to your inbox",
          tagline: "Turns visitors into potential customers.",
        },
        sales: {
          title: "Sales Assistant",
          type: "Pre sale + Human take over",
          b1: "helps choose the right bot for your business",
          b2: "suggests suitable contact actions (demo, call, email)",
          b3: "optionally connects customer to a human",
          tagline: "Turn conversations into demos & sales calls.",
        },
      },

      whyTitle: "Why Choose Our Chatbots?",
      why1: {
        title: "24/7 Availability",
        text: "Always ready to assist your visitors.",
      },
      why2: {
        title: "Increase Efficiency",
        text: "Reduce workload & speed up responses.",
      },
      why3: {
        title: "Boost Your Sales",
        text: "Capture more potential customers.",
      },

      contactTitle: "Want a chatbot like this for your business?",
      contactText:
        "I design and build custom chatbots for real business' needs — from FAQ and support to potential customers qualification.",
      contactPrimary: "Contact Me",
      contactSecondary: "View My Portfolio",
      footer: "Chatbot demos.",
    },

    faq: {
      h1: "FAQ – Chatbots Explained",
      sub: "Common questions about chatbots, answered simply.",

      items: [
        {
          q: "What is a chatbot and how does it work?",
          a: "A chatbot is an automated assistant on your website that answers questions, guides visitors, and collects information 24/7 without human involvement.",
        },
        {
          q: "What problems can a chatbot solve for my business?",
          a: "Chatbots reduce repetitive questions, prevent missed inquiries, improve response speed, create request summaries and help convert visitors into potential customers.",
        },
        {
          q: "Is chatbot better than a contact form?",
          a: "Often yes. A chatbot is interactive, feels more personal, and collects structured information instead of a single message that often lacks context.",
        },
        {
          q: "Can a chatbot work 24/7?",
          a: "Absolutely. Chatbots work around the clock, even when your team is offline, ensuring no inquiries are missed.",
        },
        {
          q: "How long does it take to set up a chatbot?",
          a: "A simple FAQ or support chatbot can be ready within a few days. More advanced bots take longer but are built step by step.",
        },
        {
          q: "Does the chatbot support multiple languages?",
          a: "Yes. Chatbots can support multiple languages and allow users to select their preferred language.",
        },
        {
          q: "Can the chatbot integrate with my website?",
          a: "Yes. Chatbots can be embedded into most websites and integrate with email, CRM, or helpdesk tools.",
        },
        {
          q: "What happens if the chatbot can’t answer a question?",
          a: "The chatbot can collect the question and forward it to you as a support request, ensuring nothing is lost.",
        },
        {
          q: "Can I customize the chatbot flow and questions?",
          a: "Fully. Every chatbot is tailored to your business goals, tone, and customer journey.",
        },
        {
          q: "How much does a chatbot cost?",
          a: "Pricing depends on complexity. Simple FAQ bots are affordable, while advanced solutions require more setup.",
        },
      ] as const,

      nextKicker: "What’s next?",
      nextTitle: "Get the right chatbot for your business",
      nextText:
        "Every business is different. The best chatbot depends on your goals, request load, and customer questions. Answer a few quick questions and I’ll recommend the best setup for you.",
      nextPrimary: "Get a chatbot recommendation",
      nextSecondary: "Try Support Assistant Demo",
     
    },

    support: {
      back: "",
      badge: "Support Assistant Demo",

      h1_a: "Turn the problem into  ",
      h1_b: "a chat support summary:",

      sub: "This demo shows a Support Assistant chatbot that generates the issue, urgency and contact information - then provides a chat summary that is ready to be sent straight to your inbox.",

      chatTitle: "Support Assistant",
      chatSub:
        "Try it: pick a topic → set urgency → enter email → describe the issue.",

      

      whatTitle: "What it does",
      what: [
        "Collects topic, urgency, email and message.",
        "Prepares a clean support summary.",
        "Avoids repeated follow-up messages",
        "Works 24/7 on your website.",
      ] as const,

      greatTitle: "Great for",
      great: [
        "Service businesses",
        "Agencies",
        "Bookings",
        "Tech support",
        "Website inquiries",
      ] as const,

      nextTitle: "Next step",
      nextText:
        "Want this customized for your business? I can adapt questions, tone, and routing (email/helpdesk/CRM).",
      cta: "Discuss your chatbot",
     
    },

    leads: {
      back: "",
      badge: "Customers Qualification Demo",

      h1: "Identify potential customers",
      sub: "This demo collects key info (goal, business type, company size, timeframe, optional budget) and generates a clean potential customer summary.",

      chatTitle: "Customers Qualification Bot",
      chatSub: "Answer a few questions — see how a qualified lead is captured.",

      

      right1Title: "What it does",
      right1List: [
        "Asks 5–7 simple questions",
        "Collects structured lead info",
        "Generates a clean summary",
      ] as const,

      right2Title: "Why it’s useful",
      right2Text:
        "You get fewer low-quality inquiries and more context for fast follow-ups. Visitors feel guided instead of filling a boring form.",

      nextTitle: "Next step",
      nextText:
        "Want this adapted to your niche? We can add scoring, route to CRM, or book a call automatically.",

      cta: "Send qualified lead",
    
    },

    sales: {
      back: "",
      badge: "Sales Assistant Demo",

      h1: "Identifies the right chatbot setup",
      sub: "This demo helps visitors pick the best chatbot strategy based on goals, requests load, tools and language needs — then generates a recommendation summary.",

      chatTitle: "Sales Assistant",
      chatSub: "I’ll help you figure out which chatbot setup makes sense.",

      

      right1Title: "What it does",
      right1List: [
        "Asks goals + traffic + channels",
        "Checks tools & languages",
        "Recommends the best setup",
      ] as const,

      right2Title: "Why it’s useful",
      right2Text:
        "Visitors get clarity fast — you get structured information that make sales follow-ups easy.",

      nextTitle: "Next step",
      nextText:
        "Want this tailored to your business structure? We can adjust questions, add scoring, and integrate booking/CRM.",

      cta: "Discuss your sales assistant",
    
    },
  },

  lt: {
    nav: {
      home: "Pagrindinis",
      faq: "FAQ's",
      support: "Pagalbos Botas",
      leads: "Klientų Kvalifikavimas",
      sales: "Pardavimai",
    },

    home: {
      h1_a: "Sustiprink savo verslą su",
      h1_b: "išmaniais chatbotais!",
      sub: "Automatizuok pokalbius ir sumažink sprendimo laiką.",
      
     
      learnMore: "Sužinoti daugiau →",

      cards: {
        faq: {
          title: "FAQ's Botas",
          type: "Savitarna / Žinių bazė",
          b1: "atsako į dažniausius klausimus",
          b2: "paaiškina produktą ar paslaugą",
          b3: "sumažina pagalbos užklausas",
          tagline: "Momentiniai atsakymai į dažnus klausimus.",
        },
        support: {
          title: "Pagalbos asistentas",
          type: "Po pardavimo / Helpdesk botas",
          b1: "identifikuoja problemą, skubumą ir susisiekimo informaciją",
          b2: "sugeneruoja užklausos santrauką",
          b3: "nukreipia į el. paštą / CRM / helpdesk",
          tagline: "Paversk pokalbius į pagalbos užklausas.",
        },
        leads: {
          title: "Užklausų asistentas",
          type: "Klientų kvalifikavimas",
          b1: "užduoda aiškius klausimus",
          b2: "surenka susisiekimo informaciją automatiškai",
          b3: "gauni kvalifikuotų klientų užklausas tiesiai į savo inbox",
          tagline: "Surask savo potencialius klientus.",
        },
        sales: {
          title: "Pardavimų asistentas",
          type: "Prieš pardavimą + susisiekimas su personalu",
          b1: "padeda pasirinkti tinkamiausią chatbota savo verslui",
          b2: "rekomenduoja tinkama susisiekimo būdą (skambutis/el. paštas)",
          b3: "jei reikia — sujungia su žmogumi",
          tagline: "Nuo klausimo iki pardavimo.",
        },
      },

      whyTitle: "Kodėl rinktis mūsų chatbotus?",
      why1: {
        title: "24/7 prieinamumas",
        text: "Visada pasiruošę padėti lankytojams.",
      },
      why2: {
        title: "Didesnis efektyvumas",
        text: "Mažiau rankinio darbo, greitesni atsakymai.",
      },
      why3: {
        title: "Daugiau pardavimų",
        text: "Greičiau ir lengviau pasiek savo potiancialius klientus.",
      },

      contactTitle: "Nori tokio chatboto savo verslui?",
      contactText:
        "Kuriu ir pritaikau chatbotus skirtingiems verslo poreikiams — nuo FAQ's ir pagalbos iki potencialių klientų.",
      contactPrimary: "Parašyk man",
      contactSecondary: "Peržiūrėti portfolio",
      footer: "Chatbot demonstracijos.",
    },

    faq: {
      h1: "FAQ's – Chatbotai",
      sub: "Dažniausi klausimai apie chatbotus — aiškiai ir trumpai.",

      items: [
        {
          q: "Kas yra chatbotas ir kaip jis veikia?",
          a: "Chatbotas yra automatinis asistentas tavo svetainėje, kuris atsako į klausimus, nukreipia lankytojus ir surenka informaciją 24/7.",
        },
        {
          q: "Kaip chatbotas pagreitina klientų aptarnavimą?",
          a: "Chatbotai sumažina pasikartojančius klausimus, neleidžia praleisti užklausų, pagreitina atsakymus ir padeda paversti užklausas į potencialius klientus.",
        },
        {
          q: "Ar chatbotas geriau nei kontaktų forma?",
          a: "Dažnai taip — chatbotas yra interaktyvus ir renka struktūruotą informaciją, o ne vieną žinutę be konteksto.",
        },
        {
          q: "Ar chatbotas gali veikti 24/7?",
          a: "Taip. Jis veikia visą parą, net kai tavo komanda nepasiekiama.",
        },
        {
          q: "Kiek laiko užtrunka sukurti chatbotą?",
          a: "Paprastas FAQ's ar pagalbos botas gali būti paruoštas per kelias dienas. Sudėtingesni sprendimai kuriami ilgiau etapais.",
        },
        {
          q: "Ar chatbotas palaiko kelias kalbas?",
          a: "Taip. Galima palaikyti kelias kalbas ir leisti vartotojui pasirinkti kalbą.",
        },
        {
          q: "Ar chatbotą galima integruoti į mano svetainę?",
          a: "Taip. Botai įdedami į daugumą svetainių ir gali integruotis su el. paštu, CRM ar helpdesk įrankiais.",
        },
        {
          q: "Kas jei chatbotas negali atsakyti?",
          a: "Jei chatbotas negali atsakyti, jis gali nukreipti į žmogų arba pateikti alternatyvų.",
        },
        {
          q: "Ar galima pritaikyti klausimus ir pokalbio eigą?",
          a: "Taip. Kiekvienas botas pritaikomas pagal jūsų verslo poreikius ir norimą aptarnavimo lygį.",
        },
        {
          q: "Kiek kainuoja chatbotas?",
          a: "Kaina priklauso nuo sudėtingumo. Paprasti botai pigesni, o AI sprendimai reikalauja daugiau paruošimo.",
        },
      ] as const,

      nextKicker: "Kas toliau?",
      nextTitle: "Rask tinkamiausią chatbotą savo verslui",
      nextText:
        "Kiekvienas verslas skirtingas. Geriausias chatbotas priklauso nuo tikslų, srauto ir klausimų. Atsakyk į kelis klausimus — rekomenduosiu setup’ą.",
      nextPrimary: "Gauti rekomendaciją",
      nextSecondary: "Gauti rekomendaciją",
    },

    support: {
      back: "",
      h1_a: "Paversk pokalbius į",
      h1_b: " pagalbos ",
      sub: "Ši demonstracija parodo pagalbos asistentą, kuris surenka problemos užklausa, skubumą ir kontaktus — ir sugeneruoja tvarkingą bilieto santrauką.",
      chatTitle: "Pagalbos asistentas",
      

      

      whatTitle: "Ką jis daro",
      what: [
        "Sugeneruoja problemą, problemos skubumą, susisiekimo informaciją",
        "Paruošia tvarkingą užklausos santrauką.",
        "Išvengia pasikartojančių klausimų.",
        "Veikia 24/7 tavo svetainėje.",
      ] as const,

      greatTitle: "Tinka",
      great: [
        "Paslaugų verslams",
        "Agentūroms",
        "Rezervacijoms",
        "Techninei pagalbai",
        "Svetainės užklausoms",
      ] as const,

      nextTitle: "Sekantis žingsnis",
      nextText:
        "Nori pritaikyti šį bota savo verslui? Galiu pritaikyti klausimus, toną ir nukreipimą (el. paštas/helpdesk/CRM).",

      cta: "Susisiekti",
      mini: "Tipinė schema: tema + prioritetas + kontaktas → bilieto santrauka. AI galima pridėti vėliau.",

     
    },

    leads: {
      back: "",
      badge: "Leads demonstracija",
      h1: "Pagreitink potencialių klientų paiešką:",
      sub: "Šis botas generuoja potencialių klientų sąrašą, remdamasis jų atsakymais į jūsų klausimus. Klausimai sugeneruojami pagal jūsų verslo poreikius, įmonės dydį, biudžetą ir pardavimo tikslus.",
      chatTitle: "Užklausų asistentas",
      chatSub:
        "Atsakyk į kelis klausimus ir pamatyk kaip sugeneruojama potencialaus kliento informacija.",
      right1Title: "Ką jis daro",
      right1List: [
        "užduoda konkrečius pritaikytus tavo verslui klausimus",
        "surenka struktūruotą kliento informaciją",
        "sugeneruoja tavo potencialaus kliento sarašą",
      ] as const,

      right2Title: "Kodėl naudinga",
      right2Text:
        "Mažiau neaiškių užklausų ir daugiau konteksto greitam follow-up’ui. Lankytojui tai atrodo kaip vedimas, o ne forma.",

      nextTitle: "Kitas žingsnis",
      nextText:
        "Galima pridėti scoring’ą, siuntimą į CRM ar automatinį skambučio booking’ą.",

      cta: "Siųsti kvalifikuotą lead’ą",
    
    },

    sales: {
      back: "",
      badge: "Pardavimų asistento demonstracija",

      h1: "Parink tinkamiausią chatbotų setup’ą",
      sub: "Ši demonstracija padeda parinkti chatbotų strategiją pagal tikslus, srautą, įrankius ir kalbas — ir sugeneruoja rekomendacijos santrauką.",

      chatTitle: "Pardavimų asistentas",
      chatSub: "Padėsiu suprasti, koks setup’as tau labiausiai tinka.",

    

      right1Title: "Ką jis daro",
      right1List: [
        "Klausia tikslų + srauto + kanalų",
        "Patikrina įrankius ir kalbas",
        "Pateikia rekomendaciją",
      ] as const,

      right2Title: "Kodėl naudinga",
      right2Text:
        "Lankytojai greitai gauna aiškumą — o tu gauni struktūruotą info, kad sales follow-up būtų lengvas.",

      nextTitle: "Kitas žingsnis",
      nextText:
        "Galim pritaikyti klausimus tavo nišai, pridėti scoring’ą ir integruoti booking/CRM.",

      cta: "Aptarti pardavimų asistentą",
     
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
