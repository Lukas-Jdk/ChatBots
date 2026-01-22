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

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.left}>
              <div className={styles.pill}>
                <span className={styles.pulse} />
                Service Business Chatbots
              </div>

              <h1 className={styles.h1}>
                Chatbots that <span className={styles.accent}>save time</span>
              </h1>

              <p className={styles.lead}>
                I design and build chatbot demos for service businesses.
                They collect the right info, qualify leads, and turn chats into
                structured tickets — ready to send or integrate with your helpdesk.
              </p>

              <div className={styles.actions}>
                <a className={styles.primary} href="#live-demo">
                  Try Live Demo
                </a>
                <a className={styles.secondary} href="#request">
                  Request setup
                </a>
              </div>

              <div className={styles.mini}>
                <div className={styles.miniItem}>
                  <span className={styles.dot} /> Faster replies
                </div>
                <div className={styles.miniItem}>
                  <span className={styles.dot} /> Ticket-ready summaries
                </div>
                <div className={styles.miniItem}>
                  <span className={styles.dot} /> More qualified leads
                </div>
              </div>
            </div>

            {/* RIGHT: clear value + steps (no empty embedded demo) */}
            <div className={styles.right}>
              <div className={`${styles.previewCard} card glow`}>
                <div className={styles.previewTop}>
                  <div className={styles.previewTitle}>What you get</div>
                  <div className={styles.previewBadge}>DEMO SUITE</div>
                </div>

                <div className={styles.previewList}>
                  <div className={styles.previewItem}>
                    <div className={styles.previewItemTitle}>FAQ Bot</div>
                    <div className={styles.previewItemText}>
                      Answers common questions instantly and reduces repetitive messages.
                    </div>
                  </div>
                  <div className={styles.previewItem}>
                    <div className={styles.previewItemTitle}>Support Bot</div>
                    <div className={styles.previewItemText}>
                      Collects issue + priority + contact — generates a clean ticket summary.
                    </div>
                  </div>
                  <div className={styles.previewItem}>
                    <div className={styles.previewItemTitle}>Leads Bot</div>
                    <div className={styles.previewItemText}>
                      Qualifies visitors and turns conversations into leads.
                    </div>
                  </div>
                </div>

                <div className={styles.howWrap}>
                  <div className={styles.howTitle}>How it works</div>
                  <div className={styles.howSteps}>
                    <div className={styles.step}>
                      <div className={styles.stepNum}>1</div>
                      <div className={styles.stepText}>Visitor starts a chat</div>
                    </div>
                    <div className={styles.step}>
                      <div className={styles.stepNum}>2</div>
                      <div className={styles.stepText}>Bot collects structured info</div>
                    </div>
                    <div className={styles.step}>
                      <div className={styles.stepNum}>3</div>
                      <div className={styles.stepText}>You receive a ready-to-send ticket</div>
                    </div>
                  </div>

                  <div className={styles.previewCtas}>
                    <a className={styles.primarySmall} href="#live-demo">
                      Open live demo
                    </a>
                    <Link className={styles.ghostSmall} href="/demo/support">
                      Full demo page
                    </Link>
                  </div>

                  <div className={styles.note}>
                    Demo version opens a pre-filled email draft. Production versions can integrate
                    with inbox/helpdesk/CRM.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Why businesses use these chatbots</h2>
            <p className={styles.p2}>
              Simple flows today. AI + integrations later — without rebuilding the UI.
            </p>
          </div>

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
                Modern UI, quick replies, and clean summaries that look professional.
              </div>
            </div>

            <div className={`${styles.featureCard} card glow`}>
              <div className={styles.featureTitle}>Easy to ship</div>
              <div className={styles.featureText}>
                Works as a demo today. Can be upgraded to real ticketing workflows later.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section id="live-demo" className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Live demo</h2>
            <p className={styles.p2}>
              Try the Support Bot. Use quick replies, then submit email + message to see the ticket summary.
            </p>
          </div>

          <div className={styles.demoGrid}>
            <div className={`${styles.demoInfo} card glow`}>
              <div className={styles.demoInfoTitle}>What to try</div>

              <div className={styles.demoBullets}>
                <div className={styles.demoBullet}>
                  <span className={styles.bulletDot} />
                  Pick a topic and priority
                </div>
                <div className={styles.demoBullet}>
                  <span className={styles.bulletDot} />
                  Enter any email (validation included)
                </div>
                <div className={styles.demoBullet}>
                  <span className={styles.bulletDot} />
                  Describe your issue and get a ticket summary
                </div>
              </div>

              <div className={styles.demoActions}>
                <Link className={styles.primarySmall} href="/demo/support">
                  Open full demo
                </Link>
                <a className={styles.ghostSmall} href="#request">
                  Request setup
                </a>
              </div>

              <div className={styles.note}>
                This demo opens a pre-filled email draft. In production, the bot can send tickets to
                your inbox/helpdesk (Zendesk, Freshdesk, etc.) or a CRM.
              </div>
            </div>

            <div className={styles.demoShell}>
              <ChatShell
                title="Support Assistant Bot"
                subtitle="Click quick replies. When done, generate a ticket summary."
              >
                <SupportBot mode="embedded" />
              </ChatShell>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST SETUP */}
      <section id="request" className="section">
        <div className="container">
          <div className={`${styles.requestCard} card glow`}>
            <h2 className={styles.requestTitle}>
              Want this chatbot for your business? <span>Let’s set it up</span>
            </h2>

            <p className={styles.requestText}>
              I can customize the flow, language, branding, and connect it to your real tools.
              Send a quick message and I’ll reply with next steps.
            </p>

            <div className={styles.requestActions}>
              <a
                className={styles.primary}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lukas.juodeikis.dev@gmail.com&su=Chatbot%20Setup%20Request&body=Hi%20Lukas%2C%0A%0AI%20want%20a%20chatbot%20for%20my%20business.%0A%0AWebsite%3A%20%0AType%20(FAQ%2FSupport%2FLeads)%3A%20%0AGoal%3A%20%0ALanguage%3A%20%0A%0AThanks!"
                target="_blank"
                rel="noreferrer"
              >
                Request setup (email)
              </a>

              <Link className={styles.secondary} href="/demo/support">
                Explore demos
              </Link>
            </div>

            <div className={styles.requestFoot}>
              Built by <span className={styles.name}>Lukas Juodeikis</span> — custom chatbots for service businesses.
            </div>
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
