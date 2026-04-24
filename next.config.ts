import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/pages/news",
        has: [{ type: "host", value: "ckpizza.co.kr" }],
        destination: "https://www.ckpizza.co.kr/",
        permanent: true,
      },
      {
        source: "/pages/news/:path*",
        has: [{ type: "host", value: "ckpizza.co.kr" }],
        destination: "https://www.ckpizza.co.kr/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "ckpizza.co.kr" }],
        destination: "https://www.ckpizza.co.kr/:path*",
        permanent: true,
      },
      {
        source: "/pages/news",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pages/news/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
