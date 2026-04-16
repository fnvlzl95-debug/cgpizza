"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ctaLinks, type LandingConcept } from "@/lib/landing-data";

type ExtraDraftPageProps = {
  concept: LandingConcept;
  concepts: LandingConcept[];
};

type DraftNavProps = {
  activeSlug: LandingConcept["slug"];
  concepts: LandingConcept[];
  accent: string;
  accentText: string;
  light?: boolean;
};

function DraftNav({
  activeSlug,
  concepts,
  accent,
  accentText,
  light = false,
}: DraftNavProps) {
  const shellClass = light
    ? "border-[#142654]/12 bg-white/80 text-[#142654]"
    : "border-white/12 bg-black/26 text-white";

  return (
    <nav className="absolute inset-x-0 top-0 z-40 px-5 pt-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1600px] items-start justify-between gap-3 sm:items-center">
        <Link
          href="/drafts/01"
          className={`inline-flex rounded-[8px] border px-4 py-2 text-sm font-semibold backdrop-blur-md ${shellClass}`}
        >
          최강피자 브랜딩 드래프트
        </Link>
        <div
          className={`inline-flex max-w-[70vw] items-center gap-1 overflow-x-auto rounded-[8px] border p-1 backdrop-blur-md [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${shellClass}`}
        >
          {concepts.map((entry) => {
            const active = entry.slug === activeSlug;

            return (
              <Link
                key={entry.slug}
                href={`/drafts/${entry.slug}`}
                className="shrink-0 rounded-[8px] px-3 py-2 text-xs font-semibold sm:text-sm"
                style={
                  active
                    ? { backgroundColor: accent, color: accentText }
                    : { opacity: 0.82 }
                }
              >
                {entry.slug}. {entry.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

type HeroActionsProps = {
  primaryBg: string;
  primaryText: string;
  secondaryClassName: string;
};

function HeroActions({
  primaryBg,
  primaryText,
  secondaryClassName,
}: HeroActionsProps) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href={ctaLinks.phoneHref}
        className="inline-flex items-center justify-center rounded-[8px] px-5 py-3 text-sm font-bold sm:text-base"
        style={{ backgroundColor: primaryBg, color: primaryText }}
      >
        {ctaLinks.phoneLabel}
      </Link>
      <Link
        href={ctaLinks.kakaoHref}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center justify-center rounded-[8px] border px-5 py-3 text-sm font-bold sm:text-base ${secondaryClassName}`}
      >
        {ctaLinks.kakaoLabel}
      </Link>
    </div>
  );
}

function BottomHint({
  items,
  light = false,
}: {
  items: string[];
  light?: boolean;
}) {
  return (
    <div
      className={`relative border-t ${light ? "border-[#142654]/10" : "border-white/10"}`}
    >
      <div className="mx-auto flex max-w-[1600px] flex-wrap gap-x-6 gap-y-3 px-5 py-4 text-sm font-medium sm:px-8 lg:px-12">
        {items.map((item) => (
          <span
            key={item}
            className={light ? "text-[#142654]/72" : "text-white/72"}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SignalWallPage({ concept, concepts }: ExtraDraftPageProps) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.34], [0, reducedMotion ? 0 : 46]);
  const wordX = useTransform(scrollYProgress, [0, 0.4], [0, reducedMotion ? 0 : 32]);

  return (
    <main className="overflow-x-hidden bg-[#fbf5ea] text-[#142654]">
      <section className="relative isolate overflow-hidden border-b border-[#142654]/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.9),transparent_32%),radial-gradient(circle_at_74%_16%,rgba(245,212,74,0.28),transparent_28%),linear-gradient(180deg,#fbf5ea_0%,#f5eddc_100%)]" />
        <div className="absolute right-0 top-0 h-[32rem] w-[62rem] bg-[#ef4338] [clip-path:polygon(38%_0,100%_0,100%_58%,24%_42%)]" />
        <div className="absolute bottom-0 right-0 h-[22rem] w-[74rem] bg-[#17356d] [clip-path:polygon(26%_8%,100%_0,100%_100%,0_100%)]" />

        <DraftNav
          activeSlug={concept.slug}
          concepts={concepts}
          accent="#ef4338"
          accentText="#fff7ec"
          light
        />

        <div className="relative mx-auto max-w-[1600px] px-5 pt-24 sm:px-8 lg:px-12">
          <div className="grid min-h-[88svh] gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div className="flex flex-col justify-end pb-8 lg:pb-12">
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef4338]"
              >
                {concept.hero.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: reducedMotion ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="text-balance mt-4 text-[3.45rem] font-black leading-[0.88] sm:text-[5rem] lg:text-[7rem]"
              >
                {concept.hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-[34rem] text-base leading-7 text-[#142654]/76 sm:text-lg"
              >
                {concept.hero.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-lg font-semibold sm:text-xl"
              >
                {concept.hero.promise}
              </motion.p>
              <HeroActions
                primaryBg="#17356d"
                primaryText="#fff7ec"
                secondaryClassName="border-[#142654]/16 bg-white/74 text-[#142654] hover:bg-white"
              />
            </div>

            <div className="relative min-h-[32rem] lg:min-h-full">
              <motion.div
                style={{ x: wordX }}
                className="absolute left-[2%] top-[10%] hidden text-[6.25rem] font-black leading-[0.88] text-[#142654] lg:block"
              >
                브랜드가
                <br />
                먼저
              </motion.div>
              <motion.div
                style={{ y: heroY }}
                className="absolute right-[4%] top-[9%] h-[17rem] w-[17rem] overflow-hidden rounded-full border-[8px] border-white shadow-[0_40px_80px_rgba(20,38,84,0.22)] sm:h-[22rem] sm:w-[22rem] lg:h-[33rem] lg:w-[33rem]"
              >
                <Image
                  src={concept.hero.image}
                  alt={concept.hero.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 34rem, 22rem"
                  className="object-cover"
                  style={{ objectPosition: concept.hero.objectPosition }}
                />
              </motion.div>
              <div className="absolute right-[5%] top-[7%] hidden flex-col gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white/82 lg:flex">
                <span>brand-first</span>
                <span>menu impact</span>
                <span>quick inquiry</span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[8%] bottom-[14%] w-[48%] max-w-[22rem]"
              >
                <Image
                  src="/assets/brand/franchise-inquiry-v4.png"
                  alt="최강피자 가맹문의 비주얼"
                  width={1536}
                  height={1024}
                  className="h-auto w-full rounded-[8px] shadow-[0_30px_60px_rgba(20,38,84,0.18)]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-[6%] right-[4%] text-right text-[#fff7ec]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/78 sm:text-sm">
                  Franchise Call
                </p>
                <p className="mt-2 text-[2.8rem] font-black leading-none sm:text-[4rem] lg:text-[5rem]">
                  {ctaLinks.phoneDisplay}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <BottomHint items={concept.hero.badges} light />
      </section>

      <section className="grid border-b border-[#142654]/10 lg:grid-cols-3">
        {concept.support.gallery.map((item, index) => {
          const bandClass =
            index === 0
              ? "bg-[#fff7ec]"
              : index === 1
                ? "bg-[#17356d] text-[#fff7ec]"
                : "bg-[#f5d44a]";

          return (
            <article
              key={item.title}
              className={`border-[#142654]/10 px-5 py-10 sm:px-8 lg:min-h-[42rem] lg:px-10 lg:py-12 ${bandClass} ${
                index < 2 ? "border-b lg:border-b-0 lg:border-r" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em]">
                0{index + 1}
              </p>
              <h2 className="text-balance mt-3 text-[2.15rem] font-black leading-[0.92] sm:text-[2.6rem]">
                {item.title}
              </h2>
              <p className="mt-4 max-w-[22rem] text-sm leading-6 sm:text-base">
                {item.description}
              </p>
            </article>
          );
        })}
      </section>

      <section className="bg-[#f7f0e3]">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:px-12 lg:py-24">
          <div className="max-w-[32rem] lg:sticky lg:top-10 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef4338]">
              {concept.proof.eyebrow}
            </p>
            <h2 className="text-balance mt-4 text-4xl font-black leading-[0.92] sm:text-5xl">
              {concept.proof.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-[#142654]/76 sm:text-lg">
              {concept.proof.description}
            </p>
            <div className="mt-10 space-y-4 border-t border-[#142654]/12 pt-5">
              {concept.proof.bullets.map((bullet, index) => (
                <div
                  key={bullet}
                  className="flex items-start gap-4 border-b border-[#142654]/12 pb-4"
                >
                  <span className="min-w-10 text-sm font-semibold text-[#ef4338]">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-6 sm:text-base">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <figure className="md:row-span-2">
              <div className="relative aspect-[16/19] overflow-hidden rounded-[8px]">
                <Image
                  src={concept.proof.media[0].src}
                  alt={concept.proof.media[0].alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <figure>
              <div className="relative aspect-square overflow-hidden rounded-[8px]">
                <Image
                  src={concept.proof.media[1].src}
                  alt={concept.proof.media[1].alt}
                  fill
                  sizes="(min-width: 1024px) 26vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <div className="self-end border-t border-[#142654]/12 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#17356d]">
                {concept.franchise.eyebrow}
              </p>
              <h3 className="text-balance mt-3 text-3xl font-black leading-[0.94] sm:text-[2.65rem]">
                {concept.franchise.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#142654]/76 sm:text-base">
                {concept.franchise.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ef4338] text-[#fff7ec]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-12 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/76">
              Final CTA
            </p>
            <h2 className="text-balance mt-4 text-[2.9rem] font-black leading-[0.9] sm:text-[4.4rem]">
              {concept.finalCta.title}
            </h2>
            <p className="mt-5 max-w-[32rem] text-base leading-7 text-white/78 sm:text-lg">
              {concept.finalCta.description}
            </p>
          </div>
          <div className="border-t border-white/18 pt-6 lg:justify-self-end lg:border-t-0 lg:pt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/74">
              Call Now
            </p>
            <p className="mt-3 text-[2.9rem] font-black leading-none sm:text-[4.4rem]">
              {ctaLinks.phoneDisplay}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={ctaLinks.phoneHref}
                className="inline-flex items-center justify-center rounded-[8px] bg-[#fff7ec] px-5 py-3 text-sm font-bold text-[#17356d] sm:text-base"
              >
                전화 상담
              </Link>
              <Link
                href={ctaLinks.kakaoHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[8px] border border-white/18 px-5 py-3 text-sm font-bold text-white sm:text-base"
              >
                카카오 문의
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function NightDeliveryPage({ concept, concepts }: ExtraDraftPageProps) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.24],
    [1, reducedMotion ? 1 : 1.08],
  );
  const stripX = useTransform(scrollYProgress, [0, 0.4], [0, reducedMotion ? 0 : -44]);

  return (
    <main className="overflow-x-hidden bg-[#110d0d] text-[#fff7eb]">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <Image
            src={concept.hero.image}
            alt={concept.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: concept.hero.objectPosition }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,13,13,0.94)_0%,rgba(17,13,13,0.84)_34%,rgba(17,13,13,0.54)_56%,rgba(17,13,13,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,138,72,0.16),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(255,211,87,0.14),transparent_26%)]" />

        <DraftNav
          activeSlug={concept.slug}
          concepts={concepts}
          accent="#ffb546"
          accentText="#110d0d"
        />

        <div className="relative mx-auto max-w-[1600px] px-5 pt-24 sm:px-8 lg:px-12">
          <div className="grid min-h-[88svh] gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="flex flex-col justify-end pb-8 lg:pb-12">
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb546]"
              >
                {concept.hero.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="text-balance mt-4 text-[3.3rem] font-black leading-[0.9] sm:text-[5rem] lg:text-[6.6rem]"
              >
                {concept.hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-[33rem] text-base leading-7 text-white/74 sm:text-lg"
              >
                {concept.hero.description}
              </motion.p>
              <HeroActions
                primaryBg="#ffb546"
                primaryText="#110d0d"
                secondaryClassName="border-white/16 bg-white/10 text-white hover:bg-white/14"
              />
              <div className="mt-10 flex flex-wrap gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white/68">
                {concept.hero.badges.map((badge) => (
                  <span key={badge} className="border-t border-white/16 pt-3">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative hidden min-h-[38rem] lg:block">
              <motion.div
                style={{ x: stripX }}
                className="absolute right-[2%] top-[18%] flex w-[32rem] flex-col gap-4 text-right text-[0.8rem] font-semibold uppercase tracking-[0.34em] text-white/58"
              >
                <span>delivery tone</span>
                <span>brand speed</span>
                <span>inquiry route</span>
              </motion.div>
              <div className="absolute bottom-[16%] right-0 w-[32rem] border-t border-white/16 pt-4 text-right">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb546]">
                  Franchise Call
                </p>
                <p className="mt-3 text-[4.7rem] font-black leading-none">
                  {ctaLinks.phoneDisplay}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/28 py-4">
          <motion.div
            animate={reducedMotion ? undefined : { x: [-24, 0, -24] }}
            transition={
              reducedMotion
                ? undefined
                : { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
            }
            className="flex gap-8 whitespace-nowrap px-5 text-sm font-semibold uppercase tracking-[0.28em] text-white/62 sm:px-8 lg:px-12"
          >
            <span>phone inquiry</span>
            <span>kakao talk</span>
            <span>pizza + side</span>
            <span>delivery-ready brand</span>
            <span>phone inquiry</span>
            <span>kakao talk</span>
            <span>pizza + side</span>
            <span>delivery-ready brand</span>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#171111]">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:px-12 lg:py-24">
          <div className="max-w-[31rem] lg:sticky lg:top-10 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb546]">
              {concept.support.eyebrow}
            </p>
            <h2 className="text-balance mt-4 text-4xl font-black leading-[0.92] sm:text-5xl">
              {concept.support.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg">
              {concept.support.description}
            </p>
          </div>
          <div className="space-y-8">
            {concept.support.gallery.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-white/12 pt-5"
              >
                <div className="relative aspect-[16/8] overflow-hidden rounded-[8px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-5">
                  <p className="text-[2.7rem] font-black leading-none text-[#ffb546] sm:text-[3.5rem]">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="text-2xl font-black">{item.title}</h3>
                    <p className="mt-2 max-w-[34rem] text-sm leading-6 text-white/72 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f0909]">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb546]">
              {concept.proof.eyebrow}
            </p>
            <h2 className="text-balance mt-4 text-4xl font-black leading-[0.92] sm:text-5xl">
              {concept.proof.title}
            </h2>
            <p className="mt-5 max-w-[33rem] text-base leading-7 text-white/72 sm:text-lg">
              {concept.proof.description}
            </p>
            <div className="mt-10 space-y-4">
              {concept.proof.bullets.map((bullet, index) => (
                <div
                  key={bullet}
                  className="grid gap-3 border-t border-white/12 py-4 sm:grid-cols-[auto_1fr]"
                >
                  <span className="text-sm font-semibold text-[#ffb546]">0{index + 1}</span>
                  <p className="text-sm leading-6 sm:text-base">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <figure className="sm:col-span-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[8px]">
                <Image
                  src={concept.proof.media[0].src}
                  alt={concept.proof.media[0].alt}
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
                <Image
                  src={concept.proof.media[1].src}
                  alt={concept.proof.media[1].alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <div className="flex flex-col justify-between border-t border-white/12 pt-5 sm:border-t-0 sm:pt-0">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb546]">
                  {concept.franchise.eyebrow}
                </p>
                <h3 className="text-balance mt-3 text-3xl font-black leading-[0.94] sm:text-[2.55rem]">
                  {concept.franchise.title}
                </h3>
              </div>
              <div className="space-y-3">
                {concept.franchise.points.map((point) => (
                  <div key={point.title} className="border-t border-white/12 pt-3">
                    <p className="text-lg font-black">{point.title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/72 sm:text-base">
                      {point.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:min-h-[42svh] lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)]">
        <div className="bg-[#ff6a40] px-5 py-16 text-[#110d0d] sm:px-8 lg:px-12 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#110d0d]/68">
            Final CTA
          </p>
          <h2 className="text-balance mt-4 text-[3rem] font-black leading-[0.9] sm:text-[4.5rem]">
            {concept.finalCta.title}
          </h2>
          <p className="mt-5 max-w-[34rem] text-base leading-7 text-[#110d0d]/76 sm:text-lg">
            {concept.finalCta.description}
          </p>
          <p className="mt-10 text-[3rem] font-black leading-none sm:text-[5rem]">
            {ctaLinks.phoneDisplay}
          </p>
        </div>
        <div className="bg-[#f5d44a] px-5 py-16 text-[#110d0d] sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-[28rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#110d0d]/66">
              Quick Route
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={ctaLinks.phoneHref}
                className="inline-flex items-center justify-center rounded-[8px] bg-[#110d0d] px-5 py-3 text-sm font-bold text-[#fff7eb] sm:text-base"
              >
                전화로 바로 연결
              </Link>
              <Link
                href={ctaLinks.kakaoHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[8px] border border-[#110d0d]/16 px-5 py-3 text-sm font-bold text-[#110d0d] sm:text-base"
              >
                카카오 오픈채팅
              </Link>
            </div>
            <p className="mt-8 text-sm leading-6 text-[#110d0d]/74 sm:text-base">
              {ctaLinks.address}
            </p>
            <Link
              href={ctaLinks.websiteHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-sm font-semibold underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
            >
              {ctaLinks.websiteLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export function DoughStoryPage({ concept, concepts }: ExtraDraftPageProps) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const mediaY = useTransform(scrollYProgress, [0, 0.45], [0, reducedMotion ? 0 : 30]);

  return (
    <main className="overflow-x-hidden bg-[#fdfdf8] text-[#173255]">
      <section className="relative isolate overflow-hidden border-b border-[#173255]/12">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf1_42%,#fdfdf8_100%)]" />
        <div className="absolute right-0 top-0 h-[16rem] w-[36rem] bg-[#d94a3d]/10 [clip-path:polygon(36%_0,100%_0,100%_100%,0_72%)]" />
        <div className="absolute left-0 top-[24%] h-[18rem] w-[28rem] bg-[#6f9854]/10 blur-3xl" />

        <DraftNav
          activeSlug={concept.slug}
          concepts={concepts}
          accent="#173255"
          accentText="#fdfdf8"
          light
        />

        <div className="relative mx-auto max-w-[1600px] px-5 pt-24 sm:px-8 lg:px-12">
          <div className="flex min-h-[88svh] flex-col justify-end pb-8 lg:pb-12">
            <div className="max-w-[48rem]">
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6f9854]"
              >
                {concept.hero.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: reducedMotion ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="text-balance mt-4 text-[3.1rem] font-black leading-[0.9] sm:text-[4.8rem] lg:text-[6.25rem]"
              >
                {concept.hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-[36rem] text-base leading-7 text-[#173255]/74 sm:text-lg"
              >
                {concept.hero.description}
              </motion.p>
              <HeroActions
                primaryBg="#173255"
                primaryText="#fdfdf8"
                secondaryClassName="border-[#173255]/14 bg-white text-[#173255] hover:bg-[#f6fbf1]"
              />
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,0.54fr)_minmax(0,1.46fr)] lg:items-end">
              <div className="border-t border-[#173255]/12 pt-4 text-sm font-semibold text-[#173255]/72">
                {concept.hero.promise}
              </div>
              <motion.div
                style={{ y: mediaY }}
                className="relative aspect-[16/8] overflow-hidden rounded-[8px]"
              >
                <Image
                  src={concept.hero.image}
                  alt={concept.hero.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: concept.hero.objectPosition }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <BottomHint items={concept.hero.badges} light />
      </section>

      <section className="bg-[#f2f7ef]">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:px-12 lg:py-24">
          <div className="max-w-[31rem] lg:sticky lg:top-10 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6f9854]">
              {concept.support.eyebrow}
            </p>
            <h2 className="text-balance mt-4 text-4xl font-black leading-[0.92] sm:text-5xl">
              {concept.support.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-[#173255]/74 sm:text-lg">
              {concept.support.description}
            </p>
          </div>

          <div className="space-y-12">
            {concept.support.gallery.map((item, index) => (
              <article
                key={item.title}
                className={`grid gap-5 border-t border-[#173255]/12 pt-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[8px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6f9854]">
                      0{index + 1}
                    </p>
                    <h3 className="text-balance mt-3 text-3xl font-black leading-[0.94] sm:text-[2.55rem]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[26rem] text-sm leading-6 text-[#173255]/74 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-[#173255]/58">
                    {concept.franchise.steps[index] ?? concept.franchise.steps.at(-1)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#173255]/12 bg-white">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d94a3d]">
              {concept.proof.eyebrow}
            </p>
            <h2 className="text-balance mt-4 text-4xl font-black leading-[0.92] sm:text-5xl">
              {concept.proof.title}
            </h2>
            <p className="mt-5 max-w-[34rem] text-base leading-7 text-[#173255]/74 sm:text-lg">
              {concept.proof.description}
            </p>
            <div className="mt-10 space-y-4">
              {concept.franchise.points.map((point, index) => (
                <div
                  key={point.title}
                  className="grid gap-3 border-t border-[#173255]/12 py-4 sm:grid-cols-[auto_1fr]"
                >
                  <span className="text-sm font-semibold text-[#6f9854]">0{index + 1}</span>
                  <div>
                    <p className="text-lg font-black">{point.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#173255]/74 sm:text-base">
                      {point.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
            <figure className="sm:row-span-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
                <Image
                  src={concept.proof.media[0].src}
                  alt={concept.proof.media[0].alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <figure>
              <div className="relative aspect-square overflow-hidden rounded-[8px]">
                <Image
                  src={concept.proof.media[1].src}
                  alt={concept.proof.media[1].alt}
                  fill
                  sizes="(min-width: 1024px) 26vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <div className="self-end border-t border-[#173255]/12 pt-5">
              {concept.proof.bullets.map((bullet) => (
                <p
                  key={bullet}
                  className="border-b border-[#173255]/12 py-3 text-sm leading-6 text-[#173255]/78 sm:text-base"
                >
                  {bullet}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#173255] text-[#f7fbff]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:px-12 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/68">
              Final CTA
            </p>
            <h2 className="text-balance mt-4 text-[2.95rem] font-black leading-[0.9] sm:text-[4.4rem]">
              {concept.finalCta.title}
            </h2>
            <p className="mt-5 max-w-[34rem] text-base leading-7 text-white/72 sm:text-lg">
              {concept.finalCta.description}
            </p>
          </div>
          <div className="border-t border-white/14 pt-6 lg:justify-self-end lg:border-t-0 lg:pt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c6d5ba]">
              Franchise Route
            </p>
            <p className="mt-3 text-[2.9rem] font-black leading-none sm:text-[4.6rem]">
              {ctaLinks.phoneDisplay}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={ctaLinks.phoneHref}
                className="inline-flex items-center justify-center rounded-[8px] bg-[#f7fbff] px-5 py-3 text-sm font-bold text-[#173255] sm:text-base"
              >
                전화 상담
              </Link>
              <Link
                href={ctaLinks.kakaoHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[8px] border border-white/18 px-5 py-3 text-sm font-bold text-white sm:text-base"
              >
                카카오 문의
              </Link>
            </div>
            <p className="mt-6 text-sm leading-6 text-white/68 sm:text-base">
              {ctaLinks.address}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
