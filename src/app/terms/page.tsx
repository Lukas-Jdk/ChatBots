// src/app/terms/page.tsx
import styles from "./terms.module.css";

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.head}>
          <h1 className={styles.h1}>Terms</h1>
          <p className={styles.sub}>
            These terms help protect the content, UI, and demo logic of this website.
          </p>
        </header>

        <section className={styles.card}>
          <h2 className={styles.h2}>1. Intellectual Property</h2>
          <p className={styles.p}>
            All content, UI design, chatbot flows, scripts, copy, and demo logic on this website
            are the intellectual property of <strong>LjD. DemoBots</strong>, unless stated otherwise.
          </p>

          <h2 className={styles.h2}>2. Restrictions</h2>
          <p className={styles.p}>
            You may not copy, reproduce, distribute, modify, or use any part of this website
            (including chatbot flows and UI) for commercial purposes without prior written permission.
          </p>

          <h2 className={styles.h2}>3. Demo Notice</h2>
          <p className={styles.p}>
            This website contains demos for presentation purposes. Some actions (e.g. opening an email draft)
            are for demonstration only.
          </p>

          <h2 className={styles.h2}>4. Contact</h2>
          <p className={styles.p}>
            If you want permission to reuse parts of this project, contact:{" "}
            <strong>lukas.juodeikis.dev@gmail.com</strong>
          </p>

          <div className={styles.note}>
            Last updated: {new Date().getFullYear()}
          </div>
        </section>
      </div>
    </main>
  );
}
