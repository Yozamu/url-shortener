export async function POST(request: Request) {
  const body = await request.json();
  const { url } = body;

  const res = Response.json({ message: `TODO shrink ${url}` });
  return res;
}
