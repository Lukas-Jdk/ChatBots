// src/app/demo/leads/page.tsx
"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import ChatShell from "@/components/support-bot/ChatShell";
import LeadsBot from "@/components/leads-bot/LeadsBot";
import styles from "./leadsDemo.module.css";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

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
                  <button
                  className={`btn ${styles.ctaLeads }`} type="button"
                  onClick={() => {
                    const to = "lukas.juodeikis.dev@gmail.com";
                    const subject = "Chatbot inquiry";
                    const body =
                      "Sveiki,\n\nDomina chatbot sprendimas mano verslui.";

                    const url =
                      "https://mail.google.com/mail/?view=cm&fs=1" +
                      `&to=${encodeURIComponent(to)}` +
                      `&su=${encodeURIComponent(subject)}` +
                      `&body=${encodeURIComponent(body)}`;

                    window.open(url, "_blank", "noopener,noreferrer");
                  }}
                >
                   {tr.faq.nextPrimary}
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
