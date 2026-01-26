// src/app/demo/support/page.tsx
"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import ChatShell from "@/components/support-bot/ChatShell";
import SupportBot from "@/components/support-bot/SupportBot";
import styles from "./supportDemo.module.css";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n/translations";

export default function SupportDemoPage() {
  const lang = useLang();
  const tr = t(lang);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.topRow}>
            <Link className={styles.back} href="/">
              ← {tr.support.back}
            </Link>
          
          </div>

          <h1 className={styles.h1}>
            {tr.support.h1_a} <span>{tr.support.h1_b}</span>
          </h1>

          <p className={styles.sub}>{tr.support.sub}</p>

          <div className={styles.grid}>
            <div className={styles.demo}>
              <ChatShell
                title={tr.support.chatTitle}
               
                theme="support"
              >
                <SupportBot mode="page" />
              </ChatShell>

             
            </div>

            <div className={styles.side}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>{tr.support.whatTitle}</div>
                <ul className={styles.list}>
                  {tr.support.what.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>{tr.support.greatTitle}</div>
                <div className={styles.pills}>
                  {tr.support.great.map((x) => (
                    <span key={x} className={styles.pill}>
                      {x}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${styles.card} ${styles.nextCard}`}>
                <div className={styles.cardTitle}>{tr.support.nextTitle}</div>
                <p className={styles.cardText}>{tr.support.nextText}</p>

                <div className={styles.actions}>
                  <a
                    className={styles.themePrimaryBtn}
                    href="mailto:lukas.juodeikis.dev@gmail.com?subject=Support%20Assistant%20Chatbot"
                  >
                    {tr.support.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
