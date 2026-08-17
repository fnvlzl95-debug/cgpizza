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
        {/*
          THESIS: A franchise page that answers "what is actually left over"
          with a published number instead of an adjective. It refuses the
          category default of a dark hero over stock kitchen footage followed
          by benefit tiles.
          OWN-WORLD: Electric brand blue (#0032F0) and gold (#FDD816) in
          full-bleed alternating fields — blue, white, cream, yellow, blue —
          with navy (#011750) carrying every word and panel. Data lives in
          real tables and a drawn donut, not in cards. Orange (#F27920) is
          reserved for the profit section alone; red (#E12110) fires once
          per screen at most.
          STORY: A prospective owner learns the head office removes the entry
          cost first, sees the profit split published, and calls 1866-1623.
          FIRST VIEWPORT: Blue field. Left half — four gold stars, then
          "맛도 최강, / 재료도 최강." at display scale with alternating gold
          and white words, subhead, two body lines, and a three-icon proof
          row. Right half — the half-and-half pizza bleeding off the edge
          under a red BEST seal. Primary action sits in the header as a gold
          pill, always reachable.
          FORM: Brief-pinned. The client's approved comp set in
          디자인수정참고파일들/ is the direction; no concept roll was run
          because a pinned brief outranks the deal.
          FINISH: unreviewed and undocumented is unfinished; this build ends
          with the finish review, the verdict, and DESIGN.md
        */}
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
