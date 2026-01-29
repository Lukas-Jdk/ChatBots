// src/components/leads-bot/LeadSummary.tsx
import styles from "@/components/support-bot/supportBot.module.css";

export default function LeadSummary(props: {
  title: string;
  labels: {
    lookingFor: string;
    businessType: string;
    companySize: string;
    timeframe: string;
    budget: string;
    email: string;
    optionalMessage: string;
  };
  cta: string;
  note: string;

  intent: string;
  businessType: string;
  companySize: string;
  timeframe: string;
  budget: string;
  email: string;
  message: string;
  onEmailDraft: () => void;
}) {
  const { title, labels, cta, note } = props;

  return (
    <div className={styles.summaryCard} role="region" aria-label={title}>
      <div className={styles.summaryTitle}>{title}</div>

      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.lookingFor}</div>
          <div className={styles.summaryValue}>{props.intent}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.businessType}</div>
          <div className={styles.summaryValue}>{props.businessType}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.companySize}</div>
          <div className={styles.summaryValue}>{props.companySize}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.timeframe}</div>
          <div className={styles.summaryValue}>{props.timeframe}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.budget}</div>
          <div className={styles.summaryValue}>{props.budget}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.email}</div>
          <div className={styles.summaryValue}>{props.email}</div>
        </div>
      </div>

      <div className={styles.summaryItem}>
        <div className={styles.summaryLabel}>{labels.optionalMessage}</div>
        <div className={styles.summaryValue}>{props.message || "—"}</div>
      </div>

      <button className="btn btnPrimary btnBlock" type="button" onClick={props.onEmailDraft}>
        {cta}
      </button>

      <div className={styles.summaryNote}>{note}</div>
    </div>
  );
}
