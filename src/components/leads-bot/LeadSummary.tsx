import styles from "./LeadSummary.module.css";

type InterestLevel = "high" | "medium" | "low";

export default function LeadSummary({
  interestLevel,
  score,
  reasons = [],
  summary,
  onEmailDraft,
}: {
  interestLevel: InterestLevel;
  score: number;
  reasons?: string[]; // ✅ optional
  summary: {
    lookingFor: string;
    businessType: string;
    companySize: string;
    timeframe: string;
    budget: string;
    email: string;
    message?: string;
  };
  onEmailDraft: () => void;
}) {
  const interestLabel =
    interestLevel === "high"
      ? "Didelis"
      : interestLevel === "medium"
      ? "Vidutinis"
      : "Mažas";

  return (
    <section className={styles.card} aria-label="Lead summary">
      <div className={styles.topGrid}>
        <div className={styles.metric}>
          <div className={styles.label}>Susidomėjimas</div>
          <div className={styles.badge}>{interestLabel}</div>
        </div>

        <div className={styles.metric}>
          <div className={styles.label}>Bendras įvertinimas</div>
          <div className={styles.score}>{score} / 100</div>
        </div>
      </div>

      <div className={styles.why}>
        <div className={styles.whyTitle}>Kodėl</div>

        {/* ✅ jei nėra priežasčių – nerodom sąrašo */}
        {reasons.length ? (
          <ul>
            {reasons.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        ) : (
          <div className={styles.whyEmpty}>—</div>
        )}
      </div>

      <div className={styles.grid}>
        <Item label="Ko ieško" value={summary.lookingFor} />
        <Item label="Verslo tipas" value={summary.businessType} />
        <Item label="Įmonės dydis" value={summary.companySize} />
        <Item label="Laikotarpis" value={summary.timeframe} />
        <Item label="Biudžetas" value={summary.budget} />
        <Item label="El. paštas" value={summary.email} />
      </div>

      {summary.message ? (
        <div className={styles.message}>
          <div className={styles.label}>Papildoma žinutė</div>
          <div className={styles.value}>{summary.message}</div>
        </div>
      ) : null}

      <button className={styles.cta} onClick={onEmailDraft}>
        Siųsti užklausą
      </button>
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
