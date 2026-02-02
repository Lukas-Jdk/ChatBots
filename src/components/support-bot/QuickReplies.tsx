// src/components/support-bot/QuickReplies.tsx
import styles from "./supportBot.module.css";

export type QuickOption = {
  id: string;
  label: string;
};

export default function QuickReplies({
  options,
  onPick,
  disabled,
  variant = "default",
}: {
  options: QuickOption[];
  onPick: (id: string) => void;
  disabled?: boolean;
  variant?: "default" | "topic" | "priority" | "pricing" | "tech";
}) {
  return (
    <div className={styles.quickWrap} data-variant={variant} aria-label="Quick replies">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          className={styles.quickBtn}
          data-value={o.id}
          onClick={() => onPick(o.id)}
          disabled={disabled}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
