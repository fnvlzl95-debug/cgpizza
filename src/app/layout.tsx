import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteUrl } from "@/lib/site-config";
import "pretendard/dist/web/static/pretendard.css";
import "./globals.css";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "최강피자",
    template: "%s | 최강피자",
  },
  description: "소화가 잘되는 맛있는 피자, 최강피자. 파로 도우와 신선한 재료로 완성한 대표 메뉴를 만나보세요.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "최강피자",
    description: "소화가 잘되는 맛있는 피자, 최강피자. 파로 도우와 신선한 재료로 완성한 대표 메뉴를 만나보세요.",
    images: [
      "/assets/user/share-preview-og-v2-1200x630.png",
      "/assets/user/franchise/front-store-front-edited.png",
      "/assets/user/franchise/shop-in-shop-message.jpeg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "최강피자",
    description: "소화가 잘되는 맛있는 피자, 최강피자. 파로 도우와 신선한 재료로 완성한 대표 메뉴를 만나보세요.",
    images: ["/assets/user/share-preview-og-v2-1200x630.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
      {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
    </html>
  );
}
