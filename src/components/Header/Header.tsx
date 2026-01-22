// src/components/Header/Header.tsx
import Link from "next/link";
import Nav from "./Nav";
import LanguageSwitch from "./LanguageSwitch";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.bar}>
          <Link href="/" className={styles.logo} aria-label="LjD home">
            DemoBots
          </Link>

          <Nav />

          <div className={styles.right}>
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
