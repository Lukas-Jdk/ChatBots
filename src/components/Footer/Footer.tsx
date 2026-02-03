// src/components/Footer/Footer.tsx
import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.left}>
            © {new Date().getFullYear()} DemoBots — built by{" "}
            <Link
              href="https://lukas-juodeikis-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerName}
            >
              LjD.
            </Link>{" "}
            All rights reserved.
          </div>

          <nav className={styles.links} aria-label="Footer links">
            <Link className={styles.link} href="/terms">
              Terms
            </Link>
            <span className={styles.sep}>|</span>
            <Link className={styles.link} href="/privacy">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
