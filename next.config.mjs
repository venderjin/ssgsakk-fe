/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.ssgcdn.com",
      },
      {
        protocol: "https",
        hostname: "*.dummyjson.com",
      },
    ],
  },
  env: {
    ZIPCODE_SERVICE_URL: process.env.ZIPCODE_SERVICE_URL,
    ZIPCODE_SERVICE_KEY: process.env.ZIPCODE_SERVICE_KEY,
    BASE_URL: process.env.BASE_URL,
  },

  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/login/social",
        destination:
          "http://localhost:3000/login/social?token=secret&userName=secret",
      },
    ];
  },
};

export default nextConfig;
