import BookList from "./_components/BookList";

import styles from "./page.module.css";

export default function BooksPage() {
  return (
    <div className={styles.wrapper}>
      {/* 検索条件 */}

      <BookList />
    </div>
  );
}
