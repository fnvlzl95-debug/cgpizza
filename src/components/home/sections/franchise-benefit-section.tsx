import Image from "next/image";
import {
  HeadsetIcon,
  SparkIcon,
  TagIcon,
  ToolsIcon,
  TruckIcon,
} from "@/components/home/icons";
import { EyebrowPill } from "@/components/home/ui/eyebrow-pill";
import { franchiseBenefit as data } from "@/lib/home-content";

/** Geometry from 22- 수정후.png (1672×941). */

const rowIcons = {
  tag: TagIcon,
  truck: TruckIcon,
  tools: ToolsIcon,
  headset: HeadsetIcon,
} as const;

/**
 * Gold marker sweep behind "30호점까지,". The comp's mark is a thick, rough
 * brush that fully covers the word with frayed ends and a few flicks past the
 * stroke, so this draws the whole slab rather than an underline.
 */
function BrushHighlight() {
  return (
    <svg
      viewBox="0 0 420 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute -inset-x-[4%] -inset-y-[6%] -z-10 h-[112%] w-[108%] text-yellow-500"
    >
      {/* Main slab: uneven top and bottom edges, tapering at both ends. */}
      <path
        fill="currentColor"
        d="M4 24c26-7 62-12 108-15 58-4 118-4 178 0 42 3 76 8 102 15 14 4 22 9 24 16 3 12-1 22-11 30-6 5-16 7-30 6-52-5-104-8-156-8-56 0-112 4-168 12-16 2-27 1-33-4-8-6-11-16-11-30 0-11 0-17 3-20 2-2 6-3 13-5Z"
      />
      {/* Flicks running past the slab, as a dry marker leaves. */}
      <path fill="currentColor" d="M392 22c12 2 20 6 24 11l-4 4c-6-6-14-10-24-12l4-3Z" />
      <path fill="currentColor" d="M400 68c10-2 17-6 22-11l3 5c-6 6-14 10-24 12l-1-6Z" />
      <path fill="currentColor" opacity="0.75" d="M12 16c30-6 66-10 108-12l1 6c-40 2-75 6-104 12l-5-6Z" />
    </svg>
  );
}

/** Red pen stroke under "딱", as in the comp. */
function RedUnderline() {
  return (
    <svg
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute -bottom-[0.08em] left-0 h-[0.11em] w-full text-red-500"
    >
      <path fill="currentColor" d="M1 7c18-4 40-6 66-6 12 0 22 1 32 2v6c-12-1-23-2-34-2-24 0-45 2-63 6L1 7Z" />
    </svg>
  );
}

function BenefitTable() {
  return (
    <div className="mt-block overflow-hidden rounded-card border border-hairline bg-white shadow-card">
      {/* Column head. Each label sits over its own column on the same axis as
          the cells beneath it, rather than all three centred. */}
      <div className="hidden bg-navy-900 text-white lg:grid lg:grid-cols-[26%_42%_32%] lg:py-[min(0.52vw,0.92vh)]">
        <span className="pl-[2.2vw] text-[clamp(0.9rem,1.14vw,1.2rem)] font-black tracking-[-0.02em]">
          {data.columns[0]}
        </span>
        <span className="text-center text-[clamp(0.9rem,1.14vw,1.2rem)] font-black tracking-[-0.02em]">
          {data.columns[1]}
        </span>
        <span className="text-center text-[clamp(0.9rem,1.14vw,1.2rem)] font-black tracking-[-0.02em]">
          {data.columns[2]}
        </span>
      </div>
      <div className="bg-navy-900 py-3 text-center text-[0.95rem] font-black text-white lg:hidden">
        가맹 혜택
      </div>

      {data.rows.map((row, index) => {
        const Icon = rowIcons[row.icon];
        return (
          <div
            key={row.label}
            className={`relative px-4 py-4 lg:grid lg:grid-cols-[26%_42%_32%] lg:items-center lg:px-0 lg:py-[min(0.58vw,1.03vh)] ${
              index > 0 ? "border-t border-hairline" : ""
            }`}
          >
            <div className="flex items-center gap-3 lg:pl-[2.2vw]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white lg:h-[min(2.15vw,3.8vh)] lg:w-[min(2.15vw,3.8vh)]">
                <Icon className="h-5 w-5 lg:h-[1.5vw] lg:w-[1.5vw]" />
              </span>
              <span className="text-[1rem] font-black tracking-[-0.03em] text-navy-900 lg:text-[clamp(0.98rem,1.32vw,1.4rem)]">
                {row.label}
              </span>
            </div>

            <p className="mt-2 pl-12 text-[0.88rem] leading-relaxed text-navy-900/70 lg:mt-0 lg:pl-0 lg:text-center lg:text-[clamp(0.88rem,1.14vw,1.2rem)]">
              {row.detail}
            </p>

            {/* Nothing shares this cell any more. The flag used to sit beside
                the benefit and pushed every row's wording to its own x; it is
                now a sticker on the row's right edge, out of the text flow. */}
            <p
              className={`mt-2.5 pl-12 text-[1rem] font-black tracking-[-0.03em] lg:mt-0 lg:pl-0 lg:text-center lg:text-[clamp(0.98rem,1.32vw,1.4rem)] ${
                row.benefitTone === "red" ? "text-red-500" : "text-blue-band"
              }`}
            >
              {row.benefit}
            </p>

            {row.flag ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-3 -rotate-[9deg] rounded-[0.35rem] bg-yellow-500 px-2.5 py-1 text-[0.7rem] font-black leading-none tracking-[-0.02em] text-navy-900 shadow-raise ring-1 ring-navy-900/10 lg:right-[1.4vw] lg:top-1/2 lg:-translate-y-1/2 lg:px-[0.9vw] lg:py-[0.42vw] lg:text-[clamp(0.72rem,0.95vw,1rem)]"
              >
                {row.flag}
                <span className="ml-1 text-red-500">{row.flagIndex}</span>
              </span>
            ) : null}

            {/* The sticker is decorative duplication of the banner below, so
                it is announced once here rather than twice to a screen reader. */}
            {row.flag ? <span className="sr-only">{row.flag}</span> : null}
          </div>
        );
      })}
    </div>
  );
}

export function FranchiseBenefitSection() {
  return (
    <section
      id="franchise-benefit"
      className="app-screen-snap-target section-screen section-lead relative bg-paper"
    >
      <div className="mx-auto w-full max-w-[93.25rem] px-5 md:px-8 lg:w-[min(93.25rem,100%-5.4rem)] lg:max-w-none lg:px-0">
        <div className="flex justify-center">
          <EyebrowPill label={data.pill} />
        </div>

        <div className="motion-reveal mt-block text-center">
          <h2 className="font-black leading-[1.12] tracking-[-0.045em] text-navy-900">
            {/* Flex, not inline-block: shrink-to-fit sizes these against the
                available inline width, which collapsed the marked phrase to a
                single-character column. Flex items size to their content. */}
            <span className="flex items-baseline justify-center gap-x-[0.22em] whitespace-nowrap text-[2.2rem] lg:text-[clamp(2.2rem,min(4.9vw,8.7vh),5.2rem)]">
              <span className="relative">
                {data.headlineLead}
                <RedUnderline />
              </span>
              <span className="relative isolate px-[0.12em]">
                <BrushHighlight />
                {data.headlineBrush}
                <SparkIcon className="absolute -right-[0.42em] -top-[0.22em] h-[0.3em] w-[0.3em] text-yellow-500" />
              </span>
            </span>
            <span className="mt-1 block text-[1.75rem] lg:mt-[0.3vw] lg:text-[clamp(1.7rem,min(3.5vw,6.2vh),3.8rem)]">{data.headlineSecond}</span>
          </h2>
          <p className="mx-auto mt-group max-w-[46rem] text-[0.95rem] text-navy-900/65 lg:max-w-none lg:text-[clamp(0.88rem,1.08vw,1.14rem)]">
            {data.subhead}
          </p>
        </div>

        <BenefitTable />

        {/* The comp stands the mascot beside the band, not over it, so this is
            a real two-column row rather than an absolute overlay. */}
        <div className="relative mt-block flex items-end gap-0">
          <Image
            src="/assets/user/mascot/mascot-thumbsup.webp"
            alt=""
            width={639}
            height={804}
            aria-hidden="true"
            unoptimized
            className="pointer-events-none -mb-2 hidden h-auto w-[min(6.8vw,12vh)] shrink-0 select-none lg:block"
          />
          <div className="w-full rounded-band bg-navy-900 px-6 py-6 text-center text-white lg:ml-[1.2vw] lg:py-[min(1.05vw,1.85vh)] lg:pl-[2vw] lg:pr-[2.4vw] lg:text-left">
            <div className="flex items-center justify-center gap-3 lg:justify-start lg:gap-[1.4vw]">
              <span className="hidden h-[min(3.4vw,6vh)] w-[min(3.4vw,6vh)] shrink-0 items-center justify-center rounded-full bg-white lg:flex">
                <Image
                  src="/assets/user/logo-mark-gold.png"
                  alt=""
                  width={120}
                  height={120}
                  className="h-[3.4vw] w-[3.4vw] object-contain"
                />
              </span>
              <span className="hidden h-[4.6vw] w-px bg-white/35 lg:block" />
              <div className="min-w-0 flex-1">
                <p className="flex items-center justify-center gap-2.5 text-[0.82rem] font-black tracking-[0.06em] text-gold-400 lg:gap-[0.8vw] lg:text-[clamp(0.82rem,1.14vw,1.2rem)]">
                  <span aria-hidden="true" className="hidden h-px flex-1 bg-gold-400/45 lg:block" />
                  <SparkIcon className="h-4 w-4 shrink-0" />
                  <span className="whitespace-nowrap">{data.banner.eyebrow}</span>
                  <SparkIcon className="h-4 w-4 shrink-0" />
                  <span aria-hidden="true" className="hidden h-px flex-1 bg-gold-400/45 lg:block" />
                </p>
                <p className="mt-2 text-[1.35rem] font-black leading-tight tracking-[-0.04em] lg:mt-[0.4vw] lg:text-[clamp(1.4rem,min(2.4vw,4.25vh),2.5rem)]">
                  {data.banner.parts.map((part, index) => (
                    <span
                      key={index}
                      className={`${index > 0 ? "ml-[0.24em]" : ""} ${
                        part.tone === "gold"
                          ? "text-yellow-500"
                          : part.tone === "red"
                            ? "text-red-500"
                            : "text-white"
                      }`}
                    >
                      {part.text}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-group space-y-1.5 lg:pl-[10.8vw]">
          {data.footnotes.map((note) => (
            <li
              key={note}
              className="flex gap-1.5 text-[0.82rem] text-navy-900/60 lg:text-[clamp(0.78rem,0.95vw,1rem)]"
            >
              <span aria-hidden="true" className="text-red-500">
                *
              </span>
              {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
