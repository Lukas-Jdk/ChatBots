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
import { t } from "@/i18n";

import styles from "@/components/support-bot/supportBot.module.css";

type Variant = "sales" | "test";
type Mode = "embedded" | "page";

type Step =
  | "goal"
  | "traffic"
  | "channel"
  | "crm"
  | "languages"
  | "handoff"
  | "email"
  | "done";

type BotTr = ReturnType<typeof t>["salesBot"];

function buildRecommendation(args: {
  goalId: SalesGoalId;
  trafficId: TrafficLevelId;
  crmId: CrmStatusId;
  languagesId: LanguageNeedsId;
  handoffId: HandoffPrefId;
  bot: BotTr;
}) {
  const { goalId, trafficId, crmId, languagesId, handoffId, bot } = args;

  const highTraffic = trafficId === "high";
  const multiLang = languagesId === "multi";
  const hasCrm = crmId === "have_crm";

  if (goalId === "reduce_support") {
    return bot.recommendations.reduceSupport({
      multiLang,
      route: hasCrm ? bot.route.crm : bot.route.email,
    });
  }

  if (goalId === "automate_bookings") {
    return bot.recommendations.automateBookings({
      handoff: handoffId === "book_call" ? bot.handoff.book : bot.handoff.capture,
    });
  }

  if (goalId === "increase_conversions") {
    return bot.recommendations.increaseConversions({ highTraffic });
  }

  return bot.recommendations.moreLeads({
    route: hasCrm ? bot.route.crm : bot.route.email,
    highTraffic,
  });
}

export default function SalesBot({
  mode = "page",
  variant = "sales",
}: {
  mode?: Mode;
  variant?: Variant;
}) {
  const lang = useLang();
  const tr = t(lang);

  // ✅ svarbiausia: bot tekstai
  const bot = (variant === "test" ? tr.testBot : tr.salesBot) as BotTr;

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
      text: mode === "embedded" ? bot.welcomeEmbedded : bot.welcome,
    },
  ]);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, step]);

  // kai pakeiti kalbą – perstatom pirmą žinutę
  useEffect(() => {
    setMessages([
      {
        id: "m1",
        role: "bot",
        text: mode === "embedded" ? bot.welcomeEmbedded : bot.welcome,
      },
    ]);
    setStep("goal");
    setGoalId("");
    setTrafficId("");
    setChannelId("");
    setCrmId("");
    setLanguagesId("");
    setHandoffId("");
    setEmail("");
    setRecommendation("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, variant]);

  function push(role: "bot" | "user", text: string) {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, role, text },
    ]);
  }

  const goalOptions: QuickOption[] = useMemo(
    () => SALES_GOALS.map((x) => ({ id: x.id, label: bot.goals[x.key] })),
    [bot]
  );
  const trafficOptions: QuickOption[] = useMemo(
    () => TRAFFIC_LEVELS.map((x) => ({ id: x.id, label: bot.traffic[x.key] })),
    [bot]
  );
  const channelOptions: QuickOption[] = useMemo(
    () => SALES_CHANNELS.map((x) => ({ id: x.id, label: bot.channels[x.key] })),
    [bot]
  );
  const crmOptions: QuickOption[] = useMemo(
    () => CRM_STATUS.map((x) => ({ id: x.id, label: bot.crm[x.key] })),
    [bot]
  );
  const languageOptions: QuickOption[] = useMemo(
    () => LANGUAGE_NEEDS.map((x) => ({ id: x.id, label: bot.languages[x.key] })),
    [bot]
  );
  const handoffOptions: QuickOption[] = useMemo(
    () => HANDOFF_PREF.map((x) => ({ id: x.id, label: bot.handoffPref[x.key] })),
    [bot]
  );

  const labelFrom = <T extends { id: string; key: string }>(
    list: readonly T[],
    id: string,
    map: Record<string, string>
  ) => map[list.find((x) => x.id === id)!.key];

  function pickGoal(id: string) {
    const v = id as SalesGoalId;
    setGoalId(v);
    push("user", labelFrom(SALES_GOALS as any, v, bot.goals));
    push("bot", bot.askTraffic);
    setStep("traffic");
  }

  function pickTraffic(id: string) {
    const v = id as TrafficLevelId;
    setTrafficId(v);
    push("user", labelFrom(TRAFFIC_LEVELS as any, v, bot.traffic));
    push("bot", bot.askChannel);
    setStep("channel");
  }

  function pickChannel(id: string) {
    const v = id as SalesChannelId;
    setChannelId(v);
    push("user", labelFrom(SALES_CHANNELS as any, v, bot.channels));
    push("bot", bot.askCrm);
    setStep("crm");
  }

  function pickCrm(id: string) {
    const v = id as CrmStatusId;
    setCrmId(v);
    push("user", labelFrom(CRM_STATUS as any, v, bot.crm));
    push("bot", bot.askLanguages);
    setStep("languages");
  }

  function pickLanguages(id: string) {
    const v = id as LanguageNeedsId;
    setLanguagesId(v);
    push("user", labelFrom(LANGUAGE_NEEDS as any, v, bot.languages));
    push("bot", bot.askHandoff);
    setStep("handoff");
  }

  function pickHandoff(id: string) {
    const v = id as HandoffPrefId;
    setHandoffId(v);
    push("user", labelFrom(HANDOFF_PREF as any, v, bot.handoffPref));

    const rec = buildRecommendation({
      goalId: goalId as SalesGoalId,
      trafficId: trafficId as TrafficLevelId,
      crmId: crmId as CrmStatusId,
      languagesId: languagesId as LanguageNeedsId,
      handoffId: v,
      bot,
    });
    setRecommendation(rec);

    push("bot", bot.askEmail);
    setStep("email");
  }

  function submitEmail(v: string) {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (!ok) {
      push("bot", bot.invalidEmail);
      return;
    }
    setEmail(v);
    push("user", v);
    push("bot", bot.done);
    setStep("done");
  }

  function openEmailDraft() {
    const to = "lukas.juodeikis.dev@gmail.com";

    const goalLabel = labelFrom(SALES_GOALS as any, goalId as string, bot.goals);
    const trafficLabel = labelFrom(TRAFFIC_LEVELS as any, trafficId as string, bot.traffic);
    const channelLabel = labelFrom(SALES_CHANNELS as any, channelId as string, bot.channels);
    const crmLabel = labelFrom(CRM_STATUS as any, crmId as string, bot.crm);
    const langLabel = labelFrom(LANGUAGE_NEEDS as any, languagesId as string, bot.languages);
    const handoffLabel = labelFrom(HANDOFF_PREF as any, handoffId as string, bot.handoffPref);

    const subject = `${bot.emailSubjectPrefix} ${goalLabel} — ${trafficLabel}`;

    const body =
      `${bot.emailBodyTitle}\n\n` +
      `${bot.summary.goal}: ${goalLabel}\n` +
      `${bot.summary.traffic}: ${trafficLabel}\n` +
      `${bot.summary.channel}: ${channelLabel}\n` +
      `${bot.summary.crm}: ${crmLabel}\n` +
      `${bot.summary.languages}: ${langLabel}\n` +
      `${bot.summary.handoff}: ${handoffLabel}\n\n` +
      `${bot.summary.recommendedSetup}:\n${recommendation}\n\n` +
      `${bot.summary.replyTo}: ${email}\n\n` +
      `---\n${bot.sentFrom}`;

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
      { id: "m1", role: "bot", text: mode === "embedded" ? bot.welcomeEmbedded : bot.welcome },
    ]);
  }

  const sum = tr.summaries.salesSummary;

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
              title={sum.title}
              labels={sum.labels}
              cta={sum.cta}
              note={sum.note}
              goal={labelFrom(SALES_GOALS as any, goalId as string, bot.goals)}
              traffic={labelFrom(TRAFFIC_LEVELS as any, trafficId as string, bot.traffic)}
              channel={labelFrom(SALES_CHANNELS as any, channelId as string, bot.channels)}
              crm={labelFrom(CRM_STATUS as any, crmId as string, bot.crm)}
              languages={labelFrom(LANGUAGE_NEEDS as any, languagesId as string, bot.languages)}
              handoff={labelFrom(HANDOFF_PREF as any, handoffId as string, bot.handoffPref)}
              recommendation={recommendation}
              email={email}
              onEmailDraft={openEmailDraft}
            />

            <button className="btn btnGhost btnBlock" type="button" onClick={reset}>
              {bot.restart}
            </button>
          </div>
        )}
      </div>

      {step === "email" && (
        <ChatInput placeholder={bot.emailPlaceholder} type="email" onSend={submitEmail} />
      )}
    </div>
  );
}
