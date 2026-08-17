import Image from "next/image";
import { reviewProof as data } from "@/lib/home-content";

/**
 * 88 keeps its structure; only the card and ground move from navy to the
 * bright brand blue the client asked for. The collage behind is the real
 * review captures, dimmed so the claim stays legible on top of them.
 */
export function ReviewProofSection() {
  return (
    <section id="review-proof" className="app-screen-snap-target relative isolate overflow-hidden bg-blue-band">
      {/* Explicit row sizing: the tiles hold `fill` images, which are absolutely
          positioned, so auto rows would collapse to zero height. */}
      <ul
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid grid-cols-3 grid-rows-6 gap-2 p-2 md:grid-cols-4 md:grid-rows-5 lg:grid-cols-6 lg:grid-rows-3 lg:gap-3 lg:p-3"
      >
        {data.slides.map((slide) => (
          <li key={slide.src} className="relative overflow-hidden rounded-lg bg-white/70">
            <Image
              src={slide.src}
              alt=""
              fill
              /* Already small WebP captures shown at thumbnail scale behind a
                 heavy scrim — re-encoding 17 of them buys nothing. */
              unoptimized
              sizes="(max-width: 768px) 34vw, 17vw"
              className="object-cover object-left-top"
            />
          </li>
        ))}
      </ul>

      {/* The captures are the proof, so the wash only has to separate the card
          from them — not hide them. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,72,227,0.62)_0%,rgba(1,72,227,0.3)_44%,rgba(1,72,227,0.14)_100%)]"
      />

      <div className="relative mx-auto flex w-full max-w-[93.25rem] items-center justify-center px-5 py-20 md:px-8 lg:min-h-[46vw] lg:px-0 lg:py-[5vw]">
        <div className="motion-reveal w-full max-w-[30rem] rounded-2xl bg-blue-band px-8 py-10 text-center text-white shadow-[0_30px_80px_rgba(1,23,80,0.5)] ring-1 ring-white/20 lg:max-w-[32vw] lg:px-[3vw] lg:py-[2.8vw]">
          <p className="text-[0.85rem] font-black tracking-[0.14em] text-yellow-500 lg:text-[clamp(0.8rem,1vw,1.05rem)]">
            {data.year}
          </p>
          <p className="mt-3 text-[1.1rem] font-black tracking-[-0.03em] lg:mt-[0.8vw] lg:text-[clamp(1.05rem,1.42vw,1.5rem)]">
            {data.lead}
          </p>
          <p className="mt-2 text-[2.9rem] font-black leading-[1.06] tracking-[-0.05em] lg:mt-[0.5vw] lg:text-[clamp(3rem,4.6vw,4.85rem)]">
            <span className="block">{data.headlineLead}</span>
            <span className="block">
              <span className="text-red-500">{data.headlineAccent}</span>
              <span className="ml-[0.16em]">{data.headlineTail}</span>
            </span>
          </p>
          <div className="mt-5 space-y-1 text-[0.9rem] text-white/80 lg:mt-[1.3vw] lg:text-[clamp(0.85rem,1.02vw,1.07rem)]">
            {data.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-6 inline-flex items-center gap-3 rounded-full bg-navy-900 px-6 py-3 lg:mt-[1.6vw] lg:px-[1.8vw] lg:py-[0.8vw]">
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
