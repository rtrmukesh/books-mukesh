import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [  // ✅ Updated from deprecated domains
      {
        protocol: 'https',
        hostname: 'www.gutenberg.org',
      },
    ],
  },
  
  // 🔥 FIXED headers syntax
  async headers() {
    return [
      {
        // Correct pattern for all sitemap XML files
        source: '/sitemap/:path*.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8'
          },
          {
            key: 'Cache-Control', 
            value: 'public, max-age=3600'
          }
        ]
      },
      {
        // Also cover sitemap-index.xml
        source: '/sitemap-index.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8'
          }
        ]
      }
    ];
  },
};

export default nextConfig;
