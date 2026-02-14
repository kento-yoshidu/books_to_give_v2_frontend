import DisplayImage from "./DisplayImage";
import styles from "./book.module.css";
import type { Book } from "@/types";
import Tag from "./Tag";

type Props = {
  book: Book;
};

export default async function Book({
  book,
}: Props) {
  let star = "⭐️".repeat(book.rating)

  if (star.length < 10) {
    star = star.padEnd((star.length + ((10 - star.length) / 2)), "★")
  }

  if (book.rating === 999) {
    star = "❓❓❓";
  }

  return (
    <div className={styles.book}>
      <h3 className={styles.bookTitle}>{book.title}</h3>

      <DisplayImage
        imageUrl={book.thumbnailUrl}
      />

      <div className={styles.tags}>
        <h3>タグ一覧</h3>

        <div className={styles.tagList}>
          {book.tags.map((tag) => {
            return (
              <Tag key={tag.id} tag={tag} />
            )
          })}
        </div>
      </div>

      <p className={styles.star}>{star}</p>

      {book.memo && (
        <div className={styles.memo}>
          <h3>ひとこと</h3>

          <p>{book.memo}</p>
        </div>
      )}
      </div>
  );
}
