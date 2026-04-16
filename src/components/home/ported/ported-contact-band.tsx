/* eslint-disable @next/next/no-img-element */
import { portedHomepageData } from "@/lib/ported-homepage-data";
import { BrandMark } from "@/components/home/reference/reference-primitives";

type PortedContactBandProps = {
  contact: typeof portedHomepageData.contact;
};

const stars = Array.from({ length: 40 }).map((_, index) => ({
  width: `${1 + (index % 3)}px`,
  height: `${1 + (index % 3)}px`,
  left: `${(index * 17) % 100}%`,
  top: `${(index * 13) % 100}%`,
}));

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#001540]" fill="none" aria-hidden="true">
      <path d="M12 8v4l2.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#001540]" fill="none" aria-hidden="true">
      <path d="M4 10h16v10H4z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 10v10M4 14h16M6 10c-1.1-1-1.6-2.1-.8-3.2.8-1.1 2.4-.8 3.3.3.7.8 1.2 1.8 1.5 2.9M18 10c1.1-1 1.6-2.1.8-3.2-.8-1.1-2.4-.8-3.3.3-.7.8-1.2 1.8-1.5 2.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PortedContactBand({ contact }: PortedContactBandProps) {
  return (
    <footer id="contact-section" className="relative overflow-hidden bg-[#001540] py-20">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-24 w-[145%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[#001540]" />
      <div className="pointer-events-none absolute inset-0 z-0 text-white/5">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white opacity-20"
            style={{ width: star.width, height: star.height, left: star.left, top: star.top }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
          <BrandMark className="h-[500px] w-[500px] text-[#ffcf00]" />
        </div>

        <div className="mb-8 flex items-center justify-center gap-4">
          <BrandMark className="h-8 w-8 text-[#ffcf00]" />
          <span className="text-3xl font-black tracking-tight">{contact.eyebrow}</span>
          <BrandMark className="h-8 w-8 text-[#ffcf00]" />
        </div>

        <h2 className="mb-8 text-6xl font-black leading-none text-[#ffcf00] md:text-9xl">{contact.phoneDisplay}</h2>
        <p className="mb-12 text-4xl font-black md:text-5xl">{contact.title}</p>

        <div className="inline-flex flex-wrap items-center justify-center gap-8 rounded-full border border-white/10 bg-[#002266]/50 px-10 py-5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-[#ffcf00] p-1.5">
              <ClockIcon />
            </div>
            <span className="font-bold">{contact.chips[0]}</span>
          </div>
          <div className="hidden h-6 w-px bg-white/20 md:block" />
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-[#ffcf00] p-1.5">
              <GiftIcon />
            </div>
            <span className="font-bold uppercase tracking-wider text-[#ffcf00]">{contact.chips[1]}</span>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-10 text-sm text-white/40 md:flex-row">
          <p>© 2024 최강피자 부천본점. All rights reserved.</p>
          <div className="flex gap-6 text-white/60">
            <a href="#" className="transition-colors hover:text-white">
              이용약관
            </a>
            <a href="#" className="transition-colors hover:text-white">
              개인정보처리방침
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-36px] left-[-42px] hidden w-[360px] rotate-[-8deg] opacity-95 lg:block xl:w-[400px]">
        <img src="/assets/home/reference-crops/contact-left-3.png" alt="" className="w-full" />
      </div>
      <div className="pointer-events-none absolute bottom-10 right-[-18px] hidden w-[250px] rotate-[4deg] opacity-95 lg:block xl:w-[290px]">
        <img src="/assets/home/reference-crops/contact-right-4.png" alt="" className="w-full" />
      </div>
    </footer>
  );
}
