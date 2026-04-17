"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { portedHomepageData } from "@/lib/ported-homepage-data";

type PortedHeaderProps = {
  navItems: typeof portedHomepageData.navItems;
};

export function PortedHeader({ navItems }: PortedHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#002266]/30 bg-[#002266]/84 text-white backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-4 md:h-[5.25rem]">
        <Link
          href="#top"
          className="group flex min-w-0 items-center gap-0 text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="relative h-[64px] w-[64px] shrink-0 overflow-hidden md:h-[82px] md:w-[82px]">
            <Image
              src="/assets/user/logo-mark-gold.png"
              alt="최강피자 로고"
              width={170}
              height={170}
              className="absolute left-1/2 top-1/2 h-[156px] w-[156px] -translate-x-1/2 -translate-y-1/2 object-contain md:h-[194px] md:w-[194px]"
              priority
            />
          </span>
          <span className="-ml-1 truncate text-[1.9rem] font-black leading-none tracking-[-0.04em] md:-ml-2 md:text-[2.3rem]">
            최강피자
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-medium md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="group relative transition-colors hover:text-[#ffcf00]">
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#ffcf00] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block md:w-[82px]" />

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact-section"
            className="inline-flex h-10 items-center rounded-full bg-[#ffcf00] px-4 text-sm font-black text-[#001540] shadow-[0_8px_22px_rgba(255,207,0,0.25)]"
          >
            가맹문의
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-global-nav"
            aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white"
          >
            <span className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-4 rounded-full bg-current transition-transform ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-4 rounded-full bg-current transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-4 rounded-full bg-current transition-transform ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div id="mobile-global-nav" className="border-t border-white/10 bg-[#03184c]/96 px-4 py-4 md:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-[8px] border border-white/10 bg-white/6 px-4 py-3 text-sm font-bold text-white"
              >
                <span>{item.label}</span>
                <span className="text-[#ffcf00]">→</span>
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
