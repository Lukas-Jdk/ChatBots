// src/app/demo/test/page.tsx
"use client";

import styles from "./page.module.css";

import ChatShell from "@/components/support-bot/ChatShell";
import SalesBot from "@/components/sales-bot/SalesBot";
import FloatingTestBot from "@/components/test-bot/FloatingTestBot";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

export default function TestDemoPage() {
  const lang = useLang();
  const tr = t(lang);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.h1}>{tr.test.centerTitle}</h1>
        <p className={styles.sub}>{tr.test.centerSub}</p>

        <div className={styles.shellWrap}>
          <ChatShell title={tr.test.chatTitle} subtitle={tr.test.chatSub} theme="test">
            <SalesBot mode="page" variant="test" />
          </ChatShell>
        </div>
      </div>
      <FloatingTestBot />
    </div>
  );
}
