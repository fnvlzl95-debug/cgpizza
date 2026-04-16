import { ctaLinks } from "@/lib/landing-data";

export type HomeNavItem = {
  label: string;
  href: string;
};

export type HomeFeatureItem = {
  icon: "signal" | "simple" | "grain" | "delivery";
  title: string;
  description: string;
};

export type HomeMenuItem = {
  badge: "BEST" | "NEW" | "SIGNATURE";
  title: string;
  description: string;
  note: string;
  image: string;
  featured?: boolean;
};

export const homePageData = {
  navItems: [
    { label: "메뉴", href: "#menu-section" },
    { label: "이벤트", href: "#event-section" },
    { label: "매장안내", href: "#store-section" },
    { label: "리뷰", href: "#review-section" },
    { label: "가맹문의", href: "#contact-band" },
  ] satisfies HomeNavItem[],
  hero: {
    eyebrow: "Franchise Brand Site",
    title: ["최강피자,", "함께 성장할", "가맹점을 찾습니다."],
    description:
      "파로 도우의 차별점과 대중적인 메뉴 구성을 바탕으로 브랜드 인상, 제품 신뢰, 가맹 상담을 한 화면에서 바로 연결합니다.",
    promise: "소화가 잘되는 맛있는 피자",
    hint: "가맹 포인트 보기",
    badges: [
      {
        title: "파로 도우",
        body: "차별점이 분명한 첫 인상",
      },
      {
        title: "포장·배달",
        body: "작은 평수 운영에 맞는 구성",
      },
      {
        title: "가맹 상담",
        body: `${ctaLinks.phoneDisplay} 바로 연결`,
      },
    ],
  },
  features: [
    {
      icon: "signal",
      title: "브랜드 인지도",
      description: "상호와 약속이 첫 화면에서 한 번에 남습니다.",
    },
    {
      icon: "simple",
      title: "운영 단순성",
      description: "처음 시작하는 점주도 이해하기 쉬운 메뉴 구조입니다.",
    },
    {
      icon: "grain",
      title: "파로도우 차별점",
      description: "소화가 잘되는 피자라는 문장이 제품 인상과 같이 붙습니다.",
    },
    {
      icon: "delivery",
      title: "포장·배달 적합성",
      description: "주문 장면이 바로 떠오르는 조합으로 상담 전환이 빠릅니다.",
    },
  ] satisfies HomeFeatureItem[],
  menu: {
    eyebrow: "BEST MENU",
    title: "대표 메뉴를 만나보세요!",
    description:
      "피자와 사이드가 함께 읽히는 장면으로 브랜드 톤과 제품 완성도를 동시에 보여줍니다.",
    items: [
      {
        badge: "BEST",
        title: "더블 시그니처",
        description: "두 판 구성이 먼저 읽히는 대표 조합",
        note: "대표 장면",
        image: "/assets/food/product-duo.jpg",
      },
      {
        badge: "NEW",
        title: "베이컨 오븐 스파게티",
        description: "피자 외 매출 구성을 보여주는 사이드",
        note: "사이드 증거",
        image: "/assets/food/product-spaghetti.png",
      },
      {
        badge: "SIGNATURE",
        title: "콤비네이션 피자",
        description: "대중성과 풍성함이 함께 읽히는 시그니처",
        note: "브랜드 대표 메뉴",
        image: "/assets/food/product-combo.jpg",
        featured: true,
      },
      {
        badge: "BEST",
        title: "바비큐 치킨",
        description: "배달 장면에 힘을 더하는 사이드 구성",
        note: "추가 주문 유도",
        image: "/assets/food/product-chicken.png",
      },
      {
        badge: "NEW",
        title: "베이컨 그라탕",
        description: "식사형 메뉴 확장에 어울리는 조합",
        note: "확장 메뉴",
        image: "/assets/food/product-bacon.jpg",
      },
    ] satisfies HomeMenuItem[],
    reviews: [
      "피자만 보이는 게 아니라 브랜드 전체가 같이 보입니다.",
      "한 장 안에서 메뉴 구성이 바로 이해돼 상담 연결이 빠릅니다.",
      "파로 도우 문장이 기억에 남아 브랜드 차별점이 선명합니다.",
    ],
  },
  contact: {
    eyebrow: "FRANCHISE CALL",
    title: ctaLinks.phoneDisplay,
    body: "지금 바로 가맹 상담을 시작하세요!",
    description:
      "부천 본점 기준 상담 운영으로 상권, 운영 방식, 브랜드 방향을 빠르게 정리해드립니다.",
    location: ctaLinks.address,
    chips: ["상권 상담", "운영 방식 안내", "브랜드 방향 정리"],
  },
};
