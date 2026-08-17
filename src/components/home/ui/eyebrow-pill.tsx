import { SparkIcon } from "@/components/home/icons";

type EyebrowPillProps = {
  label: string;
  /** `solid` = filled navy pill (22); `outline` = blue pill with gold rule (33). */
  tone?: "solid" | "outline";
  sparks?: boolean;
};

/**
 * The comps put a labelled pill above both the franchise and philosophy
 * headings, so this is the brief's device rather than a stock eyebrow.
 */
export function EyebrowPill({ label, tone = "solid", sparks = false }: EyebrowPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-6 py-2 text-[0.86rem] font-black tracking-[0.14em] lg:text-[clamp(0.8rem,1.02vw,1.05rem)] ${
        tone === "solid"
          ? "bg-navy-900 text-yellow-500"
          : "border-2 border-gold-600 bg-blue-band text-yellow-500"
      }`}
    >
      {sparks ? <SparkIcon className="h-3.5 w-3.5" /> : null}
      {label}
      {sparks ? <SparkIcon className="h-3.5 w-3.5" /> : null}
    </span>
  );
}
