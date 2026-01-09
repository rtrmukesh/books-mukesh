export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

type RawBook = {
  id: number;
  title: string;
  description: string;
  image: string;
  downloads: number;
  pdf: string;
};

type Book = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  downloads: number;
  pdf: string;
};

type BooksApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  books: Book[];
};

function createSlug(id: number, title: string) {
  return (
    id +
    "-" +
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
}

// Server-side cache
let cachedBooks: RawBook[] | null = null;

async function getBooks(): Promise<RawBook[]> {
  if (cachedBooks) return cachedBooks;

  const res = await fetch(
    "https://mugi-personal.s3.ap-south-1.amazonaws.com/sitemap-books.json",
    { cache: "force-cache" } // ensures Next fetch cache is used
  );

  if (!res.ok) throw new Error("Failed to fetch books from S3");

  cachedBooks = (await res.json()) as RawBook[];
  return cachedBooks;
}


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page") || 1);
  const pageSize = 20;
const data = await getBooks();

  const totalCount = data.length;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const books: Book[] = data.slice(start, end).map((book) => ({
    id: book.id,
    slug: createSlug(book.id, book.title),
    title: book.title,
    description: book.description,
    image: book.image,
    downloads: book.downloads,
    pdf: book.pdf,
  }));

  const response: BooksApiResponse = {
    count: totalCount,
    next: end < totalCount ? `/api/books?page=${page + 1}` : null,
    previous: page > 1 ? `/api/books?page=${page - 1}` : null,
    page,
    pageSize,
    books,
  };

  return NextResponse.json(response);
}
