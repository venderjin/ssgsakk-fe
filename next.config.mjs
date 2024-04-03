/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dummyjson.com", "ssgcdn.com"],
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
  },
};

export default nextConfig;
