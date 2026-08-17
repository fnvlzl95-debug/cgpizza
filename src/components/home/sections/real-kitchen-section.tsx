"use client";

import { useRef, useState } from "react";
import { DiamondIcon, PlayIcon, ShieldIcon, SparkIcon } from "@/components/home/icons";
import { KakaoBadge } from "@/components/home/ui/kakao-badge";
import { realKitchen as data } from "@/lib/home-content";

/** Geometry from 99- 하단 수정 부분.png: blue field, three portrait clips. */

const pointIcons = {
  diamond: DiamondIcon,
  shield: ShieldIcon,
} as const;

function VideoCard({ clip }: { clip: (typeof data.videos)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <li
      /* The comp underlines the active clip. That is a rule, so it ships as a
         border — a zero-blur offset shadow would be the same pixels wearing a
         costume this world never chose. */
      className={`relative isolate aspect-[9/16] overflow-hidden rounded-2xl border-b-[6px] bg-navy-900 sm:aspect-[9/20] ${
        clip.accent ? "border-yellow-500" : "border-transparent"
      }`}
    >
      <video
        ref={videoRef}
        src={clip.src}
        poster={clip.poster}
        playsInline
        preload="none"
        onEnded={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(1,23,80,0.28)_0%,rgba(1,23,80,0.12)_42%,rgba(1,23,80,0.86)_100%)] transition-opacity duration-300 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />

      <button
        type="button"
        onClick={toggle}
        className="group absolute inset-0 flex flex-col justify-end p-4 text-left lg:p-[1.2vw]"
      >
        <span
          className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy-900/65 text-white backdrop-blur-sm transition-[transform,opacity] duration-300 group-hover:scale-110 lg:h-[4.6vw] lg:w-[4.6vw] ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <PlayIcon className="h-7 w-7 translate-x-0.5 lg:h-[2vw] lg:w-[2vw]" />
        </span>

        <span
          className={`relative transition-opacity duration-300 ${playing ? "opacity-0" : "opacity-100"}`}
        >
          <span className="flex items-center gap-2 text-[0.82rem] font-black tracking-[0.1em] text-yellow-500 lg:text-[clamp(0.75rem,0.95vw,1rem)]">
            <span aria-hidden="true" className="h-0.5 w-5 bg-yellow-500" />
            {clip.index}
          </span>
          <span className="mt-1.5 block text-[1.1rem] font-black leading-[1.3] tracking-[-0.04em] text-white lg:text-[clamp(1rem,1.42vw,1.5rem)]">
            {clip.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </span>

        <span className="sr-only">
          {clip.title.join(" ")} 영상 {playing ? "정지" : "재생"}
        </span>
      </button>
    </li>
  );
}

export function RealKitchenSection() {
  return (
    <section
      id="real-kitchen"
      className="app-screen-snap-target section-screen relative bg-blue-video py-section text-white"
    >
      <div className="mx-auto w-full max-w-[93.25rem] px-5 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-[3vw]">
          <div className="motion-reveal">
            <h2 className="text-[2.4rem] font-black leading-[1.14] tracking-[-0.05em] lg:text-[clamp(2.8rem,5.5vw,5.8rem)]">
              {data.headline.map((line) => (
                <span
                  key={line.text}
                  className={`block ${line.tone === "gold" ? "text-yellow-500" : "text-white"}`}
                >
                  {line.text}
                </span>
              ))}
            </h2>

            <div className="mt-block space-y-1.5 text-[0.98rem] text-white/80 lg:text-[clamp(0.92rem,1.14vw,1.2rem)]">
              {data.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <ul className="mt-block space-y-6 lg:space-y-block">
              {data.points.map((point) => {
                const Icon = pointIcons[point.icon];
                return (
                  <li key={point.title} className="flex gap-4 lg:gap-[1.3vw]">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center text-yellow-500 lg:h-[5.2vw] lg:w-[5.2vw]">
                      <Icon className="h-full w-full" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[1.08rem] font-black tracking-[-0.03em] text-yellow-500 lg:text-[clamp(1rem,1.3vw,1.37rem)]">
                        {point.title}
                      </span>
                      <span className="mt-1.5 block space-y-0.5 text-[0.9rem] leading-relaxed text-white/78 lg:text-[clamp(0.85rem,1.02vw,1.07rem)]">
                        {point.body.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-[1.2vw] lg:self-start lg:pt-[0.4vw]">
            {data.videos.map((clip) => (
              <VideoCard key={clip.index} clip={clip} />
            ))}
          </ul>
        </div>

        <div className="relative mt-block">
        <p className="mx-auto flex w-fit items-center gap-3 rounded-full border-2 border-gold-600/70 px-6 py-3 text-center text-[0.92rem] font-bold text-white lg:gap-[1.2vw] lg:px-[2.4vw] lg:py-[0.9vw] lg:text-[clamp(0.9rem,1.2vw,1.26rem)]">
          <SparkIcon className="h-5 w-5 shrink-0 text-yellow-500" />
          <span aria-hidden="true" className="hidden h-6 w-px bg-white/30 lg:block" />
          <span>
            {data.closer.lead}
            <span className="font-black text-yellow-500">{data.closer.accent}</span>
            {data.closer.tail}
          </span>
        </p>

          <KakaoBadge className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:flex" />
        </div>
      </div>
    </section>
  );
}
