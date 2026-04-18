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
    <section
      id="shopinshop-section"
      className="scroll-mt-[5.25rem] border-t border-white/10 bg-[#061433] text-white md:flex md:min-h-[calc(100svh-5.25rem)] md:items-center"
    >
      <div className="mx-auto w-full max-w-[1680px] px-4 py-16 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
            <div className="max-w-xl">
              <p className="text-[0.86rem] font-black tracking-[0.16em] text-[#ffcf00] md:text-[0.92rem]">{section.eyebrow}</p>
              <h3 className="mt-4 text-balance text-[2.5rem] font-black leading-[0.94] text-white md:text-[4rem]">
                {section.title}
              </h3>
              <p className="mt-5 max-w-[32rem] text-[1rem] font-medium leading-relaxed text-white/74 md:text-[1.08rem]">
                {section.description}
              </p>
              <p className="mt-6 text-[1.1rem] font-black leading-snug text-[#ffcf00] md:text-[1.35rem]">
                기존 공간 안에서 추가 매출을 만드는 방식
              </p>
              <p className="mt-3 max-w-[30rem] text-[0.98rem] font-medium leading-relaxed text-white/58 md:text-[1.02rem]">
                {section.closingNote}
              </p>
            </div>

            <div className="overflow-hidden rounded-[8px] border border-white/10 bg-white text-[#111217] shadow-[0_26px_70px_rgba(7,29,85,0.22)]">
              <div className="grid md:grid-cols-2">
                <article className="p-6 md:p-8">
                  <p className="text-[0.82rem] font-black tracking-[0.16em] text-[#071d55]/52">{section.headquartersTitle}</p>
                  <div className="mt-6 space-y-5">
                    {section.headquartersItems.map((item, index) => (
                      <div key={item} className="flex gap-4">
                        <span className="mt-0.5 text-[1.6rem] font-black leading-none text-[#ef4136]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[1rem] font-semibold leading-relaxed text-[#111217]/84 md:text-[1.08rem]">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="border-t border-[#e3e6ec] bg-[#ffcf00] p-6 text-[#041544] md:border-l md:border-t-0 md:p-8">
                  <p className="text-[0.82rem] font-black tracking-[0.16em] text-[#041544]/62">{section.ownerTitle}</p>
                  <div className="mt-6 space-y-5">
                    {section.ownerItems.map((item, index) => (
                      <div key={item} className="flex gap-4">
                        <span className="mt-0.5 text-[1.6rem] font-black leading-none text-[#041544]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[1rem] font-semibold leading-relaxed text-[#041544]/84 md:text-[1.08rem]">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <div className="border-t border-[#e3e6ec] bg-[#f4f5f7] px-6 py-6 md:px-8">
                <p className="text-[0.78rem] font-black tracking-[0.16em] text-[#071d55]/48">핵심 효과</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {section.effects.map((effect) => (
                    <div
                      key={effect}
                      className="rounded-[8px] bg-[#071d55] px-4 py-4 text-center text-[0.96rem] font-black text-white md:text-[1rem]"
                    >
                      {effect}
                    </div>
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
    <section id="contact-section" className="scroll-mt-[5.25rem] bg-[#061433]">
      <div className="bg-[#f4f5f7] text-[#111217] md:flex md:min-h-[calc(100svh-5.25rem)] md:items-center">
        <div className="mx-auto w-full max-w-[1680px] px-4 py-12 md:px-6 md:py-8 xl:py-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-[2.3rem] font-black leading-[0.94] tracking-[-0.03em] text-[#111217] md:text-[3.15rem] xl:text-[3.45rem]">
              <span>{contact.reasonTitle} </span>
              <span className="text-[#ef4136]">{contact.reasonHighlight}</span>
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm font-medium leading-relaxed text-[#5d606b] md:text-[1rem]">
              {contact.reasonDescription}
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-[1180px] gap-4 lg:grid-cols-[minmax(0,1.16fr)_minmax(20rem,0.84fr)] lg:items-stretch xl:gap-5">
            <article className="relative isolate overflow-hidden rounded-[8px] bg-[#0f1628] shadow-[0_24px_64px_rgba(17,18,23,0.14)] min-h-[24rem] sm:min-h-[29rem] lg:min-h-[29rem] xl:min-h-[31rem]">
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
              <div className="relative flex h-full flex-col justify-end p-5 md:p-6 lg:p-6 xl:p-7">
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#ef4136] text-white shadow-[0_12px_28px_rgba(239,65,54,0.35)] xl:h-[64px] xl:w-[64px]">
                  <FranchiseFeatureIcon type={smallStoreCard.icon} />
                </div>
                <p className="mt-4 text-[0.84rem] font-black tracking-[0.14em] text-[#ffcf00]">01</p>
                <h3 className="mt-2 max-w-[13ch] text-[1.9rem] font-black leading-[1.02] text-white md:text-[2.25rem] xl:text-[2.5rem]">
                  {smallStoreCard.title}
                </h3>
                <div className="mt-3 max-w-[28rem] space-y-2 text-sm font-medium leading-relaxed text-white/82 md:text-[0.96rem] xl:text-[1rem]">
                  {smallStoreCard.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-4 lg:grid-rows-2">
              <article className="flex h-full min-h-[12rem] flex-col rounded-[8px] border border-[#d2d9e8] bg-[#ffffff] p-5 text-[#181a21] shadow-[0_24px_58px_rgba(7,29,85,0.12)] md:p-6 lg:p-6">
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-[#071d55] text-[#ffcf00] xl:h-[60px] xl:w-[60px]">
                  <FranchiseFeatureIcon type={focusedStartupCard.icon} />
                </div>
                <p className="mt-5 text-[0.84rem] font-black tracking-[0.14em] text-[#ef4136]">02</p>
                <h3 className="mt-2 max-w-[12ch] text-[1.55rem] font-black leading-[1.06] md:text-[1.8rem] xl:text-[1.95rem]">{focusedStartupCard.title}</h3>
                <div className="mt-3 space-y-2.5 text-sm font-medium leading-relaxed text-[#5d606b] md:text-[0.95rem] xl:text-[0.98rem]">
                  {focusedStartupCard.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>

              <article className="flex h-full min-h-[12rem] flex-col rounded-[8px] bg-[#071d55] p-5 text-white shadow-[0_24px_64px_rgba(7,29,85,0.22)] md:p-6 lg:p-6">
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-white/12 text-white xl:h-[68px] xl:w-[68px]">
                  <FranchiseFeatureIcon type={beginnerCard.icon} />
                </div>
                <p className="mt-5 text-[0.84rem] font-black tracking-[0.14em] text-[#ffcf00]">03</p>
                <div className="mt-3 max-w-[28rem]">
                  <h3 className="max-w-[12ch] text-[1.55rem] font-black leading-[1.06] md:text-[1.8rem] xl:text-[1.95rem]">{beginnerCard.title}</h3>
                  <div className="mt-3 space-y-2.5 text-sm font-medium leading-relaxed text-white/86 md:text-[0.95rem] xl:text-[0.98rem]">
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
