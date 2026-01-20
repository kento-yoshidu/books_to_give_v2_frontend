import styles from "./technology.module.css";

export default function Technology() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Technology</h2>

      <ul className={styles.list}>
        <li>⚡ Next.js</li>
        <li className={styles.dep}>⚡ App Router</li>
        <li>⚡ TypeScript</li>
        <li>⚡ Rust</li>
        <li className={styles.dep}>⚡ Actix Web</li>
        <li>⚡ Goolge Books API</li>
      </ul>
    </div>
  );
}
