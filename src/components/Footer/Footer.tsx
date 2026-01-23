
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            © {new Date().getFullYear()} <span className={styles.footerName}>LjD.</span> Chatbot demos.
          </div>
        </div>
      </footer>
  )
}
