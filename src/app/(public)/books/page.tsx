import Link from "next/link";
import BookList from "./_components/BookList";

import styles from "./page.module.css";

export default function BooksPage() {
  return (
    <div className={styles.wrapper}>
      {/* 検索条件 */}

      <BookList />

      <h1><Link href="/loadmap">学習ロードマップ</Link></h1>
    </div>
  );
}
