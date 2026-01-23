// src/components/support-bot/SupportBot.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ChatMessage, { type Message } from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickReplies from "./QuickReplies";
import TicketSummary from "./TicketSummary";

import {
  SUPPORT_PRIORITIES,
  SUPPORT_TOPICS,
  PRICING_SUBTOPICS,
  TECH_SUBTOPICS,
  TECH_CONTEXT,
  COMPANY_SIZE,
  CONTACT_METHOD,
} from "@/data/supportFlow";

import styles from "./supportBot.module.css";

type Step =
  | "topic"
  | "pricing_subtopic"
  | "tech_subtopic"
  | "tech_context"
  | "company_size"
  | "priority"
  | "contact_method"
  | "email"
  | "message"
  | "done";

type Mode = "embedded" | "page";

export default function SupportBot({ mode = "page" }: { mode?: Mode }) {
  const [step, setStep] = useState<Step>("topic");

  const [topic, setTopic] = useState("");
  const [subtopic, setSubtopic] = useState("");
  const [techContext, setTechContext] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [priority, setPriority] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "m1",
      role: "bot",
      text:
        mode === "embedded"
          ? "Hi! I’m the Support Assistant demo. What can I help you with today?"
          : "Welcome! I’m the Support Assistant demo. What can I help you with today?",
    },
  ]);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, step]);

  const topicOptions = useMemo(() => [...SUPPORT_TOPICS], []);
  const priorityOptions = useMemo(() => [...SUPPORT_PRIORITIES], []);
  const pricingOptions = useMemo(() => [...PRICING_SUBTOPICS], []);
  const techOptions = useMemo(() => [...TECH_SUBTOPICS], []);
  const techContextOptions = useMemo(() => [...TECH_CONTEXT], []);
  const companySizeOptions = useMemo(() => [...COMPANY_SIZE], []);
  const contactMethodOptions = useMemo(() => [...CONTACT_METHOD], []);

  function push(role: "bot" | "user", text: string) {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, role, text },
    ]);
  }

  // 1) topic
  function pickTopic(v: string) {
    setTopic(v);
    setSubtopic("");
    setTechContext("");
    setCompanySize("");
    setPriority("");
    setContactMethod("");
    setEmail("");
    setMessage("");

    push("user", v);

    if (v === "Billing / Pricing") {
      push("bot", "Got it — what is your pricing question about?");
      setStep("pricing_subtopic");
      return;
    }

    if (v === "Technical problem") {
      push("bot", "Understood — what kind of technical issue is it?");
      setStep("tech_subtopic");
      return;
    }

    // For other topics, still add one extra step to make demo richer
    push("bot", "Thanks — what best describes your business size?");
    setStep("company_size");
  }

  // 2a) pricing subtopic -> company size
  function pickPricingSubtopic(v: string) {
    setSubtopic(v);
    push("user", v);

    push("bot", "Thanks — what best describes your business size?");
    setStep("company_size");
  }

  // 2b) tech subtopic -> tech context
  function pickTechSubtopic(v: string) {
    setSubtopic(v);
    push("user", v);

    push("bot", "Thanks — where does this happen most often?");
    setStep("tech_context");
  }

  // 3) tech context -> company size
  function pickTechContext(v: string) {
    setTechContext(v);
    push("user", v);

    push("bot", "Got it — what best describes your business size?");
    setStep("company_size");
  }

  // 4) company size -> urgency
  function pickCompanySize(v: string) {
    setCompanySize(v);
    push("user", v);

    push("bot", "Thanks. How urgent is this?");
    setStep("priority");
  }

  // 5) urgency -> contact method
  function pickPriority(v: string) {
    setPriority(v);
    push("user", v);

    push(
      "bot",
      "How would you like us to reply? (Demo note: we’ll collect email either way.)"
    );
    setStep("contact_method");
  }

  // 6) contact method -> email
  function pickContactMethod(v: string) {
    setContactMethod(v);
    push("user", v);

    push("bot", "Where should we reply? Please enter your email.");
    setStep("email");
  }

  // 7) email -> message
  function submitEmail(v: string) {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (!ok) {
      push("bot", "That email doesn’t look right. Please enter a valid email.");
      return;
    }
    setEmail(v);
    push("user", v);

    push("bot", "Great. Please describe your issue in a few words.");
    setStep("message");
  }

  // 8) message -> done
  function submitMessage(v: string) {
    setMessage(v);
    push("user", v);

    push("bot", "All set — here’s the ticket summary.");
    setStep("done");
  }

  function openEmailDraft() {
    const to = "lukas.juodeikis.dev@gmail.com";

    const subjectParts = [
      "[Support Ticket]",
      topic,
      subtopic ? `— ${subtopic}` : "",
      priority ? `— ${priority}` : "",
    ].filter(Boolean);

    const subject = subjectParts.join(" ");

    const body =
      `New support request\n\n` +
      `Topic: ${topic}\n` +
      (subtopic ? `Details: ${subtopic}\n` : "") +
      (techContext ? `Context: ${techContext}\n` : "") +
      (companySize ? `Company size: ${companySize}\n` : "") +
      `Urgency: ${priority}\n` +
      (contactMethod ? `Preferred contact: ${contactMethod}\n` : "") +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n\n` +
      `---\nSent from Support Assistant Bot demo.`;

    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function reset() {
    setStep("topic");
    setTopic("");
    setSubtopic("");
    setTechContext("");
    setCompanySize("");
    setPriority("");
    setContactMethod("");
    setEmail("");
    setMessage("");

    setMessages([
      {
        id: "m1",
        role: "bot",
        text: "Hi! I’m the Support Assistant demo. What can I help you with today?",
      },
    ]);
  }

  return (
    <div className={styles.botWrap} data-mode={mode}>
      <div className={styles.chatList} ref={listRef}>
        {messages.map((m) => (
          <ChatMessage key={m.id} m={m} />
        ))}

        {step === "topic" && (
          <div className={styles.botTools}>
            <QuickReplies variant="topic" options={topicOptions as unknown as string[]} onPick={pickTopic} />
          </div>
        )}

        {step === "pricing_subtopic" && (
          <div className={styles.botTools}>
            <QuickReplies variant="pricing" options={pricingOptions as unknown as string[]} onPick={pickPricingSubtopic} />
          </div>
        )}

        {step === "tech_subtopic" && (
          <div className={styles.botTools}>
            <QuickReplies variant="tech" options={techOptions as unknown as string[]} onPick={pickTechSubtopic} />
          </div>
        )}

        {step === "tech_context" && (
          <div className={styles.botTools}>
            <QuickReplies
              variant="tech"
              options={techContextOptions as unknown as string[]}
              onPick={pickTechContext}
            />
          </div>
        )}

        {step === "company_size" && (
          <div className={styles.botTools}>
            <QuickReplies
              variant="pricing"
              options={companySizeOptions as unknown as string[]}
              onPick={pickCompanySize}
            />
          </div>
        )}

        {step === "priority" && (
          <div className={styles.botTools}>
            <QuickReplies variant="priority" options={priorityOptions as unknown as string[]} onPick={pickPriority} />
          </div>
        )}

        {step === "contact_method" && (
          <div className={styles.botTools}>
            <QuickReplies
              variant="pricing"
              options={contactMethodOptions as unknown as string[]}
              onPick={pickContactMethod}
            />
          </div>
        )}

        {step === "done" && (
          <div className={styles.botTools}>
            <TicketSummary
              topic={topic}
              priority={priority}
              email={email}
              message={message}
              onEmailDraft={openEmailDraft}
              subtopic={subtopic}
            />

            <button className="btn btnGhost btnFull" type="button" onClick={reset}>
              Restart demo
            </button>
          </div>
        )}
      </div>

      {step === "email" && (
        <ChatInput placeholder="your@email.com" type="email" onSend={submitEmail} />
      )}

      {step === "message" && (
        <ChatInput placeholder='e.g. "I need custom pricing for a small team"' onSend={submitMessage} />
      )}
    </div>
  );
}
