import Image from "next/image";
import { reviewProof as data } from "@/lib/home-content";

/**
 * 88's instruction is 그데로, 파랑색만 밝은색으로 — keep it as it is, only the
 * blue goes bright. So the recolour applies to the centred panel alone; the
 * review captures stay in full colour on a pale field, because those captures
 * are the section's evidence and a tint over them destroys its whole job.
 */
export function ReviewProofSection() {
  return (
    <section
      id="review-proof"
      className="app-screen-snap-target relative isolate overflow-hidden bg-[#EEF1F7]"
    >
      {/* Explicit row sizing: the tiles hold `fill` images, which are absolutely
          positioned, so auto rows would collapse to zero height. */}
      <ul
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-4 gap-3 p-3 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:p-4"
      >
        {data.slides.slice(0, 6).map((slide) => (
          <li
            key={slide.src}
            className="relative overflow-hidden rounded-xl bg-white shadow-[0_10px_28px_rgba(1,23,80,0.1)]"
          >
            <Image
              src={slide.src}
              alt=""
              fill
              /* Already small WebP captures — re-encoding them buys nothing. */
              unoptimized
              sizes="(max-width: 768px) 50vw, 34vw"
              className="object-cover object-left-top"
            />
          </li>
        ))}
      </ul>

      <div className="relative mx-auto flex w-full max-w-[93.25rem] items-center justify-center px-5 py-20 md:px-8 lg:min-h-[46vw] lg:px-0 lg:py-[5vw]">
        <div className="motion-reveal w-full max-w-[30rem] rounded-2xl bg-blue-band px-8 py-10 text-center text-white shadow-[0_34px_90px_rgba(1,23,80,0.42)] lg:max-w-[32vw] lg:px-[3vw] lg:py-[2.8vw]">
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
          <div className="mt-5 space-y-1 text-[0.9rem] text-white/85 lg:mt-[1.3vw] lg:text-[clamp(0.85rem,1.02vw,1.07rem)]">
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
