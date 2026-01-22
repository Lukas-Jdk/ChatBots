// src/app/demo/support/page.tsx
import Link from "next/link";
import ChatShell from "@/components/support-bot/ChatShell";
import SupportBot from "@/components/support-bot/SupportBot";
import styles from "./supportDemo.module.css";

export default function SupportDemoPage() {
  return (
    <main className="page">
      <div className="bgWrap" aria-hidden="true">
        <div className="bgBase" />
        <div className="bgGrid" />
        <div className="bgLines" />
        <div className="bgParticles" />
        <div className="bgVignette" />
      </div>

      <section className={styles.top}>
        <div className="container">
          <div className={styles.topRow}>
            <Link className={styles.back} href="/">
              ← Back to landing
            </Link>

            <div className={styles.badge}>Support Assistant Demo</div>
          </div>

          <h1 className={styles.h1}>
            Try the <span>Support Assistant</span>
          </h1>
          <p className={styles.sub}>
            This demo collects a topic, priority, email and message — then prepares a ticket summary.
          </p>

          <div className={styles.wrap}>
            <ChatShell
              title="Support Assistant Bot"
              subtitle="Click quick replies. When done, send a pre-filled email ticket."
            >
              <SupportBot mode="page" />
            </ChatShell>
          </div>
        </div>
      </section>
    </main>
  );
}
