// src/components/support-bot/ChatInput.tsx
"use client";

import { useState } from "react";
import styles from "./supportBot.module.css";

export default function ChatInput({
  placeholder,
  onSend,
  disabled,
  type = "text",
}: {
  placeholder: string;
  onSend: (text: string) => void;
  disabled?: boolean;
  type?: "text" | "email";
}) {
  const [value, setValue] = useState("");

  function submit() {
    const v = value.trim();
    if (!v) return;
    onSend(v);
    setValue("");
  }

  return (
    <div className={styles.inputRow}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
      />
      <button className="btn btnPrimary" type="button" onClick={submit} disabled={disabled}>
  Send
</button>
    </div>
  );
}
