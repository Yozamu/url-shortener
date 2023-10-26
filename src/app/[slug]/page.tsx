import { redirect } from 'next/navigation';

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  try {
    const response = await fetch(`/api/shorturl/${slug}`);
    if (response.redirected) {
      redirect(response.url);
    }
  } catch (_e) {
    redirect('/');
  }

  return null;
};

export default SlugPage;
