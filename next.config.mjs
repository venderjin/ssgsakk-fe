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
      {
        protocol: "https",
        hostname: "*.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "*.amazonaws.com",
      },
    ],
  },
  env: {
    ZIPCODE_SERVICE_URL: process.env.ZIPCODE_SERVICE_URL,
    ZIPCODE_SERVICE_KEY: process.env.ZIPCODE_SERVICE_KEY,
    BASE_URL: process.env.BASE_URL,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION,
    REVIEW_IMAGE_URL: process.env.REVIEW_IMAGE_URL,
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
