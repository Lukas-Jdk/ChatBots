// src/components/support-bot/TicketSummary.tsx
import styles from "./supportBot.module.css";

function generateTicketId() {

  const a = Math.random().toString(36).slice(2, 6).toUpperCase();
  const b = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SUP-${a}-${b}`;
}

function responseTimeFromPriority(priorityLabel: string) {

  const p = priorityLabel.toLowerCase();
  if (p.includes("critical") || p.includes("kriti")) return "15 min";
  if (p.includes("urgent") || p.includes("skubu")) return "1 val.";
  if (p.includes("soon") || p.includes("greit")) return "4 val.";
  return "1 d.d.";
}

export default function TicketSummary({
  title,
  labels,
  cta,
  note,

  topic,
  subtopic,
  priority,
  contactMethodLabel,
  contactMethodId,
  email,
  phone,
  message,
  onEmailDraft,
}: {
  title: string;
  labels: {
    ticketId: string;
    responseTime: string;
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

  // label – tekstas iš i18n ("El. paštu", "Telefono skambučiu", "Email", ...)
  contactMethodLabel: string;

  // id – logikai ("email" | "phone") – kad nelūžtų nuo kalbos
  contactMethodId: "email" | "phone";

  email: string;
  phone: string;
  message: string;
  onEmailDraft: () => void;
}) {
  const ticketId = generateTicketId();
  const responseTime = responseTimeFromPriority(priority);

  const contactValue = contactMethodId === "phone" ? phone : email;

  return (
    <div className={styles.summaryCard} role="region" aria-label={title}>
      <div className={styles.summaryTitle}>{title}</div>

      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.ticketId}</div>
          <div className={styles.summaryValue}>{ticketId}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.responseTime}</div>
          <div className={styles.summaryValue}>{responseTime}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.topic}</div>
          <div className={styles.summaryValue}>{topic}</div>
        </div>

        {subtopic ? (
          <div className={styles.summaryItem}>
            <div className={styles.summaryLabel}>{labels.details}</div>
            <div className={styles.summaryValue}>{subtopic}</div>
          </div>
        ) : null}

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.urgency}</div>
          <div className={styles.summaryValue}>{priority}</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>{labels.contact}</div>
          <div className={styles.summaryValue}>
            {contactMethodLabel}
            {contactValue ? ` — ${contactValue}` : ""}
          </div>
        </div>

        <div className={styles.summaryItemWide}>
          <div className={styles.summaryLabel}>{labels.message}</div>
          <div className={styles.summaryValue}>{message}</div>
        </div>
      </div>

      <button className="btn btnPrimary btnBlock" type="button" onClick={onEmailDraft}>
        {cta}
      </button>

      <div className={styles.summaryNote}>{note}</div>
    </div>
  );
}
