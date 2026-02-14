import Book from "./Book";
import { booksMock } from "@/mocks/books";

import styles from "./bookList.module.css";

export default async function BookList() {
  const booksWithThumbnail = await Promise.all(
    booksMock.map(async (book) => {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${book.isbn}`,
        { cache: "force-cache" }
      );
      const data = await res.json();

      return {
        ...book,
        thumbnailUrl:
          data.items?.[0]?.volumeInfo?.imageLinks?.thumbnail ?? null,
      };
    })
  );

  return (
    <div className={styles.wrapper}>
      {booksWithThumbnail.map((book) => {
        console.log("book = ", book);

        return (
          <Book
            key={book.id}
            book={book}
          />
        )
      })}
    </div>
  )
}
