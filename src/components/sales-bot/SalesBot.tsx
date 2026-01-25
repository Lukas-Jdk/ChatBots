"use client";

// src/components/sales-bot/SalesBot.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import ChatMessage, { type Message } from "@/components/support-bot/ChatMessage";
import ChatInput from "@/components/support-bot/ChatInput";
import QuickReplies from "@/components/support-bot/QuickReplies";
import SalesSummary from "./SalesSummary";

import {
  SALES_GOALS,
  TRAFFIC_LEVELS,
  SALES_CHANNELS,
  CRM_STATUS,
  LANGUAGE_NEEDS,
  HANDOFF_PREF,
} from "@/data/salesFlow";

import styles from "@/components/support-bot/supportBot.module.css";

type Step =
  | "goal"
  | "traffic"
  | "channel"
  | "crm"
  | "languages"
  | "handoff"
  | "email"
  | "done";

type Mode = "embedded" | "page";

function buildRecommendation({
  goal,
  traffic,
  crm,
  languages,
  handoff,
}: {
  goal: string;
  traffic: string;
  crm: string;
  languages: string;
  handoff: string;
}) {
  const highTraffic = traffic.includes("High");
  const multiLang = languages.includes("Multiple") || languages.includes("+");

  // Simple but "smart-looking" recommendation
  if (goal === "Reduce support workload") {
    return `Support Assistant + FAQ bot. Add ${
      multiLang ? "multi-language routing" : "a knowledge base"
    } and send tickets to ${crm.includes("CRM") ? "your CRM/helpdesk" : "email"}.`;
  }

  if (goal === "Automate bookings") {
    return `Booking Assistant with calendar integration + ${
      handoff.includes("Book") ? "instant booking links" : "lead capture fallback"
    }.`;
  }

  if (goal === "Increase sales conversions") {
    return `Sales Assistant that qualifies visitors + recommends plans. ${
      highTraffic ? "Add A/B testing for scripts and questions." : "Start simple, then iterate."
    }`;
  }

  // Get more leads default
  return `Leads Bot that qualifies by intent, budget and timeframe, then routes to ${
    crm.includes("CRM") ? "CRM" : "email"
  }. ${highTraffic ? "Consider lead scoring + automation." : "Start with structured lead capture."}`;
}

export default function SalesBot({ mode = "page" }: { mode?: Mode }) {
  const [step, setStep] = useState<Step>("goal");

  const [goal, setGoal] = useState("");
  const [traffic, setTraffic] = useState("");
  const [channel, setChannel] = useState("");
  const [crm, setCrm] = useState("");
  const [languages, setLanguages] = useState("");
  const [handoff, setHandoff] = useState("");
  const [email, setEmail] = useState("");

  const [recommendation, setRecommendation] = useState("");

  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "m1",
      role: "bot",
      text:
        mode === "embedded"
          ? "Hi! I’m the Sales Assistant demo. What’s your main goal?"
          : "Welcome! I’m the Sales Assistant demo. What’s your main goal?",
    },
  ]);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, step]);

  const goalOptions = useMemo(() => [...SALES_GOALS], []);
  const trafficOptions = useMemo(() => [...TRAFFIC_LEVELS], []);
  const channelOptions = useMemo(() => [...SALES_CHANNELS], []);
  const crmOptions = useMemo(() => [...CRM_STATUS], []);
  const languageOptions = useMemo(() => [...LANGUAGE_NEEDS], []);
  const handoffOptions = useMemo(() => [...HANDOFF_PREF], []);

  function push(role: "bot" | "user", text: string) {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, role, text },
    ]);
  }

  function pickGoal(v: string) {
    setGoal(v);
    push("user", v);
    push("bot", "Thanks. What’s your website traffic level?");
    setStep("traffic");
  }

  function pickTraffic(v: string) {
    setTraffic(v);
    push("user", v);
    push("bot", "Where do your customers come from?");
    setStep("channel");
  }

  function pickChannel(v: string) {
    setChannel(v);
    push("user", v);
    push("bot", "How do you currently handle leads/support requests?");
    setStep("crm");
  }

  function pickCrm(v: string) {
    setCrm(v);
    push("user", v);
    push("bot", "Do you need multiple languages?");
    setStep("languages");
  }

  function pickLanguages(v: string) {
    setLanguages(v);
    push("user", v);
    push("bot", "What’s the preferred next step for the visitor?");
    setStep("handoff");
  }

  function pickHandoff(v: string) {
    setHandoff(v);
    push("user", v);

    const rec = buildRecommendation({
      goal,
      traffic,
      crm,
      languages,
      handoff: v,
    });
    setRecommendation(rec);

    push("bot", "Great. Where should I send the recommendation? (enter email)");
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

    push("bot", "All set — here’s the recommended setup.");
    setStep("done");
  }

  function openEmailDraft() {
    const to = "lukas.juodeikis.dev@gmail.com";

    const subject = `[Recommendation] ${goal} — ${traffic}`;

    const body =
      `Sales Assistant demo recommendation\n\n` +
      `Goal: ${goal}\n` +
      `Traffic: ${traffic}\n` +
      `Channel: ${channel}\n` +
      `CRM: ${crm}\n` +
      `Languages: ${languages}\n` +
      `Preferred next step: ${handoff}\n\n` +
      `Recommended setup:\n${recommendation}\n\n` +
      `Reply-to email: ${email}\n\n` +
      `---\nSent from Sales Assistant demo.`;

    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function reset() {
    setStep("goal");
    setGoal("");
    setTraffic("");
    setChannel("");
    setCrm("");
    setLanguages("");
    setHandoff("");
    setEmail("");
    setRecommendation("");

    setMessages([
      {
        id: "m1",
        role: "bot",
        text: "Hi! I’m the Sales Assistant demo. What’s your main goal?",
      },
    ]);
  }

  return (
    <div className={styles.botWrap} data-mode={mode}>
      <div className={styles.chatList} ref={listRef}>
        {messages.map((m) => (
          <ChatMessage key={m.id} m={m} />
        ))}

        {step === "goal" && (
          <div className={styles.botTools}>
            <QuickReplies options={goalOptions as unknown as string[]} onPick={pickGoal} />
          </div>
        )}

        {step === "traffic" && (
          <div className={styles.botTools}>
            <QuickReplies options={trafficOptions as unknown as string[]} onPick={pickTraffic} />
          </div>
        )}

        {step === "channel" && (
          <div className={styles.botTools}>
            <QuickReplies options={channelOptions as unknown as string[]} onPick={pickChannel} />
          </div>
        )}

        {step === "crm" && (
          <div className={styles.botTools}>
            <QuickReplies options={crmOptions as unknown as string[]} onPick={pickCrm} />
          </div>
        )}

        {step === "languages" && (
          <div className={styles.botTools}>
            <QuickReplies options={languageOptions as unknown as string[]} onPick={pickLanguages} />
          </div>
        )}

        {step === "handoff" && (
          <div className={styles.botTools}>
            <QuickReplies options={handoffOptions as unknown as string[]} onPick={pickHandoff} />
          </div>
        )}

        {step === "done" && (
          <div className={styles.botTools}>
            <SalesSummary
              goal={goal}
              traffic={traffic}
              channel={channel}
              crm={crm}
              languages={languages}
              handoff={handoff}
              recommendation={recommendation}
              email={email}
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
    </div>
  );
}
