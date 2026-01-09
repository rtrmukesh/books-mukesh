"use client";

import { BookOpen, Calendar, Download, Eye, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

type Book = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  downloads: number;
  pdf: string;
};

type ApiResponse = {
  books: Book[];
  count: number;
  next: string | null;
};

async function fetchBooks({ pageParam = 1 }): Promise<ApiResponse> {
  const res = await fetch(`/api/books?page=${pageParam}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export default function HomeClient() {
  const loaderRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["books"],
      queryFn: fetchBooks,
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) =>
        lastPage.next ? pages.length + 1 : undefined,
    });

  // Intersection Observer (ONLY external system → OK)
  useEffect(() => {
    if (!loaderRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  if (status === "pending") {
    return <div className="p-10 text-center">Loading books...</div>;
  }

  if (status === "error") {
    return <div className="p-10 text-center">Failed to load books</div>;
  }

  const books = data.pages.flatMap((page) => page.books);
  const totalCount = data.pages[0]?.count ?? 0;
  const page = data.pages.length;

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Discover <span className="text-yellow-300">Free</span> Public
              Domain Treasures
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Thousands of classic books available as free PDF downloads.
            </p>
            <div className="text-white mb-8">
              <h2 className="text-2xl font-bold mb-4">
                📖 What Type of Books Are Available?
              </h2>

              <ul className="list-disc list-inside space-y-2 text-white">
                <li>Public domain classic literature</li>
                <li>Open-source educational books</li>
                <li>Historical & cultural reference books</li>
                <li>Self-published free learning resources</li>
                <li>Books legally available for free download</li>
              </ul>

              <p className="text-sm text-white mt-4">
                All books are legally shared under public domain or open-source
                licenses. This platform does <strong>not</strong> host pirated
                or copyrighted content.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <BookOpen size={20} />
                <span>{totalCount.toLocaleString()} Books</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Download size={20} />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Eye size={20} />
                <span>HD Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
             <span className="text-blue-600">Featured Books</span>
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} />
            <span>Page {page}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <article
              key={book.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              {book.downloads > 10000 && (
                <div className="absolute top-4 left-4 z-10 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  <Star size={12} /> POPULAR
                </div>
              )}

              <div className="relative h-64">
                <Link href={`/books/${book.slug}`}>
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </Link>
              </div>

              <div className="p-5">
                <Link href={`/books/${book.slug}`}>
                  <h3 className="font-bold line-clamp-2">{book.title}</h3>
                </Link>
                <p className="text-sm text-gray-600 line-clamp-3 mt-2">
                  {book.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1 text-sm">
                    <Download size={16} />
                    {book.downloads.toLocaleString()}
                  </div>
                  <Link
                    href={`/books/${book.slug}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Read Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Loader */}
        <div ref={loaderRef} className="py-8 text-center text-gray-600">
          {isFetchingNextPage
            ? "Loading more books..."
            : hasNextPage
            ? "Scroll down to load more"
            : "No more books"}
        </div>
      </section>
    </main>
  );
}
