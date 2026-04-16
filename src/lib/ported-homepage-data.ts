import { ctaLinks } from "@/lib/landing-data";

export type PortedNavItem = {
  label: string;
  href: string;
};

export type PortedHeroCard = {
  title: string;
  body: string;
};

export type PortedValueIcon = "brand" | "simple" | "dough" | "delivery";

export type PortedValueItem = {
  icon: PortedValueIcon;
  title: string;
  description: string;
};

export type PortedMenuBadge = "BEST" | "NEW" | "SIGNATURE";

export type PortedMenuItem = {
  badge: PortedMenuBadge;
  title: string;
  description: string;
  price: string;
  note: string;
  image: string;
  featured?: boolean;
};

export const portedHomepageData = {
  metadata: {
    title: "최강피자 | 소화가 잘되는 맛있는 피자",
    description:
      "소화가 잘되는 맛있는 피자, 최고의 재료와 최강의 맛을 선사하는 최강피자 부천본점 랜딩페이지입니다.",
    ogImage: "/assets/home/reference-homepage.png",
  },
  navItems: [
    { label: "메뉴", href: "#menu-section" },
    { label: "이벤트", href: "#event-section" },
    { label: "매장안내", href: "#store-section" },
    { label: "리뷰", href: "#review-section" },
    { label: "가맹문의", href: "#contact-section" },
  ] satisfies PortedNavItem[],
  header: {
    ctaLabel: "주문하기",
    ctaHref: ctaLinks.websiteHref,
    draftHref: "/drafts/01",
  },
  hero: {
    badge: "BEST",
    eyebrow: "CHOIGANG PIZZA",
    title: ["소화가", "잘되는", "맛있는 피자"],
    description:
      "최고의 재료, 최강의 맛! 부천본점의 특별함을 만나보세요.",
    highlight: "",
    backgroundImage: "/assets/food/hero-street.png",
    clusterImage: "/assets/home/reference-crops/hero-cluster-4.png",
    clusterOverlayImage: "/assets/home/reference-crops/hero-cluster-5.png",
    clusterAlt: "최강피자 대표 메뉴 구성",
    primaryCta: {
      label: "메뉴 주문하기",
      href: ctaLinks.websiteHref,
    },
    secondaryCta: {
      label: "브랜드 영상 보기",
      href: "#brand-video",
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
    ] satisfies PortedHeroCard[],
    hint: "",
  },
  valueItems: [
    {
      icon: "brand",
      title: "신선한 재료",
      description: "엄선된 재료만을 사용",
    },
    {
      icon: "simple",
      title: "수제 도우",
      description: "매일 직접 반죽",
    },
    {
      icon: "dough",
      title: "풍부한 토핑",
      description: "아끼지 않는 푸짐함",
    },
    {
      icon: "delivery",
      title: "완벽한 맛",
      description: "한 번 맛보면 단골",
    },
  ] satisfies PortedValueItem[],
  menu: {
    eyebrow: "BEST MENU",
    title: "인기 메뉴를 만나보세요!",
    description:
      "고객님들이 가장 사랑하는 최강피자의 대표 메뉴",
    buttonLabel: "전체 메뉴 보기",
    buttonHref: ctaLinks.websiteHref,
    items: [
      {
        badge: "BEST",
        title: "페퍼로니 피자",
        description: "짭짤한 페퍼로니의 클래식",
        price: "17,900원",
        note: "페퍼로니의 풍미",
        image: "/assets/home/menu/pepperoni.png",
      },
      {
        badge: "NEW",
        title: "고구마 피자",
        description: "달콤함이 가득한 인기 메뉴",
        price: "18,900원",
        note: "달콤한 인기 메뉴",
        image: "/assets/home/menu/sweet-potato.png",
      },
      {
        badge: "SIGNATURE",
        title: "콤비네이션 피자",
        description: "다양한 토핑의 완벽한 조화",
        price: "19,900원",
        note: "브랜드 대표 메뉴",
        image: "/assets/home/menu/combination.png",
        featured: true,
      },
      {
        badge: "BEST",
        title: "BBQ 치킨",
        description: "매콤달콤한 치킨의 풍미",
        price: "16,900원",
        note: "매콤달콤 치킨",
        image: "/assets/home/menu/hot-wings.png",
      },
      {
        badge: "NEW",
        title: "베이컨 포테이토",
        description: "고소한 감자와 베이컨",
        price: "18,900원",
        note: "고소한 감자 조합",
        image: "/assets/home/menu/bacon-potato.png",
      },
    ] satisfies PortedMenuItem[],
    reviews: [
      "짭짤한 페퍼로니의 클래식이 한 입에 기억됩니다.",
      "달콤한 고구마와 풍성한 토핑이 함께 읽힙니다.",
      "시그니처 메뉴가 먼저 눈에 들어오는 구성이 좋습니다.",
    ],
  },
  contact: {
    eyebrow: "부천본점",
    badge: "부천본점",
    title: "지금 바로 주문하세요!",
    subtitle: "배달과 포장 모두 빠르게 연결됩니다.",
    description:
      "소화가 잘되는 맛있는 피자, 지금 바로 최강피자의 대표 메뉴를 만나보세요.",
    location: ctaLinks.address,
    phoneDisplay: "032-724-8845",
    phoneHref: "tel:0327248845",
    primaryCta: {
      label: "배달 주문",
      href: ctaLinks.phoneHref,
    },
    secondaryCta: {
      label: "카카오 문의",
      href: ctaLinks.kakaoHref,
    },
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
