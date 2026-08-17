import Image from "next/image";
import { EyebrowPill } from "@/components/home/ui/eyebrow-pill";
import { philosophy as data } from "@/lib/home-content";

/**
 * Geometry from 33-수정후.png. The ground turns from paper to brand blue
 * behind the lower third of the card, so the card straddles the seam.
 */
export function PhilosophySection() {
  return (
    <section id="philosophy" className="app-screen-snap-target section-screen relative bg-paper py-section">
      {/* Blue band the card crosses into. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[22%] bg-blue-band lg:h-[28%]"
      />

      <div className="relative mx-auto w-full max-w-[93.25rem] px-5 md:px-8 lg:px-0">
        <div className="flex justify-center">
          <EyebrowPill label={data.pill} tone="outline" sparks />
        </div>

        <div className="motion-reveal mt-block text-center">
          <h2 className="text-navy-900">
            <span className="block text-[1.7rem] font-bold tracking-[-0.04em] lg:text-[clamp(1.9rem,2.9vw,3.05rem)]">
              {data.headlineLead}
            </span>
            <span className="mt-1 block text-[2.4rem] font-black leading-[1.1] tracking-[-0.05em] lg:mt-[0.2vw] lg:text-[clamp(2.7rem,5.15vw,5.4rem)]">
              {data.headlineStrong}
            </span>
          </h2>
        </div>

        <div className="motion-reveal mt-block grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-[0_26px_60px_rgba(1,23,80,0.14)] lg:grid-cols-2">
          <div className="relative flex items-center gap-4 px-6 py-block lg:px-[3vw]">
            <div className="min-w-0 flex-1">
              <svg
                viewBox="0 0 40 30"
                aria-hidden="true"
                className="h-8 w-10 text-blue-band lg:h-[2.4vw] lg:w-[3vw]"
              >
                <path
                  fill="currentColor"
                  d="M0 30V16.8C0 7.5 5.2 1.9 15.1 0l1.9 5.4c-5.8 1.5-8.7 4.6-8.7 9.3H17V30H0Zm23 0V16.8C23 7.5 28.2 1.9 38.1 0L40 5.4c-5.8 1.5-8.7 4.6-8.7 9.3H40V30H23Z"
                />
              </svg>

              <p className="mt-group text-[1.5rem] leading-[1.55] tracking-[-0.04em] text-navy-900 lg:text-[clamp(1.6rem,2.35vw,2.5rem)]">
                {data.quote.map((line, lineIndex) => (
                  <span key={lineIndex} className="block whitespace-nowrap">
                    {line.map((part, partIndex) => (
                      <span
                        key={partIndex}
                        className={`${partIndex > 0 ? "ml-[0.2em]" : ""} ${
                          part.strong ? "font-black" : "font-medium"
                        }`}
                      >
                        {part.text}
                      </span>
                    ))}
                  </span>
                ))}
              </p>

              <div className="mt-block space-y-1.5 text-[0.92rem] text-navy-900/65 lg:text-[clamp(0.85rem,1.05vw,1.1rem)]">
                {data.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <Image
              src={data.mascot.src}
              alt=""
              width={639}
              height={804}
              aria-hidden="true"
              className="hidden h-auto w-[11vw] shrink-0 self-end select-none lg:block"
            />
          </div>

          <div className="relative min-h-[15rem] lg:min-h-0">
            <Image
              src={data.storeImage.src}
              alt={data.storeImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
