"use client";

import { useEffect, useState } from "react";
import { ctaLinks } from "@/lib/site-config";

function KakaoTalkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 md:h-8 md:w-8" fill="none" aria-hidden="true">
      <path
        d="M12 4.5c-4.8 0-8.7 3-8.7 6.7 0 2.4 1.7 4.4 4.2 5.6l-.8 3.2 3.6-2.4c.6.1 1.1.2 1.7.2 4.8 0 8.7-3 8.7-6.7S16.8 4.5 12 4.5Z"
        fill="currentColor"
      />
      <path
        d="M8.5 9.6h7M8.5 12h7M8.5 14.4h4.7"
        stroke="#FEE500"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PortedFloatingKakaoButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const syncVisibility = () => {
      const shouldShow = window.innerWidth >= 768 || window.scrollY > 360;
      setVisible(shouldShow);
    };

    syncVisibility();
    window.addEventListener("scroll", syncVisibility, { passive: true });
    window.addEventListener("resize", syncVisibility);

    return () => {
      window.removeEventListener("scroll", syncVisibility);
      window.removeEventListener("resize", syncVisibility);
    };
  }, []);

  return (
    <a
      href={ctaLinks.kakaoHref}
      target="_blank"
      rel="noreferrer"
      aria-label="카카오 상담 열기"
      className={`fixed right-3 z-40 inline-flex h-[3.7rem] w-[3.7rem] items-center justify-center rounded-full border border-[#e1ca00] bg-[#FEE500] text-[#191919] shadow-[0_16px_34px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:text-[#191919] md:bottom-6 md:right-6 md:h-[4.35rem] md:w-[4.35rem] ${
        visible ? "bottom-3 translate-y-0 opacity-100" : "pointer-events-none -bottom-4 translate-y-4 opacity-0"
      }`}
    >
      <span className="sr-only">{ctaLinks.kakaoLabel}</span>
      <KakaoTalkIcon />
    </a>
  );
}
