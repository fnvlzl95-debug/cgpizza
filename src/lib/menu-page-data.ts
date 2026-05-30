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
  price: string | readonly string[];
  image: string;
  kind:
    | "tomatoSpaghetti"
    | "baconRoseSpaghetti"
    | "shrimpRings"
    | "hotWings"
    | "smokedChicken"
    | "cheeseSticks";
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
  ] satisfies Array<{ id: MenuCategoryId; label: string }>,
  best: [
    {
      rank: 1,
      badge: "BEST",
      title: "최강 마스터 피자",
      description: "갈비와 새우를 한 판에 담아 완성한 대표 시그니처",
      price: "L 29,900원",
      image: "/assets/user/menu/choigang-master-pizza.png",
      category: "best",
    },
    {
      rank: 2,
      badge: "BEST",
      title: "최강 통베이컨",
      description: "통베이컨 풍미를 꽉 채운 묵직한 한 판",
      price: "가격 문의",
      image: "/assets/user/menu/choigang-whole-bacon-pizza.png",
      category: "best",
    },
    {
      rank: 3,
      badge: "BEST",
      title: "최강 고구마무스",
      description: "달콤한 고구마무스를 진하게 올린 인기 메뉴",
      price: "L 26,900원",
      image: "/assets/user/menu/choigang-sweet-potato-mousse.png",
      category: "best",
    },
  ] satisfies MenuPagePizza[],
  all: [
    {
      title: "최강 통베이컨",
      description: "통베이컨 풍미를 꽉 채운 묵직한 한 판",
      price: "가격 문의",
      image: "/assets/user/menu/choigang-whole-bacon-pizza.png",
      badge: "BEST",
      category: "best",
    },
    {
      title: "최강 마스터 피자",
      description: "갈비와 새우를 한 판에 담아 완성한 대표 시그니처",
      price: "L 29,900원",
      image: "/assets/user/menu/choigang-master-pizza.png",
      badge: "NEW",
      category: "best",
    },
    {
      title: "최강 고구마무스",
      description: "달콤한 고구마무스를 진하게 올린 인기 메뉴",
      price: "L 26,900원",
      image: "/assets/user/menu/choigang-sweet-potato-mousse.png",
      badge: "BEST",
      category: "best",
    },
    {
      title: "최강 콤비네이션",
      description: "대표 토핑 조합을 한 판 가득 담아낸 베스트 메뉴",
      price: "L 25,900원",
      image: "/assets/user/menu/choigang-combination-new.png",
      badge: "BEST",
      category: "best",
    },
    {
      title: "최강 수제 소불고기",
      description: "달콤짭짤한 소불고기 풍미를 듬뿍 올린 한 판",
      price: "L 28,900원",
      image: "/assets/user/menu/choigang-handmade-bulgogi.png",
      badge: "BEST",
      category: "best",
    },
    {
      title: "최강 숯불갈비 피자",
      description: "숯불갈비의 진한 불향을 살린 묵직한 조합",
      price: "L 31,900원",
      image: "/assets/user/menu/choigang-charcoal-galbi-pizza.png",
      category: "special",
    },
    {
      title: "최강 통새우피자",
      description: "통새우 토핑을 푸짐하게 올린 최강피자 인기 메뉴",
      price: "가격 문의",
      image: "/assets/user/menu/choigang-whole-shrimp-pizza.png",
      badge: "BEST",
      category: "special",
    },
    {
      title: "딥치즈 베이컨",
      description: "진한 치즈와 베이컨 풍미를 묵직하게 담은 메뉴",
      price: "가격 문의",
      image: "/assets/user/menu/deep-cheese-bacon.webp",
      badge: "NEW",
      category: "special",
    },
    {
      title: "베이컨 포테이토",
      description: "고소한 감자와 베이컨이 꽉 찬 든든한 조합",
      price: "L 26,900원",
      image: "/assets/user/menu/bacon-potato.webp",
      category: "classic",
    },
    {
      title: "베이컨 할라피뇨",
      description: "베이컨과 할라피뇨가 만드는 매콤한 밸런스",
      price: "L 26,900원",
      image: "/assets/user/menu/bacon-jalapeno.webp",
      category: "spicy",
    },
    {
      title: "수제 고추 소불고기",
      description: "고추의 매콤함과 소불고기의 감칠맛을 함께 담은 메뉴",
      price: "L 27,900원",
      image: "/assets/user/menu/handmade-hot-bulgogi.webp",
      category: "spicy",
    },
    {
      title: "포테이토 피자",
      description: "감자 토핑이 가득한 든든한 한 판",
      price: "가격 문의",
      image: "/assets/user/menu/potato-pizza.webp",
      category: "classic",
    },
    {
      title: "페퍼로니 피자",
      description: "짭짤한 페퍼로니의 클래식한 피자",
      price: "L 24,900원",
      image: "/assets/user/menu/pepperoni-pizza.webp",
      category: "classic",
    },
    {
      title: "파인애플 피자",
      description: "달콤한 파인애플과 치즈가 어우러진 산뜻한 메뉴",
      price: "L 23,900원",
      image: "/assets/user/menu/pineapple-pizza.webp",
      category: "classic",
    },
    {
      title: "딥치즈",
      description: "모짜렐라 치즈가 가득한 고소한 피자",
      price: "L 22,900원",
      image: "/assets/user/menu/deep-cheese.webp",
      category: "classic",
    },
    {
      title: "고르곤졸라",
      description: "고르곤졸라 치즈의 진한 풍미를 살린 담백한 메뉴",
      price: "가격 문의",
      image: "/assets/user/menu/gorgonzola.webp",
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
      title: "토마토소스 스파게티",
      description: "진한 토마토소스와 치즈가 어우러진 오븐 스파게티",
      price: "8,000원",
      image: "/assets/user/menu/ima2/side/tomato-sauce-spaghetti.png",
      kind: "tomatoSpaghetti",
    },
    {
      title: "베이컨로제 스파게티",
      description: "부드러운 로제소스와 베이컨을 올린 오븐 스파게티",
      price: "9,000원",
      image: "/assets/user/menu/ima2/side/bacon-rose-spaghetti.png",
      kind: "baconRoseSpaghetti",
    },
    {
      title: "새우링",
      description: "바삭하게 튀긴 새우링",
      price: "4개 4,000원",
      image: "/assets/user/menu/ima2/side/shrimp-rings.png",
      kind: "shrimpRings",
    },
    {
      title: "핫윙",
      description: "매콤하게 즐기는 인기 사이드",
      price: ["5조각 8,000원", "10조각 10,000원"],
      image: "/assets/user/menu/ima2/side/hot-wings.png",
      kind: "hotWings",
    },
    {
      title: "훈제치킨",
      description: "담백하고 촉촉한 훈제치킨",
      price: ["반마리 8,000원", "한마리 15,000원"],
      image: "/assets/user/menu/ima2/side/smoked-chicken.png",
      kind: "smokedChicken",
    },
    {
      title: "치즈스틱",
      description: "바삭한 튀김 속 쭉 늘어나는 치즈",
      price: "4개 4,000원",
      image: "/assets/user/menu/ima2/side/cheese-sticks.png",
      kind: "cheeseSticks",
    },
  ] satisfies MenuPageSideItem[],
};
