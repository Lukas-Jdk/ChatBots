// src/components/support-bot/QuickReplies.tsx
import styles from "./supportBot.module.css";

export default function QuickReplies({
  options,
  onPick,
  disabled,
  variant = "default",
}: {
  options: string[];
  onPick: (v: string) => void;
  disabled?: boolean;
  variant?: "default" | "topic" | "priority" | "pricing" | "tech";
}) {
  return (
    <div className={styles.quickWrap} data-variant={variant} aria-label="Quick replies">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          className={styles.quickBtn}
          data-value={o}
          onClick={() => onPick(o)}
          disabled={disabled}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
