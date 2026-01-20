// import { Book } from "@/types";

// export async function fetchBookByISBN(isbn: string): Promise<Book | null> {
//   const res = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
//   );
//   const data = await res.json();

//   if (!data.items || data.items.length === 0) return null;

//   const item = data.items[0];

//   return {
//     id: item.id,
//     title: item.volumeInfo.title,
//     rating: item.volumeInfo.averageRating || 0,
//     tags: [],
//     memo: "",
//     thumbnailUrl: "",
//   };
// }
