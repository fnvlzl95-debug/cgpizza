import type { Metadata } from "next";
import "pretendard/dist/web/static/pretendard.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ckpizza.co.kr"),
  title: {
    default: "최강피자",
    template: "%s | 최강피자",
  },
  description: "소화가 잘되는 맛있는 피자, 최강피자. 파로 도우와 신선한 재료로 완성한 대표 메뉴를 만나보세요.",
  openGraph: {
    title: "최강피자",
    description: "소화가 잘되는 맛있는 피자, 최강피자. 파로 도우와 신선한 재료로 완성한 대표 메뉴를 만나보세요.",
    images: ["/assets/user/share-preview-kakao-logo-1200x630.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "최강피자",
    description: "소화가 잘되는 맛있는 피자, 최강피자. 파로 도우와 신선한 재료로 완성한 대표 메뉴를 만나보세요.",
    images: ["/assets/user/share-preview-kakao-logo-1200x630.png"],
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
