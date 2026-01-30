// src/app/demo/faq/page.tsx
"use client";

import FaqAccordion from "@/components/faq/FaqAccordion";
import styles from "./faqDemo.module.css";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

export default function FaqDemoPage() {
  const lang = useLang();
  const tr = t(lang);

  return (
    <main className={styles.page}>
      <section className={styles.top}>
        <div className="container">
          <h1 className={styles.h1}>{tr.faq.h1}</h1>
          <p className={styles.sub}>{tr.faq.sub}</p>

          <FaqAccordion />

          <div className={styles.nextWrap}>
            <div className={styles.nextCard}>
              <div className={styles.nextLeft}>
                <div className={styles.nextKicker}>{tr.faq.nextKicker}</div>
                <h2 className={styles.nextTitle}>{tr.faq.nextTitle}</h2>
                <p className={styles.nextText}>{tr.faq.nextText}</p>
              </div>

              <div className={styles.nextRight}>
                <button
                  className={`btn ${styles.ctaFaq}`} type="button"
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
      </section>
    </main>
  );
}
