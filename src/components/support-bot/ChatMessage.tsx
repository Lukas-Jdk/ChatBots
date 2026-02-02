// src/components/support-bot/ChatMessage.tsx
import Image from "next/image";
import styles from "./supportBot.module.css";

export type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

export default function ChatMessage({
  m,
  botAvatarSrc,
}: {
  m: Message;
  botAvatarSrc?: string;
}) {
  const isBot = m.role === "bot";

  return (
    <div className={`${styles.msgRow} ${isBot ? styles.msgRowBot : styles.msgRowUser}`}>
      {isBot && botAvatarSrc ? (
        <Image
          className={styles.botAvatar}
          src={botAvatarSrc}
          alt=""
          aria-hidden="true"
          width={28}
          height={28}
        />
      ) : null}

      <div className={`${styles.bubble} ${isBot ? styles.bubbleBot : styles.bubbleUser}`}>
        {m.text}
      </div>
    </div>
  );
}
