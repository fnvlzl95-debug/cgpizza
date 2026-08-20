/**
 * Copy and assets for /brand — a one-sheet magazine infographic built from
 * the approved comp (파로 도우 한 장 시안).
 *
 * This page answers "무엇을 먹게 되는가", never "얼마가 남는가": the home
 * page owns the franchise pitch, and repeating it here would make the two
 * routes compete as duplicate documents in search. Nothing on this page may
 * mention 창업, 가맹, 수익, or 지원 혜택.
 *
 * Every factual claim below is confirmed in PRODUCT.md — 매일 직접 반죽,
 * 파로 도우, 소화 부담, 엄선한 재료, 배달·방문포장 전문, 방문포장 할인,
 * 부천본점 주소와 전화. The rest is voice, not fact.
 */

export const masthead = {
  tagline: "피자는 역시, 도우가 다르다",
  script: "Fresh Dough, Honest Pizza!",
  stamp: ["DAILY", "HANDMADE", "DOUGH"],
} as const;

export const hero = {
  headline: ["매일 반죽하는", "파로 도우의 맛"],
  pill: "소화가 잘되는 파로 도우",
  body: [
    { text: "매일 아침 직접 반죽한 파로 도우로 구워냅니다. 정직한 재료로 ", strong: false },
    { text: "정성껏 만들어", strong: true },
    { text: " 한 입부터 끝까지 속이 편안한 피자, ", strong: false },
    { text: "최강피자", strong: true },
    { text: "의 약속입니다.", strong: false },
  ],
  bubble: "소화가 잘되는 맛있는 파로 도우!",
  /** The same line broken for the narrow hero column — one 어절 per line
   *  reads as a rendering fault, not as handwriting. */
  bubbleLines: ["소화가 잘되는", "맛있는 파로 도우!"],
  pizza: {
    /**
     * The menu's own number-one — 최강 마스터 피자, 갈비 half and 통새우 half —
     * rather than an invented pizza that resembles one. Framed to the comp's
     * camera: a high three-quarter angle that reads as a wide ellipse, so the
     * board sits under the headline instead of standing in front of it.
     */
    name: "최강 마스터 피자",
    src: "/assets/user/brand/hero-master-pizza-20260819.webp",
    alt: "최강피자 대표 메뉴 최강 마스터 피자 — 숯불갈비 반, 통새우 반 한 판",
  },
  /**
   * The dough's own grain. A shallow bed laid under the board and two stalks
   * beside it — never a field over the pizza, which reads as debris blown
   * across the food rather than as the grain the dough is made from.
   */
  farro: {
    bed: "/assets/user/brand/farro-bed-20260819.webp",
    ears: "/assets/user/brand/farro-ears-20260819.webp",
  },
} as const;

export const strengths = {
  annotation: "파로 도우의 3가지 강점!",
  items: [
    { icon: "grain", title: "매일 직접 반죽", body: "그날 반죽해 그날 굽기" },
    { icon: "sprout", title: "파로(Farro)", body: "소화 부담을 덜어주는 파로 도우" },
    { icon: "shield", title: "정직한 조리", body: "엄선한 재료와 정직한 조리 방식" },
  ],
} as const;

export const ingredients = {
  title: "좋은 재료가 좋은 피자를 만듭니다",
  body: ["진짜 재료만, 아끼지 않고 듬뿍!", "한 판의 피자에 담긴 신선한 재료들의 조화."],
  /**
   * Counter props framed for this comp — each one lying on the shelf at the
   * same camera height, which the menu page's own props are not. 모짜렐라
   * keeps the menu's cheese still: the comp draws a mushroom under that
   * label, and shipping a mushroom as mozzarella would be a lie on the page.
   */
  items: [
    { src: "/assets/user/brand/ingredients/shrimp-20260819.webp", note: "탱글탱글", name: "통새우" },
    { src: "/assets/user/brand/ingredients/basil-20260819.webp", note: "향긋한 풍미", name: "바질" },
    { src: "/assets/user/brand/ingredients/tomato-20260819.webp", note: "상큼한 과즙", name: "토마토" },
    { src: "/assets/user/menu/props/cheese.webp", note: "고소한 풍미", name: "모짜렐라" },
    { src: "/assets/user/brand/ingredients/bacon-20260819.webp", note: "짭조름한 감칠맛", name: "베이컨" },
    { src: "/assets/user/brand/ingredients/olive-20260819.webp", note: "풍부한 식감", name: "블랙올리브" },
  ],
} as const;

export const kitchen = {
  annotation: "눈으로 확인하는",
  title: "실제 주방",
  body: ["반죽부터 토핑, 굽는 순간까지", "매일 매장에서 직접 조리합니다.", "가장 맛있는 한 판을 위해", "타협하지 않습니다."],
  video: {
    // The one kitchen clip the home page does not use, so the two routes
    // never show a crawler the same footage.
    src: "/assets/user/brand-videos/2.mp4",
    poster: "/assets/user/brand-videos/posters/2.webp",
    label: "최강피자 주방 영상 — 도우 위에 토핑을 올리는 과정",
  },
} as const;

export const store = {
  annotation: "가까운 곳에서 가장 빠르게!",
  title: "부천본점",
  lead: "가까이 계시다면, 방문포장이 가장 빠릅니다.",
  address: "경기 부천시 도약로 105 105호",
  phone: "1866-1623",
  phoneHref: "tel:18661623",
  chips: [
    { icon: "scooter", label: "배달·방문포장 전문 매장" },
    { icon: "bag", label: "방문포장 시 할인 혜택" },
  ],
  aside: ["정직한 재료가", "맛의 차이를 만듭니다!"],
  stamp: ["FRESH", "FAST", "FRIENDLY"],
  image: {
    src: "/assets/user/franchise/brand-store-interior.webp",
    alt: "최강피자 부천본점 내부 모습",
  },
} as const;

export const menuCta = {
  headline: [
    { text: "오늘의 메뉴가 ", tone: "white" },
    { text: "기다립니다!", tone: "gold" },
  ],
  body: ["베스트 메뉴부터 사이드까지,", "지금 바로 만나보세요."],
  primary: { label: "전체 메뉴 보기", href: "/menu" },
  secondary: { label: "매장 방문하기", href: "#brand-store" },
} as const;

export const recommend = {
  title: "파로 도우, 이런 분께 추천해요!",
  items: [
    { icon: "stomach", lines: ["속이 편안한", "피자를 찾는 분"] },
    { icon: "leaf", lines: ["건강한 재료로 만든", "피자를 원하시는 분"] },
    { icon: "family", lines: ["온 가족이 함께", "즐길 피자를 찾는 분"] },
  ],
} as const;
