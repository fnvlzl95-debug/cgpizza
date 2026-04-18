"use client";

import type { MouseEvent, PointerEvent } from "react";
import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { portedHomepageData } from "@/lib/ported-homepage-data";

type PortedHeroProps = {
  hero: typeof portedHomepageData.hero;
};

export function PortedHero({ hero }: PortedHeroProps) {
  const isMobileDraggingRef = useRef(false);
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

  const applyTilt = ({
    clientX,
    clientY,
    rect,
    mobile = false,
  }: {
    clientX: number;
    clientY: number;
    rect: DOMRect;
    mobile?: boolean;
  }) => {
    const relativeX = (clientX - rect.left) / rect.width;
    const relativeY = (clientY - rect.top) / rect.height;

    rotateY.set((relativeX - 0.5) * (mobile ? 14 : 18));
    rotateX.set((0.5 - relativeY) * (mobile ? 11 : 14));
    rotateZ.set((relativeX - 0.5) * (mobile ? 12 : 22));
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
    rotateZ.set(0);
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 768) return;

    applyTilt({
      clientX: event.clientX,
      clientY: event.clientY,
      rect: event.currentTarget.getBoundingClientRect(),
    });
  };

  const handleMouseLeave = () => {
    resetTilt();
  };

  const handlePizzaPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768) return;

    isMobileDraggingRef.current = true;
    event.currentTarget.setPointerCapture?.(event.pointerId);

    applyTilt({
      clientX: event.clientX,
      clientY: event.clientY,
      rect: event.currentTarget.getBoundingClientRect(),
      mobile: true,
    });
  };

  const handlePizzaPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768 || !isMobileDraggingRef.current) return;

    applyTilt({
      clientX: event.clientX,
      clientY: event.clientY,
      rect: event.currentTarget.getBoundingClientRect(),
      mobile: true,
    });
  };

  const handlePizzaPointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768) return;

    isMobileDraggingRef.current = false;

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    resetTilt();
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-[100svh] items-start overflow-hidden bg-[#08215d] pt-[4.75rem] pb-5 md:min-h-screen md:h-auto md:items-center md:pt-[5.25rem] md:pb-0"
    >
      <div id="store-section" className="absolute top-0" />
      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl items-start px-4 md:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] md:items-center lg:gap-12">
        <div className="relative z-20 flex min-w-0 flex-col py-5 md:py-0">
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

          <div className="relative left-1/2 mt-auto w-[122vw] max-w-[33rem] -translate-x-1/2 md:hidden">
            <div className="pointer-events-none absolute right-[13%] top-[20%] z-10 flex h-[4.75rem] w-[4.75rem] -translate-y-1/2 rotate-[12deg] flex-col items-center justify-center rounded-full border-[3px] border-dashed border-white bg-[#ef4136] text-white shadow-xl">
              <span className="text-[8px] font-bold tracking-widest">★★★</span>
              <span className="text-[1rem] font-black">{hero.badge}</span>
            </div>
            <motion.div
              style={{
                rotateX: smoothRotateX,
                rotateY: smoothRotateY,
                rotateZ: smoothRotateZ,
                transformPerspective: 1200,
                touchAction: "none",
              }}
              onPointerDown={handlePizzaPointerDown}
              onPointerMove={handlePizzaPointerMove}
              onPointerUp={handlePizzaPointerEnd}
              onPointerCancel={handlePizzaPointerEnd}
              onPointerLeave={handlePizzaPointerEnd}
              className="relative aspect-square w-full will-change-transform"
            >
              <Image
                src={hero.clusterImage}
                alt={hero.clusterAlt}
                fill
                priority
                sizes="(max-width: 767px) 122vw, 0px"
                className="-translate-x-[2%] scale-[1.14] object-contain object-[47%_50%] drop-shadow-[0_28px_32px_rgba(0,0,0,0.42)]"
              />
            </motion.div>
          </div>
        </div>

        <div aria-hidden="true" className="hidden min-h-[36rem] md:block lg:min-h-[43rem]" />

        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute right-[-15%] top-[49%] z-0 w-[39rem] -translate-y-[49%] lg:right-[-11%] lg:w-[44rem] xl:right-0 xl:w-[46rem] 2xl:right-[-15%] 2xl:top-[48%] 2xl:w-[61rem]">
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
                className="h-auto w-auto max-h-[min(81vh,46rem)] max-w-full object-contain drop-shadow-[0_42px_44px_rgba(0,0,0,0.58)] will-change-transform lg:max-h-[min(82vh,49rem)] 2xl:max-h-[min(90vh,62rem)]"
              />
              <div className="absolute right-[24%] top-[16%] z-20 flex h-24 w-24 translate-x-[4%] -translate-y-[4%] rotate-[14deg] flex-col items-center justify-center rounded-full border-4 border-dashed border-white bg-[#ef4136] text-white shadow-xl lg:right-[23%] lg:top-[15%] lg:h-28 lg:w-28 xl:right-[21%] xl:top-[14%] 2xl:right-[18%] 2xl:top-[12%] 2xl:translate-x-[6%] 2xl:-translate-y-[8%]">
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
