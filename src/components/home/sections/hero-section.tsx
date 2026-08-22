import Image from "next/image";
import type { CSSProperties } from "react";
import { CrownWatermark, CrumbScatter } from "@/components/decor/field-decor";
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

function BestSeal() {
  return (
    <div className="absolute right-[4%] top-[11%] z-20 flex aspect-square w-[3.9rem] items-center justify-center rounded-full bg-ivory text-red-hero shadow-raise lg:right-auto lg:left-[75.2%] lg:top-[11.3%] lg:w-[14.2%]">
      <span className="absolute inset-[9%] rounded-full border-2 border-dashed border-red-hero/60" />
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
      className="app-screen-snap-target section-screen relative isolate overflow-hidden bg-red-hero text-white"
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
      <div className="mx-auto grid w-full max-w-[83.25rem] grid-cols-1 items-center gap-10 px-5 pb-16 pt-[7rem] md:px-8 lg:w-[min(83.25rem,100%-11.4rem)] lg:max-w-none lg:grid-cols-[53.3%_46.7%] lg:items-center lg:gap-0 lg:px-0 lg:pb-0 lg:pt-0 min-[1400px]:grid-cols-[53.3%_55.6%]">
        <div className="relative z-10 max-w-[41rem] lg:pr-8">
          <p
            className="motion-rise flex gap-2 text-[0.9rem] leading-none text-yellow-500 lg:gap-[0.56vw] lg:text-[0.86vw]"
            aria-hidden="true"
          >
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </p>

          {/* Set in the display face with the menu hero's dimensional ring and
              its staggered tilt, so the two first screens letter the brand the
              same way. The comp's word-level gold/white alternation is kept —
              that device belongs to this headline, not to the face. The clamp
              runs under the old Pretendard one because this face sets wider
              per syllable at the same size. */}
          <h1
            style={delay(0.08)}
            className="motion-rise headline-3d mt-group origin-left -skew-x-[6deg] font-headline leading-[0.99] tracking-[-0.02em]"
          >
            {hero.headline.map((line, lineIndex) => (
              <span
                key={lineIndex}
                className={`block origin-left ${
                  lineIndex === 0 ? "-rotate-[1.4deg]" : "-rotate-[0.5deg] pt-[0.06em]"
                } text-[2.7rem] sm:text-[3.8rem] lg:text-[clamp(3.4rem,6.1vw,6.5rem)]`}
              >
                {line.map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className={`${word.tone === "gold" ? "text-yellow-500" : "text-white"} ${
                      wordIndex > 0 ? "ml-[0.24em]" : ""
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
            className="motion-rise mt-block text-[1.4rem] font-black tracking-[-0.042em] sm:text-[1.75rem] lg:text-[clamp(1.5rem,1.97vw,2.06rem)]"
          >
            {hero.subheadLead}
            <span className="text-yellow-500">{hero.subheadAccent}</span>
          </p>

          <div
            style={delay(0.22)}
            className="motion-rise mt-group space-y-2 text-[1rem] text-white/80 lg:space-y-tight lg:text-[clamp(0.95rem,1.14vw,1.19rem)]"
          >
            {hero.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <ul
            style={delay(0.3)}
            className="motion-rise mt-block flex flex-wrap items-center gap-x-6 gap-y-5 sm:flex-nowrap sm:gap-x-0"
          >
            {hero.proofs.map((proof, index) => {
              const Icon = proofIcons[proof.icon];
              return (
                <li
                  key={proof.title}
                  className={`flex shrink-0 items-center gap-2.5 ${
                    index > 0
                      ? "sm:ml-5 sm:self-stretch sm:border-l sm:border-white/35 sm:pl-5 lg:ml-[1.55vw] lg:pl-[1.55vw]"
                      : ""
                  }`}
                >
                  <Icon className="h-10 w-10 shrink-0 text-yellow-500 lg:h-[2.9vw] lg:w-[2.9vw]" />
                  <span className="block">
                    <span className="block whitespace-nowrap text-[1rem] font-black tracking-[-0.03em] text-white lg:text-[clamp(0.88rem,1.08vw,1.14rem)]">
                      {proof.title}
                    </span>
                    <span className="mt-1 block whitespace-nowrap text-[0.78rem] text-white/85 lg:text-[clamp(0.7rem,0.85vw,0.9rem)]">
                      {proof.note}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="motion-swell relative z-0 mx-auto w-full max-w-[32rem] lg:mx-0 lg:max-w-none min-[1400px]:-mr-[8.86%]">
          <div className="relative aspect-square w-full">
            <CrumbScatter className="pointer-events-none absolute -inset-[8%] h-[116%] w-[116%]" />
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain drop-shadow-[0_30px_58px_rgba(42,10,6,0.42)]"
            />
            <BestSeal />
          </div>
        </div>
      </div>
    </section>
  );
}
