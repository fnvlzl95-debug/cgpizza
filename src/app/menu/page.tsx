import type { Metadata } from "next";
import { MenuPage } from "@/components/menu/menu-page";
import { menuPageData } from "@/lib/menu-page-data";
import { siteUrl } from "@/lib/site-config";

/* A designed 1200×630 card rendered from this page's own hero — not a raw
   product photo. The 2.6 MB menu PNG this replaces sat past the practical
   size ceiling for OG scrapers, and a scraper that gives up on og:image
   falls back to harvesting DOM images, which is how stale pizza photos end
   up as the search thumbnail. Regenerate with scripts/og-cards.mjs; a new
   date is a new URL on purpose. */
const menuImage = "/assets/user/og/share-logo-20260823.webp";
const menuImageAlt = "최강피자 메뉴 — 베스트 피자와 전체 메뉴";
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
        url: menuImage,
        width: 1200,
        height: 630,
        alt: menuImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "최강피자 메뉴",
    description: menuDescription,
    images: [
      {
        url: menuImage,
        alt: menuImageAlt,
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
