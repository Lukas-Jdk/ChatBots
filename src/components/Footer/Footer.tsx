// src/components/Footer/Footer.tsx
import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.left}>
            © {new Date().getFullYear()}{" "}
             DemoBots - build by <span className={styles.footerName}>LjD. </span>All rights reserved.
          </div>

          <nav className={styles.links} aria-label="Footer links">
            <Link className={styles.link} href="/terms">
              | Terms |
            </Link>
            <Link className={styles.link} href="/privacy">
            Privacy |
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
