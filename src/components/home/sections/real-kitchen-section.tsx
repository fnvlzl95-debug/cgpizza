"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRightIcon,
  CrownIcon,
  FlameIcon,
  LeafIcon,
  ThermometerIcon,
} from "@/components/home/icons";
import { EyebrowPill } from "@/components/home/ui/eyebrow-pill";
import { realKitchen as data } from "@/lib/home-content";

/**
 * The clips are shot 1080×1920, so they are shown as portrait cards rather
 * than cropped into landscape frames that throw away most of each shot.
 *
 * One card is selected at a time: it stands taller, carries the gold trim and
 * plays; the others hold their poster and wait. The claim here is 연출이
 * 아니라 실제 과정, and a running kitchen shows that where a still asks the
 * visitor to take it on trust. Sound stays theirs to turn on.
 */

const pointIcons = {
  leaf: LeafIcon,
  flame: FlameIcon,
  temp: ThermometerIcon,
} as const;

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 9.2h3.4L12 5.4v13.2l-4.6-3.8H4z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {muted ? (
        <path d="m16 9.5 4.5 5M20.5 9.5 16 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      ) : (
        <path
          d="M15.6 9a4.2 4.2 0 0 1 0 6M18.2 6.6a7.6 7.6 0 0 1 0 10.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function StepArrow({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "이전 영상" : "다음 영상"}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/25 transition-colors duration-200 hover:bg-white/22 lg:h-[min(3.2vw,5.7vh)] lg:w-[min(3.2vw,5.7vh)]"
    >
      <ArrowRightIcon className={`h-5 w-5 ${direction === "prev" ? "rotate-180" : ""}`} />
    </button>
  );
}

export function RealKitchenSection() {
  const [active, setActive] = useState(1);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [muted, setMuted] = useState(true);

  // Only the selected clip runs; the rest hold their poster frame.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    videoRefs.current.forEach((el, index) => {
      if (!el) return;
      if (index === active && !reduce) void el.play().catch(() => {});
      else {
        el.pause();
        el.currentTime = 0;
      }
    });
  }, [active]);

  const step = (delta: number) =>
    setActive((current) => (current + delta + data.videos.length) % data.videos.length);

  const toggleSound = () => {
    const el = videoRefs.current[active];
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (el.paused) void el.play().catch(() => {});
  };

  // Heading breaks after 최강피자의.
  const groups = [data.headline.slice(0, 1), data.headline.slice(1)];

  return (
    <section
      id="real-kitchen"
      className="app-screen-snap-target section-screen section-lead relative bg-blue-video text-white"
    >
      <div className="mx-auto w-full max-w-[93.25rem] px-5 md:px-8 lg:w-[min(93.25rem,100%-5.4rem)] lg:max-w-none lg:px-0">
        <div className="flex justify-center">
          <EyebrowPill label={data.pill} tone="contrast" />
        </div>

        <div className="motion-reveal mt-block text-center">
          <h2 className="text-[2rem] font-black leading-[1.14] tracking-[-0.05em] lg:text-[clamp(2.1rem,min(3.1vw,5.5vh),3.3rem)]">
            {groups.map((group, index) => (
              <span key={index} className="block">
                {group.map((line, position) => (
                  <span
                    key={line.text}
                    className={`${line.tone === "gold" ? "text-yellow-500" : "text-white"} ${
                      position > 0 ? "ml-[0.24em]" : ""
                    }`}
                  >
                    {line.text}
                  </span>
                ))}
              </span>
            ))}
          </h2>

          <p className="mt-group text-[0.92rem] text-white/80 lg:text-[clamp(0.9rem,1.08vw,1.14rem)]">
            {data.body[0]}
            <span className="mt-1 block">
              <span className="font-black text-yellow-500">{data.bodyAccent}</span>
              {data.bodyTail}
            </span>
          </p>
        </div>

        <div className="mt-block flex items-center justify-center gap-3 lg:gap-gutter">
          <StepArrow direction="prev" onClick={() => step(-1)} />

          <ul className="flex items-center justify-center gap-3 lg:gap-group">
            {data.videos.map((clip, index) => {
              const selected = index === active;
              return (
                <li key={clip.index} className={selected ? "" : "hidden sm:block"}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={selected}
                    className={`group relative block overflow-hidden rounded-card text-left transition-[width,box-shadow] duration-300 ${
                      selected
                        ? "w-[13rem] shadow-lift ring-2 ring-yellow-500 sm:w-[11rem] lg:w-[min(10.8vw,18.3vh)]"
                        : "opacity-70 shadow-card ring-1 ring-white/15 hover:opacity-100 sm:w-[8.5rem] lg:w-[min(8.5vw,14.5vh)]"
                    }`}
                  >
                    <span className="relative block aspect-[9/16] bg-navy-900">
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={clip.src}
                        poster={clip.poster}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,23,80,0.36)_0%,rgba(1,23,80,0.02)_34%,rgba(1,23,80,0.78)_100%)]"
                      />

                      <span
                        className={`absolute left-2.5 top-0 flex flex-col items-center gap-0.5 px-2 pb-2.5 pt-1.5 text-[0.72rem] font-black leading-none lg:left-3 lg:px-2.5 lg:text-[clamp(0.7rem,0.9vw,0.95rem)] ${
                          selected ? "bg-yellow-500 text-navy-900" : "bg-navy-900 text-white"
                        } [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_78%,0%_100%)]`}
                      >
                        {clip.index}
                        {selected ? <CrownIcon className="mt-1 h-3 w-3" /> : null}
                      </span>

                      <span className="absolute bottom-2.5 left-2.5 rounded-full bg-navy-900/75 px-2 py-0.5 text-[0.68rem] font-bold tabular-nums text-white backdrop-blur-sm lg:bottom-3 lg:left-3">
                        {clip.duration}
                      </span>
                    </span>

                    <span
                      className={`block px-3 py-2.5 text-center text-[0.82rem] font-black leading-tight tracking-[-0.03em] lg:px-2 lg:py-tight lg:text-[clamp(0.8rem,1.02vw,1.08rem)] ${
                        selected ? "bg-yellow-500 text-navy-900" : "bg-navy-900 text-white"
                      }`}
                    >
                      {clip.title.join(" ")}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <StepArrow direction="next" onClick={() => step(1)} />
        </div>

        <div className="mt-tight flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            {data.videos.map((clip, index) => (
              <button
                key={clip.index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`${clip.title.join(" ")} 영상 보기`}
                aria-pressed={index === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active ? "w-6 bg-yellow-500" : "w-2 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={!muted}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/25 transition-colors duration-200 hover:bg-white/22"
          >
            <SoundIcon muted={muted} />
            <span className="sr-only">재생 중인 영상 소리 {muted ? "켜기" : "끄기"}</span>
          </button>
        </div>

        <ul className="mx-auto mt-group grid max-w-[68rem] grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-0">
          {data.points.map((point, index) => {
            const Icon = pointIcons[point.icon];
            return (
              <li
                key={point.title}
                className={`flex items-center gap-3 lg:justify-center lg:gap-group ${
                  index > 0 ? "sm:border-l sm:border-white/20 sm:pl-4 lg:pl-gutter" : ""
                }`}
              >
                <Icon className="h-9 w-9 shrink-0 text-yellow-500 lg:h-[min(2.1vw,3.7vh)] lg:w-[min(2.1vw,3.7vh)]" />
                <span className="min-w-0">
                  <span className="block text-[0.95rem] font-black tracking-[-0.03em] text-white lg:text-[clamp(0.92rem,1.14vw,1.2rem)]">
                    {point.title}
                  </span>
                  <span className="mt-0.5 block text-[0.82rem] leading-relaxed text-white/72 lg:text-[clamp(0.8rem,0.95vw,1rem)]">
                    {point.body.join(" ")}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-group flex justify-center">
          <a
            href={data.cta.href}
            className="group inline-flex items-center gap-2.5 rounded-full bg-yellow-500 px-7 py-3 text-[0.94rem] font-black tracking-[-0.03em] text-navy-900 shadow-raise transition-transform duration-200 hover:-translate-y-0.5 lg:px-card lg:text-[clamp(0.95rem,1.2vw,1.26rem)]"
          >
            {data.cta.label}
            <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
