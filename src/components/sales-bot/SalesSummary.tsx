// src/components/sales-bot/SalesSummary.tsx
import styles from "@/components/support-bot/supportBot.module.css";

export default function SalesSummary({
  goal,
  traffic,
  channel,
  crm,
  languages,
  handoff,
  recommendation,
  email,
  onEmailDraft,
}: {
  goal: string;
  traffic: string;
  channel: string;
  crm: string;
  languages: string;
  handoff: string;
  recommendation: string;
  email: string;
  onEmailDraft: () => void;
}) {
  return (
    <div className={styles.summaryCard} role="region" aria-label="Sales summary">
      <div className={styles.summaryTitle}>Recommendation Summary</div>

      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Goal</div>
          <div className={styles.summaryValue}>{goal}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Traffic</div>
          <div className={styles.summaryValue}>{traffic}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Channel</div>
          <div className={styles.summaryValue}>{channel}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>CRM</div>
          <div className={styles.summaryValue}>{crm}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Languages</div>
          <div className={styles.summaryValue}>{languages}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Preferred next step</div>
          <div className={styles.summaryValue}>{handoff}</div>
        </div>
      </div>

      <div className={styles.summaryItem}>
        <div className={styles.summaryLabel}>Recommended setup</div>
        <div className={styles.summaryValue}>{recommendation}</div>
      </div>

      <div className={styles.summaryItem} style={{ marginTop: 8 }}>
        <div className={styles.summaryLabel}>Email</div>
        <div className={styles.summaryValue}>{email}</div>
      </div>

      <button className="btn btnPrimary btnFull" type="button" onClick={onEmailDraft}>
        Send setup recommendation (opens email)
      </button>

      <div className={styles.summaryNote}>
        Demo: opens a pre-filled email draft. In production this could book meetings / route to CRM automatically.
      </div>
    </div>
  );
}
