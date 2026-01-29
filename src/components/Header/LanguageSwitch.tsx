// src/components/Header/LanguageSwitch.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import type { Lang } from "@/i18n";

const STORAGE_KEY = "ljd_lang";

const LANGS = [
  { code: "en", label: "EN", name: "English", flag: "/flags/en.webp" },
  { code: "lt", label: "LT", name: "Lietuvių", flag: "/flags/lt.webp" },
] as const;

export default function LanguageSwitch() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "lt") setLang(saved);
    else localStorage.setItem(STORAGE_KEY, "en");
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  function choose(next: Lang) {
    localStorage.setItem(STORAGE_KEY, next);
    setLang(next);
    setOpen(false);
    window.location.reload();
  }

  return (
    <div className={styles.langWrap} ref={ref}>
      <button
        type="button"
        className={styles.langBtn}
        onClick={() => setOpen((v) => !v)}
      >
        <Image
          src={current.flag}
          alt=""
          width={18}
          height={12}
          className={styles.langFlag}
        />
        <span className={styles.langCode}>{current.label}</span>
        <span className={styles.langChevron}>▾</span>
      </button>

      {open && (
        <div className={styles.langMenu}>
          {LANGS.map((l) => {
            const active = l.code === lang;
            return (
              <button
                key={l.code}
                className={`${styles.langItem} ${
                  active ? styles.langItemActive : ""
                }`}
                onClick={() => choose(l.code)}
              >
                <Image
                  src={l.flag}
                  alt=""
                  width={18}
                  height={12}
                  className={styles.langFlag}
                />
                <div className={styles.langItemText}>
                  <div className={styles.langItemLabel}>{l.label}</div>
                  <div className={styles.langItemName}>{l.name}</div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
