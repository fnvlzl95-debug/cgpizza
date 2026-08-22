"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import type { MenuPagePizza } from "@/lib/menu-page-data";

/** The comp crowns its number-one card with a filled gold mark, sitting on
 *  the red seal rather than floating above the card on its own. */
function CrownMark({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 120 80" aria-hidden="true" className={className}>
      <path
        d="M10 68 4 20l30 20L60 6l26 34 30-20-6 48H10Z"
        fill="var(--color-yellow-500)"
        stroke="#d79c05"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="18" r="7" fill="var(--color-yellow-500)" stroke="#d79c05" strokeWidth="3" />
      <circle cx="116" cy="18" r="7" fill="var(--color-yellow-500)" stroke="#d79c05" strokeWidth="3" />
      <circle cx="60" cy="6" r="8" fill="var(--color-yellow-500)" stroke="#d79c05" strokeWidth="3" />
    </svg>
  );
}

/** The one red seal on this screen, riding the leader card's corner. */
function BestSeal() {
  return (
    <span className="pointer-events-none absolute -right-3 -top-6 z-30 lg:-right-5 lg:-top-8">
      <CrownMark className="absolute -top-4 left-1/2 h-5 w-auto -translate-x-1/2 rotate-[-6deg] drop-shadow-[0_6px_12px_rgba(42,10,6,0.4)] lg:-top-6 lg:h-7" />
      <span className="flex aspect-square w-[3.5rem] rotate-[10deg] items-center justify-center rounded-full bg-ivory text-red-hero shadow-raise lg:w-[4.6rem]">
        <span className="absolute inset-[9%] rounded-full border-2 border-dashed border-white/85" />
        <span className="relative flex flex-col items-center leading-none">
          <span className="text-[0.38rem] tracking-[0.18em] lg:text-[0.5rem]">★★★</span>
          <span className="mt-[0.16rem] text-[0.78rem] font-black lg:text-[1rem]">BEST</span>
        </span>
      </span>
    </span>
  );
}

/**
 * The comp's card cluster: the leader tilted forward in its navy frame, two
 * more hanging at its shoulder.
 *
 * The two side cards are the control. Pressing one promotes it into the
 * leader slot and the cluster reshuffles, so all three menus are reachable
 * from the first screen instead of two of them being decoration. It also
 * cycles on its own, because a visitor who never touches it should still
 * see more than one pizza — and it stops the moment a pointer or a focus
 * ring lands on it, so it never moves the thing you were about to press.
 */
export function MenuHeroShowcase({ items }: { items: readonly MenuPagePizza[] }) {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const leader = items[active];
  const rest = items.map((item, index) => ({ item, index })).filter((entry) => entry.index !== active);

  useEffect(() => {
    if (held || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [held, items.length]);

  // The cluster leans a few degrees toward the pointer. Fine pointers only:
  // on a touch screen there is no hover to lean into, and the tilt would
  // only fire as a jolt on tap.
  const tilt = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame || event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = frame.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    frame.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
    frame.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
  }, []);

  const untilt = useCallback(() => {
    const frame = frameRef.current;
    if (!frame) return;
    frame.style.setProperty("--tilt-y", "0deg");
    frame.style.setProperty("--tilt-x", "0deg");
  }, []);

  return (
    <div
      ref={frameRef}
      onPointerMove={tilt}
      onPointerLeave={() => {
        untilt();
        setHeld(false);
      }}
      onPointerEnter={() => setHeld(true)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
      style={{ perspective: "1200px" } as CSSProperties}
      className="relative z-10 pb-14 pr-[34%] lg:pb-16 lg:[@media(max-height:820px)]:pb-12"
    >
      {/* The leader, tilted forward in the comp's navy frame. */}
      <div
        className="relative z-10 rotate-[-3deg] transition-transform duration-300 ease-out"
        style={
          {
            transform:
              "rotate(-3deg) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
            transformStyle: "preserve-3d",
          } as CSSProperties
        }
      >
        <figure
          key={leader.title}
          className="motion-shine relative overflow-hidden rounded-[28px] bg-ink-900 shadow-lift ring-1 ring-white/20"
        >
          <div className="relative aspect-[4/3.1] w-full">
            <Image
              src={leader.image}
              alt={leader.title}
              fill
              priority
              sizes="(max-width: 1024px) 70vw, 34vw"
              className="motion-fade object-cover"
            />
            {/* The comp reads its caption off the photograph, so the type
                needs its own ground rather than a bar below the frame. */}
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(42,10,6,0.95),rgba(42,10,6,0.72)_46%,transparent)] px-4 pb-4 pt-14 lg:px-6 lg:pb-5 lg:pt-20">
              <figcaption>
                <span className="block text-[1.02rem] font-black tracking-[-0.035em] text-white lg:text-[clamp(1.05rem,1.35vw,1.45rem)]">
                  {leader.title}
                </span>
                <span className="mt-0.5 block text-[0.72rem] leading-snug text-white/70 lg:text-[0.82rem]">
                  {leader.description}
                </span>
              </figcaption>
            </div>
            <span className="absolute left-3 top-3 rounded-full bg-yellow-500 px-2.5 py-1 text-[0.64rem] font-black text-ink-900 shadow-raise lg:left-4 lg:top-4 lg:text-[0.72rem]">
              인기 {leader.rank}위
            </span>
          </div>
        </figure>
        <BestSeal />
      </div>

      {/* Two and three hang at the leader's shoulder, each on its own tilt. */}
      {rest.map(({ item, index }, slot) => (
        <button
          key={item.title}
          type="button"
          onClick={() => setActive(index)}
          aria-label={`${item.title} 크게 보기`}
          className={`group absolute z-20 w-[33%] overflow-hidden rounded-card bg-white text-left shadow-card ring-1 ring-white/30 transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:-translate-y-1 ${
            slot === 0
              ? "right-0 top-[1%] rotate-[3deg] hover:rotate-[1deg]"
              : "right-[1%] top-[56%] rotate-[-2deg] hover:rotate-[0deg]"
          }`}
        >
          <span className="relative block aspect-[4/2.9] w-full overflow-hidden">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 40vw, 14vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            />
            <span className="absolute right-1.5 top-1.5 rounded-full bg-yellow-500 px-2 py-0.5 text-[0.56rem] font-black text-ink-900 lg:text-[0.64rem]">
              인기 {item.rank}위
            </span>
          </span>
          <span className="block px-3 py-2.5 text-center lg:px-3.5 lg:py-3">
            <span className="block truncate text-[0.8rem] font-black tracking-[-0.03em] text-ink-900 lg:text-[clamp(0.82rem,0.98vw,1.05rem)]">
              {item.title}
            </span>
          </span>
        </button>
      ))}

      {/* The comp's dots under the leader — real controls, not punctuation. */}
      <div className="absolute bottom-4 left-0 z-20 flex w-[64%] justify-center gap-2 lg:bottom-5">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(index)}
            aria-label={item.title}
            aria-current={index === active ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === active ? "w-6 bg-yellow-500" : "w-2 bg-white/45 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
