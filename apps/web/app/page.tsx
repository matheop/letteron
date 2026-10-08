import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="lo-text-display">LetterOn</h1>
      <p className={`lo-text-body ${styles.tagline}`}>
        Everything you want to read, in one place.
      </p>
    </main>
  );
}
