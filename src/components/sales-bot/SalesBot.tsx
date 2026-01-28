"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ChatMessage, { type Message } from "@/components/support-bot/ChatMessage";
import ChatInput from "@/components/support-bot/ChatInput";
import QuickReplies, { type QuickOption } from "@/components/support-bot/QuickReplies";
import SalesSummary from "./SalesSummary";

import {
  SALES_GOALS,
  TRAFFIC_LEVELS,
  SALES_CHANNELS,
  CRM_STATUS,
  LANGUAGE_NEEDS,
  HANDOFF_PREF,
  type CrmStatusId,
  type HandoffPrefId,
  type LanguageNeedsId,
  type SalesChannelId,
  type SalesGoalId,
  type TrafficLevelId,
} from "@/data/salesFlow";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n/translations";

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
  goalId,
  trafficId,
  crmId,
  languagesId,
  handoffId,
  tr,
}: {
  goalId: SalesGoalId;
  trafficId: TrafficLevelId;
  crmId: CrmStatusId;
  languagesId: LanguageNeedsId;
  handoffId: HandoffPrefId;
  tr: ReturnType<typeof t>;
}) {
  const highTraffic = trafficId === "high";
  const multiLang = languagesId === "multi";
  const hasCrm = crmId === "have_crm";

  if (goalId === "reduce_support") {
    return tr.salesBot.recommendations.reduceSupport({
      multiLang,
      route: hasCrm ? tr.salesBot.route.crm : tr.salesBot.route.email,
    });
  }

  if (goalId === "automate_bookings") {
    return tr.salesBot.recommendations.automateBookings({
      handoff:
        handoffId === "book_call"
          ? tr.salesBot.handoff.book
          : tr.salesBot.handoff.capture,
    });
  }

  if (goalId === "increase_conversions") {
    return tr.salesBot.recommendations.increaseConversions({
      highTraffic,
    });
  }

  // default more leads
  return tr.salesBot.recommendations.moreLeads({
    route: hasCrm ? tr.salesBot.route.crm : tr.salesBot.route.email,
    highTraffic,
  });
}

export default function SalesBot({ mode = "page" }: { mode?: Mode }) {
  const lang = useLang();
  const tr = t(lang);

  const [step, setStep] = useState<Step>("goal");

  const [goalId, setGoalId] = useState<SalesGoalId | "">("");
  const [trafficId, setTrafficId] = useState<TrafficLevelId | "">("");
  const [channelId, setChannelId] = useState<SalesChannelId | "">("");
  const [crmId, setCrmId] = useState<CrmStatusId | "">("");
  const [languagesId, setLanguagesId] = useState<LanguageNeedsId | "">("");
  const [handoffId, setHandoffId] = useState<HandoffPrefId | "">("");
  const [email, setEmail] = useState("");

  const [recommendation, setRecommendation] = useState("");

  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "m1",
      role: "bot",
      text: mode === "embedded" ? tr.salesBot.welcomeEmbedded : tr.salesBot.welcome,
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
  if (step === "goal" && messages.length === 1) {
    setMessages([
      {
        id: "m1",
        role: "bot",
        text: mode === "embedded" ? tr.salesBot.welcomeEmbedded : tr.salesBot.welcome,
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

  const goalOptions: QuickOption[] = useMemo(
    () => SALES_GOALS.map((x) => ({ id: x.id, label: tr.salesBot.goals[x.key] })),
    [tr]
  );
  const trafficOptions: QuickOption[] = useMemo(
    () => TRAFFIC_LEVELS.map((x) => ({ id: x.id, label: tr.salesBot.traffic[x.key] })),
    [tr]
  );
  const channelOptions: QuickOption[] = useMemo(
    () => SALES_CHANNELS.map((x) => ({ id: x.id, label: tr.salesBot.channels[x.key] })),
    [tr]
  );
  const crmOptions: QuickOption[] = useMemo(
    () => CRM_STATUS.map((x) => ({ id: x.id, label: tr.salesBot.crm[x.key] })),
    [tr]
  );
  const languageOptions: QuickOption[] = useMemo(
    () => LANGUAGE_NEEDS.map((x) => ({ id: x.id, label: tr.salesBot.languages[x.key] })),
    [tr]
  );
  const handoffOptions: QuickOption[] = useMemo(
    () => HANDOFF_PREF.map((x) => ({ id: x.id, label: tr.salesBot.handoffPref[x.key] })),
    [tr]
  );

  const labelFrom = <T extends { id: string; key: string }>(
    list: readonly T[],
    id: string,
    map: Record<string, string>
  ) => map[list.find((x) => x.id === id)!.key];

  function pickGoal(id: string) {
    const v = id as SalesGoalId;
    setGoalId(v);
    push("user", labelFrom(SALES_GOALS as any, v, tr.salesBot.goals));
    push("bot", tr.salesBot.askTraffic);
    setStep("traffic");
  }

  function pickTraffic(id: string) {
    const v = id as TrafficLevelId;
    setTrafficId(v);
    push("user", labelFrom(TRAFFIC_LEVELS as any, v, tr.salesBot.traffic));
    push("bot", tr.salesBot.askChannel);
    setStep("channel");
  }

  function pickChannel(id: string) {
    const v = id as SalesChannelId;
    setChannelId(v);
    push("user", labelFrom(SALES_CHANNELS as any, v, tr.salesBot.channels));
    push("bot", tr.salesBot.askCrm);
    setStep("crm");
  }

  function pickCrm(id: string) {
    const v = id as CrmStatusId;
    setCrmId(v);
    push("user", labelFrom(CRM_STATUS as any, v, tr.salesBot.crm));
    push("bot", tr.salesBot.askLanguages);
    setStep("languages");
  }

  function pickLanguages(id: string) {
    const v = id as LanguageNeedsId;
    setLanguagesId(v);
    push("user", labelFrom(LANGUAGE_NEEDS as any, v, tr.salesBot.languages));
    push("bot", tr.salesBot.askHandoff);
    setStep("handoff");
  }

  function pickHandoff(id: string) {
    const v = id as HandoffPrefId;
    setHandoffId(v);
    push("user", labelFrom(HANDOFF_PREF as any, v, tr.salesBot.handoffPref));

    const rec = buildRecommendation({
      goalId: goalId as SalesGoalId,
      trafficId: trafficId as TrafficLevelId,
      crmId: crmId as CrmStatusId,
      languagesId: languagesId as LanguageNeedsId,
      handoffId: v,
      tr,
    });
    setRecommendation(rec);

    push("bot", tr.salesBot.askEmail);
    setStep("email");
  }

  function submitEmail(v: string) {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (!ok) {
      push("bot", tr.salesBot.invalidEmail);
      return;
    }
    setEmail(v);
    push("user", v);

    push("bot", tr.salesBot.done);
    setStep("done");
  }

  function openEmailDraft() {
    const to = "lukas.juodeikis.dev@gmail.com";

    const goalLabel = labelFrom(SALES_GOALS as any, goalId as string, tr.salesBot.goals);
    const trafficLabel = labelFrom(TRAFFIC_LEVELS as any, trafficId as string, tr.salesBot.traffic);
    const channelLabel = labelFrom(SALES_CHANNELS as any, channelId as string, tr.salesBot.channels);
    const crmLabel = labelFrom(CRM_STATUS as any, crmId as string, tr.salesBot.crm);
    const langLabel = labelFrom(LANGUAGE_NEEDS as any, languagesId as string, tr.salesBot.languages);
    const handoffLabel = labelFrom(HANDOFF_PREF as any, handoffId as string, tr.salesBot.handoffPref);

    const subject = `${tr.salesBot.emailSubjectPrefix} ${goalLabel} — ${trafficLabel}`;

    const body =
      `${tr.salesBot.emailBodyTitle}\n\n` +
      `${tr.salesBot.summary.goal}: ${goalLabel}\n` +
      `${tr.salesBot.summary.traffic}: ${trafficLabel}\n` +
      `${tr.salesBot.summary.channel}: ${channelLabel}\n` +
      `${tr.salesBot.summary.crm}: ${crmLabel}\n` +
      `${tr.salesBot.summary.languages}: ${langLabel}\n` +
      `${tr.salesBot.summary.handoff}: ${handoffLabel}\n\n` +
      `${tr.salesBot.summary.recommendedSetup}:\n${recommendation}\n\n` +
      `${tr.salesBot.summary.replyTo}: ${email}\n\n` +
      `---\n${tr.salesBot.sentFrom}`;

    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function reset() {
    setStep("goal");
    setGoalId("");
    setTrafficId("");
    setChannelId("");
    setCrmId("");
    setLanguagesId("");
    setHandoffId("");
    setEmail("");
    setRecommendation("");

    setMessages([
      {
        id: "m1",
        role: "bot",
        text: mode === "embedded" ? tr.salesBot.welcomeEmbedded : tr.salesBot.welcome,
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
            <QuickReplies options={goalOptions} onPick={pickGoal} />
          </div>
        )}

        {step === "traffic" && (
          <div className={styles.botTools}>
            <QuickReplies options={trafficOptions} onPick={pickTraffic} />
          </div>
        )}

        {step === "channel" && (
          <div className={styles.botTools}>
            <QuickReplies options={channelOptions} onPick={pickChannel} />
          </div>
        )}

        {step === "crm" && (
          <div className={styles.botTools}>
            <QuickReplies options={crmOptions} onPick={pickCrm} />
          </div>
        )}

        {step === "languages" && (
          <div className={styles.botTools}>
            <QuickReplies options={languageOptions} onPick={pickLanguages} />
          </div>
        )}

        {step === "handoff" && (
          <div className={styles.botTools}>
            <QuickReplies options={handoffOptions} onPick={pickHandoff} />
          </div>
        )}

        {step === "done" && (
          <div className={styles.botTools}>
            <SalesSummary
              goal={labelFrom(SALES_GOALS as any, goalId as string, tr.salesBot.goals)}
              traffic={labelFrom(TRAFFIC_LEVELS as any, trafficId as string, tr.salesBot.traffic)}
              channel={labelFrom(SALES_CHANNELS as any, channelId as string, tr.salesBot.channels)}
              crm={labelFrom(CRM_STATUS as any, crmId as string, tr.salesBot.crm)}
              languages={labelFrom(LANGUAGE_NEEDS as any, languagesId as string, tr.salesBot.languages)}
              handoff={labelFrom(HANDOFF_PREF as any, handoffId as string, tr.salesBot.handoffPref)}
              recommendation={recommendation}
              email={email}
              onEmailDraft={openEmailDraft}
            />

            <button className="btn btnGhost btnBlock" type="button" onClick={reset}>
              {tr.salesBot.restart}
            </button>
          </div>
        )}
      </div>

      {step === "email" && (
        <ChatInput placeholder={tr.salesBot.emailPlaceholder} type="email" onSend={submitEmail} />
      )}
    </div>
  );
}
