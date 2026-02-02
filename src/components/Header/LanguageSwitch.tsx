// src/components/Header/LanguageSwitch.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";

import { useLang, setLang } from "@/i18n/useLang";
import type { Lang } from "@/i18n";

type LangOption = { id: Lang; label: string; flagSrc: string };

export default function LanguageSwitch() {
  const lang = useLang();
  const [open, setOpen] = useState(false);

  const options: LangOption[] = useMemo(
    () => [
      { id: "lt", label: "LT", flagSrc: "/flags/lt.webp" },
      { id: "en", label: "EN", flagSrc: "/flags/en.webp" },
    ],
    []
  );

  const current = options.find((o) => o.id === lang) ?? options[0];

  return (
    <div className={styles.langWrap}>
      <button
        type="button"
        className={styles.langBtn}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <Image
          className={styles.langFlag}
          src={current.flagSrc}
          alt=""
          width={18}
          height={13}
          priority={false}
        />

        <span className={styles.langCode}>{current.label}</span>
        <span className={styles.langChevron}>▾</span>
      </button>

      {open && (
        <div className={styles.langMenu} role="menu">
          {options.map((o) => (
            <button
              key={o.id}
              type="button"
              className={styles.langItem}
              onClick={() => {
                setLang(o.id);
                setOpen(false);
              }}
            >
              <Image
                className={styles.langFlag}
                src={o.flagSrc}
                alt=""
                width={18}
                height={13}
              />
              <span>{o.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
