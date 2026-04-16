import Link from "next/link";
import { BrandMark, ChevronRightIcon } from "@/components/home/reference/reference-primitives";
import { portedHomepageData } from "@/lib/ported-homepage-data";

type PortedHeaderProps = {
  navItems: typeof portedHomepageData.navItems;
  ctaLabel: string;
  ctaHref: string;
  draftHref: string;
};

export function PortedHeader({ navItems, ctaLabel, ctaHref, draftHref }: PortedHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#002266]/30 bg-[#002266]/80 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link href="#top" className="group flex items-center gap-2 text-white">
          <div className="relative">
            <BrandMark className="h-8 w-8 text-[#ffcf00]" />
          </div>
          <span className="text-2xl font-black tracking-[-0.04em]">최강피자</span>
        </Link>

        <nav className="hidden items-center gap-8 font-medium md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="group relative transition-colors hover:text-[#ffcf00]">
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#ffcf00] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={draftHref} className="hidden text-sm font-semibold text-white/65 transition hover:text-white xl:inline-flex">
            드래프트 비교
          </Link>
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#ffcf00] px-6 py-2.5 font-bold text-[#001540] shadow-lg shadow-[#ffcf00]/20 transition-transform duration-300 hover:scale-105"
          >
            {ctaLabel}
            <ChevronRightIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
