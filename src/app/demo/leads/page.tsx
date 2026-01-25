// src/app/demo/leads/page.tsx
export const dynamic = "force-dynamic";

import Link from "next/link";
import ChatShell from "@/components/support-bot/ChatShell";
import LeadsBot from "@/components/leads-bot/LeadsBot";
import styles from "./leadsDemo.module.css";

export default function LeadsDemoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.topRow}>
            <Link className={styles.back} href="/">
              ← Back to home
            </Link>
            <div className={styles.badge}>Leads Bot Demo</div>
          </div>

          <h1 className={styles.h1}>Turn visitors into qualified leads</h1>
          <p className={styles.sub}>
            This demo shows a Leads chatbot that asks a few clear questions (5–7 clicks),
            collects contact details, and generates a lead-ready summary.
          </p>

          <div className={styles.grid}>
            {/* LEFT: Chat demo */}
            <div className={styles.demo}>
              <ChatShell
                title="Leads Bot"
                subtitle="Try it: pick options → enter email → (optional) message → summary."
              >
                <LeadsBot mode="page" />
              </ChatShell>

              <div className={styles.note}>
                Demo behavior: it opens a pre-filled email draft. In production it can send leads to your CRM/inbox.
              </div>
            </div>

            {/* RIGHT: Explanation */}
            <div className={styles.side}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>What it collects</div>
                <ul className={styles.list}>
                  <li>What they’re looking for</li>
                  <li>Business type & company size</li>
                  <li>Timeframe & budget range</li>
                  <li>Email + optional message</li>
                </ul>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Why it’s useful</div>
                <p className={styles.cardText}>
                  Instead of “Hi, I’m interested”, you get structured info that makes it easy to reply fast and close more deals.
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Next step</div>
                <p className={styles.cardText}>
                  Want this customized for your niche? We can adjust questions, routing (CRM/email), and add qualification scoring.
                </p>

                <div className={styles.actions}>
                  <a
                    className="btn btnPrimary"
                    href="mailto:lukas.juodeikis.dev@gmail.com?subject=Leads%20Bot%20Chatbot&body=Hi%20Lukas,%0A%0AWebsite:%20%0ABusiness%20type:%20%0AIdeal%20customer:%20%0AWhat%20info%20should%20the%20bot%20collect?%20%0AWhere%20should%20leads%20go%20(email%2FCRM)?%20%0A%0AThanks!"
                  >
                    Discuss your leads bot
                  </a>

                  <Link className="btn btnSecondary" href="/demo/support">
                    View Support Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 18, textAlign: "center" }}>
            <Link href="/demo/sales" className="btn btnGhost">
              Next demo: Sales Assistant →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
