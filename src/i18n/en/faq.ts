// src/i18n/en/faq.ts
export const faq = {
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
    { q: "Can a chatbot work 24/7?", a: "Absolutely. Chatbots work around the clock, even when your team is offline, ensuring no inquiries are missed." },
    { q: "How long does it take to set up a chatbot?", a: "A simple FAQ or support chatbot can be ready within a few days. More advanced bots take longer but are built step by step." },
    { q: "Does the chatbot support multiple languages?", a: "Yes. Chatbots can support multiple languages and allow users to select their preferred language." },
    { q: "Can the chatbot integrate with my website?", a: "Yes. Chatbots can be embedded into most websites and integrate with email, CRM, or helpdesk tools." },
    { q: "What happens if the chatbot can’t answer a question?", a: "The chatbot can collect the question and forward it to you as a support request, ensuring nothing is lost." },
    { q: "Can I customize the chatbot flow and questions?", a: "Fully. Every chatbot is tailored to your business goals, tone, and customer journey." },
    { q: "Is monthly billing available?", a: "Yes. We offer monthly plans starting from €49/month, depending on the chatbot type and usage volume." },
    { q: "How much does a chatbot cost?", a: "Pricing depends on complexity. Simple FAQ bots are affordable, while advanced solutions require more setup." },
  ] as const,

  nextKicker: "What’s next?",
  nextTitle: "Get the right chatbot for your business",
  nextText:
    "Every business is different. The best chatbot depends on your goals, request load, and customer questions. Answer a few quick questions and I’ll recommend the best setup for you.",
  nextPrimary: "Get a chatbot recommendation",
  nextSecondary: "Try Support Assistant Demo",
} as const;
