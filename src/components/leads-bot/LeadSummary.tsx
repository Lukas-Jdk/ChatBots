// src/components/leads-bot/LeadSummary.tsx
import styles from "./LeadSummary.module.css";

type FitLevel = "hot" | "warm" | "cool";

type LeadSummaryLabels = {
  fitLevel: string;
  fitScore: string;
  reasons: string;
  lookingFor: string;
  businessType: string;
  companySize: string;
  timeframe: string;
  budget: string;
  email: string;
  optionalMessage: string;
  optionalMessageEmpty: string;
};

export default function LeadSummary(props: {
  title: string;
  labels: LeadSummaryLabels;

  // fit tekstai iš i18n: { hot, warm, cool }
  fitText: { hot: string; warm: string; cool: string };

  fitLevel: FitLevel;
  fitScore: number;
  reasons: string[];

  lookingFor: string;
  businessType: string;
  companySize: string;
  timeframe: string;
  budget: string;
  email: string;

  optionalMessage?: string;
  optionalMessageEmpty: string;

  cta: string;
  note: string;

  onEmailDraft: () => void;
}) {
  const {
    title,
    labels,
    fitText,
    fitLevel,
    fitScore,
    reasons,
    lookingFor,
    businessType,
    companySize,
    timeframe,
    budget,
    email,
    optionalMessage,
    optionalMessageEmpty,
    cta,
    note,
    onEmailDraft,
  } = props;

  const fitLabel = fitLevel === "hot" ? fitText.hot : fitLevel === "warm" ? fitText.warm : fitText.cool;

  const msg = (optionalMessage || "").trim();

  return (
    <section className={styles.card} aria-label={title}>
      <div className={styles.topGrid}>
        <div className={styles.metric}>
          <div className={styles.label}>{labels.fitLevel}</div>
          <div className={styles.badge}>{fitLabel}</div>
        </div>

        <div className={styles.metric}>
          <div className={styles.label}>{labels.fitScore}</div>
          <div className={styles.score}>{fitScore} / 100</div>
        </div>
      </div>

      <div className={styles.why}>
        <div className={styles.whyTitle}>{labels.reasons}</div>

        {reasons.length ? (
          <ul>
            {reasons.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        ) : (
          <div className={styles.whyEmpty}>{optionalMessageEmpty}</div>
        )}
      </div>

      <div className={styles.grid}>
        <Item label={labels.lookingFor} value={lookingFor} />
        <Item label={labels.businessType} value={businessType} />
        <Item label={labels.companySize} value={companySize} />
        <Item label={labels.timeframe} value={timeframe} />
        <Item label={labels.budget} value={budget} />
        <Item label={labels.email} value={email} />
      </div>

      <div className={styles.message}>
        <div className={styles.label}>{labels.optionalMessage}</div>
        <div className={styles.value}>{msg ? msg : optionalMessageEmpty}</div>
      </div>

      <button className={styles.cta} type="button" onClick={onEmailDraft}>
        {cta}
      </button>

      <div className={styles.note}>{note}</div>
    </section>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.item}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
