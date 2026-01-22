// src/components/support-bot/QuickReplies.tsx
import styles from "./supportBot.module.css";

export default function QuickReplies({
  options,
  onPick,
  disabled,
}: {
  options: string[];
  onPick: (v: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className={styles.quickWrap} aria-label="Quick replies">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          className={styles.quickBtn}
          onClick={() => onPick(o)}
          disabled={disabled}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
