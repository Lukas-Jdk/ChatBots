// src/app/demo/test/page.tsx
"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import ChatShell from "@/components/support-bot/ChatShell";
import SalesBot from "@/components/sales-bot/SalesBot";
import styles from "./testDemo.module.css";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

export default function TestDemoPage() {
  const lang = useLang();
  const tr = t(lang);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.topRow}>
            <Link className={styles.back} href="/">
              ← {tr.test.back}
            </Link>
          </div>

          <h1 className={styles.h1}>{tr.test.h1}</h1>
          <p className={styles.sub}>{tr.test.sub}</p>

          <div className={styles.grid}>
            <div className={styles.demo}>
              <ChatShell title={tr.test.chatTitle} subtitle={tr.test.chatSub} theme="sales">
                <SalesBot mode="page" variant="test" />
              </ChatShell>
            </div>

            <div className={styles.side}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>{tr.test.right1Title}</div>
                <ul className={styles.list}>
                  {tr.test.right1List.map((x: string) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>{tr.test.right2Title}</div>
                <p className={styles.cardText}>{tr.test.right2Text}</p>
              </div>

              <div className={`${styles.card} ${styles.nextCard}`}>
                <div className={styles.cardTitle}>{tr.test.nextTitle}</div>
                <p className={styles.cardText}>{tr.test.nextText}</p>

                <div className={styles.actions}>
                  <a
                    className={styles.themePrimaryBtn}
                    href={`mailto:lukas.juodeikis.dev@gmail.com?subject=${encodeURIComponent(
                      tr.test.mailSubject
                    )}`}
                  >
                    {tr.test.cta}
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
