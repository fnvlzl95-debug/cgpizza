"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
 * The clips are shot 1080×1920 and stay portrait rather than being cropped
 * into landscape frames that throw most of each shot away.
 *
 * This is a real track: every clip is laid out in one row and the row slides,
 * so stepping moves the strip rather than swapping pictures in place. Three
 * copies of the list are rendered and the position snaps back into the middle
 * copy once a slide finishes, which is what makes it loop without ever
 * running out of neighbours. Width never animates — the centre card is scaled
 * with a transform, so nothing reflows and the row stays steady.
 */

const pointIcons = {
  leaf: LeafIcon,
  flame: FlameIcon,
  temp: ThermometerIcon,
} as const;

const COUNT = data.videos.length;
const COPIES = 3;
/** With the strip centred as a whole, this index sits under the midline. */
const MIDPOINT = Math.floor((COUNT * COPIES) / 2);
const LOOP = Array.from({ length: COUNT * COPIES }, (_, index) => ({
  clip: data.videos[index % COUNT],
  source: index % COUNT,
  slot: index,
}));

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
      className={`absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-900/85 text-white ring-1 ring-white/25 transition-colors duration-200 hover:bg-navy-900 lg:h-[min(3vw,5.3vh)] lg:w-[min(3vw,5.3vh)] ${
        direction === "prev" ? "left-0" : "right-0"
      }`}
    >
      <ArrowRightIcon className={`h-5 w-5 ${direction === "prev" ? "rotate-180" : ""}`} />
    </button>
  );
}

export function RealKitchenSection() {
  // Position on the rendered strip; starts in the middle copy.
  const [position, setPosition] = useState(MIDPOINT);
  const [sliding, setSliding] = useState(true);
  const [settled, setSettled] = useState(true);
  const [muted, setMuted] = useState(true);
  const centreRef = useRef<HTMLVideoElement>(null);

  const active = ((position % COUNT) + COUNT) % COUNT;

  useEffect(() => {
    const el = centreRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.muted = muted;
    void el.play().catch(() => {});
  }, [active, muted]);

  // Once a slide lands, jump silently back into the middle copy so there is
  // always a card either side to slide toward.
  const recentre = useCallback(() => {
    setPosition((current) => {
      const normalised = MIDPOINT - (MIDPOINT % COUNT) + (((current % COUNT) + COUNT) % COUNT);
      if (normalised === current) return current;
      setSliding(false);
      return normalised;
    });
  }, []);

  useEffect(() => {
    if (sliding) return;
    const frame = requestAnimationFrame(() => setSliding(true));
    return () => cancelAnimationFrame(frame);
  }, [sliding]);

  const step = (delta: number) => {
    setSliding(true);
    setSettled(false);
    setPosition((current) => current + delta);
  };

  const goTo = (index: number) => {
    setSliding(true);
    setSettled(false);
    setPosition(MIDPOINT - (MIDPOINT % COUNT) + index);
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

          <p className="mx-auto mt-tight max-w-[42rem] text-balance text-[0.88rem] text-white/80 lg:text-[clamp(0.86rem,0.98vw,1.04rem)]">
            {data.body[0]}
            <span className="mt-0.5 block">
              <span className="font-black text-yellow-500">{data.bodyAccent}</span>
              {data.bodyTail}
            </span>
          </p>
        </div>

        <div
          className="clip-track relative mx-auto mt-group"
          /* Three strides wide, so the strip shows the centre and a neighbour
             either side rather than the whole loop. */
          style={{ width: "min(100%, calc(var(--stride) * 2.95))" }}
        >
          {/* The viewport clips the strip; the strip itself is what moves. */}
          <div
            className="flex justify-center overflow-hidden"
            /* The centre card is scaled, so the clip window needs room
               for the overshoot above and below. */
            style={{ padding: "calc(var(--slide) * 16 / 9 * 0.155) 0" }}
          >
            <ul
              onTransitionEnd={() => {
                recentre();
                setSettled(true);
              }}
              className={`flex w-max will-change-transform ${sliding ? "transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
              style={{
                gap: "var(--slide-gap)",
                // The strip is centred by the flex parent, so the offset is
                // measured from whichever item naturally sits on the midline.
                transform: `translateX(calc((${MIDPOINT} - ${position}) * var(--stride)))`,
              }}
            >
              {LOOP.map(({ clip, source, slot }) => {
                const centre = slot === position;
                return (
                  <li
                    key={slot}
                    /* The centre card is scaled past its own box, and
                       later siblings paint over it without this. */
                    className={`shrink-0 ${centre ? "relative z-10" : ""}`}
                    style={{ width: "var(--slide)" }}
                  >
                    <button
                      type="button"
                      onClick={() => (centre ? setMuted((value) => !value) : goTo(source))}
                      /* The strip renders three copies of the list, so every
                         card but the playing one is hidden from assistive tech;
                         otherwise each clip is announced three times over. The
                         arrows and dots carry the navigation. */
                      aria-hidden={!centre}
                      tabIndex={centre ? 0 : -1}
                      aria-label={
                        centre
                          ? `재생 중: ${clip.title.join(" ")} — 소리 ${muted ? "켜기" : "끄기"}`
                          : undefined
                      }
                      className={`group relative block w-full overflow-hidden rounded-card text-left will-change-[transform,opacity] transition-[scale,opacity] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        centre
                          ? "scale-[1.3] opacity-100 shadow-lift ring-2 ring-yellow-500"
                          : "scale-100 opacity-55 shadow-card ring-1 ring-white/15"
                      }`}
                    >
                      <span className="relative block aspect-[9/16] bg-navy-900">
                        {centre && settled ? (
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
                              ? "bg-[linear-gradient(180deg,rgba(1,23,80,0.32)_0%,rgba(1,23,80,0)_32%,rgba(1,23,80,0.56)_100%)]"
                              : "bg-navy-900/45"
                          }`}
                        />

                        <span
                          className={`absolute left-2 top-0 flex flex-col items-center gap-0.5 px-1.5 pb-2 pt-1 text-[0.6rem] font-black leading-none lg:px-2 lg:text-[clamp(0.58rem,0.72vw,0.78rem)] ${
                            centre ? "bg-yellow-500 text-navy-900" : "bg-navy-900 text-white"
                          } [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_78%,0%_100%)]`}
                        >
                          {clip.index}
                          {centre ? <CrownIcon className="mt-0.5 h-2.5 w-2.5" /> : null}
                        </span>

                        <span className="absolute bottom-2 left-2 rounded-full bg-navy-900/85 px-1.5 py-0.5 text-[0.56rem] font-bold tabular-nums text-white lg:text-[clamp(0.54rem,0.68vw,0.74rem)]">
                          {clip.duration}
                        </span>

                        {centre ? (
                          <span className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-navy-900/85 text-white">
                            <SoundIcon muted={muted} />
                          </span>
                        ) : null}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <StepArrow direction="prev" onClick={() => step(-1)} />
          <StepArrow direction="next" onClick={() => step(1)} />
        </div>

        <div className="mt-tight flex items-center justify-center gap-2">
          {data.videos.map((clip, index) => (
            <button
              key={clip.index}
              type="button"
              onClick={() => goTo(index)}
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

      </div>
    </section>
  );
}
