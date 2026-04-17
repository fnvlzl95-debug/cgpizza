/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/home/reference/reference-primitives";
import { portedHomepageData } from "@/lib/ported-homepage-data";

type PortedMenuSectionProps = {
  menu: typeof portedHomepageData.menu;
};

function MenuArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-[47%] z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#001540] shadow-xl transition-colors hover:bg-[#002266] hover:text-white md:h-14 md:w-14 ${
        direction === "left" ? "left-0 md:-left-2" : "right-0 md:-right-2"
      }`}
      aria-label={direction === "left" ? "이전 메뉴 보기" : "다음 메뉴 보기"}
    >
      {direction === "left" ? <ArrowLeftIcon className="h-6 w-6" /> : <ArrowRightIcon className="h-6 w-6" />}
    </button>
  );
}

function MenuCard({
  item,
}: {
  item: (typeof portedHomepageData.menu.items)[number];
}) {
  const isSignature = item.badge === "SIGNATURE";
  const hasBadge = Boolean(item.badge);

  return (
    <div
      className={`relative w-full px-1 py-12 transition-all duration-300 lg:px-2 lg:py-14 ${
        isSignature ? "z-10 md:scale-[1.03]" : "hover:-translate-y-2"
      }`}
    >
      {isSignature ? (
        <div className="absolute left-1/2 top-12 z-30 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/assets/user/logo-mark-blue.png"
            alt="최강피자 로고"
            width={108}
            height={108}
            className="h-20 w-20 object-contain drop-shadow-md lg:h-[108px] lg:w-[108px]"
          />
        </div>
      ) : null}

      <div
        className={`relative h-full overflow-hidden rounded-[2rem] transition-all duration-300 ${
          isSignature
            ? "bg-[#001540] ring-4 ring-[#ffcf00] shadow-2xl"
            : "bg-white shadow-lg hover:shadow-2xl"
        }`}
      >
        <div className="absolute left-5 top-5 z-20 flex flex-col gap-1.5">
          {hasBadge && !isSignature ? (
            <div
              className={`flex h-14 w-14 flex-col items-center justify-center rounded-full text-white shadow-lg ${
                item.badge === "BEST" ? "bg-[#ef4136]" : "bg-[#ffcf00] text-[#001540]"
              }`}
            >
              <span className="text-[7px] font-bold">★★★</span>
              <span className="text-[11px] font-black">{item.badge}</span>
            </div>
          ) : null}
          {isSignature ? (
            <div className="rounded-full border border-[#ffcf00]/30 bg-[#001540] px-5 py-2.5 text-[15px] font-black leading-none text-[#ffcf00] shadow-lg">
              최강피자
            </div>
          ) : null}
        </div>

        <div className="relative h-[23rem] overflow-hidden sm:h-[25rem] lg:h-[28rem]">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
        </div>

        <div className={`p-8 text-left sm:p-9 lg:p-10 ${isSignature ? "bg-[#001540] text-white" : "bg-white"}`}>
          <h3 className={`mb-3 text-[1.8rem] font-black leading-tight lg:text-[2.1rem] ${isSignature ? "text-[#ffcf00]" : "text-[#001540]"}`}>
            {item.title}
          </h3>
          <p className={`text-[1.05rem] leading-relaxed ${isSignature ? "text-white/60" : "text-gray-400"}`}>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export function PortedMenuSection({ menu }: PortedMenuSectionProps) {
  const [visibleCount, setVisibleCount] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const syncVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 768 ? 3 : 1);
    };

    syncVisibleCount();
    window.addEventListener("resize", syncVisibleCount);
    return () => window.removeEventListener("resize", syncVisibleCount);
  }, []);

  const pageStarts = useMemo(() => {
    const maxStart = Math.max(0, menu.items.length - visibleCount);
    const starts: number[] = [];

    for (let start = 0; start <= maxStart; start += 1) {
      starts.push(start);
    }

    return starts;
  }, [menu.items.length, visibleCount]);

  const safePageIndex = Math.min(pageIndex, Math.max(pageStarts.length - 1, 0));
  const activeStart = pageStarts[safePageIndex] ?? 0;
  const canSlide = pageStarts.length > 1;
  const isAtStart = safePageIndex === 0;
  const isAtEnd = safePageIndex === pageStarts.length - 1;
  const gapPx = visibleCount === 3 ? 32 : 20;
  const trackTransform = `translateX(calc(-${activeStart} * ((100% + ${gapPx}px) / ${visibleCount})))`;
  const cardBasis = `calc((100% - (${gapPx}px * ${visibleCount - 1})) / ${visibleCount})`;

  const movePage = (direction: -1 | 1) => {
    if (!canSlide) return;

    setPageIndex(Math.max(0, Math.min(safePageIndex + direction, pageStarts.length - 1)));
  };

  return (
    <section id="menu-section" className="relative overflow-x-hidden overflow-y-visible bg-white px-0 py-14 text-center md:flex md:min-h-screen md:items-center md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-20 w-[145%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white" />
      <div className="mx-auto w-full max-w-[1720px] px-4 lg:px-6">
        <div className="mb-4 inline-block rounded-full bg-[#ef4136] px-4 py-1 text-xs font-bold text-white">
          ♦ {menu.eyebrow}
        </div>

        <h2 className="mb-4 text-4xl font-black text-[#001540] md:text-5xl">{menu.title}</h2>

        <p className="mb-10 font-medium text-gray-500 md:mb-12">{menu.description}</p>

        <div className="relative px-5 sm:px-8 lg:px-12">
          {canSlide && !isAtStart ? <MenuArrow direction="left" onClick={() => movePage(-1)} /> : null}
          {canSlide && !isAtEnd ? <MenuArrow direction="right" onClick={() => movePage(1)} /> : null}

          <div className="overflow-hidden py-2">
            <div
              className="flex items-stretch transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                gap: `${gapPx}px`,
                transform: trackTransform,
              }}
            >
              {menu.items.map((item) => (
                <div
                  key={item.title}
                  className="shrink-0"
                  style={{
                    flexBasis: cardBasis,
                  }}
                >
                  <MenuCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {canSlide ? (
            <div className="mt-4 flex justify-center gap-2">
              {pageStarts.map((start, index) => (
                <button
                  key={start}
                  type="button"
                  onClick={() => setPageIndex(index)}
                  aria-label={`${index + 1}번째 메뉴 그룹 보기`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === safePageIndex ? "w-8 bg-[#001540]" : "w-2.5 bg-[#001540]/18"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
