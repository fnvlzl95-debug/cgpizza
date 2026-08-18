/**
 * Home copy, transcribed from the approved comps in 디자인수정참고파일들/.
 *
 * Every number here is a franchise disclosure figure the client confirmed on
 * 2026-08-17. Do not invent, round, or "improve" any of them, and do not
 * revive the retired figures (20호점 / 800만원 지원 / 평당 220만원 / 집기
 * 2,500~3,000만원) — those were replaced by the 30호점 benefit scheme.
 */

import { ctaLinks } from "@/lib/site-config";

export const siteNav = [
  { label: "브랜드", href: "#top" },
  { label: "메뉴", href: "/menu" },
  { label: "창업안내", href: "#franchise-benefit" },
  { label: "가맹 문의", href: "#contact-cta" },
] as const;

export const headerCta = {
  label: "창업 상담 신청",
  href: "#contact-cta",
} as const;

/* ── S1 · 히어로 (11-첫화면.png) ─────────────────────────────── */
export const hero = {
  /** Word-level gold/white alternation is the comp's device, so the headline
   *  is stored as tokens rather than a string. */
  headline: [
    [
      { text: "맛도", tone: "gold" },
      { text: "최강,", tone: "white" },
    ],
    [
      { text: "재료도", tone: "gold" },
      { text: "최강.", tone: "white" },
    ],
  ],
  subheadLead: "한 판의 기준을 만드는 브랜드, ",
  subheadAccent: "최강피자.",
  body: [
    "신선한 재료와 정직한 조리로, 언제나 최고의 한 판을 만듭니다.",
    "맛의 차이가 브랜드의 차이, 최강피자입니다.",
  ],
  proofs: [
    { icon: "leaf", title: "신선한 재료", note: "엄선된 프리미엄 재료 사용" },
    { icon: "chef", title: "정직한 조리", note: "위생과 품질을 지키는 조리" },
    { icon: "medal", title: "최고의 맛", note: "한 판의 기준을 만드는 맛" },
  ],
  image: {
    // Rotated 90° from the source asset so the shrimp half sits left and the
    // bulgogi half right, matching the comp's orientation.
    src: "/assets/user/hero-pizza-oriented.webp",
    alt: "최강피자 반반 피자 한 판",
  },
  badge: "BEST",
} as const;

/* ── S2 · 30호점 가맹 혜택 (22- 수정후.png) ──────────────────── */
export const franchiseBenefit = {
  pill: "가맹 혜택",
  headlineLead: "딱",
  headlineBrush: "30호점까지,",
  headlineSecond: "본사가 먼저 챙기는 실전형 가맹 혜택",
  subhead: "초기 부담은 낮추고, 오픈 초반 안정화와 운영 부담까지 함께 생각한 실전형 혜택 구성",
  columns: ["구분", "내용", "혜택"],
  rows: [
    {
      icon: "tag",
      label: "가맹비",
      detail: "브랜드 사용 및 가맹점 운영권, 상표 이용권 등",
      benefit: "전액 면제",
      benefitTone: "red",
      sparkle: true,
      flag: "30호점 특별혜택",
      flagIndex: "❶",
    },
    {
      icon: "truck",
      label: "물류이행보증금",
      detail: "오픈 후 3개월 물류 지원",
      benefit: "적용",
      benefitTone: "blue",
      sparkle: false,
      flag: "30호점 특별혜택",
      flagIndex: "❷",
    },
    {
      icon: "tools",
      label: "인테리어",
      detail: "목공사, 바닥, 천장 등 내외부 일체",
      benefit: "직접 시공 가능 (조건 협의)",
      benefitTone: "blue",
      sparkle: false,
      flag: null,
      flagIndex: null,
    },
    {
      icon: "headset",
      label: "운영 지원",
      detail: "오픈 초기 운영 지원",
      benefit: "실전 지원",
      benefitTone: "blue",
      sparkle: false,
      flag: null,
      flagIndex: null,
    },
  ],
  banner: {
    eyebrow: "30호점 한정 실전 혜택",
    parts: [
      { text: "가맹비", tone: "white" },
      { text: "전액 면제", tone: "gold" },
      { text: "·", tone: "white" },
      { text: "오픈 후", tone: "white" },
      { text: "3개월", tone: "gold" },
      { text: "물류 지원", tone: "red" },
    ],
  },
  footnotes: [
    "혜택 적용 기준 및 세부 지원 범위는 상담 시 안내드립니다.",
    "인테리어 관련 사항은 매장 실측 후 정확한 견적이 가능합니다.",
  ],
} as const;

/* ── S3 · 철학 (33-수정후.png) ───────────────────────────────── */
export const philosophy = {
  pill: "브랜드 철학",
  headlineLead: "단순히 가맹점을",
  headlineStrong: "모집하지 않습니다!",
  quote: [
    [
      { text: "함께 성장", strong: true },
      { text: "하고", strong: false },
    ],
    [
      { text: "함께 앞으로", strong: true },
      { text: "나아갈", strong: false },
    ],
    [
      { text: "점주님들을", strong: false },
      { text: "모집합니다.", strong: true },
    ],
  ],
  body: [
    "직접 매장을 운영하며 쌓아온 실전 경험과 성공 노하우를",
    "점주님께 그대로 전수해드립니다.",
  ],
  storeImage: {
    src: "/assets/user/franchise/store-red-concept.webp",
    alt: "최강피자 매장 인테리어 — 키오스크와 픽업 카운터",
  },
  mascot: {
    src: "/assets/user/mascot/mascot-thumbsup.webp",
    alt: "",
  },
} as const;

/* ── S4 · 수익 구조 (44-수정후-.png) ─────────────────────────── */
export const profitStructure = {
  pill: "수익 구조",
  headlineLead: "매출보다 중요한 건, 실제로 남는 ",
  headlineAccent: "수익",
  headlineTail: "입니다.",
  subheadLead: "점주에게 실제로 얼마나 남는지, ",
  subheadAccent: "수익 구조",
  subheadTail: "로 보여드립니다.",
  /** Donut segments, in the comp's clockwise order starting at 12 o'clock. */
  segments: [
    { key: "food", icon: "wheat", label: "식자재", range: "35~38%", share: 36.5, fill: "#FCBF43" },
    { key: "rent", icon: "building", label: "임대료", range: "8~12%", share: 10, fill: "#F7AE30" },
    { key: "platform", icon: "phone", label: "플랫폼", range: "8~12%", share: 10, fill: "#546E81" },
    { key: "labor", icon: "people", label: "인건비", range: "12~18%", share: 15, fill: "#021D3E" },
    { key: "etc", icon: "gear", label: "기타 운영비", range: "8~15%", share: 11.5, fill: "#66879D" },
    { key: "profit", icon: "coins", label: "예상 영업이익", range: "12~18%", share: 15, fill: "#F58A0B" },
  ],
  center: {
    label: "월 평균 매출",
    value: "8,000",
    unit: "만원",
    note: "* 점포별 상이할 수 있습니다.",
  },
  headlineStat: {
    label: "예상 영업이익",
    value: "12~18",
    note: "최대 예상 영업이익 범위",
  },
  table: {
    title: "수익 구조 한눈에 보기",
    columns: ["항목", "비율(매출 대비)"],
    rows: [
      { icon: "wheat", label: "식자재", sub: "", ratio: "35~38%" },
      { icon: "building", label: "임대료", sub: "", ratio: "8~12%" },
      { icon: "phone", label: "플랫폼", sub: "(배달앱 수수료 등)", ratio: "8~12%" },
      { icon: "people", label: "인건비", sub: "", ratio: "12~18%" },
      { icon: "gear", label: "기타 운영비", sub: "(공과금, 소모품, 카드수수료, 세무 등)", ratio: "8~15%" },
    ],
    total: { label: "예상 영업이익", ratio: "12~18%" },
    cta: {
      question: "우리 매장의 실제 수익이 궁금하다면?",
      label: "수익 구조 상담 신청하기",
      href: "#contact-cta",
    },
  },
  footnote: "* 점포 지역 / 평수 / 운영 형태에 따라 수익 구조는 달라질 수 있습니다.",
  trust: [
    {
      icon: "seal",
      title: "검증된 수익 구조",
      body: ["실제 운영 데이터를 기반으로", "설계한 수익 구조를 제공합니다."],
    },
    {
      icon: "chart",
      title: "안정적인 매출 시스템",
      body: ["배달 + 포장 최적화 시스템으로", "꾸준한 매출을 만듭니다."],
    },
    {
      icon: "handshake",
      title: "본사와의 상생 파트너십",
      body: ["투명한 소통과 체계적인 지원으로", "함께 성장합니다."],
    },
  ],
} as const;

/* ── S5 · 집중운영 시스템 (77-중간 수정후.png) ───────────────── */
export const focusSystem = {
  pill: "운영 시스템",
  headlineLead: "최강피자 ",
  headlineAccent: "집중운영",
  headlineTail: " 시스템",
  subhead: "배달과 포장에 집중해 운영 효율과 회전율을 함께 끌어올리는 구조",
  cards: [
    {
      title: "집중 운영 시스템",
      art: { kind: "svg", name: "target", src: "", alt: "" },
      body: [
        { text: "핵심에 집중한 운영으로", strong: false, inline: false },
        { text: "더 단순하고 ", strong: false, inline: true },
        { text: "효율적인 매장 관리", strong: true, inline: true },
      ],
      connector: "=",
    },
    {
      title: "배달 최적화",
      art: { kind: "image", name: "", src: "/assets/user/system/focus-delivery.webp", alt: "" },
      body: [
        { text: "배달 특화 운영으로", strong: false, inline: false },
        { text: "빠르고 안정적인", strong: true, inline: true },
        { text: " 배달 서비스 제공", strong: false, inline: true },
      ],
      connector: "+",
    },
    {
      title: "실전형 오픈 지원",
      art: { kind: "image", name: "", src: "/assets/user/system/focus-open-support.webp", alt: "" },
      body: [
        { text: "오픈 준비부터 매장 안착까지", strong: false, inline: false },
        { text: "실전에 필요한 핵심 노하우를", strong: false, inline: false },
        { text: "체계적으로 지원", strong: false, inline: false },
      ],
      connector: "+",
    },
    {
      title: "운영 효율 상승",
      art: { kind: "svg", name: "growth", src: "", alt: "" },
      body: [
        { text: "배달과 포장에 집중해", strong: false, inline: false },
        { text: "운영 효율과 매출 회전율 극대화", strong: true, inline: false },
      ],
      connector: null,
    },
  ],
} as const;

/* ── S6 · 진짜 주방 (99- 하단 수정 부분.png) ─────────────────── */
export const realKitchen = {
  pill: "진짜 주방",
  headline: [
    { text: "최강피자의", tone: "white" },
    { text: "진짜 주방을", tone: "gold" },
    { text: "보여드립니다.", tone: "white" },
  ],
  body: ["재료 준비부터 반죽, 토핑, 화덕 굽기까지 —"],
  bodyAccent: "매장에서 매일 만드는 진짜 과정",
  bodyTail: "을 영상으로 확인하세요.",
  points: [
    {
      icon: "leaf",
      title: "좋은 재료만, 정직하게",
      body: ["신선한 재료를 매일 직접 손질합니다."],
    },
    {
      icon: "flame",
      title: "제대로 굽는 정통 방식",
      body: ["고온의 오븐에서 풍미를 살려 구워냅니다."],
    },
    {
      icon: "temp",
      title: "최고의 온도로, 가장 맛있게",
      body: ["가장 맛있는 온도로 바로 제공합니다."],
    },
  ],
  videos: [
    {
      index: "01",
      title: ["푸짐하게", "올리는 토핑"],
      src: "/assets/user/brand-videos/1.mp4",
      poster: "/assets/user/brand-videos/posters/1.webp",
      accent: false,
      duration: "00:11",
    },
    {
      index: "02",
      title: ["기본부터", "제대로"],
      src: "/assets/user/brand-videos/2-revised.mp4",
      poster: "/assets/user/brand-videos/posters/2-revised.webp",
      accent: true,
      duration: "00:09",
    },
    {
      index: "03",
      title: ["뜨겁게 완성되는", "한 판"],
      src: "/assets/user/brand-videos/3.mp4",
      poster: "/assets/user/brand-videos/posters/3.webp",
      accent: false,
      duration: "00:41",
    },
  ],
  cta: { label: "최강피자의 진짜 이야기 보기", href: "#contact-cta" },
} as const;

/* ── S7 · 리뷰 증명 (88 — 구조 유지, 남색만 밝은 블루로) ────── */
export const reviewProof = {
  pill: "고객 리뷰",
  year: "2026년",
  lead: "고객님의 성원에 오픈 3개월",
  headlineLead: "매출",
  headlineAccent: "2억",
  headlineTail: "달성",
  body: ["수많은 고객님이 남겨주신 리뷰가", "최강피자의 자부심입니다."],
  score: "4.9 / 5.0 만족도",
  slides: Array.from({ length: 17 }, (_, index) => ({
    src: `/assets/user/reviews/live/review-live-${String(index + 1).padStart(2, "0")}.webp`,
    alt: `최강피자 고객 리뷰 캡처 ${index + 1}`,
  })),
} as const;

/* ── S8 · 가맹 문의 + 푸터 (10 — 그대로) ─────────────────────── */
export const contact = {
  pill: "가맹 문의",
  headlineLead: "최강피자 ",
  headlineAccent: "가맹 문의",
  description: "브랜드 상담부터 운영 안내까지 빠르게 연결해드립니다.",
  backgroundImage: "/assets/user/franchise/contact-section.jpeg",
  phone: { label: "가맹 상담 전화", display: "1866-1623", href: "tel:18661623" },
  email: {
    label: "이메일 문의",
    display: "ckpizza8879@naver.com",
    href: "mailto:ckpizza8879@naver.com",
  },
  footerRows: [
    ["회사명 : 최강피자 본점", "대표자 : 김현화 / 대표이사 : 김진호"],
    ["주소 : 경기 부천시 원미구 도약로 105 (한라마을주공(3)아파트) 105호"],
    ["전화 : 1866-1623", "팩스 : 05040998879"],
    ["사업자등록번호 : 3943301519", "통신판매업신고 : 0"],
  ],
  copyright: "COPYRIGHT INFORMATION GABIACNS © 2021 ALL RIGHTS RESERVED.",
} as const;

/** Floating rail, present from the philosophy section down (33 / 99). */
export const floatingRail = {
  talk: { label: "카카오 상담", href: ctaLinks.kakaoHref },
  inquiry: { label: "가맹 문의", href: "#contact-cta" },
  top: { label: "맨 위로", href: "#top" },
} as const;
