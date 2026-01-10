import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Cache for 24 hours
export const revalidate = 86400; 

const URLS_PER_SITEMAP = 45000;

/**
 * Next.js-ku sitemap counts solla intha function
 */
export async function generateSitemaps() {
  const filePath = path.join(process.cwd(), 'data', 'urls.json');
  
  // JSON file-ai read panni count edukkurom
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const allUrls: string[] = JSON.parse(fileContent);
  
  const numberOfSitemaps = Math.ceil(allUrls.length / URLS_PER_SITEMAP);

  return Array.from({ length: numberOfSitemaps }, (_, i) => ({ id: i }));
}

/**
 * Ovvoru individual sitemap chunk content-ai ithu tharum
 */
export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const filePath = path.join(process.cwd(), 'data', 'urls.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const allUrls: string[] = JSON.parse(fileContent);

  // Current ID-ku entha URLs venumo athai slice pannurom
  const start = id * URLS_PER_SITEMAP;
  const end = start + URLS_PER_SITEMAP;
  const chunk = allUrls.slice(start, end);

  return chunk.map((url) => ({
    url: url,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
}