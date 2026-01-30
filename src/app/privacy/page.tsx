// src/app/privacy/page.tsx
import styles from "./privacy.module.css";

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.head}>
          <h1 className={styles.h1}>Privacy</h1>
          <p className={styles.sub}>
            This is a demo website. We don’t intentionally collect sensitive personal data.
          </p>
        </header>

        <section className={styles.card}>
          <h2 className={styles.h2}>1. Demo forms</h2>
          <p className={styles.p}>
            If you enter an email or phone number in a demo, it is used only to generate a summary
            or open an email draft on your device.
          </p>

          <h2 className={styles.h2}>2. Analytics</h2>
          <p className={styles.p}>
            If analytics tools are enabled, they may collect standard usage data (pages visited, device type),
            but not your private messages.
          </p>

          <h2 className={styles.h2}>3. Contact</h2>
          <p className={styles.p}>
            Questions: <strong>lukas.juodeikis.dev@gmail.com</strong>
          </p>

          <div className={styles.note}>
            Last updated: {new Date().getFullYear()}
          </div>
        </section>
      </div>
    </main>
  );
}
