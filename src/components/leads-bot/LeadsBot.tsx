// src/components/leads-bot/LeadsBot.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ChatMessage, {
  type Message,
} from "@/components/support-bot/ChatMessage";
import ChatInput from "@/components/support-bot/ChatInput";
import QuickReplies, {
  type QuickOption,
} from "@/components/support-bot/QuickReplies";
import LeadSummary from "./LeadSummary";

import {
  LEAD_INTENTS,
  BUSINESS_TYPES,
  COMPANY_SIZES,
  TIMEFRAMES,
  BUDGET_RANGES,
  type BudgetRangeId,
  type BusinessTypeId,
  type CompanySizeId,
  type LeadIntentId,
  type TimeframeId,
} from "@/data/leadsFlow";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

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

type FitLevel = "hot" | "warm" | "cool";

function computeInterestAndScore(args: {
  intentId: LeadIntentId | "";
  timeframeId: TimeframeId | "";
  budgetId: BudgetRangeId | "";
  companySizeId: CompanySizeId | "";
  tr: ReturnType<typeof t>;
}) {
  const why: string[] = [];
  let score = 60;

  if (args.timeframeId === "asap" || args.timeframeId === "this_month") {
    score += 15;
    why.push(args.tr.summaries.leadSummary.reasons.fast);
  }

  if (args.budgetId && args.budgetId !== "not_sure") {
    score += 15;
    if (args.budgetId === "1k_3k") {
      why.push(args.tr.summaries.leadSummary.reasons.budgetHigh);
    } else {
      why.push(args.tr.summaries.leadSummary.reasons.budgetMid);
    }
  }

  if (args.companySizeId && args.companySizeId !== "solo") {
    score += 10;
    why.push(args.tr.summaries.leadSummary.reasons.biggerTeam);
  }

  if (args.intentId && args.intentId !== "exploring") {
    score += 10;
    why.push(args.tr.summaries.leadSummary.reasons.specificNeed);
  }

  if (args.intentId === "exploring") {
    why.push(args.tr.summaries.leadSummary.reasons.exploring);
  }

  const level: FitLevel = score >= 85 ? "hot" : score >= 70 ? "warm" : "cool";

  return {
    fitScore: Math.min(score, 100),
    fitLevel: level,
    reasons: why,
  };
}

export default function LeadsBot({ mode = "page" }: { mode?: Mode }) {
  const lang = useLang();
  const tr = t(lang);

  const [step, setStep] = useState<Step>("intent");

  const [intentId, setIntentId] = useState<LeadIntentId | "">("");
  const [businessId, setBusinessId] = useState<BusinessTypeId | "">("");
  const [sizeId, setSizeId] = useState<CompanySizeId | "">("");
  const [timeframeId, setTimeframeId] = useState<TimeframeId | "">("");
  const [budgetId, setBudgetId] = useState<BudgetRangeId | "">("");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const [fitLevel, setFitLevel] = useState<FitLevel>("warm");
  const [fitScore, setFitScore] = useState(70);
  const [reasons, setReasons] = useState<string[]>([]);

  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "m1",
      role: "bot",
      text:
        mode === "embedded" ? tr.leadsBot.welcomeEmbedded : tr.leadsBot.welcome,
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
    if (step === "intent" && messages.length === 1) {
      setMessages([
        {
          id: "m1",
          role: "bot",
          text:
            mode === "embedded"
              ? tr.leadsBot.welcomeEmbedded
              : tr.leadsBot.welcome,
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

  const intentOptions: QuickOption[] = useMemo(
    () =>
      LEAD_INTENTS.map((x) => ({
        id: x.id,
        label: tr.leadsBot.intents[x.key],
      })),
    [tr],
  );
  const businessOptions: QuickOption[] = useMemo(
    () =>
      BUSINESS_TYPES.map((x) => ({
        id: x.id,
        label: tr.leadsBot.businessTypes[x.key],
      })),
    [tr],
  );
  const sizeOptions: QuickOption[] = useMemo(
    () =>
      COMPANY_SIZES.map((x) => ({
        id: x.id,
        label: tr.leadsBot.companySizes[x.key],
      })),
    [tr],
  );
  const timeframeOptions: QuickOption[] = useMemo(
    () =>
      TIMEFRAMES.map((x) => ({
        id: x.id,
        label: tr.leadsBot.timeframes[x.key],
      })),
    [tr],
  );
  const budgetOptions: QuickOption[] = useMemo(
    () =>
      BUDGET_RANGES.map((x) => ({
        id: x.id,
        label: tr.leadsBot.budgets[x.key],
      })),
    [tr],
  );

  const labelIntent = (id: LeadIntentId | "") =>
    id ? tr.leadsBot.intents[LEAD_INTENTS.find((x) => x.id === id)!.key] : "";
  const labelBusiness = (id: BusinessTypeId | "") =>
    id
      ? tr.leadsBot.businessTypes[BUSINESS_TYPES.find((x) => x.id === id)!.key]
      : "";
  const labelSize = (id: CompanySizeId | "") =>
    id
      ? tr.leadsBot.companySizes[COMPANY_SIZES.find((x) => x.id === id)!.key]
      : "";
  const labelTimeframe = (id: TimeframeId | "") =>
    id ? tr.leadsBot.timeframes[TIMEFRAMES.find((x) => x.id === id)!.key] : "";
  const labelBudget = (id: BudgetRangeId | "") =>
    id ? tr.leadsBot.budgets[BUDGET_RANGES.find((x) => x.id === id)!.key] : "";

  function pickIntent(id: string) {
    const v = id as LeadIntentId;
    setIntentId(v);
    push("user", labelIntent(v));
    push("bot", tr.leadsBot.askBusiness);
    setStep("business");
  }

  function pickBusiness(id: string) {
    const v = id as BusinessTypeId;
    setBusinessId(v);
    push("user", labelBusiness(v));
    push("bot", tr.leadsBot.askSize);
    setStep("size");
  }

  function pickSize(id: string) {
    const v = id as CompanySizeId;
    setSizeId(v);
    push("user", labelSize(v));
    push("bot", tr.leadsBot.askTimeframe);
    setStep("timeframe");
  }

  function pickTimeframe(id: string) {
    const v = id as TimeframeId;
    setTimeframeId(v);
    push("user", labelTimeframe(v));
    push("bot", tr.leadsBot.askBudget);
    setStep("budget");
  }

  function pickBudget(id: string) {
    const v = id as BudgetRangeId;
    setBudgetId(v);
    push("user", labelBudget(v));
    push("bot", tr.leadsBot.askEmail);
    setStep("email");
  }

  function submitEmail(v: string) {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (!ok) {
      push("bot", tr.leadsBot.invalidEmail);
      return;
    }

    setEmail(v);
    push("user", v);

    push("bot", tr.leadsBot.askMessage);
    setStep("message");
  }

  function submitMessage(v: string) {
    const cleaned = v.trim();
    setMessage(cleaned);

    push("user", cleaned);
    push("bot", tr.leadsBot.done);

    const computed = computeInterestAndScore({
      tr,
      intentId,
      timeframeId,
      budgetId,
      companySizeId: sizeId,
    });

    setFitScore(computed.fitScore);
    setFitLevel(computed.fitLevel);
    setReasons(computed.reasons);

    setStep("done");
  }

  function openEmailDraft() {
    const to = "lukas.juodeikis.dev@gmail.com";

    const subject = `${tr.leadsBot.emailSubjectPrefix} ${labelIntent(intentId as LeadIntentId)} — ${labelBusiness(
      businessId as BusinessTypeId,
    )} — ${labelTimeframe(timeframeId as TimeframeId)}`;

    const body =
      `${tr.leadsBot.emailBodyTitle}\n\n` +
      `${tr.leadsBot.summary.lookingFor}: ${labelIntent(intentId as LeadIntentId)}\n` +
      `${tr.leadsBot.summary.businessType}: ${labelBusiness(businessId as BusinessTypeId)}\n` +
      `${tr.leadsBot.summary.companySize}: ${labelSize(sizeId as CompanySizeId)}\n` +
      `${tr.leadsBot.summary.timeframe}: ${labelTimeframe(timeframeId as TimeframeId)}\n` +
      `${tr.leadsBot.summary.budget}: ${labelBudget(budgetId as BudgetRangeId)}\n` +
      `${tr.leadsBot.summary.email}: ${email}\n\n` +
      `${tr.leadsBot.summary.optionalMessage}:\n${message || "—"}\n\n` +
      `---\n${tr.leadsBot.sentFrom}`;

    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function reset() {
    setStep("intent");
    setIntentId("");
    setBusinessId("");
    setSizeId("");
    setTimeframeId("");
    setBudgetId("");
    setEmail("");
    setMessage("");

    setFitLevel("warm");
    setFitScore(70);
    setReasons([]);

    setMessages([
      {
        id: "m1",
        role: "bot",
        text:
          mode === "embedded"
            ? tr.leadsBot.welcomeEmbedded
            : tr.leadsBot.welcome,
      },
    ]);
  }

  const lookingFor = labelIntent(intentId as LeadIntentId);
  const businessType = labelBusiness(businessId as BusinessTypeId);
  const companySize = labelSize(sizeId as CompanySizeId);
  const timeframe = labelTimeframe(timeframeId as TimeframeId);
  const budget = labelBudget(budgetId as BudgetRangeId);

  const sum = tr.summaries.leadSummary;

  return (
    <div className={styles.botWrap} data-mode={mode}>
      <div className={styles.chatList} ref={listRef}>
        {messages.map((m) => (
          <ChatMessage key={m.id} m={m} />
        ))}

        {step === "intent" && (
          <div className={styles.botTools}>
            <QuickReplies options={intentOptions} onPick={pickIntent} />
          </div>
        )}

        {step === "business" && (
          <div className={styles.botTools}>
            <QuickReplies options={businessOptions} onPick={pickBusiness} />
          </div>
        )}

        {step === "size" && (
          <div className={styles.botTools}>
            <QuickReplies options={sizeOptions} onPick={pickSize} />
          </div>
        )}

        {step === "timeframe" && (
          <div className={styles.botTools}>
            <QuickReplies options={timeframeOptions} onPick={pickTimeframe} />
          </div>
        )}

        {step === "budget" && (
          <div className={styles.botTools}>
            <QuickReplies options={budgetOptions} onPick={pickBudget} />
          </div>
        )}

        {step === "done" && (
          <div className={styles.botTools}>
            <LeadSummary
              title={sum.title}
              labels={sum.labels}
              fitText={sum.fit}
              fitLevel={fitLevel}
              fitScore={fitScore}
              reasons={reasons}
              lookingFor={lookingFor}
              businessType={businessType}
              companySize={companySize}
              timeframe={timeframe}
              budget={budget}
              email={email}
              optionalMessage={message}
              optionalMessageEmpty={sum.labels.optionalMessageEmpty}
              cta={sum.cta}
              note={sum.note}
              onEmailDraft={openEmailDraft}
            />

            <button
              className="btn btnGhost btnBlock"
              type="button"
              onClick={reset}
            >
              {tr.leadsBot.restart}
            </button>
          </div>
        )}
      </div>

      {step === "email" && (
        <ChatInput
          placeholder={tr.leadsBot.emailPlaceholder}
          type="email"
          onSend={submitEmail}
        />
      )}

      {step === "message" && (
        <ChatInput
          placeholder={tr.leadsBot.messagePlaceholder}
          onSend={submitMessage}
        />
      )}
    </div>
  );
}
