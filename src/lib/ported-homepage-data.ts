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
  price: string;
  note: string;
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

const reviewShowcaseSlides = Array.from({ length: 17 }, (_, index) => ({
  image: `/assets/user/reviews/live/review-live-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `최강피자 고객 리뷰 캡처 ${index + 1}`,
  objectPosition: "left top",
})) satisfies PortedReviewShowcaseSlide[];

export const portedHomepageData = {
  metadata: {
    title: "최강피자 | 소화가 잘되는 맛있는 피자",
    description:
      "소화가 잘되는 맛있는 피자, 최고의 재료와 최강의 맛을 선사하는 최강피자 부천본점 랜딩페이지입니다.",
    ogImage: "/assets/user/share-preview-navy-logo-v2.jpg",
  },
  navItems: [
    { label: "메뉴", href: "#menu-section" },
    { label: "이벤트", href: "#event-section" },
    { label: "매장안내", href: "#store-section" },
    { label: "리뷰", href: "#review-section" },
    { label: "가맹문의", href: "#contact-section" },
  ] satisfies PortedNavItem[],
  hero: {
    badge: "BEST",
    eyebrow: "CHOIGANG PIZZA",
    title: ["소화가", "잘되는", "맛있는 피자"],
    description:
      "최고의 재료, 최강의 맛! 부천본점의 특별함을 만나보세요.",
    highlight: "",
    backgroundImage: "",
    clusterImage: "/assets/user/hero-pizza-main-object-trim.webp",
    clusterAlt: "최강피자 대표 메뉴 실사 이미지",
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
  valueStatement: "최강피자는 파로로 만든 도우로 차별화를 완성합니다.",
  menu: {
    eyebrow: "BEST MENU",
    title: "최강피자의 메뉴를 만나보세요",
    description:
      "고객들이 사랑하는 최강피자만의 최강 메뉴",
    items: [
      {
        badge: "BEST",
        title: "페퍼로니 피자",
        description: "짭짤한 페퍼로니의 클래식",
        price: "17,900원",
        note: "페퍼로니의 풍미",
        image: "/assets/user/menu/pepperoni-pizza.webp",
      },
      {
        badge: "SIGNATURE",
        title: "최강 콤비네이션",
        description: "최강피자 대표 토핑 조합을 한 판에 담은 시그니처",
        price: "가격 문의",
        note: "브랜드 시그니처",
        image: "/assets/user/menu/choigang-combination.webp",
        featured: true,
      },
      {
        title: "베이컨 포테이토",
        description: "고소한 감자와 베이컨이 꽉 찬 든든한 조합",
        price: "18,900원",
        note: "포만감 좋은 조합",
        image: "/assets/user/menu/bacon-potato.webp",
      },
      {
        title: "포테이토 피자",
        description: "감자 토핑이 가득한 든든한 한 판",
        price: "18,900원",
        note: "담백한 감자 토핑",
        image: "/assets/user/menu/potato-pizza.webp",
      },
      {
        badge: "NEW",
        title: "딥치즈 베이컨",
        description: "진한 치즈와 베이컨 풍미를 묵직하게 담은 메뉴",
        price: "가격 문의",
        note: "딥치즈 조합",
        image: "/assets/user/menu/deep-cheese-bacon.webp",
      },
      {
        title: "베이컨 할라피뇨",
        description: "베이컨과 할라피뇨가 만드는 매콤한 밸런스",
        price: "가격 문의",
        note: "매콤한 인기 메뉴",
        image: "/assets/user/menu/bacon-jalapeno.webp",
      },
      {
        title: "수제 소불고기",
        description: "달콤짭짤한 소불고기 풍미를 듬뿍 올린 한 판",
        price: "가격 문의",
        note: "불고기 풍미",
        image: "/assets/user/menu/handmade-bulgogi.webp",
      },
      {
        title: "수제 고추 소불고기",
        description: "고추의 매콤함과 소불고기의 감칠맛을 함께 담은 메뉴",
        price: "가격 문의",
        note: "매콤한 불고기",
        image: "/assets/user/menu/handmade-hot-bulgogi.webp",
      },
      {
        title: "고르곤졸라",
        description: "고르곤졸라의 진한 풍미를 깔끔하게 즐기는 피자",
        price: "가격 문의",
        note: "치즈 풍미",
        image: "/assets/user/menu/gorgonzola.webp",
      },
      {
        title: "딥치즈",
        description: "치즈 풍미를 진하게 채운 클래식 치즈 메뉴",
        price: "가격 문의",
        note: "치즈 클래식",
        image: "/assets/user/menu/deep-cheese.webp",
      },
      {
        title: "파인애플 피자",
        description: "달콤한 파인애플이 살아있는 한 판",
        price: "18,900원",
        note: "상큼한 단맛 포인트",
        image: "/assets/user/menu/pineapple-pizza.webp",
      },
    ] satisfies PortedMenuItem[],
    reviews: [
      "짭짤한 페퍼로니의 클래식이 한 입에 기억됩니다.",
      "최강 콤비네이션이 대표 메뉴로 바로 눈에 들어옵니다.",
      "메뉴가 3장씩 정리돼서 한눈에 보기 좋습니다.",
    ],
  },
  contact: {
    reasonTitle: "최강피자의",
    reasonHighlight: "성공 비결 4가지",
    reasonDescription: "거품은 빼고, 실속만 확실하게 채웠습니다.",
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
    ctaEyebrow: "성공의 시작",
    ctaTitle: "지금 바로 연락하세요.",
    ctaDescription: "맛있는 피자로 확실한 결과를 증명합니다.",
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
        image: "/assets/user/franchise/small-store-front-updated.webp",
      },
      {
        title: "샵인샵 매출 펌핑",
        lines: ["기존 장비를 최대한 활용하고", "피자 메뉴만 더해 부가 매출을 빠르게 만듭니다."],
        icon: "plus",
      },
      {
        title: "실전형 집중 창업",
        lines: ["불필요한 인테리어와 홀 운영 부담 없이", "맛과 배달 시스템에만 집중하는 구조입니다."],
        icon: "scooter",
      },
      {
        title: "초보 창업 무조건 OK",
        lines: ["정량화된 원팩 시스템과 조리 매뉴얼로", "처음 시작해도 안정적으로 운영할 수 있습니다."],
        icon: "handshake",
      },
    ],
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
