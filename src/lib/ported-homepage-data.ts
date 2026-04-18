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
  badge?: PortedMenuBadge;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
};

export type PortedReviewShowcaseSlide = {
  image: string;
  alt: string;
  objectPosition: string;
};

export type PortedReviewShowcaseHighlight = {
  title: string;
  body: string;
};

export type PortedReviewShowcase = {
  eyebrow: string;
  title: string;
  description: string;
  keywords: string[];
  highlights: PortedReviewShowcaseHighlight[];
  slides: PortedReviewShowcaseSlide[];
};

export type PortedContactFeatureIcon = "store" | "scooter" | "handshake";

export type PortedContactFeatureCard = {
  title: string;
  lines: string[];
  icon: PortedContactFeatureIcon;
  image?: string;
};

export type PortedShopInShopSection = {
  eyebrow: string;
  titleLead: string;
  titleHighlight: string;
  features: Array<{
    title: string;
    accent: string;
    icon: "space" | "cook" | "growth";
  }>;
};

export type PortedThreeWayPanelIcon = "store" | "delivery" | "takeout";

export type PortedThreeWayPanel = {
  kind: "intro" | "hall" | "delivery" | "takeout";
  title: string;
  description?: string;
  icon?: PortedThreeWayPanelIcon;
};

export type PortedThreeWaySection = {
  title: string;
  description: string;
  panels: PortedThreeWayPanel[];
};

const reviewShowcaseSlides = Array.from({ length: 17 }, (_, index) => ({
  image: `/assets/user/reviews/live/review-live-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `최강피자 고객 리뷰 캡처 ${index + 1}`,
  objectPosition: "left top",
})) satisfies PortedReviewShowcaseSlide[];

export const portedHomepageData = {
  metadata: {
    title: "최강피자 | 소화가 잘되는 맛있는 피자",
    description: "소화가 잘되는 맛있는 피자. 최강피자 브랜드 소개와 가맹 상담 안내.",
    ogImage: "/assets/user/share-preview-kakao-logo-1200x630.png",
  },
  navItems: [
    { label: "브랜드", href: "#top" },
    { label: "매장안내", href: "#store-section" },
    { label: "대표 메뉴", href: "#menu-section" },
    { label: "샵인샵", href: "#shopinshop-section" },
    { label: "고객 리뷰", href: "#review-section" },
  ] satisfies PortedNavItem[],
  hero: {
    badge: "BEST",
    eyebrow: "CHOIGANG PIZZA",
    title: ["소화가", "잘되는", "맛있는 피자"],
    description:
      "최고의 재료, 최강의 맛! 부천본점의 특별함을 만나보세요.",
    highlight: "",
    backgroundImage: "",
    clusterImage: "/assets/user/pizza-transparent-same-resolution.png",
    clusterAlt: "최강피자 페퍼로니 피자 실사 이미지",
    primaryCta: {
      label: "대표 메뉴 보기",
      href: "#menu-section",
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
        title: "방문포장 할인",
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
      title: "파로 도우",
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
  valueStatement: "최강피자 강한 이유",
  menu: {
    eyebrow: "최강 메뉴",
    title: "최강피자 대표 메뉴",
    description:
      "고객들이 사랑하는 최강피자만의 최강 메뉴",
    items: [
      {
        badge: "BEST",
        title: "최강 통베이컨",
        description: "통베이컨 풍미를 꽉 채운 묵직한 한 판",
        image: "/assets/user/menu/choigang-whole-bacon-pizza.png",
      },
      {
        badge: "SIGNATURE",
        title: "최강 마스터 피자",
        description: "갈비와 새우를 한 판에 담아 완성한 대표 시그니처",
        image: "/assets/user/menu/choigang-master-pizza.png",
        featured: true,
      },
      {
        badge: "BEST",
        title: "최강 고구마무스",
        description: "달콤한 고구마무스를 진하게 올린 인기 메뉴",
        image: "/assets/user/menu/choigang-sweet-potato-mousse.png",
      },
      {
        badge: "BEST",
        title: "최강 콤비네이션",
        description: "대표 토핑 조합을 한 판 가득 담아낸 베스트 메뉴",
        image: "/assets/user/menu/choigang-combination-new.png",
      },
      {
        badge: "BEST",
        title: "최강 수제 소불고기",
        description: "달콤짭짤한 소불고기 풍미를 듬뿍 올린 한 판",
        image: "/assets/user/menu/choigang-handmade-bulgogi.png",
      },
      {
        badge: "BEST",
        title: "최강 숯불갈비 피자",
        description: "숯불갈비의 진한 불향을 살린 묵직한 조합",
        image: "/assets/user/menu/choigang-charcoal-galbi-pizza.png",
      },
      {
        badge: "BEST",
        title: "최강 통새우피자",
        description: "통새우 토핑을 푸짐하게 올린 최강피자 인기 메뉴",
        image: "/assets/user/menu/choigang-whole-shrimp-pizza.png",
      },
      {
        badge: "NEW",
        title: "딥치즈 베이컨",
        description: "진한 치즈와 베이컨 풍미를 묵직하게 담은 메뉴",
        image: "/assets/user/menu/deep-cheese-bacon.webp",
      },
      {
        title: "베이컨 포테이토",
        description: "고소한 감자와 베이컨이 꽉 찬 든든한 조합",
        image: "/assets/user/menu/bacon-potato.webp",
      },
      {
        title: "베이컨 할라피뇨",
        description: "베이컨과 할라피뇨가 만드는 매콤한 밸런스",
        image: "/assets/user/menu/bacon-jalapeno.webp",
      },
      {
        title: "수제 고추 소불고기",
        description: "고추의 매콤함과 소불고기의 감칠맛을 함께 담은 메뉴",
        image: "/assets/user/menu/handmade-hot-bulgogi.webp",
      },
      {
        title: "포테이토 피자",
        description: "감자 토핑이 가득한 든든한 한 판",
        image: "/assets/user/menu/potato-pizza.webp",
      },
    ] satisfies PortedMenuItem[],
    reviews: [
      "최강 통베이컨부터 최강 마스터 피자까지 첫 화면에서 바로 눈에 들어옵니다.",
      "최강 마스터 피자가 시그니처 메뉴로 강하게 기억됩니다.",
      "최강 계열 메뉴가 한눈에 정리돼서 대표 메뉴 구성이 더 또렷합니다.",
    ],
  },
  contact: {
    reasonTitle: "최강피자",
    reasonHighlight: "성공 비결",
    reasonDescription: "거품은 빼고, 실속만 확실하게 채웠습니다.",
    shopInShopSection: {
      eyebrow: "최강피자 샵인샵",
      titleLead: "공간은 그대로,",
      titleHighlight: "수익만 더하세요.",
      features: [
        {
          title: "1평 공간 활용",
          accent: "추가 임대료 0원",
          icon: "space",
        },
        {
          title: "간편 오븐 조리",
          accent: "복잡한 공정 최소화",
          icon: "cook",
        },
        {
          title: "객단가 수직 상승",
          accent: "기존 고객 100% 흡수",
          icon: "growth",
        },
      ],
    } satisfies PortedShopInShopSection,
    threeWaySection: {
      title: "최강피자 집중운영 시스템",
      description: "배달과 포장에 집중해 운영 효율과 회전율을 함께 끌어올리는 구조",
      panels: [
        {
          kind: "intro",
          title: "최강피자\n집중운영\n시스템",
        },
        {
          kind: "delivery",
          title: "배달",
          description: "근거리 주문 수요를 흡수하는 집중 운영 구조",
          icon: "delivery",
        },
        {
          kind: "takeout",
          title: "포장",
          description: "방문포장과 빠른 회전율을 살리는 집중 운영 구조",
          icon: "takeout",
        },
      ],
    } satisfies PortedThreeWaySection,
    reviewShowcase: {
      eyebrow: "리뷰로 증명된 최강피자",
      title: "2026년 매출 2억 달성",
      description: "수많은 고객님이 남겨주신 리뷰가 최강피자의 자부심입니다.",
      keywords: ["최강 콤비네이션", "파로 도우", "재주문", "푸짐한 토핑", "배달 만족"],
      highlights: [
        {
          title: "파로 도우",
          body: "부담 없고 깔끔하다는 반응이 꾸준히 이어집니다.",
        },
        {
          title: "토핑 만족감",
          body: "한 판이 알차고 끝까지 풍성하다는 포인트가 살아납니다.",
        },
        {
          title: "재주문 연결",
          body: "첫 주문 뒤 다시 찾게 되는 안정적인 맛의 설득력이 있습니다.",
        },
      ] satisfies PortedReviewShowcaseHighlight[],
      slides: reviewShowcaseSlides,
    } satisfies PortedReviewShowcase,
    ctaEyebrow: "최강피자",
    ctaTitle: "최강피자 가맹 문의",
    ctaDescription: "브랜드 상담부터 운영 안내까지 빠르게 연결해드립니다.",
    ctaBackgroundImage: "/assets/user/franchise/contact-section.jpeg",
    location: "경기 부천시 원미구 도약로 105 (한라마을주공(3)아파트) 105호",
    phoneDisplay: "1866-1623",
    phoneHref: "tel:18661623",
    emailDisplay: "ckpizza8879@naver.com",
    emailHref: "mailto:ckpizza8879@naver.com",
    primaryCta: {
      label: "가맹 상담 전화",
      href: "tel:18661623",
    },
    secondaryCta: {
      label: "이메일 문의",
      href: "mailto:ckpizza8879@naver.com",
    },
    featureCards: [
      {
        title: "소형 매장 최적화",
        lines: ["10평 남짓한 공간이면 충분합니다.", "배달·포장 중심 레이아웃으로 운영 부담을 낮췄습니다."],
        icon: "store",
        image: "/assets/user/franchise/front-store-front-edited.png",
      },
      {
        title: "배달·포장 집중 운영",
        lines: ["홀 운영보다 회전과 동선에 집중해", "작은 인원으로도 운영 효율을 끌어올릴 수 있습니다."],
        icon: "scooter",
      },
      {
        title: "초보 창업 운영 안정성",
        lines: ["정량화된 원팩 시스템과 조리 매뉴얼로", "처음 시작해도 같은 품질과 속도로 운영할 수 있습니다."],
        icon: "handshake",
      },
    ] satisfies PortedContactFeatureCard[],
    footerRows: [
      ["회사명 : 최강피자 본점", "대표자 : 김현화 / 대표이사 : 김진호"],
      ["주소 : 경기 부천시 원미구 도약로 105 (한라마을주공(3)아파트) 105호"],
      ["전화 : 1866-1623", "팩스 : 05040998879"],
      ["사업자등록번호 : 3943301519", "통신판매업신고 : 0"],
    ],
    footerCopyright: "COPYRIGHT INFORMATION GABIACNS © 2021 ALL RIGHTS RESERVED.",
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
