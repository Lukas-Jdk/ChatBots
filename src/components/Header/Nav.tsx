// src/components/Header/Nav.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

const BOTS = [
  {
    label: "FAQ Bot",
    href: "/demo/faq",
    icon: "🤖",
    desc: "Quick answers to common questions",
  },
  {
    label: "Support Bot",
    href: "/demo/support",
    icon: "🛠",
    desc: "Collects issues & creates tickets",
  },
  {
    label: "Leads Bot",
    href: "/demo/leads",
    icon: "🎯",
    desc: "Qualifies visitors into leads",
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className={styles.chatbotsWrap} ref={ref}>
      <button
        type="button"
        className={styles.chatbotsBtn}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className={styles.chatbotsIcon}>🤖</span>
        <span className={styles.chatbotsLabel}>Chatbots</span>
        <span className={styles.chatbotsChevron}>▾</span>
      </button>

      {open && (
        <div className={styles.chatbotsMenu} role="menu">
          {BOTS.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className={styles.chatbotsItem}
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <span className={styles.chatbotsItemIcon}>{b.icon}</span>
              <span className={styles.chatbotsItemText}>
                <span className={styles.chatbotsItemLabel}>{b.label}</span>
                <span className={styles.chatbotsItemDesc}>{b.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
