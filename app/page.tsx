import { SEO_KEYWORDS } from "@/data/seo";
import HomeClient from "@/mainPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mukesh Murugaiyan | Free Public Domain Books | Download PDFs Online",
  description:
    "Explore thousands of free public domain books. Download full PDF versions of classic literature and enjoy reading online for free.",
  keywords: [
    ...SEO_KEYWORDS,
    "free books",
    "public domain books",
    "download PDF books",
    "classic literature",
    "ebooks"
  ],
  authors: [{ name: "Mukesh Murugaiyan" }],
  creator: "@mukeshmurugaiyan",
  publisher: "@mukeshmurugaiyan",
  openGraph: {
    title: "Free Public Domain Books | Download PDFs Online",
    description:
      "Explore thousands of free public domain books. Download full PDF versions of classic literature and enjoy reading online for free.",
    url: "https://books.themukesh.com",
    siteName: "Mukesh Murugaiyan Books",
    images: [
      {
        url: "/mukesh-mg.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://books.themukesh.com"),
};

export default function Home() {
  return (
       <HomeClient/>
  );
}
