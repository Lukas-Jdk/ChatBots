// src/components/support-bot/ChatShell.tsx
import styles from "./supportBot.module.css";

type Theme = "support" | "leads" | "sales";

export default function ChatShell({
  title,
  subtitle,
  theme = "support",
  children,
}: {
  title: string;
  subtitle?: string;
  theme?: Theme;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${styles.shell} ${styles[`theme_${theme}`]}`}
      aria-label={title}
    >
      <header className={styles.shellHeader}>
        <div className={styles.shellTitleRow}>
          <div className={styles.shellTitle}>{title}</div>
          <div className={styles.pillLive}>
            {theme === "support" && "SUPPORT FLOW"}
            {theme === "leads" && "LEAD QUALIFICATION"}
            {theme === "sales" && "RECOMMENDATION"}
          </div>
        </div>
        {subtitle ? <div className={styles.shellSub}>{subtitle}</div> : null}
      </header>

      <div className={styles.shellBody}>{children}</div>
    </section>
  );
}
