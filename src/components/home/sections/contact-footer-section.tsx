import Image from "next/image";
import { EyebrowPill } from "@/components/home/ui/eyebrow-pill";
import { contact as data } from "@/lib/home-content";

/** 10 ships unchanged; only the tokens are swapped for the new palette. */

function PhoneGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M7.4 4.8h2.2l1.2 3.8-1.8 1.6a15 15 0 0 0 5 5l1.6-1.8 3.8 1.2v2.2c0 .8-.6 1.4-1.4 1.4A13.2 13.2 0 0 1 4.8 6.2c0-.8.6-1.4 1.4-1.4Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="none" aria-hidden="true">
      <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path
        d="m5 8 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactFooterSection() {
  return (
    <>
      <section id="contact-cta" className="relative isolate scroll-mt-[var(--header-offset)] overflow-hidden bg-[#170503] text-white">
        <Image
          src={data.backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.5)_28%,rgba(0,0,0,0.78)_100%)]"
        />

        <div className="relative mx-auto w-full max-w-[93.25rem] px-5 py-section md:px-8 lg:w-[min(93.25rem,100%-5.4rem)] lg:max-w-none lg:px-0">
          <div className="motion-reveal text-center">
            <EyebrowPill label={data.pill} tone="contrast" />
            <h2 className="mt-label text-[1.95rem] font-black leading-[1.1] tracking-[-0.05em] lg:text-[clamp(2.2rem,3.6vw,3.8rem)]">
              {data.headlineLead}
              <span className="text-yellow-500">{data.headlineAccent}</span>
            </h2>
            <p className="mx-auto mt-group max-w-[36rem] text-[0.95rem] text-white/78 lg:max-w-none lg:text-[clamp(0.9rem,1.14vw,1.2rem)]">
              {data.description}
            </p>
          </div>

          <div className="mx-auto mt-block grid max-w-[62rem] gap-4 md:grid-cols-2 lg:gap-group">
            <a
              href={data.phone.href}
              className="flex items-center gap-4 rounded-card bg-yellow-500 px-6 py-6 text-ink-900 transition-transform duration-200 hover:-translate-y-1 lg:gap-group lg:px-card lg:py-card"
            >
              <PhoneGlyph />
              <span className="min-w-0">
                <span className="block text-[0.9rem] font-black tracking-[0.02em] lg:text-[clamp(0.85rem,1.02vw,1.07rem)]">
                  {data.phone.label}
                </span>
                <span className="mt-1.5 block whitespace-nowrap text-[1.25rem] font-black tracking-[-0.02em] lg:text-[clamp(1.15rem,1.5vw,1.58rem)]">
                  {data.phone.display}
                </span>
              </span>
            </a>

            <a
              href={data.email.href}
              className="flex items-center gap-4 rounded-card bg-white px-6 py-6 text-ink-900 transition-transform duration-200 hover:-translate-y-1 lg:gap-group lg:px-card lg:py-card"
            >
              <MailGlyph />
              <span className="min-w-0">
                <span className="block text-[0.9rem] font-black tracking-[0.02em] lg:text-[clamp(0.85rem,1.02vw,1.07rem)]">
                  {data.email.label}
                </span>
                <span className="mt-1.5 block truncate text-[1.15rem] font-black tracking-[-0.02em] lg:text-[clamp(1.05rem,1.4vw,1.48rem)]">
                  {data.email.display}
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#170503] text-white">
        <div className="mx-auto w-full max-w-[93.25rem] px-5 py-8 md:px-8 lg:w-[min(93.25rem,100%-5.4rem)] lg:max-w-none lg:px-0">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-2.5 text-[0.88rem] leading-relaxed text-white/60 lg:text-[clamp(0.82rem,0.98vw,1.02rem)]">
              {data.footerRows.map((row, index) => (
                <div key={index} className="flex flex-wrap items-center gap-x-6 gap-y-1">
                  {row.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              ))}
            </div>

            <p className="shrink-0 text-[0.8rem] font-medium tracking-[0.06em] text-white/40 lg:text-right lg:text-[clamp(0.75rem,0.92vw,0.96rem)]">
              {data.copyright}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
