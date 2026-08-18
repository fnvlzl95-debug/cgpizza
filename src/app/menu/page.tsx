import type { Metadata } from "next";
import { MenuPage } from "@/components/menu/menu-page";
import { siteUrl } from "@/lib/site-config";

const menuImage = "/assets/user/menu/choigang-handmade-bulgogi.png";
const menuImageAlt = "최강피자 수제 소불고기 피자 메뉴 이미지";

export const metadata: Metadata = {
  title: "메뉴",
  description: "최강피자의 베스트 메뉴, 전체 피자 메뉴, 사이드 메뉴를 확인하세요.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/menu`,
    title: "최강피자 메뉴",
    description: "최강피자의 베스트 메뉴, 전체 피자 메뉴, 사이드 메뉴를 확인하세요.",
    images: [
      {
        url: menuImage,
        width: 1536,
        height: 1024,
        alt: menuImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "최강피자 메뉴",
    description: "최강피자의 베스트 메뉴, 전체 피자 메뉴, 사이드 메뉴를 확인하세요.",
    images: [
      {
        url: menuImage,
        alt: menuImageAlt,
      },
    ],
  },
};

export default function MenuRoutePage() {
  return <MenuPage />;
}
