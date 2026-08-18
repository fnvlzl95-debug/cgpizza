import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/home/reference/reference-primitives";
import { SiteHeader } from "@/components/home/site-header";
import {
  menuPageData,
  type MenuCategoryId,
  type MenuPagePizza,
  type MenuPageSideItem,
} from "@/lib/menu-page-data";
import { portedHomepageData } from "@/lib/ported-homepage-data";

const generatedMenuAssets = {
  heroDesktop: "/assets/user/menu/ima2/section-hero-half-desktop.png",
  heroMobile: "/assets/user/menu/ima2/section-hero-half-mobile-fit.png",
  best: "/assets/user/menu/ima2/section-best.png",
  all: "/assets/user/menu/ima2/section-all.png",
  reasons: "/assets/user/menu/ima2/section-reasons.png",
  side: "/assets/user/menu/ima2/section-side.png",
  cta: "/assets/user/menu/ima2/section-cta.png",
} as const;

function DecorativeSectionImage({
  src,
  className = "",
  priority = false,
  style,
  fit = "cover",
}: {
  src: string;
  className?: string;
  priority?: boolean;
  style?: CSSProperties;
  fit?: "cover" | "contain";
}) {
  return (
    <Image
      src={src}
      alt=""
      fill
      aria-hidden="true"
      priority={priority}
      sizes="100vw"
      style={style}
      className={`pointer-events-none select-none ${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
    />
  );
}

function PizzaSliceIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M5.4 24.8 26.2 6.2c1.4 3.4 1 7.6-1.4 11.5-2.7 4.4-7.5 7.1-12.7 7.1H5.4Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path d="M8 22.4c2.5-1.7 4.5-1.2 6 1.6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <circle cx="18.4" cy="14.2" r="1.8" fill="currentColor" />
      <circle cx="13.2" cy="18.6" r="1.5" fill="currentColor" />
    </svg>
  );
}

function GridIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M5 5h5v5H5V5Zm9 0h5v5h-5V5ZM5 14h5v5H5v-5Zm9 0h5v5h-5v-5Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="m12 4.4 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 4.4Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlameIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12.2 20.5c-3.4 0-6.1-2.3-6.1-5.8 0-2.4 1.3-4.4 3.4-6.2.4 2 1.3 3.2 2.6 3.8-.2-3 1-5.8 3.8-8.1.1 3.4 2.1 4.8 2.1 8.5 0 4.7-2.7 7.8-5.8 7.8Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SideIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M6.5 17.5h11l1-8h-13l1 8Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M8.2 6.5h7.6M9.5 9.5v8M14.5 9.5v8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function DrinkIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M8 6h8l-1 14h-6L8 6Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M7.5 6h9M10 3.8h5.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M9 11h6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function BuildingIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M5 20V6.8h8V20M13 10h6v10" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M8 10h2M8 13.5h2M8 17h2M16 13.5h1.5M16 17h1.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function LeafIcon({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M25 6.5c-8.5 0-14.6 5.2-14.6 12.1 0 4.2 3.1 7.2 7.2 7.2 6.5 0 10.5-5.6 10.5-13.6-1 .5-1.9.8-3.1.8Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 24c3.2-4.3 6.9-7.4 11.3-9.2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

function DoughIcon({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path d="M7 16c0-4.4 4-8 9-8s9 3.6 9 8-4 8-9 8-9-3.6-9-8Z" stroke="currentColor" strokeWidth="2.1" />
      <path d="M11.5 14.4c1.8-1.4 4.7-2 7.4-1.3M12.4 19.4c2.2 1 5 .9 7.2-.3" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

function ChoiceIcon({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path d="M8 10h16M8 16h16M8 22h16" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M5 10h.1M5 16h.1M5 22h.1" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  );
}

function CategoryIcon({ id }: { id: MenuCategoryId }) {
  if (id === "all") return <GridIcon />;
  if (id === "best") return <StarIcon />;
  if (id === "spicy") return <FlameIcon />;
  if (id === "side") return <SideIcon />;
  if (id === "drink") return <DrinkIcon />;
  return <PizzaSliceIcon />;
}

const menuTabHref = {
  all: "#menu-all",
  best: "#menu-best",
  classic: "#menu-classic",
  special: "#menu-special",
  spicy: "#menu-spicy",
  side: "#menu-side",
  drink: "#menu-side",
} satisfies Record<MenuCategoryId, string>;

const allMenuCategoryOrder = ["best", "special", "spicy", "classic"] satisfies MenuPagePizza["category"][];

const allMenuCategoryTitle = {
  best: "최강 대표 메뉴",
  special: "스페셜 메뉴",
  spicy: "매콤한 메뉴",
  classic: "클래식 메뉴",
} satisfies Record<MenuPagePizza["category"], string>;

function ReasonIcon({ type }: { type: (typeof menuPageData.reasons)[number]["icon"] }) {
  if (type === "dough") return <DoughIcon />;
  if (type === "leaf") return <LeafIcon />;
  if (type === "choice") return <ChoiceIcon />;
  return <PizzaSliceIcon className="h-9 w-9" />;
}

function Sparkles({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-2 ${className}`} aria-hidden="true">
      {[0, 1, 2, 3].map((index) => (
        <span key={index} className="text-xl text-yellow-500 md:text-2xl">
          ✦
        </span>
      ))}
    </div>
  );
}

function StickerBadge({ tone, rank }: { tone: "BEST" | "NEW"; rank?: number }) {
  const palette = tone === "BEST" ? "bg-red-500 text-white" : "bg-yellow-500 text-navy-900";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-3 top-3 z-20 flex h-11 w-11 -rotate-[10deg] flex-col items-center justify-center rounded-full border-2 border-dashed border-white shadow-[0_10px_22px_rgba(0,0,0,0.28)] md:left-4 md:top-4 md:h-16 md:w-16 md:border-[3px] ${palette}`}
    >
      <span className="text-[5px] font-bold tracking-[0.18em] md:text-[7px]">★★★</span>
      {rank ? (
        <>
          <span className="text-[6px] font-black leading-none md:text-[8px]">BEST</span>
          <span className="text-[0.9rem] font-black leading-none md:text-[1.15rem]">{rank}</span>
        </>
      ) : (
        <span className="text-[0.6rem] font-black leading-none md:text-[0.78rem]">{tone}</span>
      )}
    </div>
  );
}

function GoldText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-[linear-gradient(180deg,var(--color-yellow-500)_0%,#f5a000_100%)] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function MenuHero() {
  return (
    <section id="top" className="relative isolate min-h-[430px] overflow-hidden bg-blue-hero pt-[4.25rem] md:min-h-[520px] md:pt-[4.75rem] lg:min-h-[560px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-top bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url(${generatedMenuAssets.heroMobile})`,
          backgroundSize: "100% auto",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${generatedMenuAssets.heroDesktop})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,50,240,0.16)_0%,rgba(0,50,240,0.38)_28%,rgba(0,50,240,0.92)_67%,rgba(0,50,240,1)_100%)] md:bg-[linear-gradient(90deg,rgba(0,50,240,0.98)_0%,rgba(0,50,240,0.9)_35%,rgba(0,50,240,0.36)_62%,rgba(0,50,240,0.02)_100%)]" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(0,50,240,0.08)_0%,rgba(0,50,240,0.02)_56%,rgba(0,50,240,0.26)_100%)] md:block" />
      <div className="relative mx-auto grid min-h-[350px] w-full max-w-7xl items-end px-4 pb-9 pt-5 md:min-h-[440px] md:grid-cols-[0.56fr_0.44fr] md:items-center md:py-10 lg:min-h-[480px]">
        <div className="relative z-20 max-w-xl">
          <Sparkles className="mb-4 md:mb-5" />
          <span className="mb-4 inline-flex rounded-full bg-yellow-500 px-4 py-1.5 text-[0.72rem] font-black tracking-[0.12em] text-navy-900 shadow-[0_12px_30px_rgba(255,207,0,0.28)] md:mb-5 md:px-5 md:py-2 md:text-[0.82rem]">
            CHOIGANG PIZZA MENU
          </span>
          <h1 className="text-[2.9rem] font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-[3.7rem] md:text-[4.9rem]">
            최강피자 <GoldText>메뉴</GoldText>
          </h1>
          <p className="mt-4 text-[1.05rem] font-black leading-snug text-white/94 md:mt-5 md:text-[1.3rem]">
            취향대로 골라 즐기는 <span className="text-red-500">최강의 한 판</span>
          </p>
          <p className="mt-4 max-w-[24rem] text-[0.86rem] font-medium leading-relaxed text-white/72 md:mt-4 md:text-[0.95rem]">
            최강의 토핑, 최강의 맛! 엄선된 재료와 노하우로 언제나 만족스러운 한 판을 제공합니다.
          </p>
        </div>
        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
}

function MenuTabs() {
  return (
    <div className="relative z-20 bg-blue-video">
      <div className="mx-auto -mt-6 max-w-7xl px-4">
        <nav
          aria-label="메뉴 카테고리"
          className="flex gap-2 overflow-x-auto rounded-full border border-white/15 bg-navy-900 p-2 text-white shadow-[0_18px_48px_rgba(0,0,0,0.5)] [scrollbar-width:none] [-ms-overflow-style:none] md:grid md:grid-cols-6 md:gap-2 md:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {menuPageData.tabs.map((tab) => (
            <a
              key={tab.id}
              href={menuTabHref[tab.id]}
              style={tab.id === "all" ? { color: "var(--color-navy-900)" } : undefined}
              className={`inline-flex h-11 min-w-max items-center justify-center gap-1.5 rounded-full px-4 text-[0.9rem] font-black transition-all duration-300 active:translate-y-px md:min-w-0 md:px-2.5 ${
                tab.id === "all"
                  ? "bg-yellow-500 text-navy-900 shadow-[0_8px_20px_rgba(255,207,0,0.32)]"
                  : "bg-white/10 text-white/85 hover:bg-white/20 hover:text-white"
              }`}
            >
              <CategoryIcon id={tab.id} />
              {tab.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function SectionTitle({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div id={id} className="scroll-mt-28 text-center">
      {eyebrow ? (
        <p className={`mb-3 text-[0.74rem] font-black tracking-[0.24em] md:text-[0.82rem] ${isDark ? "text-yellow-500" : "text-red-500"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-[2.1rem] font-black leading-[0.96] tracking-[-0.04em] sm:text-[2.5rem] md:text-[3.15rem] ${isDark ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      <p className={`mx-auto mt-4 max-w-xl text-[0.96rem] font-medium leading-relaxed ${isDark ? "text-white/62" : "text-navy-900/60"}`}>
        {description}
      </p>
    </div>
  );
}

function PizzaCard({ item, featured = false }: { item: MenuPagePizza; featured?: boolean }) {
  const isSignature = item.rank === 1;
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] text-center transition-[box-shadow,transform] duration-300 hover:-translate-y-1 ${
        isSignature
          ? "border-2 border-yellow-500 bg-navy-900 text-white shadow-[0_0_34px_rgba(255,207,0,0.22),0_26px_54px_rgba(0,0,0,0.5)]"
          : "border border-hairline bg-white text-navy-900 shadow-[0_18px_40px_rgba(0,0,0,0.22)] hover:shadow-[0_28px_58px_rgba(0,0,0,0.3)]"
      }`}
    >
      {item.badge ? <StickerBadge tone={item.badge} rank={item.rank} /> : null}
      {isSignature ? (
        <div className="pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2">
          <Image
            src="/assets/user/logo-mark-gold.png"
            alt="최강피자 로고"
            width={96}
            height={96}
            className="h-14 w-14 object-contain drop-shadow-md md:h-16 md:w-16"
          />
        </div>
      ) : null}
      <div className={`relative overflow-hidden bg-[#f5f7fb] ${featured ? "aspect-[1.38]" : "aspect-[1.48]"}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          loading="eager"
          sizes={featured ? "(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "px-5 py-5 md:px-6 md:py-6" : "px-3.5 py-3.5 md:px-5 md:py-5"}`}>
        <h3 className={`${featured ? "text-[1.55rem] md:text-[1.75rem]" : "text-[1.08rem] md:text-[1.38rem]"} flex min-h-[2.4em] items-center justify-center text-balance font-black leading-tight tracking-[-0.02em] [word-break:keep-all] ${isSignature ? "text-yellow-500" : ""}`}>
          {item.title}
        </h3>
        <p className={`mx-auto mt-1.5 max-w-[18rem] text-balance text-[0.78rem] font-medium leading-snug md:mt-2 md:text-[0.86rem] md:leading-relaxed ${isSignature ? "text-white/60" : "text-navy-900/54"}`}>
          {item.description}
        </p>
      </div>
    </article>
  );
}

function BestMenuSection() {
  return (
    <section className="relative overflow-hidden bg-blue-video px-4 pt-12 pb-9 md:pt-14 md:pb-14">
      <DecorativeSectionImage src={generatedMenuAssets.best} className="opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,51,221,0.82)_0%,rgba(1,51,221,0.7)_46%,rgba(1,51,221,0.9)_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          id="menu-best"
          eyebrow="BEST MENU"
          title={<>베스트 <GoldText>메뉴</GoldText></>}
          description="가장 사랑받는 최강피자 인기메뉴!"
          tone="dark"
        />
        <div className="relative mt-9 md:mt-12">
          <span className="absolute left-[-2.6rem] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-[0_10px_24px_rgba(0,0,0,0.3)] lg:flex">
            <ArrowLeftIcon className="h-5 w-5" />
          </span>
          <span className="absolute right-[-2.6rem] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-[0_10px_24px_rgba(0,0,0,0.3)] lg:flex">
            <ArrowRightIcon className="h-5 w-5" />
          </span>
          <div className="grid gap-5 md:grid-cols-3">
            {menuPageData.best.map((item) => (
              <PizzaCard key={item.title} item={item} featured />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AllMenuSection() {
  const menuGroups = allMenuCategoryOrder
    .map((category) => ({
      category,
      items: menuPageData.all.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section className="relative overflow-hidden bg-[#fbfaf7] px-4 py-10 md:py-14">
      <DecorativeSectionImage src={generatedMenuAssets.all} className="opacity-72" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.7)_45%,rgba(255,255,255,0.92)_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          id="menu-all"
          eyebrow="ALL MENU"
          title={<>전체 <span className="text-red-500">메뉴</span></>}
          description="대표 메뉴부터 클래식 메뉴까지 한 번에 확인하세요."
        />
        <div className="mt-9 space-y-10">
          {menuGroups.map((group) => (
            <div
              key={group.category}
              id={group.category === "best" ? undefined : `menu-${group.category}`}
              className="scroll-mt-28"
            >
              <div className="mb-5 flex items-end justify-between gap-4 border-b border-navy-900/10 pb-3">
                <h3 className="text-[1.25rem] font-black leading-tight tracking-normal text-navy-900 md:text-[1.55rem]">
                  {allMenuCategoryTitle[group.category]}
                </h3>
                <span className="shrink-0 text-[0.78rem] font-black text-navy-900/42">
                  {group.items.length}종
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                {group.items.map((item) => (
                  <PizzaCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonsBand() {
  return (
    <section className="relative overflow-hidden border-y-2 border-black/5 bg-yellow-500 px-4 py-10 text-navy-900 md:py-14">
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 text-[0.74rem] font-black tracking-[0.24em] text-red-500 md:text-[0.82rem]">
            STRONG REASON
          </p>
          <h2 className="text-balance text-[2rem] font-black leading-[0.96] tracking-[-0.04em] md:text-[3.15rem]">
            최강피자 <span className="text-red-500">강한 이유</span>
          </h2>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3 md:mt-11 md:grid-cols-4 md:gap-6">
          {menuPageData.reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative flex flex-col items-center rounded-[1rem] bg-white/25 px-3 py-5 text-center md:rounded-none md:bg-transparent md:px-2 md:py-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-yellow-500 shadow-lg transition-transform group-hover:scale-110 md:h-16 md:w-16 [&_svg]:h-6 [&_svg]:w-6 md:[&_svg]:h-9 md:[&_svg]:w-9">
                <ReasonIcon type={reason.icon} />
              </div>
              <h3 className="mt-3 text-[0.98rem] font-black leading-tight md:mt-4 md:text-[1.2rem]">{reason.title}</h3>
              <p className="mt-1.5 max-w-[11rem] text-[0.78rem] font-medium leading-snug text-navy-900/62 md:mt-2 md:text-[0.86rem] md:leading-relaxed">
                {reason.description}
              </p>
              {index < menuPageData.reasons.length - 1 ? (
                <span className="absolute right-[-0.75rem] top-1/2 hidden h-12 w-px -translate-y-1/2 rotate-12 bg-navy-900/10 md:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SideIllustration({ item }: { item: MenuPageSideItem }) {
  return (
    <div className="relative mx-auto aspect-[1.18] w-full max-w-[12rem] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(160deg,#fff7ed_0%,#f8ead9_100%)] shadow-[inset_0_0_0_1px_rgba(1,23,80,0.07)]">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 1280px) 15vw, (min-width: 1024px) 30vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    </div>
  );
}

function SideMenuSection() {
  return (
    <section id="menu-side" className="relative scroll-mt-28 overflow-hidden bg-blue-band px-4 py-12 text-white md:py-[4.25rem]">
      <DecorativeSectionImage src={generatedMenuAssets.side} className="opacity-25" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,72,227,0.85)_0%,rgba(1,72,227,0.72)_46%,rgba(1,72,227,0.9)_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          id="menu-side-title"
          eyebrow="SIDE MENU"
          title={<>사이드 <GoldText>메뉴</GoldText></>}
          description="피자와 함께 더 맛있게 즐겨보세요!"
          tone="dark"
        />
        <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {menuPageData.sideItems.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-hairline bg-white px-3 pb-4 pt-3 text-center text-navy-900 shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_54px_rgba(0,0,0,0.32)] md:px-4 md:pb-5 md:pt-4"
            >
              <SideIllustration item={item} />
              <h3 className="mt-3 flex min-h-[2.5rem] items-center justify-center text-balance text-[1rem] font-black leading-tight tracking-[-0.02em] md:text-[1.1rem]">
                {item.title}
              </h3>
              <span className="mx-auto mt-2 h-0.5 w-7 rounded-full bg-yellow-500" />
              <p className="mt-2.5 text-balance text-[0.74rem] font-medium leading-snug text-navy-900/54 md:text-[0.8rem] md:leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCta() {
  return (
    <section id="menu-contact" className="relative overflow-hidden bg-blue-band px-4 py-12 text-white md:py-16">
      <DecorativeSectionImage src={generatedMenuAssets.cta} className="object-[64%_center] opacity-30 md:object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,72,227,0.96)_0%,rgba(1,72,227,0.84)_48%,rgba(1,72,227,0.32)_100%)]" />
      <div className="relative mx-auto grid max-w-7xl md:grid-cols-[0.68fr_0.32fr]">
        <div className="max-w-3xl text-left">
          <Sparkles className="mb-4" />
          <h2 className="max-w-[18rem] text-[1.9rem] font-black leading-[0.98] tracking-[-0.04em] [word-break:keep-all] md:max-w-[42rem] md:text-[3rem]">
            오늘의 <span className="text-yellow-500">최강 메뉴</span>를 만나보세요!
          </h2>
          <p className="mt-3 max-w-xl text-[0.98rem] font-bold text-white/72">
            메뉴 구성과 창업 상담까지 한 번에 확인해보세요.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu-best"
              className="inline-flex h-[3.75rem] items-center justify-center gap-3 rounded-full bg-yellow-500 px-10 text-[1.18rem] font-black text-navy-900 shadow-[0_18px_36px_rgba(0,0,0,0.28)] transition-all duration-300 hover:bg-[#ffd633] active:translate-y-px"
              style={{ color: "var(--color-navy-900)" }}
            >
              <StarIcon className="h-6 w-6" />
              베스트 메뉴
            </a>
            <Link
              href="/#contact-cta-section"
              className="inline-flex h-[3.75rem] items-center justify-center gap-3 rounded-full bg-white px-10 text-[1.18rem] font-black text-navy-900 shadow-[0_18px_36px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-[#f7f9fd] active:translate-y-px"
              style={{ color: "var(--color-navy-900)" }}
            >
              <BuildingIcon />
              가맹문의
            </Link>
          </div>
        </div>
        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
}

function MenuFooter() {
  const { footerRows, footerCopyright } = portedHomepageData.contact;

  return (
    <footer className="bg-[#03060c] text-white">
      <div className="mx-auto max-w-[1680px] px-4 py-7 md:px-6 md:py-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3 text-left text-sm leading-relaxed text-white/62 md:text-[0.94rem]">
            {footerRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap items-center gap-x-6 gap-y-1">
                {row.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            ))}
          </div>

          <p className="shrink-0 text-left text-sm font-medium tracking-[0.08em] text-white/42 md:text-[0.95rem] lg:pt-0.5 lg:text-right">
            {footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MenuPage() {
  return (
    <>
      <SiteHeader alwaysSolid activeHref="/menu" />
      <main className="bg-blue-video text-white">
        <MenuHero />
        <MenuTabs />
        <BestMenuSection />
        <AllMenuSection />
        <ReasonsBand />
        <SideMenuSection />
        <MenuCta />
      </main>
      <MenuFooter />
    </>
  );
}
