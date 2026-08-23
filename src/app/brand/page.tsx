import type { Metadata } from "next";
import { BrandPage } from "@/components/brand/brand-page";
import { siteUrl } from "@/lib/site-config";

const brandTitle = "브랜드 소개";
const brandDescription =
  "매일 직접 반죽하는 파로 도우, 엄선한 재료, 연출 없는 실제 주방. 최강피자가 한 판을 만드는 방식을 소개합니다.";
const brandImage = "/assets/user/og/share-logo-20260823.webp";
const brandImageAlt = "최강피자 브랜드 소개 — 파로 도우와 대표 피자";

export const metadata: Metadata = {
  title: brandTitle,
  description: brandDescription,
  alternates: {
    canonical: "/brand",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/brand`,
    title: `최강피자 ${brandTitle}`,
    description: brandDescription,
    images: [
      {
        url: brandImage,
        width: 1200,
        height: 630,
        alt: brandImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `최강피자 ${brandTitle}`,
    description: brandDescription,
    images: [
      {
        url: brandImage,
        alt: brandImageAlt,
      },
    ],
  },
};

/**
 * Breadcrumb only — the home page already declares the Restaurant entity,
 * and declaring it again here would have two pages competing to represent
 * the same thing. This page points at itself as a WebPage and leaves the
 * entity where it is.
 */
const brandStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `최강피자 ${brandTitle}`,
    url: `${siteUrl}/brand`,
    description: brandDescription,
    image: `${siteUrl}${brandImage}`,
    mainEntityOfPage: `${siteUrl}/brand`,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: siteUrl },
      { "@type": "ListItem", position: 2, name: brandTitle, item: `${siteUrl}/brand` },
    ],
  },
];

export default function BrandRoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandStructuredData) }}
      />
      <BrandPage />
    </>
  );
}
