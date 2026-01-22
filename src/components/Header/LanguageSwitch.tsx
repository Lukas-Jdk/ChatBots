// src/components/Header/LanguageSwitch.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";

type Lang = "en" | "lt" | "no";

const LANGS: {
  code: Lang;
  label: "EN" | "LT" | "NO";
  name: string;
  flag: string;
}[] = [
  { code: "en", label: "EN", name: "English", flag: "/flags/en.webp" },
  { code: "lt", label: "LT", name: "Lietuvių", flag: "/flags/lt.webp" },
  { code: "no", label: "NO", name: "Norsk", flag: "/flags/no.webp" },
];

const STORAGE_KEY = "ljd_lang";

export default function LanguageSwitch() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "lt" || saved === "no") setLang(saved);
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div className={styles.langWrap} ref={ref}>
      <button
        type="button"
        className={styles.langBtn}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className={styles.flagBox} aria-hidden="true">
          <Image
            src={current.flag}
            alt=""
            fill
            sizes="18px"
            className={styles.flagImg}
            priority
            unoptimized
          />
        </span>

        <span className={styles.langCode}>{current.label}</span>
        <span className={styles.langChevron}>▾</span>
      </button>

      {open && (
        <div className={styles.langMenu} role="menu">
          {LANGS.map((l) => {
            const active = l.code === lang;

            return (
              <button
                key={l.code}
                type="button"
                role="menuitem"
                className={`${styles.langItem} ${
                  active ? styles.langItemActive : ""
                }`}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
              >
                <span className={styles.flagBox} aria-hidden="true">
                  <Image
                    src={l.flag}
                    alt=""
                    fill
                    sizes="18px"
                    className={styles.flagImg}
                    unoptimized
                  />
                </span>

                <span className={styles.langItemText}>
                  <span className={styles.langItemLabel}>{l.label}</span>
                  <span className={styles.langItemName}>{l.name}</span>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
