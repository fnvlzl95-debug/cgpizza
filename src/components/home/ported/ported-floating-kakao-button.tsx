"use client";

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
      className={`fixed right-3 z-40 inline-flex items-center justify-center rounded-[8px] border border-[#e1ca00] bg-[#FEE500] px-4 py-3 text-[0.94rem] font-black leading-none text-[#041544] shadow-[0_16px_34px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:text-[#041544] md:bottom-6 md:right-6 md:min-h-[4.2rem] md:px-6 md:text-[1.18rem] ${
        visible ? "bottom-3 translate-y-0 opacity-100" : "pointer-events-none -bottom-4 translate-y-4 opacity-0"
      }`}
    >
      <span className="text-[#041544]">
        가맹 문의
      </span>
    </a>
  );
}
