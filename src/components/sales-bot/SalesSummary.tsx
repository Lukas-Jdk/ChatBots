// src/components/sales-bot/SalesSummary.tsx
import styles from "./SalesSummary.module.css";

type Labels = {
  goal: string;
  traffic: string;
  channel: string;
  crm: string;
  languages: string;
  handoff: string;
  recommendedSetup: string;
  email: string;
};

export default function SalesSummary(props: {
  title: string;
  labels: Labels;
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

  // ✅ optional (kad nelūžtų jei neperduodi)
  benefits?: string[];

  onEmailDraft: () => void;
}) {
  const {
    title,
    labels,
    cta,
    note,
    goal,
    traffic,
    channel,
    crm,
    languages,
    handoff,
    recommendation,
    email,
    onEmailDraft,
  } = props;

  // ✅ čia ir yra fix: visada masyvas
  const benefits = Array.isArray(props.benefits) ? props.benefits : [];

  return (
    <section className={styles.summary} aria-label={title}>
      <header className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        {note ? <p className={styles.sub}>{note}</p> : null}
      </header>

      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.label}>{labels.goal}</div>
            <div className={styles.value}>{goal}</div>
          </div>

          <div className={styles.item}>
            <div className={styles.label}>{labels.traffic}</div>
            <div className={styles.value}>{traffic}</div>
          </div>

          <div className={styles.item}>
            <div className={styles.label}>{labels.channel}</div>
            <div className={styles.value}>{channel}</div>
          </div>

          <div className={styles.item}>
            <div className={styles.label}>{labels.crm}</div>
            <div className={styles.value}>{crm}</div>
          </div>

          <div className={styles.item}>
            <div className={styles.label}>{labels.languages}</div>
            <div className={styles.value}>{languages}</div>
          </div>

          <div className={styles.item}>
            <div className={styles.label}>{labels.handoff}</div>
            <div className={styles.value}>{handoff}</div>
          </div>

          <div className={`${styles.item} ${styles.full}`}>
            <div className={styles.label}>{labels.recommendedSetup}</div>
            <div className={styles.value} style={{ whiteSpace: "pre-wrap" }}>
              {recommendation}
            </div>
          </div>

          {benefits.length > 0 ? (
            <div className={`${styles.item} ${styles.full}`}>
              <div className={styles.label}>{/* label ateis iš i18n jei reikės */}</div>
              <ul className={styles.list}>
                {benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className={`${styles.item} ${styles.full}`}>
            <div className={styles.label}>{labels.email}</div>
            <div className={styles.value}>{email}</div>
          </div>
        </div>

        <button className={styles.cta} type="button" onClick={onEmailDraft}>
          {cta}
        </button>
      </div>
    </section>
  );
}
