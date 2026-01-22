// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroTop}>
            <h1 className={styles.h1}>
              Power Up Your Business with <span>Smart Chatbots!</span>
            </h1>
            <p className={styles.sub}>
              Automate conversations & boost efficiency.
            </p>

            <div className={styles.heroCtas}>
              <a className={styles.primaryBtn} href="#bots">
                Get Started
              </a>
              <a className={styles.secondaryBtn} href="#why">
                Why Chatbots?
              </a>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className={styles.heroImageWrap} aria-hidden="true">
            <Image
              src="/heroBotss.webp"
              alt="Chatbots hero illustration"
              width={1400}
              height={700}
              priority
              className={styles.heroImage}
            />
          </div>

          {/* BOT CARDS */}
          <div id="bots" className={styles.botCards}>
            <Link className={styles.botCard} href="/demo/faq">
              <div className={styles.botCardTitle}>FAQ Bot</div>
              <div className={styles.botCardText}>
                Instant answers to common questions.
              </div>
              <div className={styles.learnMore}>Learn More →</div>
            </Link>

            <Link className={styles.botCard} href="/demo/support">
              <div className={styles.botCardTitle}>Support Bot</div>
              <div className={styles.botCardText}>
                Collects issue, priority & contact — creates a ticket.
              </div>
              <div className={styles.learnMore}>Learn More →</div>
            </Link>

            <Link className={styles.botCard} href="/demo/leads">
              <div className={styles.botCardTitle}>Leads Bot</div>
              <div className={styles.botCardText}>
                Qualifies visitors and turns chats into leads.
              </div>
              <div className={styles.learnMore}>Learn More →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className={styles.section}>
  <div className="container">
    <div className={styles.sectionHead}>
      <h2 className={styles.h2}>Why Choose Our Chatbots?</h2>
    </div>

    <div className={styles.whyGrid}>
      <div className={styles.whyCard}>
        <div className={styles.whyIcon} aria-hidden="true">
          <Image
            src="/icons/availability.webp"
            alt=""
            fill
            sizes="56px"
            className={styles.whyIconImg}
            priority={false}
          />
        </div>
        <div className={styles.whyTitle}>24/7 Availability</div>
        <div className={styles.whyText}>
          Always ready to assist your visitors.
        </div>
      </div>

      <div className={styles.whyCard}>
        <div className={styles.whyIcon} aria-hidden="true">
          <Image
            src="/icons/efficiency.webp"
            alt=""
            fill
            sizes="56px"
            className={styles.whyIconImg}
            priority={false}
          />
        </div>
        <div className={styles.whyTitle}>Increase Efficiency</div>
        <div className={styles.whyText}>
          Reduce workload & speed up responses.
        </div>
      </div>

      <div className={styles.whyCard}>
        <div className={styles.whyIcon} aria-hidden="true">
          <Image
            src="/icons/sales.webp"
            alt=""
            fill
            sizes="56px"
            className={styles.whyIconImg}
            priority={false}
          />
        </div>
        <div className={styles.whyTitle}>Boost Your Sales</div>
        <div className={styles.whyText}>
          Capture and convert more leads.
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT */}
    <section id="contact" className={styles.section}>
  <div className="container">
    <div className={styles.contactWrap}>
      <h3 className={styles.contactTitle}>
        Want a chatbot like this for your business?
      </h3>

      <p className={styles.contactText}>
        I design and build custom chatbots for real business needs —
        from FAQ and support to lead qualification.
      </p>

      <div className={styles.contactActions}>
        <a
          className={styles.primaryBtn}
          href="mailto:lukas.juodeikis.dev@gmail.com?subject=Chatbot%20Inquiry"
        >
          Contact Me
        </a>

        <a
          className={styles.secondaryBtn}
          href="https://your-portfolio-link.com"
          target="_blank"
          rel="noreferrer"
        >
          View My Portfolio
        </a>
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
