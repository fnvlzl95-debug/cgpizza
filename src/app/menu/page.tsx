import type { Metadata } from "next";
import { MenuPage } from "@/components/menu/menu-page";

export const metadata: Metadata = {
  title: "메뉴",
  description: "최강피자의 베스트 메뉴, 전체 피자 메뉴, 사이드 메뉴와 음료를 확인하세요.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "최강피자 메뉴",
    description: "최강피자의 베스트 메뉴, 전체 피자 메뉴, 사이드 메뉴와 음료를 확인하세요.",
    images: ["/assets/user/menu/choigang-handmade-bulgogi.png"],
  },
  twitter: {
    title: "최강피자 메뉴",
    description: "최강피자의 베스트 메뉴, 전체 피자 메뉴, 사이드 메뉴와 음료를 확인하세요.",
    images: ["/assets/user/menu/choigang-handmade-bulgogi.png"],
  },
};

export default function MenuRoutePage() {
  return <MenuPage />;
}
