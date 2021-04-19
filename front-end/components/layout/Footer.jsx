/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Footer = () => (
  <footer className="footer">
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      &copy; {new Date().getFullYear()}{" "}
      <img src="/images/logo.svg" alt="Vercel Logo" className={styles.logo} />
    </a>
  </footer>
);

export default Footer;
