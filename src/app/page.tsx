import type { Metadata } from "next";
import { PortedHomepage } from "@/components/home/ported/ported-homepage";
import { portedHomepageData } from "@/lib/ported-homepage-data";
import { siteUrl } from "@/lib/site-config";

const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

const searchPromoCards = [
  {
    name: "최강피자 브랜드 소개",
    image: absoluteUrl("/assets/user/share-preview-og-v2-1200x630.png"),
    url: absoluteUrl("/"),
  },
  {
    name: "소형 매장 최적화",
    image: absoluteUrl("/assets/user/franchise/front-store-front-edited.png"),
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
    image: searchPromoCards[0].image,
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
    images: [...portedHomepageData.metadata.ogImages],
  },
  twitter: {
    title: portedHomepageData.metadata.title,
    description: portedHomepageData.metadata.description,
    images: [portedHomepageData.metadata.ogImage],
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
