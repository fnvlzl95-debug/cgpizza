"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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
  compact = false,
}: {
  item: (typeof portedHomepageData.menu.items)[number];
  compact?: boolean;
}) {
  const isSignature = item.badge === "SIGNATURE";
  const hasBadge = Boolean(item.badge);

  return (
    <div
      className="relative w-full px-1 py-4 transition-all duration-300 lg:px-2 lg:py-5 xl:py-6"
    >
      {isSignature ? (
          <div className="absolute left-1/2 top-6 z-30 -translate-x-1/2 -translate-y-1/2 lg:top-7 xl:top-8">
            <Image
              src="/assets/user/logo-mark-blue.png"
              alt="최강피자 로고"
              width={108}
              height={108}
              className="h-[4.35rem] w-[4.35rem] object-contain drop-shadow-md lg:h-[76px] lg:w-[76px] xl:h-[84px] xl:w-[84px]"
            />
          </div>
        ) : null}

      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] transition-all duration-300 ${
          isSignature
            ? "border border-[#0f2d75] bg-[#001540]"
            : "border border-[#0f2d75] bg-white"
        }`}
      >
          <div className="absolute left-4 top-4 z-20 flex flex-col gap-1.5 lg:left-5 lg:top-5">
          {hasBadge && !isSignature ? (
            <div
              className={`flex h-12 w-12 flex-col items-center justify-center rounded-full shadow-lg lg:h-14 lg:w-14 ${
                item.badge === "BEST" ? "bg-[#ef4136] text-white" : "bg-[#ffcf00] text-[#041544]"
              }`}
            >
              <span className="text-[7px] font-bold">★★★</span>
              <span className="text-[11px] font-black">{item.badge}</span>
            </div>
          ) : null}
          {isSignature ? (
            <div className="rounded-full border border-[#ffcf00]/30 bg-[#001540] px-4 py-2 text-[13px] font-black leading-none text-[#ffcf00] shadow-lg lg:px-5 lg:py-2.5 lg:text-[15px]">
              최강피자
            </div>
          ) : null}
        </div>

        <div className={`relative overflow-hidden ${compact ? "h-[17.5rem] sm:h-[19rem]" : "h-[22rem] sm:h-[24rem] lg:h-[18.75rem] xl:h-[19.75rem] 2xl:h-[20.5rem]"}`}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 92vw"
            className="object-cover"
          />
        </div>

        <div className={`flex min-h-[9.75rem] flex-1 flex-col justify-center text-left ${compact ? "p-5 sm:p-6" : "p-7 sm:p-8 lg:min-h-[7.6rem] lg:p-6 xl:min-h-[8rem] xl:p-7"} ${isSignature ? "bg-[#001540] text-white" : "bg-white"}`}>
          <div>
            <h3 className={`mb-2.5 font-black leading-tight ${compact ? "text-[1.55rem] sm:text-[1.8rem]" : "text-[1.8rem] lg:text-[1.72rem] xl:text-[1.82rem]"} ${isSignature ? "text-[#ffcf00]" : "text-[#001540]"}`}>
              {item.title}
            </h3>
            <p className={`min-h-[3em] text-[0.98rem] leading-relaxed sm:text-[1.02rem] lg:text-[0.88rem] xl:text-[0.92rem] ${isSignature ? "text-white/60" : "text-gray-400"}`}>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortedMenuSection({ menu }: PortedMenuSectionProps) {
  const [visibleCount, setVisibleCount] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const mobileScrollerRef = useRef<HTMLDivElement | null>(null);
  const signatureIndex = useMemo(
    () => menu.items.findIndex((item) => item.badge === "SIGNATURE"),
    [menu.items],
  );

  useEffect(() => {
    const syncVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 768 ? 3 : 1);
    };

    syncVisibleCount();
    window.addEventListener("resize", syncVisibleCount);
    return () => window.removeEventListener("resize", syncVisibleCount);
  }, []);

  useEffect(() => {
    const centerSignatureCard = () => {
      if (window.innerWidth >= 768 || signatureIndex < 0) return;

      const scroller = mobileScrollerRef.current;
      const targetCard = scroller?.querySelector<HTMLElement>(`[data-menu-card-index="${signatureIndex}"]`);

      if (!scroller || !targetCard) return;

      const targetLeft = targetCard.offsetLeft - (scroller.clientWidth - targetCard.offsetWidth) / 2;
      scroller.scrollTo({ left: Math.max(0, targetLeft), behavior: "auto" });
    };

    const frame = window.requestAnimationFrame(centerSignatureCard);
    window.addEventListener("resize", centerSignatureCard);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", centerSignatureCard);
    };
  }, [signatureIndex]);

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
    <section
      id="menu-section"
      className="relative overflow-x-hidden overflow-y-visible bg-white px-0 py-14 text-center md:pt-10 md:pb-12 xl:pt-12 xl:pb-14"
    >
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-20 w-[145%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white" />
      <div className="mx-auto w-full max-w-[1720px] px-4 lg:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mx-auto whitespace-nowrap text-[1.72rem] font-black leading-[0.96] tracking-[-0.04em] text-[#001540] sm:text-[1.95rem] md:text-[3.15rem] xl:text-[3.45rem]">
            <span>최강피자 </span>
            <span className="text-[#ef4136]">대표 메뉴</span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-[21rem] text-sm font-medium leading-relaxed text-gray-500 sm:max-w-xl sm:text-base md:mt-3 md:mb-5">
            {menu.description}
          </p>
        </div>

        <p className="mb-6 text-[0.82rem] font-semibold text-[#001540]/42 md:hidden">좌우로 넘겨서 메뉴를 확인하세요</p>

        <div className="relative hidden px-5 md:block md:px-8 lg:px-12">
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

        </div>

        <div
          ref={mobileScrollerRef}
          className="-mx-4 overflow-x-auto px-4 pb-2 md:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max snap-x snap-mandatory gap-4 pr-4">
            {menu.items.map((item, index) => (
              <div
                key={item.title}
                data-menu-card-index={index}
                className="w-[min(88vw,23.5rem)] shrink-0 snap-center"
              >
                <MenuCard item={item} compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
