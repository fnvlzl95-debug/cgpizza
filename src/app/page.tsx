import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";
import { portedHomepageData } from "@/lib/ported-homepage-data";
import { siteUrl } from "@/lib/site-config";

const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

const brandImage = absoluteUrl(portedHomepageData.metadata.ogImage);
const brandImageAlt = "최강피자 로고";
const brandImageWidth = 1200;
const brandImageHeight = 630;
const brandLogo = absoluteUrl("/assets/user/logo-mark-blue.png");

const searchPromoCards = [
  {
    name: "최강피자 브랜드 소개",
    image: brandImage,
    url: absoluteUrl("/"),
  },
  {
    name: "소형 매장 최적화",
    image: absoluteUrl("/assets/user/franchise/small-store-front-20260511.png"),
    url: absoluteUrl("/#contact-cta"),
  },
  {
    name: "함께 성장할 점주 모집",
    image: absoluteUrl("/assets/user/franchise/shop-in-shop-message.jpeg"),
    url: absoluteUrl("/#philosophy"),
  },
  {
    name: "최강피자의 진짜 주방",
    image: absoluteUrl("/assets/user/franchise/shop-triptych-02.jpeg"),
    url: absoluteUrl("/#real-kitchen"),
  },
  {
    name: "집중 운영 시스템",
    image: absoluteUrl("/assets/user/franchise/shop-triptych-01.jpeg"),
    url: absoluteUrl("/#focus-system"),
  },
] as const;

const homepageStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "최강피자",
    url: siteUrl,
    description: portedHomepageData.metadata.description,
    image: brandImage,
  },
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "최강피자",
    url: siteUrl,
    image: brandImage,
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
        width: brandImageWidth,
        height: brandImageHeight,
        alt: brandImageAlt,
      },
    ],
  },
  twitter: {
    title: portedHomepageData.metadata.title,
    description: portedHomepageData.metadata.description,
    images: [
      {
        url: portedHomepageData.metadata.ogImage,
        alt: brandImageAlt,
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
