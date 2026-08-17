import Image from "next/image";
import { GrowthArt, TargetArt } from "@/components/home/icons";
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
        width={1024}
        height={1024}
        aria-hidden="true"
        className="h-full w-full object-cover"
      />
    );
  }

  const Art = artByName[art.name as keyof typeof artByName];
  return <Art className="h-[62%] w-[62%] text-navy-900" />;
}

function Operator({ symbol }: { symbol: string }) {
  return (
    <span
      aria-hidden="true"
      className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[1.5rem] font-black leading-none text-yellow-500 shadow-[0_8px_18px_rgba(1,23,80,0.28)] lg:h-[3.6vw] lg:w-[3.6vw] lg:text-[clamp(1.4rem,2vw,2.1rem)]"
    >
      {symbol}
    </span>
  );
}

export function FocusSystemSection() {
  return (
    <section
      id="focus-system"
      className="app-screen-snap-target section-screen relative overflow-hidden bg-yellow-500 py-section"
    >
      {/* Faint grid the comp lays over the yellow field. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(to_right,rgba(1,23,80,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(1,23,80,0.35)_1px,transparent_1px)] [background-size:56px_56px]"
      />

      <div className="relative mx-auto w-full max-w-[93.25rem] px-5 md:px-8 lg:px-0">
        <div className="motion-reveal text-center">
          <h2 className="text-[1.95rem] font-black leading-[1.2] tracking-[-0.05em] text-navy-900 lg:text-[clamp(2.4rem,4.6vw,4.85rem)]">
            {data.headlineLead}
            <span className="text-red-500">{data.headlineAccent}</span>
            {data.headlineTail}
          </h2>
          <p className="mx-auto mt-group max-w-[22rem] text-balance text-[0.95rem] text-navy-900/75 sm:max-w-none lg:text-[clamp(0.9rem,1.25vw,1.32rem)]">
            {data.subhead}
          </p>
        </div>

        <ul className="mt-block flex flex-col items-stretch gap-4 lg:flex-row lg:items-stretch lg:gap-0">
          {data.cards.map((card) => (
            <li key={card.title} className="flex flex-col items-center lg:flex-1 lg:flex-row lg:items-stretch">
              <article className="flex w-full flex-1 flex-col items-center rounded-3xl bg-cream-card px-5 py-7 text-center shadow-[0_16px_38px_rgba(1,23,80,0.14)] lg:px-[1.2vw] lg:py-block">
                <h3 className="text-[1.28rem] font-black tracking-[-0.04em] text-navy-900 lg:text-[clamp(1.15rem,1.75vw,1.85rem)]">
                  {card.title}
                </h3>
                <span aria-hidden="true" className="mt-group block h-0.5 w-14 bg-gold-600" />

                {/* Every card gets the comp's cream disc, vector art included. */}
                <span className="mt-block flex aspect-square w-[10.5rem] items-center justify-center overflow-hidden rounded-full bg-[#F3EAD4] lg:w-[min(13.4vw,23vh)]">
                  <CardArt art={card.art} />
                </span>

                <p className="mt-auto pt-block text-[0.9rem] leading-[1.8] text-navy-900/80 lg:text-[clamp(0.9rem,1.14vw,1.2rem)]">
                  {card.body.map((line, lineIndex) => (
                    <span
                      key={lineIndex}
                      className={`${line.inline ? "" : "block"} ${line.strong ? "font-black text-navy-900" : ""}`}
                    >
                      {line.text}
                    </span>
                  ))}
                </p>
              </article>

              {card.connector ? (
                <span className="my-3 flex justify-center lg:my-0 lg:-mx-[1.8vw] lg:mt-[min(12.4vw,21vh)] lg:self-start">
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
