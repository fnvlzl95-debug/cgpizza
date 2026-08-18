"use client";

import Image from "next/image";
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
 * The clips are shot 1080×1920, so they stay portrait rather than being
 * cropped into landscape frames that throw most of each shot away.
 *
 * The three slots are fixed in size and the clips move between them — the
 * chosen one rotates into the centre, which is the only slot that plays.
 * Sizing the cards off which clip is active instead would animate every card
 * wider and narrower on each step, which is what made stepping feel unsteady.
 * Only the centre needs a <video> at all; the flanks are poster frames.
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
      className={`absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-900/75 text-white ring-1 ring-white/25 backdrop-blur-sm transition-colors duration-200 hover:bg-navy-900 lg:h-[min(3vw,5.3vh)] lg:w-[min(3vw,5.3vh)] ${
        direction === "prev" ? "left-0" : "right-0"
      }`}
    >
      <ArrowRightIcon className={`h-5 w-5 ${direction === "prev" ? "rotate-180" : ""}`} />
    </button>
  );
}

export function RealKitchenSection() {
  const [active, setActive] = useState(1);
  const [muted, setMuted] = useState(true);
  const centreRef = useRef<HTMLVideoElement>(null);
  const count = data.videos.length;

  useEffect(() => {
    const el = centreRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.muted = muted;
    void el.play().catch(() => {});
  }, [active, muted]);

  const step = (delta: number) => setActive((current) => (current + delta + count) % count);

  // Fixed slots; the clips rotate through them.
  const slots = [(active + count - 1) % count, active, (active + 1) % count];

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

        <div className="motion-reveal mt-group text-center">
          <h2 className="text-[1.95rem] font-black leading-[1.14] tracking-[-0.05em] lg:text-[clamp(2rem,min(2.7vw,4.8vh),2.9rem)]">
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

          <p className="mt-tight text-[0.88rem] text-white/80 lg:text-[clamp(0.86rem,0.98vw,1.04rem)]">
            {data.body[0]}
            <span className="mt-0.5 block">
              <span className="font-black text-yellow-500">{data.bodyAccent}</span>
              {data.bodyTail}
            </span>
          </p>
        </div>

        {/* Arrows overlay the ends of the row rather than taking columns of
            their own, so the clips get the width. */}
        <div className="relative mx-auto mt-group w-full max-w-[58rem]">
          <ul className="flex items-center justify-center gap-3 lg:gap-group">
            {slots.map((videoIndex, slot) => {
              const clip = data.videos[videoIndex];
              const centre = slot === 1;

              return (
                <li key={slot} className={centre ? "" : "hidden sm:block"}>
                  <button
                    type="button"
                    onClick={() => (centre ? setMuted((value) => !value) : setActive(videoIndex))}
                    aria-label={
                      centre
                        ? `재생 중: ${clip.title.join(" ")} — 소리 ${muted ? "켜기" : "끄기"}`
                        : `${clip.title.join(" ")} 영상 보기`
                    }
                    className={`group relative block overflow-hidden rounded-card text-left ${
                      centre
                        ? "w-[15rem] shadow-lift ring-2 ring-yellow-500 lg:w-[min(12.6vw,22.2vh)]"
                        : "w-[9rem] opacity-55 shadow-card ring-1 ring-white/15 transition-opacity duration-200 hover:opacity-90 lg:w-[min(9.4vw,16.5vh)]"
                    }`}
                  >
                    <span className="relative block aspect-[9/16] bg-navy-900">
                      {centre ? (
                        <video
                          ref={centreRef}
                          key={clip.src}
                          src={clip.src}
                          poster={clip.poster}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ) : (
                        <Image
                          src={clip.poster}
                          alt=""
                          fill
                          unoptimized
                          sizes="(max-width: 1024px) 40vw, 12vw"
                          className="object-cover"
                        />
                      )}

                      <span
                        aria-hidden="true"
                        className={`absolute inset-0 ${
                          centre
                            ? "bg-[linear-gradient(180deg,rgba(1,23,80,0.34)_0%,rgba(1,23,80,0)_32%,rgba(1,23,80,0.6)_100%)]"
                            : "bg-navy-900/45"
                        }`}
                      />

                      <span
                        className={`absolute left-2.5 top-0 flex flex-col items-center gap-0.5 px-2 pb-2.5 pt-1.5 text-[0.74rem] font-black leading-none lg:left-3 lg:px-2.5 lg:text-[clamp(0.72rem,0.92vw,0.98rem)] ${
                          centre ? "bg-yellow-500 text-navy-900" : "bg-navy-900 text-white"
                        } [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_78%,0%_100%)]`}
                      >
                        {clip.index}
                        {centre ? <CrownIcon className="mt-1 h-3 w-3" /> : null}
                      </span>

                      <span className="absolute bottom-2.5 left-2.5 rounded-full bg-navy-900/75 px-2 py-0.5 text-[0.68rem] font-bold tabular-nums text-white backdrop-blur-sm lg:bottom-3 lg:left-3">
                        {clip.duration}
                      </span>

                      {centre ? (
                        <span className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/70 text-white backdrop-blur-sm lg:bottom-3 lg:right-3">
                          <SoundIcon muted={muted} />
                        </span>
                      ) : null}
                    </span>

                    <span
                      className={`block px-3 py-2 text-center text-[0.82rem] font-black leading-tight tracking-[-0.03em] lg:px-2 lg:text-[clamp(0.8rem,0.98vw,1.04rem)] ${
                        centre ? "bg-yellow-500 text-navy-900" : "bg-navy-900 text-white"
                      }`}
                    >
                      {clip.title.join(" ")}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <StepArrow direction="prev" onClick={() => step(-1)} />
          <StepArrow direction="next" onClick={() => step(1)} />
        </div>

        <div className="mt-tight flex items-center justify-center gap-2">
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

        <ul className="mx-auto mt-group grid max-w-[68rem] grid-cols-1 gap-2 sm:grid-cols-3 lg:gap-0">
          {data.points.map((point, index) => {
            const Icon = pointIcons[point.icon];
            return (
              <li
                key={point.title}
                className={`flex items-center gap-2.5 lg:justify-center lg:gap-group ${
                  index > 0 ? "sm:border-l sm:border-white/20 sm:pl-3 lg:pl-gutter" : ""
                }`}
              >
                <Icon className="h-8 w-8 shrink-0 text-yellow-500 lg:h-[min(1.9vw,3.3vh)] lg:w-[min(1.9vw,3.3vh)]" />
                <span className="min-w-0">
                  <span className="block text-[0.9rem] font-black tracking-[-0.03em] text-white lg:text-[clamp(0.88rem,1.02vw,1.08rem)]">
                    {point.title}
                  </span>
                  <span className="mt-0.5 block text-[0.78rem] leading-snug text-white/72 lg:text-[clamp(0.76rem,0.9vw,0.96rem)]">
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
            className="group inline-flex items-center gap-2.5 rounded-full bg-yellow-500 px-6 py-2.5 text-[0.9rem] font-black tracking-[-0.03em] text-navy-900 shadow-raise transition-transform duration-200 hover:-translate-y-0.5 lg:px-card lg:text-[clamp(0.9rem,1.08vw,1.14rem)]"
          >
            {data.cta.label}
            <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
