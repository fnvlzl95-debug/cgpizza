"use client";

import { useEffect, useRef, useState } from "react";
import { DiamondIcon, ShieldIcon, SparkIcon } from "@/components/home/icons";
import { EyebrowPill } from "@/components/home/ui/eyebrow-pill";
import { realKitchen as data } from "@/lib/home-content";

/**
 * 99's content on the page's own layout: the centred label, heading and
 * subhead every other section uses, then the clips at full width.
 *
 * The clips play muted and looping as they enter view rather than sitting
 * behind a play button. This section's whole claim is 연출이 아니라 실제
 * 과정, and a still frame asks the visitor to take that on trust — a running
 * kitchen shows it. Sound stays theirs to turn on.
 */

const pointIcons = {
  diamond: DiamondIcon,
  shield: ShieldIcon,
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

function VideoCard({ clip }: { clip: (typeof data.videos)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Decode only what is on screen; three loops running out of view is a
    // cost the visitor never sees.
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
    <li className="group relative isolate aspect-[4/3] overflow-hidden rounded-card bg-navy-900 shadow-card">
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
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,23,80,0.04)_0%,rgba(1,23,80,0.1)_46%,rgba(1,23,80,0.84)_100%)]"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-card">
        <span className="flex items-center gap-2 text-[0.78rem] font-black tracking-[0.1em] text-yellow-500 lg:text-[clamp(0.74rem,0.92vw,0.96rem)]">
          <span aria-hidden="true" className="h-0.5 w-5 bg-yellow-500" />
          {clip.index}
        </span>
        <span className="mt-1 block text-[1.02rem] font-black leading-[1.3] tracking-[-0.04em] text-white lg:text-[clamp(1rem,1.3vw,1.37rem)]">
          {clip.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
      </div>

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
          <h2 className="text-[2.1rem] font-black leading-[1.14] tracking-[-0.05em] lg:text-[clamp(2.3rem,min(4vw,7.1vh),4.25rem)]">
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

          <div className="mt-group space-y-1 text-[0.94rem] text-white/80 lg:text-[clamp(0.9rem,1.08vw,1.14rem)]">
            {data.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <ul className="mt-block grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-gutter">
          {data.videos.map((clip) => (
            <VideoCard key={clip.index} clip={clip} />
          ))}
        </ul>

        <ul className="mx-auto mt-block grid max-w-[62rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-gutter">
          {data.points.map((point) => {
            const Icon = pointIcons[point.icon];
            return (
              <li key={point.title} className="flex items-center gap-3 lg:gap-group">
                <Icon className="h-10 w-10 shrink-0 text-yellow-500 lg:h-[min(2.9vw,5.1vh)] lg:w-[min(2.9vw,5.1vh)]" />
                <span className="min-w-0">
                  <span className="block text-[0.98rem] font-black tracking-[-0.03em] text-yellow-500 lg:text-[clamp(0.95rem,1.2vw,1.26rem)]">
                    {point.title}
                  </span>
                  <span className="mt-0.5 block text-[0.85rem] leading-relaxed text-white/78 lg:text-[clamp(0.82rem,0.98vw,1.02rem)]">
                    {point.body.join(" ")}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-block flex w-fit items-center gap-3 rounded-full border-2 border-gold-600/70 px-5 py-2.5 text-center text-[0.88rem] font-bold text-white lg:gap-group lg:px-card lg:py-tight lg:text-[clamp(0.88rem,1.14vw,1.2rem)]">
          <SparkIcon className="h-5 w-5 shrink-0 text-yellow-500" />
          <span aria-hidden="true" className="hidden h-6 w-px bg-white/30 lg:block" />
          <span>
            {data.closer.lead}
            <span className="font-black text-yellow-500">{data.closer.accent}</span>
            {data.closer.tail}
          </span>
        </p>
      </div>
    </section>
  );
}
