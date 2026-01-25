// src/app/demo/sales/page.tsx
export const dynamic = "force-dynamic";

import Link from "next/link";
import ChatShell from "@/components/support-bot/ChatShell";
import SalesBot from "@/components/sales-bot/SalesBot";
import styles from "./salesDemo.module.css";

export default function SalesDemoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.topRow}>
            <Link className={styles.back} href="/">
              ← Back to home
            </Link>
            <div className={styles.badge}>Sales Assistant Demo</div>
          </div>

          <h1 className={styles.h1}>Recommend the right chatbot setup</h1>
          <p className={styles.sub}>
            This demo helps visitors pick the best chatbot strategy based on goals,
            traffic, tools and language needs — then generates a recommendation summary.
          </p>

          <div className={styles.grid}>
            {/* LEFT */}
            <div className={styles.demo}>
              <ChatShell
                title="Sales Assistant"
                subtitle="I’ll help you figure out which chatbot setup makes sense."
                theme="sales"
              >
                <SalesBot mode="page" />
              </ChatShell>

              <div className={styles.note}>
                Demo behavior: opens a pre-filled email draft. In production this can book calls or route to CRM.
              </div>
            </div>

            {/* RIGHT */}
            <div className={styles.side}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>What it does</div>
                <ul className={styles.list}>
                  <li>Asks goal + traffic + channels</li>
                  <li>Checks CRM & language needs</li>
                  <li>Suggests the best bot setup</li>
                </ul>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Why it’s useful</div>
                <p className={styles.cardText}>
                  Visitors get clarity fast, and you get structured info that makes sales follow-ups easy.
                </p>
              </div>

              {/* NEXT STEP (same height, just narrower width) */}
              <div className={`${styles.card} ${styles.nextCard}`}>
                <div className={styles.cardTitle}>Next step</div>
                <p className={styles.cardText}>
                  Want this adapted to your niche? We can adjust questions, add scoring, and integrate booking/CRM.
                </p>

                <div className={styles.actions}>
                  <a
                    className={styles.themePrimaryBtn}
                    href="mailto:lukas.juodeikis.dev@gmail.com?subject=Sales%20Assistant%20Chatbot&body=Hi%20Lukas,%0A%0AI%E2%80%99d%20like%20to%20discuss%20a%20Sales%20Assistant%20chatbot.%0A%0AWebsite:%20%0AWhat%20do%20you%20sell?%20%0ATypical%20lead%20value:%20%0AWhere%20should%20handoffs%20go%20(CRM%2Fcalendar%2Femail)?%20%0ALanguages%20needed:%20%0A%0AThanks!"
                  >
                    Discuss your sales assistant
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 18, textAlign: "center" }}>
            <Link href="/demo/leads" className="btn btnGhost">
              ← Back to Leads Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
