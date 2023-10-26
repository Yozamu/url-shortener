import { permanentRedirect } from 'next/navigation';
import { getRedirectUrl } from '../api/shorturl/[slug]/route';

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  permanentRedirect(getRedirectUrl(slug));
};

export default SlugPage;
