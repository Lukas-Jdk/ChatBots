// src/app/demo/support/page.tsx
export const dynamic = "force-dynamic";

import Link from "next/link";
import ChatShell from "@/components/support-bot/ChatShell";
import SupportBot from "@/components/support-bot/SupportBot";
import styles from "./supportDemo.module.css";

export default function SupportDemoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.topRow}>
            <Link className={styles.back} href="/">
              ← Back to home
            </Link>
            <div className={styles.badge}>Support Assistant Demo</div>
          </div>

          <h1 className={styles.h1}>
            Turn chats into <span>support tickets</span>
          </h1>
          <p className={styles.sub}>
            This demo shows a Support Assistant chatbot that collects the issue, priority and contact details —
            then generates a ticket-ready summary.
          </p>

          <div className={styles.grid}>
            <div className={styles.demo}>
              <ChatShell
                title="Support Assistant"
                subtitle="Try it: pick a topic → set urgency → enter email → describe the issue."
              >
                <SupportBot mode="page" />
              </ChatShell>

              <div className={styles.note}>
                Demo behavior: it opens a pre-filled email draft. In production it can send tickets to your inbox/helpdesk.
              </div>
            </div>

            <div className={styles.side}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>What it does</div>
                <ul className={styles.list}>
                  <li>Collects topic, urgency, email and message.</li>
                  <li>Prepares a clean ticket summary.</li>
                  <li>Prevents “missing info” back-and-forth.</li>
                  <li>Works 24/7 on your website.</li>
                </ul>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Great for</div>
                <div className={styles.pills}>
                  <span className={styles.pill}>Service businesses</span>
                  <span className={styles.pill}>Agencies</span>
                  <span className={styles.pill}>Bookings</span>
                  <span className={styles.pill}>Tech support</span>
                  <span className={styles.pill}>Website inquiries</span>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Next step</div>
                <p className={styles.cardText}>
                  Want this customized for your business? I can adapt questions, tone, and routing (email/helpdesk/CRM).
                </p>

                <div className={styles.actions}>
                  <a
                    className="btn btnPrimary"
                    href="mailto:lukas.juodeikis.dev@gmail.com?subject=Support%20Assistant%20Chatbot&body=Hi%20Lukas,%0A%0AWebsite:%20%0ABusiness%20type:%20%0AWhat%20support%20requests%20do%20you%20get%20most%20often?%20%0AWhere%20should%20tickets%20go%20(email%2Fhelpdesk%2FCRM)?%20%0A%0AThanks!"
                  >
                    Discuss your chatbot
                  </a>

                  <Link className="btn btnSecondary" href="/demo/faq">
                    View FAQ Demo
                  </Link>
                </div>

                <div className={styles.mini}>
                  Typical setup: topic + priority + contact → ticket summary. AI can be added later.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottomNav}>
            <Link className={styles.bottomLink} href="/demo/leads">
              Next demo: Leads Bot →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
