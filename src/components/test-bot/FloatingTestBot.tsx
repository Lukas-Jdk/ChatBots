// src/components/test-bot/FloatingTestBot.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./floatingTestBot.module.css";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

import DemoBotsPanel from "./DemoBotsPanel";

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
      open: lang === "lt" ? "Atidaryti" : "Open",
      close: lang === "lt" ? "Uždaryti" : "Close",
      title: "DemoBots",
    };
  }, [lang]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // restore open state
  useEffect(() => {
    if (!mounted) return;
    const saved = localStorage.getItem(OPEN_KEY);
    if (saved === "1") setOpen(true);
  }, [mounted]);

  // autostart once
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

  // ✅ ATIDARYTI PANELĘ IŠ KITUR (pvz. kai Test botas baigia)
  useEffect(() => {
    if (!mounted) return;

    const onOpen = () => {
      setOpen(true);
      localStorage.setItem(OPEN_KEY, "1");
      localStorage.setItem(AUTOSTART_KEY, "1");
    };

    window.addEventListener("demobots:open-feedback", onOpen);

    return () => {
      window.removeEventListener("demobots:open-feedback", onOpen);
    };
  }, [mounted]);

  function toggle(next?: boolean) {
    const v = typeof next === "boolean" ? next : !open;
    setOpen(v);
    localStorage.setItem(OPEN_KEY, v ? "1" : "0");
    localStorage.setItem(AUTOSTART_KEY, "1");
  }

  return (
    <div className={styles.wrap} aria-label="Floating demo bot">
      {/* Bubble */}
      <button
        type="button"
        className={styles.bubble}
        onClick={() => toggle()} // ✅ dabar veikia ir atidaryti, ir uždaryti
        aria-label={open ? labels.close : labels.open}
        title={open ? labels.close : labels.open}
      >
        <img
          className={styles.bubbleImg}
          src="/chatas.webp"
          alt=""
          aria-hidden="true"
        />
      </button>

      {/* Panel */}
      <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`}>
        <div className={styles.panelHead}>
          <div className={styles.panelTitleRow}>
            <div className={styles.avatar} aria-hidden="true">
              <img src="/aaa.webp" alt="" />
            </div>
            <div className={styles.panelTitle}>{labels.title}</div>
          </div>

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
          <DemoBotsPanel />
        </div>
      </div>
    </div>
  );
}
