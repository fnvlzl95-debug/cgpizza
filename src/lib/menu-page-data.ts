import type { PortedNavItem } from "@/lib/ported-homepage-data";

export type MenuCategoryId = "all" | "best" | "classic" | "special" | "spicy" | "side" | "drink";

export type MenuPagePizza = {
  title: string;
  description: string;
  price: string;
  image: string;
  badge?: "BEST" | "NEW";
  rank?: number;
  category: Exclude<MenuCategoryId, "all" | "side" | "drink">;
};

export type MenuPageSideItem = {
  title: string;
  description: string;
  price: string;
  kind: "wing" | "stick" | "pasta" | "cola" | "cider";
  badge?: "NEW";
};

export const menuPageNavItems = [
  { label: "브랜드", href: "/" },
  { label: "메뉴", href: "/menu" },
  { label: "창업안내", href: "/#shopinshop-intro-section" },
  { label: "가맹문의", href: "/#contact-cta-section" },
] satisfies PortedNavItem[];

export const menuPageData = {
  tabs: [
    { id: "all", label: "전체" },
    { id: "best", label: "베스트" },
    { id: "classic", label: "클래식" },
    { id: "special", label: "스페셜" },
    { id: "spicy", label: "핫한 메뉴" },
    { id: "side", label: "사이드" },
    { id: "drink", label: "음료" },
  ] satisfies Array<{ id: MenuCategoryId; label: string }>,
  best: [
    {
      rank: 1,
      badge: "BEST",
      title: "최강 불고기",
      description: "특제 불고기와 신선한 야채의 환상 조합!",
      price: "L 28,900원",
      image: "/assets/user/menu/choigang-handmade-bulgogi.png",
      category: "best",
    },
    {
      rank: 2,
      badge: "BEST",
      title: "직화 핫치킨",
      description: "직화로 구운 매콤한 토핑과 할라피뇨의 매콤함!",
      price: "L 27,900원",
      image: "/assets/user/menu/handmade-hot-bulgogi.webp",
      category: "spicy",
    },
    {
      rank: 3,
      badge: "BEST",
      title: "고구마 무스",
      description: "달콤한 고구마 무스와 고소한 치즈의 조화!",
      price: "L 26,900원",
      image: "/assets/user/menu/choigang-sweet-potato-mousse.png",
      category: "best",
    },
  ] satisfies MenuPagePizza[],
  all: [
    {
      title: "페퍼로니",
      description: "짭짤한 페퍼로니의 클래식한 피자",
      price: "L 24,900원",
      image: "/assets/user/menu/pepperoni-pizza.webp",
      category: "classic",
    },
    {
      title: "최강프 골드",
      description: "풍부한 토핑과 달콤한 엣지의 조합",
      price: "L 29,900원",
      image: "/assets/user/menu/choigang-master-pizza.png",
      badge: "NEW",
      category: "special",
    },
    {
      title: "갈릭 스테이크",
      description: "부드러운 스테이크와 갈릭 소스",
      price: "L 31,900원",
      image: "/assets/user/menu/choigang-charcoal-galbi-pizza.png",
      category: "special",
    },
    {
      title: "콤비네이션",
      description: "다양한 토핑이 가득한 정통 피자",
      price: "L 25,900원",
      image: "/assets/user/menu/choigang-combination-new.png",
      category: "classic",
    },
    {
      title: "베이컨 포테이토",
      description: "베이컨과 포테이토의 든든한 조합",
      price: "L 26,900원",
      image: "/assets/user/menu/bacon-potato.webp",
      category: "classic",
    },
    {
      title: "바질 마르게리타",
      description: "신선한 토마토와 바질의 담백한 맛",
      price: "L 23,900원",
      image: "/assets/user/menu/pineapple-pizza.webp",
      category: "classic",
    },
    {
      title: "핫 베이컨",
      description: "매콤한 할라피뇨와 베이컨의 만남",
      price: "L 26,900원",
      image: "/assets/user/menu/bacon-jalapeno.webp",
      category: "spicy",
    },
    {
      title: "치즈 듬뿍",
      description: "모짜렐라 치즈가 가득한 고소한 피자",
      price: "L 22,900원",
      image: "/assets/user/menu/deep-cheese.webp",
      category: "classic",
    },
  ] satisfies MenuPagePizza[],
  reasons: [
    {
      title: "풍부한 토핑",
      description: "아낌없이 올린 토핑으로 더 풍성한 맛",
      icon: "slice",
    },
    {
      title: "쫄깃한 도우",
      description: "매일 직접 반죽해 더욱 쫄깃하고 맛있는 도우",
      icon: "dough",
    },
    {
      title: "신선한 재료",
      description: "신선한 국내산 재료만을 엄선해서 사용",
      icon: "leaf",
    },
    {
      title: "다양한 선택",
      description: "클래식부터 스페셜까지 다채로운 메뉴 구성",
      icon: "choice",
    },
  ] satisfies Array<{
    title: string;
    description: string;
    icon: "slice" | "dough" | "leaf" | "choice";
  }>,
  sideItems: [
    {
      title: "버팔로 윙",
      description: "매콤한 소스의 바삭한 윙",
      price: "7,900원",
      kind: "wing",
    },
    {
      title: "치즈 스틱",
      description: "쭉 늘어나는 모짜렐라 치즈",
      price: "6,500원",
      kind: "stick",
    },
    {
      title: "토마토 스파게티",
      description: "새콤달콤 토마토 파스타",
      price: "6,900원",
      kind: "pasta",
      badge: "NEW",
    },
    {
      title: "콜라",
      description: "시원한 탄산 음료",
      price: "2,000원",
      kind: "cola",
    },
    {
      title: "사이다",
      description: "깔끔하고 청량한 맛",
      price: "2,000원",
      kind: "cider",
    },
  ] satisfies MenuPageSideItem[],
};
