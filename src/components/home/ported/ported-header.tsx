"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";
import type { PortedNavItem } from "@/lib/ported-homepage-data";

type PortedHeaderProps = {
  navItems: PortedNavItem[];
  activeHref?: string;
  homeHref?: string;
};

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      )}
    </svg>
  );
}

function getHeaderOffset() {
  const rawValue = getComputedStyle(document.documentElement).getPropertyValue(
    "--header-offset",
  );
  const parsedValue = Number.parseFloat(rawValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

export function PortedHeader({
  navItems,
  activeHref,
  homeHref = "#top",
}: PortedHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    event.preventDefault();

    const headerOffset = getHeaderOffset();
    const rect = target.getBoundingClientRect();
    const availableHeight = window.innerHeight - headerOffset;
    const centerOffset =
      href === "#menu-section"
        ? Math.max(0, (availableHeight - rect.height) / 2)
        : 0;
    const targetTop =
      window.scrollY + rect.top - headerOffset - centerOffset;

    window.history.replaceState(null, "", href);
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#002266]/30 bg-[#002266]/84 text-white backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-4 md:h-[5.25rem]">
        <Link href={homeHref} className="group flex min-w-0 items-center gap-0 text-white">
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

        <nav className="hidden items-center gap-5 text-[0.95rem] font-medium md:flex lg:gap-7 lg:text-base">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              style={activeHref === item.href ? { color: "#ffcf00" } : undefined}
              className={`group relative whitespace-nowrap transition-colors hover:text-[#ffcf00] ${
                activeHref === item.href ? "text-[#ffcf00]" : ""
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#ffcf00] transition-all duration-300 group-hover:w-full ${
                  activeHref === item.href ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden md:block md:w-[82px]" />

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen ? (
        <nav
          aria-label="모바일 메뉴"
          className="relative overflow-hidden rounded-b-[1.6rem] border-t border-[#ffcf00]/30 bg-[linear-gradient(180deg,#08215d_0%,#041544_100%)] px-4 pb-5 pt-2 shadow-[0_30px_60px_rgba(0,0,0,0.55)] md:hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,207,0,0.2)_0%,rgba(255,207,0,0)_70%)]"
          />
          <ul className="relative flex flex-col">
            {navItems.map((item, index) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      handleNavClick(event, item.href);
                      setMenuOpen(false);
                    }}
                    className={`group flex items-center justify-between gap-3 px-2 py-4 text-[1.12rem] font-black tracking-[-0.01em] transition-colors ${
                      index > 0 ? "border-t border-white/10" : ""
                    } ${isActive ? "text-[#ffcf00]" : "text-white hover:text-[#ffcf00]"}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[0.95rem] transition-colors ${isActive ? "text-[#ffcf00]" : "text-[#ffcf00]/45 group-hover:text-[#ffcf00]"}`}>
                        ✦
                      </span>
                      {item.label}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-4 w-4 transition-all group-hover:translate-x-0.5 ${isActive ? "text-[#ffcf00]" : "text-white/40 group-hover:text-[#ffcf00]"}`}
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
