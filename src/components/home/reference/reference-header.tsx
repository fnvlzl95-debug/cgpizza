import { BrandMark, ChevronRightIcon } from "@/components/home/reference/reference-primitives";

type ReferenceHeaderProps = {
  navItems: readonly { label: string; href: string }[];
  orderLabel: string;
  orderHref: string;
};

export function ReferenceHeader({ navItems, orderLabel, orderHref }: ReferenceHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-white/14 bg-[#071f5d]/72 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1568px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-[13px]">
        <a href="#top" className="flex shrink-0 items-center gap-2 text-white">
          <BrandMark className="h-6 w-6 sm:h-7 sm:w-7 lg:h-[34px] lg:w-[34px]" color="white" />
          <span className="text-lg font-black leading-none tracking-[-0.02em] sm:text-[1.9rem] lg:text-[2.05rem]">최강피자</span>
        </a>

        <nav className="hidden items-center justify-center gap-9 text-[15px] font-bold text-white/88 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center">
          <a
            href={orderHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 shrink-0 items-center gap-1 rounded-full bg-[#ffd12a] px-5 text-sm font-black text-[#09235e] shadow-[0_10px_20px_rgba(255,209,42,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] transition hover:bg-[#ffde62] sm:px-5"
          >
            {orderLabel}
            <ChevronRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="overflow-x-auto border-t border-white/10 px-4 py-2 text-[11px] font-bold text-white/86 lg:hidden [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex max-w-[1568px] items-center gap-4 whitespace-nowrap">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
