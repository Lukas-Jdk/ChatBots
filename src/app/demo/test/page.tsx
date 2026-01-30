"use client";

import styles from "./page.module.css";
import FloatingTestBot from "@/components/test-bot/FloatingTestBot";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

export default function TestDemoPage() {
  const lang = useLang();
  const tr = t(lang);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.center}>
            <h1 className={styles.h1}>{tr.test.h1}</h1>
            <p className={styles.sub}>{tr.test.sub}</p>

            {/* vietoj lentelių – tvarkingi bullet’ai per vidurį */}
            <div className={styles.bullets} aria-label={tr.test.right1Title}>
              {tr.test.right1List.map((x, i) => (
                <div key={i} className={styles.bullet}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span className={styles.bulletText}>{x}</span>
                </div>
              ))}
            </div>

            <div className={styles.note} aria-label={tr.test.right2Title}>
              <div className={styles.noteTitle}>{tr.test.right2Title}</div>
              <div className={styles.noteText}>{tr.test.right2Text}</div>
            </div>

            <div className={styles.micro}>
              <span className={styles.microPill}>Demo</span>
              <span className={styles.microText}>{tr.test.chatSub}</span>
            </div>
          </div>
        </div>

        {/* burbulas + auto-open */}
        <FloatingTestBot />
      </section>
    </main>
  );
}
