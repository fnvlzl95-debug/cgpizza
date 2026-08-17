import Image from "next/image";
import type { CSSProperties } from "react";
import { ChefIcon, LeafIcon, MedalIcon } from "@/components/home/icons";
import { hero } from "@/lib/home-content";

/**
 * Geometry is taken from 11-첫화면.png (1672×941). Display sizes are
 * expressed as vw fractions of that comp width so the composition holds its
 * proportions at every desktop size instead of only at 1672.
 */

const proofIcons = {
  leaf: LeafIcon,
  chef: ChefIcon,
  medal: MedalIcon,
} as const;

const delay = (seconds: number) => ({ "--motion-delay": `${seconds}s` }) as CSSProperties;

/** Crown mark, mostly off the left edge in the comp. */
function CrownWatermark() {
  return (
    <svg
      viewBox="0 0 200 240"
      aria-hidden="true"
      className="pointer-events-none absolute -left-[8.5rem] top-16 h-[26rem] w-auto text-white/[0.06] lg:-left-[11rem] lg:top-[5.5rem] lg:h-[36rem]"
    >
      <path
        d="M12 24 100 214 188 24l-50 92-38-70-38 70-50-92Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Toasted crumb and salt scatter, in the comp's two clusters — off the
 * pizza's upper right and lower left — rather than an even field.
 */
function CrumbScatter({ className }: { className: string }) {
  // [cx, cy, r, opacity, salt] in a 100×100 field over the pizza box.
  const crumbs = [
    [78, 2, 0.5, 0.9, false], [83, 6, 0.34, 0.75, false], [88, 3, 0.42, 0.85, false],
    [92, 8, 0.28, 0.6, true], [86, 11, 0.55, 0.95, false], [95, 4, 0.36, 0.8, true],
    [90, 14, 0.3, 0.65, false], [97, 11, 0.44, 0.7, true], [81, 9, 0.26, 0.55, true],
    [94, 17, 0.32, 0.6, false], [99, 7, 0.3, 0.55, true],
    [10, 92, 0.52, 0.9, false], [5, 88, 0.34, 0.7, false], [15, 96, 0.4, 0.85, false],
    [2, 95, 0.28, 0.6, true], [19, 90, 0.46, 0.8, false], [8, 98, 0.3, 0.65, true],
    [23, 97, 0.36, 0.7, false], [13, 85, 0.24, 0.5, true], [27, 93, 0.3, 0.6, false],
  ] as const;

  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      {crumbs.map(([cx, cy, r, opacity, salt], index) => (
        <circle key={index} cx={cx} cy={cy} r={r} fill={salt ? "#FFFFFF" : "#D2984E"} opacity={opacity} />
      ))}
    </svg>
  );
}

function BestSeal() {
  return (
    <div className="absolute right-[4%] top-[11%] z-20 flex aspect-square w-[3.9rem] items-center justify-center rounded-full bg-red-500 text-white shadow-[0_12px_28px_rgba(1,23,80,0.4)] lg:right-auto lg:left-[75.2%] lg:top-[11.3%] lg:w-[14.2%]">
      <span className="absolute inset-[9%] rounded-full border-2 border-dashed border-white/85" />
      <span className="relative flex flex-col items-center leading-none">
        <span className="text-[0.42rem] tracking-[0.18em] lg:text-[0.62vw]">★★★</span>
        <span className="mt-[0.18rem] text-[0.85rem] font-black tracking-[0.01em] lg:text-[1.35vw]">
          {hero.badge}
        </span>
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="app-screen-snap-target relative isolate overflow-hidden bg-blue-hero text-white lg:min-h-[56.3vw] lg:max-h-[62rem]"
    >
      <CrownWatermark />

      {/* Two rosemary sprigs, each entering from the right frame edge. */}
      <Image
        src="/assets/user/hero-rosemary-top.webp"
        alt=""
        width={930}
        height={500}
        aria-hidden="true"
        className="pointer-events-none absolute -right-[19vw] top-[16%] hidden h-auto w-[27vw] select-none lg:block"
      />
      <Image
        src="/assets/user/hero-rosemary-bottom.webp"
        alt=""
        width={800}
        height={414}
        aria-hidden="true"
        className="pointer-events-none absolute -right-[16vw] top-[81%] hidden h-auto w-[23vw] select-none lg:block"
      />

      {/* pt 5.75rem clears the 96px header; the per-column top padding then
          places each block at its comp coordinate (text 218, pizza 100). */}
      <div className="mx-auto grid w-full max-w-[83.25rem] grid-cols-1 items-center gap-10 px-5 pb-16 pt-[7rem] md:px-8 lg:grid-cols-[53.3%_55.6%] lg:items-start lg:gap-0 lg:px-0 lg:pb-0 lg:pt-[5.75rem]">
        <div className="relative z-10 max-w-[41rem] lg:pr-8 lg:pt-[7.54vw]">
          <p
            className="motion-rise flex gap-2 text-[0.9rem] leading-none text-yellow-500 lg:gap-[0.56vw] lg:text-[0.86vw]"
            aria-hidden="true"
          >
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </p>

          <h1
            style={delay(0.08)}
            className="motion-rise mt-[3.2vw] text-[3.1rem] font-black leading-[1.04] tracking-[-0.052em] sm:text-[4.4rem] lg:mt-[2.1vw] lg:text-[clamp(4.4rem,7.06vw,7.4rem)]"
          >
            {hero.headline.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className={`${word.tone === "gold" ? "text-yellow-500" : "text-white"} ${
                      wordIndex > 0 ? "ml-[0.3em]" : ""
                    }`}
                  >
                    {word.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p
            style={delay(0.16)}
            className="motion-rise mt-7 text-[1.4rem] font-black tracking-[-0.042em] sm:text-[1.75rem] lg:mt-[2.5vw] lg:text-[clamp(1.5rem,1.97vw,2.06rem)]"
          >
            {hero.subheadLead}
            <span className="text-yellow-500">{hero.subheadAccent}</span>
          </p>

          <div
            style={delay(0.22)}
            className="motion-rise mt-6 space-y-2 text-[1rem] text-white/80 lg:mt-[1.68vw] lg:space-y-[0.5vw] lg:text-[clamp(0.95rem,1.14vw,1.19rem)]"
          >
            {hero.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <ul
            style={delay(0.3)}
            className="motion-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-5 sm:flex-nowrap sm:gap-x-0 lg:mt-[2.54vw]"
          >
            {hero.proofs.map((proof, index) => {
              const Icon = proofIcons[proof.icon];
              return (
                <li
                  key={proof.title}
                  className={`flex shrink-0 items-center gap-2.5 ${
                    index > 0
                      ? "sm:ml-5 sm:border-l sm:border-white/25 sm:pl-5 lg:ml-[1.55vw] lg:pl-[1.55vw]"
                      : ""
                  }`}
                >
                  <Icon className="h-9 w-9 shrink-0 text-yellow-500 lg:h-[2.4vw] lg:w-[2.4vw]" />
                  <span className="block">
                    <span className="block whitespace-nowrap text-[0.98rem] font-black tracking-[-0.03em] text-yellow-500 lg:text-[clamp(0.85rem,1.02vw,1.07rem)]">
                      {proof.title}
                    </span>
                    <span className="mt-0.5 block whitespace-nowrap text-[0.78rem] text-white/70 lg:text-[clamp(0.68rem,0.78vw,0.82rem)]">
                      {proof.note}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="motion-swell relative z-0 mx-auto w-full max-w-[32rem] lg:mx-0 lg:-mr-[8.86%] lg:max-w-none lg:pt-[0.48vw]">
          <div className="relative aspect-square w-full">
            <CrumbScatter className="pointer-events-none absolute -inset-[8%] h-[116%] w-[116%]" />
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain drop-shadow-[0_30px_58px_rgba(1,23,80,0.42)]"
            />
            <BestSeal />
          </div>
        </div>
      </div>
    </section>
  );
}
