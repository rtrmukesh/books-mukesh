import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// 1. Where to put revalidate: At the very top of this file
export const revalidate = 86400; // Cache for 24 hours

const URLS_PER_SITEMAP = 45000;

/**
 * generateSitemaps tells Next.js to create multiple sitemap files.
 * For 77,777 URLs, it will create sitemap/0.xml and sitemap/1.xml
 */
export async function generateSitemaps() {
  const filePath = path.join(process.cwd(), 'data', 'sitemap-source.xml');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Extract all <loc> content
  const locRegex = /<loc>(.*?)<\/loc>/g;
  const matches = fileContent.match(locRegex) || [];
  const totalUrls = matches.length;

  const numberOfSitemaps = Math.ceil(totalUrls / URLS_PER_SITEMAP);

  return Array.from({ length: numberOfSitemaps }, (_, i) => ({ id: i }));
}

/**
 * The default function generates the content for each sitemap chunk.
 */
export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const filePath = path.join(process.cwd(), 'data', 'sitemap-source.xml');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Regex to extract URLs
  const locRegex = /<loc>(.*?)<\/loc>/g;
  const allUrls: string[] = [];
  let match;
  
  while ((match = locRegex.exec(fileContent)) !== null) {
    allUrls.push(match[1]);
  }

  // Get the specific chunk for this 'id'
  const start = id * URLS_PER_SITEMAP;
  const end = start + URLS_PER_SITEMAP;
  const pagedUrls = allUrls.slice(start, end);

  return pagedUrls.map((url) => ({
    url: url,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
}