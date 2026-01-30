// src/components/test-bot/FloatingTestBot.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./floatingTestBot.module.css";
import SalesBot from "@/components/sales-bot/SalesBot";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

const AUTOSTART_KEY = "testbot_autostart_done";
const OPEN_KEY = "testbot_open_state";

export default function FloatingTestBot() {
  const lang = useLang();
  const tr = t(lang);

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const didAutostart = useRef(false);

  const labels = useMemo(() => {
    return {
      open: lang === "lt" ? "Atidaryti botą" : "Open bot",
      close: lang === "lt" ? "Uždaryti" : "Close",
      title: tr.test.chatTitle,
    };
  }, [lang, tr]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // restore open state (nice UX if user refreshes)
  useEffect(() => {
    if (!mounted) return;
    const saved = localStorage.getItem(OPEN_KEY);
    if (saved === "1") setOpen(true);
  }, [mounted]);

  // autostart once per user (or per browser)
  useEffect(() => {
    if (!mounted) return;
    if (didAutostart.current) return;

    didAutostart.current = true;

    const already = localStorage.getItem(AUTOSTART_KEY) === "1";
    if (already) return;

    const tmr = window.setTimeout(() => {
      setOpen(true);
      localStorage.setItem(AUTOSTART_KEY, "1");
      localStorage.setItem(OPEN_KEY, "1");
    }, 1000);

    return () => window.clearTimeout(tmr);
  }, [mounted]);

  function toggle(next?: boolean) {
    const v = typeof next === "boolean" ? next : !open;
    setOpen(v);
    localStorage.setItem(OPEN_KEY, v ? "1" : "0");
    // If user closes it, we still keep AUTOSTART done to avoid annoying re-open.
    localStorage.setItem(AUTOSTART_KEY, "1");
  }

  return (
    <div className={styles.wrap} aria-label="Floating demo bot">
      {/* Bubble */}
      <button
        type="button"
        className={styles.bubble}
        onClick={() => toggle(true)}
        aria-label={labels.open}
      >
        <span className={styles.bubbleIcon} aria-hidden="true">
          💬
        </span>
        <span className={styles.bubblePing} aria-hidden="true" />
      </button>

      {/* Panel */}
      <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`}>
        <div className={styles.panelHead}>
          <div className={styles.panelTitle}>{labels.title}</div>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => toggle(false)}
            aria-label={labels.close}
            title={labels.close}
          >
            ✕
          </button>
        </div>

        <div className={styles.panelBody}>
          {/* We re-use SalesBot variant="test" as the "bot finder" */}
          <SalesBot mode="embedded" variant="test" />
        </div>
      </div>
    </div>
  );
}
