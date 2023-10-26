'use client';

import { useRouter } from 'next/navigation';

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const { slug } = params;

  fetch(`api/shorturl/${slug}`)
    .then((response) => {
      if (response.status === 308) {
        return response.json();
      }
    })
    .then((json) => {
      router.push(json.url);
    })
    .catch((_e) => router.push('/'));

  return null;
};

export default SlugPage;
