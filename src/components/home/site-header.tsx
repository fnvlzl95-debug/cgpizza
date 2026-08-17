"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { ArrowRightIcon } from "@/components/home/icons";
import { headerCta, siteNav } from "@/lib/home-content";

type SiteHeaderProps = {
  /** Pages other than the home comp start on a light ground, so the header
   *  cannot begin transparent there. */
  alwaysSolid?: boolean;
  activeHref?: string;
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
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--header-offset");
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function SiteHeader({ alwaysSolid = false, activeHref }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(alwaysSolid);

  useEffect(() => {
    if (alwaysSolid) return;

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysSolid]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    const top = window.scrollY + target.getBoundingClientRect().top - getHeaderOffset();
    window.history.replaceState(null, "", href);
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-900/95 shadow-[0_10px_30px_rgba(1,23,80,0.18)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-[93.25rem] items-center justify-between px-5 md:h-[6rem] md:px-8 lg:w-[min(93.25rem,100%-5.4rem)] lg:max-w-none lg:px-0">
        <Link href="/" className="flex min-w-0 items-center text-white">
          <span className="relative h-14 w-14 shrink-0 md:h-[4.6rem] md:w-[4.6rem]">
            <Image
              src="/assets/user/logo-mark-gold.png"
              alt=""
              width={170}
              height={170}
              className="absolute left-1/2 top-1/2 h-[8.5rem] w-[8.5rem] -translate-x-1/2 -translate-y-1/2 object-contain md:h-[11rem] md:w-[11rem]"
              priority
            />
          </span>
          <span className="-ml-1 truncate text-[1.65rem] font-black leading-none tracking-[-0.045em] md:text-[2.05rem]">
            최강피자
          </span>
          <span className="sr-only">최강피자 홈으로</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:gap-[5.4vw]">
          <nav className="flex items-center gap-6 text-[0.98rem] font-bold text-white lg:gap-[3.19vw] lg:text-[clamp(0.9rem,1.02vw,1.07rem)]">
            {siteNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`group relative whitespace-nowrap py-1 transition-colors hover:text-gold-400 ${
                  activeHref === item.href ? "text-gold-400" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-gold-400 transition-[width] duration-300 group-hover:w-full ${
                    activeHref === item.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <a
            data-header-cta
            href={headerCta.href}
            onClick={(event) => handleNavClick(event, headerCta.href)}
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-yellow-500 px-[2.24vw] py-3.5 text-[0.95rem] font-black tracking-[-0.03em] text-navy-900 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(253,216,22,0.35)] lg:text-[clamp(0.9rem,1.02vw,1.07rem)]"
          >
            {headerCta.label}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 md:hidden"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen ? (
        <nav
          aria-label="모바일 메뉴"
          className="border-t border-gold-400/30 bg-navy-900 px-5 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {siteNav.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(event) => {
                    handleNavClick(event, item.href);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center justify-between gap-3 py-4 text-[1.1rem] font-black tracking-[-0.02em] text-white transition-colors hover:text-gold-400 ${
                    index > 0 ? "border-t border-white/12" : ""
                  }`}
                >
                  {item.label}
                  <ArrowRightIcon className="h-4 w-4 text-gold-400/70" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={headerCta.href}
            onClick={(event) => {
              handleNavClick(event, headerCta.href);
              setMenuOpen(false);
            }}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-yellow-500 py-3.5 text-[1rem] font-black text-navy-900"
          >
            {headerCta.label}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </nav>
      ) : null}
    </header>
  );
}
