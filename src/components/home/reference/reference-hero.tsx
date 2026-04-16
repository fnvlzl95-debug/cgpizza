import Image from "next/image";
import { motion } from "framer-motion";
import {
  BrandMark,
  ChevronRightIcon,
  HeroSparkles,
  PlayIcon,
  revealEase,
} from "@/components/home/reference/reference-primitives";
import { referenceHomepageData } from "@/lib/reference-homepage-data";

type ReferenceHeroProps = {
  hero: typeof referenceHomepageData.hero;
  reducedMotion: boolean;
  onOpenBrandModal: () => void;
};

function HeroBestBadge({ label }: { label: string }) {
  return (
    <div className="relative flex h-[4.8rem] w-[4.8rem] items-center justify-center sm:h-[5.6rem] sm:w-[5.6rem] lg:h-[6.2rem] lg:w-[6.2rem]">
      <span className="absolute inset-0 rounded-full border-2 border-dashed border-white/55" />
      <span className="absolute inset-[4px] rounded-full bg-[#ef4136] shadow-[0_14px_36px_rgba(0,0,0,0.28)]" />
      <span className="relative text-sm font-black text-white sm:text-base">{label}</span>
    </div>
  );
}

function HeroActionButtons({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  onOpenBrandModal,
}: {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  onOpenBrandModal: () => void;
}) {
  return (
    <div className="mt-5 flex flex-wrap gap-3 lg:mt-8">
      <a
        href={primaryHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#ffd12a] px-5 py-3 text-sm font-black text-[#09235e] shadow-[0_14px_24px_rgba(255,209,42,0.18),inset_0_1px_0_rgba(255,255,255,0.26)] transition hover:bg-[#ffde62] lg:text-base"
      >
        {primaryLabel}
        <ChevronRightIcon className="h-4 w-4" />
      </a>

      <button
        type="button"
        onClick={onOpenBrandModal}
        className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur-sm transition hover:bg-white/14 lg:text-base"
      >
        <PlayIcon className="h-4 w-4" />
        {secondaryLabel}
      </button>
    </div>
  );
}

function HeroInfoCard({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index: number;
}) {
  return (
    <div className="rounded-[8px] border border-white/12 bg-[#071f5a]/72 px-3 py-3 shadow-[0_12px_30px_rgba(3,12,36,0.25)] backdrop-blur-sm sm:px-4 sm:py-3.5">
      <div className="flex items-start gap-2">
        {index === 0 ? (
          <BrandMark className="mt-0.5 h-5 w-5 shrink-0 text-[#ffd12a]" />
        ) : (
          <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full border border-[#ffd12a]/45 bg-[#ffd12a]/10 text-[#ffd12a]" />
        )}
        <div>
          <p className="text-[11px] font-black leading-tight text-white sm:text-xs">{title}</p>
          <p className="mt-1 text-[10px] font-semibold leading-tight text-white/72 sm:text-[11px]">{body}</p>
        </div>
      </div>
    </div>
  );
}

function HeroMediaCluster({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute right-[-53%] top-[8.4rem] z-20 h-[17rem] w-[16.4rem] sm:right-[-14%] sm:top-[5.8rem] sm:h-[25rem] sm:w-[24rem] lg:right-[-0.8%] lg:top-[3.85rem] lg:h-[35rem] lg:w-[34rem]"
        animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 6.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }
        }
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 16%, black 100%)" }}
      >
        <div className="absolute inset-x-0 top-0 z-10 h-[12%] bg-[linear-gradient(180deg,#08256c_0%,rgba(8,37,108,0.6)_38%,transparent_100%)]" />
        <div className="absolute inset-y-0 left-0 z-10 w-[22%] bg-[linear-gradient(90deg,#08256c_0%,rgba(8,37,108,0.92)_34%,rgba(8,37,108,0.5)_66%,transparent_100%)]" />
        <Image
          src="/assets/home/reference-crops/hero-cluster-6.png"
          alt="최강피자 히어로 제품 조합"
          fill
          priority
          sizes="(min-width: 1024px) 34rem, 24rem"
          className="object-cover object-right-top drop-shadow-[0_26px_54px_rgba(3,10,36,0.6)]"
        />
      </motion.div>
    </>
  );
}

export function ReferenceHeroSection({ hero, reducedMotion, onOpenBrandModal }: ReferenceHeroProps) {
  return (
    <div className="mx-auto max-w-[1568px] px-4 pb-8 pt-[6.6rem] sm:px-6 sm:pb-10 sm:pt-[6.2rem] lg:px-8">
      <div className="relative min-h-[31rem] sm:min-h-[34rem] lg:min-h-[36rem]">
        <HeroMediaCluster reducedMotion={reducedMotion} />

        <motion.div
          initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18, ease: revealEase }}
          className="absolute right-[22%] top-[9.35rem] z-30 sm:right-[28%] sm:top-[5.8rem] lg:right-[29.4%] lg:top-[6.05rem]"
        >
          <HeroBestBadge label={hero.badge} />
        </motion.div>

        <div className="relative z-30 max-w-[15rem] pt-6 sm:max-w-[25rem] sm:pt-10 lg:max-w-[34rem] lg:pt-[4.8rem]">
          <HeroSparkles />

          <motion.h1
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: revealEase }}
            className="text-[3.05rem] font-black leading-[0.9] tracking-[-0.02em] text-white sm:text-[4rem] lg:text-[6.1rem]"
          >
            {hero.title[0]}
            <br />
            <span className="text-[#ffd12a]">{hero.title[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, delay: 0.08, ease: revealEase }}
            className="mt-3 max-w-[13rem] text-sm font-semibold leading-6 text-white/84 sm:max-w-[18rem] sm:text-[15px] lg:mt-5 lg:max-w-[25rem] lg:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: revealEase }}
          >
            <HeroActionButtons
              primaryLabel={hero.primaryCta.label}
              primaryHref={hero.primaryCta.href}
              secondaryLabel={hero.secondaryCta.label}
              onOpenBrandModal={onOpenBrandModal}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.24, ease: revealEase }}
          className="relative z-30 mt-[12.8rem] grid max-w-[24rem] grid-cols-3 gap-2 sm:mt-[13.6rem] sm:max-w-[36rem] sm:gap-3 lg:mt-[18.8rem]"
        >
          {hero.infoCards.map((card, index) => (
            <HeroInfoCard key={card.title} title={card.title} body={card.body} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
