import type { Metadata } from "next";
import "pretendard/dist/web/static/pretendard.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ckpizza.co.kr"),
  title: {
    default: "최강피자",
    template: "%s | 최강피자",
  },
  description: "소화가 잘되는 맛있는 피자. 최강피자 브랜드 소개와 가맹 상담 안내.",
  openGraph: {
    title: "최강피자",
    description: "소화가 잘되는 맛있는 피자. 최강피자 브랜드 소개와 가맹 상담 안내.",
    images: ["/assets/user/share-preview-og-1200x630.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "최강피자",
    description: "소화가 잘되는 맛있는 피자. 최강피자 브랜드 소개와 가맹 상담 안내.",
    images: ["/assets/user/share-preview-og-1200x630.png"],
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
    </html>
  );
}
