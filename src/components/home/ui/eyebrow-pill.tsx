type EyebrowPillProps = {
  label: string;
  /** `solid` = filled navy (22); `outline` = ringed (33); `contrast` = for
   *  placement on a saturated ground, where navy would disappear. */
  tone?: "solid" | "outline" | "contrast";
};

/**
 * The comps put a labelled pill above both the franchise and philosophy
 * headings, so this is the brief's device rather than a stock eyebrow.
 */
export function EyebrowPill({ label, tone = "solid" }: EyebrowPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-6 py-2 text-[0.86rem] font-black tracking-[0.02em] lg:text-[clamp(0.8rem,1.02vw,1.05rem)] ${
        tone === "solid"
          ? "bg-ink-900 text-yellow-500"
          : tone === "contrast"
            ? "bg-white/15 text-yellow-500 ring-1 ring-white/30"
            : "border-2 border-gold-600 bg-red-band text-yellow-500"
      }`}
    >
      {label}
    </span>
  );
}
