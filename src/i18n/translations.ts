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
          q: "Is monthly billing available?",
          a: "Yes. We offer monthly plans starting from €49/month, depending on the chatbot type and usage volume.",
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

      h1: "Helps to find the most suitable service for your client:",
      sub: "This demo shows  a sales assistant bot that asks a few questions, understands your client’s needs, and helps you find the most suitable service for your client.",

      chatTitle: "Sales Assistant",
      chatSub: "Construction company business example.",

      right1Title: "What it does",
      right1List: [
        "asks precise questions",
        "helps understand what the client really wants",
        "saves time for both sides",
      ] as const,

      right2Title: "Why it’s useful",
      right2Text:
        "Visitors get clarity fast — you get structured information that make sales follow-ups easy.",

      nextTitle: "Next step",
      nextText:
        "You can add client scoring, CRM integration, and phone call requests.",

      cta: "Contact",
    },
    supportBot: {
      welcome:
        "Welcome! I’m the Support Assistant demo. What can I help you with today?",
      welcomeEmbedded:
        "Hi! I’m the Support Assistant demo. What can I help you with today?",
      askPricing: "Got it — what is your pricing question about?",
      askTech: "Understood — what kind of technical issue is it?",
      askUrgency: "Thanks. How urgent is this?",
      askContact: "How would you like us to contact you?",
      askEmail: "Where should we reply? Please enter your email.",
      askPhone:
        "Got it. Please enter your phone number (include country code if possible).",
      askMessage: "Great. Please describe your issue in a few words.",
      done: "All set — here’s the ticket summary.",

      invalidEmail:
        "That email doesn’t look right. Please enter a valid email.",
      invalidPhone:
        "That doesn’t look like a valid phone number. Please try again (e.g. +370 6xx xxxxx).",

      emailPlaceholder: "your@email.com",
      phonePlaceholder: "e.g. +370 6xx xxxxx",
      messagePlaceholder: 'e.g. "I can’t log in to my account"',
      restart: "Restart demo",

      // Email draft strings
      emailSubjectPrefix: "[Support Ticket]",
      emailBodyTitle: "New support request",
      topicLabel: "Topic",
      detailsLabel: "Details",
      urgencyLabel: "Urgency",
      preferredContactLabel: "Preferred contact",
      messageLabel: "Message",
      emailLabel: "Email",
      phoneLabel: "Phone",
      notProvided: "(not provided)",
      sentFrom: "Sent from Support Assistant Bot demo.",

      topics: {
        billing: "Billing / Pricing",
        tech: "Technical problem",
        booking: "Booking / Appointment",
        general: "General question",
        other: "Something else",
      },
      priorities: {
        not_urgent: "Not urgent (just a question)",
        soon: "Soon (affects my decision)",
        urgent: "Urgent (blocking my work)",
        critical: "Critical (service is down)",
      },
      pricingSubtopics: {
        plan_change: "Changing my plan",
        invoice: "Invoice / payment issue",
        discounts: "Discounts or custom pricing",
        info: "Just need information",
        enterprise: "Enterprise / volume pricing",
      },
      techSubtopics: {
        cant_login: "Can’t log in",
        bug_error: "Website bug / error",
        slow: "Performance is slow",
        integration: "Integration/API issue",
        other_tech: "Other technical issue",
      },
      contactMethods: {
        email: "Email",
        phone: "Phone call",
      },
    },

    leadsBot: {
      welcome: "Welcome! I’m the Leads Bot demo. What are you looking for?",
      welcomeEmbedded: "Hi! I’m the Leads Bot demo. What are you looking for?",
      askBusiness: "Nice — what type of business is this?",
      askSize: "Got it. What’s your company size?",
      askTimeframe: "When do you want to start?",
      askBudget: "What budget range are you thinking?",
      askEmail: "Perfect. Where should we contact you? (enter your email)",
      askMessage: 'Optional: add a short message (or type "skip").',
      done: "Thanks! Here’s the summary of your lead.",
      invalidEmail:
        "That email doesn’t look right. Please enter a valid email.",

      emailPlaceholder: "your@email.com",
      messagePlaceholder: 'Type a short note (or "skip")',
      restart: "Restart demo",

      // message parsing
      skipKeyword: "skip",
      skipped: "skip",

      // Email draft
      emailSubjectPrefix: "[New Lead]",
      emailBodyTitle: "New lead from Leads Bot demo",
      sentFrom: "Sent from Leads Bot demo.",

      summary: {
        lookingFor: "Looking for",
        businessType: "Business type",
        companySize: "Company size",
        timeframe: "Timeframe",
        budget: "Budget",
        email: "Email",
        optionalMessage: "Optional message",
      },

      intents: {
        new_website: "New website",
        chatbot: "Chatbot",
        support_automation: "Support automation",
        exploring: "Just exploring",
      },
      businessTypes: {
        service: "Service business",
        ecommerce: "E-commerce",
        saas: "SaaS",
        other: "Other",
      },
      companySizes: {
        solo: "Solo",
        "1_5": "1–5",
        "6_20": "6–20",
        "20_plus": "20+",
      },
      timeframes: {
        researching: "Just researching",
        this_month: "This month",
        asap: "ASAP",
      },
      budgets: {
        lt_500: "< €500",
        "500_1k": "€500–1k",
        "1k_3k": "€1k–3k",
        not_sure: "Not sure",
      },
    },

    salesBot: {
      welcome: "What stage are you at with your home construction?",
      welcomeEmbedded:
        "Hi! I'm a sales assistant demo. What are you looking to achieve?",
      askTraffic: "What kind of help would be most useful for you right now?",
      askChannel: "Have you already set a budget range?",
      askCrm: "When do you realistically plan to start construction?",
      askLanguages: "What matters most to you when choosing a builder?",
      // welcome: "Welcome! I’m the Sales Assistant demo. What’s your main goal?",
      // welcomeEmbedded:"Hi! I’m the Sales Assistant demo. What’s your main goal?",
      // askTraffic: "Thanks. What’s your website traffic level?",
      // askChannel: "Where do your customers come from?",
      // askCrm: "How do you currently handle leads/support requests?",
      // askLanguages: "Do you need multiple languages?",
      askHandoff: "What’s the preferred next step for the visitor?",
      askEmail: "Great. Where should I send the recommendation? (enter email)",
      done: "All set — here’s the recommended setup.",
      invalidEmail:
        "That email doesn’t look right. Please enter a valid email.",
      emailPlaceholder: "your@email.com",
      restart: "Restart demo",
      emailSubjectPrefix: "[Recommendation]",
      emailBodyTitle: "Sales Assistant demo recommendation",
      sentFrom: "Sent from Sales Assistant demo.",

      summary: {
        goal: "Goal",
        traffic: "Traffic",
        channel: "Channel",
        crm: "CRM",
        languages: "Languages",
        handoff: "Preferred next step",
        recommendedSetup: "Recommended setup",
        replyTo: "Reply-to email",
      },

      // these are used inside buildRecommendation
      route: {
        crm: "your CRM/helpdesk",
        email: "email",
      },
      handoff: {
        book: "instant booking links",
        capture: "lead capture fallback",
      },

      recommendations: {
        reduceSupport: ({
          multiLang,
          route,
        }: {
          multiLang: boolean;
          route: string;
        }) =>
          `Support Assistant + FAQ bot. Add ${multiLang ? "multi-language routing" : "a knowledge base"} and send tickets to ${route}.`,
        automateBookings: ({ handoff }: { handoff: string }) =>
          `Booking Assistant with calendar integration + ${handoff}.`,
        increaseConversions: ({ highTraffic }: { highTraffic: boolean }) =>
          `Sales Assistant that qualifies visitors + recommends plans. ${highTraffic ? "Add A/B testing for scripts and questions." : "Start simple, then iterate."}`,
        moreLeads: ({
          route,
          highTraffic,
        }: {
          route: string;
          highTraffic: boolean;
        }) =>
          `Leads Bot that qualifies by intent, budget and timeframe, then routes to ${route}. ${highTraffic ? "Consider lead scoring + automation." : "Start with structured lead capture."}`,
      },

      // goals: {
      //   more_leads: "Get more leads",
      //   reduce_support: "Reduce support workload",
      //   increase_conversions: "Increase sales conversions",
      //   automate_bookings: "Automate bookings",
      // },

      // traffic: {
      //   low: "Low (0–500/month)",
      //   medium: "Medium (500–5k/month)",
      //   high: "High (5k+/month)",
      //   not_sure: "Not sure",
      // },

      // channels: {
      //   website_only: "Website only",
      //   website_ads: "Website + ads",
      //   website_social: "Website + social",
      //   multiple: "Multiple channels",
      // },

      // crm: {
      //   no_crm: "No CRM yet",
      //   spreadsheet: "Using a spreadsheet",
      //   have_crm: "Have a CRM (HubSpot, Pipedrive, etc.)",
      //   not_sure: "Not sure",
      // },

      // languages: {
      //   en_only: "English only",
      //   en_plus_one: "English + one more",
      //   multi: "Multiple languages",
      //   not_sure: "Not sure",
      // },

      // handoffPref: {
      //   book_call: "Book a call",
      //   demo_trial: "Start with a demo/trial",
      //   message_first: "Send a message first",
      // },
      goals: {
        more_leads: "I'm just exploring and comparing options",
        reduce_support: "I have a plot and I'm looking for solutions",
        increase_conversions: "I already have a project",
        automate_bookings: "I'm ready to start construction",
      },
      traffic: {
        low: "Project and solution consultation",
        medium: "Full home construction (turnkey)",
        high: "Specific / partial construction work",
        not_sure: "I just want to talk things through",
      },
      channels: {
        website_only: "Yes, I have a clear budget",
        website_ads: "I have an approximate range",
        website_social: "I'm still calculating",
        multiple: "I'd rather not discuss it yet",
      },
      crm: {
        no_crm: "Within the next 1–3 months",
        spreadsheet: "Later this year",
        have_crm: "Next year",
        not_sure: "I'm not sure yet",
      },
      languages: {
        en_only: "Reliability and experience",
        en_plus_one: "Price",
        multi: "Meeting deadlines",
        not_sure: "A clear, stress-free process",
      },
      handoffPref: {
        book_call: "Schedule a call",
        demo_trial: "Get an initial consultation",
        message_first: "Calculate a preliminary price",
      },
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
          title: "Pagalbos Asistentas",
          type: "Po pardavimo / Helpdesk botas",
          b1: "identifikuoja problemą, skubumą ir susisiekimo informaciją",
          b2: "sugeneruoja užklausos santrauką",
          b3: "nukreipia į el. paštą / CRM / helpdesk",
          tagline: "Paversk pokalbius į pagalbos užklausas.",
        },
        leads: {
          title: "Užklausų Asistentas",
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
          q: "Ar galima mokėti kas mėnesį?",
          a: "Taip. Siūlome mėnesinius planus nuo 39 € / mėn, priklausomai nuo chatbot’o tipo ir naudojimo apimties.",
        },
        {
          q: "Kiek kainuoja chatbotas?",
          a: "Kaina priklauso nuo sudėtingumo. Paprasti botai pigesni, o AI sprendimai reikalauja daugiau paruošimo.",
        },
      ] as const,

      // nextKicker: "Kas toliau?",
      // nextTitle: "Rask tinkamiausią chatbotą savo verslui",
      // nextText:
      //   "Kiekvienas verslas skirtingas. Geriausias chatbotas priklauso nuo tikslų, srauto ir klausimų. Atsakyk į kelis klausimus — rekomenduosiu setup’ą.",
      // nextPrimary: "Gauti rekomendaciją",
      // nextSecondary: "Gauti rekomendaciją",
      nextKicker: "",
      nextTitle: "Tai yra pavizdys kaip FAQ's gali veikti tavo svetainėje",
      nextText: "Nori pritaikyti FAQ's savo verslui?",
      nextPrimary: "Susisiek",
      nextSecondary: "Gauti rekomendaciją",
    },

    support: {
      back: "",
      h1_a: "Pokalbis, kuris veda į",
      h1_b: "  sprendimą:",
      sub: "Ši demonstracija parodo pagalbos asistentą, kuris sugeneruoja problemos užklausa, skubumą ir kontaktus — ir pateikia tau tvarkingą užklausos santrauką.",
      chatTitle: "Pagalbos Asistentas",

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
      chatTitle: "Užklausų Asistentas",
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
        "Surinkta aiški informacija leidžia greičiau susisiekti, o vartotojui tai labiau individualesnis pokalbis, o ne nuobodi forma.",

      nextTitle: "Sekantis žingsnis",
      nextText:
        "Galima pridėti klientų vertinimą (scoring), siuntimą į CRM sistemą, užklausą susisiekimui telefonu.",

      cta: "Susisiekti",
    },

    sales: {
      back: "",
      badge: "Pardavimų asistento demonstracija",

      h1: "Padeda rasti tinkamiausią paslaugą jūsų klientui:",
      sub: "Ši demonstracija imituoja pardavimų asistentą, kuris užduoda kelis klausimus, supranta jūsų kliento poreikius ir padeda tau rasti tinkamiausią paslaugą tavo klientui.",

      chatTitle: "Pardavimų Asistentas",
      chatSub: "Statybų įmones verslo pavizdys",

      right1Title: "Ką jis daro",
      right1List: [
        "užduoda tikslius klausimus",
        "padeda suprasti, ko klientas iš tikrųjų nori",
        "sutaupo laiką abiem pusėms",
      ] as const,

      right2Title: "Kodėl naudinga",
      right2Text:
        "Padeda iš karto suprasti kliento poreikius ir leidžia tęsti bendravimą be nereikalingų klausimų ir gaišaties.",

      nextTitle: "Kitas žingsnis",
      nextText:
        "Galima pridėti klientų vertinimą (scoring), siuntimą į CRM sistemą, užklausą susisiekimui telefonu.",

      cta: "Susisiekti",
    },
    supportBot: {
      welcome:
        "Sveiki! Aš esu Pagalbos Asistento demonstracija. Kuo galiu padėti?",
      welcomeEmbedded:
        "Labas! Aš esu Pagalbos asistento demonstracija. Kuo galiu padėti?",
      askPricing: "Supratau — dėl ko konkrečiai kainodara / sąskaitos?",
      askTech: "Supratau — koks tai techninis nesklandumas?",
      askUrgency: "Ačiū. Koks skubumas?",
      askContact: "Kaip norite, kad susisiektume?",
      askEmail: "Kur atsakyti? Įveskite el. paštą.",
      askPhone: "Gerai. Įveskite telefono numerį (jei įmanoma su šalies kodu).",
      askMessage: "Puiku. Trumpai aprašykite problemą.",
      done: "Viskas — štai bilieto santrauka.",

      invalidEmail:
        "Šis el. paštas atrodo neteisingas. Įveskite teisingą el. paštą.",
      invalidPhone:
        "Šis numeris atrodo neteisingas. Bandykite dar kartą (pvz. +370 6xx xxxxx).",

      emailPlaceholder: "jusu@email.com",
      phonePlaceholder: "pvz. +370 6xx xxxxx",
      messagePlaceholder: "pvz. „Negaliu prisijungti prie paskyros“",
      restart: "Pradėti iš naujo",

      emailSubjectPrefix: "[Pagalbos užklausa]",
      emailBodyTitle: "Nauja pagalbos užklausa",
      topicLabel: "Tema",
      detailsLabel: "Detalės",
      urgencyLabel: "Skubumas",
      preferredContactLabel: "Pageidaujamas kontaktas",
      messageLabel: "Žinutė",
      emailLabel: "El. paštas",
      phoneLabel: "Telefonas",
      notProvided: "(nenurodyta)",
      sentFrom: "Išsiųsta iš Pagalbos asistento demonstracijos.",

      topics: {
        billing: "Sąskaitos / Kainodara",
        tech: "Techninė problema",
        booking: "Rezervacija / Vizitas",
        general: "Bendras klausimas",
        other: "Kita",
      },
      priorities: {
        not_urgent: "Neskubu (tik klausimas)",
        soon: "Greitai (turi įtakos sprendimui)",
        urgent: "Skubu (trukdo darbui)",
        critical: "Kritiška (paslauga neveikia)",
      },
      pricingSubtopics: {
        plan_change: "Plano keitimas",
        invoice: "Sąskaita / apmokėjimas",
        discounts: "Nuolaidos arba individuali kaina",
        info: "Reikia informacijos",
        enterprise: "Enterprise / dideli kiekiai",
      },
      techSubtopics: {
        cant_login: "Negaliu prisijungti",
        bug_error: "Svetainės klaida / error",
        slow: "Viskas veikia lėtai",
        integration: "Integracija / API",
        other_tech: "Kita techninė problema",
      },
      contactMethods: {
        email: "El. paštu",
        phone: "Telefono skambučiu",
      },
    },

    leadsBot: {
      welcome:
        "Sveiki! Aš esu Klientų Kvalifikavimo boto demonstracija. Ko ieškote?",
      welcomeEmbedded:
        "Labas! Aš esu Klientų kvalifikavimo boto demonstracija. Ko ieškote?",
      askBusiness: "Puiku — koks tai verslo tipas?",
      askSize: "Supratau. Koks jūsų įmonės dydis?",
      askTimeframe: "Kada norite pradėti?",
      askBudget: "Koks biudžeto rėžis būtų priimtinas?",
      askEmail: "Puiku. Kur su jumis susisiekti? (įveskite el. paštą)",
      askMessage: "Nebūtina: pridėkite trumpą žinutę (arba įrašykite „skip“).",
      done: "Ačiū! Štai potencialaus kliento santrauka.",
      invalidEmail:
        "Šis el. paštas atrodo neteisingas. Įveskite teisingą el. paštą.",

      emailPlaceholder: "jusu@email.com",
      messagePlaceholder: "Parašykite trumpai (arba „skip“)",
      restart: "Pradėti iš naujo",

      skipKeyword: "skip",
      skipped: "skip",

      emailSubjectPrefix: "[Naujas lead’as]",
      emailBodyTitle:
        "Naujas lead’as iš Klientų kvalifikavimo boto demonstracijos",
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
    },

    salesBot: {
      welcome: "Kokiame etape dabar esate su namo statyba?",

      // welcome: "Sveiki! Aš esu Pardavimų asistento demonstracija. Ką šiuo metu norite pagerinti?",

      welcomeEmbedded:
        "Labas! Aš esu Pardavimų asistento demonstracija. Koks tikslas?",

      askTraffic: "Kokia pagalba šiuo metu būtų naudingiausia?",
      // askTraffic: "Ačiū. Koks jūsų svetainės lankomumas?",

      askChannel: "Ar jau esi nusimatęs biudžeto ribas?",
      // askChannel: "Iš kur ateina klientai?",

      askCrm: "Kada realistiškai planuoji pradėti statybas?",
      //  askCrm: "Kaip dabar tvarkote užklausas / support’ą?",

      askLanguages: "Kas tau svarbiausia renkantis statytoją?",
      // askLanguages: "Ar reikia kelių kalbų?",

      askHandoff: "Kaip norėtum tęsti?",
      //   askHandoff: "Koks geriausias kitas žingsnis lankytojui?",

      askEmail: "Puiku. Kur atsiųsti rekomendaciją? (įveskite el. paštą)",
      //  askEmail: "Puiku. Kur atsiųsti rekomendaciją? (įveskite el. paštą)",

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
        traffic: "Lankomumas",
        channel: "Kanalai",
        crm: "CRM",
        languages: "Kalbos",
        handoff: "Kitas žingsnis",
        recommendedSetup: "Rekomenduojamas setup’as",
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
          `Pagalbos asistentas + FAQ botas. Pridėkite ${multiLang ? "kelių kalbų nukreipimą" : "žinių bazę"} ir siųskite užklausas į ${route}.`,
        automateBookings: ({ handoff }: { handoff: string }) =>
          `Booking asistentas su kalendoriaus integracija + ${handoff}.`,
        increaseConversions: ({ highTraffic }: { highTraffic: boolean }) =>
          `Pardavimų asistentas, kuris kvalifikuoja lankytojus ir rekomenduoja. ${highTraffic ? "Pridėkite A/B testavimą klausimams ir skriptams." : "Pradėkite paprastai, tada iteruokite."}`,
        moreLeads: ({
          route,
          highTraffic,
        }: {
          route: string;
          highTraffic: boolean;
        }) =>
          `Klientų kvalifikavimo botas, kuris surenka intent/biudžetą/laikotarpį ir nukreipia į ${route}. ${highTraffic ? "Apsvarstykite lead scoring + automatizaciją." : "Pradėkite nuo struktūruoto lead surinkimo."}`,
      },

      //   goals: {
      //     more_leads: "Gauti daugiau užklausų",
      //     reduce_support: "Sumažinti klientų aptarnavimo krūvį",
      //     increase_conversions: "Padidinti pardavimus",
      //     automate_bookings: "Automatizuoti registracijas",
      //   },
      //   traffic: {
      //     low: "Mažas (0–500/mėn.)",
      //     medium: "Vidutinis (500–5k/mėn.)",
      //     high: "Didelis (5k+/mėn.)",
      //     not_sure: "Nežinau",
      //   },
      //   channels: {
      //     website_only: "Tik svetainė",
      //     website_ads: "Svetainė + reklamos",
      //     website_social: "Svetainė + social",
      //     multiple: "Keli kanalai",
      //   },
      //   crm: {
      //     no_crm: "Dar neturiu CRM",
      //     spreadsheet: "Naudoju Excel / lentelę",
      //     have_crm: "Turiu CRM (HubSpot, Pipedrive ir pan.)",
      //     not_sure: "Nežinau",
      //   },
      //   languages: {
      //     en_only: "Tik anglų",
      //     en_plus_one: "Anglų + dar viena",
      //     multi: "Kelios kalbos",
      //     not_sure: "Nežinau",
      //   },
      //   handoffPref: {
      //     book_call: "Rezervuoti skambutį",
      //     demo_trial: "Pradėti nuo demo / trial",
      //     message_first: "Pirma parašyti žinutę",
      //   },
      // },

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
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
