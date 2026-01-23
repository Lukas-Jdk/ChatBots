// src/app/demo/faq/page.tsx
import Link from "next/link";
import FaqAccordion from "@/components/faq/FaqAccordion";
import styles from "./faqDemo.module.css";

export default function FaqDemoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.top}>
        <div className="container">
          <h1 className={styles.h1}>FAQ – Chatbots Explained</h1>
          <p className={styles.sub}>
            Common questions about chatbots, answered simply.
          </p>

          <FaqAccordion />

          {/* WHAT'S NEXT */}
          <div className={styles.nextWrap}>
            <div className={styles.nextCard}>
              <div className={styles.nextLeft}>
                <div className={styles.nextKicker}>What’s next?</div>
                <h2 className={styles.nextTitle}>Get the right chatbot for your business</h2>
                <p className={styles.nextText}>
                  Every business is different. The best chatbot depends on your goals,
                  traffic, and customer questions. Answer a few quick questions and I’ll
                  recommend the best setup for you.
                </p>
              </div>

              <div className={styles.nextRight}>
                <a
                  className={styles.nextPrimary}
                  href="mailto:lukas.juodeikis.dev@gmail.com?subject=Chatbot%20Recommendation&body=Hi%20Lukas,%0A%0AWebsite:%20%0ABusiness%20type:%20%0AGoal%20(FAQ%2FSupport%2FLeads):%20%0ALanguages%20needed:%20%0AAnything%20important:%20%0A%0AThanks!"
                >
                  Get a chatbot recommendation
                </a>

                <Link className={styles.nextSecondary} href="/demo/support">
                  Try Support Assistant Demo
                </Link>

                <div className={styles.nextNote}>
                  No spam — just a quick recommendation and next steps.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
