import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>BooksToGive v2</h1>

      <p className={styles.date}>更新日 : <time dateTime="2024-03-23">2024年3月23日</time></p>
    </div>
  );
}
