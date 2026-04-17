"use client";

import type { MouseEvent, ReactNode } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { PlayIcon } from "@/components/home/reference/reference-primitives";
import { portedHomepageData } from "@/lib/ported-homepage-data";

type PortedHeroProps = {
  hero: typeof portedHomepageData.hero;
  onOpenBrandModal: () => void;
};

function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#ffcf00]" fill="none" aria-hidden="true">
      <path d="M4 9.5h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M6 9.5v8.5h12V9.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 6h10l1 3.5H6L7 6Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 18v-4h4v4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#ffcf00]" fill="none" aria-hidden="true">
      <path d="M4 10h16v10H4z" stroke="currentColor" strokeWidth="1.9" />
      <path d="M12 10v10M4 14h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M6 10c-1.1-1-1.5-2-.8-3 .8-1.1 2.2-.9 3.1.1.7.8 1.2 1.8 1.7 2.9M18 10c1.1-1 1.5-2 .8-3-.8-1.1-2.2-.9-3.1.1-.7.8-1.2 1.8-1.7 2.9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#ffcf00]" fill="none" aria-hidden="true">
      <path d="M3.5 7.5H13v7H3.5zM13 10h4l2 2.5V14H13z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="17.5" r="1.8" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17" cy="17.5" r="1.8" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

function InfoBox({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex min-h-[5.3rem] items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div className="rounded-lg bg-[#001540]/40 p-2">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold leading-tight text-white">{title}</h4>
        <p className="mt-0.5 text-xs text-[#ffcf00]/60">{body}</p>
      </div>
    </div>
  );
}

export function PortedHero({ hero, onOpenBrandModal }: PortedHeroProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateZ = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 90,
    damping: 18,
    mass: 0.7,
  });
  const smoothRotateY = useSpring(rotateY, {
    stiffness: 90,
    damping: 18,
    mass: 0.7,
  });
  const smoothRotateZ = useSpring(rotateZ, {
    stiffness: 80,
    damping: 16,
    mass: 0.75,
  });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 768) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    rotateY.set((relativeX - 0.5) * 18);
    rotateX.set((0.5 - relativeY) * 14);
    rotateZ.set((relativeX - 0.5) * 22);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    rotateZ.set(0);
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#08215d] pt-[4.75rem] pb-20 md:min-h-screen md:pt-[5.25rem] md:pb-0"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 md:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-12">
        <div className="relative z-20 min-w-0 py-7 md:py-0">
          <div className="mb-5 flex gap-2">
            {[1, 2, 3, 4].map((item) => (
              <span key={item} className="text-xl text-[#ffcf00] md:text-2xl">
                ✦
              </span>
            ))}
          </div>

          <h1 className="mb-6 max-w-[8ch] text-[3.75rem] font-black leading-[0.95] text-white sm:text-[4.25rem] md:mb-8 md:max-w-none md:text-[5.4rem] lg:text-[6rem]">
            {hero.title[0]} <span className="text-[#ffcf00]">{hero.title[1]}</span>
            <br />
            {hero.title[2]}
          </h1>

          <p className="mb-8 max-w-[18rem] text-[1.05rem] font-medium leading-[1.65] text-[#ffcf00]/80 sm:max-w-lg sm:text-lg md:mb-10 md:text-xl">
            {hero.description}
          </p>

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mb-12">
            <motion.a
              whileHover={{ scale: 1.03, backgroundColor: "#ffe066" }}
              whileTap={{ scale: 0.98 }}
              href={hero.primaryCta.href}
              className="inline-flex min-h-[3.7rem] items-center justify-center rounded-full bg-[#ffcf00] px-7 py-4 text-base font-black text-[#001540] shadow-[0_18px_40px_rgba(255,207,0,0.2)] md:min-h-[4rem] md:px-8 md:text-lg"
            >
              {hero.primaryCta.label}
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onOpenBrandModal}
              className="flex min-h-[3.7rem] items-center justify-center gap-3 rounded-full border-2 border-white/22 px-6 py-4 text-base font-bold text-white backdrop-blur-sm md:min-h-[4rem] md:px-8 md:text-lg"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#002266]">
                <PlayIcon className="ml-0.5 h-4 w-4 text-white" />
              </div>
              {hero.secondaryCta.label}
            </motion.button>
          </div>

          <div className="relative mx-auto mb-8 w-[102vw] max-w-[26rem] md:hidden">
            <div className="pointer-events-none absolute right-[10%] top-[12%] z-10 flex h-[4.75rem] w-[4.75rem] translate-x-[6%] -translate-y-[8%] rotate-[12deg] flex-col items-center justify-center rounded-full border-[3px] border-dashed border-white bg-[#ef4136] text-white shadow-xl">
              <span className="text-[8px] font-bold tracking-widest">★★★</span>
              <span className="text-[1rem] font-black">{hero.badge}</span>
            </div>
            <div className="relative aspect-square w-full">
              <Image
                src={hero.clusterImage}
                alt={hero.clusterAlt}
                fill
                priority
                sizes="(max-width: 767px) 88vw, 0px"
                className="object-cover object-center drop-shadow-[0_28px_32px_rgba(0,0,0,0.42)]"
              />
            </div>
          </div>

          <div id="store-section" className="scroll-mt-24 grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
            {hero.infoCards.map((card) => (
              <InfoBox
                key={card.title}
                icon={
                  card.title.includes("부천본점") ? (
                    <StoreIcon />
                  ) : card.title.includes("방문포장") ? (
                    <GiftIcon />
                  ) : (
                    <TruckIcon />
                  )
                }
                title={card.title}
                body={card.body}
              />
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="hidden min-h-[36rem] md:block lg:min-h-[43rem]" />

        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute right-[-12%] top-[49%] z-0 w-[35rem] -translate-y-[49%] lg:right-[-8%] lg:w-[39rem] xl:right-[1%] xl:w-[42rem] 2xl:right-[-12%] 2xl:top-[48%] 2xl:w-[50rem]">
            <div className="relative ml-auto w-fit max-w-full">
              <motion.img
                src={hero.clusterImage}
                alt={hero.clusterAlt}
                style={{
                  rotateX: smoothRotateX,
                  rotateY: smoothRotateY,
                  rotateZ: smoothRotateZ,
                  transformPerspective: 1600,
                }}
                className="h-auto w-auto max-h-[min(76vh,43rem)] max-w-full object-contain drop-shadow-[0_42px_44px_rgba(0,0,0,0.58)] will-change-transform lg:max-h-[min(78vh,46rem)] 2xl:max-h-[min(82vh,54rem)]"
              />
              <div className="absolute right-[20%] top-[15%] z-20 flex h-24 w-24 translate-x-[6%] -translate-y-[10%] rotate-[14deg] flex-col items-center justify-center rounded-full border-4 border-dashed border-white bg-[#ef4136] text-white shadow-xl lg:right-[18%] lg:top-[14%] lg:h-28 lg:w-28 xl:right-[17%] xl:top-[14%] 2xl:right-[24%] 2xl:top-[13%]">
                <span className="text-[10px] font-bold tracking-widest">★★★</span>
                <span className="text-xl font-black lg:text-2xl">{hero.badge}</span>
                <div className="mt-1 h-0.5 w-12 bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
