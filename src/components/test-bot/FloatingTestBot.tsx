// src/components/test-bot/FloatingTestBot.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "./floatingTestBot.module.css";

import { useLang } from "@/i18n/useLang";
import DemoBotsPanel from "./DemoBotsPanel";

const AUTOSTART_KEY = "testbot_autostart_done";
const OPEN_KEY = "testbot_open_state";

function readOpen(): boolean {
  try {
    return localStorage.getItem(OPEN_KEY) === "1";
  } catch {
    return false;
  }
}

export default function FloatingTestBot() {
  const lang = useLang();

  const [open, setOpen] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return readOpen();
  });

  const didAutostart = useRef(false);

  const labels = useMemo(() => {
    return {
      open: lang === "lt" ? "Atidaryti" : "Open",
      close: lang === "lt" ? "Uždaryti" : "Close",
      title: "DemoBots",
    };
  }, [lang]);


  useEffect(() => {
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
  }, []);

 
  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      localStorage.setItem(OPEN_KEY, "1");
      localStorage.setItem(AUTOSTART_KEY, "1");
    };

    window.addEventListener("demobots:open-feedback", onOpen);
    return () => window.removeEventListener("demobots:open-feedback", onOpen);
  }, []);

  function toggle(next?: boolean) {
    const v = typeof next === "boolean" ? next : !open;
    setOpen(v);
    localStorage.setItem(OPEN_KEY, v ? "1" : "0");
    localStorage.setItem(AUTOSTART_KEY, "1");
  }

  return (
    <div className={styles.wrap} aria-label="Floating demo bot">
      <button
        type="button"
        className={styles.bubble}
        onClick={() => toggle()}
        aria-label={open ? labels.close : labels.open}
        title={open ? labels.close : labels.open}
      >
        <Image
          className={styles.bubbleImg}
          src="/chatas.webp"
          alt=""
          aria-hidden="true"
          width={60}
          height={60}
        />
      </button>

      <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`}>
        <div className={styles.panelHead}>
          <div className={styles.panelTitleRow}>
            <div className={styles.avatar} aria-hidden="true">
              <Image src="/aaa.webp" alt="" width={38} height={38} />
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
