import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { KitchenVideo } from "@/components/brand/kitchen-video";
import { CrownWatermark, CrumbScatter } from "@/components/decor/field-decor";
import {
  ArrowRightIcon,
  BuildingIcon,
  HeartIcon,
  LeafIcon,
  PeopleIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  TagIcon,
  WheatIcon,
} from "@/components/home/icons";
import { BrandMark, BrushHighlight } from "@/components/home/reference/reference-primitives";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  hero,
  ingredients,
  kitchen,
  masthead,
  menuCta,
  recommend,
  store,
  strengths,
} from "@/lib/brand-content";

/* ─────────────────────────────────────────────────────────────
   /brand — one sheet. The whole brand on a single screen, told as a magazine
   infographic rather than a stack of bands.

     ┌──────────────────────────────────────┬──────────────┐
     │ headline · copy · board · 3 strengths │  실제 주방    │
     ├──────────────────────────────────────┤   (video)    │
     │ ingredient counter                    │              │
     ├──────────────────────────────────────┴──────────────┤
     │ banner: tagline · store · 추천 대상 · menu CTA        │
     └─────────────────────────────────────────────────────┘

   Two rules hold it together.

   ONE METRIC. Type is `clamp(rem, min(Vvw, Nsvh), rem)` — width-driven, with
   a height cap so the sheet still fits a short laptop. Sizing off `svh` alone
   let the type and the column it sits in scale on different axes, so the
   composition changed shape rather than size; that was the uneven rhythm.

   ONE VOCABULARY. Icons come from the house family at 1.8 stroke, shadows are
   navy and downward, radii follow the four documented steps, and the panels
   share one recipe: solid navy, a hairline ring, no glass.
   ───────────────────────────────────────────────────── */

const delay = (seconds: number) => ({ "--motion-delay": `${seconds}s` }) as CSSProperties;

/** Full-bleed gutter: content nearly touches the edges on a wide display. */
const BLEED = "px-[clamp(1.25rem,3vw,3.5rem)]";

/** Cut-out product photography, per the system's subject-shadow token. */
const SUBJECT_SHADOW = "drop-shadow-[0_30px_58px_rgba(1,23,80,0.42)]";
const PROP_SHADOW = "drop-shadow-[0_12px_24px_rgba(1,23,80,0.45)]";

function Pen({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span style={style} className={`font-annotation leading-[1.06] ${className}`}>
      {children}
    </span>
  );
}

/** Round outline stamp — the label register, in the shape marks take. */
function Stamp({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border-2 border-navy-900/22 px-[0.9em] py-[0.34em] text-[clamp(0.6rem,0.72vw,0.8rem)] font-black tracking-[0.14em] text-navy-900/62">
      {children}
    </span>
  );
}

const strengthIcons = { grain: WheatIcon, sprout: LeafIcon, shield: ShieldIcon } as const;
/* Each strength lands at its own slight angle, like the headline lines. */
const strengthTilts = ["-rotate-1", "rotate-[0.6deg]", "-rotate-[1.2deg]"] as const;
const recommendIcons = { stomach: HeartIcon, leaf: LeafIcon, family: PeopleIcon } as const;

/**
 * The three gold medallions, stacked down the right of the board, under a
 * handwritten note that points at them.
 */
function StrengthStack() {
  return (
    <div className="relative z-20">
      <div className="relative mb-block w-fit pr-[3.2em]">
        <Pen
          style={delay(0.34)}
          className="motion-rise block -rotate-3 text-[1.35rem] text-white lg:text-[clamp(1.1rem,min(1.35vw,2.4svh),1.9rem)]"
        >
          {strengths.annotation}
        </Pen>

        {/* The list sits BELOW this note, so the arrow leaves to the right,
            bows over and comes down onto the first medallion. It kept a 2.4
            stroke on purpose: this is a drawn mark in the pen register, not a
            member of the 1.8 icon family. Sized in `em` so it tracks the
            handwriting at every width. */}
        <svg
          viewBox="0 0 72 64"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute -right-[0.5em] top-[0.1em] h-[2.6em] w-auto text-yellow-500"
        >
          <path
            d="M4 6c14 1.5 26 6 34.5 13.5C47 27 51.5 36.5 52 48"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M44.5 39.5 52 49.5l9-8"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* A hand-annotated checklist, not a UI feature list: bare gold icons,
          pen-written numbers, and each row set down at its own slight angle —
          the same gesture as the handwritten claim across the board. The
          medallion chrome this replaces read as another site's component. */}
      <ul className="space-y-group">
        {strengths.items.map((item, index) => {
          const Icon = strengthIcons[item.icon];
          return (
            <li
              key={item.title}
              style={delay(0.38 + index * 0.06)}
              className={`motion-rise flex items-center gap-3 lg:gap-[0.85vw] ${strengthTilts[index]}`}
            >
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center text-yellow-500 lg:h-[clamp(2.4rem,min(3.2vw,5.7svh),4rem)] lg:w-[clamp(2.4rem,min(3.2vw,5.7svh),4rem)]">
                <Icon className="h-8 w-8 lg:h-[clamp(1.7rem,min(2.2vw,3.9svh),2.8rem)] lg:w-[clamp(1.7rem,min(2.2vw,3.9svh),2.8rem)]" />
                <Pen
                  aria-hidden="true"
                  className="absolute -right-[0.4em] -top-[0.35em] -rotate-6 text-[1.05rem] text-white/90 lg:text-[clamp(0.95rem,min(1.1vw,1.95svh),1.5rem)]"
                >
                  {index + 1}
                </Pen>
              </span>
              <span className="min-w-0">
                <strong className="display-flat block origin-left -skew-x-[4deg] font-headline text-[1.05rem] tracking-[-0.01em] text-white lg:text-[clamp(0.9rem,min(1.16vw,2.05svh),1.5rem)]">
                  {item.title}
                </strong>
                <span className="mt-tight block text-[0.8rem] font-medium leading-snug text-white/62 lg:text-[clamp(0.72rem,min(0.82vw,1.45svh),1.05rem)]">
                  {item.body}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** The lit counter, under the board. */
function IngredientCounter() {
  return (
    <div
      style={delay(0.56)}
      className="motion-rise relative mt-block rounded-data bg-navy-900 p-card shadow-lift ring-1 ring-white/12 lg:mt-0"
    >
      <h2 className="display-flat text-center font-headline text-[1.1rem] tracking-[-0.01em] text-white lg:text-left lg:text-[clamp(0.95rem,min(1.21vw,2.15svh),1.6rem)]">
        좋은 재료가 좋은 피자를 <span className="text-yellow-500">만듭니다</span>
      </h2>
      <ul className="mt-group grid grid-cols-3 gap-x-2 gap-y-4 sm:grid-cols-6 lg:gap-x-[1vw]">
        {ingredients.items.map((item) => (
          <li key={item.name} className="group text-center">
            <span className="mx-auto block h-[3.6rem] w-full transition-transform duration-300 group-hover:-translate-y-1 lg:h-[clamp(3rem,min(4.28vw,7.6svh),5.6rem)]">
              <Image
                src={item.src}
                alt=""
                width={260}
                height={220}
                sizes="(max-width: 640px) 26vw, (max-width: 1024px) 14vw, 9vw"
                className={`h-full w-full object-contain object-bottom ${PROP_SHADOW}`}
              />
            </span>
            <span className="display-flat mt-tight block font-headline text-[0.9rem] tracking-[-0.01em] text-white lg:text-[clamp(0.82rem,min(1.02vw,1.8svh),1.25rem)]">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The tall kitchen column, right of the board. */
function KitchenPanel() {
  return (
    <section
      style={delay(0.2)}
      className="motion-rise relative mt-block h-full min-h-[27rem] w-full overflow-hidden rounded-panel shadow-lift ring-1 ring-white/12 lg:mt-0 lg:min-h-0"
    >
      <KitchenVideo src={kitchen.video.src} poster={kitchen.video.poster} label={kitchen.video.label} />

      <div className="pointer-events-none relative z-10 p-card">
        <Pen className="block -rotate-2 text-[1.15rem] text-yellow-500 lg:text-[clamp(1rem,min(1.13vw,2svh),1.55rem)]">
          {kitchen.annotation}
        </Pen>
        <h2 className="lockup-3d mt-tight origin-left -skew-x-[5deg] -rotate-[1.4deg] font-headline text-[2.1rem] leading-[0.98] tracking-[-0.02em] text-white lg:text-[clamp(1.7rem,min(2.59vw,4.6svh),3.6rem)]">
          {kitchen.title}
        </h2>
        <p className="mt-group max-w-[19rem] text-[0.86rem] font-medium leading-[1.6] text-white/88 lg:max-w-[24svh] lg:text-[clamp(0.76rem,min(0.87vw,1.55svh),1.1rem)]">
          {kitchen.body[0]}, {kitchen.body[1]}
          <br />
          {kitchen.body[2]} {kitchen.body[3]}
        </p>
      </div>
    </section>
  );
}

/**
 * The closing band. It used to be four columns of contact detail, which read
 * as a business card welded to the bottom of a poster. It now opens with the
 * brand's own line — approved copy that had never been set — and lets the
 * store, the contact and the action follow underneath it.
 */
function BrandBanner() {
  return (
    <section
      id="brand-store"
      className="relative z-20 scroll-mt-[var(--header-offset)] bg-cream-ground text-navy-900"
    >
      <div className={`${BLEED} py-block`}>
        {/* ── Statement ── */}
        <div className="flex flex-col items-start gap-x-[1.4vw] gap-y-2 lg:flex-row lg:items-end">
          <div className="flex items-center gap-[0.6em]">
            <BrandMark
              className="h-[clamp(1.8rem,2.1vw,2.8rem)] w-auto shrink-0"
              color="var(--color-yellow-500)"
            />
            <h2 className="brand-headline-depth origin-left -skew-x-[4deg] -rotate-[1deg] font-headline text-[1.55rem] leading-none tracking-[-0.02em] lg:text-[clamp(1.5rem,2.5vw,3rem)]">
              피자는 역시,{" "}
              <span className="relative isolate inline-flex px-[0.12em]">
                <BrushHighlight />
                도우가 다르다
              </span>
            </h2>
          </div>

          <p className="font-script -rotate-1 text-[1.05rem] leading-none text-gold-600 lg:ml-[0.6vw] lg:text-[clamp(0.95rem,1.25vw,1.5rem)]">
            {masthead.script}
          </p>

          <ul className="flex flex-wrap gap-2 lg:ml-auto">
            {masthead.stamp.map((word) => (
              <li key={word}>
                <Stamp>{word}</Stamp>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Store · recommendation · action ──
            Four columns instead of three: the middle used to be one long
            stretched cell and everything right of it was desert. The photo
            fills its column, and the two seams are the only hairlines in the
            band — each column reads as one page of the same spread. */}
        <div className="mt-block grid grid-cols-1 gap-block lg:grid-cols-[17%_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch lg:gap-[1.8vw]">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-panel shadow-card lg:aspect-auto lg:h-full lg:min-h-0">
            <Image
              src={store.image.src}
              alt={store.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 17vw"
              className="object-cover object-center"
            />
          </figure>

          <div className="relative flex flex-col justify-center">
            <Pen className="block -rotate-2 text-[1.1rem] text-blue-hero lg:text-[clamp(1rem,min(1.1vw,1.95svh),1.5rem)]">
              {store.annotation}
            </Pen>
            <h3 className="brand-headline-depth mt-tight origin-left -skew-x-[5deg] -rotate-[1.2deg] font-headline text-[2rem] leading-[0.98] tracking-[-0.02em] lg:text-[clamp(1.7rem,min(2.48vw,4.4svh),3.2rem)]">
              {store.title}
            </h3>
            <p className="mt-group text-[0.88rem] font-medium leading-relaxed text-navy-900/70 lg:text-[clamp(0.78rem,min(0.9vw,1.6svh),1.08rem)]">
              {store.lead}
            </p>

            <dl className="mt-group space-y-tight text-[0.92rem] font-bold lg:text-[clamp(0.8rem,min(0.93vw,1.65svh),1.15rem)]">
              <div className="flex items-center gap-2.5">
                <dt className="sr-only">주소</dt>
                <PinIcon className="h-5 w-5 shrink-0 text-blue-hero" />
                <dd>{store.address}</dd>
              </div>
              <div className="flex items-center gap-2.5">
                <dt className="sr-only">전화</dt>
                <PhoneIcon className="h-5 w-5 shrink-0 text-blue-hero" />
                <dd>
                  <a href={store.phoneHref} className="tabular font-black transition-colors hover:text-blue-hero">
                    {store.phone}
                  </a>
                </dd>
              </div>
            </dl>

            {/* Chip labels come from store.chips; 방문포장 is pickup, so the
                second chip is a tag, not the scooter it used to carry. */}
            <ul className="mt-group flex flex-wrap gap-2">
              {store.chips.map((chip) => {
                const ChipIcon = chip.icon === "scooter" ? BuildingIcon : TagIcon;
                return (
                  <li
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-band bg-yellow-500/16 px-3 py-2 text-[0.78rem] font-black leading-tight lg:text-[clamp(0.7rem,min(0.76vw,1.35svh),0.98rem)]"
                  >
                    <ChipIcon className="h-5 w-5 shrink-0 text-gold-600" />
                    {chip.label}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Who the dough is for — approved copy that had never been set.
              The seam turns horizontal on a phone, where the stacked columns
              otherwise run together as one long list. */}
          <div className="flex flex-col justify-center border-t border-hairline pt-block lg:border-t-0 lg:pt-0 lg:border-l lg:pl-[1.8vw]">
            <h3 className="brand-headline-depth font-headline text-[1.5rem] leading-tight tracking-[-0.02em] lg:text-[clamp(1.25rem,min(1.6vw,2.85svh),2.1rem)]">
              {recommend.title}
            </h3>
            <ul className="mt-group space-y-2.5 lg:space-y-[0.7vw]">
              {recommend.items.map((item) => {
                const Icon = recommendIcons[item.icon];
                return (
                  <li key={item.lines[0]} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-yellow-500 lg:h-[clamp(2.2rem,min(2.6vw,4.6svh),3rem)] lg:w-[clamp(2.2rem,min(2.6vw,4.6svh),3rem)]">
                      <Icon className="h-5 w-5 lg:h-[clamp(1rem,min(1.2vw,2.1svh),1.4rem)] lg:w-[clamp(1rem,min(1.2vw,2.1svh),1.4rem)]" />
                    </span>
                    <span className="text-[0.88rem] font-bold leading-snug lg:text-[clamp(0.78rem,min(0.9vw,1.6svh),1.08rem)]">
                      {item.lines.join(" ")}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col justify-center border-t border-hairline pt-block lg:border-t-0 lg:pt-0 lg:border-l lg:pl-[1.8vw]">
            <Pen className="block -rotate-2 text-[1.1rem] text-blue-hero lg:text-[clamp(1rem,min(1.1vw,1.95svh),1.5rem)]">
              {store.aside[0]}
              <br />
              {store.aside[1]}
            </Pen>

            <h3 className="brand-headline-depth mt-group font-headline text-[1.5rem] leading-tight tracking-[-0.02em] lg:text-[clamp(1.25rem,min(1.6vw,2.85svh),2.1rem)]">
              {menuCta.headline.map((part) => (
                <span key={part.text} className={part.tone === "gold" ? "text-yellow-600" : undefined}>
                  {part.text}
                </span>
              ))}
            </h3>
            <p className="mt-tight text-[0.85rem] font-medium leading-relaxed text-navy-900/64 lg:text-[clamp(0.76rem,min(0.87vw,1.55svh),1.05rem)]">
              {menuCta.body[0]}
              <br />
              {menuCta.body[1]}
            </p>

            {/* Round, like every other action on this site, and the gold glow
                is a hover answer — never the rest state. */}
            <Link
              href={menuCta.primary.href}
              className="group relative mt-group inline-flex min-h-[3.4rem] items-center gap-3 self-start rounded-full border border-yellow-600 bg-yellow-500 pl-6 pr-14 text-[1.05rem] font-black text-navy-900 shadow-raise transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-gold lg:min-h-[clamp(3.2rem,min(3.6vw,6.4svh),4.4rem)] lg:text-[clamp(0.95rem,min(1.18vw,2.1svh),1.5rem)]"
            >
              {menuCta.primary.label}
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-24 rotate-[-6deg] transition-transform duration-300 group-hover:scale-105 lg:-bottom-4 lg:-right-6 lg:h-20 lg:w-28">
                <Image
                  src="/assets/user/brand/cta-pizza-slice-20260819.webp"
                  alt=""
                  fill
                  sizes="112px"
                  className={`object-contain ${PROP_SHADOW}`}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandPage() {
  return (
    <>
      <SiteHeader activeHref="/brand" />

      <main className="overflow-x-hidden bg-blue-hero text-white">
        <div id="top" className="relative isolate flex flex-col lg:min-h-svh">
          <div id="dough" className="absolute inset-x-0 top-0 h-px" aria-hidden="true" />

          {/* Field: the comp's kitchen burning under the house blue, with the
              light pooled where the board sits rather than lit flat. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Image
              src="/assets/user/brand/cinematic-kitchen-bg-20260819.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-[0.22] mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-[radial-gradient(58%_54%_at_44%_40%,rgba(120,158,255,0.42),transparent_72%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_45%,transparent_38%,rgba(1,18,64,0.72))]" />
            <div className="absolute -left-[20%] top-[30%] h-[42%] w-[150%] -rotate-[8deg] bg-white/[0.035]" />
            <div className="absolute -left-[20%] top-[29.6%] h-[2px] w-[150%] -rotate-[8deg] bg-white/[0.14]" />
            <CrownWatermark className="pointer-events-none absolute -left-[9rem] bottom-[3%] h-[26rem] w-auto text-white/[0.05] lg:-left-[11rem] lg:h-[34rem]" />
          </div>

          <div className={`${BLEED} flex flex-1 flex-col pb-7 pt-lead lg:pb-[2.2svh]`}>
            <div className="flex flex-1 flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_25vw] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-gutter">
              {/* Left field — headline over the board, strengths at its shoulder. */}
              <div className="flex flex-col lg:[grid-area:1/1/2/2]">
                <h1
                  style={delay(0.06)}
                  className="motion-rise lockup-3d relative z-30 origin-left -skew-x-[6deg] font-headline leading-[0.97] tracking-[-0.02em]"
                >
                  <span className="block origin-left -rotate-[1.4deg] text-[2.3rem] sm:text-[3rem] lg:text-[clamp(2.1rem,min(3.6vw,6.4svh),4.9rem)]">
                    {hero.headline[0]}
                  </span>
                  <span
                    style={delay(0.3)}
                    className="motion-punch mt-[0.06em] block origin-left -rotate-[2.6deg] pl-[0.4em] text-[2.85rem] text-yellow-500 sm:text-[3.7rem] lg:text-[clamp(2.6rem,min(4.44vw,7.9svh),6.1rem)]"
                  >
                    {hero.headline[1]}
                  </span>
                </h1>

                <div className="mt-5 flex flex-1 flex-col gap-6 lg:mt-[1svh] lg:grid lg:grid-cols-[13.5vw_minmax(0,1fr)_15vw] lg:items-center lg:gap-x-[1vw]">
                  <div className="relative z-20 lg:order-1">
                    {/* The claim in the page's own hand — the pill it replaced
                        was the one element on the sheet speaking plain UI. */}
                    {/* `block`, like every other Pen on the sheet. An
                        inline-block here shrink-wraps to MIN-content — one
                        어절 per line — under the page's global
                        `text-wrap: pretty` + `keep-all`; the nowrap spans pin
                        the two lines regardless. */}
                    <p style={delay(0.16)} className="motion-rise">
                      <Pen className="block -rotate-2 text-[1.3rem] text-yellow-500 lg:text-[clamp(1.05rem,min(1.3vw,2.3svh),1.8rem)]">
                        <span className="whitespace-nowrap">{hero.bubbleLines[0]}</span>
                        <br />
                        <span className="whitespace-nowrap">{hero.bubbleLines[1]}</span>
                      </Pen>
                    </p>
                    {/* Same voice as the menu hero's lead: bold, slightly
                        skewed, and the brand name is the sentence's one gold
                        word rather than a second shade of white. */}
                    <p
                      style={delay(0.16)}
                      className="motion-rise mt-group origin-left -skew-x-[3deg] text-balance text-[0.88rem] font-bold leading-[1.7] tracking-[-0.02em] text-white/85 lg:text-[clamp(0.72rem,min(0.87vw,1.55svh),1.08rem)]"
                    >
                      {hero.body.map((part, index) =>
                        part.strong ? (
                          <strong
                            key={index}
                            className={`font-black ${part.text.includes("최강피자") ? "text-yellow-500" : "text-white"}`}
                          >
                            {part.text}
                          </strong>
                        ) : (
                          <span key={index}>{part.text}</span>
                        ),
                      )}
                    </p>
                  </div>

                  {/* The board, its grain bed, and the crumb ring. The farro
                      keeps its own colour and its own airspace under the
                      board — a food photograph washed into the field reads as
                      spoiled, and crumbs over the toppings read as dirt. */}
                  <div
                    style={delay(0.12)}
                    className="motion-swell relative lg:order-2 lg:-mt-[3svh] lg:w-[112%] lg:max-w-none lg:-translate-x-[5%]"
                  >
                    <div className="relative aspect-[1530/969]">
                      <CrumbScatter className="pointer-events-none absolute -inset-[6%] -z-10 h-[112%] w-[112%]" />
                      <Image
                        src={hero.farro.ears}
                        alt=""
                        aria-hidden="true"
                        width={900}
                        height={890}
                        sizes="(max-width: 1024px) 26vw, 12vw"
                        className={`pointer-events-none absolute -left-[7%] bottom-[6%] -z-10 w-[26%] -rotate-[18deg] ${PROP_SHADOW}`}
                      />
                      <Image
                        src={hero.farro.bed}
                        alt=""
                        aria-hidden="true"
                        width={1200}
                        height={390}
                        sizes="(max-width: 1024px) 66vw, 30vw"
                        className={`pointer-events-none absolute -bottom-[4%] left-1/2 -z-10 w-[70%] -translate-x-1/2 ${PROP_SHADOW}`}
                      />
                      <Image
                        src={hero.pizza.src}
                        alt={hero.pizza.alt}
                        fill
                        priority
                        quality={90}
                        sizes="(max-width: 1024px) 100vw, 46vw"
                        className={`object-contain ${SUBJECT_SHADOW}`}
                      />
                    </div>

                    {/* The sheet names the pizza it is showing. */}
                    <Link
                      href="/menu"
                      className="group absolute -bottom-1 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-navy-900/85 px-3.5 py-1.5 text-[0.72rem] font-black text-white ring-1 ring-white/15 transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-[-50%] lg:text-[clamp(0.66rem,min(0.76vw,1.35svh),0.95rem)]"
                    >
                      {hero.pizza.name}
                      <ArrowRightIcon className="h-3.5 w-3.5 text-yellow-500 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  <div className="lg:order-3">
                    <StrengthStack />
                  </div>
                </div>
              </div>

              <div className="lg:[grid-area:2/1/3/2]">
                <IngredientCounter />
              </div>

              <div className="flex lg:[grid-area:1/2/3/3]">
                <KitchenPanel />
              </div>
            </div>
          </div>

          <BrandBanner />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
