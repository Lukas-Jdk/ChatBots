// src/components/Header/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const items = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/demo/faq" },
  { label: "Support", href: "/demo/support" },
  { label: "Leads", href: "/demo/leads" },
] as const;

export default function Nav() {
  const pathname = usePathname();

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
