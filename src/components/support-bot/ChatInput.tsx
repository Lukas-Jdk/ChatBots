// src/components/support-bot/ChatInput.tsx
"use client";

import { useState } from "react";
import styles from "./supportBot.module.css";
import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

export default function ChatInput({
  placeholder,
  onSend,
  disabled,
  type = "text",
  allowEmpty = false,
}: {
  placeholder: string;
  onSend: (text: string) => void;
  disabled?: boolean;
  type?: "text" | "email";
  allowEmpty?: boolean;
}) {
  const [value, setValue] = useState("");
  const lang = useLang();
  const tr = t(lang);

  function submit() {
    const v = value.trim();

    if (!v && !allowEmpty) return;

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
        {tr.common.send}
      </button>
    </div>
  );
}
