// src/components/support-bot/ChatShell.tsx
import styles from "./supportBot.module.css";

export default function ChatShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`${styles.shell} card glow`} aria-label={title}>
      <header className={styles.shellHeader}>
        <div className={styles.shellTitleRow}>
          <div className={styles.shellTitle}>{title}</div>
          <div className={styles.pillLive} title="Demo">
            DEMO
          </div>
        </div>
        {subtitle ? <div className={styles.shellSub}>{subtitle}</div> : null}
      </header>

      <div className={styles.shellBody}>{children}</div>
    </section>
  );
}
