// src/app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n/translations";

export default function Page() {
  const lang = useLang();
  const tr = t(lang);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroTop}>
            <h1 className={styles.h1}>
              {tr.home.h1_a} <span>{tr.home.h1_b}</span>
            </h1>
            <p className={styles.sub}>{tr.home.sub}</p>

            <div className={styles.heroCtas}>
              {/* <a className={styles.primaryBtn} href="#bots">
              
              </a>
              <a className={styles.secondaryBtn} href="#why">
                {tr.home.ctaSecondary}
              </a> */}
            </div>
          </div>

          <div className={styles.heroImageWrap} aria-hidden="true">
            <Image
              src="/heroBots.webp"
              alt="Chatbots hero illustration"
              width={1400}
              height={700}
              priority
              className={styles.heroImage}
            />
          </div>

          <div id="bots" className={styles.botCards}>
            <Link className={styles.botCard} href="/demo/faq">
              <div className={styles.botCardTitle}>{tr.home.cards.faq.title}</div>
              <div className={styles.botCardType}>{tr.home.cards.faq.type}</div>
              <ul className={styles.botCardList}>
                <li>{tr.home.cards.faq.b1}</li>
                <li>{tr.home.cards.faq.b2}</li>
                <li>{tr.home.cards.faq.b3}</li>
              </ul>
              <div className={styles.botCardTagline}>{tr.home.cards.faq.tagline}</div>
              <div className={styles.learnMore}>{tr.home.learnMore}</div>
            </Link>

            <Link className={styles.botCard} href="/demo/support">
              <div className={styles.botCardTitle}>{tr.home.cards.support.title}</div>
              <div className={styles.botCardType}>{tr.home.cards.support.type}</div>
              <ul className={styles.botCardList}>
                <li>{tr.home.cards.support.b1}</li>
                <li>{tr.home.cards.support.b2}</li>
                <li>{tr.home.cards.support.b3}</li>
              </ul>
              <div className={styles.botCardTagline}>{tr.home.cards.support.tagline}</div>
              <div className={styles.learnMore}>{tr.home.learnMore}</div>
            </Link>

            <Link className={styles.botCard} href="/demo/leads">
              <div className={styles.botCardTitle}>{tr.home.cards.leads.title}</div>
              <div className={styles.botCardType}>{tr.home.cards.leads.type}</div>
              <ul className={styles.botCardList}>
                <li>{tr.home.cards.leads.b1}</li>
                <li>{tr.home.cards.leads.b2}</li>
                <li>{tr.home.cards.leads.b3}</li>
              </ul>
              <div className={styles.botCardTagline}>{tr.home.cards.leads.tagline}</div>
              <div className={styles.learnMore}>{tr.home.learnMore}</div>
            </Link>

            <Link className={styles.botCard} href="/demo/sales">
              <div className={styles.botCardTitle}>{tr.home.cards.sales.title}</div>
              <div className={styles.botCardType}>{tr.home.cards.sales.type}</div>
              <ul className={styles.botCardList}>
                <li>{tr.home.cards.sales.b1}</li>
                <li>{tr.home.cards.sales.b2}</li>
                <li>{tr.home.cards.sales.b3}</li>
              </ul>
              <div className={styles.botCardTagline}>{tr.home.cards.sales.tagline}</div>
              <div className={styles.learnMore}>{tr.home.learnMore}</div>
            </Link>
          </div>
        </div>
      </section>

      <section id="why" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>{tr.home.whyTitle}</h2>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden="true">
                <Image src="/icons/availability.webp" alt="" fill sizes="70px" className={styles.whyIconImg} />
              </div>
              <div className={styles.whyTitle}>{tr.home.why1.title}</div>
              <div className={styles.whyText}>{tr.home.why1.text}</div>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden="true">
                <Image src="/icons/efficiency.webp" alt="" fill sizes="70px" className={styles.whyIconImg} />
              </div>
              <div className={styles.whyTitle}>{tr.home.why2.title}</div>
              <div className={styles.whyText}>{tr.home.why2.text}</div>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden="true">
                <Image src="/icons/sales.webp" alt="" fill sizes="70px" className={styles.whyIconImg} />
              </div>
              <div className={styles.whyTitle}>{tr.home.why3.title}</div>
              <div className={styles.whyText}>{tr.home.why3.text}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className="container">
          <div className={styles.contactWrap}>
            <h3 className={styles.contactTitle}>{tr.home.contactTitle}</h3>
            <p className={styles.contactText}>{tr.home.contactText}</p>

            <div className={styles.contactActions}>
              <a className={styles.primaryBtn} href="mailto:lukas.juodeikis.dev@gmail.com?subject=Chatbot%20Inquiry">
                {tr.home.contactPrimary}
              </a>

              <a className={styles.secondaryBtn} href="https://your-portfolio-link.com" target="_blank" rel="noreferrer">
                {tr.home.contactSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}
