/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.polygon.io",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;

// &apiKey=sjapce6gjgDFgpRHlc7wrzhza_9dbFji
// /v3/reference/tickers
