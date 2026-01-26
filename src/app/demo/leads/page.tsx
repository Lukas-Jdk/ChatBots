// src/app/demo/leads/page.tsx
"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import ChatShell from "@/components/support-bot/ChatShell";
import LeadsBot from "@/components/leads-bot/LeadsBot";
import styles from "./leadsDemo.module.css";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n/translations";

export default function LeadsDemoPage() {
  const lang = useLang();
  const tr = t(lang);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.topRow}>
            <Link className={styles.back} href="/">
              ← {tr.leads.back}
            </Link>
          </div>

          <h1 className={styles.h1}>{tr.leads.h1}</h1>
          <p className={styles.sub}>{tr.leads.sub}</p>

          <div className={styles.grid}>
            <div className={styles.demo}>
              <ChatShell
                title={tr.leads.chatTitle}
                subtitle={tr.leads.chatSub}
                theme="leads"
              >
                <LeadsBot mode="page" />
              </ChatShell>

            
            </div>

            <div className={styles.side}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>{tr.leads.right1Title}</div>
                <ul className={styles.list}>
                  {tr.leads.right1List.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>{tr.leads.right2Title}</div>
                <p className={styles.cardText}>{tr.leads.right2Text}</p>
              </div>

              <div className={`${styles.card} ${styles.nextCard}`}>
                <div className={styles.cardTitle}>{tr.leads.nextTitle}</div>
                <p className={styles.cardText}>{tr.leads.nextText}</p>

                <div className={styles.actions}>
                  <a
                    className={styles.themePrimaryBtn}
                    href="mailto:lukas.juodeikis.dev@gmail.com?subject=Qualified%20Lead"
                  >
                    {tr.leads.cta}
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
