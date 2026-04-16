"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ctaLinks } from "@/lib/landing-data";
import { homePageData, type HomeFeatureItem } from "@/lib/homepage-data";

const heroEase = [0.22, 1, 0.36, 1] as const;

function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="6.5" r="2.75" fill="currentColor" />
      <circle cx="20" cy="3.75" r="3.25" fill="currentColor" />
      <circle cx="32.5" cy="6.5" r="2.75" fill="currentColor" />
      <path
        d="M6.4 11.4 9.6 31.6 19.9 17.8 30.5 31.6 33.6 11.4"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.7 31.6 20 22.2 30.3 31.6"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#08215d] text-[#ffcd1d] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-[#08215d]/10">
      {children}
    </div>
  );
}

function FeatureIcon({ icon }: Pick<HomeFeatureItem, "icon">) {
  if (icon === "signal") {
    return (
      <IconWrap>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 18h16" />
          <path d="M7 18v-4" />
          <path d="M12 18V8" />
          <path d="M17 18v-7" />
          <path d="M6 8c1.8-1.8 3.6-2.7 5.4-2.7 1.8 0 3.6.9 5.4 2.7" />
        </svg>
      </IconWrap>
    );
  }

  if (icon === "simple") {
    return (
      <IconWrap>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 19v-4.5A5 5 0 0 1 12 9.5a5 5 0 0 1 5 5V19" />
          <path d="M6 10.5c0-1.7 1.4-3 3.1-3 .5-1.5 1.9-2.5 3.4-2.5 2 0 3.6 1.5 3.8 3.5 1.2.2 2.1 1.2 2.1 2.5" />
          <path d="M9 19h6" />
        </svg>
      </IconWrap>
    );
  }

  if (icon === "grain") {
    return (
      <IconWrap>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4v16" />
          <path d="M12 8c-2 0-4-1.5-4-3.5S10 1 12 1" />
          <path d="M12 12c-2 0-4-1.5-4-3.5S10 5 12 5" />
          <path d="M12 8c2 0 4-1.5 4-3.5S14 1 12 1" />
          <path d="M12 12c2 0 4-1.5 4-3.5S14 5 12 5" />
          <path d="M12 16c-2 0-4-1.5-4-3.5S10 9 12 9" />
          <path d="M12 16c2 0 4-1.5 4-3.5S14 9 12 9" />
        </svg>
      </IconWrap>
    );
  }

  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 16.5V13h10v3.5" />
        <path d="M13 16.5h3l2.5-4H21v4" />
        <path d="M5.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        <path d="M16.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        <path d="M3 13 5.4 8h4.8L13 13" />
      </svg>
    </IconWrap>
  );
}

function SectionPill({
  children,
  tone = "red",
}: {
  children: ReactNode;
  tone?: "red" | "blue" | "gold";
}) {
  const className =
    tone === "red"
      ? "bg-[#ef4138] text-white"
      : tone === "gold"
        ? "bg-[#ffcd1d] text-[#08215d]"
        : "bg-[#08215d] text-[#ffcd1d]";

  return (
    <span className={`inline-flex rounded-[8px] px-3 py-1 text-xs font-black ${className}`}>
      {children}
    </span>
  );
}

export function RootHomepage() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="overflow-x-hidden bg-[#081b57] text-white">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0b236d_0%,#08184b_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(255,205,29,0.16),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.16),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_72%)]" />
        <div className="absolute inset-y-0 right-[-12%] w-[86%] sm:right-[-8%] sm:w-[72%] lg:right-[-2%] lg:w-[62%]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_24%,rgba(255,255,255,0.2),transparent_24%),radial-gradient(circle_at_66%_14%,rgba(255,205,29,0.2),transparent_22%)]" />
          <motion.div
            className="absolute inset-0"
            animate={
              reducedMotion
                ? undefined
                : {
                    y: [0, -8, 0],
                    scale: [1.02, 1.04, 1.02],
                  }
            }
            transition={
              reducedMotion
                ? undefined
                : {
                    duration: 7.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }
            }
          >
            <Image
              src="/assets/food/hero-street.png"
              alt="최강피자 대표 메뉴와 사이드 구성"
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 86vw"
              className="object-cover"
              style={{ objectPosition: "56% 48%" }}
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-[44%] bg-[linear-gradient(90deg,#081b57_0%,rgba(8,27,87,0.92)_34%,rgba(8,27,87,0.48)_72%,transparent_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[linear-gradient(180deg,transparent_0%,rgba(8,27,87,0.12)_22%,rgba(8,27,87,0.82)_100%)]" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: heroEase }}
          className="absolute right-[4%] top-[25%] z-10 hidden h-[5rem] w-[5rem] items-center justify-center rounded-full bg-[#ef4138] text-sm font-black text-white shadow-[0_20px_40px_rgba(7,21,67,0.35)] ring-4 ring-white/18 sm:flex lg:right-[7%] lg:top-[57%]"
        >
          BEST
        </motion.div>

        <header className="absolute inset-x-0 top-0 z-30">
          <div className="mx-auto max-w-[1480px] px-4 pt-4 sm:px-6 lg:px-8">
            <div className="rounded-[8px] border border-white/10 bg-[#071543]/72 px-4 py-3 backdrop-blur-md shadow-[0_20px_40px_rgba(3,12,36,0.24)]">
              <div className="flex items-center gap-3">
                <Link href="/" className="inline-flex items-center gap-2 text-white">
                  <BrandMark className="h-8 w-8 text-[#ffcd1d]" />
                  <span className="text-lg font-black">최강피자</span>
                </Link>

                <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
                  {homePageData.navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm font-semibold text-white/78 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="ml-auto flex items-center gap-3">
                  <Link
                    href="/drafts/01"
                    className="hidden text-sm font-semibold text-white/72 transition hover:text-white sm:inline-flex"
                  >
                    드래프트 비교
                  </Link>
                  <a
                    href="#contact-band"
                    className="inline-flex rounded-[8px] bg-[#ffcd1d] px-4 py-2 text-sm font-black text-[#081b57] transition hover:bg-[#ffd84b]"
                  >
                    가맹문의
                  </a>
                </div>
              </div>

              <div className="mt-3 flex gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:hidden">
                {homePageData.navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="shrink-0 rounded-[8px] border border-white/10 bg-white/6 px-3 py-2 text-sm font-semibold text-white/80"
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  href="/drafts/01"
                  className="shrink-0 rounded-[8px] border border-white/10 bg-white/6 px-3 py-2 text-sm font-semibold text-white/80"
                >
                  드래프트 비교
                </Link>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto grid min-h-[82svh] max-w-[1480px] items-start gap-12 px-4 pb-10 pt-[8.5rem] sm:px-6 sm:pb-12 sm:pt-[9.25rem] lg:min-h-[88svh] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center lg:px-8 lg:pb-14">
          <div className="relative z-10 max-w-[34rem] pt-6 sm:pt-10 lg:pt-8">
            <motion.p
              initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, ease: heroEase }}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffcd1d]"
            >
              {homePageData.hero.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.06, ease: heroEase }}
              className="mt-4 text-[3.2rem] font-black leading-[0.9] sm:text-[4.6rem] lg:text-[6rem]"
            >
              {homePageData.hero.title[0]}
              <br />
              <span className="text-[#ffcd1d]">{homePageData.hero.title[1]}</span>
              <br />
              {homePageData.hero.title[2]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.14, ease: heroEase }}
              className="mt-5 max-w-[31rem] text-base leading-7 text-white/78 sm:text-lg"
            >
              {homePageData.hero.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.22, ease: heroEase }}
              className="mt-6 text-lg font-black text-white sm:text-xl"
            >
              {homePageData.hero.promise}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.3, ease: heroEase }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={ctaLinks.phoneHref}
                className="inline-flex items-center justify-center rounded-[8px] bg-[#ffcd1d] px-5 py-3 text-sm font-black text-[#081b57] transition hover:bg-[#ffd84b] sm:text-base"
              >
                전화 상담
              </a>
              <a
                href={ctaLinks.kakaoHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[8px] border border-white/14 bg-white/8 px-5 py-3 text-sm font-black text-white transition hover:bg-white/12 sm:text-base"
              >
                카카오 문의
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.38, ease: heroEase }}
              className="mt-7 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0"
            >
              {homePageData.hero.badges.map((badge) => (
                <div
                  key={badge.title}
                  className="w-[11.25rem] shrink-0 rounded-[8px] border border-white/12 bg-[#06143f]/66 px-4 py-4 backdrop-blur-sm sm:w-auto"
                >
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#ffcd1d]">
                    {badge.title}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/82">{badge.body}</p>
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.46, ease: heroEase }}
              href="#event-section"
              className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white/72 transition hover:text-white"
            >
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#ffcd1d]" />
              {homePageData.hero.hint}
            </motion.a>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      <section
        id="event-section"
        className="border-y border-[#08215d]/8 bg-[#ffcd1d] text-[#08215d]"
      >
        <div className="mx-auto grid max-w-[1480px] gap-5 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {homePageData.features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-3">
              <FeatureIcon icon={feature.icon} />
              <div className="min-w-0">
                <p className="text-sm font-black">{feature.title}</p>
                <p className="mt-1 text-sm leading-6 text-[#08215d]/78">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="menu-section"
        className="relative overflow-hidden bg-[#fff8eb] py-16 text-[#08215d] sm:py-20"
      >
        <div className="absolute inset-x-0 top-0 h-16 bg-[radial-gradient(circle_at_50%_0,rgba(8,33,93,0.16),transparent_62%)]" />
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[42rem] text-center">
            <SectionPill>{homePageData.menu.eyebrow}</SectionPill>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              {homePageData.menu.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#08215d]/72 sm:text-lg">
              {homePageData.menu.description}
            </p>
          </div>

          <div className="mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:pb-0">
            {homePageData.menu.items.map((item) => {
              const featured = item.featured;

              return (
                <motion.article
                  key={item.title}
                  whileHover={reducedMotion ? undefined : { y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={`snap-center shrink-0 overflow-hidden rounded-[8px] border bg-white shadow-[0_20px_40px_rgba(8,33,93,0.08)] w-[16rem] lg:w-auto ${
                    featured
                      ? "border-[#08215d] bg-[#0a2a73] text-white"
                      : "border-[#08215d]/10 text-[#08215d]"
                  }`}
                >
                  <div className="p-3">
                    <div className="relative overflow-hidden rounded-[8px]">
                      <div className="absolute left-3 top-3 z-10">
                        <SectionPill tone={featured ? "gold" : "red"}>{item.badge}</SectionPill>
                      </div>
                      <div className="relative aspect-[4/4.8]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(min-width: 1024px) 18vw, 16rem"
                          className="object-cover"
                          style={{ objectPosition: featured ? "50% 48%" : "50% 50%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-5">
                    <p className={`text-xs font-black uppercase ${featured ? "text-[#ffcd1d]" : "text-[#ef4138]"}`}>
                      {item.note}
                    </p>
                    <h3 className="mt-2 text-2xl font-black leading-tight">{item.title}</h3>
                    <p className={`mt-2 text-sm leading-6 ${featured ? "text-white/76" : "text-[#08215d]/72"}`}>
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href={ctaLinks.websiteHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-[8px] bg-[#08215d] px-6 py-3 text-sm font-black text-white transition hover:bg-[#10307f]"
            >
              대표 메뉴 더 보기
            </a>
          </div>

          <div id="review-section" className="mt-12 grid gap-4 lg:grid-cols-3">
            {homePageData.menu.reviews.map((review, index) => (
              <div
                key={review}
                className={`rounded-[8px] border px-4 py-4 text-sm font-semibold leading-6 ${
                  index === 1
                    ? "border-[#08215d] bg-[#08215d] text-white"
                    : "border-[#08215d]/10 bg-white text-[#08215d]/78"
                }`}
              >
                {review}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact-band"
        className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0b236d_0%,#08184b_100%)] py-16 text-white sm:py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_70%,rgba(255,205,29,0.18),transparent_26%),radial-gradient(circle_at_86%_36%,rgba(255,255,255,0.12),transparent_18%)]" />
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
          className="pointer-events-none absolute bottom-[-4.5rem] left-[-6rem] hidden w-[24rem] opacity-95 lg:block"
        >
          <Image
            src="/assets/food/product-duo.jpg"
            alt=""
            width={1346}
            height={768}
            className="h-auto w-full"
          />
        </motion.div>
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 6.4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
          className="pointer-events-none absolute bottom-[-5rem] right-[-4rem] hidden w-[22rem] opacity-95 lg:block"
        >
          <Image
            src="/assets/food/product-chicken.png"
            alt=""
            width={1346}
            height={768}
            className="h-auto w-full"
          />
        </motion.div>

        <div className="relative mx-auto max-w-[1480px] px-4 text-center sm:px-6 lg:px-8">
          <div id="store-section" className="mx-auto max-w-[46rem]">
            <SectionPill>{homePageData.contact.eyebrow}</SectionPill>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#ffcd1d]">
              {homePageData.contact.location}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none sm:text-[4.75rem]">
              {homePageData.contact.title}
            </h2>
            <p className="mt-4 text-2xl font-black text-white sm:text-3xl">
              {homePageData.contact.body}
            </p>
            <p className="mx-auto mt-4 max-w-[36rem] text-base leading-7 text-white/74 sm:text-lg">
              {homePageData.contact.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={ctaLinks.kakaoHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-[8px] bg-[#ffcd1d] px-5 py-3 text-sm font-black text-[#081b57] transition hover:bg-[#ffd84b] sm:text-base"
            >
              카카오 문의
            </a>
            <a
              href={ctaLinks.phoneHref}
              className="inline-flex rounded-[8px] border border-white/14 bg-white/8 px-5 py-3 text-sm font-black text-white transition hover:bg-white/12 sm:text-base"
            >
              전화로 바로 연결
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {homePageData.contact.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-[8px] border border-white/12 bg-white/8 px-3 py-2 text-sm font-semibold text-white/80"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
