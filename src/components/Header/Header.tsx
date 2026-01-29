// src/components/Header/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import LanguageSwitch from "./LanguageSwitch";
import styles from "./header.module.css";

import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const lang = useLang();
  const tr = t(lang);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const mobileItems = [
    { label: tr.nav.home, href: "/" },
    { label: tr.nav.faq, href: "/demo/faq" },
    { label: tr.nav.support, href: "/demo/support" },
    { label: tr.nav.leads, href: "/demo/leads" },
    { label: tr.nav.sales, href: "/demo/sales" },
    { label: tr.nav.test, href: "/demo/test" },
  ] as const;

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
                <div
                  className={styles.mobileMenu}
                  role="menu"
                  aria-label="Mobile navigation"
                >
                  {mobileItems.map((it) => {
                    const active = pathname === it.href;
                    return (
                      <Link
                        key={it.href}
                        href={it.href}
                        className={`${styles.mobileLink} ${
                          active ? styles.mobileLinkActive : ""
                        }`}
                      >
                        {it.label}
                      </Link>
                    );
                  })}
                </div>
              )}

              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
