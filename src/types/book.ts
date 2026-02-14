export type Book = {
  id: string;
  title: string;
  rating: number;
  tags: {
    id: string;
    name: string;
  }[];
  memo: string;
  isbn?: string;
};
