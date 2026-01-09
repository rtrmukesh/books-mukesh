import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ["www.gutenberg.org"], // ✅ allow Gutenberg images
  },
};

export default nextConfig;
