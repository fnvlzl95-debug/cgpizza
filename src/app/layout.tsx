import type { Metadata } from "next";
import Script from "next/script";
import { siteUrl } from "@/lib/site-config";
import "pretendard/dist/web/static/pretendard.css";
import "./globals.css";

const googleAnalyticsId = "G-G9ZWHC3L9L";
const naverAnalyticsId = "1c48f0bc7c4f170";
const defaultDescription =
  "최강피자 부천본점 메뉴, 방문포장 할인, 파로 도우 피자, 피자창업·샵인샵 가맹 상담을 안내합니다.";
const defaultImage = "/assets/user/share-preview-og-v2-1200x630.png";
const defaultImageAlt = "최강피자 대표 피자와 브랜드 안내 이미지";
const defaultImageWidth = 1200;
const defaultImageHeight = 630;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "최강피자 공식 홈페이지",
    template: "%s | 최강피자",
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    shortcut: `${siteUrl}/icon.png`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "최강피자 공식 홈페이지",
    description: defaultDescription,
    images: [
      {
        url: defaultImage,
        width: defaultImageWidth,
        height: defaultImageHeight,
        alt: defaultImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "최강피자 공식 홈페이지",
    description: defaultDescription,
    images: [
      {
        url: defaultImage,
        alt: defaultImageAlt,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <Script id="naver-analytics" strategy="afterInteractive">
          {`
            window.wcs_add = window.wcs_add || {};
            window.wcs_add["wa"] = "${naverAnalyticsId}";
            (function() {
              var script = document.createElement("script");
              script.src = "https://wcs.pstatic.net/wcslog.js";
              script.async = true;
              script.onload = function() {
                if (window.wcs && typeof window.wcs_do === "function") {
                  window.wcs_do();
                }
              };
              document.head.appendChild(script);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
