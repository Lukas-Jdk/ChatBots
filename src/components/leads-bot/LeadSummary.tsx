// src/components/leads-bot/LeadSummary.tsx
import styles from "@/components/support-bot/supportBot.module.css";

export default function LeadSummary({
  intent,
  businessType,
  companySize,
  timeframe,
  budget,
  email,
  message,
  onEmailDraft,
}: {
  intent: string;
  businessType: string;
  companySize: string;
  timeframe: string;
  budget: string;
  email: string;
  message: string;
  onEmailDraft: () => void;
}) {
  return (
    <div className={styles.summaryCard} role="region" aria-label="Lead summary">
      <div className={styles.summaryTitle}>Lead Summary</div>

      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Looking for</div>
          <div className={styles.summaryValue}>{intent}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Business type</div>
          <div className={styles.summaryValue}>{businessType}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Company size</div>
          <div className={styles.summaryValue}>{companySize}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Timeframe</div>
          <div className={styles.summaryValue}>{timeframe}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Budget</div>
          <div className={styles.summaryValue}>{budget}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Email</div>
          <div className={styles.summaryValue}>{email}</div>
        </div>
      </div>

      <div className={styles.summaryItem}>
        <div className={styles.summaryLabel}>Optional message</div>
        <div className={styles.summaryValue}>{message || "—"}</div>
      </div>

      <button className="btn btnPrimary btnFull" type="button" onClick={onEmailDraft}>
        Send lead (opens email)
      </button>

      <div className={styles.summaryNote}>
        Demo: this opens a pre-filled email draft. In production you’d send this to your CRM/inbox automatically.
      </div>
    </div>
  );
}
