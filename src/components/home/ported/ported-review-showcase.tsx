"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { PortedReviewShowcase as PortedReviewShowcaseData } from "@/lib/ported-homepage-data";

type PortedReviewShowcaseProps = {
  reviewShowcase: PortedReviewShowcaseData;
};

function createLoopSlides(
  slides: PortedReviewShowcaseData["slides"],
  minimumCount: number,
) {
  const nextSlides = [...slides];
  let index = 0;

  while (nextSlides.length < minimumCount) {
    nextSlides.push(slides[index % slides.length]);
    index += 1;
  }

  return nextSlides;
}

function ReviewRating({ reduceMotion }: { reduceMotion: boolean }) {
  const ratingRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ratingRef, { once: true, amount: 0.35 });

  return (
    <div
      ref={ratingRef}
      className="mt-7 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-[#ffcf00] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:px-6"
    >
      <div className="flex items-center gap-1.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="relative block text-[1.15rem] leading-none">
            <span className="text-white/16">★</span>
            <motion.span
              className="absolute inset-0 overflow-hidden text-[#ffb15c]"
              initial={reduceMotion ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: reduceMotion || isInView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
              transition={{
                duration: 0.52,
                delay: reduceMotion ? 0 : index * 0.22,
                ease: "easeOut",
              }}
            >
              ★
            </motion.span>
          </span>
        ))}
      </div>
      <span className="text-[1rem] font-black text-white sm:text-[1.05rem]">4.9 / 5.0 만족도</span>
    </div>
  );
}

function ReviewSlideRow({
  slides,
  direction,
  duration,
  reduceMotion,
  offsetClass,
}: {
  slides: PortedReviewShowcaseData["slides"];
  direction: "left" | "right";
  duration: number;
  reduceMotion: boolean;
  offsetClass: string;
}) {
  const baseSlides = reduceMotion ? slides.slice(0, 5) : slides;

  const renderCard = (slide: PortedReviewShowcaseData["slides"][number], index: number, group: string) => (
    <div key={`${group}-${slide.image}-${index}`} className="w-[24rem] shrink-0 sm:w-[27rem] lg:w-[31rem] xl:w-[33.5rem]">
      <div className="relative h-[18.5rem] overflow-hidden rounded-[8px] border border-[#dde4ee] bg-white shadow-[0_16px_44px_rgba(34,45,66,0.08)] sm:h-[21rem] lg:h-[24rem] xl:h-[25rem]">
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover object-left-top"
          style={{ objectPosition: slide.objectPosition }}
          sizes="(min-width: 1280px) 33.5rem, (min-width: 1024px) 31rem, (min-width: 640px) 27rem, 24rem"
        />
      </div>
    </div>
  );

  const renderGroup = (group: string) => (
    <div className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6">
      {baseSlides.map((slide, index) => renderCard(slide, index, group))}
    </div>
  );

  if (reduceMotion) {
    return (
      <div className={offsetClass}>
        {renderGroup("static")}
      </div>
    );
  }

  return (
    <div className={offsetClass}>
      <motion.div
        className="flex w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {renderGroup("group-a")}
        {renderGroup("group-b")}
      </motion.div>
    </div>
  );
}

export function PortedReviewShowcase({
  reviewShowcase,
}: PortedReviewShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const topRowSlides = useMemo(
    () => createLoopSlides(reviewShowcase.slides, 20),
    [reviewShowcase.slides],
  );
  const bottomRowSlides = useMemo(
    () => createLoopSlides([...reviewShowcase.slides].reverse(), 20),
    [reviewShowcase.slides],
  );
  const [headlineTop = reviewShowcase.title, ...headlineRest] = reviewShowcase.title.split(" ");
  const headlineBottom = headlineRest.join(" ");
  const bottomLead = headlineBottom.replace("2억 달성", "").trim();

  return (
    <section
      id="review-section"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#edf2f8] text-white"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-x-[-44rem] top-1/2 -translate-y-1/2 lg:inset-x-[-52rem]">
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
            <ReviewSlideRow
              slides={topRowSlides}
              direction="left"
              duration={92}
              reduceMotion={Boolean(shouldReduceMotion)}
              offsetClass="translate-x-[6rem] sm:translate-x-[8rem] lg:translate-x-[10rem]"
            />
            <ReviewSlideRow
              slides={bottomRowSlides}
              direction="right"
              duration={100}
              reduceMotion={Boolean(shouldReduceMotion)}
              offsetClass="-translate-x-[12rem] sm:-translate-x-[14rem] lg:-translate-x-[16rem]"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(237,242,248,0.18)_0%,rgba(237,242,248,0.24)_100%),radial-gradient(circle_at_24%_46%,rgba(7,29,85,0.1),transparent_25%),radial-gradient(circle_at_82%_24%,rgba(239,65,54,0.08),transparent_22%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[74vh] w-full max-w-[1680px] items-center justify-center px-4 py-14 md:min-h-[80vh] md:px-6 md:py-16 lg:min-h-[88vh] lg:py-20">
        <div className="w-full max-w-[31rem] rounded-[8px] border border-[#ffcf00]/22 bg-[#071d55] px-6 py-7 text-center text-white shadow-[0_34px_80px_rgba(7,29,85,0.28)] md:px-8 md:py-8 lg:max-w-[33rem] lg:px-9 lg:py-9">
          <p className="text-[0.82rem] font-black tracking-[0.16em] text-[#ef4136]">{headlineTop}</p>

          <h3 className="mt-4 text-[2.8rem] font-black leading-[0.92] text-white md:text-[4.2rem] lg:text-[4.7rem]">
            <span className="block">{bottomLead}</span>
            <span className="mt-2 block text-[#ef4136]">2억 달성</span>
          </h3>

          <p className="mx-auto mt-5 max-w-[23rem] text-[0.98rem] font-medium leading-relaxed text-white/74 md:text-[1.04rem]">
            {reviewShowcase.description.split(" 최강피자의 ").map((part, index) => (
              <span key={index}>
                {index === 0 ? `${part} ` : `최강피자의 ${part}`}
                {index === 0 ? <br /> : null}
              </span>
            ))}
          </p>

          <ReviewRating reduceMotion={Boolean(shouldReduceMotion)} />
        </div>
      </div>
    </section>
  );
}
