/**
 * One icon family for the whole home page: 24-unit grid, 1.8 stroke, round
 * caps and joins, drawn to sit on the comps' gold-on-blue and navy-on-cream
 * pairings. Filled marks (table chips, trust seals) declare `variant="solid"`.
 */

type IconProps = {
  className?: string;
  /** Nested <svg> inside an <svg> has no CSS box, so a Tailwind size class is
   *  ignored there. Pass explicit geometry when drawing into a chart. */
  width?: number;
  height?: number;
  x?: number;
  y?: number;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Svg({
  className,
  width,
  height,
  x,
  y,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width={width}
      height={height}
      x={x}
      y={y}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/* ── Hero proof row ─────────────────────────────────────────── */

export function LeafIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M20 4c0 8.5-4.4 13-11 13H5.5C5.5 9.6 10.7 4.6 20 4Z" />
      <path {...stroke} d="M5 20c1.8-5.4 5-9.2 9.6-11.6" />
    </Svg>
  );
}

export function ChefIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        {...stroke}
        d="M6.6 14.4a4 4 0 1 1 1.9-7.5 4.1 4.1 0 0 1 7 0 4 4 0 1 1 1.9 7.5v0"
      />
      <path {...stroke} d="M6.6 14.4h10.8v3.8a1.6 1.6 0 0 1-1.6 1.6H8.2a1.6 1.6 0 0 1-1.6-1.6v-3.8Z" />
      <path {...stroke} d="M10 17.2h4" />
    </Svg>
  );
}

export function MedalIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle {...stroke} cx="12" cy="10" r="6" />
      <path {...stroke} d="m12 7.4 1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2L8.8 9.7l2.2-.3 1-2Z" />
      <path {...stroke} d="m8.6 15.4-1.4 5 4.8-2.3 4.8 2.3-1.4-5" />
    </Svg>
  );
}

/* ── Benefit table chips (S2) ───────────────────────────────── */

export function TagIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M12.6 3.4H19a1.6 1.6 0 0 1 1.6 1.6v6.4a1.6 1.6 0 0 1-.47 1.13l-7.4 7.4a1.6 1.6 0 0 1-2.26 0l-6.4-6.4a1.6 1.6 0 0 1 0-2.26l7.4-7.4a1.6 1.6 0 0 1 1.13-.47Z"
      />
      <circle cx="16.2" cy="7.8" r="1.5" fill="#fff" />
    </Svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path fill="currentColor" d="M2.6 6.4h10.2v8.9H2.6z" />
      <path fill="currentColor" d="M13.6 9h3.6l3.2 3.4v2.9h-6.8z" />
      <circle cx="7" cy="17.4" r="2.2" fill="currentColor" />
      <circle cx="17" cy="17.4" r="2.2" fill="currentColor" />
      <circle cx="7" cy="17.4" r="0.8" fill="#fff" />
      <circle cx="17" cy="17.4" r="0.8" fill="#fff" />
    </Svg>
  );
}

export function ToolsIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="m4.3 5.6 1.5-1.5 4.6 4.6-1.5 1.5-1.4-.3-3.5-3.5.3-.8Z"
      />
      <path fill="currentColor" d="m9.4 11.7 1.5-1.5 8.4 8.4-1.5 1.5-8.4-8.4Z" />
      <path fill="currentColor" d="m19.7 4.1-3.4 3.4-1.6-.4-.4-1.6 3.4-3.4a4.4 4.4 0 0 0-4.6 6.5l-8 8 1.5 1.5 8-8a4.4 4.4 0 0 0 6.5-4.6l-1.4-1.4Z" opacity="0" />
      <path fill="currentColor" d="m4.4 17.9 5.1-5.1 1.6 1.6-5.1 5.1-1.6-1.6Z" />
      <path fill="currentColor" d="M16.6 3.2a3.9 3.9 0 0 1 4.2 5.1l-2.5-2.5-1.9 1.9-1.6-1.6 1.9-1.9-.1-1Z" />
    </Svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M12 3.6a7.4 7.4 0 0 0-7.4 7.4v1.2h1.9a1.7 1.7 0 0 1 1.7 1.7v2.9a1.7 1.7 0 0 1-1.7 1.7H5.3a1.7 1.7 0 0 1-1.7-1.7V11A8.4 8.4 0 0 1 20.4 11v5.8a3.6 3.6 0 0 1-3.6 3.6h-2.5v-1.8h2.5a1.8 1.8 0 0 0 1.8-1.8h-1.4a1.7 1.7 0 0 1-1.7-1.7v-2.9a1.7 1.7 0 0 1 1.7-1.7h1.9V11A7.4 7.4 0 0 0 12 3.6Z"
      />
    </Svg>
  );
}

/* ── Profit structure (S4) ──────────────────────────────────── */

export function WheatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M12 21.2V6.4" />
      <path {...stroke} d="M12 6.4c0-1.9 1-3.2 3-4 .3 2-.8 3.4-3 4Zm0 0c0-1.9-1-3.2-3-4-.3 2 .8 3.4 3 4Z" />
      <path {...stroke} d="M12 11.4c0-1.9 1-3.2 3-4 .3 2-.8 3.4-3 4Zm0 0c0-1.9-1-3.2-3-4-.3 2 .8 3.4 3 4Z" />
      <path {...stroke} d="M12 16.4c0-1.9 1-3.2 3-4 .3 2-.8 3.4-3 4Zm0 0c0-1.9-1-3.2-3-4-.3 2 .8 3.4 3 4Z" />
    </Svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M5.2 20.4V5.4a1 1 0 0 1 1-1h7.6a1 1 0 0 1 1 1v15" />
      <path {...stroke} d="M14.8 10.4h3a1 1 0 0 1 1 1v9" />
      <path {...stroke} d="M3.6 20.4h16.8" />
      <path {...stroke} d="M8 8.2h1.2M11 8.2h1.2M8 11.8h1.2M11 11.8h1.2M8 15.4h1.2M11 15.4h1.2" />
    </Svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...stroke} x="6.6" y="2.8" width="10.8" height="18.4" rx="2" />
      <path {...stroke} d="M10.4 5.6h3.2" />
      <path {...stroke} d="M12 18.2h.01" />
      <path {...stroke} d="M9.6 9.4h4.8l-.7 4.4H10.3z" />
    </Svg>
  );
}

/** Heart — the brand page's "속이 편안한" recommendation row. */
export function HeartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        {...stroke}
        d="M12 20.4c-4.9-3.5-8-6.8-8-10.3a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8c0 3.5-3.1 6.8-8 10.3Z"
      />
    </Svg>
  );
}

/** Map pin. The family had no address glyph, so the brand sheet was drawing
 *  its own at a stroke the rest of the page does not use. */
export function PinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M12 21.2c-4.3-4-6.5-7.4-6.5-10.4a6.5 6.5 0 0 1 13 0c0 3-2.2 6.4-6.5 10.4Z" />
      <circle {...stroke} cx="12" cy="10.6" r="2.4" />
    </Svg>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle {...stroke} cx="12" cy="7.4" r="3" />
      <path {...stroke} d="M6.4 19.6a5.6 5.6 0 0 1 11.2 0" />
      <path {...stroke} d="M18.4 9.6a2.3 2.3 0 1 0 0-4.4M21 17.6a4.2 4.2 0 0 0-2.6-3.9" />
      <path {...stroke} d="M5.6 9.6a2.3 2.3 0 1 1 0-4.4M3 17.6a4.2 4.2 0 0 1 2.6-3.9" />
    </Svg>
  );
}

export function GearIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle {...stroke} cx="12" cy="12" r="3.2" />
      <path
        {...stroke}
        d="M19.5 14.6a7.7 7.7 0 0 0 0-5.2l1.8-1.4-1.8-3.1-2.1.9a7.7 7.7 0 0 0-4.5-2.6L12.6 1h-3.6l-.3 2.2a7.7 7.7 0 0 0-4.5 2.6l-2.1-.9L.3 8l1.8 1.4a7.7 7.7 0 0 0 0 5.2L.3 16l1.8 3.1 2.1-.9a7.7 7.7 0 0 0 4.5 2.6l.3 2.2h3.6l.3-2.2a7.7 7.7 0 0 0 4.5-2.6l2.1.9 1.8-3.1-1.8-1.4Z"
        transform="translate(1.2 0.9) scale(0.9)"
      />
    </Svg>
  );
}

export function CoinsIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <ellipse {...stroke} cx="12" cy="6.6" rx="6.4" ry="2.6" />
      <path {...stroke} d="M5.6 6.6v4c0 1.4 2.9 2.6 6.4 2.6s6.4-1.2 6.4-2.6v-4" />
      <path {...stroke} d="M5.6 10.6v4c0 1.4 2.9 2.6 6.4 2.6s6.4-1.2 6.4-2.6v-4" />
    </Svg>
  );
}

export function MoneyBagIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M9.4 2.8h5.2l-1.3 2.6h-2.6L9.4 2.8Z" />
      <path
        {...stroke}
        d="M12 5.4c3.6 0 6.6 4.2 6.6 8.6 0 4-2.6 6.4-6.6 6.4s-6.6-2.4-6.6-6.4c0-4.4 3-8.6 6.6-8.6Z"
      />
      <path {...stroke} d="M10.2 11.4h3.6M10.2 13.6h3.6M12 10v6" />
    </Svg>
  );
}

/* ── Trust seals (S4 bottom) ────────────────────────────────── */

export function SealIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        {...stroke}
        d="m12 2.6 2.2 1.6 2.7-.2.9 2.6 2.2 1.6-1 2.5 1 2.5-2.2 1.6-.9 2.6-2.7-.2L12 19.8l-2.2-1.6-2.7.2-.9-2.6L4 14.2l1-2.5-1-2.5 2.2-1.6.9-2.6 2.7.2L12 2.6Z"
      />
      <path {...stroke} d="m9.4 11.6 1.9 1.9 3.5-3.6" />
    </Svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M4 20h16" />
      <path fill="currentColor" d="M5.6 13.4h3v6h-3zM10.5 10.2h3v9.2h-3zM15.4 6.6h3v12.8h-3z" />
      <path {...stroke} d="m5.6 9.4 4.9-3.6 3.4 2.2 5.5-4.4" />
      <path {...stroke} d="M15.6 3.6h3.8v3.8" />
    </Svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="m2.8 12.6 3-3.4 4.2 1.2 2 1.8" />
      <path {...stroke} d="m21.2 12.6-3-3.4-4.2 1.2-1.5 1.4" />
      <path
        {...stroke}
        d="m8.2 13.4 2.1 2.1M10.4 11.9l2.4 2.4M12.8 10.9l2.6 2.6M6.4 15l1.7 1.7"
      />
      <path {...stroke} d="M3.6 8.4 6.2 6l3 .9M20.4 8.4 17.8 6l-3 .9" />
    </Svg>
  );
}

/* ── Real kitchen (S6) ──────────────────────────────────────── */

export function DiamondIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <g {...stroke} strokeWidth={1.35}>
        <path d="m12 2.6 6.6 6.1-6.6 12.7L5.4 8.7 12 2.6Z" />
        <path d="M5.4 8.7h13.2" />
        <path d="m12 2.6-3.2 6.1L12 21.4l3.2-12.7L12 2.6Z" />
      </g>
    </Svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <g {...stroke} strokeWidth={1.35}>
        <path d="M12 2.4 4.6 5.5v6.9c0 4.5 3 8.1 7.4 9.8 4.4-1.7 7.4-5.3 7.4-9.8V5.5L12 2.4Z" />
        <path d="m8.6 12.1 2.5 2.6 4.5-4.9" />
      </g>
    </Svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path fill="currentColor" d="M9.2 6.6 17.4 12l-8.2 5.4V6.6Z" />
    </Svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M12 2.6c.5 3.9 2.1 5.9 6 6.5-3.9.5-5.5 2.5-6 6.4-.5-3.9-2.1-5.9-6-6.4 3.9-.6 5.5-2.6 6-6.5Z"
      />
      <path fill="currentColor" d="M18.4 15.2c.3 2 1.1 3 3.1 3.3-2 .3-2.8 1.3-3.1 3.3-.3-2-1.1-3-3.1-3.3 2-.3 2.8-1.3 3.1-3.3Z" />
    </Svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M4.6 12h14.2M13.4 6.6 18.8 12l-5.4 5.4" />
    </Svg>
  );
}

/* ── Kitchen proof row ──────────────────────────────────────── */

export function FlameIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        {...stroke}
        d="M12 3.2c.4 3 2 4.6 3.8 6.3 1.6 1.5 2.6 3.2 2.6 5.2a6.4 6.4 0 0 1-12.8 0c0-1.6.6-2.9 1.6-4.1.3 1 .9 1.8 1.8 2.2-.3-3.6.8-6.6 3-9.6Z"
      />
      <path {...stroke} d="M12 20.4a2.9 2.9 0 0 1-1.5-5.4c.5 1 1.2 1.5 2.2 1.7-.2-1.5.2-2.7 1-3.7.9.9 1.4 2 1.4 3.2a2.9 2.9 0 0 1-3.1 4.2Z" />
    </Svg>
  );
}

export function ThermometerIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...stroke} d="M14.4 13.6V5.4a2.4 2.4 0 0 0-4.8 0v8.2a4.2 4.2 0 1 0 4.8 0Z" />
      <path fill="currentColor" d="M12 10.6a1.4 1.4 0 0 1 1.4 1.4v3.3a2.4 2.4 0 1 1-2.8 0V12a1.4 1.4 0 0 1 1.4-1.4Z" />
      <path {...stroke} d="M16.4 6.6h2.4M16.4 9.4h1.6M16.4 12.2h2.4" />
    </Svg>
  );
}

export function CrownIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path fill="currentColor" d="M3.4 7.6 7 12l5-6.6L17 12l3.6-4.4 -1.4 10.2H4.8L3.4 7.6Z" />
      <path fill="currentColor" d="M4.6 19.4h14.8v1.8H4.6z" />
    </Svg>
  );
}

/* ── Section art drawn as vector (S5 cards 1 and 4) ─────────── */

export function TargetArt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <circle cx="60" cy="60" r="34" strokeWidth="7" />
        <circle cx="60" cy="60" r="19" strokeWidth="7" />
        <path strokeWidth="7" d="M60 8v18M60 94v18M8 60h18M94 60h18" />
      </g>
      <circle cx="60" cy="60" r="7" fill="currentColor" />
    </svg>
  );
}

export function GrowthArt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" focusable="false">
      <rect x="14" y="74" width="20" height="32" rx="4" fill="#021D3E" />
      <rect x="46" y="58" width="20" height="48" rx="4" fill="#021D3E" />
      <rect x="78" y="42" width="20" height="64" rx="4" fill="#FDD816" />
      <path
        d="M16 62 44 40l18 14 32-30"
        fill="none"
        stroke="#021D3E"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M78 22h18v18"
        fill="none"
        stroke="#021D3E"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
