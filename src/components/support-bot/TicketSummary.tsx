// src/components/support-bot/TicketSummary.tsx
import styles from "./supportBot.module.css";

export default function TicketSummary(props: {
  title: string;
  labels: {
    topic: string;
    details: string;
    urgency: string;
    contact: string;
    message: string;
  };
  cta: string;
  note: string;

  topic: string;
  subtopic?: string;
  priority: string;

  contactMethodLabel: string;
  contactValue: string;

  message: string;
  onEmailDraft: () => void;
}) {
  const { title, labels, cta, note } = props;

  return (
    <div className={styles.summaryCard} role="region" aria-label={title}>
      <div className={styles.summaryTitle}>{title}</div>

      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.topic}</div>
          <div className={styles.summaryValue}>{props.topic}</div>
        </div>

        {props.subtopic ? (
          <div className={styles.summaryItem}>
            <div className={styles.summaryLabel}>{labels.details}</div>
            <div className={styles.summaryValue}>{props.subtopic}</div>
          </div>
        ) : null}

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.urgency}</div>
          <div className={styles.summaryValue}>{props.priority}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.contact}</div>
          <div className={styles.summaryValue}>
            {props.contactMethodLabel}
            {props.contactValue ? ` — ${props.contactValue}` : ""}
          </div>
        </div>
      </div>

      <div className={styles.summaryItem}>
        <div className={styles.summaryLabel}>{labels.message}</div>
        <div className={styles.summaryValue}>{props.message}</div>
      </div>

      <button className="btn btnPrimary btnBlock" type="button" onClick={props.onEmailDraft}>
        {cta}
      </button>

      <div className={styles.summaryNote}>{note}</div>
    </div>
  );
}
