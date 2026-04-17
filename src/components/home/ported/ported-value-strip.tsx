import { portedHomepageData } from "@/lib/ported-homepage-data";

type PortedValueStripProps = {
  items?: typeof portedHomepageData.valueItems;
  message?: string;
  sectionId?: string;
};

function FeatureIcon({ type }: { type: (typeof portedHomepageData.valueItems)[number]["icon"] }) {
  if (type === "brand") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M18.5 4.5c-6.4 0-11 3.9-11 9.1 0 3.2 2.3 5.4 5.4 5.4 4.9 0 7.9-4.2 7.9-10.2-.7.4-1.4.6-2.3.6Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 18c2.4-3.3 5.2-5.6 8.5-6.9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "simple") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M7 18v-4.3A4.8 4.8 0 0 1 11.8 9a4.8 4.8 0 0 1 4.8 4.7V18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M6.2 11.1c-.8-3 1.4-5.7 4.4-5.7.9-1.8 2.5-2.8 4.4-2.8 2.8 0 5 2.1 5.1 4.8 1.3.4 2.1 1.5 2.1 2.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M8.8 18h6.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "dough") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="m12 4 8 4-8 4-8-4 8-4Zm0 8 8 4-8 4-8-4 8-4Zm0 0 8-4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M10.5 20h-2A4.5 4.5 0 0 1 4 15.5v-2.8A4.7 4.7 0 0 1 8.7 8h3.1A4.2 4.2 0 0 1 16 3.8h.7A3.3 3.3 0 0 1 20 7.1c0 1.6-1.1 3-2.7 3.3v5.1A4.5 4.5 0 0 1 12.8 20h-2.3Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PortedValueStrip({ items, message, sectionId }: PortedValueStripProps) {
  if (message) {
    return (
      <section id={sectionId} className="border-y-2 border-black/5 bg-[#ffcf00] py-7 text-[#001540]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#001540] text-[#ffcf00] shadow-lg">
              <FeatureIcon type="simple" />
            </div>
            <p className="text-lg font-black leading-tight md:text-[1.6rem]">{message}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!items) return null;

  return (
    <section id={sectionId} className="scroll-mt-24 border-y-2 border-black/5 bg-[#ffcf00] py-6 text-[#001540] md:py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-8">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex min-h-[8.4rem] flex-col items-center justify-center rounded-[8px] bg-white/20 px-3 py-4 text-center md:min-h-0 md:flex-row md:justify-start md:gap-4 md:bg-transparent md:px-0 md:py-0 md:text-left"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#001540] text-[#ffcf00] shadow-lg transition-transform group-hover:scale-110">
                <FeatureIcon type={item.icon} />
              </div>
              <div className="mt-3 md:mt-0">
                <h4 className="text-[0.98rem] font-black leading-tight md:text-lg md:leading-none">{item.title}</h4>
                <p className="mt-1 text-[0.76rem] font-medium leading-snug text-[#001540]/72 md:text-xs md:italic md:text-[#001540]/60">
                  {item.description}
                </p>
              </div>
              {index < items.length - 1 ? <div className="absolute right-[-1rem] hidden h-8 w-px rotate-12 bg-[#001540]/10 md:block" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
