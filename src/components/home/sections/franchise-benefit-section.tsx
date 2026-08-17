import Image from "next/image";
import {
  HeadsetIcon,
  SparkIcon,
  TagIcon,
  ToolsIcon,
  TruckIcon,
} from "@/components/home/icons";
import { BrandLockup } from "@/components/home/ui/brand-lockup";
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
    <div className="mt-8 overflow-hidden rounded-2xl border border-rule bg-white shadow-[0_18px_44px_rgba(1,23,80,0.08)] lg:mr-[9.2vw] lg:mt-[1.7vw]">
      <div className="grid grid-cols-[1fr] bg-navy-900 text-white lg:grid-cols-[22%_45%_33%]">
        {data.columns.map((column, index) => (
          <div
            key={column}
            className={`hidden py-3.5 text-center text-[1rem] font-black tracking-[-0.02em] lg:block lg:py-[0.82vw] lg:text-[clamp(0.95rem,1.25vw,1.32rem)] ${
              index === 0 ? "lg:block" : ""
            }`}
          >
            {column}
          </div>
        ))}
        <div className="py-3.5 text-center text-[1rem] font-black lg:hidden">가맹 혜택</div>
      </div>

      {data.rows.map((row, index) => {
        const Icon = rowIcons[row.icon];
        return (
          <div
            key={row.label}
            className={`grid grid-cols-1 items-center gap-y-2 px-5 py-5 lg:grid-cols-[22%_45%_33%] lg:gap-0 lg:px-0 lg:py-[0.85vw] ${
              index > 0 ? "border-t border-rule" : ""
            }`}
          >
            <div className="flex items-center gap-3 lg:justify-start lg:pl-[2.2vw]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white lg:h-[2.6vw] lg:w-[2.6vw]">
                <Icon className="h-5 w-5 lg:h-[1.5vw] lg:w-[1.5vw]" />
              </span>
              <span className="text-[1.05rem] font-black tracking-[-0.03em] text-navy-900 lg:text-[clamp(1rem,1.42vw,1.5rem)]">
                {row.label}
              </span>
            </div>

            <p className="text-[0.92rem] text-navy-900/70 lg:text-center lg:text-[clamp(0.9rem,1.25vw,1.32rem)]">
              {row.detail}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 lg:justify-center lg:gap-x-[1vw]">
              <span
                className={`inline-flex items-center gap-1 whitespace-nowrap text-[1.02rem] font-black tracking-[-0.03em] lg:text-[clamp(1rem,1.42vw,1.5rem)] ${
                  row.benefitTone === "red" ? "text-red-500" : "text-blue-band"
                }`}
              >
                {row.benefit}
                {row.sparkle ? <SparkIcon className="h-4 w-4 text-yellow-500 lg:h-[1.5vw] lg:w-[1.5vw]" /> : null}
              </span>

              {row.flag ? (
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-yellow-500 px-3 py-1.5 text-[0.78rem] font-black tracking-[-0.02em] text-navy-900 lg:px-[1.1vw] lg:py-[0.42vw] lg:text-[clamp(0.78rem,1.08vw,1.14rem)]">
                  {row.flag}
                  <span className="text-red-500">{row.flagIndex}</span>
                </span>
              ) : null}
            </div>
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
      className="app-screen-snap-target relative bg-paper py-20 lg:pb-[2vw] lg:pt-[2.4vw]"
    >
      <div className="mx-auto w-full max-w-[93.25rem] px-5 md:px-8 lg:px-0">
        <div className="relative flex items-center justify-center">
          <BrandLockup className="absolute left-0 top-1/2 hidden -translate-y-1/2 lg:flex" />
          <EyebrowPill label={data.pill} />
        </div>

        <div className="motion-reveal mt-6 text-center lg:mt-[1.1vw]">
          <h2 className="font-black leading-[1.12] tracking-[-0.045em] text-navy-900">
            <span className="block text-[2.2rem] lg:text-[clamp(2.6rem,5.68vw,5.95rem)]">
              <span className="relative inline-block">
                {data.headlineLead}
                <RedUnderline />
              </span>
              <span className="relative isolate ml-[0.22em] inline-block px-[0.12em]">
                <BrushHighlight />
                {data.headlineBrush}
                <SparkIcon className="absolute -right-[0.42em] -top-[0.22em] h-[0.3em] w-[0.3em] text-yellow-500" />
              </span>
            </span>
            <span className="mt-1 block text-[1.75rem] lg:mt-[0.3vw] lg:text-[clamp(2.1rem,4.42vw,4.65rem)]">{data.headlineSecond}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[46rem] text-[0.95rem] text-navy-900/65 lg:mt-[1vw] lg:max-w-none lg:text-[clamp(0.88rem,1.08vw,1.14rem)]">
            {data.subhead}
          </p>
        </div>

        <BenefitTable />

        {/* The comp stands the mascot beside the band, not over it, so this is
            a real two-column row rather than an absolute overlay. */}
        <div className="relative mt-10 flex items-end gap-0 lg:mt-[1.6vw]">
          <Image
            src="/assets/user/mascot/mascot-thumbsup.webp"
            alt=""
            width={639}
            height={804}
            aria-hidden="true"
            className="pointer-events-none -mb-2 hidden h-auto w-[9.6vw] shrink-0 select-none lg:block"
          />
          <div className="w-full rounded-lg bg-navy-900 px-6 py-6 text-center text-white lg:ml-[1.2vw] lg:py-[1.5vw] lg:pl-[2vw] lg:pr-[2.4vw] lg:text-left">
            <div className="flex items-center justify-center gap-3 lg:justify-start lg:gap-[1.4vw]">
              <span className="hidden h-[3.9vw] w-[3.9vw] shrink-0 items-center justify-center rounded-full bg-white lg:flex">
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
                <p className="mt-2 text-[1.35rem] font-black leading-tight tracking-[-0.04em] lg:mt-[0.4vw] lg:text-[clamp(1.6rem,2.8vw,2.95rem)]">
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

        <ul className="mt-6 space-y-1.5 lg:mt-[0.9vw] lg:pl-[10.8vw]">
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
