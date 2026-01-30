"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ChatMessage, { type Message } from "@/components/support-bot/ChatMessage";
import ChatInput from "@/components/support-bot/ChatInput";
import QuickReplies, { type QuickOption } from "@/components/support-bot/QuickReplies";
import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

import styles from "@/components/support-bot/supportBot.module.css";

type Step = "clarity_choice" | "unclear_message" | "rating" | "optional_note" | "done";
type ClarityChoiceId = "clear" | "unclear" | "contact";

export default function DemoBotsPanel() {
  const lang = useLang();
  const tr = t(lang);

  const BOT_AVATAR = "/aaa.webp"; // <- įdėk į public/

  const [step, setStep] = useState<Step>("clarity_choice");
  const [clarityChoice, setClarityChoice] = useState<ClarityChoiceId | "">("");
  const [rating, setRating] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const copy = useMemo(() => {
    if (lang === "lt") {
      return {
        welcome: "Padėkite mums tobulėti – ar ši svetainė buvo aiški?",
        options: [
          { id: "clear", label: "Taip, viskas aišku" },
          { id: "unclear", label: "Yra neaiškumų" },
          { id: "contact", label: "Susisiekti" },
        ] as const,
        askUnclear: "Parašykite trumpai: kas buvo neaišku?",
        askRating: "Įvertinkite aiškumą (1–5):",
        rating: ["1", "2", "3", "4", "5"] as const,
        askOptional: "Nebūtina: jei norite, pridėkite trumpą komentarą.",
        done: "Ačiū! Atidarysiu paruoštą el. laišką.",
        restart: "Pradėti iš naujo",
      };
    }

    return {
      welcome: "Help us improve — was this website clear?",
      options: [
        { id: "clear", label: "Yes, everything was clear" },
        { id: "unclear", label: "Some things were unclear" },
        { id: "contact", label: "Contact" },
      ] as const,
      askUnclear: "Write a short note: what was unclear?",
      askRating: "Rate clarity (1–5):",
      rating: ["1", "2", "3", "4", "5"] as const,
      askOptional: "Optional: add a short comment.",
      done: "Thanks! I’ll open a pre-filled email draft.",
      restart: "Restart",
    };
  }, [lang]);

  const [messages, setMessages] = useState<Message[]>(() => [
    { id: "m1", role: "bot", text: copy.welcome },
  ]);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, step]);

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [copy.welcome]);

  function push(role: "bot" | "user", text: string) {
    setMessages((prev) => [...prev, { id: `${Date.now()}-${Math.random()}`, role, text }]);
  }

  const options: QuickOption[] = useMemo(
    () => copy.options.map((x) => ({ id: x.id, label: x.label })),
    [copy]
  );

  const ratingOptions: QuickOption[] = useMemo(
    () => copy.rating.map((x) => ({ id: x, label: x })),
    [copy]
  );

  function reset() {
    setStep("clarity_choice");
    setClarityChoice("");
    setRating(null);
    setMessage("");
    setMessages([{ id: "m1", role: "bot", text: copy.welcome }]);
  }

  function openEmailDraft(payload: {
    clarityChoice: ClarityChoiceId | "";
    rating: number | null;
    message: string;
  }) {
    const to = "lukas.juodeikis.dev@gmail.com";

    const subject =
      lang === "lt"
        ? "DemoBots — svetainės aiškumo atsiliepimas"
        : "DemoBots — website clarity feedback";

    const choiceLabelLt =
      payload.clarityChoice === "clear"
        ? "Viskas aišku"
        : payload.clarityChoice === "unclear"
        ? "Yra neaiškumų"
        : payload.clarityChoice === "contact"
        ? "Susisiekti"
        : "—";

    const choiceLabelEn =
      payload.clarityChoice === "clear"
        ? "Everything was clear"
        : payload.clarityChoice === "unclear"
        ? "Some things were unclear"
        : payload.clarityChoice === "contact"
        ? "Contact"
        : "—";

    const bodyLines: string[] = [];

    if (lang === "lt") {
      bodyLines.push("Sveiki,");
      bodyLines.push("");
      bodyLines.push("Atsiliepimas apie svetainės aiškumą:");
      bodyLines.push(`- Pasirinkimas: ${choiceLabelLt}`);
      bodyLines.push(`- Įvertinimas (1–5): ${payload.rating ?? "—"}`);
      bodyLines.push("");
      bodyLines.push("Komentaras:");
      bodyLines.push(payload.message || "—");
      bodyLines.push("");
      bodyLines.push("---");
      bodyLines.push("Išsiųsta iš DemoBots floating panelės (demo).");
    } else {
      bodyLines.push("Hello,");
      bodyLines.push("");
      bodyLines.push("Website clarity feedback:");
      bodyLines.push(`- Choice: ${choiceLabelEn}`);
      bodyLines.push(`- Rating (1–5): ${payload.rating ?? "—"}`);
      bodyLines.push("");
      bodyLines.push("Comment:");
      bodyLines.push(payload.message || "—");
      bodyLines.push("");
      bodyLines.push("---");
      bodyLines.push("Sent from DemoBots floating panel (demo).");
    }

    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  // 1) pasirinkimas
  function pickClarity(id: string) {
    const v = id as ClarityChoiceId;
    setClarityChoice(v);
    push("user", options.find((o) => o.id === v)?.label || v);

    if (v === "contact") {
      // be papildomo „kur siųsti“ – iškart draft
      push("bot", copy.done);
      openEmailDraft({ clarityChoice: "contact", rating: null, message: "" });
      setStep("done");
      return;
    }

    if (v === "unclear") {
      push("bot", copy.askUnclear);
      setStep("unclear_message");
      return;
    }

    // clear
    push("bot", copy.askRating);
    setStep("rating");
  }

  // 2a) jei neaišku – pirma žinutė, po to reitingas
  function submitUnclearMessage(v: string) {
    const cleaned = v.trim();
    setMessage(cleaned);
    push("user", cleaned || "—");
    push("bot", copy.askRating);
    setStep("rating");
  }

  // 2b) reitingas
  function pickRating(id: string) {
    const r = Number(id);
    setRating(Number.isFinite(r) ? r : null);
    push("user", id);

    // jei "unclear" – jau turim žinutę -> užbaigiam iškart
    if (clarityChoice === "unclear") {
      push("bot", copy.done);
      openEmailDraft({ clarityChoice, rating: Number.isFinite(r) ? r : null, message });
      setStep("done");
      return;
    }

    // jei "clear" – leidžiam optional komentarą
    push("bot", copy.askOptional);
    setStep("optional_note");
  }

  // 3) optional komentaras (clear flow)
  function submitOptionalNote(v: string) {
    const cleaned = v.trim();
    push("user", cleaned || "—");
    push("bot", copy.done);

    openEmailDraft({
      clarityChoice,
      rating,
      message: cleaned,
    });

    setStep("done");
  }

  return (
    <div className={styles.botWrap} data-mode="embedded">
      <div className={styles.chatList} ref={listRef} style={{ height: 360 }}>
        {messages.map((m) => (
          <ChatMessage key={m.id} m={m} botAvatarSrc={BOT_AVATAR} />
        ))}

        {step === "clarity_choice" && (
          <div className={styles.botTools}>
            <QuickReplies options={options} onPick={pickClarity} />
          </div>
        )}

        {step === "rating" && (
          <div className={styles.botTools}>
            <QuickReplies options={ratingOptions} onPick={pickRating} />
          </div>
        )}

        {step === "done" && (
          <div className={styles.botTools}>
            <button className="btn btnGhost btnBlock" type="button" onClick={reset}>
              {copy.restart}
            </button>
          </div>
        )}
      </div>

      {step === "unclear_message" && (
        <ChatInput placeholder={copy.askUnclear} onSend={submitUnclearMessage} />
      )}

      {step === "optional_note" && (
        <ChatInput placeholder={copy.askOptional} onSend={submitOptionalNote} allowEmpty />
      )}
    </div>
  );
}
