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
      // Retired share images. Every og:image this site has ever declared is
      // still crawlable at its original URL, so Naver keeps treating the old
      // pizza photos as valid thumbnail candidates. A 301 is the retirement
      // signal a 404 is not: scrapers follow it, and links already shared to
      // KakaoTalk keep resolving to a current card instead of breaking.
      // The files stay on disk — the redirect wins the route first.
      ...[
        "/assets/user/share-preview-logo-1200x630.png",
        "/assets/user/share-preview-og-1200x630.png",
        "/assets/user/share-preview-og-v2-1200x630.png",
        "/assets/user/share-preview-kakao-logo-1200x630.png",
        "/assets/user/share-preview-navy-logo.jpg",
        "/assets/user/share-preview-navy-logo-v2.jpg",
        "/assets/user/%EC%B5%9C%EA%B0%95%ED%94%BC%EC%9E%90SEO.png",
      ].map((source) => ({
        source,
        destination: "/assets/user/og/home-hero-20260822.webp",
        statusCode: 301 as const,
      })),
      // The /brand hero has been reshot twice, so its card has two retired
      // URLs. Each keeps answering — redirected to the current brand card,
      // not to the home card, so a shared /brand link keeps its own image.
      ...[
        "/assets/user/og/brand-hero-20260819.webp",
        "/assets/user/og/brand-hero-20260820.webp",
        "/assets/user/og/brand-hero-20260821.webp",
      ].map((source) => ({
        source,
        destination: "/assets/user/og/brand-hero-20260822.webp",
        statusCode: 301 as const,
      })),
      // The blue-era home and menu cards, retired by the red conversion.
      {
        source: "/assets/user/og/home-hero-20260819.webp",
        destination: "/assets/user/og/home-hero-20260822.webp",
        statusCode: 301 as const,
      },
      {
        source: "/assets/user/og/menu-hero-20260819.webp",
        destination: "/assets/user/og/menu-hero-20260822.webp",
        statusCode: 301 as const,
      },
    ];
  },
};

export default nextConfig;
