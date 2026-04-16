import { ctaLinks } from "@/lib/landing-data";

export type ReferenceNavItem = {
  label: string;
  href: string;
};

export type ReferenceHeroCard = {
  title: string;
  body: string;
};

export type ReferenceValueItem = {
  icon: "leaf" | "chef" | "layers" | "thumb";
  title: string;
  description: string;
};

export type ReferenceMenuBadge = "BEST" | "NEW" | "SIGNATURE";

export type ReferenceMenuItem = {
  badge: ReferenceMenuBadge;
  title: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
};

export const referenceHomepageData = {
  navItems: [
    { label: "메뉴", href: "#menu-section" },
    { label: "이벤트", href: "#event-section" },
    { label: "매장안내", href: "#store-section" },
    { label: "리뷰", href: "#review-section" },
    { label: "가맹문의", href: "#contact-section" },
  ] satisfies ReferenceNavItem[],
  header: {
    orderLabel: "주문하기",
    orderHref: ctaLinks.websiteHref,
  },
  hero: {
    badge: "BEST",
    title: ["소화가 잘되는", "맛있는 피자"],
    description: "최고의 재료, 최강의 맛! 부천본점의 특별함을 만나보세요!",
    primaryCta: {
      label: "메뉴 주문하기",
      href: ctaLinks.websiteHref,
    },
    secondaryCta: {
      label: "브랜드 영상 보기",
    },
    infoCards: [
      {
        title: "부천본점",
        body: "SINCE 2010",
      },
      {
        title: "방문포장 5,000원 할인",
        body: "가성비 최고",
      },
      {
        title: "신속한 배달",
        body: "30분 내외 도착",
      },
    ] satisfies ReferenceHeroCard[],
  },
  valueItems: [
    {
      icon: "leaf",
      title: "신선한 재료",
      description: "엄선된 재료만을 사용",
    },
    {
      icon: "chef",
      title: "수제 도우",
      description: "매일 직접 반죽",
    },
    {
      icon: "layers",
      title: "풍부한 토핑",
      description: "아끼지 않는 푸짐함",
    },
    {
      icon: "thumb",
      title: "완벽한 맛",
      description: "한 번 맛보면 단골",
    },
  ] satisfies ReferenceValueItem[],
  menu: {
    eyebrow: "BEST MENU",
    title: "인기 메뉴를 만나보세요!",
    description: "고객님들이 가장 사랑하는 최강피자의 대표 메뉴",
    buttonLabel: "전체 메뉴 보기",
    buttonHref: ctaLinks.websiteHref,
    items: [
      {
        badge: "BEST",
        title: "페퍼로니 피자",
        description: "짭짤한 페퍼로니의 클래식",
        price: "17,900원",
        image: "/assets/home/menu/pepperoni.png",
      },
      {
        badge: "NEW",
        title: "고구마 피자",
        description: "달콤함이 가득한 인기 메뉴",
        price: "18,900원",
        image: "/assets/home/menu/sweet-potato.png",
      },
      {
        badge: "SIGNATURE",
        title: "콤비네이션 피자",
        description: "다양한 토핑의 완벽한 조화",
        price: "19,900원",
        image: "/assets/home/menu/combination.png",
        featured: true,
      },
      {
        badge: "BEST",
        title: "BBQ 치킨",
        description: "직화 치킨의 깊은 풍미",
        price: "16,900원",
        image: "/assets/home/menu/hot-wings.png",
      },
      {
        badge: "NEW",
        title: "베이컨 포테이토",
        description: "고소한 감자와 베이컨",
        price: "18,900원",
        image: "/assets/home/menu/bacon-potato.png",
      },
    ] satisfies ReferenceMenuItem[],
  },
  contact: {
    badge: "부천본점",
    phoneDisplay: "032-724-8845",
    phoneHref: "tel:0327248845",
    title: "지금 바로 주문하세요!",
    chips: ["배달 30분 내외", "방문포장 5,000원 할인"],
  },
  modal: {
    title: "최강피자 브랜드 소개",
    description:
      "소화가 잘되는 맛있는 피자라는 약속 위에, 주문이 쉬운 메뉴 구성과 대중적인 맛을 한 장면으로 정리한 브랜드입니다.",
    points: [
      "매일 직접 반죽하는 수제 도우",
      "한눈에 기억되는 강한 메뉴 비주얼",
      "방문포장과 배달에 모두 맞는 운영 구조",
    ],
    closeLabel: "닫기",
  },
} as const;
