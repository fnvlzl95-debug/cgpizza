"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type BrandVideoClip = {
  src: string;
  durationMs: number;
  startAtSec?: number;
  endAtSec?: number;
  step: string;
  titleLines: string[];
};

const BRAND_VIDEO_CLIPS = [
  {
    src: "/assets/user/brand-videos/1.mp4",
    durationMs: 7000,
    step: "01",
    titleLines: ["푸짐하게", "올리는 토핑"],
  },
  {
    src: "/assets/user/brand-videos/2.mp4",
    durationMs: 6700,
    step: "02",
    titleLines: ["기본부터", "제대로"],
  },
  {
    src: "/assets/user/brand-videos/3.mp4",
    startAtSec: 2,
    endAtSec: 40,
    durationMs: 38000,
    step: "03",
    titleLines: ["뜨겁게 완성되는", "한 판"],
  },
] as const satisfies readonly BrandVideoClip[];

function seekToClipTime(video: HTMLVideoElement, time: number) {
  const applySeek = () => {
    try {
      video.currentTime = time;
    } catch {
      // Ignore early metadata timing errors and let the once handler retry.
    }
  };

  if (video.readyState >= 1) {
    applySeek();
    return;
  }

  video.addEventListener("loadedmetadata", applySeek, { once: true });
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-[1px]" fill="currentColor" aria-hidden="true">
      <path d="M8 6.6c0-.8.9-1.3 1.6-.8l8 5.4c.6.4.6 1.3 0 1.7l-8 5.4c-.7.5-1.6 0-1.6-.8V6.6Z" />
    </svg>
  );
}

export function PortedBrandVideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.32 });
  const reduceMotion = Boolean(useReducedMotion());
  const [activeIndex, setActiveIndex] = useState(0);

  const clips = useMemo<readonly BrandVideoClip[]>(() => BRAND_VIDEO_CLIPS, []);

  useEffect(() => {
    if (!isInView) {
      videoRefs.current.forEach((video) => {
        if (!video) return;
        video.pause();
      });
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    const activeVideo = videoRefs.current[activeIndex];

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      const clip = clips[index];
      const clipStart = clip.startAtSec ?? 0;

      if (index === activeIndex) {
        seekToClipTime(video, clipStart);
        void video.play().catch(() => {});
      } else {
        video.pause();
        seekToClipTime(video, clipStart);
      }
    });

    if (reduceMotion || !activeVideo) return;

    timerRef.current = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % clips.length);
    }, clips[activeIndex].durationMs);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [activeIndex, clips, isInView, reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id="brand-video-section"
      className="scroll-mt-[5.25rem] h-[calc(100svh-4.75rem)] overflow-hidden border-t border-white/10 bg-[#061433] text-white md:h-[calc(100svh-5.25rem)]"
    >
      <div className="relative h-full w-full overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_32%,rgba(255,207,0,0.12),transparent_24%),linear-gradient(90deg,rgba(6,20,51,0.98)_0%,rgba(7,23,63,0.96)_38%,rgba(4,14,40,0.94)_100%)]"
        />

        <div className="relative mx-auto flex h-full w-full max-w-[1680px] flex-col justify-center gap-6 px-4 py-5 md:px-6 md:py-6 lg:flex-row lg:items-center lg:gap-4 xl:gap-5">
          <div className="relative z-10 mx-auto max-w-[22rem] text-center lg:mx-0 lg:max-w-[35rem] lg:flex-[0_0_41%] lg:text-left">
            <h3 className="text-balance text-[2.16rem] font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-[2.48rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.45rem]">
              <span className="block">예쁜 광고 대신,</span>
              <span className="mt-1.5 block text-[#ffcf00]">진짜 주방을</span>
              <span className="mt-1.5 block">보여드립니다.</span>
            </h3>

            <p className="mx-auto mt-4 max-w-[18rem] text-[0.95rem] font-black leading-[1.46] text-white md:max-w-[21rem] md:text-[1.02rem] lg:mx-0 lg:mt-5 lg:max-w-[27rem] lg:text-[1.18rem]">
              광고 대행사가 예쁘게 찍은 영상은 없습니다.
            </p>

            <p className="mx-auto mt-4 max-w-[19.5rem] text-[0.88rem] font-medium leading-[1.7] text-white/64 md:max-w-[22rem] md:text-[0.95rem] lg:mx-0 lg:max-w-[30rem] lg:text-[1.02rem]">
              사장님들이 핸드폰으로 대충 찍은 흔들리는 화면들. 하지만 그 안에는 꾸미지 않은 진짜 현장의 땀방울과 넘칠 듯 담아내는 재료들의 무게가 있습니다.
            </p>

            <p className="mx-auto mt-4 max-w-[19rem] text-[0.92rem] font-black leading-[1.56] text-[#ffcf00] md:max-w-[22rem] md:text-[0.98rem] lg:mx-0 lg:max-w-[28rem] lg:text-[1.08rem]">
              우리는 잘 포장된 프랜차이즈가 아니라, 진짜 피자를 굽는{" "}
              <span className="whitespace-nowrap">현장이니까요.</span>
            </p>
          </div>

          <div className="relative z-10 min-h-0">
            <div className="grid grid-cols-3 items-end gap-2.5 lg:flex lg:h-[min(66vh,34rem)] lg:overflow-visible xl:h-[min(68vh,38rem)]">
              {clips.map((clip, index) => {
                const isActive = index === activeIndex && isInView;
                const desktopFrameClass =
                  index === 0
                    ? "lg:h-[21rem] xl:h-[24rem]"
                    : index === 1
                      ? "lg:h-[24rem] xl:h-[27rem]"
                      : "lg:h-[27rem] xl:h-[30rem]";

                return (
                  <article
                    key={clip.src}
                    className={`relative min-h-[10.8rem] min-w-0 overflow-hidden rounded-[8px] border border-white/10 bg-black shadow-[0_18px_44px_rgba(0,0,0,0.24)] sm:min-h-[12.2rem] lg:min-h-0 lg:w-[11.3rem] lg:min-w-0 xl:w-[12.8rem] 2xl:w-[13.6rem] ${desktopFrameClass}`}
                  >
                    <video
                      ref={(node) => {
                        videoRefs.current[index] = node;
                      }}
                      src={clip.src}
                      muted
                      playsInline
                      preload="metadata"
                      className={`absolute inset-0 h-full w-full object-cover transition-[filter,transform] duration-700 ease-out ${
                        isActive
                          ? "scale-[1.03] grayscale-0 brightness-100 saturate-[1.02]"
                          : "scale-100 grayscale brightness-[0.36] saturate-[0.42]"
                      }`}
                    />

                    <div
                      className={`pointer-events-none absolute inset-0 transition-all duration-700 ${
                        isActive
                          ? "bg-[linear-gradient(180deg,rgba(4,14,40,0.08)_0%,rgba(4,14,40,0.04)_28%,rgba(4,14,40,0.24)_58%,rgba(0,0,0,0.9)_100%)]"
                          : "bg-[linear-gradient(180deg,rgba(4,14,40,0.58)_0%,rgba(4,14,40,0.46)_32%,rgba(4,14,40,0.58)_62%,rgba(0,0,0,0.94)_100%)]"
                      }`}
                    />
                    <div
                      className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                        isActive
                          ? "opacity-100 bg-[radial-gradient(circle_at_50%_56%,rgba(255,207,0,0.12),transparent_40%)]"
                          : "opacity-0"
                      }`}
                    />
                    <div
                      className={`pointer-events-none absolute inset-x-0 bottom-0 h-[3px] transition-colors duration-500 ${
                        isActive ? "bg-[#ffcf00]" : "bg-white/0"
                      }`}
                    />

                    <div className="absolute inset-x-0 top-[42%] z-10 flex justify-center -translate-y-1/2 lg:top-[43%]">
                      <div
                        className={`flex h-[3rem] w-[3rem] items-center justify-center rounded-full border text-white backdrop-blur-sm transition-all duration-500 sm:h-[3.4rem] sm:w-[3.4rem] ${
                          isActive
                            ? "border-white/26 bg-[#061433]/36 shadow-[0_12px_28px_rgba(0,0,0,0.24)]"
                            : "border-white/14 bg-black/18"
                        } lg:h-[3.8rem] lg:w-[3.8rem]`}
                      >
                        <PlayIcon />
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-10 p-2.5 sm:p-3 lg:p-4">
                      <div className="flex items-center gap-2">
                        <span className={`block h-[2px] w-5 ${isActive ? "bg-[#ffcf00]" : "bg-[#ffcf00]/40"}`} />
                        <span className={`text-[0.62rem] font-black tracking-[0.14em] ${isActive ? "text-[#ffcf00]" : "text-[#ffcf00]/68"} lg:text-[0.72rem] lg:tracking-[0.16em]`}>
                          {clip.step}
                        </span>
                      </div>
                      <p className="mt-2 text-[0.8rem] font-black leading-[1.08] text-white sm:text-[0.94rem] lg:mt-2.5 lg:text-[1.34rem] xl:text-[1.58rem]">
                        {clip.titleLines.map((line) => (
                          <span key={line} className="block whitespace-nowrap">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
