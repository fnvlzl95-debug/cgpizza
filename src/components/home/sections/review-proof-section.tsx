import Image from "next/image";
import type { CSSProperties } from "react";
import { EyebrowPill } from "@/components/home/ui/eyebrow-pill";
import { reviewProof as data } from "@/lib/home-content";

/**
 * 88's instruction is 그데로, 파랑색만 밝은색으로 — keep it as it is, only the
 * blue goes bright. So the recolour lands on the centred panel alone and the
 * captures stay in full colour: they are the section's evidence, and a tint
 * over them removes the only thing it exists to show.
 *
 * The two counter-running rows are the original showcase's behaviour, rebuilt
 * as a CSS marquee.
 */

/** Three rows fill the frame the way 88 does; the middle one runs the other
 *  way so the wall reads as motion rather than one sliding sheet. */
const rows = [
  { slides: data.slides, direction: "left" as const, duration: "104s" },
  { slides: [...data.slides].reverse(), direction: "right" as const, duration: "126s" },
  { slides: [...data.slides.slice(6), ...data.slides.slice(0, 6)], direction: "left" as const, duration: "116s" },
];

function ReviewCard({ slide }: { slide: (typeof data.slides)[number] }) {
  return (
    <div className="w-[15rem] shrink-0 sm:w-[19rem] lg:w-[21vw]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-hairline bg-white shadow-card">
        <Image
          src={slide.src}
          alt=""
          fill
          /* Already small WebP captures — re-encoding them buys nothing. */
          unoptimized
          sizes="(max-width: 640px) 60vw, (max-width: 1024px) 34vw, 21vw"
          className="object-cover object-left-top"
        />
      </div>
    </div>
  );
}

function MarqueeRow({ slides, direction, duration }: (typeof rows)[number]) {
  const run = (group: string) => (
    <div className="flex w-max shrink-0 flex-nowrap gap-4 pr-4 lg:gap-group lg:pr-group">
      {slides.map((slide, index) => (
        <ReviewCard key={`${group}-${slide.src}-${index}`} slide={slide} />
      ))}
    </div>
  );

  return (
    <div className="marquee-viewport overflow-hidden" aria-hidden="true">
      <div
        className="marquee-track"
        data-direction={direction}
        style={{ "--marquee-duration": duration } as CSSProperties}
      >
        {run("a")}
        {run("b")}
      </div>
    </div>
  );
}

export function ReviewProofSection() {
  return (
    <section
      id="review-proof"
      className="app-screen-snap-target section-screen relative isolate overflow-hidden bg-mist py-section"
    >
      <div className="flex flex-col gap-4 lg:gap-group">
        {rows.map((row) => (
          <MarqueeRow key={row.duration} {...row} />
        ))}
      </div>

      {/* The panel sits over the moving rows, so it needs its own ground. */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-5">
        <div className="motion-reveal pointer-events-auto w-full max-w-[28rem] rounded-card bg-blue-band px-8 py-block text-center text-white shadow-lift lg:max-w-[31vw] lg:px-card">
          <EyebrowPill label={data.pill} tone="contrast" />
          <p className="mt-group text-[0.85rem] font-black tracking-[0.14em] text-yellow-500 lg:text-[clamp(0.8rem,1vw,1.05rem)]">
            {data.year}
          </p>
          <p className="mt-group text-[1.1rem] font-black tracking-[-0.03em] lg:text-[clamp(1.05rem,1.42vw,1.5rem)]">
            {data.lead}
          </p>
          <p className="mt-tight text-[2.9rem] font-black leading-[1.06] tracking-[-0.05em] lg:text-[clamp(3rem,4.6vw,4.85rem)]">
            <span className="block">{data.headlineLead}</span>
            <span className="block">
              <span className="text-red-500">{data.headlineAccent}</span>
              <span className="ml-[0.16em]">{data.headlineTail}</span>
            </span>
          </p>
          <div className="mt-group space-y-1 text-[0.9rem] text-white/85 lg:text-[clamp(0.85rem,1.02vw,1.07rem)]">
            {data.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-block inline-flex items-center gap-3 rounded-full bg-navy-900 px-6 py-3 lg:px-pill lg:py-tight">
            <span aria-hidden="true" className="text-[0.95rem] tracking-[0.14em] text-yellow-500">
              ★★★★★
            </span>
            <span className="text-[0.95rem] font-black tracking-[-0.02em] lg:text-[clamp(0.9rem,1.08vw,1.14rem)]">
              {data.score}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
