// src/app/demo/support/page.tsx
import Link from "next/link";
import ChatShell from "@/components/support-bot/ChatShell";
import SupportBot from "@/components/support-bot/SupportBot";
import styles from "./supportDemo.module.css";

export default function SupportDemoPage() {
  return (
    <main className="page">
      <section className={styles.top}>
        <div className="container">
          <div className={styles.topRow}>
            <Link className={styles.back} href="/">
              ← Back to landing
            </Link>

            <div className={styles.badge}>Support Bot Demo</div>
          </div>

          <h1 className={styles.h1}>
            Support chatbot that <span>creates tickets</span>
          </h1>

          <p className={styles.sub}>
            This demo collects a topic, priority, email and message — then generates a clean ticket summary.
            Demo version opens an email draft; production versions can send tickets to helpdesk/CRM.
          </p>

          <div className={styles.grid}>
            {/* LEFT: guidance */}
            <div className={`${styles.side} card glow`}>
              <div className={styles.sideTitle}>What to try</div>

              <div className={styles.sideList}>
                <div className={styles.sideItem}>
                  <span className={styles.dot} />
                  Choose a topic and urgency
                </div>
                <div className={styles.sideItem}>
                  <span className={styles.dot} />
                  Enter any email (validation included)
                </div>
                <div className={styles.sideItem}>
                  <span className={styles.dot} />
                  Describe the issue → get ticket summary
                </div>
              </div>

              <div className={styles.sideTitle2}>Where this is useful</div>
              <div className={styles.tags}>
                <div className={styles.tag}>Appointments</div>
                <div className={styles.tag}>Pricing questions</div>
                <div className={styles.tag}>Website issues</div>
                <div className={styles.tag}>General support</div>
              </div>

              <div className={styles.sideCtas}>
                <a className={styles.primary} href="#request">
                  Request setup
                </a>
                <Link className={styles.ghost} href="/">
                  See overview
                </Link>
              </div>

              <div className={styles.note}>
                Built by Lukas Juodeikis. Custom chatbot flows, languages, branding, and integrations.
              </div>
            </div>

            {/* RIGHT: demo */}
            <div className={styles.wrap}>
              <ChatShell
                title="Support Assistant Bot"
                subtitle="Click quick replies. When done, generate a ticket summary."
              >
                <SupportBot mode="page" />
              </ChatShell>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST */}
      <section id="request" className={styles.requestSection}>
        <div className="container">
          <div className={`${styles.requestCard} card glow`}>
            <h2 className={styles.requestTitle}>
              Want this bot on your website? <span>Let’s build it</span>
            </h2>
            <p className={styles.requestText}>
              I’ll customize the questions, language, and ticket format for your business.
              Tell me your website link and what you want to collect from customers.
            </p>

            <div className={styles.requestActions}>
              <a
                className={styles.primary}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lukas.juodeikis.dev@gmail.com&su=Support%20Bot%20Setup%20Request&body=Hi%20Lukas%2C%0A%0AI%20want%20the%20Support%20Bot%20for%20my%20business.%0A%0AWebsite%3A%20%0AWhat%20services%2Ftopics%3A%20%0AWhat%20should%20it%20collect%3A%20%0ALanguage%3A%20%0A%0AThanks!"
                target="_blank"
                rel="noreferrer"
              >
                Request setup (email)
              </a>

              <Link className={styles.ghost} href="/">
                Back to landing
              </Link>
            </div>

            <div className={styles.requestFoot}>
              Tip: in production, this can send tickets to your inbox/helpdesk automatically.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
