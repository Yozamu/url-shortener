import commonHelper from '@/utils/commonHelper';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

export const computeShortUrlAndUpdatedData = (data: string, url: string) => {
  const jsonData = JSON.parse(data);
  // Update data by inserting new URL match and updating next sequence
  const shortUrl = jsonData.currentUrl;
  jsonData.urls[shortUrl] = url;
  jsonData.currentUrl = commonHelper.getNextShortenedUrl(shortUrl);
  return [shortUrl, JSON.stringify(jsonData, null, 2)];
};

export async function POST(request: Request) {
  const body = await request.json();
  const { url } = body;

  // Verify RFC 7230 compliance
  const isUrlValid = commonHelper.isUrlValid(url);
  if (!isUrlValid) {
    return new Response(JSON.stringify({ error: 'invalid URL' }), { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'urls.json');
    const data = readFileSync(filePath, 'utf-8');
    const [shortUrl, updatedData] = computeShortUrlAndUpdatedData(data, url);
    writeFileSync(filePath, updatedData, 'utf-8');

    return Response.json({ originalUrl: url, shortUrl });
  } catch (error) {
    return new Response(JSON.stringify({ message: `Une erreur s'est produite: ${(error as Error).message}` }), {
      status: 500,
    });
  }
}
