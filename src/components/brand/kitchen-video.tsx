"use client";

import { useRef, useState } from "react";
import { PlayIcon } from "@/components/home/icons";

type KitchenVideoProps = {
  src: string;
  poster: string;
  label: string;
};

/**
 * The comp shows this panel as a still frame under a single ringed play
 * button, so the browser's control bar cannot be on screen at rest — it is a
 * grey strip across the bottom third of the composition. The poster is an
 * image until someone asks for the clip; from the first play the real
 * controls take over, which is what a visitor needs once it is running.
 */
export function KitchenVideo({ src, poster, label }: KitchenVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    // The element mounts with the poster showing; play once React has it.
    requestAnimationFrame(() => void videoRef.current?.play());
  };

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        controls={started}
        muted
        playsInline
        preload="metadata"
        aria-label={label}
      />

      {/* The legibility scrim is permanent, not part of the play affordance:
          the panel's copy sits over this footage whether or not it is
          playing, and the poster's crust is nearly white where the last two
          lines land on a phone. Navy, per the scrim rule — never black. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/90 via-ink-900/40 via-45% to-ink-900/10"
      />

      {started ? null : (
        <button
          type="button"
          onClick={start}
          className="group absolute inset-0 flex items-center justify-center focus:outline-none"
        >
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-ink-900/45 text-white transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-yellow-500/70 lg:h-[4.6rem] lg:w-[4.6rem]">
            <PlayIcon className="ml-1 h-7 w-7 lg:h-8 lg:w-8" />
          </span>
          <span className="sr-only">{label} 재생</span>
        </button>
      )}

    </div>
  );
}
