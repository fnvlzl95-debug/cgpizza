"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { floatingRail } from "@/lib/home-content";

/**
 * The standing consultation rail. KakaoTalk is the client's stated route to a
 * consultation, so it reads as KakaoTalk — the brand's own yellow, its speech
 * mark, and a label that says what tapping it does — rather than as one more
 * dark circle. On a phone it sits above the thumb line as a full pill; the
 * secondary actions only appear where there is room for them.
 */
export function FloatingRail() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => setVisible(window.scrollY > 320);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 transition-[opacity,transform] duration-300 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:gap-3 lg:right-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <a
        href={floatingRail.talk.href}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 rounded-full bg-[#FEE500] py-2.5 pl-2.5 pr-5 text-[#191600] shadow-lift transition-transform duration-200 hover:-translate-y-0.5 md:flex-col md:gap-1.5 md:px-3 md:py-3"
      >
        <Image
          src="/assets/user/franchise/floating-kakao-inquiry.png"
          alt=""
          width={512}
          height={512}
          aria-hidden="true"
          unoptimized
          className="h-11 w-11 shrink-0 md:h-12 md:w-12"
        />
        <span className="text-left text-[0.86rem] font-black leading-[1.2] tracking-[-0.03em] md:text-center md:text-[0.76rem]">
          카카오톡
          <span className="block font-bold">가맹 상담</span>
        </span>
      </a>

      <div className="hidden flex-col gap-3 md:flex">
        <a
          href={floatingRail.inquiry.href}
          aria-label={floatingRail.inquiry.label}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-900 text-white shadow-raise transition-transform duration-200 hover:-translate-y-0.5 md:h-16 md:w-16"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            <path
              d="M7.4 4.8h2.2l1.2 3.8-1.8 1.6a15 15 0 0 0 5 5l1.6-1.8 3.8 1.2v2.2c0 .8-.6 1.4-1.4 1.4A13.2 13.2 0 0 1 4.8 6.2c0-.8.6-1.4 1.4-1.4Z"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <button
          type="button"
          onClick={toTop}
          aria-label={floatingRail.top.label}
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-hairline bg-white text-[0.72rem] font-black tracking-[0.04em] text-ink-900 shadow-raise transition-transform duration-200 hover:-translate-y-0.5 md:h-16 md:w-16 md:text-[0.8rem]"
        >
          TOP
        </button>
      </div>
    </div>
  );
}
