// src/components/support-bot/TicketSummary.tsx
import styles from "./supportBot.module.css";

export default function TicketSummary({
  topic,
  priority,
  email,
  message,
  onEmailDraft,
}: {
  topic: string;
  priority: string;
  email: string;
  message: string;
  onEmailDraft: () => void;
}) {
  return (
    <div className={styles.summaryCard} role="region" aria-label="Ticket summary">
      <div className={styles.summaryTitle}>Ticket Summary</div>

      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Topic</div>
          <div className={styles.summaryValue}>{topic}</div>
        </div>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Priority</div>
          <div className={styles.summaryValue}>{priority}</div>
        </div>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Email</div>
          <div className={styles.summaryValue}>{email}</div>
        </div>
      </div>

      <div className={styles.summaryItem}>
        <div className={styles.summaryLabel}>Message</div>
        <div className={styles.summaryValue}>{message}</div>
      </div>

      <button className={styles.primaryBtn} type="button" onClick={onEmailDraft}>
        Send to support (opens email)
      </button>

      <div className={styles.summaryNote}>
        Demo: this opens a pre-filled email draft. In production you’d send this to your helpdesk.
      </div>
    </div>
  );
}
