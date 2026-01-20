import { Book } from "@/types";

export const booksMock: Book[] = [
  {
    id: "d55f046f-4add-b753-2117-cf404c1dccd5",
    title: "プログラミングRust 第2版",
    rating: 5,
    tags: [
      {
        id: "8db0e8ea-3b86-5b39-19c3-437e5ee208c7",
        name: "Rust"
      },
    ],
    memo: "特になし",
    isbn: "978-4-87311-978-6",
  },
  {
    id: "0b92f2bd-68a9-d064-2878-df577d1ccac4",
    title: "憂鬱なプログラマのためのオブジェクト指向開発講座",
    rating: 999,
    tags: [
      {
        id: "7a00f777-41c0-cb0b-52c8-7242b2549ad6",
        name: "オブジェクト指向"
      },
    ],
    memo: "JavaBlackファン必携の一冊",
    isbn: "9784881356197",
  },
  {
    id: "goajro",
    title: "Rustの練習帳 ―コマンドラインツールの作成を通してRustを学ぶ",
    rating: 4,
    tags: [
      {
        id: "gjaoirjpag",
        name: "Rust"
      },
      {
        id: "jfoarjgp",
        name: "CLI"
      },
      {
        id: "jgaprjpa",
        name: "自作"
      }
    ],
    memo: "",
    isbn: "9784814400584",
  },
];
