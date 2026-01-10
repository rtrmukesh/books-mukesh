import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Add any paths you want to hide
    },
    sitemap: 'https://books.themukesh.com/sitemap.xml',
  };
}