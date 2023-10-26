import { readFileSync } from 'fs';
import path from 'path';

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src', 'data', 'urls.json');
  const data = readFileSync(filePath, 'utf-8');
  const jsonData = JSON.parse(data);
  const originalUrl = jsonData.urls[slug];
  const redirectUrl = originalUrl || '/';
  // return Response.redirect(redirectUrl, 308);
  return new Response(JSON.stringify({ url: redirectUrl }), {
    status: 308,
  });
}
