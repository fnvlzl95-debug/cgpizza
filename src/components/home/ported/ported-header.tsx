import Image from "next/image";
import Link from "next/link";
import { portedHomepageData } from "@/lib/ported-homepage-data";

type PortedHeaderProps = {
  navItems: typeof portedHomepageData.navItems;
};

export function PortedHeader({ navItems }: PortedHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#002266]/30 bg-[#002266]/80 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link href="#top" className="group flex items-center gap-0 text-white">
          <span className="relative h-[68px] w-[68px] overflow-hidden">
            <Image
              src="/assets/user/logo-mark-gold.png"
              alt="최강피자 로고"
              width={170}
              height={170}
              className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 object-contain"
              priority
            />
          </span>
          <span className="-ml-3 text-[1.95rem] font-black leading-none tracking-[-0.04em]">최강피자</span>
        </Link>

        <nav className="hidden items-center gap-8 font-medium md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="group relative transition-colors hover:text-[#ffcf00]">
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#ffcf00] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="w-[68px] shrink-0 md:w-0" />
      </div>
    </header>
  );
}
