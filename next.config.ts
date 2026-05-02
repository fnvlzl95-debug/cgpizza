import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/pages",
        has: [{ type: "host", value: "ckpizza.co.kr" }],
        destination: "https://www.ckpizza.co.kr/",
        statusCode: 301,
      },
      {
        source: "/pages/:path*",
        has: [{ type: "host", value: "ckpizza.co.kr" }],
        destination: "https://www.ckpizza.co.kr/",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "ckpizza.co.kr" }],
        destination: "https://www.ckpizza.co.kr/:path*",
        statusCode: 301,
      },
      {
        source: "/pages",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/pages/:path*",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
