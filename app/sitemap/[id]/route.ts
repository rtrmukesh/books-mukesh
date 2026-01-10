import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sitemapId = Number(id.replace('.xml', '')); // "0.xml" -> 0

  const filePath = path.resolve(process.cwd(), 'data/urls.json');
  const allUrls: string[] = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const start = sitemapId * 45000;
  const chunk = allUrls.slice(start, start + 45000);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${chunk.map(url => `<url><loc>${url}</loc><changefreq>monthly</changefreq></url>`).join('')}
    </urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}