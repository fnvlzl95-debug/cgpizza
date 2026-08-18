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
 * Structure borrowed from the rustic reference — a featured middle clip,
 * numbered ribbons, run-times, a caption band under each frame, a three-up
 * proof row and a real button — rendered in this page's own world rather than
 * its parchment one. One section in a different palette reads as a different
 * website.
 *
 * The clips play muted and looping as they enter view: the claim here is
 * 연출이 아니라 실제 과정, and a frozen frame asks the visitor to take that on
 * trust. Sound stays theirs to turn on.
 */

const pointIcons = {
  leaf: LeafIcon,
  flame: FlameIcon,
  temp: ThermometerIcon,
} as const;

/** Ribbon and caption band per clip; the middle one carries the gold. */
const trim = [
  { chip: "bg-navy-900 text-white", band: "bg-navy-900 text-white", ring: "ring-white/15" },
  { chip: "bg-yellow-500 text-navy-900", band: "bg-yellow-500 text-navy-900", ring: "ring-yellow-500" },
  { chip: "bg-blue-band text-white", band: "bg-blue-band text-white", ring: "ring-white/15" },
] as const;

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

function VideoCard({ clip, index }: { clip: (typeof data.videos)[number]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const skin = trim[index];
  const featured = clip.accent;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Decode only what is on screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (el.paused) void el.play().catch(() => {});
  };

  return (
    <li>
      <div className={`overflow-hidden rounded-card shadow-card ring-1 ${skin.ring} ${featured ? "lg:ring-2" : ""}`}>
        <div className="group relative isolate aspect-[3/2] bg-navy-900">
          <video
            ref={videoRef}
            src={clip.src}
            poster={clip.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,23,80,0.34)_0%,rgba(1,23,80,0.04)_38%,rgba(1,23,80,0.4)_100%)]"
          />

          {/* Numbered tab hung from the top edge, as the reference sets it. */}
          <span
            className={`absolute left-3 top-0 flex flex-col items-center gap-0.5 px-2.5 pb-3 pt-2 text-[0.82rem] font-black leading-none lg:left-4 lg:px-3 lg:text-[clamp(0.8rem,1.02vw,1.08rem)] ${skin.chip} [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_78%,0%_100%)]`}
          >
            {clip.index}
            {featured ? <CrownIcon className="mt-1 h-3.5 w-3.5" /> : null}
          </span>

          <span className="absolute bottom-3 left-3 rounded-full bg-navy-900/75 px-2.5 py-1 text-[0.74rem] font-bold tabular-nums text-white backdrop-blur-sm lg:bottom-4 lg:left-4">
            {clip.duration}
          </span>

          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={!muted}
            className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-navy-900/60 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-navy-900/85 lg:right-4 lg:top-4"
          >
            <SoundIcon muted={muted} />
            <span className="sr-only">
              {clip.title.join(" ")} 영상 소리 {muted ? "켜기" : "끄기"}
            </span>
          </button>
        </div>

        {/* Caption band under the frame — the reference's strongest device. */}
        <p
          className={`px-4 py-3 text-center text-[0.96rem] font-black tracking-[-0.03em] lg:px-card lg:py-tight lg:text-[clamp(0.94rem,1.2vw,1.26rem)] ${skin.band}`}
        >
          {clip.title.join(" ")}
        </p>
      </div>
    </li>
  );
}

export function RealKitchenSection() {
  const groups = [data.headline.slice(0, 2), data.headline.slice(2)];

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
          <h2 className="text-[2.1rem] font-black leading-[1.14] tracking-[-0.05em] lg:text-[clamp(2.1rem,min(3.1vw,5.5vh),3.3rem)]">
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

          <p className="mt-group text-[0.94rem] text-white/80 lg:text-[clamp(0.9rem,1.08vw,1.14rem)]">
            {data.body[0]}
            <span className="mt-1 block">
              <span className="font-black text-yellow-500">{data.bodyAccent}</span>
              {data.bodyTail}
            </span>
          </p>
        </div>

        {/* The middle clip leads: wider column, gold trim, and it breaks the
            row line at top and bottom. */}
        <ul className="mt-block grid grid-cols-1 items-center gap-4 sm:grid-cols-3 lg:grid-cols-[1fr_1.08fr_1fr] lg:gap-gutter">
          {data.videos.map((clip, index) => (
            <VideoCard key={clip.index} clip={clip} index={index} />
          ))}
        </ul>

        <ul className="mx-auto mt-block grid max-w-[68rem] grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-0">
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
