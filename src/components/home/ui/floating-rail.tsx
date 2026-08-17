"use client";

import { useEffect, useState } from "react";
import { floatingRail } from "@/lib/home-content";

/** Right-edge rail from the philosophy section down, as in 33 / 99. */
export function FloatingRail() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => setVisible(window.scrollY > 420);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 transition-opacity duration-300 md:right-6 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <a
        href={floatingRail.talk.href}
        target="_blank"
        rel="noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-[0.72rem] font-black tracking-[0.04em] text-white shadow-[0_10px_24px_rgba(1,23,80,0.28)] transition-transform duration-200 hover:-translate-y-0.5 md:h-16 md:w-16 md:text-[0.8rem]"
      >
        TALK
        <span className="sr-only">{floatingRail.talk.label}</span>
      </a>

      <a
        href={floatingRail.inquiry.href}
        aria-label={floatingRail.inquiry.label}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-[0_10px_24px_rgba(1,23,80,0.28)] transition-transform duration-200 hover:-translate-y-0.5 md:h-16 md:w-16"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <path
            d="M4.5 5.6h15a1.4 1.4 0 0 1 1.4 1.4v8.2a1.4 1.4 0 0 1-1.4 1.4H9.9l-4 3.1v-3.1H4.5a1.4 1.4 0 0 1-1.4-1.4V7a1.4 1.4 0 0 1 1.4-1.4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M8 10.4h8M8 13.2h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </a>

      <button
        type="button"
        onClick={toTop}
        aria-label={floatingRail.top.label}
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy-900/12 bg-white text-[0.72rem] font-black tracking-[0.04em] text-navy-900 shadow-[0_10px_24px_rgba(1,23,80,0.18)] transition-transform duration-200 hover:-translate-y-0.5 md:h-16 md:w-16 md:text-[0.8rem]"
      >
        TOP
      </button>
    </div>
  );
}
