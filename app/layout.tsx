import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SEO_KEYWORDS } from "@/data/seo";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Free Public Domain Books PDF Download | books.themukesh.com",
    template: "%s | books.themukesh.com",
  },

  description:
    "Download free public domain books in PDF format. Classic novels, fiction, science, philosophy and more. No signup required.",

  keywords: SEO_KEYWORDS, 

  authors: [{ name: "Mukesh Murugaiyan" }],

  creator: "Mukesh Murugaiyan",
  publisher: "books.themukesh.com",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Free Public Domain Books PDF Download",
    description:
      "Access thousands of free public domain books. Download PDF books instantly.",
    url: "https://books.themukesh.com",
    siteName: "books.themukesh.com",
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://books.themukesh.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        {/* AdSense global script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7493262026277368"
          crossOrigin="anonymous"
        />
        {/* AdSense verification meta tag */}
        <meta name="google-adsense-account" content="ca-pub-7493262026277368" />
        <GoogleTagManager gtmId={"GT-MK9M3K66"} />
         {/* Google Analytics */}
       <GoogleAnalytics
          gaId={"G-WP7471XCCF"}
        />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <GoogleTagManager gtmId={"G-WP7471XCCF"} /> */}
        <Providers>{children}</Providers>
        {/* <GoogleAnalytics gaId={GAID} /> */}
      </body>
    </html>
  );
}
