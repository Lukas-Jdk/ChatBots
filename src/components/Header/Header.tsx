// src/components/Header/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import LanguageSwitch from "./LanguageSwitch";
import styles from "./header.module.css";

const mobileItems = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/demo/faq" },
  { label: "Support", href: "/demo/support" },
  { label: "Leads", href: "/demo/leads" },
  { label: "Sales", href: "/demo/sales" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // jei pasikeičia route (pvz paspaudus linką) – uždarom
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.bar}>
          <Link href="/" className={styles.logo} aria-label="LjD home">
            DemoBots
          </Link>

          <Nav />

          <div className={styles.right}>
            <div className={styles.rightCluster} ref={ref}>
              {/* ✅ Mobile burger */}
              <button
                type="button"
                className={styles.menuBtn}
                onClick={() => setOpen((v) => !v)}
                aria-label="Open menu"
                aria-expanded={open}
              >
                ☰
              </button>

              {open && (
                <div className={styles.mobileMenu} role="menu" aria-label="Mobile navigation">
                  {mobileItems.map((it) => {
                    const active = pathname === it.href;
                    return (
                      <Link
                        key={it.href}
                        href={it.href}
                        className={`${styles.mobileLink} ${active ? styles.mobileLinkActive : ""}`}
                      >
                        {it.label}
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Language pill */}
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
