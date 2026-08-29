import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";
import { portedHomepageData } from "@/lib/ported-homepage-data";
import { siteUrl } from "@/lib/site-config";

const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

const searchImage = absoluteUrl(portedHomepageData.metadata.searchImage);
const shareImageAlt = "최강피자 — 맛도 최강, 재료도 최강";
const searchImageAlt = "최강피자 대표 반반피자";
const imageWidth = 1200;
const imageHeight = 630;
const brandLogo = absoluteUrl("/assets/user/brand/ckp-badge-20260821.webp");
const representativePizza = absoluteUrl("/assets/user/hero-pizza-oriented.webp");

/* Every image here is one the home page actually renders. Advertising
   images the DOM never shows reads as a mismatch to a crawler comparing
   structured data against page content. */
const searchPromoCards = [
  {
    name: "최강피자 브랜드 소개",
    image: absoluteUrl("/assets/user/brand-videos/posters/2-revised.webp"),
    url: `${siteUrl}/brand`,
  },
  {
    name: "함께 성장할 점주 모집",
    image: absoluteUrl("/assets/user/franchise/store-red-concept.webp"),
    url: absoluteUrl("/#philosophy"),
  },
  {
    name: "최강피자의 진짜 주방",
    image: absoluteUrl("/assets/user/brand-videos/posters/2-revised.webp"),
    url: absoluteUrl("/#real-kitchen"),
  },
  {
    name: "전체 메뉴",
    image: absoluteUrl("/assets/user/menu/choigang-master-pizza.png"),
    url: absoluteUrl("/menu"),
  },
] as const;

const homepageStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "최강피자",
    url: siteUrl,
    description: portedHomepageData.metadata.description,
    image: representativePizza,
  },
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "최강피자",
    url: siteUrl,
    image: representativePizza,
    logo: brandLogo,
    telephone: "1866-1623",
    servesCuisine: "피자",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressRegion: "경기",
      addressLocality: "부천시 원미구",
      streetAddress: "도약로 105 한라마을주공(3)아파트 105호",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "최강피자 홈페이지 주요 안내",
    numberOfItems: searchPromoCards.length,
    itemListElement: searchPromoCards.map((card, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        name: card.name,
        url: card.url,
        image: card.image,
      },
    })),
  },
];

export const metadata: Metadata = {
  title: portedHomepageData.metadata.title,
  description: portedHomepageData.metadata.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: portedHomepageData.metadata.title,
    description: portedHomepageData.metadata.description,
    images: [
      {
        url: portedHomepageData.metadata.ogImage,
        width: imageWidth,
        height: imageHeight,
        alt: shareImageAlt,
      },
      {
        url: searchImage,
        width: imageWidth,
        height: imageHeight,
        alt: searchImageAlt,
      },
    ],
  },
  twitter: {
    title: portedHomepageData.metadata.title,
    description: portedHomepageData.metadata.description,
    images: [
      {
        url: portedHomepageData.metadata.ogImage,
        alt: shareImageAlt,
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData) }}
      />
      <HomePage />
    </>
  );
}
