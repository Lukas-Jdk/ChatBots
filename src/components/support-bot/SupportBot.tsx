// src/components/support-bot/SupportBot.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ChatMessage, { type Message } from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickReplies from "./QuickReplies";
import TicketSummary from "./TicketSummary";
import { SUPPORT_PRIORITIES, SUPPORT_TOPICS } from "@/data/supportFlow";
import styles from "./supportBot.module.css";

type Step = "topic" | "priority" | "email" | "message" | "done";

type Mode = "embedded" | "page";

export default function SupportBot({
  mode = "page",
}: {
  mode?: Mode;
}) {
  const [step, setStep] = useState<Step>("topic");
  const [topic, setTopic] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "m1",
      role: "bot",
      text:
        mode === "embedded"
          ? "Hi! I’m the Support Assistant demo. What do you need help with?"
          : "Welcome to the Support Assistant demo. What do you need help with?",
    },
  ]);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, step]);

  const topicOptions = useMemo(() => [...SUPPORT_TOPICS], []);
  const priorityOptions = useMemo(() => [...SUPPORT_PRIORITIES], []);

  function push(role: "bot" | "user", text: string) {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, role, text },
    ]);
  }

  function pickTopic(v: string) {
    setTopic(v);
    push("user", v);
    push("bot", "Got it. How urgent is it?");
    setStep("priority");
  }

  function pickPriority(v: string) {
    setPriority(v);
    push("user", v);
    push("bot", "Thanks. What is your email?");
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
    push("bot", "Perfect. Briefly describe your issue.");
    setStep("message");
  }

  function submitMessage(v: string) {
    setMessage(v);
    push("user", v);
    push("bot", "All set. Here’s the ticket summary.");
    setStep("done");
  }

  function openEmailDraft() {
    const to = "lukas.juodeikis.dev@gmail.com"; // <-- pakeisi į savo support email (ar kliento)
    const subject = `[Support Ticket] ${topic} — ${priority}`;
    const body =
      `New support request\n\n` +
      `Topic: ${topic}\n` +
      `Priority: ${priority}\n` +
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
    setPriority("");
    setEmail("");
    setMessage("");
    setMessages([
      {
        id: "m1",
        role: "bot",
        text: "Hi! I’m the Support Assistant demo. What do you need help with?",
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
            <QuickReplies options={topicOptions as unknown as string[]} onPick={pickTopic} />
          </div>
        )}

        {step === "priority" && (
          <div className={styles.botTools}>
            <QuickReplies options={priorityOptions as unknown as string[]} onPick={pickPriority} />
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
            />

            <button className={styles.ghostBtn} type="button" onClick={reset}>
              Restart demo
            </button>
          </div>
        )}
      </div>

      {step === "email" && (
        <ChatInput
          placeholder="your@email.com"
          type="email"
          onSend={submitEmail}
        />
      )}

      {step === "message" && (
        <ChatInput
          placeholder="Describe your issue..."
          onSend={submitMessage}
        />
      )}
    </div>
  );
}
