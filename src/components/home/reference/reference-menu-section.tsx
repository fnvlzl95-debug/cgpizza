"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  arcStyle,
  ArrowLeftIcon,
  ArrowRightIcon,
  BrandMark,
  MenuBadge,
  revealEase,
} from "@/components/home/reference/reference-primitives";
import { referenceHomepageData } from "@/lib/reference-homepage-data";

type ReferenceMenuSectionProps = {
  menu: typeof referenceHomepageData.menu;
  reducedMotion: boolean;
};

function MenuArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const className =
    "absolute top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d7d9e2] bg-white text-[#0d2d76] shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition hover:bg-[#f4f7ff]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${direction === "left" ? "left-0" : "right-0"}`}
      aria-label={direction === "left" ? "이전 메뉴 보기" : "다음 메뉴 보기"}
    >
      {direction === "left" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </button>
  );
}

function MenuCard({
  item,
  isActive,
  index,
  register,
  reducedMotion,
}: {
  item: (typeof referenceHomepageData.menu.items)[number];
  isActive: boolean;
  index: number;
  register: (index: number, node: HTMLDivElement | null) => void;
  reducedMotion: boolean;
}) {
  const featured = item.featured || isActive;

  return (
    <motion.div
      ref={(node) => register(index, node)}
      animate={
        reducedMotion
          ? undefined
          : {
              y: isActive ? -6 : 0,
              scale: isActive ? 1.02 : 1,
            }
      }
      transition={{ duration: 0.3, ease: revealEase }}
      className={`relative w-[9.95rem] shrink-0 snap-center rounded-[8px] border shadow-[0_12px_28px_rgba(5,17,45,0.1)] sm:w-[10.7rem] lg:w-[11rem] ${
        featured ? "border-[#f4ba0b] bg-[#0b2f79] text-white" : "border-[#e3e5eb] bg-white text-[#16224c]"
      }`}
    >
      <div className="absolute left-2 top-2 z-20">
        <MenuBadge tone={item.badge}>{item.badge}</MenuBadge>
      </div>

      <div
        className={`relative overflow-hidden rounded-t-[8px] ${
          featured ? "bg-[linear-gradient(180deg,#0d357f_0%,#133986_100%)]" : "bg-[#fff4ee]"
        }`}
      >
        {item.badge === "SIGNATURE" ? (
          <div className="absolute inset-x-0 top-1 z-10 flex justify-center">
            <BrandMark className="h-4 w-4 text-[#ffd12a]" />
          </div>
        ) : null}
        <div className="relative aspect-[0.92]">
          <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 11rem, 10rem" className="object-cover" />
        </div>
      </div>

      <div className="px-3 pb-4 pt-3 text-center">
        <p className={`text-[1.02rem] font-black leading-tight ${featured ? "text-[#ffd12a]" : "text-[#15224a]"}`}>
          {item.title}
        </p>
        <p className={`mt-1 min-h-[2.2rem] text-[11px] font-semibold leading-4 ${featured ? "text-white/80" : "text-[#4b587c]"}`}>
          {item.description}
        </p>
        <p className={`mt-2 text-[1.72rem] font-black ${featured ? "text-white" : "text-[#10307b]"}`}>{item.price}</p>
      </div>
    </motion.div>
  );
}

export function ReferenceMenuSection({ menu, reducedMotion }: ReferenceMenuSectionProps) {
  const [activeIndex, setActiveIndex] = useState(2);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const scrollToCard = useCallback(
    (index: number) => {
      const nextIndex = (index + menu.items.length) % menu.items.length;
      setActiveIndex(nextIndex);

      const viewport = carouselRef.current;
      const target = cardRefs.current[nextIndex];

      if (viewport && target) {
        const left = target.offsetLeft - (viewport.clientWidth - target.clientWidth) / 2;
        viewport.scrollTo({
          left,
          behavior: reducedMotion ? "auto" : "smooth",
        });
      }
    },
    [menu.items.length, reducedMotion],
  );

  const handleCarouselScroll = useCallback(() => {
    const viewport = carouselRef.current;
    if (!viewport) {
      return;
    }

    const center = viewport.scrollLeft + viewport.clientWidth / 2;
    let nearestIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) {
        return;
      }

      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex((current) => (current === nearestIndex ? current : nearestIndex));
  }, []);

  useEffect(() => {
    const viewport = carouselRef.current;
    if (!viewport) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      scrollToCard(2);
    });

    viewport.addEventListener("scroll", handleCarouselScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      viewport.removeEventListener("scroll", handleCarouselScroll);
    };
  }, [handleCarouselScroll, scrollToCard]);

  return (
    <section id="menu-section" className="relative bg-[#f8f5ef] px-4 pb-16 pt-10 text-[#121c3b] sm:px-6 sm:pt-12 lg:px-8">
      <div className="absolute inset-x-6 top-0 h-11 -translate-y-1/2 bg-[#f8f5ef] sm:inset-x-12 sm:h-12 lg:inset-x-20" style={arcStyle("#f8f5ef")} />
      <div id="review-section" className="absolute -top-16" />

      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#f04a42] px-3 py-1 text-[11px] font-black tracking-[0.04em] text-white">
            {menu.eyebrow}
          </span>
          <h2 className="mt-3 text-[2rem] font-black leading-tight text-[#16224c] sm:text-[2.5rem]">{menu.title}</h2>
          <p className="mt-2 text-sm font-semibold text-[#16224c]/68 sm:text-base">{menu.description}</p>
        </div>

        <div className="relative mt-6">
          <MenuArrow direction="left" onClick={() => scrollToCard(activeIndex - 1)} />

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-12 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-center"
          >
            {menu.items.map((item, index) => (
              <MenuCard
                key={item.title}
                item={item}
                isActive={index === activeIndex}
                index={index}
                register={(cardIndex, node) => {
                  cardRefs.current[cardIndex] = node;
                }}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>

          <MenuArrow direction="right" onClick={() => scrollToCard(activeIndex + 1)} />
        </div>

        <div className="mt-6 text-center">
          <a
            href={menu.buttonHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-[11rem] items-center justify-center rounded-full bg-[#0b2f79] px-8 py-3 text-sm font-black text-white shadow-[0_12px_24px_rgba(11,47,121,0.18),inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:bg-[#12388d]"
          >
            {menu.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
