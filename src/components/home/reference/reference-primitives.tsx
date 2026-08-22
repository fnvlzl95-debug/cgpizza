import type { CSSProperties, ReactNode } from "react";

export const revealEase = [0.22, 1, 0.36, 1] as const;

export function arcStyle(color: string): CSSProperties {
  return {
    backgroundColor: color,
    borderRadius: "999px 999px 0 0 / 110px 110px 0 0",
  };
}

export function BrandMark({
  className = "h-7 w-7",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="6.5" r="2.75" fill={color} />
      <circle cx="20" cy="3.75" r="3.25" fill={color} />
      <circle cx="32.5" cy="6.5" r="2.75" fill={color} />
      <path
        d="M6.4 11.4 9.6 31.6 19.9 17.8 30.5 31.6 33.6 11.4"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.7 31.6 20 22.2 30.3 31.6"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSparkles() {
  return (
    <div className="mb-4 flex gap-7 text-[#ffcf20] sm:gap-8">
      <span className="h-2.5 w-2.5 rotate-45 rounded-[1px] bg-current" />
      <span className="h-2.5 w-2.5 rotate-45 rounded-[1px] bg-current" />
      <span className="h-2.5 w-2.5 rotate-45 rounded-[1px] bg-current" />
      <span className="h-2.5 w-2.5 rotate-45 rounded-[1px] bg-current" />
    </div>
  );
}

export function ChevronRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="m10 8 6 4-6 4V8Z" fill="currentColor" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ValueIcon({
  type,
  className = "h-4 w-4",
}: {
  type: "leaf" | "chef" | "layers" | "thumb";
  className?: string;
}) {
  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <path
          d="M18.5 4.5c-6.4 0-11 3.9-11 9.1 0 3.2 2.3 5.4 5.4 5.4 4.9 0 7.9-4.2 7.9-10.2-.7.4-1.4.6-2.3.6Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 18c2.4-3.3 5.2-5.6 8.5-6.9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "chef") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <path
          d="M7 18v-4.3A4.8 4.8 0 0 1 11.8 9a4.8 4.8 0 0 1 4.8 4.7V18"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path
          d="M6.2 11.1c-.8-3 1.4-5.7 4.4-5.7.9-1.8 2.5-2.8 4.4-2.8 2.8 0 5 2.1 5.1 4.8 1.3.4 2.1 1.5 2.1 2.8"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path d="M8.8 18h6.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "layers") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <path
          d="m12 4 8 4-8 4-8-4 8-4Zm0 8 8 4-8 4-8-4 8-4Zm0 0 8-4"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M10.5 20h-2A4.5 4.5 0 0 1 4 15.5v-2.8A4.7 4.7 0 0 1 8.7 8h3.1A4.2 4.2 0 0 1 16 3.8h.7A3.3 3.3 0 0 1 20 7.1c0 1.6-1.1 3-2.7 3.3v5.1A4.5 4.5 0 0 1 12.8 20h-2.3Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ValueIconWrap({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8d1007] text-[#ffd323] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] sm:h-10 sm:w-10">
      {children}
    </span>
  );
}

export function MenuBadge({
  tone,
  children,
}: {
  tone: "BEST" | "NEW" | "SIGNATURE";
  children: ReactNode;
}) {
  const className =
    tone === "BEST"
      ? "bg-[#f04a42] text-white"
      : tone === "NEW"
        ? "bg-[#ffd12a] text-white"
        : "bg-[#8d1007] text-[#ffd12a]";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-black tracking-[0.04em] shadow-[0_4px_10px_rgba(0,0,0,0.12)] ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * Gold marker sweep behind a headline word. The comps' mark is a thick, rough
 * brush that fully covers the word with frayed ends and a few flicks past the
 * stroke, so this draws the whole slab rather than an underline.
 *
 * `preserveAspectRatio="none"` on purpose: the slab stretches to whatever word
 * it sits behind, which is what a marker does and what the comps show.
 */
export function BrushHighlight({
  className = "absolute -inset-x-[4%] -inset-y-[6%] -z-10 h-[112%] w-[108%] text-yellow-500",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 420 100" preserveAspectRatio="none" aria-hidden="true" className={className}>
      {/* Main slab: uneven top and bottom edges, tapering at both ends. */}
      <path
        fill="currentColor"
        d="M4 24c26-7 62-12 108-15 58-4 118-4 178 0 42 3 76 8 102 15 14 4 22 9 24 16 3 12-1 22-11 30-6 5-16 7-30 6-52-5-104-8-156-8-56 0-112 4-168 12-16 2-27 1-33-4-8-6-11-16-11-30 0-11 0-17 3-20 2-2 6-3 13-5Z"
      />
      {/* Flicks running past the slab, as a dry marker leaves. */}
      <path fill="currentColor" d="M392 22c12 2 20 6 24 11l-4 4c-6-6-14-10-24-12l4-3Z" />
      <path fill="currentColor" d="M400 68c10-2 17-6 22-11l3 5c-6 6-14 10-24 12l-1-6Z" />
      <path fill="currentColor" opacity="0.75" d="M12 16c30-6 66-10 108-12l1 6c-40 2-75 6-104 12l-5-6Z" />
    </svg>
  );
}
