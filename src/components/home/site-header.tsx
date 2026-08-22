"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    if (alwaysSolid) return;

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysSolid]);

  /**
   * Anchors are intercepted only when their target is on the page we are
   * already looking at — then we smooth-scroll and compensate for the fixed
   * header ourselves. From any other route the browser navigates for real,
   * and the target's own scroll-margin handles the landing.
   */
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || "/";
    if (path !== pathname) return;

    const target = document.querySelector<HTMLElement>(href.slice(hashIndex));
    if (!target) return;

    event.preventDefault();
    const top = window.scrollY + target.getBoundingClientRect().top - getHeaderOffset();
    window.history.replaceState(null, "", href.slice(hashIndex));
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  /** The lit nav item: an exact route, or the route an anchor lives on. */
  const isActive = (href: string) => {
    if (activeHref) return activeHref === href;
    const path = href.split("#")[0] || "/";
    return href.includes("#") ? false : path === pathname;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink-900/95 shadow-card backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-offset)] max-w-[93.25rem] items-center justify-between px-5 md:px-8 lg:w-[min(93.25rem,100%-5.4rem)] lg:max-w-none lg:px-0">
        {/* The new wordmark carries the brand name inside the artwork, so the
            live type that used to sit beside the crown is gone — keeping both
            would set 최강피자 twice. The -ml-1 kern went with it; it existed
            only to close the gap left by the old mark's internal padding. The
            white cut serves both header states: it reads on the red hero
            (6.85) and on the scrolled ink bar (16.9). */}
        <Link href="/" className="flex min-w-0 items-center text-white">
          <Image
            src="/assets/user/brand/wordmark-white-20260822.webp"
            alt=""
            width={1145}
            height={484}
            priority
            className="h-10 w-auto shrink-0 md:h-14"
          />
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
                  isActive(item.href) ? "text-gold-400" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-gold-400 transition-[width] duration-300 group-hover:w-full ${
                    isActive(item.href) ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <a
            data-header-cta
            href={headerCta.href}
            onClick={(event) => handleNavClick(event, headerCta.href)}
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-yellow-500 px-[2.24vw] py-3.5 text-[0.95rem] font-black tracking-[-0.03em] text-ink-900 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-gold lg:text-[clamp(0.9rem,1.02vw,1.07rem)]"
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
          className="border-t border-gold-400/30 bg-ink-900 px-5 pb-6 pt-2 md:hidden"
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
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-yellow-500 py-3.5 text-[1rem] font-black text-ink-900"
          >
            {headerCta.label}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </nav>
      ) : null}
    </header>
  );
}
