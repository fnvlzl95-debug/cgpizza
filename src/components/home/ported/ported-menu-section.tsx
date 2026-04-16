/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, BrandMark, ChevronRightIcon } from "@/components/home/reference/reference-primitives";
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
      className={`absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#001540] shadow-xl transition-colors hover:bg-[#002266] hover:text-white ${
        direction === "left" ? "left-0" : "right-0"
      }`}
      aria-label={direction === "left" ? "이전 메뉴 보기" : "다음 메뉴 보기"}
    >
      {direction === "left" ? <ArrowLeftIcon className="h-6 w-6" /> : <ArrowRightIcon className="h-6 w-6" />}
    </button>
  );
}

function MenuCard({
  item,
  index,
  register,
}: {
  item: (typeof portedHomepageData.menu.items)[number];
  index: number;
  register: (index: number, node: HTMLDivElement | null) => void;
}) {
  const isSignature = item.badge === "SIGNATURE";

  return (
    <div
      ref={(node) => register(index, node)}
      className={`relative min-w-[180px] snap-center overflow-hidden rounded-3xl transition-all duration-300 sm:min-w-[200px] lg:min-w-[210px] ${
        isSignature
          ? "z-10 scale-105 ring-4 ring-[#ffcf00] shadow-2xl"
          : "bg-white shadow-lg hover:-translate-y-2 hover:shadow-2xl"
      }`}
    >
      <div className="absolute left-4 top-4 z-20 flex flex-col gap-1">
            {!isSignature ? (
              <div
                className={`flex h-12 w-12 flex-col items-center justify-center rounded-full text-white shadow-lg ${
                  item.badge === "BEST" ? "bg-[#ef4136]" : "bg-[#ffcf00] text-[#001540]"
                }`}
          >
            <span className="text-[6px] font-bold">★★★</span>
            <span className="text-[10px] font-black">{item.badge}</span>
          </div>
        ) : null}
        {isSignature ? (
          <div className="flex items-center gap-1 rounded-full border border-[#ffcf00]/30 bg-[#001540] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#ffcf00] shadow-lg">
            <BrandMark className="h-[10px] w-[10px] text-[#ffcf00]" />
            SIGNATURE
          </div>
        ) : null}
      </div>

      {isSignature ? (
        <div className="absolute left-1/2 top-[-10px] z-30 -translate-x-1/2">
          <BrandMark className="h-8 w-8 text-[#ffcf00] drop-shadow-md" />
        </div>
      ) : null}

      <div className="relative h-52 overflow-hidden sm:h-56 lg:h-60">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
        {isSignature ? <div className="absolute inset-0 bg-gradient-to-t from-[#001540]/80 to-transparent" /> : null}
      </div>

      <div className={`p-6 text-left ${isSignature ? "bg-[#001540] text-white" : "bg-white"}`}>
        <h3 className={`mb-1 text-xl font-black ${isSignature ? "text-[#ffcf00]" : "text-[#001540]"}`}>{item.title}</h3>
        <p className={`mb-4 text-sm ${isSignature ? "text-white/60" : "text-gray-400"}`}>{item.description}</p>
        <div className="flex items-end gap-1">
          <span className={`text-2xl font-black ${isSignature ? "text-white" : "text-[#001540]"}`}>{item.price.replace("원", "")}</span>
          <span className={`mb-1 text-sm font-bold ${isSignature ? "text-white/80" : "text-[#001540]/80"}`}>원</span>
        </div>
      </div>
    </div>
  );
}

export function PortedMenuSection({ menu }: PortedMenuSectionProps) {
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
        viewport.scrollTo({ left, behavior: "smooth" });
      }
    },
    [menu.items.length],
  );

  return (
    <section id="menu-section" className="relative overflow-hidden bg-white px-0 pb-24 pt-16 text-center">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-20 w-[145%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white" />
      <div id="review-section" className="block h-0 scroll-mt-24" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-4 inline-block rounded-full bg-[#ef4136] px-4 py-1 text-xs font-bold text-white">
          ♦ {menu.eyebrow}
        </div>

        <h2 className="mb-4 text-4xl font-black text-[#001540] md:text-5xl">
          {menu.title}
        </h2>

        <p className="mb-16 font-medium text-gray-500">
          {menu.description}
        </p>

        <div className="group relative px-8 sm:px-12">
          <MenuArrow direction="left" onClick={() => scrollToCard(activeIndex - 1)} />
          <MenuArrow direction="right" onClick={() => scrollToCard(activeIndex + 1)} />

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-8 scroll-smooth snap-x md:justify-center lg:gap-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {menu.items.map((item, index) => (
              <MenuCard
                key={item.title}
                item={item}
                index={index}
                register={(cardIndex, node) => {
                  cardRefs.current[cardIndex] = node;
                }}
              />
            ))}
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={menu.buttonHref}
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-12 inline-flex items-center gap-3 rounded-full bg-[#002266] px-10 py-4 font-bold text-white shadow-xl shadow-[#002266]/20"
        >
          {menu.buttonLabel}
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
            <ChevronRightIcon className="h-4 w-4" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
