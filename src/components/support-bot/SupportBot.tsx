// src/components/support-bot/SupportBot.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ChatMessage, { type Message } from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickReplies, { type QuickOption } from "./QuickReplies";
import TicketSummary from "./TicketSummary";

import {
  SUPPORT_PRIORITIES,
  SUPPORT_TOPICS,
  PRICING_SUBTOPICS,
  TECH_SUBTOPICS,
  CONTACT_METHODS,
  type ContactMethodId,
  type PricingSubtopicId,
  type SupportPriorityId,
  type SupportTopicId,
  type TechSubtopicId,
} from "@/data/supportFlow";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

import styles from "./supportBot.module.css";

type Step =
  | "topic"
  | "pricing_subtopic"
  | "tech_subtopic"
  | "priority"
  | "contact_method"
  | "email"
  | "phone"
  | "message"
  | "done";

type Mode = "embedded" | "page";

export default function SupportBot({ mode = "page" }: { mode?: Mode }) {
  const lang = useLang();
  const tr = t(lang);

  const [step, setStep] = useState<Step>("topic");

  const [topicId, setTopicId] = useState<SupportTopicId | "">("");
  const [subtopicId, setSubtopicId] = useState<PricingSubtopicId | TechSubtopicId | "">("");
  const [priorityId, setPriorityId] = useState<SupportPriorityId | "">("");

  const [contactMethodId, setContactMethodId] = useState<ContactMethodId | "">("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "m1",
      role: "bot",
      text: mode === "embedded" ? tr.supportBot.welcomeEmbedded : tr.supportBot.welcome,
    },
  ]);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, step]);

  useEffect(() => {
    if (step === "topic" && messages.length === 1) {
      setMessages([
        {
          id: "m1",
          role: "bot",
          text: mode === "embedded" ? tr.supportBot.welcomeEmbedded : tr.supportBot.welcome,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  function push(role: "bot" | "user", text: string) {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, role, text },
    ]);
  }

  const topicOptions: QuickOption[] = useMemo(
    () =>
      SUPPORT_TOPICS.map((x) => ({
        id: x.id,
        label: tr.supportBot.topics[x.key],
      })),
    [tr]
  );

  const priorityOptions: QuickOption[] = useMemo(
    () =>
      SUPPORT_PRIORITIES.map((x) => ({
        id: x.id,
        label: tr.supportBot.priorities[x.key],
      })),
    [tr]
  );

  const pricingOptions: QuickOption[] = useMemo(
    () =>
      PRICING_SUBTOPICS.map((x) => ({
        id: x.id,
        label: tr.supportBot.pricingSubtopics[x.key],
      })),
    [tr]
  );

  const techOptions: QuickOption[] = useMemo(
    () =>
      TECH_SUBTOPICS.map((x) => ({
        id: x.id,
        label: tr.supportBot.techSubtopics[x.key],
      })),
    [tr]
  );

  const contactOptions: QuickOption[] = useMemo(
    () =>
      CONTACT_METHODS.map((x) => ({
        id: x.id,
        label: tr.supportBot.contactMethods[x.key],
      })),
    [tr]
  );

  const getTopicLabel = (id: SupportTopicId | "") =>
    id ? tr.supportBot.topics[SUPPORT_TOPICS.find((x) => x.id === id)!.key] : "";

  const getPriorityLabel = (id: SupportPriorityId | "") =>
    id ? tr.supportBot.priorities[SUPPORT_PRIORITIES.find((x) => x.id === id)!.key] : "";

  const getSubtopicLabel = (id: string) => {
    const p = PRICING_SUBTOPICS.find((x) => x.id === (id as any));
    if (p) return tr.supportBot.pricingSubtopics[p.key];
    const tt = TECH_SUBTOPICS.find((x) => x.id === (id as any));
    if (tt) return tr.supportBot.techSubtopics[tt.key];
    return "";
  };

  const getContactMethodLabel = (id: ContactMethodId | "") =>
    id ? tr.supportBot.contactMethods[CONTACT_METHODS.find((x) => x.id === id)!.key] : "";

  function pickTopic(id: string) {
    const topic = id as SupportTopicId;
    setTopicId(topic);
    setSubtopicId("");
    push("user", getTopicLabel(topic));

    if (topic === "billing") {
      push("bot", tr.supportBot.askPricing);
      setStep("pricing_subtopic");
      return;
    }

    if (topic === "tech") {
      push("bot", tr.supportBot.askTech);
      setStep("tech_subtopic");
      return;
    }

    push("bot", tr.supportBot.askUrgency);
    setStep("priority");
  }

  function pickPricingSubtopic(id: string) {
    const sub = id as PricingSubtopicId;
    setSubtopicId(sub);
    push("user", getSubtopicLabel(sub));
    push("bot", tr.supportBot.askUrgency);
    setStep("priority");
  }

  function pickTechSubtopic(id: string) {
    const sub = id as TechSubtopicId;
    setSubtopicId(sub);
    push("user", getSubtopicLabel(sub));
    push("bot", tr.supportBot.askUrgency);
    setStep("priority");
  }

  function pickPriority(id: string) {
    const p = id as SupportPriorityId;
    setPriorityId(p);
    push("user", getPriorityLabel(p));
    push("bot", tr.supportBot.askContact);
    setStep("contact_method");
  }

  function pickContactMethod(id: string) {
    const cm = id as ContactMethodId;
    setContactMethodId(cm);
    push("user", getContactMethodLabel(cm));

    if (cm === "phone") {
      push("bot", tr.supportBot.askPhone);
      setStep("phone");
      return;
    }

    push("bot", tr.supportBot.askEmail);
    setStep("email");
  }

  function submitEmail(v: string) {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (!ok) {
      push("bot", tr.supportBot.invalidEmail);
      return;
    }
    setEmail(v);
    push("user", v);
    push("bot", tr.supportBot.askMessage);
    setStep("message");
  }

  function submitPhone(v: string) {
    const cleaned = v.trim();
    const ok = /^[+\d][\d\s()-]{6,}$/.test(cleaned);
    if (!ok) {
      push("bot", tr.supportBot.invalidPhone);
      return;
    }
    setPhone(cleaned);
    push("user", cleaned);
    push("bot", tr.supportBot.askMessage);
    setStep("message");
  }

  function submitMessage(v: string) {
    setMessage(v);
    push("user", v);
    push("bot", tr.supportBot.done);
    setStep("done");
  }

  function openEmailDraft() {
    const to = "lukas.juodeikis.dev@gmail.com";

    const topicLabel = getTopicLabel(topicId as SupportTopicId);
    const subLabel = subtopicId ? getSubtopicLabel(subtopicId) : "";
    const prLabel = getPriorityLabel(priorityId as SupportPriorityId);
    const contactLabel = getContactMethodLabel(contactMethodId as ContactMethodId);

    const subjectParts = [
      tr.supportBot.emailSubjectPrefix,
      topicLabel,
      subLabel ? `— ${subLabel}` : "",
      prLabel ? `— ${prLabel}` : "",
    ].filter(Boolean);

    const subject = subjectParts.join(" ");

    const contactLine =
      contactMethodId === "phone"
        ? `${tr.supportBot.phoneLabel}: ${phone || tr.supportBot.notProvided}`
        : `${tr.supportBot.emailLabel}: ${email || tr.supportBot.notProvided}`;

    const body =
      `${tr.supportBot.emailBodyTitle}\n\n` +
      `${tr.supportBot.topicLabel}: ${topicLabel}\n` +
      (subLabel ? `${tr.supportBot.detailsLabel}: ${subLabel}\n` : "") +
      `${tr.supportBot.urgencyLabel}: ${prLabel}\n` +
      `${tr.supportBot.preferredContactLabel}: ${contactLabel}\n` +
      `${contactLine}\n\n` +
      `${tr.supportBot.messageLabel}:\n${message}\n\n` +
      `---\n${tr.supportBot.sentFrom}`;

    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function reset() {
    setStep("topic");
    setTopicId("");
    setSubtopicId("");
    setPriorityId("");
    setContactMethodId("");
    setEmail("");
    setPhone("");
    setMessage("");

    setMessages([
      {
        id: "m1",
        role: "bot",
        text: mode === "embedded" ? tr.supportBot.welcomeEmbedded : tr.supportBot.welcome,
      },
    ]);
  }

  const topicLabel = topicId ? getTopicLabel(topicId as SupportTopicId) : "";
  const subLabel = subtopicId ? getSubtopicLabel(subtopicId) : "";
  const prLabel = priorityId ? getPriorityLabel(priorityId as SupportPriorityId) : "";
  const contactMethodLabel = contactMethodId
    ? getContactMethodLabel(contactMethodId as ContactMethodId)
    : "";
  const contactValue = contactMethodId === "phone" ? phone : email;

  const sum = tr.summaries.ticketSummary;

  return (
    <div className={styles.botWrap} data-mode={mode}>
      <div className={styles.chatList} ref={listRef}>
        {messages.map((m) => (
          <ChatMessage key={m.id} m={m} />
        ))}

        {step === "topic" && (
          <div className={styles.botTools}>
            <QuickReplies options={topicOptions} onPick={pickTopic} />
          </div>
        )}

        {step === "pricing_subtopic" && (
          <div className={styles.botTools}>
            <QuickReplies options={pricingOptions} onPick={pickPricingSubtopic} />
          </div>
        )}

        {step === "tech_subtopic" && (
          <div className={styles.botTools}>
            <QuickReplies options={techOptions} onPick={pickTechSubtopic} />
          </div>
        )}

        {step === "priority" && (
          <div className={styles.botTools}>
            <QuickReplies options={priorityOptions} onPick={pickPriority} />
          </div>
        )}

        {step === "contact_method" && (
          <div className={styles.botTools}>
            <QuickReplies options={contactOptions} onPick={pickContactMethod} />
          </div>
        )}

        {step === "done" && (
          <div className={styles.botTools}>
            <TicketSummary
              title={sum.title}
              labels={sum.labels}
              cta={sum.cta}
              note={sum.note}
              topic={topicLabel}
              subtopic={subLabel || undefined}
              priority={prLabel}
              contactMethodLabel={contactMethodLabel}
              contactValue={contactValue}
              message={message}
              onEmailDraft={openEmailDraft}
            />

            <button className="btn btnGhost btnBlock" type="button" onClick={reset}>
              {tr.supportBot.restart}
            </button>
          </div>
        )}
      </div>

      {step === "email" && (
        <ChatInput placeholder={tr.supportBot.emailPlaceholder} type="email" onSend={submitEmail} />
      )}

      {step === "phone" && (
        <ChatInput placeholder={tr.supportBot.phonePlaceholder} onSend={submitPhone} />
      )}

      {step === "message" && (
        <ChatInput placeholder={tr.supportBot.messagePlaceholder} onSend={submitMessage} />
      )}
    </div>
  );
}
