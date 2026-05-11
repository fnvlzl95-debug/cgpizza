import type { Metadata } from "next";
import { PortedHomepage } from "@/components/home/ported/ported-homepage";
import { portedHomepageData } from "@/lib/ported-homepage-data";
import { siteUrl } from "@/lib/site-config";

const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

const brandImage = absoluteUrl(portedHomepageData.metadata.ogImage);
const brandImageAlt = "매출의 한계를 넘는 가장 확실한 선택 - 최강피자";
const brandImageWidth = 1731;
const brandImageHeight = 909;
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
    url: absoluteUrl("/#contact-section"),
  },
  {
    name: "최강 샵인샵 안내",
    image: absoluteUrl("/assets/user/franchise/shop-in-shop-message.jpeg"),
    url: absoluteUrl("/#shopinshop-intro-section"),
  },
  {
    name: "준비된 주방 운영 구조",
    image: absoluteUrl("/assets/user/franchise/shop-triptych-02.jpeg"),
    url: absoluteUrl("/#shopinshop-section"),
  },
  {
    name: "추가 수익 운영 동선",
    image: absoluteUrl("/assets/user/franchise/shop-triptych-01.jpeg"),
    url: absoluteUrl("/#threeway-section"),
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
    telephone: "1866-1622",
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData) }}
      />
      <PortedHomepage />
    </>
  );
}
