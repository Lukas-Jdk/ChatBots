// src/components/Header/Header.tsx
import Link from "next/link";
import Nav from "./Nav";
import LanguageSwitch from "./LanguageSwitch";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Left: Logo */}
        <Link href="/" className={styles.logo} aria-label="LjD home">
          <h1 className={styles.logoMark}>Lj<span className={styles.logoMarkWord}>D</span></h1>
         
        </Link>

        {/* Center: Nav */}
        <Nav />

        {/* Right: Language */}
        <div className={styles.right}>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
