import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export const revalidate = 86400;

const URLS_PER_SITEMAP = 45000;

// Proper type for the sitemap function props
type SitemapProps = {
  id: number | string | Promise<number | string>;
};

function getUrls(): string[] {
  try {
    const filePath = path.resolve(process.cwd(), 'data/urls.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Sitemap: Error reading urls.json", error);
    return [];
  }
}

export async function generateSitemaps() {
  const allUrls = getUrls();
  const numberOfSitemaps = Math.ceil(allUrls.length / URLS_PER_SITEMAP);
  return Array.from({ length: numberOfSitemaps }, (_, i) => ({ id: i }));
}

export default async function sitemap({
  id,
}: SitemapProps): Promise<MetadataRoute.Sitemap> {
  // Await pannuvom (Next.js 15 dynamic params promise-ah irukkum)
  const resolvedId = await id;
  const sitemapId = Number(resolvedId);
  const allUrls = getUrls();

  const start = sitemapId * URLS_PER_SITEMAP;
  const end = start + URLS_PER_SITEMAP;
  const chunk = allUrls.slice(start, end);

  console.log(`✅ ID: ${sitemapId} | Start: ${start} | Found: ${chunk.length}`);

  return chunk.map((url) => ({
    url: url,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
}