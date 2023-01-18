/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MONGO_URI:
      "mongodb+srv://andreiortan:0iRl87LjiVkDhpbf@cluster0.kxrncjl.mongodb.net/?retryWrites=true&w=majority",
  },
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
