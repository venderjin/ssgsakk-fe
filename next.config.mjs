/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
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
};

export default nextConfig;
