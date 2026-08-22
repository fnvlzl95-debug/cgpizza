import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * Field decoration shared by the three blue first screens.
 *
 * These lived twice over — privately inside the home hero and again inside the
 * menu hero — which is why the brand sheet had none of them and read as a
 * different site. They are the brand's furniture, not one page's, so they live
 * here and every surface pulls from the same drawer.
 */

/**
 * The crown mark, hung off an edge and barely lit. The same stamp on every
 * first screen is what makes three routes read as one brand.
 */
export function CrownWatermark({
  className = "pointer-events-none absolute -left-[8.5rem] top-16 h-[26rem] w-auto text-white/[0.06] lg:-left-[11rem] lg:top-[5.5rem] lg:h-[36rem]",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 200 240" aria-hidden="true" className={className}>
      <path
        d="M12 24 100 214 188 24l-50 92-38-70-38 70-50-92Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Toasted crumb and salt scatter in two clusters — off a round subject's upper
 * right and lower left — rather than an even field, which reads as noise.
 */
export function CrumbScatter({ className }: { className: string }) {
  // [cx, cy, r, opacity, salt] in a 100×100 field over the subject's box.
  const crumbs = [
    [78, 2, 0.5, 0.9, false], [83, 6, 0.34, 0.75, false], [88, 3, 0.42, 0.85, false],
    [92, 8, 0.28, 0.6, true], [86, 11, 0.55, 0.95, false], [95, 4, 0.36, 0.8, true],
    [90, 14, 0.3, 0.65, false], [97, 11, 0.44, 0.7, true], [81, 9, 0.26, 0.55, true],
    [94, 17, 0.32, 0.6, false], [99, 7, 0.3, 0.55, true],
    [10, 92, 0.52, 0.9, false], [5, 88, 0.34, 0.7, false], [15, 96, 0.4, 0.85, false],
    [2, 95, 0.28, 0.6, true], [19, 90, 0.46, 0.8, false], [8, 98, 0.3, 0.65, true],
    [23, 97, 0.36, 0.7, false], [13, 85, 0.24, 0.5, true], [27, 93, 0.3, 0.6, false],
  ] as const;

  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      {crumbs.map(([cx, cy, r, opacity, salt], index) => (
        <circle key={index} cx={cx} cy={cy} r={r} fill={salt ? "#FFFFFF" : "#D2984E"} opacity={opacity} />
      ))}
    </svg>
  );
}

export type HeroProp = {
  src: string;
  className: string;
  style: Record<string, string>;
};

/**
 * Drifting cut-out props. Each one carries its own duration and delay in the
 * markup so the cluster never breathes in unison — that reads as a loop rather
 * than as floating. Give some props a layer behind the subject and some in
 * front: a prop that only ever passes behind is wallpaper, and one that always
 * passes in front is a sticker.
 */
export function HeroProps({
  items,
  className,
}: {
  items: readonly HeroProp[];
  className: string;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      {items.map((prop) => (
        <span
          key={prop.src}
          className={`motion-drift absolute ${prop.className}`}
          style={prop.style as CSSProperties}
        >
          <Image
            src={prop.src}
            alt=""
            width={560}
            height={560}
            sizes="(max-width: 1024px) 16vw, 9vw"
            className="h-auto w-full drop-shadow-[0_14px_22px_rgba(42,10,6,0.5)]"
          />
        </span>
      ))}
    </div>
  );
}
