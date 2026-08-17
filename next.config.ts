import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP only. Every source asset here is already WebP or PNG, so AVIF
    // re-encoding costs minutes of CPU per cold request for a few percent of
    // bytes — it stalled local rendering outright on the review collage.
    formats: ["image/webp"],
    qualities: [75, 90, 100],
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
