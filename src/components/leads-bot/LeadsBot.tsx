// src/components/leads-bot/LeadsBot.tsx
"use client";

// src/components/leads-bot/LeadsBot.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import ChatMessage, { type Message } from "@/components/support-bot/ChatMessage";
import ChatInput from "@/components/support-bot/ChatInput";
import QuickReplies from "@/components/support-bot/QuickReplies";
import LeadSummary from "./LeadSummary";

import {
  LEAD_INTENTS,
  BUSINESS_TYPES,
  COMPANY_SIZES,
  TIMEFRAMES,
  BUDGET_RANGES,
} from "@/data/leadsFlow";

import styles from "@/components/support-bot/supportBot.module.css";

type Step =
  | "intent"
  | "business"
  | "size"
  | "timeframe"
  | "budget"
  | "email"
  | "message"
  | "done";

type Mode = "embedded" | "page";

export default function LeadsBot({ mode = "page" }: { mode?: Mode }) {
  const [step, setStep] = useState<Step>("intent");

  const [intent, setIntent] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [budget, setBudget] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "m1",
      role: "bot",
      text:
        mode === "embedded"
          ? "Hi! I’m the Leads Bot demo. What are you looking for?"
          : "Welcome! I’m the Leads Bot demo. What are you looking for?",
    },
  ]);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, step]);

  const intentOptions = useMemo(() => [...LEAD_INTENTS], []);
  const businessOptions = useMemo(() => [...BUSINESS_TYPES], []);
  const sizeOptions = useMemo(() => [...COMPANY_SIZES], []);
  const timeframeOptions = useMemo(() => [...TIMEFRAMES], []);
  const budgetOptions = useMemo(() => [...BUDGET_RANGES], []);

  function push(role: "bot" | "user", text: string) {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, role, text },
    ]);
  }

  function pickIntent(v: string) {
    setIntent(v);
    push("user", v);

    push("bot", "Nice — what type of business is this?");
    setStep("business");
  }

  function pickBusiness(v: string) {
    setBusinessType(v);
    push("user", v);

    push("bot", "Got it. What’s your company size?");
    setStep("size");
  }

  function pickSize(v: string) {
    setCompanySize(v);
    push("user", v);

    push("bot", "When do you want to start?");
    setStep("timeframe");
  }

  function pickTimeframe(v: string) {
    setTimeframe(v);
    push("user", v);

    push("bot", "What budget range are you thinking?");
    setStep("budget");
  }

  function pickBudget(v: string) {
    setBudget(v);
    push("user", v);

    push("bot", "Perfect. Where should we contact you? (enter your email)");
    setStep("email");
  }

  function submitEmail(v: string) {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (!ok) {
      push("bot", "That email doesn’t look right. Please enter a valid email.");
      return;
    }

    setEmail(v);
    push("user", v);

    push("bot", "Optional: add a short message (or just type “skip”).");
    setStep("message");
  }

  function submitMessage(v: string) {
    const cleaned = v.trim().toLowerCase() === "skip" ? "" : v.trim();
    setMessage(cleaned);

    push("user", cleaned || "skip");
    push("bot", "Thanks! Here’s the summary of your lead.");
    setStep("done");
  }

  function openEmailDraft() {
    const to = "lukas.juodeikis.dev@gmail.com";

    const subject = `[New Lead] ${intent} — ${businessType} — ${timeframe}`;

    const body =
      `New lead from Leads Bot demo\n\n` +
      `Looking for: ${intent}\n` +
      `Business type: ${businessType}\n` +
      `Company size: ${companySize}\n` +
      `Timeframe: ${timeframe}\n` +
      `Budget: ${budget}\n` +
      `Email: ${email}\n\n` +
      `Optional message:\n${message || "—"}\n\n` +
      `---\nSent from Leads Bot demo.`;

    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function reset() {
    setStep("intent");
    setIntent("");
    setBusinessType("");
    setCompanySize("");
    setTimeframe("");
    setBudget("");
    setEmail("");
    setMessage("");

    setMessages([
      {
        id: "m1",
        role: "bot",
        text: "Hi! I’m the Leads Bot demo. What are you looking for?",
      },
    ]);
  }

  return (
    <div className={styles.botWrap} data-mode={mode}>
      <div className={styles.chatList} ref={listRef}>
        {messages.map((m) => (
          <ChatMessage key={m.id} m={m} />
        ))}

        {step === "intent" && (
          <div className={styles.botTools}>
            <QuickReplies options={intentOptions as unknown as string[]} onPick={pickIntent} />
          </div>
        )}

        {step === "business" && (
          <div className={styles.botTools}>
            <QuickReplies options={businessOptions as unknown as string[]} onPick={pickBusiness} />
          </div>
        )}

        {step === "size" && (
          <div className={styles.botTools}>
            <QuickReplies options={sizeOptions as unknown as string[]} onPick={pickSize} />
          </div>
        )}

        {step === "timeframe" && (
          <div className={styles.botTools}>
            <QuickReplies options={timeframeOptions as unknown as string[]} onPick={pickTimeframe} />
          </div>
        )}

        {step === "budget" && (
          <div className={styles.botTools}>
            <QuickReplies options={budgetOptions as unknown as string[]} onPick={pickBudget} />
          </div>
        )}

        {step === "done" && (
          <div className={styles.botTools}>
            <LeadSummary
              intent={intent}
              businessType={businessType}
              companySize={companySize}
              timeframe={timeframe}
              budget={budget}
              email={email}
              message={message}
              onEmailDraft={openEmailDraft}
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
        <ChatInput placeholder='Type a short note (or "skip")' onSend={submitMessage} />
      )}
    </div>
  );
}
