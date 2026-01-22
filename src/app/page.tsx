// src/app/page.tsx
import Link from "next/link";
import ChatShell from "@/components/support-bot/ChatShell";
import SupportBot from "@/components/support-bot/SupportBot";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className="page">
      <div className="bgWrap" aria-hidden="true">
        <div className="bgBase" />
        <div className="bgGrid" />
        <div className="bgLines" />
        <div className="bgParticles" />
        <div className="bgVignette" />
      </div>

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.left}>
              <div className={styles.pill}>
                <span className={styles.pulse} />
                Service Business Chatbots
              </div>

              <h1 className={styles.h1}>
                Support Assistant Bot
                <br />
                <span className={styles.accent}>that saves time</span>
              </h1>

              <p className={styles.lead}>
                A clean, fast support chatbot demo built for service businesses.
                It collects the issue, priority and contact details — then creates a ready-to-send ticket.
              </p>

              <div className={styles.actions}>
                <Link className={styles.primary} href="/demo/support">
                  Try Live Demo
                </Link>
                <a className={styles.secondary} href="#contact">
                  Contact
                </a>
              </div>

              <div className={styles.mini}>
                <div className={styles.miniItem}>
                  <span className={styles.dot} /> 24/7 inquiries
                </div>
                <div className={styles.miniItem}>
                  <span className={styles.dot} /> Ticket-ready summaries
                </div>
                <div className={styles.miniItem}>
                  <span className={styles.dot} /> No missed leads
                </div>
              </div>
            </div>

            <div className={styles.right}>
              <ChatShell
                title="Embedded Demo"
                subtitle="This is how it would look on your website. Try it."
              >
                <SupportBot mode="embedded" />
              </ChatShell>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.features}>
            <div className={`${styles.featureCard} card glow`}>
              <div className={styles.featureTitle}>Collects the right info</div>
              <div className={styles.featureText}>
                Topic, urgency, email, message — structured automatically.
              </div>
            </div>

            <div className={`${styles.featureCard} card glow`}>
              <div className={styles.featureTitle}>Feels premium</div>
              <div className={styles.featureText}>
                Modern UI, quick replies, and a clean ticket summary.
              </div>
            </div>

            <div className={`${styles.featureCard} card glow`}>
              <div className={styles.featureTitle}>Easy to ship</div>
              <div className={styles.featureText}>
                Start with a simple flow now, add AI and integrations later.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className={`${styles.contactCard} card glow`}>
            <h2 className={styles.contactTitle}>
              Want this for your business? <span>Let’s talk</span>
            </h2>
            <p className={styles.contactText}>
              For now this demo opens an email draft. In production, it can send tickets to your inbox/helpdesk.
            </p>

            <a
              className={styles.primary}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lukas.juodeikis.dev@gmail.com&su=Support%20Assistant%20Bot%20-%20Inquiry"
              target="_blank"
              rel="noreferrer"
            >
              Email me
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            © {new Date().getFullYear()} LjD. Chatbot demos.
          </div>
        </div>
      </footer>
    </main>
  );
}
