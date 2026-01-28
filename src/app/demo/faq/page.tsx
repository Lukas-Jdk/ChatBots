// src/app/demo/faq/page.tsx
"use client";

import Link from "next/link";
import FaqAccordion from "@/components/faq/FaqAccordion";
import styles from "./faqDemo.module.css";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n/translations";

export default function FaqDemoPage() {
  const lang = useLang();
  const tr = t(lang);

  return (
    <main className={styles.page}>
      <section className={styles.top}>
        <div className="container">
          <h1 className={styles.h1}>{tr.faq.h1}</h1>
          <p className={styles.sub}>{tr.faq.sub}</p>

          <FaqAccordion />

          <div className={styles.nextWrap}>
            <div className={styles.nextCard}>
              <div className={styles.nextLeft}>
                <div className={styles.nextKicker}>{tr.faq.nextKicker}</div>
                <h2 className={styles.nextTitle}>{tr.faq.nextTitle}</h2>
                <p className={styles.nextText}>{tr.faq.nextText}</p>
              </div>

              <div className={styles.nextRight}>
                <Link href="/demo/sales" className="btn btnPrimary">
                  {tr.faq.nextPrimary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
