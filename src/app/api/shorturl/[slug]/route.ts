import { readFileSync } from 'fs';
import path from 'path';

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  console.log('TODO ', params);
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src', 'data', 'urls.json');
  const data = readFileSync(filePath, 'utf-8');
  const jsonData = JSON.parse(data);
  const originalUrl = jsonData.urls[slug];
  return Response.redirect(originalUrl, 308);
}
