import type { Metadata } from "next";
import "pretendard/dist/web/static/pretendard.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ckpizza.co.kr"),
  title: {
    default: "최강피자",
    template: "%s | 최강피자",
  },
  description:
    "최강피자의 브랜드 소개와 가맹 상담을 위한 공식 홈페이지입니다.",
  openGraph: {
    title: "최강피자",
    description: "최강피자의 브랜드 소개와 가맹 상담을 위한 공식 홈페이지입니다.",
    images: ["/assets/user/hero-collage.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "최강피자",
    description: "최강피자의 브랜드 소개와 가맹 상담을 위한 공식 홈페이지입니다.",
    images: ["/assets/user/hero-collage.webp"],
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
