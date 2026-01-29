// src/components/sales-bot/SalesSummary.tsx
import styles from "./SalesSummary.module.css";

export default function SalesSummary(props: {
  title: string;
  labels: {
    goal: string;
    traffic: string;
    channel: string;
    crm: string;
    languages: string;
    handoff: string;
    recommendedSetup: string;
    email: string;
  };
  cta: string;
  note: string;

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
  const { title, labels, cta, note } = props;

  return (
    <section className={styles.summary} aria-label={title}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.grid}>
        <div>
          <div className={styles.label}>{labels.goal}</div>
          <div className={styles.value}>{props.goal}</div>
        </div>

        <div>
          <div className={styles.label}>{labels.traffic}</div>
          <div className={styles.value}>{props.traffic}</div>
        </div>

        <div>
          <div className={styles.label}>{labels.channel}</div>
          <div className={styles.value}>{props.channel}</div>
        </div>

        <div>
          <div className={styles.label}>{labels.crm}</div>
          <div className={styles.value}>{props.crm}</div>
        </div>

        <div>
          <div className={styles.label}>{labels.languages}</div>
          <div className={styles.value}>{props.languages}</div>
        </div>

        <div>
          <div className={styles.label}>{labels.handoff}</div>
          <div className={styles.value}>{props.handoff}</div>
        </div>

        <div className={styles.full}>
          <div className={styles.label}>{labels.recommendedSetup}</div>
          <div className={styles.value}>{props.recommendation}</div>
        </div>

        <div className={styles.full}>
          <div className={styles.label}>{labels.email}</div>
          <div className={styles.value}>{props.email}</div>
        </div>
      </div>

      <button className="btn btnPrimary btnBlock" type="button" onClick={props.onEmailDraft}>
        {cta}
      </button>

      <p className={styles.note}>{note}</p>
    </section>
  );
}
