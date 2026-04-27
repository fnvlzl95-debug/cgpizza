"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion, type Transition } from "framer-motion";
import { PortedBrandVideoSection } from "@/components/home/ported/ported-brand-video-section";
import { useEffect, useRef, useState } from "react";
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

function StoreIcon({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4 9.5h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M6 9.5v8.5h12V9.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 6h10l1 3.5H6L7 6Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 18v-4h4v4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScooterIcon({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M6.5 6.5h3v4.3l3.5 1.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.2 7h2.6l2.2 3.1" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <circle cx="7" cy="17.5" r="2.2" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.5" cy="17.5" r="2.2" stroke="currentColor" strokeWidth="1.9" />
      <path d="M9.3 17.5h6M14.8 10.8l-2.4 6.7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M7.5 4.8h9A1.7 1.7 0 0 1 18.2 6.5v12a1.7 1.7 0 0 1-1.7 1.7h-9a1.7 1.7 0 0 1-1.7-1.7v-12a1.7 1.7 0 0 1 1.7-1.7Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M9 8.2h6M9 11.6h6M9 15h3.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="m14.6 15.7 1.4 1.4 2.7-3" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClipboardIcon({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M8 5.5h8a1.8 1.8 0 0 1 1.8 1.8v11.2a1.8 1.8 0 0 1-1.8 1.8H8a1.8 1.8 0 0 1-1.8-1.8V7.3A1.8 1.8 0 0 1 8 5.5Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M9.2 4.2h5.6a1.1 1.1 0 0 1 1.1 1.1v1H8.1v-1a1.1 1.1 0 0 1 1.1-1.1Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="m9.4 12.2 1.7 1.7 3.8-3.9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BagIcon({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M7 9h10l1 10H6L7 9Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 9V7.8A2.5 2.5 0 0 1 12 5.3a2.5 2.5 0 0 1 2.5 2.5V9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M10 13.5h4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function FranchiseFeatureIcon({ type }: { type: (typeof portedHomepageData.contact.featureCards)[number]["icon"] }) {
  if (type === "store") return <StoreIcon />;
  if (type === "scooter") return <ScooterIcon />;
  if (type === "clipboard") return <ClipboardIcon />;
  return <HandshakeIcon />;
}

function ThreeWayPanelIcon({
  icon,
  className,
}: {
  icon?: (typeof portedHomepageData.contact.threeWaySection.panels)[number]["icon"];
  className: string;
}) {
  if (icon === "delivery") return <ScooterIcon className={className} />;
  return <BagIcon className={className} />;
}

function ThreeWayPlusCircle({
  symbol = "+",
  delay,
  reduceMotion,
  threeWayInView,
  stackedLayout,
}: {
  symbol?: string;
  delay: number;
  reduceMotion: boolean;
  threeWayInView: boolean;
  stackedLayout: boolean;
}) {
  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : stackedLayout
            ? { opacity: 0, y: -10, scale: 0.88 }
            : { opacity: 0, x: -44 }
      }
      animate={
        reduceMotion || threeWayInView
          ? stackedLayout
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 1, x: 0 }
          : stackedLayout
            ? { opacity: 0, y: -10, scale: 0.88 }
            : { opacity: 0, x: -44 }
      }
      transition={{
        duration: stackedLayout ? 0.46 : 0.46,
        delay,
        ease: "linear" as const,
      }}
      className="flex h-12 w-12 items-center justify-center self-center rounded-full bg-[#041544] text-[1.9rem] font-black leading-none text-[#ffcf00] shadow-[0_18px_38px_rgba(4,21,68,0.2)] md:h-16 md:w-16 md:text-[2.1rem] xl:h-20 xl:w-20 xl:-translate-y-[0.35rem] xl:text-[2.25rem] xl:place-self-center"
      aria-hidden="true"
    >
      <span className="block leading-none">{symbol}</span>
    </motion.div>
  );
}

function ShopInShopSection({
  section,
}: {
  section: typeof portedHomepageData.contact.shopInShopSection;
}) {
  const shopInShopSequenceRef = useRef<HTMLDivElement | null>(null);
  const shopInShopInView = useInView(shopInShopSequenceRef, {
    amount: 0.35,
    margin: "0px 0px -12% 0px",
  });
  const reduceMotion = Boolean(useReducedMotion());
  const [isMobileStack, setIsMobileStack] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncMobile = () => setIsMobileStack(mediaQuery.matches);

    syncMobile();
    mediaQuery.addEventListener("change", syncMobile);

    return () => mediaQuery.removeEventListener("change", syncMobile);
  }, []);

  const FeatureIcon = ({
    icon,
    className,
  }: {
    icon: (typeof section.features)[number]["icon"];
    className: string;
  }) => {
    if (icon === "space") {
      return (
        <svg viewBox="0 0 24 24" className={`h-9 w-9 ${className}`} fill="none" aria-hidden="true">
          <path d="M8 4H5a1 1 0 0 0-1 1v3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );
    }

    if (icon === "cook") {
      return (
        <svg viewBox="0 0 24 24" className={`h-9 w-9 ${className}`} fill="none" aria-hidden="true">
          <path d="M8 20v-6.2A4.3 4.3 0 0 1 12.3 9a4.3 4.3 0 0 1 4.2 4.3V20" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M6.6 11.2A4.6 4.6 0 0 1 11 6.5c.8-2 2.2-3 4.2-3 2.6 0 4.7 2 4.8 4.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M8.8 20h7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" className={`h-9 w-9 ${className}`} fill="none" aria-hidden="true">
        <path d="m5 16 4.5-4.5 3.2 3.2L19 8.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 8.4H19v4.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  return (
    <section
      id="shopinshop-section"
      className="app-screen-min-offset app-screen-snap-target flex items-center border-t border-white/10 bg-[#061433] text-white"
    >
      <div className="relative mx-auto w-full max-w-[1680px] overflow-hidden px-4 py-8 md:px-6 md:py-12 xl:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[14%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,207,0,0.16)_0%,rgba(255,207,0,0.08)_28%,rgba(255,207,0,0)_72%)] blur-2xl md:top-[16%] md:h-[30rem] md:w-[30rem]"
        />

        <div className="relative mx-auto max-w-6xl md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-balance text-[2.2rem] font-black leading-[0.92] tracking-[-0.05em] text-white md:text-[3.6rem] xl:text-[4.1rem]">
              <span className="block bg-[linear-gradient(180deg,#ffcf00_0%,#f5a000_100%)] bg-clip-text leading-[0.98] text-transparent">
                {section.eyebrow}
              </span>
              <span className="mt-3 block md:mt-4">{section.titleLead}</span>
              <span className="mt-2 block bg-[linear-gradient(180deg,#ffcf00_0%,#f5a000_100%)] bg-clip-text text-transparent md:mt-3">
                {section.titleHighlight}
              </span>
            </h3>
          </div>

          <div
            ref={shopInShopSequenceRef}
            className="mx-auto mt-7 grid max-w-5xl gap-2.5 md:mt-0 md:max-w-none md:grid-cols-1 md:gap-3.5"
          >
            {section.features.map((feature, index) => {
              const mobileSequenceActive = isMobileStack && (reduceMotion || shopInShopInView);
              const mobileTransition: Transition = reduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.52,
                    delay: shopInShopInView ? 0.32 + index * 0.42 : 0,
                    ease: "easeOut",
                  };

              return (
                <motion.div
                  key={feature.title}
                  initial={false}
                  animate={
                    isMobileStack
                      ? mobileSequenceActive
                        ? {
                            backgroundColor: "rgba(255,255,255,0.04)",
                            borderColor: "rgba(255,255,255,0.08)",
                            boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
                          }
                        : {
                            backgroundColor: "rgba(255,255,255,0)",
                            borderColor: "rgba(255,255,255,0)",
                            boxShadow: "0 0 0 rgba(0,0,0,0)",
                          }
                      : undefined
                  }
                  transition={isMobileStack ? mobileTransition : undefined}
                  className="group relative flex min-h-[5.4rem] flex-row items-center justify-start gap-3 rounded-[8px] border border-transparent px-4 py-3 text-left transition-all duration-300 md:min-h-[7.4rem] md:flex-row md:items-center md:justify-start md:gap-5 md:px-6 md:py-5 md:text-left md:hover:border-white/8 md:hover:bg-white/[0.04] md:hover:shadow-[0_18px_40px_rgba(0,0,0,0.24)]"
                >
                  <motion.div
                    initial={false}
                    animate={
                      isMobileStack
                        ? mobileSequenceActive
                          ? { backgroundColor: "rgba(255,207,0,0.1)", color: "#ffcf00" }
                          : { backgroundColor: "rgba(255,207,0,0)", color: "rgba(255,255,255,0.28)" }
                        : undefined
                    }
                    transition={isMobileStack ? mobileTransition : undefined}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] transition-all duration-300 md:h-14 md:w-14 md:rounded-[14px] md:group-hover:bg-[#ffcf00]/10"
                  >
                    <FeatureIcon
                      icon={feature.icon}
                      className={isMobileStack ? "h-7 w-7" : "text-white/28 transition-colors duration-300 md:group-hover:text-[#ffcf00]"}
                    />
                  </motion.div>

                  <div className="min-w-0">
                    <motion.p
                      initial={false}
                      animate={
                        isMobileStack
                          ? mobileSequenceActive
                            ? { color: "rgba(255,255,255,1)" }
                            : { color: "rgba(255,255,255,0.84)" }
                          : undefined
                      }
                      transition={isMobileStack ? mobileTransition : undefined}
                      className="text-[1.08rem] font-black leading-tight text-white/84 transition-colors duration-300 md:text-[1.5rem] md:group-hover:text-white"
                    >
                      {feature.title}
                    </motion.p>
                    <motion.p
                      initial={false}
                      animate={
                        isMobileStack
                          ? mobileSequenceActive
                            ? { color: "#ffcf00" }
                            : { color: "rgba(255,207,0,0.88)" }
                          : undefined
                      }
                      transition={isMobileStack ? mobileTransition : undefined}
                      className="mt-1 text-[0.82rem] font-black text-[#ffcf00]/88 transition-colors duration-300 md:mt-1.5 md:text-[0.95rem] md:group-hover:text-[#ffcf00]"
                    >
                      {feature.accent}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShopInShopIntroSection({
  section,
}: {
  section: typeof portedHomepageData.contact.shopInShopIntro;
}) {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="shopinshop-intro-section"
      className="app-screen-min-offset app-screen-snap-target relative isolate flex items-center overflow-hidden bg-[#061433] text-white"
    >
      <Image
        src={section.backgroundImage}
        alt=""
        fill
        sizes="100vw"
        quality={100}
        priority
        className="scale-[1.01] object-cover object-[center_58%]"
      />
      <div className="absolute inset-0 bg-[#061433]/58" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,51,0.48)_0%,rgba(6,20,51,0.54)_34%,rgba(6,20,51,0.72)_68%,rgba(4,21,68,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,21,68,0.34)_0%,rgba(4,21,68,0.12)_24%,rgba(4,21,68,0.12)_76%,rgba(4,21,68,0.34)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1680px] flex-col items-center justify-center px-4 py-10 text-center md:px-6 md:py-14">
        <span className="inline-flex rounded-full bg-[#ffcf00] px-5 py-2 text-[0.84rem] font-black tracking-[0.02em] text-[#041544] shadow-[0_18px_44px_rgba(255,207,0,0.24)] md:px-6 md:py-2.5 md:text-[0.96rem]">
          {section.eyebrow}
        </span>

        <h3 className="mt-6 max-w-[13ch] text-balance text-[3rem] font-black leading-[0.94] tracking-[-0.06em] text-white [text-shadow:0_10px_28px_rgba(4,21,68,0.34)] sm:text-[3.5rem] md:mt-7 md:max-w-none md:text-[5.5rem] xl:text-[6.5rem]">
          <span className="block">
            매출의 <span className="text-[#ffcf00]">한계</span>를 넘는
          </span>
          <span className="block">
            가장 확실한 <span className="text-[#ffcf00]">선택</span>
          </span>
        </h3>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-7 z-20 flex justify-center md:bottom-8">
        <motion.a
          href="#shopinshop-section"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 18, 0, -6, 0],
                  scale: [1, 1.1, 1, 1.03, 1],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 1.05,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="pointer-events-auto inline-flex flex-col items-center gap-0 transition-transform duration-300 hover:-translate-y-1"
        >
          <span className="text-[0.86rem] font-black tracking-[0.28em] text-[#ffcf00] [text-shadow:0_6px_18px_rgba(4,21,68,0.32)] md:text-[0.94rem]">
            {section.scrollLabel}
          </span>
          <span className="text-[1.8rem] leading-none text-[#ffcf00] [text-shadow:0_6px_18px_rgba(4,21,68,0.32)]">⌄</span>
        </motion.a>
      </div>
    </section>
  );
}

function renderFeatureTitle(title: string) {
  const lines = title.split("\n");

  return lines.map((line, index) => (
    <span key={`${line}-${index}`} className={index === 0 ? "" : "lg:block"}>
      {index > 0 ? <span className="lg:hidden"> </span> : null}
      {line}
    </span>
  ));
}

function renderLimitedStoreText(text: string) {
  const limitedStoreText = "20호점";
  const limitedStoreIndex = text.indexOf(limitedStoreText);

  if (limitedStoreIndex < 0) {
    return text;
  }

  const before = text.slice(0, limitedStoreIndex);
  const after = text.slice(limitedStoreIndex + limitedStoreText.length);

  return (
    <>
      {before}
      <span className="relative inline-block whitespace-nowrap px-[0.12em] font-black text-[#ffcf00]">
        <span className="relative z-10">{limitedStoreText}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 118 54"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -inset-x-[0.26em] -inset-y-[0.22em] h-[calc(100%+0.44em)] w-[calc(100%+0.52em)] overflow-visible text-[#ef4136] drop-shadow-[0_0_5px_rgba(239,65,54,0.52)]"
        >
          <path
            d="M9 28 C8 12 31 5 61 6 C95 7 114 19 109 35 C104 51 72 52 39 47 C17 43 5 37 9 28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            d="M13 31 C15 16 38 9 67 10 C96 11 111 23 106 36 C101 48 73 50 43 45 C21 42 11 37 13 31"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.5"
            strokeWidth="2.2"
          />
        </svg>
      </span>
      {after}
    </>
  );
}

function renderTriptychLine(line: string) {
  const highlightedText = "(가맹비 - 800만원) + 로열티 면제";
  const highlightedIndex = line.indexOf(highlightedText);

  if (highlightedIndex < 0) {
    return line;
  }

  const before = line.slice(0, highlightedIndex);
  const after = line.slice(highlightedIndex + highlightedText.length);

  return (
    <>
      {renderLimitedStoreText(before)}
      <span className="relative ml-[0.18em] inline-block whitespace-nowrap pb-[0.18em] font-black text-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 28 24"
          className="pointer-events-none absolute left-[0.04em] -top-[0.48em] h-[0.76em] w-[0.9em] -rotate-[6deg] overflow-visible text-[#ef4136] drop-shadow-[0_0_5px_rgba(239,65,54,0.55)]"
        >
          <path
            d="M3.5 12.8 C6.5 15.7 8.9 18 11.3 20.1 C15.2 13.5 19.9 7.2 25 3.7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.2"
          />
          <path
            d="M4.8 12.6 C7.2 14.9 9.1 16.9 11.1 18.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.32"
            strokeWidth="1.25"
          />
        </svg>
        <span className="relative z-10">{highlightedText}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 120 10"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-0 top-[calc(100%-0.16em)] h-[0.42em] w-full overflow-visible text-[#ef4136] drop-shadow-[0_0_5px_rgba(239,65,54,0.5)]"
        >
          <path
            d="M1 6 C 21 2.2 46 2.1 68 3.7 C 88 5.1 105 5.4 119 4.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M5 8.8 C 34 5.6 76 6.1 115 7.1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeOpacity="0.68"
            strokeWidth="1.2"
          />
        </svg>
      </span>
      {after}
    </>
  );
}

function ShopInShopImageTriptychSection({
  section,
}: {
  section: typeof portedHomepageData.contact.shopInShopImageTriptych;
}) {
  const panelNumber = (index: number) => String(index + 1).padStart(2, "0");

  return (
    <section className="app-screen-snap-target relative overflow-hidden bg-[#02050b] text-white">
      <div className="pointer-events-none absolute inset-0 hidden lg:block bg-[linear-gradient(180deg,rgba(2,5,11,0.34)_0%,rgba(2,5,11,0.16)_16%,rgba(2,5,11,0.24)_52%,rgba(2,5,11,0.62)_100%)]" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block bg-[radial-gradient(circle_at_50%_18%,rgba(255,207,0,0.04)_0%,rgba(255,207,0,0.012)_20%,rgba(255,207,0,0)_42%)]" />
      {section.note ? (
        <p className="absolute right-5 top-5 z-10 max-w-[18rem] text-right text-[0.72rem] font-bold leading-relaxed text-white/72 md:right-8 md:top-7 md:max-w-none md:text-[0.9rem]">
          {section.note}
        </p>
      ) : null}

      <div className="app-screen-min-offset hidden grid-cols-3 lg:grid">
        {section.panels.map((panel, index) => {
          const toneClass =
            panel.tone === "blue"
              ? "bg-[linear-gradient(180deg,rgba(8,17,34,0.34)_0%,rgba(3,8,18,0.46)_34%,rgba(2,5,11,0.92)_100%)]"
              : "bg-[linear-gradient(180deg,rgba(3,6,12,0.28)_0%,rgba(2,5,11,0.52)_38%,rgba(2,5,11,0.94)_100%)]";

          return (
            <article key={panel.title} className="app-screen-min-offset group relative overflow-hidden">
              <Image
                src={panel.image}
                alt=""
                fill
                sizes="33vw"
                quality={100}
                className="object-cover brightness-[0.58] contrast-[1.06] saturate-[0.12] transition-all duration-700 ease-out group-hover:scale-[1.018] group-hover:brightness-[0.66]"
                style={{ objectPosition: panel.objectPosition ?? "center center" }}
              />
              <div className={`absolute inset-0 ${toneClass}`} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,11,0.04)_0%,rgba(2,5,11,0.18)_24%,rgba(2,5,11,0.46)_56%,rgba(2,5,11,0.94)_100%)]" />

              <div className="app-screen-min-offset relative flex items-end px-9 py-10 xl:px-11 xl:py-11">
                <div className="min-h-[12.4rem] max-w-[25rem] transition-transform duration-500 ease-out group-hover:-translate-y-2 xl:min-h-[13rem] xl:max-w-[27rem]">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`h-px w-8 transition-all duration-500 ease-out group-hover:w-11 ${
                        index === 1 ? "bg-[#ffcf00]" : "bg-white/72 group-hover:bg-[#ffcf00]"
                      }`}
                    />
                    <span
                      className={`text-[0.78rem] font-black tracking-[0.18em] transition-colors duration-500 ${
                        index === 1 ? "text-[#ffcf00] group-hover:text-[#ffe27a]" : "text-white/82 group-hover:text-[#ffcf00]"
                      }`}
                    >
                      {panelNumber(index)}
                    </span>
                  </div>
                  <h3 className="text-[1.72rem] font-black leading-[0.98] tracking-[-0.04em] text-white transition-colors duration-500 [text-shadow:0_10px_28px_rgba(2,5,11,0.48)] group-hover:text-[#fff8e1] xl:text-[2.08rem]">
                    {panel.title}
                  </h3>
                  <div className="mt-4 min-h-[5.4rem] space-y-1.5 text-[0.98rem] font-semibold leading-[1.55] text-white/88 [text-shadow:0_8px_22px_rgba(2,5,11,0.52)] xl:min-h-[5.8rem] xl:text-[1.08rem]">
                    {panel.lines.map((line) => (
                      <p key={line}>{renderTriptychLine(line)}</p>
                    ))}
                  </div>
                </div>
              </div>

              {index < section.panels.length - 1 ? (
                <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.12)_26%,rgba(255,255,255,0.12)_74%,rgba(255,255,255,0.02)_100%)]" />
              ) : null}
            </article>
          );
        })}
      </div>

      <div className="lg:hidden">
        {section.panels.map((panel, index) => {
          const toneClass =
            panel.tone === "blue"
              ? "bg-[linear-gradient(180deg,rgba(8,17,34,0.3)_0%,rgba(3,8,18,0.42)_32%,rgba(2,5,11,0.9)_100%)]"
              : "bg-[linear-gradient(180deg,rgba(3,6,12,0.24)_0%,rgba(2,5,11,0.42)_32%,rgba(2,5,11,0.92)_100%)]";

          return (
            <article key={panel.title} className="relative min-h-[40svh] overflow-hidden border-t border-white/10 first:border-t-0">
              <Image
                src={panel.image}
                alt=""
                fill
                sizes="100vw"
                quality={100}
                className="object-cover brightness-[0.58] contrast-[1.05] saturate-[0.14]"
                style={{ objectPosition: panel.objectPosition ?? "center center" }}
              />
              <div className={`absolute inset-0 ${toneClass}`} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,11,0.04)_0%,rgba(2,5,11,0.16)_24%,rgba(2,5,11,0.42)_52%,rgba(2,5,11,0.92)_100%)]" />

              <div className="relative flex min-h-[40svh] items-end px-5 py-6">
                <div className="min-h-[8.85rem] max-w-[21.5rem] sm:max-w-[23rem]">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className={`h-px w-7 ${index === 1 ? "bg-[#ffcf00]" : "bg-white/72"}`} />
                    <span className={`text-[0.68rem] font-black tracking-[0.16em] ${index === 1 ? "text-[#ffcf00]" : "text-white/82"}`}>
                      {panelNumber(index)}
                    </span>
                  </div>
                  <h3 className="text-[1.28rem] font-black leading-[1] tracking-[-0.04em] text-white [text-shadow:0_10px_24px_rgba(2,5,11,0.42)] sm:text-[1.48rem]">
                    {panel.title}
                  </h3>
                  <div className="mt-3 min-h-[4.2rem] space-y-1 text-[0.82rem] font-semibold leading-[1.55] text-white/88 [text-shadow:0_8px_20px_rgba(2,5,11,0.46)] sm:text-[0.94rem]">
                    {panel.lines.map((line) => (
                      <p key={line}>{renderTriptychLine(line)}</p>
                    ))}
                  </div>
                </div>
              </div>

              {index < section.panels.length - 1 ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.18)_18%,rgba(255,255,255,0.18)_82%,rgba(255,255,255,0.04)_100%)]" />
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ThreeWaySection({
  section,
}: {
  section: typeof portedHomepageData.contact.threeWaySection;
}) {
  const threeWayRef = useRef<HTMLElement | null>(null);
  const threeWaySequenceRef = useRef<HTMLDivElement | null>(null);
  const [isXlLayout, setIsXlLayout] = useState(false);
  const threeWayInView = useInView(threeWaySequenceRef, {
    once: true,
    amount: isXlLayout ? 0.32 : 0.08,
    margin: isXlLayout ? "0px 0px -12% 0px" : "0px 0px -6% 0px",
  });
  const reduceMotion = Boolean(useReducedMotion());
  const [introPanel, deliveryPanel, takeoutPanel] = section.panels;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const syncLayout = () => setIsXlLayout(mediaQuery.matches);

    syncLayout();
    mediaQuery.addEventListener("change", syncLayout);

    return () => mediaQuery.removeEventListener("change", syncLayout);
  }, []);

  const stackedLayout = !isXlLayout;
  const stackedPanelStyle = stackedLayout ? { originY: 0 } : undefined;

  const panelMotion = (delay: number) => ({
    initial: reduceMotion
      ? false
      : stackedLayout
        ? { opacity: 0, y: -26, scaleY: 0.9, scaleX: 0.985 }
        : { opacity: 0, x: -44 },
    animate: reduceMotion || threeWayInView
      ? stackedLayout
        ? { opacity: 1, y: 0, scaleY: 1, scaleX: 1 }
        : { opacity: 1, x: 0 }
      : stackedLayout
        ? { opacity: 0, y: -26, scaleY: 0.9, scaleX: 0.985 }
        : { opacity: 0, x: -44 },
    transition: {
      duration: stackedLayout ? 0.46 : 0.46,
      delay,
      ease: "linear" as const,
    },
  });

  return (
    <section
      ref={threeWayRef}
      id="threeway-section"
      className="app-screen-min-offset app-screen-snap-target flex items-center overflow-hidden bg-[#ffcf00] text-[#041544]"
    >
      <div className="relative mx-auto w-full max-w-[1680px] px-4 pt-10 pb-8 md:px-6 md:py-16">
        <div className="relative mx-auto max-w-[86rem]">
          <div className="mx-auto max-w-5xl text-center">
            <h3 className="mx-auto whitespace-nowrap text-[1.72rem] font-black leading-[0.96] tracking-[-0.04em] text-[#041544] sm:text-[1.95rem] md:text-[3.15rem] xl:text-[3.45rem]">
              <span>최강피자 </span>
              <span className="text-[#ef4136]">집중운영</span>
              <span> 시스템</span>
            </h3>
            <p className="mx-auto mt-2.5 hidden max-w-3xl text-balance text-[1.04rem] font-medium leading-relaxed text-[#041544]/84 md:mt-3 md:block md:text-[1.45rem]">
              {section.description}
            </p>
          </div>

          <div
            ref={threeWaySequenceRef}
            className="mt-7 flex flex-col gap-2.5 md:mt-12 xl:mt-14 xl:grid xl:auto-rows-[18.5rem] xl:grid-cols-[17.5rem_4rem_17.5rem_4rem_17.5rem] xl:justify-center xl:items-stretch xl:gap-5"
          >
            <motion.article
              {...panelMotion(0.16)}
              style={stackedPanelStyle}
              className="flex min-h-[6.6rem] flex-col items-center justify-center rounded-[8px] bg-[#041544] px-5 py-4 text-center text-[#ffcf00] shadow-[0_24px_58px_rgba(4,21,68,0.22)] md:min-h-[17rem] md:px-8 md:py-8 xl:mt-3 xl:h-[17.5rem] xl:min-h-0 xl:self-start"
            >
              <div>
                <p className="text-[1.72rem] font-black leading-[1.02] md:text-[3.7rem]">
                  {introPanel.title.split("\n").map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </motion.article>

            <ThreeWayPlusCircle
              symbol="="
              delay={1.02}
              reduceMotion={reduceMotion}
              threeWayInView={threeWayInView}
              stackedLayout={stackedLayout}
            />

            <motion.article
              {...panelMotion(1.54)}
              style={stackedPanelStyle}
              className="group flex min-h-[5.7rem] flex-col items-center justify-center rounded-[8px] border-2 border-[#041544] bg-[#ffcf00] px-5 py-4 text-center transition-all duration-300 md:min-h-[17rem] md:px-7 md:py-8 md:hover:-translate-y-1 md:hover:bg-[#ffe165] md:hover:shadow-[0_22px_42px_rgba(4,21,68,0.12)] xl:mt-3 xl:h-[17.5rem] xl:min-h-0 xl:self-start"
            >
              <p className="text-[1.72rem] font-black leading-none md:text-[3.4rem]">{deliveryPanel.title}</p>
              <div className="mt-3 text-[#041544] transition-colors duration-300 md:mt-6 md:group-hover:text-[#041544]">
                <ThreeWayPanelIcon icon={deliveryPanel.icon} className="h-10 w-10 md:h-20 md:w-20" />
              </div>
            </motion.article>

            <ThreeWayPlusCircle delay={2.06} reduceMotion={reduceMotion} threeWayInView={threeWayInView} stackedLayout={stackedLayout} />

            <motion.article
              {...panelMotion(2.58)}
              style={stackedPanelStyle}
              className="group flex min-h-[5.7rem] flex-col items-center justify-center rounded-[8px] border-2 border-[#041544] bg-[#ffcf00] px-5 py-4 text-center transition-all duration-300 md:min-h-[17rem] md:px-7 md:py-8 md:hover:-translate-y-1 md:hover:bg-[#ffe165] md:hover:shadow-[0_22px_42px_rgba(4,21,68,0.12)] xl:mt-3 xl:h-[17.5rem] xl:min-h-0 xl:self-start"
            >
              <p className="text-[1.72rem] font-black leading-none md:text-[3.4rem]">{takeoutPanel.title}</p>
              <div className="mt-3 text-[#041544] md:mt-6">
                <ThreeWayPanelIcon icon={takeoutPanel.icon} className="h-10 w-10 md:h-20 md:w-20" />
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortedContactBand({ contact }: PortedContactBandProps) {
  const [smallStoreCard, ...secondaryFeatureCards] = contact.featureCards;

  return (
    <section id="contact-section" className="bg-[#061433]">
      <div className="app-screen-min-offset app-screen-snap-target flex items-start bg-[#f4f5f7] text-[#111217]">
        <div className="mx-auto w-full max-w-[1680px] px-4 pt-14 pb-6 md:px-6 md:pt-10 md:pb-12 xl:pt-12 xl:pb-14">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mx-auto whitespace-nowrap text-[1.72rem] font-black leading-[0.96] tracking-[-0.04em] text-[#111217] sm:text-[1.95rem] md:text-[3.15rem] xl:text-[3.45rem]">
              <span>{contact.reasonTitle} </span>
              <span className="text-[#ef4136]">{contact.reasonHighlight}</span>
            </h2>
            <p className="mx-auto mt-2.5 max-w-[21rem] text-sm font-medium leading-relaxed text-[#5d606b] sm:max-w-xl sm:text-base md:mt-3 md:max-w-3xl">
              {contact.reasonDescription}
            </p>
          </div>

          <div className="mx-auto mt-6 grid max-w-[1240px] gap-2 md:mt-6 md:gap-3 lg:mt-8 lg:max-w-[1320px] lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-stretch xl:max-w-[1440px] xl:gap-5 2xl:max-w-[1520px] 2xl:gap-6 min-[1800px]:max-w-[1640px]">
            <article className="relative isolate min-h-[16.25rem] overflow-hidden rounded-[8px] bg-[#0f1628] shadow-[0_16px_36px_rgba(17,18,23,0.12)] sm:min-h-[16.75rem] lg:min-h-[27rem] lg:shadow-[0_24px_64px_rgba(17,18,23,0.14)] xl:min-h-[31rem] 2xl:min-h-[34rem] min-[1800px]:min-h-[37rem]">
              {smallStoreCard.image ? (
                <Image
                  src={smallStoreCard.image}
                  alt={smallStoreCard.title}
                  fill
                  className="object-cover object-[center_82%] sm:object-[center_76%]"
                  sizes="(min-width: 1800px) 48vw, (min-width: 1280px) 52vw, (min-width: 1024px) 58vw, 100vw"
                />
              ) : null}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,40,0.06)_0%,rgba(15,22,40,0.18)_48%,rgba(15,22,40,0.92)_100%)]" />
              <div className="relative flex h-full flex-col justify-end p-3 md:p-6 lg:p-7 xl:p-8 2xl:p-9 min-[1800px]:p-10">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#ef4136] text-white shadow-[0_8px_18px_rgba(239,65,54,0.3)] xl:h-[68px] xl:w-[68px] 2xl:h-[76px] 2xl:w-[76px] min-[1800px]:h-[84px] min-[1800px]:w-[84px]">
                  <FranchiseFeatureIcon type={smallStoreCard.icon} />
                </div>
                <p className="mt-1.5 text-[0.68rem] font-black tracking-[0.14em] text-[#ffcf00] md:mt-4 md:text-[0.84rem] xl:text-[0.96rem] 2xl:mt-5 2xl:text-[1.02rem] min-[1800px]:text-[1.08rem]">01</p>
                <h3 className="mt-0.5 max-w-[10ch] text-[1.16rem] font-black leading-[1.02] text-white md:mt-2 md:max-w-[13ch] md:text-[2.25rem] xl:text-[2.75rem] 2xl:max-w-[13ch] 2xl:text-[3.1rem] min-[1800px]:text-[3.35rem]">
                  {smallStoreCard.title}
                </h3>
                <div className="mt-1.5 max-w-[19rem] space-y-0.5 text-[0.68rem] font-medium leading-relaxed text-white/82 md:mt-3 md:max-w-[28rem] md:space-y-2 md:text-[0.96rem] xl:text-[1.04rem] 2xl:mt-4 2xl:max-w-[28rem] 2xl:space-y-2 2xl:text-[1.08rem] min-[1800px]:max-w-[30rem] min-[1800px]:text-[1.12rem]">
                  {smallStoreCard.lines.map((line, index) => (
                    <p key={line} className={index > 0 ? "hidden sm:block" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid grid-cols-1 gap-2 lg:auto-rows-fr lg:grid-cols-2 lg:gap-4 xl:gap-5 2xl:gap-6">
              {secondaryFeatureCards.map((card, index) => {
                const isDarkCard = index % 2 === 1;
                const cardNumber = String(index + 2).padStart(2, "0");

                return (
                  <article
                    key={card.title}
                    className={
                      isDarkCard
                        ? "flex h-full min-h-[4.15rem] flex-row items-center gap-2.5 rounded-[8px] bg-[#071d55] px-3 py-2 text-white shadow-[0_12px_22px_rgba(7,29,85,0.14)] md:px-5 lg:min-h-[14.5rem] lg:flex-col lg:items-start lg:gap-0 lg:p-6 lg:shadow-[0_24px_64px_rgba(7,29,85,0.22)] xl:min-h-[16.5rem] 2xl:min-h-[18rem] 2xl:p-7 min-[1800px]:min-h-[19rem]"
                        : "flex h-full min-h-[4.15rem] flex-row items-center gap-2.5 rounded-[8px] border border-[#d2d9e8] bg-[#ffffff] px-3 py-2 text-[#181a21] shadow-[0_12px_22px_rgba(7,29,85,0.08)] md:px-5 lg:min-h-[14.5rem] lg:flex-col lg:items-start lg:gap-0 lg:p-6 lg:shadow-[0_24px_58px_rgba(7,29,85,0.12)] xl:min-h-[16.5rem] 2xl:min-h-[18rem] 2xl:p-7 min-[1800px]:min-h-[19rem]"
                    }
                  >
                    <div
                      className={
                        isDarkCard
                          ? "flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[9px] bg-white/12 text-white xl:h-[64px] xl:w-[64px] 2xl:h-[72px] 2xl:w-[72px] min-[1800px]:h-[80px] min-[1800px]:w-[80px]"
                          : "flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[9px] bg-[#071d55] text-[#ffcf00] xl:h-[64px] xl:w-[64px] 2xl:h-[72px] 2xl:w-[72px] min-[1800px]:h-[80px] min-[1800px]:w-[80px]"
                      }
                    >
                      <FranchiseFeatureIcon type={card.icon} />
                    </div>
                    <div className="min-w-0 lg:mt-4 2xl:mt-5">
                      <p
                        className={
                          isDarkCard
                            ? "text-[0.62rem] font-black tracking-[0.14em] text-[#ffcf00] md:text-[0.78rem] xl:text-[0.86rem] 2xl:text-[0.94rem] min-[1800px]:text-[1rem]"
                            : "text-[0.62rem] font-black tracking-[0.14em] text-[#ef4136] md:text-[0.78rem] xl:text-[0.86rem] 2xl:text-[0.94rem] min-[1800px]:text-[1rem]"
                        }
                      >
                        {cardNumber}
                      </p>
                      <h3 className="mt-0.5 max-w-none text-[0.92rem] font-black leading-[1] md:text-[1.2rem] lg:mt-2 lg:min-h-[3.3rem] lg:max-w-[12ch] lg:text-[1.52rem] xl:min-h-[3.75rem] xl:text-[1.72rem] 2xl:mt-2 2xl:min-h-[4.1rem] 2xl:max-w-[13ch] 2xl:text-[1.92rem] min-[1800px]:text-[2.1rem]">
                        {renderFeatureTitle(card.title)}
                      </h3>
                      <div
                        className={
                          isDarkCard
                            ? "mt-2.5 hidden space-y-1.5 text-[0.82rem] font-medium leading-relaxed text-white/86 lg:block lg:text-[0.94rem] xl:text-[0.98rem] 2xl:mt-3 2xl:space-y-1.5 2xl:text-[1.02rem] min-[1800px]:text-[1.08rem]"
                            : "mt-2.5 hidden space-y-1.5 text-[0.82rem] font-medium leading-relaxed text-[#5d606b] lg:block lg:text-[0.94rem] xl:text-[0.98rem] 2xl:mt-3 2xl:space-y-1.5 2xl:text-[1.02rem] min-[1800px]:text-[1.08rem]"
                        }
                      >
                        {card.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <ShopInShopIntroSection section={contact.shopInShopIntro} />

      <ShopInShopImageTriptychSection section={contact.shopInShopImageTriptych} />

      <ShopInShopSection section={contact.shopInShopSection} />

      <ThreeWaySection section={contact.threeWaySection} />

      <PortedReviewShowcase reviewShowcase={contact.reviewShowcase} />

      <PortedBrandVideoSection />

      <div id="contact-cta-section" className="relative overflow-hidden bg-[#03060c] text-white">
        {contact.ctaBackgroundImage ? (
          <Image
            src={contact.ctaBackgroundImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.48)_24%,rgba(0,0,0,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.22)_56%,rgba(0,0,0,0.44)_100%)]" />
        <div className="relative mx-auto w-full max-w-[1680px] px-4 py-20 md:px-6 md:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <h3 className="mx-auto whitespace-nowrap text-[1.72rem] font-black leading-[0.96] tracking-[-0.04em] text-white sm:text-[1.95rem] md:text-[3.15rem] xl:text-[3.45rem]">
              <span>{contact.ctaEyebrow} </span>
              <span className="text-[#ffcf00]">가맹 문의</span>
            </h3>
            <p className="mx-auto mt-2.5 max-w-[21rem] text-[0.95rem] font-medium leading-relaxed text-white/78 md:mt-3 md:max-w-3xl md:text-[1.08rem]">
              {contact.ctaDescription}
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-[980px] gap-4 md:mt-10 md:grid-cols-2">
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
                className="flex min-h-[6.5rem] items-center gap-4 rounded-[8px] bg-white px-6 py-5 text-[#041544] transition-colors duration-300 hover:bg-[#f6f8fc] hover:text-[#041544]"
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

      <footer className="bg-[#03060c] text-white">
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
