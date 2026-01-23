// src/components/faq/FaqAccordion.tsx
"use client";

import { useState } from "react";
import styles from "./faq.module.css";

const FAQ_ITEMS = [
  {
    q: "What is a chatbot and how does it work?",
    a: "A chatbot is an automated assistant on your website that answers questions, guides visitors, and collects information 24/7 without human involvement.",
  },
  {
    q: "What problems can a chatbot solve for my business?",
    a: "Chatbots reduce repetitive questions, prevent missed inquiries, improve response speed, and help convert visitors into leads or support tickets.",
  },
  {
    q: "Is a chatbot better than a contact form?",
    a: "Yes. A chatbot is interactive, feels more personal, and collects structured information instead of a single message that often lacks context.",
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
    a: "Yes. Chatbots can support multiple languages and even allow users to select their preferred language.",
  },
  {
    q: "Can the chatbot integrate with my website?",
    a: "Yes. Chatbots can be embedded into most websites and can integrate with email, CRM, or helpdesk tools.",
  },
  {
    q: "What happens if the chatbot can’t answer a question?",
    a: "The chatbot can collect the question and forward it to you as a support request or lead, ensuring nothing is lost.",
  },
  {
    q: "Can I customize the chatbot flow and questions?",
    a: "Fully. Every chatbot is tailored to your business goals, tone, and customer journey.",
  },
  {
    q: "How much does a chatbot cost?",
    a: "Pricing depends on complexity. Simple FAQ bots are affordable, while advanced AI-powered solutions require more setup.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={styles.faq}>
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className={styles.item}>
          <button
            className={styles.question}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item.q}</span>
            <span className={styles.icon}>{open === i ? "−" : "+"}</span>
          </button>

          {open === i && <div className={styles.answer}>{item.a}</div>}
        </div>
      ))}
    </div>
  );
}
