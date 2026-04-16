/* eslint-disable @next/next/no-img-element */
"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronRightIcon, PlayIcon } from "@/components/home/reference/reference-primitives";
import { portedHomepageData } from "@/lib/ported-homepage-data";

type PortedHeroProps = {
  hero: typeof portedHomepageData.hero;
  onOpenBrandModal: () => void;
};

const particles = [
  { left: "20%", top: "62%", duration: 5.2, delay: 0.2, x: 0 },
  { left: "35%", top: "70%", duration: 5.8, delay: 0.8, x: 18 },
  { left: "50%", top: "64%", duration: 6.4, delay: 1.1, x: -16 },
  { left: "65%", top: "72%", duration: 5.6, delay: 0.5, x: 22 },
  { left: "80%", top: "66%", duration: 6.1, delay: 1.3, x: -14 },
] as const;

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
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
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
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-[#001540] pt-20">
      <div className="absolute inset-0 z-0">
        <img src={hero.backgroundImage} alt="" className="h-full w-full object-cover opacity-40 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001540] via-[#001540]/80 to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: -100, x: particle.x }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
            }}
            className="absolute text-[#ffcf00]"
            style={{ left: particle.left, top: particle.top }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 md:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-12">
        <div>
          <div className="mb-6 flex gap-2">
            {[1, 2, 3, 4].map((item) => (
              <span key={item} className="text-2xl text-[#ffcf00]">
                ✦
              </span>
            ))}
          </div>

          <h1 className="mb-8 text-5xl font-black leading-[0.92] text-white md:text-[5.4rem] lg:text-[6rem]">
            {hero.title[0]} <span className="text-[#ffcf00]">{hero.title[1]}</span>
            <br />
            {hero.title[2]}
          </h1>

          <p className="mb-10 max-w-lg text-lg font-medium leading-relaxed text-[#ffcf00]/80 md:text-xl">
            {hero.description}
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#E6BA00" }}
              whileTap={{ scale: 0.95 }}
              href={hero.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#ffcf00] px-8 py-4 text-lg font-black text-[#001540] shadow-2xl shadow-[#ffcf00]/30"
            >
              {hero.primaryCta.label}
              <ChevronRightIcon className="h-5 w-5" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={onOpenBrandModal}
              className="flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#002266]">
                <PlayIcon className="ml-0.5 h-4 w-4 text-white" />
              </div>
              {hero.secondaryCta.label}
            </motion.button>
          </div>

          <div id="store-section" className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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

        <div className="relative hidden min-h-[34rem] items-center justify-end md:flex lg:min-h-[40rem]">
          <div className="absolute right-12 top-6 h-40 w-40 rounded-full bg-white/12 blur-3xl lg:h-56 lg:w-56" />
          <div className="absolute right-28 top-12 h-28 w-28 rounded-full bg-white/10 blur-2xl lg:h-40 lg:w-40" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute right-[6.5rem] top-2 z-20 lg:right-[7.5rem] lg:top-6"
          >
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-dashed border-white bg-[#ef4136] text-white shadow-xl">
              <span className="text-[10px] font-bold tracking-widest">★★★</span>
              <span className="text-xl font-black">{hero.badge}</span>
              <div className="mt-1 h-0.5 w-12 bg-white/30" />
            </div>
          </motion.div>

          <div className="relative h-[30rem] w-[30rem] lg:h-[36rem] lg:w-[36rem] xl:h-[39rem] xl:w-[39rem]">
            <img
              src={hero.clusterImage}
              alt={hero.clusterAlt}
              className="h-full w-full rounded-full border-8 border-white/5 object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
            />

            <div className="absolute right-0 top-0 w-44 lg:w-52 xl:-right-4">
              <img src={hero.clusterOverlayImage} alt="" className="h-auto w-full rotate-12 rounded-3xl drop-shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
