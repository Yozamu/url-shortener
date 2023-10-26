/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/shorturl',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
