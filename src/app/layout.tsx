import type { Metadata } from "next";
import Script from "next/script";
import { siteUrl } from "@/lib/site-config";
import "pretendard/dist/web/static/pretendard.css";
import "./globals.css";

const googleAnalyticsId = "G-G9ZWHC3L9L";
const naverAnalyticsId = "1c48f0bc7c4f170";

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
