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
    ],
  },
  env: {
    ZIPCODE_SERVICE_URL: process.env.ZIPCODE_SERVICE_URL,
    ZIPCODE_SERVICE_KEY: process.env.ZIPCODE_SERVICE_KEY,
  },
};

export default nextConfig;
