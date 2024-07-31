/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['213.230.91.55'], // Добавьте ваш внешний домен изображений сюда
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://213.230.91.55:8110/:path*', // Прокси на бэкенд
      },
    ];
  },
};

export default nextConfig;