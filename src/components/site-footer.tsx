import { portedHomepageData } from "@/lib/ported-homepage-data";

/**
 * The site's closing band, shared by /menu and /brand so both routes end the
 * same. It lives in its own module rather than inside the menu page: pulling
 * it from there dragged the whole menu catalogue into any other route that
 * wanted a footer.
 */
export function SiteFooter() {
  const { footerRows, footerCopyright } = portedHomepageData.contact;

  return (
    <footer className="bg-[#170503] text-white">
      <div className="mx-auto max-w-[1680px] px-4 py-7 md:px-6 md:py-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3 text-left text-sm leading-relaxed text-white/62 md:text-[0.94rem]">
            {footerRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap items-center gap-x-6 gap-y-1">
                {row.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            ))}
          </div>

          <p className="shrink-0 text-left text-sm font-medium tracking-[0.08em] text-white/42 md:text-[0.95rem] lg:pt-0.5 lg:text-right">
            {footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
