import Image from "next/image";
import { GrowthArt, TargetArt } from "@/components/home/icons";
import { EyebrowPill } from "@/components/home/ui/eyebrow-pill";
import { focusSystem as data } from "@/lib/home-content";

/** Geometry from 77-중간 수정후.png: yellow ground, four cream cards, navy operators. */

const artByName = {
  target: TargetArt,
  growth: GrowthArt,
} as const;

function CardArt({ art }: { art: (typeof data.cards)[number]["art"] }) {
  if (art.kind === "image") {
    return (
      <Image
        src={art.src}
        alt=""
        width={720}
        height={720}
        aria-hidden="true"
        /* Lossless source, small file, flat fields — a second lossy pass at
           the optimiser's default quality is all cost and no saving. */
        unoptimized
        className="h-full w-full object-cover"
      />
    );
  }

  const Art = artByName[art.name as keyof typeof artByName];
  return <Art className="h-[62%] w-[62%] text-ink-900" />;
}

function Operator({ symbol }: { symbol: string }) {
  return (
    <span
      aria-hidden="true"
      className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-ink-900 text-[1.5rem] font-black leading-none text-yellow-500 shadow-raise lg:h-[min(4.13vw,7.3vh)] lg:w-[min(4.13vw,7.3vh)] lg:text-[clamp(1.4rem,2vw,2.1rem)]"
    >
      {symbol}
    </span>
  );
}

export function FocusSystemSection() {
  return (
    <section
      id="focus-system"
      className="app-screen-snap-target section-screen section-lead relative overflow-hidden bg-yellow-500"
    >
      {/* Faint grid the comp lays over the yellow field. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(to_right,rgba(42,10,6,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(42,10,6,0.35)_1px,transparent_1px)] [background-size:56px_56px]"
      />

      <div className="relative mx-auto w-full max-w-[93.25rem] px-5 md:px-8 lg:w-[min(93.25rem,100%-5.4rem)] lg:max-w-none lg:px-0">
        <div className="flex justify-center">
          <EyebrowPill label={data.pill} />
        </div>

        <div className="motion-reveal mt-label text-center">
          <h2 className="text-[1.95rem] font-black leading-[1.2] tracking-[-0.05em] text-ink-900 lg:text-[clamp(2.4rem,4.6vw,4.85rem)]">
            {data.headlineLead}
            <span className="text-red-500">{data.headlineAccent}</span>
            {data.headlineTail}
          </h2>
          <p className="mx-auto mt-group max-w-[22rem] text-balance text-[0.95rem] text-ink-900/75 sm:max-w-none lg:text-[clamp(0.9rem,1.25vw,1.32rem)]">
            {data.subhead}
          </p>
        </div>

        <ul className="mt-block grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-row lg:items-stretch lg:gap-0">
          {data.cards.map((card) => (
            <li key={card.title} className="flex flex-col items-center lg:flex-1 lg:flex-row lg:items-stretch">
              <article className="flex h-full w-full flex-1 flex-col items-center rounded-panel border-2 border-ink-900 bg-cream-card px-3 py-5 text-center shadow-card sm:px-5 lg:px-pill lg:py-block">
                <h3 className="text-[1rem] font-black tracking-[-0.04em] text-ink-900 sm:text-[1.2rem] lg:text-[clamp(1.15rem,1.75vw,1.85rem)]">
                  {card.title}
                </h3>
                <span aria-hidden="true" className="mt-group block h-0.5 w-14 bg-gold-600" />

                {/* Every card gets the comp's cream disc, vector art included. */}
                <span className="mt-block flex aspect-square w-[6.6rem] items-center justify-center overflow-hidden rounded-full bg-disc sm:w-[9rem] lg:w-[min(13.4vw,23vh)]">
                  <CardArt art={card.art} />
                </span>

                <p className="mt-auto pt-block text-[0.8rem] leading-[1.7] text-ink-900/80 sm:text-[0.9rem] lg:text-[clamp(0.9rem,1.14vw,1.2rem)]">
                  {card.body.map((line, lineIndex) => (
                    <span
                      key={lineIndex}
                      className={`${line.inline ? "" : "block"} ${line.strong ? "font-black text-ink-900" : ""}`}
                    >
                      {line.text}
                    </span>
                  ))}
                </p>
              </article>

              {card.connector ? (
                <span className="hidden lg:mt-[min(12.4vw,21vh)] lg:flex lg:w-gutter lg:shrink-0 lg:justify-center lg:self-start">
                  <Operator symbol={card.connector} />
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
