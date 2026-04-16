import Image from "next/image";
import { arcStyle, BrandMark } from "@/components/home/reference/reference-primitives";
import { referenceHomepageData } from "@/lib/reference-homepage-data";

type ReferenceContactBandProps = {
  contact: typeof referenceHomepageData.contact;
};

function ContactInfoPill({ labels }: { labels: readonly string[] }) {
  return (
    <div className="inline-flex items-center gap-4 rounded-full bg-[#143a87] px-5 py-3 text-base font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#ffd12a]" fill="none" aria-hidden="true">
        <path d="M6 7h9l-2.5-2.5M18 17H9l2.5 2.5M17 7l3 3-3 3M7 17l-3-3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{labels[0]}</span>
      <span className="h-5 w-px bg-white/22" />
      <span>{labels[1].split(" ")[0]} <span className="text-[#ffd12a]">{labels[1].replace(labels[1].split(" ")[0] + " ", "")}</span></span>
    </div>
  );
}

export function ReferenceContactBand({ contact }: ReferenceContactBandProps) {
  return (
    <section
      id="contact-section"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#0a2b74_0%,#08245f_100%)] px-4 pb-16 pt-14 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-x-6 top-0 h-12 -translate-y-1/2 bg-[#08245f] sm:inset-x-12 lg:inset-x-20" style={arcStyle("#08245f")} />
      <div id="store-section" className="absolute -top-16" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_14%,rgba(255,210,42,0.18),transparent_20%),radial-gradient(circle_at_94%_16%,rgba(255,210,42,0.12),transparent_16%),radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.08),transparent_10%)]" />
      <div className="absolute inset-x-0 top-8 h-24 bg-[radial-gradient(circle,rgba(255,210,42,0.78)_0,rgba(255,210,42,0.78)_1px,transparent_1.5px)] [background-size:38px_38px] opacity-25" />

      <div className="pointer-events-none absolute bottom-[-2rem] left-[-5.5rem] z-10 h-[15rem] w-[15rem] sm:left-[-4rem] sm:h-[20rem] sm:w-[20rem] lg:left-[-0.8rem] lg:h-[23rem] lg:w-[26rem]">
        <Image
          src="/assets/home/reference-crops/contact-left-3.png"
          alt="최강피자 대표 피자"
          fill
          sizes="(min-width: 1024px) 26rem, 20rem"
          className="object-contain object-left-bottom drop-shadow-[0_20px_40px_rgba(3,12,36,0.45)]"
        />
      </div>

      <div className="pointer-events-none absolute bottom-[-1rem] right-[-3.25rem] z-10 h-[12.5rem] w-[12.5rem] sm:right-[-2rem] sm:h-[16rem] sm:w-[16rem] lg:right-[-0.4rem] lg:h-[19rem] lg:w-[19rem]">
        <Image
          src="/assets/home/reference-crops/contact-right-4.png"
          alt="최강피자 핫윙"
          fill
          sizes="(min-width: 1024px) 19rem, 16rem"
          className="object-contain object-right-bottom drop-shadow-[0_20px_40px_rgba(3,12,36,0.45)]"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[980px] text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#143a87] px-5 py-2 text-sm font-black text-[#ffd12a] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <BrandMark className="h-4 w-4 text-[#ffd12a]" />
          {contact.badge}
          <BrandMark className="h-4 w-4 text-[#ffd12a]" />
        </span>

        <div className="pointer-events-none absolute left-[24%] top-[49%] hidden text-[#234c9c]/40 lg:block">
          <BrandMark className="h-16 w-16" />
        </div>
        <div className="pointer-events-none absolute right-[24%] top-[49%] hidden text-[#234c9c]/40 lg:block">
          <BrandMark className="h-16 w-16" />
        </div>

        <a href={contact.phoneHref} className="mt-5 block text-[3.2rem] font-black leading-none tracking-[-0.03em] text-[#ffd12a] sm:text-[5.4rem]">
          {contact.phoneDisplay}
        </a>

        <p className="mt-3 text-[1.7rem] font-black sm:text-[2.15rem]">{contact.title}</p>

        <div className="mt-7 flex items-center justify-center">
          <ContactInfoPill labels={contact.chips} />
        </div>
      </div>
    </section>
  );
}
