// src/components/Header/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n/translations";

export default function Nav() {
  const pathname = usePathname();
  const lang = useLang();
  const tr = t(lang);

  const items = [
    { label: tr.nav.home, href: "/" },
    { label: tr.nav.faq, href: "/demo/faq" },
    { label: tr.nav.support, href: "/demo/support" },
    { label: tr.nav.leads, href: "/demo/leads" },
    { label: tr.nav.sales, href: "/demo/sales" },
  ] as const;

  return (
    <nav className={styles.nav} aria-label="Primary">
      {items.map((it) => {
        const active = pathname === it.href;
        return (
          <Link
            key={it.href}
            href={it.href}
            className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {it.label}
          </Link>
        );
      })}
    </nav>
  );
}
