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
        permanent: true,
      },
      {
        source: "/pages/:path*",
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
        source: "/pages",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pages/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
