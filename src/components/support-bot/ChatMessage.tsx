// src/components/support-bot/ChatMessage.tsx
import styles from "./supportBot.module.css";

export type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

export default function ChatMessage({ m }: { m: Message }) {
  const isBot = m.role === "bot";
  return (
    <div className={`${styles.msgRow} ${isBot ? styles.msgRowBot : styles.msgRowUser}`}>
      <div className={`${styles.bubble} ${isBot ? styles.bubbleBot : styles.bubbleUser}`}>
        {m.text}
      </div>
    </div>
  );
}
