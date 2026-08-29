import type { Metadata } from "next";
import { MenuPage } from "@/components/menu/menu-page";
import { menuPageData } from "@/lib/menu-page-data";
import { siteUrl } from "@/lib/site-config";

/* Kakao uses the first og:image it finds, so the existing share card stays
   first. Search crawlers can evaluate the second, page-specific candidate. */
const shareImage = "/assets/user/og/share-logo-20260823.jpg";
const searchImage = "/assets/user/og/search-menu.jpg";
const shareImageAlt = "최강피자 메뉴 — 베스트 피자와 전체 메뉴";
const searchImageAlt = "최강피자 대표 메뉴 3종";
const menuDescription = "최강피자의 베스트 메뉴, 전체 피자 메뉴, 사이드 메뉴를 확인하세요.";

export const metadata: Metadata = {
  title: "메뉴",
  description: menuDescription,
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/menu`,
    title: "최강피자 메뉴",
    description: menuDescription,
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: shareImageAlt,
      },
      {
        url: searchImage,
        width: 1200,
        height: 630,
        alt: searchImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "최강피자 메뉴",
    description: menuDescription,
    images: [
      {
        url: shareImage,
        alt: shareImageAlt,
      },
    ],
  },
};

const absoluteUrl = (path: string) => `${siteUrl}${path}`;

/**
 * The catalogue as structured data, from the same source the page renders.
 * Prices are deliberately absent: the site does not publish them, and
 * structured data must never claim more than the page shows. Every image
 * here is one the page actually renders.
 */
const menuStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "최강피자 메뉴",
    description: menuDescription,
    url: `${siteUrl}/menu`,
    image: absoluteUrl("/assets/user/menu/choigang-master-pizza.png"),
    mainEntityOfPage: `${siteUrl}/menu`,
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "최강피자 전체 메뉴",
    description: menuDescription,
    url: `${siteUrl}/menu`,
    numberOfItems: menuPageData.all.length + menuPageData.sideItems.length,
    itemListElement: [
      ...menuPageData.all.map((item, index) => ({
        "@type": "ListItem" as const,
        position: index + 1,
        item: {
          "@type": "MenuItem" as const,
          name: item.title,
          description: item.description,
          image: absoluteUrl(item.image),
        },
      })),
      ...menuPageData.sideItems.map((item, index) => ({
        "@type": "ListItem" as const,
        position: menuPageData.all.length + index + 1,
        item: {
          "@type": "MenuItem" as const,
          name: item.title,
          description: item.description,
          image: absoluteUrl(item.image),
        },
      })),
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "메뉴", item: `${siteUrl}/menu` },
    ],
  },
];

export default function MenuRoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuStructuredData) }}
      />
      <MenuPage />
    </>
  );
}
