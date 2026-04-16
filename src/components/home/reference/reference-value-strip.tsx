import { ValueIcon, ValueIconWrap } from "@/components/home/reference/reference-primitives";
import { referenceHomepageData } from "@/lib/reference-homepage-data";

type ReferenceValueStripProps = {
  items: typeof referenceHomepageData.valueItems;
};

export function ReferenceValueStrip({ items }: ReferenceValueStripProps) {
  return (
    <section id="event-section" className="relative bg-[#ffcf20] text-[#08235d]">
      <div className="mx-auto max-w-[1568px] px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="grid grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, index) => (
            <div key={item.title} className="flex items-center gap-3">
              <ValueIconWrap>
                <ValueIcon type={item.icon} className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              </ValueIconWrap>

              <div className="min-w-0">
                <p className="text-[11px] font-black leading-tight sm:text-sm">{item.title}</p>
                <p className="mt-1 text-[10px] font-semibold leading-tight text-[#08235d]/80 sm:text-[11px]">
                  {item.description}
                </p>
              </div>

              {index !== items.length - 1 ? (
                <div className="ml-auto hidden h-12 w-px bg-[#08235d]/15 lg:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 h-12 w-[84%] -translate-x-1/2 translate-y-1/2 bg-[#f8f5ef] sm:h-14 sm:w-[80%] lg:w-[70%]" style={{ borderRadius: "999px 999px 0 0 / 120px 120px 0 0" }} />
    </section>
  );
}
