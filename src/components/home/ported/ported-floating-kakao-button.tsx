"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ctaLinks } from "@/lib/site-config";

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
      className={`fixed right-2 z-40 inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 md:bottom-6 md:right-5 ${
        visible ? "bottom-3 translate-y-0 opacity-100" : "pointer-events-none -bottom-4 translate-y-4 opacity-0"
      }`}
    >
      <span className="sr-only">{ctaLinks.kakaoLabel}</span>
      <Image
        src="/assets/user/franchise/floating-kakao-inquiry.png"
        alt=""
        width={112}
        height={112}
        className="h-[3.95rem] w-auto object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.28)] md:h-[4.55rem]"
      />
    </a>
  );
}
