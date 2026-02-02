// src/components/faq/FaqAccordion.tsx
"use client";

import { useState } from "react";
import styles from "./faq.module.css";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  const lang = useLang();       
  const tr = t(lang);
  const items = tr.faq.items;

  return (
    <div className={styles.faq}>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          <button
            type="button"
            className={styles.question}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item.q}</span>
            <span className={styles.icon}>{open === i ? "−" : "+"}</span>
          </button>

          {open === i ? <div className={styles.answer}>{item.a}</div> : null}
        </div>
      ))}
    </div>
  );
}
