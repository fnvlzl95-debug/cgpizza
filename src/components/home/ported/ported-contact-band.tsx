"use client";

import Image from "next/image";
import { PortedReviewShowcase } from "@/components/home/ported/ported-review-showcase";
import { portedHomepageData } from "@/lib/ported-homepage-data";

type PortedContactBandProps = {
  contact: typeof portedHomepageData.contact;
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 md:h-8 md:w-8" fill="none" aria-hidden="true">
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

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 md:h-8 md:w-8" fill="none" aria-hidden="true">
      <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" aria-hidden="true">
      <path d="M4 9.5h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M6 9.5v8.5h12V9.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 6h10l1 3.5H6L7 6Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 18v-4h4v4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScooterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" aria-hidden="true">
      <path d="M6.5 6.5h3v4.3l3.5 1.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.2 7h2.6l2.2 3.1" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <circle cx="7" cy="17.5" r="2.2" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.5" cy="17.5" r="2.2" stroke="currentColor" strokeWidth="1.9" />
      <path d="M9.3 17.5h6M14.8 10.8l-2.4 6.7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" aria-hidden="true">
      <path d="m7 12 3.3 3.3a2.2 2.2 0 0 0 3.1 0l3.6-3.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3.8 9.8 2.8-2.8a2.5 2.5 0 0 1 3.5 0l1.8 1.8a2.5 2.5 0 0 0 3.5 0l1-1a2.5 2.5 0 0 1 3.5 0l1.3 1.3" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.8 10.7 6 13.9M18 13.3l3.2-3.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function FranchiseFeatureIcon({ type }: { type: (typeof portedHomepageData.contact.featureCards)[number]["icon"] }) {
  if (type === "store") return <StoreIcon />;
  if (type === "scooter") return <ScooterIcon />;
  return <HandshakeIcon />;
}

function ShopInShopSection({
  section,
}: {
  section: typeof portedHomepageData.contact.shopInShopSection;
}) {
  return (
    <section id="shopinshop-section" className="border-t border-white/10 bg-[#061433] text-white">
      <div className="mx-auto w-full max-w-[1680px] px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-[1560px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
            <div className="max-w-xl">
              <p className="text-[0.88rem] font-black tracking-[0.14em] text-[#ffcf00] md:text-[0.95rem]">{section.eyebrow}</p>
              <h3 className="mt-4 max-w-[11ch] text-[2.45rem] font-black leading-[0.94] text-white md:max-w-none md:text-[3.8rem]">
                {section.title}
              </h3>
              <p className="mt-5 max-w-[32rem] text-[1rem] font-medium leading-relaxed text-white/74 md:text-[1.08rem]">
                {section.description}
              </p>
              <p className="mt-6 max-w-[32rem] text-[0.98rem] font-medium leading-relaxed text-white/62 md:text-[1.02rem]">
                {section.closingNote}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-[8px] border border-white/10 bg-[#071d55] p-6 shadow-[0_24px_64px_rgba(7,29,85,0.22)]">
                <p className="text-sm font-black tracking-[0.1em] text-[#ffcf00]">{section.headquartersTitle}</p>
                <div className="mt-5 space-y-4">
                  {section.headquartersItems.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ef4136]" />
                      <p className="text-base font-medium leading-relaxed text-white/88">{item}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[8px] border border-[#d2d9e8] bg-[#f4f5f7] p-6 text-[#111217] shadow-[0_22px_58px_rgba(17,18,23,0.12)]">
                <p className="text-sm font-black tracking-[0.1em] text-[#071d55]">{section.ownerTitle}</p>
                <div className="mt-5 space-y-4">
                  {section.ownerItems.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffcf00]" />
                      <p className="text-base font-medium leading-relaxed text-[#111217]/82">{item}</p>
                    </div>
                  ))}
                </div>
              </article>

              <div className="border-t border-white/10 pt-5 md:col-span-2">
                <p className="text-[0.82rem] font-black tracking-[0.14em] text-white/46">공통 효과</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {section.effects.map((effect) => (
                    <span
                      key={effect}
                      className="inline-flex items-center rounded-full bg-[#ffcf00] px-4 py-2 text-[0.92rem] font-black text-[#041544]"
                    >
                      {effect}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortedContactBand({ contact }: PortedContactBandProps) {
  const [smallStoreCard, focusedStartupCard, beginnerCard] = contact.featureCards;

  return (
    <section id="contact-section" className="bg-[#061433]">
      <div className="bg-[#f4f5f7] text-[#111217] md:flex md:min-h-screen md:items-center">
        <div className="mx-auto w-full max-w-[1680px] px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-[2.3rem] font-black leading-[0.94] tracking-[-0.03em] text-[#111217] md:text-[3.7rem]">
              <span>{contact.reasonTitle} </span>
              <span className="text-[#ef4136]">{contact.reasonHighlight}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-relaxed text-[#5d606b] md:text-[1.08rem]">
              {contact.reasonDescription}
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[1240px] gap-4 lg:grid-cols-[minmax(0,1.16fr)_minmax(20rem,0.84fr)] lg:items-stretch xl:gap-5">
            <article className="relative isolate overflow-hidden rounded-[8px] bg-[#0f1628] shadow-[0_24px_64px_rgba(17,18,23,0.14)] min-h-[24rem] sm:min-h-[29rem] lg:min-h-[36rem]">
              {smallStoreCard.image ? (
                <Image
                  src={smallStoreCard.image}
                  alt={smallStoreCard.title}
                  fill
                  className="object-cover object-[center_82%] sm:object-[center_76%]"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              ) : null}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,40,0.06)_0%,rgba(15,22,40,0.18)_48%,rgba(15,22,40,0.92)_100%)]" />
              <div className="relative flex h-full flex-col justify-end p-5 md:p-7 lg:p-8">
                <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#ef4136] text-white shadow-[0_12px_28px_rgba(239,65,54,0.35)]">
                  <FranchiseFeatureIcon type={smallStoreCard.icon} />
                </div>
                <p className="mt-5 text-[0.84rem] font-black tracking-[0.14em] text-[#ffcf00]">01</p>
                <h3 className="mt-3 max-w-[13ch] text-[1.9rem] font-black leading-[1.02] text-white md:text-[2.7rem]">
                  {smallStoreCard.title}
                </h3>
                <div className="mt-3 max-w-[28rem] space-y-2 text-sm font-medium leading-relaxed text-white/82 md:text-[1.02rem]">
                  {smallStoreCard.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-4 lg:grid-rows-2">
              <article className="flex h-full min-h-[14rem] flex-col rounded-[8px] border border-[#d2d9e8] bg-[#ffffff] p-5 text-[#181a21] shadow-[0_24px_58px_rgba(7,29,85,0.12)] md:p-6 lg:p-7">
                <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-[#071d55] text-[#ffcf00]">
                  <FranchiseFeatureIcon type={focusedStartupCard.icon} />
                </div>
                <p className="mt-6 text-[0.84rem] font-black tracking-[0.14em] text-[#ef4136]">02</p>
                <h3 className="mt-3 max-w-[12ch] text-[1.7rem] font-black leading-[1.06] md:text-[2.1rem]">{focusedStartupCard.title}</h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-[#5d606b] md:text-[1.01rem]">
                  {focusedStartupCard.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>

              <article className="flex h-full min-h-[14rem] flex-col rounded-[8px] bg-[#071d55] p-5 text-white shadow-[0_24px_64px_rgba(7,29,85,0.22)] md:p-6 lg:p-7">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-white/12 text-white">
                  <FranchiseFeatureIcon type={beginnerCard.icon} />
                </div>
                <p className="mt-6 text-[0.84rem] font-black tracking-[0.14em] text-[#ffcf00]">03</p>
                <div className="mt-3 max-w-[28rem]">
                  <h3 className="max-w-[12ch] text-[1.7rem] font-black leading-[1.06] md:text-[2.1rem]">{beginnerCard.title}</h3>
                  <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-white/86 md:text-[1.01rem]">
                    {beginnerCard.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <ShopInShopSection section={contact.shopInShopSection} />

      <PortedReviewShowcase reviewShowcase={contact.reviewShowcase} />

      <div id="contact-cta-section" className="bg-[#071d55] text-white">
        <div className="mx-auto w-full max-w-[1680px] px-4 py-20 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-[1560px] gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-[1.15rem] font-black tracking-[0.1em] text-[#ffcf00] md:text-[2rem]">{contact.ctaEyebrow}</p>
              <h3 className="text-balance mt-4 max-w-[9ch] text-[2.95rem] font-black leading-[0.95] md:max-w-none md:text-7xl">
                {contact.ctaTitle}
              </h3>
              <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/72 md:text-xl">
                {contact.ctaDescription}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <a
                href={contact.primaryCta.href}
                className="flex min-h-[6.5rem] items-center gap-4 rounded-[8px] bg-[#ffcf00] px-6 py-5 text-[#041544] transition-transform duration-300 hover:-translate-y-1 hover:text-[#041544]"
              >
                <span className="shrink-0 text-[#041544]">
                  <PhoneIcon />
                </span>
                <span className="min-w-0 flex flex-col">
                  <span className="text-[0.94rem] font-black leading-none tracking-[0.02em] text-[#041544] md:text-[0.95rem]">
                    {contact.primaryCta.label}
                  </span>
                  <span className="mt-2 whitespace-nowrap text-[1.08rem] font-black leading-[1.15] tracking-[-0.01em] text-[#041544] md:text-[1.22rem]">{contact.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={contact.secondaryCta.href}
                className="flex min-h-[6.5rem] items-center gap-4 rounded-[8px] border border-[#dce4f0] bg-white px-6 py-5 text-[#041544] transition-colors duration-300 hover:bg-[#f6f8fc] hover:text-[#041544]"
              >
                <span className="shrink-0 text-[#041544]">
                  <MailIcon />
                </span>
                <span className="min-w-0 flex flex-col">
                  <span className="text-[0.94rem] font-black leading-none tracking-[0.02em] text-[#041544] md:text-[0.95rem]">{contact.secondaryCta.label}</span>
                  <span className="mt-2 whitespace-nowrap text-[1.08rem] font-black leading-[1.15] tracking-[-0.02em] text-[#041544] md:text-[1.22rem]">{contact.emailDisplay}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-[#061433] text-white">
        <div className="mx-auto max-w-[1680px] px-4 py-7 md:px-6 md:py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3 text-left text-sm leading-relaxed text-white/62 md:text-[0.94rem]">
              {contact.footerRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap items-center gap-x-6 gap-y-1">
                  {row.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              ))}
            </div>

            <p className="shrink-0 text-left text-sm font-medium tracking-[0.08em] text-white/42 md:text-[0.95rem] lg:pt-0.5 lg:text-right">
              {contact.footerCopyright}
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
