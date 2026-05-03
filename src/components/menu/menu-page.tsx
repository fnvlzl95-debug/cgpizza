import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { PortedHeader } from "@/components/home/ported/ported-header";
import {
  menuPageData,
  menuPageNavItems,
  type MenuCategoryId,
  type MenuPagePizza,
  type MenuPageSideItem,
} from "@/lib/menu-page-data";

const generatedMenuAssets = {
  heroDesktop: "/assets/user/menu/ima2/section-hero-half-desktop.png",
  heroMobile: "/assets/user/menu/ima2/section-hero-half-mobile-fit.png",
  best: "/assets/user/menu/ima2/section-best.png",
  all: "/assets/user/menu/ima2/section-all.png",
  reasons: "/assets/user/menu/ima2/section-reasons.png",
  side: "/assets/user/menu/ima2/section-side.png",
  sideComponent: "/assets/user/menu/ima2/component-side-platter.png",
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

function ReasonIcon({ type }: { type: (typeof menuPageData.reasons)[number]["icon"] }) {
  if (type === "dough") return <DoughIcon />;
  if (type === "leaf") return <LeafIcon />;
  if (type === "choice") return <ChoiceIcon />;
  return <PizzaSliceIcon className="h-9 w-9" />;
}

function MenuHero() {
  return (
    <section id="top" className="relative isolate min-h-[calc(100svh+2rem)] overflow-hidden bg-[#061a46] pt-[4.75rem] md:min-h-[calc(100dvh+2rem)] md:pt-[5.25rem]">
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,21,64,0.16)_0%,rgba(0,21,64,0.38)_28%,rgba(0,21,64,0.92)_67%,rgba(0,21,64,1)_100%)] md:bg-[linear-gradient(90deg,rgba(0,21,64,0.98)_0%,rgba(0,21,64,0.9)_35%,rgba(0,21,64,0.36)_62%,rgba(0,21,64,0.02)_100%)]" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(0,21,64,0.08)_0%,rgba(0,21,64,0.02)_56%,rgba(0,21,64,0.26)_100%)] md:block" />
      <div className="relative mx-auto grid min-h-[calc(100svh-2.75rem)] w-full max-w-7xl items-end px-4 pb-16 pt-8 md:min-h-[calc(100dvh-3.25rem)] md:grid-cols-[0.56fr_0.44fr] md:items-center md:py-14">
        <div className="relative z-20 max-w-xl">
          <div className="mb-5 h-16 w-1.5 rounded-full bg-[#ffcf00]/42 md:mb-6 md:h-24" />
          <p className="mb-3 text-[0.72rem] font-black tracking-[0.18em] text-[#ffcf00] md:mb-4 md:text-[0.86rem]">
            CHOIGANG PIZZA MENU
          </p>
          <h1 className="text-[2.85rem] font-black leading-[0.98] tracking-[-0.05em] text-white sm:text-[4.1rem] md:text-[4.8rem]">
            최강피자 <span className="text-[#ffcf00]">메뉴</span>
          </h1>
          <p className="mt-3 text-[1.05rem] font-black leading-snug text-white/94 md:mt-4 md:text-[1.45rem]">
            취향대로 골라 즐기는 최강의 한 판
          </p>
          <p className="mt-5 max-w-[23rem] text-[0.9rem] font-medium leading-relaxed text-white/72 md:mt-6 md:text-[0.98rem]">
            최강의 토핑, 최강의 맛! 엄선된 재료와 노하우로 언제나 만족스러운 한 판을 제공합니다.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 md:mt-8">
            <a
              href="#menu-best"
              className="inline-flex h-[3.2rem] items-center gap-2 rounded-[8px] bg-[#ffcf00] px-5 text-[0.92rem] font-black text-[#001540] shadow-[0_18px_34px_rgba(255,207,0,0.22)] transition-all duration-300 hover:bg-[#f4bf00] active:translate-y-px md:h-[3.25rem] md:px-6 md:text-[0.98rem]"
              style={{ color: "#001540" }}
            >
              <StarIcon />
              추천 메뉴 보기
            </a>
            <a
              href="#menu-all"
              className="inline-flex h-[3.2rem] items-center gap-2 rounded-[8px] border border-white bg-white px-5 text-[0.92rem] font-black text-[#001540] shadow-[0_16px_32px_rgba(0,0,0,0.14)] transition-all duration-300 hover:bg-[#f3f6fb] active:translate-y-px md:h-[3.25rem] md:px-6 md:text-[0.98rem]"
              style={{ color: "#001540" }}
            >
              <GridIcon />
              전체 메뉴 보기
            </a>
          </div>
        </div>
        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
}

function MenuTabs() {
  return (
    <div className="relative z-20 bg-white">
      <div className="mx-auto -mt-8 max-w-7xl px-4">
        <nav
          aria-label="메뉴 카테고리"
          className="flex gap-2 overflow-x-auto rounded-[8px] bg-white p-4 text-[#001540] shadow-[0_18px_48px_rgba(0,21,64,0.16)] [scrollbar-width:none] [-ms-overflow-style:none] md:grid md:grid-cols-7 md:gap-3 md:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {menuPageData.tabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.id === "all" ? "#menu-all" : tab.id === "best" ? "#menu-best" : tab.id === "side" || tab.id === "drink" ? "#menu-side" : "#menu-all"}
              className={`inline-flex h-12 min-w-max items-center justify-center gap-2 rounded-[8px] px-5 text-[0.92rem] font-black transition-all duration-300 active:translate-y-px md:min-w-0 md:px-3 ${
                tab.id === "all"
                  ? "bg-[#ffcf00] text-[#001540] shadow-[0_8px_20px_rgba(255,207,0,0.28)]"
                  : "bg-white text-[#001540]/74 hover:bg-[#f3f6fb] hover:text-[#001540]"
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
  title,
  description,
  wreath = false,
}: {
  id: string;
  title: string;
  description: string;
  wreath?: boolean;
}) {
  return (
    <div id={id} className="scroll-mt-28 text-center">
      <div className="flex items-center justify-center gap-5">
        {wreath ? <span className="hidden h-14 w-6 rounded-l-full border-l-2 border-[#ffcf00] border-y-2 md:block" /> : null}
        <h2 className="text-[2rem] font-black leading-none tracking-[-0.04em] text-[#001540] md:text-[2.8rem]">
          {title}
        </h2>
        {wreath ? <span className="hidden h-14 w-6 rounded-r-full border-r-2 border-[#ffcf00] border-y-2 md:block" /> : null}
      </div>
      <p className="mx-auto mt-3 max-w-xl text-[0.96rem] font-medium leading-relaxed text-[#001540]/52">
        {description}
      </p>
    </div>
  );
}

function PizzaCard({ item, featured = false }: { item: MenuPagePizza; featured?: boolean }) {
  return (
    <article className="group relative overflow-hidden rounded-[8px] border border-[#e7ebf3] bg-white text-center text-[#001540] shadow-[0_18px_40px_rgba(0,21,64,0.08)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,21,64,0.13)]">
      {item.badge ? (
        <div
          className={`absolute left-3 top-3 z-10 flex items-center justify-center rounded-full text-center font-black leading-none shadow-[0_8px_20px_rgba(0,0,0,0.16)] ${
            item.badge === "BEST"
              ? "h-14 w-14 bg-[#ef4136] text-white"
              : "h-11 min-w-11 bg-[#001540] px-3 text-[#ffcf00]"
          }`}
        >
          {item.rank ? (
            <span className="flex flex-col">
              <span className="text-[0.62rem]">BEST</span>
              <span className="mt-0.5 text-[1.25rem]">{item.rank}</span>
            </span>
          ) : (
            <span className="text-[0.72rem]">{item.badge}</span>
          )}
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
      <div className={featured ? "px-5 py-5 md:px-6 md:py-6" : "px-4 py-4 md:px-5 md:py-5"}>
        <h3 className={`${featured ? "text-[1.55rem] md:text-[1.75rem]" : "text-[1.28rem] md:text-[1.38rem]"} font-black leading-tight tracking-[-0.03em]`}>
          {item.title}
        </h3>
        <p className="mx-auto mt-2 min-h-[2.55rem] max-w-[18rem] text-[0.86rem] font-medium leading-relaxed text-[#001540]/54">
          {item.description}
        </p>
        <p className={`${featured ? "mt-4 text-[1.22rem]" : "mt-3 text-[1.02rem]"} font-black text-[#001540]`}>
          {item.price}
        </p>
      </div>
    </article>
  );
}

function BestMenuSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf2] px-4 pt-12 pb-9 md:pt-14 md:pb-14">
      <DecorativeSectionImage src={generatedMenuAssets.best} className="opacity-75" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.76)_46%,rgba(255,255,255,0.92)_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          id="menu-best"
          title="베스트 메뉴"
          description="가장 사랑받는 최강피자 인기메뉴!"
          wreath
        />
        <div className="relative mt-9 md:mt-12">
          <span className="absolute left-[-2.6rem] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#001540]/44 shadow-[0_10px_24px_rgba(0,21,64,0.12)] lg:flex">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="absolute right-[-2.6rem] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#001540]/44 shadow-[0_10px_24px_rgba(0,21,64,0.12)] lg:flex">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
  return (
    <section className="relative overflow-hidden bg-[#fbfaf7] px-4 py-10 md:py-14">
      <DecorativeSectionImage src={generatedMenuAssets.all} className="opacity-72" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.7)_45%,rgba(255,255,255,0.92)_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          id="menu-all"
          title="전체 메뉴"
          description="최강피자의 다양한 메뉴를 만나보세요!"
        />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {menuPageData.all.map((item) => (
            <PizzaCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonsBand() {
  return (
    <section className="relative overflow-hidden bg-[#001540] px-4 py-12 text-white md:py-14">
      <DecorativeSectionImage src={generatedMenuAssets.reasons} />
      <div className="absolute inset-0 bg-[#001540]/58" />
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-center text-[1.75rem] font-black leading-tight tracking-[-0.04em] md:text-[2.5rem]">
          최강피자 메뉴가 <span className="text-[#ffcf00]">특별한 이유!</span>
        </h2>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {menuPageData.reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="relative flex flex-col items-center rounded-[8px] border border-white/10 bg-white/[0.045] px-5 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none"
            >
              <div className="text-[#ffcf00]">
                <ReasonIcon type={reason.icon} />
              </div>
              <h3 className="mt-3 text-[1.08rem] font-black">{reason.title}</h3>
              <p className="mt-2 max-w-[12rem] text-[0.86rem] font-medium leading-relaxed text-white/62">
                {reason.description}
              </p>
              {index < menuPageData.reasons.length - 1 ? (
                <span className="absolute right-0 top-5 hidden h-24 w-px bg-white/12 lg:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sideImagePosition = {
  wing: "11% 72%",
  stick: "39% 34%",
  pasta: "62% 74%",
  cola: "74% 32%",
  cider: "91% 35%",
} satisfies Record<MenuPageSideItem["kind"], string>;

const sideImageSize = {
  wing: "360%",
  stick: "340%",
  pasta: "350%",
  cola: "360%",
  cider: "360%",
} satisfies Record<MenuPageSideItem["kind"], string>;

function SideIllustration({ kind }: { kind: MenuPageSideItem["kind"] }) {
  return (
    <div
      aria-hidden="true"
      className="mx-auto h-36 w-full max-w-[11.5rem] overflow-hidden rounded-[8px] bg-[#f6f7fa] bg-no-repeat shadow-[inset_0_0_0_1px_rgba(0,21,64,0.06)]"
      style={{
        backgroundImage: `url(${generatedMenuAssets.sideComponent})`,
        backgroundPosition: sideImagePosition[kind],
        backgroundSize: sideImageSize[kind],
      }}
    />
  );
}

function SideMenuSection() {
  return (
    <section id="menu-side" className="relative scroll-mt-28 overflow-hidden bg-white px-4 py-12 text-[#001540] md:py-[4.25rem]">
      <DecorativeSectionImage src={generatedMenuAssets.side} className="opacity-78" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.74)_46%,rgba(255,255,255,0.9)_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          id="menu-side-title"
          title="사이드 메뉴 & 음료"
          description="피자와 함께 더 맛있게 즐겨보세요!"
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {menuPageData.sideItems.map((item) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-[8px] border border-[#e7ebf3] bg-white px-4 pb-5 pt-4 text-center shadow-[0_18px_40px_rgba(0,21,64,0.08)]"
            >
              {item.badge ? (
                <span className="absolute right-3 top-3 z-10 rounded-full bg-[#001540] px-3 py-1.5 text-[0.68rem] font-black text-[#ffcf00] shadow-[0_8px_18px_rgba(0,21,64,0.16)]">
                  {item.badge}
                </span>
              ) : null}
              <SideIllustration kind={item.kind} />
              <h3 className="mt-1 text-[1.18rem] font-black tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-1.5 min-h-[2.4rem] text-[0.82rem] font-medium leading-relaxed text-[#001540]/54">{item.description}</p>
              <p className="mt-3 text-[1.1rem] font-black">{item.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCta() {
  return (
    <section id="menu-contact" className="relative overflow-hidden bg-[#ffcf00] px-4 py-12 text-[#001540] md:py-16">
      <DecorativeSectionImage src={generatedMenuAssets.cta} className="object-[64%_center] md:object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,207,0,0.98)_0%,rgba(255,207,0,0.92)_48%,rgba(255,207,0,0.18)_100%)]" />
      <div className="relative mx-auto grid max-w-7xl md:grid-cols-[0.68fr_0.32fr]">
        <div className="max-w-3xl text-left">
          <h2 className="max-w-[18rem] text-[1.8rem] font-black leading-tight tracking-[-0.05em] [word-break:keep-all] md:max-w-[42rem] md:text-[3rem]">
            오늘의 최강 메뉴를 만나보세요!
          </h2>
          <p className="mt-3 max-w-xl text-[0.98rem] font-bold text-[#001540]/72">
            메뉴 구성과 창업 상담까지 한 번에 확인해보세요.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu-best"
              className="inline-flex h-[3.75rem] items-center justify-center gap-3 rounded-[8px] bg-[#001540] px-10 text-[1.18rem] font-black text-white shadow-[0_18px_36px_rgba(0,21,64,0.2)] transition-all duration-300 hover:bg-[#082466] active:translate-y-px"
              style={{ color: "#ffffff" }}
            >
              <StarIcon className="h-6 w-6" />
              베스트 메뉴
            </a>
            <Link
              href="/#contact-cta-section"
              className="inline-flex h-[3.75rem] items-center justify-center gap-3 rounded-[8px] bg-white px-10 text-[1.18rem] font-black text-[#001540] shadow-[0_18px_36px_rgba(0,21,64,0.13)] transition-all duration-300 hover:bg-[#f7f9fd] active:translate-y-px"
              style={{ color: "#001540" }}
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

function SocialIcon({ type }: { type: "instagram" | "facebook" | "youtube" }) {
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path d="M13.2 20v-7h2.3l.4-2.8h-2.7V8.5c0-.8.3-1.3 1.4-1.3H16V4.7c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v1.8H7.7V13h2.4v7h3.1Z" fill="currentColor" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path d="M20 8.5a2.2 2.2 0 0 0-1.6-1.6C17 6.5 12 6.5 12 6.5s-5 0-6.4.4A2.2 2.2 0 0 0 4 8.5a22.9 22.9 0 0 0-.4 3.5c0 1.2.1 2.4.4 3.5.2.8.8 1.4 1.6 1.6 1.4.4 6.4.4 6.4.4s5 0 6.4-.4a2.2 2.2 0 0 0 1.6-1.6c.3-1.1.4-2.3.4-3.5 0-1.2-.1-2.4-.4-3.5Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="m10.5 14.4 4.1-2.4-4.1-2.4v4.8Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.4 8.2h.1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function MenuFooter() {
  const columns = [
    { title: "브랜드", links: ["브랜드 소개", "브랜드 스토리", "가맹 정보", "공지사항"] },
    { title: "메뉴", links: ["전체 메뉴", "베스트 메뉴", "사이드 메뉴", "음료"] },
    { title: "창업안내", links: ["창업 가이드", "창업 절차", "입지 분석", "창업 비용"] },
  ];

  return (
    <footer className="bg-[#001540] px-4 py-10 text-white md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-9 md:grid-cols-[1.2fr_1fr_1fr_1fr_1.15fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="relative h-12 w-12 overflow-hidden">
                <Image
                  src="/assets/user/logo-mark-gold.png"
                  alt="최강피자 로고"
                  width={96}
                  height={96}
                  className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 object-contain"
                />
              </span>
              <span className="text-[1.65rem] font-black tracking-[-0.04em]">최강피자</span>
            </Link>
            <p className="mt-3 max-w-[13rem] text-[0.86rem] font-medium leading-relaxed text-white/54">
              최강의 맛과 최고의 서비스를 약속드립니다.
            </p>
            <div className="mt-5 flex gap-2">
              {(["instagram", "facebook", "youtube"] as const).map((type) => (
                <span key={type} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/18 text-white/72">
                  <SocialIcon type={type} />
                </span>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="border-white/12 md:border-l md:pl-9">
              <h3 className="text-[0.98rem] font-black">{column.title}</h3>
              <ul className="mt-4 space-y-2.5 text-[0.82rem] font-medium text-white/54">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="border-white/12 md:border-l md:pl-9">
            <h3 className="text-[0.98rem] font-black">가맹문의</h3>
            <a href="tel:1666-1234" className="mt-4 flex items-center gap-2 text-[1.45rem] font-black text-[#ffcf00]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path d="M7.4 4.8h2.2l1.2 3.8-1.8 1.6a15 15 0 0 0 5 5l1.6-1.8 3.8 1.2v2.2c0 .8-.6 1.4-1.4 1.4A13.2 13.2 0 0 1 4.8 6.2c0-.8.6-1.4 1.4-1.4Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              1666-1234
            </a>
            <p className="mt-4 text-[0.82rem] font-medium leading-relaxed text-white/54">
              평일 09:00 - 18:00
              <br />
              주말 및 공휴일 휴무
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/12 pt-6 text-[0.72rem] font-medium text-white/34">
          <span>상호명: 최강피자</span>
          <span className="mx-3">대표: 박희준</span>
          <span>사업자등록번호: 123-45-67890</span>
          <span className="mt-2 block">COPYRIGHT CHOIGANG PIZZA. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
}

export function MenuPage() {
  return (
    <>
      <PortedHeader
        navItems={menuPageNavItems}
        activeHref="/menu"
        homeHref="/"
      />
      <main className="bg-white">
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
