"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ctaLinks, type LandingConcept } from "@/lib/landing-data";
import {
  DoughStoryPage,
  NightDeliveryPage,
  SignalWallPage,
} from "@/components/landing/extra-draft-pages";

type LandingPageProps = {
  concept: LandingConcept;
  concepts: LandingConcept[];
};

function getHeroAccent(slug: LandingConcept["slug"]) {
  if (slug === "01") {
    return {
      src: "/assets/brand/logo-square.png",
      alt: "최강피자 로고",
      className:
        "absolute right-[4%] top-[18%] hidden w-[10rem] lg:block xl:w-[11.5rem]",
    };
  }

  if (slug === "02") {
    return {
      src: "/assets/brand/franchise-poster.png",
      alt: "최강피자 가맹 모집 포스터",
      className:
        "absolute right-[4%] top-[16%] hidden w-[15rem] lg:block xl:w-[17rem]",
    };
  }

  return {
    src: "/assets/brand/logo-gold.jpg",
    alt: "최강피자 골드 로고",
    className:
      "absolute right-[6%] top-[16%] hidden w-[11rem] lg:block xl:w-[12.5rem]",
  };
}

function getHeroSupportImage(slug: LandingConcept["slug"]) {
  if (slug === "01") {
    return {
      src: "/assets/food/product-duo.jpg",
      alt: "최강피자 피자 두 판 이미지",
      className:
        "absolute bottom-[-7rem] right-[-2rem] hidden w-[28rem] lg:block xl:w-[34rem]",
    };
  }

  if (slug === "02") {
    return {
      src: "/assets/food/product-spaghetti.png",
      alt: "최강피자 오븐 스파게티 이미지",
      className:
        "absolute bottom-[-5rem] right-[18%] hidden w-[19rem] lg:block xl:w-[22rem]",
    };
  }

  return {
    src: "/assets/food/product-bacon.jpg",
    alt: "최강피자 베이컨 그라탕 이미지",
    className:
      "absolute bottom-[-6rem] right-[-1rem] hidden w-[24rem] lg:block xl:w-[28rem]",
  };
}

function getBackdropWord(slug: LandingConcept["slug"]) {
  if (slug === "01") {
    return "최강피자";
  }

  if (slug === "02") {
    return "부천 본점";
  }

  return "파로 도우";
}

function getCtaBackdrop(slug: LandingConcept["slug"]) {
  if (slug === "01") {
    return "/assets/food/hero-street.png";
  }

  if (slug === "02") {
    return "/assets/food/hero-town.jpg";
  }

  return "/assets/food/hero-master.jpg";
}

function getCtaBackdropPosition(slug: LandingConcept["slug"]) {
  if (slug === "01") {
    return "70% center";
  }

  if (slug === "02") {
    return "58% center";
  }

  return "76% center";
}

function getRailCopy(slug: LandingConcept["slug"]) {
  if (slug === "01") {
    return "브랜드명, 제품 장면, 상담 동선이 한 번에 보이는 추천 초안";
  }

  if (slug === "02") {
    return "본점 운영감과 포장·배달 그림이 먼저 읽히는 확장 초안";
  }

  return "제품 질감과 브랜드 신뢰를 차분하게 세우는 정제 초안";
}

function getSectionWord(slug: LandingConcept["slug"]) {
  if (slug === "01") {
    return "시그니처";
  }

  if (slug === "02") {
    return "운영 장면";
  }

  return "디테일";
}

function getProofWord(slug: LandingConcept["slug"]) {
  if (slug === "01") {
    return "브랜드";
  }

  if (slug === "02") {
    return "가맹";
  }

  return "신뢰";
}

function getAspectClass(aspect: "portrait" | "landscape" | "square") {
  if (aspect === "portrait") {
    return "aspect-[4/5]";
  }

  if (aspect === "square") {
    return "aspect-square";
  }

  return "aspect-[16/10]";
}

export function LandingPage({ concept, concepts }: LandingPageProps) {
  if (concept.slug === "04") {
    return <SignalWallPage concept={concept} concepts={concepts} />;
  }

  if (concept.slug === "05") {
    return <NightDeliveryPage concept={concept} concepts={concepts} />;
  }

  if (concept.slug === "06") {
    return <DoughStoryPage concept={concept} concepts={concepts} />;
  }

  return <LegacyLandingPage concept={concept} concepts={concepts} />;
}

function LegacyLandingPage({ concept, concepts }: LandingPageProps) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.22],
    [1, reducedMotion ? 1 : concept.motionPreset === "punch" ? 1.08 : 1.04],
  );
  const heroY = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, reducedMotion ? 0 : concept.motionPreset === "punch" ? 88 : 54],
  );
  const wordY = useTransform(scrollYProgress, [0, 0.28], [0, reducedMotion ? 0 : 42]);
  const sectionY = useTransform(scrollYProgress, [0, 0.6], [0, reducedMotion ? 0 : -18]);

  const isStreet = concept.slug === "01";
  const isTown = concept.slug === "02";
  const isMaster = concept.slug === "03";

  const surfaceStyle = {
    "--theme-base": concept.theme.base,
    "--theme-surface": concept.theme.surface,
    "--theme-surface-alt": concept.theme.surfaceAlt,
    "--theme-text": concept.theme.text,
    "--theme-muted": concept.theme.muted,
    "--theme-line": concept.theme.line,
    "--theme-accent": concept.theme.accent,
    "--theme-accent-alt": concept.theme.accentAlt,
    "--theme-accent-text": concept.theme.accentText,
  } as CSSProperties;

  const navSurface = concept.theme.lightHero
    ? "bg-white/80 text-[#11224d]"
    : "bg-black/25 text-white";

  const ghostButtonClass = concept.theme.lightHero
    ? "border-[#11224d]/15 bg-white/70 text-[#11224d] hover:bg-white"
    : "border-white/15 bg-white/10 text-white hover:bg-white/15";

  const heroAccent = getHeroAccent(concept.slug);
  const heroSupportImage = getHeroSupportImage(concept.slug);
  const ctaBackdrop = getCtaBackdrop(concept.slug);

  const mutedText = { color: concept.theme.muted };
  const borderColor = { borderColor: concept.theme.line };

  return (
    <main
      style={surfaceStyle}
      className="overflow-x-hidden bg-[var(--theme-base)] text-[var(--theme-text)]"
    >
      <section className="relative overflow-hidden border-b" style={borderColor}>
        <motion.div
          className="absolute inset-0"
          style={{
            scale: heroScale,
            y: heroY,
          }}
        >
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
        <div
          className="absolute inset-0"
          style={{ background: concept.theme.heroOverlay }}
        />
        <div
          className="absolute inset-0"
          style={{ background: concept.theme.heroGlow }}
        />

        <motion.div
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-[-0.24em] left-0 hidden w-full whitespace-nowrap px-5 text-[19vw] font-black uppercase leading-none tracking-tight sm:px-8 lg:block lg:px-12 ${
            concept.theme.lightHero ? "text-[#11224d]/10" : "text-white/8"
          }`}
          style={{ y: wordY }}
        >
          {getBackdropWord(concept.slug)}
        </motion.div>

        <nav className="absolute inset-x-0 top-0 z-30 px-5 pt-5 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1520px] items-start justify-between gap-3 sm:items-center">
            <Link
              href="/drafts/01"
              className={`inline-flex rounded-md border px-4 py-2 text-sm font-semibold ${navSurface}`}
              style={borderColor}
            >
              최강피자 브랜딩 드래프트
            </Link>
            <div
              className={`inline-flex max-w-[68vw] items-center gap-1 overflow-x-auto rounded-md border p-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${navSurface}`}
              style={borderColor}
            >
              {concepts.map((entry) => {
                const isActive = entry.slug === concept.slug;

                return (
                  <Link
                    key={entry.slug}
                    href={`/drafts/${entry.slug}`}
                    className="shrink-0 rounded-md px-3 py-2 text-xs font-semibold sm:text-sm"
                    style={
                      isActive
                        ? {
                            backgroundColor: concept.theme.accent,
                            color: concept.theme.accentText,
                          }
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

        <div className="relative mx-auto max-w-[1520px] px-5 pt-24 sm:px-8 lg:px-12">
          <div className="grid min-h-[88svh] items-end pb-8 lg:grid-cols-[minmax(0,0.84fr)_minmax(280px,0.72fr)] lg:pb-10">
            <div className="relative z-20 max-w-[42rem] pb-4 md:pb-8">
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm font-semibold"
                style={{ color: concept.theme.accent }}
              >
                {concept.hero.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: reducedMotion ? 0 : 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-balance mt-4 text-[3.35rem] font-black leading-[0.92] sm:text-[4.7rem] lg:text-[6.25rem]"
              >
                {concept.hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-[33rem] text-base leading-7 sm:text-lg"
                style={mutedText}
              >
                {concept.hero.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-lg font-semibold sm:text-xl"
              >
                {concept.hero.promise}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href={ctaLinks.phoneHref}
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-bold sm:text-base"
                  style={{
                    backgroundColor: concept.theme.accent,
                    color: concept.theme.accentText,
                  }}
                >
                  {ctaLinks.phoneLabel}
                </Link>
                <Link
                  href={ctaLinks.kakaoHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-bold sm:text-base ${ghostButtonClass}`}
                >
                  {ctaLinks.kakaoLabel}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-end sm:justify-between"
                style={borderColor}
              >
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]" style={mutedText}>
                    Draft {concept.slug}
                  </p>
                  <p className="mt-2 max-w-[26rem] text-sm leading-6 sm:text-base" style={mutedText}>
                    {getRailCopy(concept.slug)}
                  </p>
                </div>
                <p className="text-sm font-semibold" style={{ color: concept.theme.accent }}>
                  {ctaLinks.phoneDisplay}
                </p>
              </motion.div>
            </div>

            <div className="relative hidden min-h-[34rem] lg:block">
              <motion.div
                initial={{ opacity: 0, x: reducedMotion ? 0 : 24, y: reducedMotion ? 0 : -8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={heroAccent.className}
              >
                <Image
                  src={heroAccent.src}
                  alt={heroAccent.alt}
                  width={720}
                  height={720}
                  className="h-auto w-full rounded-md shadow-[0_30px_60px_rgba(0,0,0,0.22)]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: reducedMotion ? 0 : 28, y: reducedMotion ? 0 : 24 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className={heroSupportImage.className}
              >
                <Image
                  src={heroSupportImage.src}
                  alt={heroSupportImage.alt}
                  width={1100}
                  height={860}
                  className="h-auto w-full rounded-md shadow-[0_35px_80px_rgba(0,0,0,0.26)]"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="relative border-t" style={borderColor}>
          <div className="mx-auto flex max-w-[1520px] flex-wrap gap-x-6 gap-y-3 px-5 py-4 text-sm font-medium sm:px-8 lg:px-12">
            {concept.hero.badges.map((badge) => (
              <span key={badge} style={mutedText}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--theme-surface)]">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-0 top-0 hidden translate-x-[12%] text-[14vw] font-black leading-none lg:block ${
            concept.theme.lightHero ? "text-[#11224d]/6" : "text-white/6"
          }`}
        >
          {getSectionWord(concept.slug)}
        </div>
        <motion.div style={{ y: sectionY }}>
          <div className="mx-auto grid max-w-[1520px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-12 lg:py-24">
            <div className="max-w-[32rem] lg:sticky lg:top-10 lg:self-start">
              <p className="text-sm font-semibold" style={{ color: concept.theme.accent }}>
                {concept.support.eyebrow}
              </p>
              <h2 className="text-balance mt-4 text-4xl font-black leading-[0.96] sm:text-5xl">
                {concept.support.title}
              </h2>
              <p className="mt-5 text-base leading-7 sm:text-lg" style={mutedText}>
                {concept.support.description}
              </p>
            </div>

            {isStreet && (
              <div className="grid gap-5 md:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
                <figure className="md:row-span-2">
                  <div className="relative aspect-[16/19] overflow-hidden rounded-md">
                    <Image
                      src={concept.support.gallery[0].src}
                      alt={concept.support.gallery[0].alt}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 max-w-[22rem]">
                    <h3 className="text-2xl font-black">{concept.support.gallery[0].title}</h3>
                    <p className="mt-2 text-sm leading-6 sm:text-base" style={mutedText}>
                      {concept.support.gallery[0].description}
                    </p>
                  </figcaption>
                </figure>
                <figure>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                    <Image
                      src={concept.support.gallery[1].src}
                      alt={concept.support.gallery[1].alt}
                      fill
                      sizes="(min-width: 1024px) 28vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <h3 className="text-2xl font-black">{concept.support.gallery[1].title}</h3>
                    <p className="mt-2 text-sm leading-6 sm:text-base" style={mutedText}>
                      {concept.support.gallery[1].description}
                    </p>
                  </figcaption>
                </figure>
                <figure>
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={concept.support.gallery[2].src}
                      alt={concept.support.gallery[2].alt}
                      fill
                      sizes="(min-width: 1024px) 28vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <h3 className="text-2xl font-black">{concept.support.gallery[2].title}</h3>
                    <p className="mt-2 text-sm leading-6 sm:text-base" style={mutedText}>
                      {concept.support.gallery[2].description}
                    </p>
                  </figcaption>
                </figure>
              </div>
            )}

            {isTown && (
              <div className="grid gap-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,0.72fr)]">
                <figure className="md:col-span-2">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-md">
                    <Image
                      src={concept.support.gallery[0].src}
                      alt={concept.support.gallery[0].alt}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 max-w-[26rem]">
                    <h3 className="text-2xl font-black">{concept.support.gallery[0].title}</h3>
                    <p className="mt-2 text-sm leading-6 sm:text-base" style={mutedText}>
                      {concept.support.gallery[0].description}
                    </p>
                  </figcaption>
                </figure>
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                    <Image
                      src={concept.support.gallery[1].src}
                      alt={concept.support.gallery[1].alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
                <figure className="self-end">
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={concept.support.gallery[2].src}
                      alt={concept.support.gallery[2].alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 max-w-[22rem]">
                    <h3 className="text-2xl font-black">{concept.support.gallery[2].title}</h3>
                    <p className="mt-2 text-sm leading-6 sm:text-base" style={mutedText}>
                      {concept.support.gallery[2].description}
                    </p>
                  </figcaption>
                </figure>
              </div>
            )}

            {isMaster && (
              <div className="grid gap-5 md:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                    <Image
                      src={concept.support.gallery[0].src}
                      alt={concept.support.gallery[0].alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
                <figure className="md:row-span-2">
                  <div className="relative aspect-[16/18] overflow-hidden rounded-md">
                    <Image
                      src={concept.support.gallery[2].src}
                      alt={concept.support.gallery[2].alt}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 max-w-[25rem]">
                    <h3 className="text-2xl font-black">{concept.support.gallery[2].title}</h3>
                    <p className="mt-2 text-sm leading-6 sm:text-base" style={mutedText}>
                      {concept.support.gallery[2].description}
                    </p>
                  </figcaption>
                </figure>
                <figure>
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={concept.support.gallery[1].src}
                      alt={concept.support.gallery[1].alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 max-w-[21rem]">
                    <h3 className="text-2xl font-black">{concept.support.gallery[1].title}</h3>
                    <p className="mt-2 text-sm leading-6 sm:text-base" style={mutedText}>
                      {concept.support.gallery[1].description}
                    </p>
                  </figcaption>
                </figure>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-y" style={borderColor}>
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-0 top-6 hidden -translate-x-[7%] text-[14vw] font-black leading-none lg:block ${
            concept.theme.lightHero ? "text-[#11224d]/7" : "text-white/6"
          }`}
        >
          {getProofWord(concept.slug)}
        </div>
        <div className="mx-auto max-w-[1520px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
            <div className="relative z-10 max-w-[34rem]">
              <p className="text-sm font-semibold" style={{ color: concept.theme.accent }}>
                {concept.proof.eyebrow}
              </p>
              <h2 className="text-balance mt-4 text-4xl font-black leading-[0.96] sm:text-5xl">
                {concept.proof.title}
              </h2>
              <p className="mt-5 text-base leading-7 sm:text-lg" style={mutedText}>
                {concept.proof.description}
              </p>

              <ul className="mt-8 border-t" style={borderColor}>
                {concept.proof.bullets.map((bullet, index) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-4 border-b py-4"
                    style={borderColor}
                  >
                    <span
                      className="min-w-10 text-sm font-semibold"
                      style={{ color: concept.theme.accent }}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-sm leading-6 sm:text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <figure className="md:col-span-2">
                <div className="relative aspect-[16/9] overflow-hidden rounded-md">
                  <Image
                    src={concept.proof.media[0].src}
                    alt={concept.proof.media[0].alt}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <figure>
                <div
                  className={`relative overflow-hidden rounded-md ${getAspectClass(
                    concept.proof.media[1].aspect,
                  )}`}
                >
                  <Image
                    src={concept.proof.media[1].src}
                    alt={concept.proof.media[1].alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <figure>
                <div
                  className={`relative overflow-hidden rounded-md ${getAspectClass(
                    concept.proof.media[2].aspect,
                  )}`}
                >
                  <Image
                    src={concept.proof.media[2].src}
                    alt={concept.proof.media[2].alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--theme-surface-alt)]">
        <div className="mx-auto max-w-[1520px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-[40rem]">
            <p className="text-sm font-semibold" style={{ color: concept.theme.accent }}>
              {concept.franchise.eyebrow}
            </p>
            <h2 className="text-balance mt-4 text-4xl font-black leading-[0.96] sm:text-5xl">
              {concept.franchise.title}
            </h2>
            <p className="mt-5 text-base leading-7 sm:text-lg" style={mutedText}>
              {concept.franchise.description}
            </p>
          </div>

          <div className="mt-12 grid gap-0 border-y md:grid-cols-3" style={borderColor}>
            {concept.franchise.points.map((point, index) => (
              <div
                key={point.title}
                className="border-t px-0 py-7 first:border-t-0 md:border-l md:px-7 md:first:border-l-0 md:first:pl-0 md:[&:nth-child(-n+3)]:border-t-0"
                style={borderColor}
              >
                <p className="text-sm font-semibold" style={{ color: concept.theme.accent }}>
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight">{point.title}</h3>
                <p className="mt-3 max-w-[22rem] text-sm leading-6 sm:text-base" style={mutedText}>
                  {point.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t pt-5 text-sm font-semibold sm:text-base"
            style={borderColor}
          >
            {concept.franchise.steps.map((step, index) => (
              <div key={step} className="flex items-center gap-5">
                <span style={{ color: concept.theme.accent }}>
                  0{index + 1}
                </span>
                <span>{step}</span>
                {index < concept.franchise.steps.length - 1 && (
                  <span className="h-px w-8 bg-current opacity-25" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <Image
          src={ctaBackdrop}
          alt={concept.finalCta.title}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: getCtaBackdropPosition(concept.slug) }}
        />
        <div
          className="absolute inset-0"
          style={{ background: concept.theme.heroOverlay }}
        />
        <div className="relative mx-auto max-w-[1520px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid min-h-[70svh] items-end gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,0.78fr)] lg:items-center">
            <div className="max-w-[40rem]">
              <p className="text-sm font-semibold" style={{ color: concept.theme.accent }}>
                상담 연결
              </p>
              <h2 className="text-balance mt-4 text-4xl font-black leading-[0.94] sm:text-5xl lg:text-6xl">
                {concept.finalCta.title}
              </h2>
              <p className="mt-5 max-w-[32rem] text-base leading-7 sm:text-lg" style={mutedText}>
                {concept.finalCta.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={ctaLinks.phoneHref}
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-bold sm:text-base"
                  style={{
                    backgroundColor: concept.theme.accent,
                    color: concept.theme.accentText,
                  }}
                >
                  {ctaLinks.phoneLabel}
                </Link>
                <Link
                  href={ctaLinks.kakaoHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-bold sm:text-base ${ghostButtonClass}`}
                >
                  {ctaLinks.kakaoLabel}
                </Link>
              </div>
            </div>

            <div className="border-t pt-6 lg:justify-self-end lg:border-t-0 lg:pt-0">
              <p className="text-sm font-semibold" style={{ color: concept.theme.accent }}>
                가맹 문의
              </p>
              <p className="mt-3 text-[2.75rem] font-black leading-none sm:text-[4rem] lg:text-[4.8rem]">
                {ctaLinks.phoneDisplay}
              </p>
              <div className="mt-6 space-y-3 text-sm sm:text-base">
                <Link
                  href={ctaLinks.kakaoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="block font-semibold underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
                >
                  카카오 오픈채팅 바로가기
                </Link>
                <Link
                  href={ctaLinks.websiteHref}
                  target="_blank"
                  rel="noreferrer"
                  className="block font-semibold underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
                >
                  {ctaLinks.websiteLabel}
                </Link>
                <p style={mutedText}>{ctaLinks.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
