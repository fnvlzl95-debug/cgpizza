import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { CrownWatermark, CrumbScatter, HeroProps, type HeroProp } from "@/components/decor/field-decor";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MenuCatalog } from "@/components/menu/menu-catalog";
import { MenuHeroShowcase } from "@/components/menu/menu-hero-showcase";
import {
  menuPageData,
  type MenuPagePizza,
  type MenuPageSideItem,
} from "@/lib/menu-page-data";

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
  const palette = tone === "BEST" ? "bg-ivory text-red-hero" : "bg-yellow-500 text-ink-900";
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

const delay = (seconds: number) => ({ "--motion-delay": `${seconds}s` }) as CSSProperties;

/** The comp's scattered sparks: a few gold four-point stars and white dots,
 *  each placed as its own element so no stretch distorts them, kept to the
 *  card cluster's airspace so none lands on a word. */
const sparkMarks = [
  // [left%, top%, rem, opacity, isSpark]
  [3, 4, 1.3, 0.85, true], [11, 10, 0.4, 0.5, false], [-2, 30, 0.9, 0.6, true],
  [96, 2, 1.5, 0.8, true], [90, 12, 0.45, 0.45, false], [102, 40, 1.0, 0.55, true],
  [-1, 74, 1.1, 0.6, true], [7, 92, 0.45, 0.4, false], [55, -3, 0.5, 0.5, false],
  [98, 84, 1.2, 0.6, true], [88, 96, 0.4, 0.4, false],
] as const;

function SparkField({ className }: { className: string }) {
  return (
    <div aria-hidden="true" className={className}>
      {sparkMarks.map(([left, top, size, opacity, isSpark], index) => (
        <span
          key={index}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${left}%`, top: `${top}%`, opacity }}
        >
          {isSpark ? (
            <svg viewBox="0 0 24 24" style={{ width: `${size}rem`, height: `${size}rem` }}>
              <path
                d="M12 0c.9 6.9 4.2 10.2 12 12-7.8 1.8-11.1 5.1-12 12-.9-6.9-4.2-10.2-12-12C7.8 10.2 11.1 6.9 12 0Z"
                fill="var(--color-yellow-500)"
              />
            </svg>
          ) : (
            <span
              className="block rounded-full bg-white"
              style={{ width: `${size}rem`, height: `${size}rem` }}
            />
          )}
        </span>
      ))}
    </div>
  );
}

/** Halftone dot patch, the comp's texture accent on the blue field. */
function DotPatch({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 160 96" aria-hidden="true" className={className}>
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={8 + col * 16}
            cy={8 + row * 16}
            r={2.4}
            fill="currentColor"
          />
        )),
      )}
    </svg>
  );
}

/** The comp's field: a broad lighter sweep climbing to the right with one
 *  bright streak along its edge, drawn as flat skewed bands. */
function FieldSweep() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* The comp does not light this field evenly: a pool of lighter blue
          sits behind the card cluster and the corners fall away, which is
          what puts the cards in front of the field rather than on it. */}
      <div className="absolute inset-0 bg-[radial-gradient(58%_54%_at_72%_44%,rgba(255,176,150,0.4),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_45%,transparent_42%,rgba(42,10,6,0.44))]" />
      <div className="absolute -left-[20%] top-[34%] h-[44%] w-[150%] -rotate-[8deg] bg-white/[0.045]" />
      <div className="absolute -left-[20%] top-[33.4%] h-[3px] w-[150%] -rotate-[8deg] bg-white/[0.18]" />
      <div className="absolute -left-[20%] top-[82%] h-[22%] w-[150%] -rotate-[8deg] bg-white/[0.03]" />
      <DotPatch className="absolute right-[5%] top-[9%] h-24 w-40 text-white/[0.14]" />
      <DotPatch className="absolute bottom-[13%] left-[37%] h-20 w-32 text-white/[0.09]" />
    </div>
  );
}

/**
 * The comp floats real ingredients across the blue — shrimp, basil, a cut
 * tomato, a slice of pepperoni — biting the card edges so the cluster sits
 * inside the field rather than on top of it.
 *
 * Most are placed against the card cluster's own box, not the section, so
 * they hold their relationship to the cards at any viewport height. Two sit
 * behind the cards and two in front; a prop that only ever passes behind
 * reads as wallpaper, and one that always passes in front reads as a sticker.
 *
 * Each drifts on its own clock, and below `lg` nearly all of them stand down:
 * the copy takes the full width there and a prop over a headline is noise.
 */
const clusterPropsBehind = [
  {
    src: "/assets/user/menu/props/tomato.webp",
    className: "hidden -right-[8%] top-[10%] w-[5.5rem] lg:block lg:w-[clamp(7rem,8vw,10rem)]",
    style: { "--drift-tilt": "-6deg", "--drift-y": "-11px", "--drift-x": "-5px", "--drift-duration": "9.2s", "--motion-delay": "1.1s" },
  },
] as const satisfies readonly HeroProp[];

const clusterPropsFront = [
  {
    src: "/assets/user/menu/props/shrimp-a.webp",
    className: "left-[27%] -top-[10%] w-[4.5rem] lg:w-[clamp(7rem,7.8vw,9.75rem)]",
    style: { "--drift-tilt": "-16deg", "--drift-y": "-13px", "--drift-x": "6px", "--drift-duration": "8.5s", "--motion-delay": "0s" },
  },
  {
    src: "/assets/user/menu/props/basil-a.webp",
    className: "hidden -left-[5%] top-[43%] w-[5rem] lg:block lg:w-[clamp(6.75rem,7.5vw,9.5rem)]",
    style: { "--drift-tilt": "10deg", "--drift-y": "-15px", "--drift-x": "-7px", "--drift-duration": "10s", "--motion-delay": "0.6s" },
  },
  {
    src: "/assets/user/menu/props/cheese.webp",
    className: "left-[34%] -bottom-[4%] w-[3.75rem] lg:left-[37%] lg:-bottom-[5%] lg:w-[clamp(6.5rem,7.2vw,9rem)]",
    style: { "--drift-tilt": "-9deg", "--drift-y": "-11px", "--drift-x": "8px", "--drift-duration": "8.8s", "--motion-delay": "0.8s" },
  },
] as const satisfies readonly HeroProp[];

/**
 * The rest ring the field rather than the cards. The two columns leave only a
 * narrow gutter between them, so the open ground on this screen is the frame
 * around the composition — the strips outside each column and the band under
 * the copy — and that is where these sit.
 */
const fieldProps = [
  {
    src: "/assets/user/menu/props/pepper.webp",
    className: "hidden lg:left-[1%] lg:top-[23%] lg:block lg:w-[clamp(6rem,6.6vw,8.5rem)]",
    style: { "--drift-tilt": "-13deg", "--drift-y": "-12px", "--drift-x": "6px", "--drift-duration": "9.4s", "--motion-delay": "0.4s" },
  },
  {
    src: "/assets/user/menu/props/shrimp-b.webp",
    className: "hidden lg:left-[2%] lg:top-[55%] lg:block lg:w-[clamp(6rem,6.8vw,8.75rem)]",
    style: { "--drift-tilt": "22deg", "--drift-y": "-12px", "--drift-x": "-7px", "--drift-duration": "8s", "--motion-delay": "0.9s" },
  },
  {
    src: "/assets/user/menu/props/mushroom.webp",
    className: "hidden lg:left-[92%] lg:top-[27%] lg:block lg:w-[clamp(6rem,6.6vw,8.5rem)]",
    style: { "--drift-tilt": "14deg", "--drift-y": "-10px", "--drift-x": "6px", "--drift-duration": "8.1s", "--motion-delay": "1.9s" },
  },
  {
    src: "/assets/user/menu/props/pepperoni.webp",
    className: "hidden lg:left-[94%] lg:top-[63%] lg:block lg:w-[clamp(5.5rem,6vw,7.75rem)]",
    style: { "--drift-tilt": "12deg", "--drift-y": "-9px", "--drift-x": "7px", "--drift-duration": "7.4s", "--motion-delay": "0.3s" },
  },
  {
    src: "/assets/user/menu/props/bacon.webp",
    className: "hidden lg:left-[7%] lg:top-[83%] lg:block lg:w-[clamp(6.25rem,7vw,9rem)]",
    style: { "--drift-tilt": "-7deg", "--drift-y": "-10px", "--drift-x": "7px", "--drift-duration": "10.6s", "--motion-delay": "2s" },
  },
  {
    src: "/assets/user/menu/props/basil-b.webp",
    className: "hidden left-[29%] top-[79%] w-[4.5rem] lg:block lg:w-[clamp(5.75rem,6.4vw,8.25rem)]",
    style: { "--drift-tilt": "-18deg", "--drift-y": "-10px", "--drift-x": "5px", "--drift-duration": "11s", "--motion-delay": "1.6s" },
  },
  {
    src: "/assets/user/menu/props/corn.webp",
    className: "hidden lg:left-[51%] lg:top-[80%] lg:block lg:w-[clamp(5.25rem,5.8vw,7.5rem)]",
    style: { "--drift-tilt": "8deg", "--drift-y": "-9px", "--drift-x": "5px", "--drift-duration": "7.8s", "--motion-delay": "1.4s" },
  },
  {
    src: "/assets/user/menu/props/olive.webp",
    className: "left-[7%] bottom-[4%] w-[3.5rem] lg:bottom-auto lg:left-[72%] lg:top-[85%] lg:w-[clamp(6rem,6.6vw,8.5rem)]",
    style: { "--drift-tilt": "-11deg", "--drift-y": "-12px", "--drift-x": "-6px", "--drift-duration": "9.8s", "--motion-delay": "2.3s" },
  },
] as const satisfies readonly HeroProp[];

/** The comp's bottom edge: the white field sweeps up into the blue. */
function HeroCurve() {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 z-10 h-[2.6rem] w-full lg:h-[4.2rem]"
    >
      <path d="M0 34Q360 88 900 52T1440 12L1440 90L0 90Z" fill="var(--color-cream-ground)" />
    </svg>
  );
}

function MenuHero() {
  return (
    <section
      id="top"
      className="relative isolate flex flex-col justify-center overflow-hidden bg-red-hero pb-[4.5rem] pt-lead text-white lg:min-h-[calc(100svh-3.9rem)] lg:pb-[5.5rem]"
    >
      <FieldSweep />
      <CrownWatermark />
      <HeroProps items={fieldProps} className="inset-0 z-[2] overflow-hidden" />

      <div className="relative mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-gutter px-5 md:px-8 lg:grid-cols-[50fr_50fr] min-[1800px]:max-w-[104rem] min-[2200px]:max-w-[124rem] lg:items-center lg:gap-[2.8vw]">
        <div className="relative z-20">
          {/* Not a label stuck above the heading. The words are set in the
              same display face as the headline and ride a real smear of pizza
              sauce — the grain, the gloss and the trailing drags photographed
              rather than approximated in CSS, which is the house rule for
              physical texture. Sauce rather than paint because it is the thing
              this page is about; the smear runs wider than the words so its
              streaks break past the last syllable. */}
          <p className="motion-rise relative inline-flex -rotate-[3.5deg] pb-[0.1em]">
            <span className="relative isolate inline-flex whitespace-nowrap px-[0.62em] py-[0.16em]">
              <Image
                src="/assets/user/sauce-sweep.webp"
                alt=""
                width={1100}
                height={437}
                priority
                aria-hidden="true"
                sizes="(max-width: 1024px) 60vw, 26vw"
                className="pointer-events-none absolute -left-[6%] top-1/2 -z-10 w-[160%] max-w-none -translate-y-[46%]"
              />
              <span className="lockup-3d font-headline text-[1.5rem] leading-none tracking-[-0.01em] text-white sm:text-[1.85rem] lg:text-[clamp(1.85rem,2.05vw,2.85rem)]">
                피자는 역시
              </span>
            </span>
            {/* Clear of the sweep: gold on gold is no mark at all. */}
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="absolute right-[30%] -top-8 h-4 w-4 lg:right-[29%] lg:-top-12 lg:h-6 lg:w-6"
            >
              <path
                d="M12 0c.9 6.9 4.2 10.2 12 12-7.8 1.8-11.1 5.1-12 12-.9-6.9-4.2-10.2-12-12C7.8 10.2 11.1 6.9 12 0Z"
                fill="var(--color-yellow-500)"
              />
            </svg>
          </p>

          {/* The comp sets this in a heavy display face with a navy outline
              and a solid extrude, and steps each line off a different angle.
              That lettering is most of the screen's character, so it gets its
              own subset face rather than Pretendard turned up loud. */}
          <h1
            style={delay(0.08)}
            className="motion-rise headline-3d mt-group origin-left -skew-x-[6deg] font-headline leading-[0.99] tracking-[-0.02em]"
          >
            <span className="block origin-left -rotate-[1.2deg] text-[2.15rem] sm:text-[2.8rem] lg:text-[clamp(2.9rem,4.3vw,6.2rem)] lg:[@media(max-height:820px)]:text-[clamp(2.45rem,3.5vw,3.5rem)]">
              최강 답게
            </span>
            <span className="block origin-left -rotate-[0.4deg] pl-[0.9em] text-[2.45rem] sm:text-[3.15rem] lg:text-[clamp(2.9rem,4.3vw,6.2rem)] lg:[@media(max-height:820px)]:text-[clamp(2.45rem,3.5vw,3.5rem)]">
              고르는 재미,
            </span>
            {/* A flex row, not a wrapped line: the tilted word yields rects at
                three heights, which the shrink-to-fit inline pass misreads. */}
            <span className="flex origin-left -rotate-[2deg] items-baseline gap-[0.24em] pt-[0.1em] text-[3.3rem] sm:text-[4.3rem] lg:text-[clamp(3.9rem,5.45vw,8.1rem)] lg:[@media(max-height:820px)]:text-[clamp(3.15rem,4.5vw,4.5rem)]">
              <span>한 판의</span>
              <span style={delay(0.46)} className="motion-punch inline-block text-yellow-500">
                임팩트!
              </span>
            </span>
          </h1>

          <p
            style={delay(0.16)}
            className="motion-rise mt-group max-w-[34rem] origin-left -skew-x-[3deg] text-[1.02rem] font-bold leading-relaxed tracking-[-0.02em] text-white/85 lg:text-[clamp(1.02rem,1.28vw,1.68rem)]"
          >
            취향도, 맛도, 토핑도 최강! 지금 나만의 최강피자를 골라보세요.
          </p>

          <p
            style={delay(0.3)}
            className="motion-rise mt-group flex items-center gap-1.5 text-[0.88rem] font-bold text-white/70 lg:text-[clamp(0.86rem,1vw,1.15rem)]"
          >
            <span aria-hidden="true" className="text-yellow-500">◇</span>
            방문포장 시 할인 혜택을 받아보세요!
          </p>
        </div>

        <div className="motion-swell relative z-10 mx-auto w-full max-w-[26rem] pt-6 sm:max-w-[30rem] lg:mx-0 lg:max-w-none lg:justify-self-end lg:pt-2 lg:[@media(max-height:820px)]:max-w-[26rem]">
          <SparkField className="pointer-events-none absolute -inset-x-[2%] inset-y-0 z-0" />
          <CrumbScatter className="pointer-events-none absolute -inset-[4%] -z-10 h-[108%] w-[108%]" />
          <HeroProps items={clusterPropsBehind} className="inset-0 z-0" />
          <MenuHeroShowcase items={menuPageData.best} />
          <HeroProps items={clusterPropsFront} className="inset-0 z-40" />
        </div>
      </div>

      <HeroCurve />
    </section>
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
    <div id={id} className="scroll-mt-[calc(var(--header-offset)+4.5rem)] text-center">
      {eyebrow ? (
        <p className={`mb-3 text-[0.74rem] font-black tracking-[0.24em] md:text-[0.82rem] ${isDark ? "text-yellow-500" : "text-red-500"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-[2.1rem] font-black leading-[0.96] tracking-[-0.04em] sm:text-[2.5rem] md:text-[3.15rem] ${isDark ? "text-white" : "text-ink-900"}`}>
        {title}
      </h2>
      <p className={`mx-auto mt-4 max-w-xl text-[0.96rem] font-medium leading-relaxed ${isDark ? "text-white/62" : "text-ink-900/60"}`}>
        {description}
      </p>
    </div>
  );
}

function PizzaCard({ item, featured = false }: { item: MenuPagePizza; featured?: boolean }) {
  const isSignature = item.rank === 1;
  return (
    /* The wordmark straddles the card's top edge, so it has to live outside
       the article — the card clips its own corners with overflow-hidden, and
       anything hung over the border would be cut in half by it. */
    <div className="group relative h-full">
      {isSignature ? (
        <div className="pointer-events-none absolute left-1/2 top-0 z-30 w-32 -translate-x-1/2 -translate-y-1/2 md:w-40">
          <Image
            src="/assets/user/brand/wordmark-white-20260822.webp"
            alt="최강피자 로고"
            width={1145}
            height={484}
            className="h-auto w-full drop-shadow-[0_6px_14px_rgba(42,10,6,0.55)]"
          />
        </div>
      ) : null}
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] text-center transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 ${
        isSignature
          ? "border-2 border-yellow-500 bg-ink-900 text-white shadow-[0_0_34px_rgba(255,207,0,0.22),0_26px_54px_rgba(0,0,0,0.5)]"
          : "border border-hairline bg-white text-ink-900 shadow-[0_18px_40px_rgba(0,0,0,0.22)] hover:shadow-[0_28px_58px_rgba(0,0,0,0.3)]"
      }`}
    >
      {item.badge ? <StickerBadge tone={item.badge} rank={item.rank} /> : null}
      <div className={`relative overflow-hidden bg-[#faf4f2] ${featured ? "aspect-[1.38]" : "aspect-[1.48]"}`}>
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
        <p className={`mx-auto mt-1.5 max-w-[18rem] text-balance text-[0.78rem] font-medium leading-snug md:mt-2 md:text-[0.86rem] md:leading-relaxed ${isSignature ? "text-white/60" : "text-ink-900/54"}`}>
          {item.description}
        </p>
      </div>
    </article>
    </div>
  );
}

function BestMenuSection() {
  return (
    <section data-category="best" className="relative overflow-hidden bg-red-video px-4 pt-12 pb-9 md:pt-14 md:pb-14">
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          id="menu-best"
          eyebrow="BEST MENU"
          title={<>베스트 <GoldText>메뉴</GoldText></>}
          description="가장 사랑받는 최강피자 인기메뉴!"
          tone="dark"
        />
        <div className="relative mt-9 md:mt-12">
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
    <section data-category="best special spicy classic" className="relative overflow-hidden bg-cream-ground px-4 py-10 md:py-14">
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
              id={group.category === "best" ? "menu-best-group" : `menu-${group.category}`}
              data-category={group.category}
              className="scroll-mt-[calc(var(--header-offset)+4.5rem)]"
            >
              <div className="mb-6 flex items-center justify-between gap-4 border-b-2 border-ink-900 pb-3">
                <h3 className="flex items-center gap-2.5 text-[1.35rem] font-black leading-tight tracking-[-0.03em] text-ink-900 md:text-[1.7rem]">
                  <span aria-hidden="true" className="h-[0.6em] w-[0.6em] rotate-45 rounded-[2px] bg-yellow-500 ring-1 ring-ink-900/15" />
                  {allMenuCategoryTitle[group.category]}
                </h3>
                <span className="shrink-0 rounded-full bg-ink-900 px-3 py-1 text-[0.74rem] font-black text-yellow-500 md:text-[0.82rem]">
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
    <section className="relative overflow-hidden border-y-2 border-black/5 bg-yellow-500 px-4 py-10 text-ink-900 md:py-14">
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
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink-900 text-yellow-500 shadow-lg transition-transform group-hover:scale-110 md:h-16 md:w-16 [&_svg]:h-6 [&_svg]:w-6 md:[&_svg]:h-9 md:[&_svg]:w-9">
                <ReasonIcon type={reason.icon} />
              </div>
              <h3 className="mt-3 text-[0.98rem] font-black leading-tight md:mt-4 md:text-[1.2rem]">{reason.title}</h3>
              <p className="mt-1.5 max-w-[11rem] text-[0.78rem] font-medium leading-snug text-ink-900/62 md:mt-2 md:text-[0.86rem] md:leading-relaxed">
                {reason.description}
              </p>
              {index < menuPageData.reasons.length - 1 ? (
                <span className="absolute right-[-0.75rem] top-1/2 hidden h-12 w-px -translate-y-1/2 rotate-12 bg-ink-900/10 md:block" />
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
    <div className="relative mx-auto aspect-[1.18] w-full max-w-[12rem] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(160deg,#fff7ed_0%,#f8ead9_100%)] shadow-[inset_0_0_0_1px_rgba(42,10,6,0.07)]">
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
    <section id="menu-side" data-category="side" className="relative scroll-mt-[calc(var(--header-offset)+4.5rem)] overflow-hidden bg-red-band px-4 py-12 text-white md:py-[4.25rem]">
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          id="menu-side-title"
          eyebrow="SIDE MENU"
          title={<>사이드 <GoldText>메뉴</GoldText></>}
          description="피자와 함께 더 맛있게 즐겨보세요!"
          tone="dark"
        />
        <div className="mt-9 flex flex-wrap justify-center gap-3 sm:gap-4">
          {menuPageData.sideItems.map((item) => (
            <article
              key={item.title}
              className="group relative flex w-[calc(50%-0.375rem)] flex-col overflow-hidden rounded-[1.5rem] border border-hairline bg-white px-3 pb-4 pt-3 text-center text-ink-900 shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_54px_rgba(0,0,0,0.32)] sm:w-[calc(50%-0.5rem)] md:px-4 md:pb-5 md:pt-4 lg:w-[calc(20%-0.8rem)]"
            >
              <SideIllustration item={item} />
              <h3 className="mt-3 flex min-h-[2.5rem] items-center justify-center text-balance text-[1rem] font-black leading-tight tracking-[-0.02em] md:text-[1.1rem]">
                {item.title}
              </h3>
              <span className="mx-auto mt-2 h-0.5 w-7 rounded-full bg-yellow-500" />
              <p className="mt-2.5 text-balance text-[0.74rem] font-medium leading-snug text-ink-900/54 md:text-[0.8rem] md:leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCta() {
  return (
    <section id="menu-contact" className="relative overflow-hidden bg-ink-900 px-4 py-12 text-white md:py-16">
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
              className="inline-flex h-[3.75rem] items-center justify-center gap-3 rounded-full bg-yellow-500 px-10 text-[1.18rem] font-black text-ink-900 shadow-[0_18px_36px_rgba(0,0,0,0.28)] transition-all duration-300 hover:bg-[#ffd633] active:translate-y-px"
              style={{ color: "var(--color-ink-900)" }}
            >
              <StarIcon className="h-6 w-6" />
              베스트 메뉴
            </a>
            <Link
              href="/#contact-cta-section"
              className="inline-flex h-[3.75rem] items-center justify-center gap-3 rounded-full bg-white px-10 text-[1.18rem] font-black text-ink-900 shadow-[0_18px_36px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-[#fdf7f5] active:translate-y-px"
              style={{ color: "var(--color-ink-900)" }}
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

export function MenuPage() {
  return (
    <>
      <SiteHeader activeHref="/menu" />
      <main className="bg-red-video text-white">
        <MenuHero />
        <MenuCatalog>
          <BestMenuSection />
          <AllMenuSection />
          <SideMenuSection />
        </MenuCatalog>
        <ReasonsBand />
        <MenuCta />
      </main>
      <SiteFooter />
    </>
  );
}
