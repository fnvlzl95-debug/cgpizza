import {
  BuildingIcon,
  CoinsIcon,
  GearIcon,
  MoneyBagIcon,
  PeopleIcon,
  PhoneIcon,
  WheatIcon,
} from "@/components/home/icons";
import { profitStructure as data } from "@/lib/home-content";

/**
 * The cost split from 44-수정후-.png, drawn rather than exported: an SVG ring
 * stays crisp at any density and each wedge carries its own label, so the
 * chart never depends on colour alone to be read.
 */

const segmentIcons = {
  wheat: WheatIcon,
  building: BuildingIcon,
  phone: PhoneIcon,
  people: PeopleIcon,
  gear: GearIcon,
  coins: CoinsIcon,
} as const;

const SIZE = 400;
const CENTER = SIZE / 2;
const OUTER = 196;
const INNER = 92;
const GAP_DEG = 0.9;

/**
 * Rounded on purpose: Node and the browser disagree on the last bit of these
 * trig results, which React reports as a hydration mismatch on every wedge.
 * Three decimals is far below a rendered pixel and makes both sides identical.
 */
const round = (value: number) => Math.round(value * 1000) / 1000;

const polar = (radius: number, deg: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [round(CENTER + radius * Math.cos(rad)), round(CENTER + radius * Math.sin(rad))] as const;
};

function wedgePath(startDeg: number, endDeg: number) {
  const s = startDeg + GAP_DEG;
  const e = endDeg - GAP_DEG;
  const large = e - s > 180 ? 1 : 0;
  const [ox1, oy1] = polar(OUTER, s);
  const [ox2, oy2] = polar(OUTER, e);
  const [ix2, iy2] = polar(INNER, e);
  const [ix1, iy1] = polar(INNER, s);

  return [
    `M ${ox1} ${oy1}`,
    `A ${OUTER} ${OUTER} 0 ${large} 1 ${ox2} ${oy2}`,
    `L ${ix2} ${iy2}`,
    `A ${INNER} ${INNER} 0 ${large} 0 ${ix1} ${iy1}`,
    "Z",
  ].join(" ");
}

export function ProfitDonut() {
  const total = data.segments.reduce((sum, segment) => sum + segment.share, 0);

  // Cumulative offsets computed up front so nothing mutates during render.
  const wedges = data.segments.map((segment, index) => {
    const preceding = data.segments
      .slice(0, index)
      .reduce((sum, item) => sum + item.share, 0);
    const start = (preceding / total) * 360;
    const end = ((preceding + segment.share) / total) * 360;
    return { segment, start, end, mid: (start + end) / 2 };
  });

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      role="img"
      aria-label={`월 평균 매출 ${data.center.value}${data.center.unit} 기준 비용 구성: ${data.segments
        .map((segment) => `${segment.label} ${segment.range}`)
        .join(", ")}`}
      className="h-auto w-full"
    >
      {wedges.map(({ segment, start, end, mid }) => {
        const Icon = segmentIcons[segment.icon];
        const [lx, ly] = polar((OUTER + INNER) / 2, mid);
        const light = segment.fill === "#FCBF43" || segment.fill === "#F7AE30";
        const ink = light ? "#021D3E" : "#FFFFFF";

        return (
          <g key={segment.key}>
            <path d={wedgePath(start, end)} fill={segment.fill} />
            <g transform={`translate(${lx} ${ly})`} color={ink}>
              <Icon x={-14} y={-48} width={28} height={28} />
              <text
                textAnchor="middle"
                y={-2}
                fill={ink}
                fontSize="19"
                fontWeight="800"
                letterSpacing="-0.04em"
              >
                {segment.label}
              </text>
              <text
                textAnchor="middle"
                y={22}
                fill={ink}
                fontSize="22"
                fontWeight="900"
                letterSpacing="-0.03em"
              >
                {segment.range}
              </text>
            </g>
          </g>
        );
      })}

      <circle cx={CENTER} cy={CENTER} r={INNER - 4} fill="#FFFFFF" />
      <MoneyBagIcon x={CENTER - 17} y={CENTER - 64} width={34} height={34} className="text-orange-500" />
      <text
        x={CENTER}
        y={CENTER - 6}
        textAnchor="middle"
        fill="#021D3E"
        fontSize="17"
        fontWeight="700"
        letterSpacing="-0.03em"
      >
        {data.center.label}
      </text>
      <text x={CENTER} y={CENTER + 26} textAnchor="middle" fill="#021D3E" letterSpacing="-0.04em">
        <tspan fontSize="32" fontWeight="900">
          {data.center.value}
        </tspan>
        <tspan fontSize="18" fontWeight="800">
          {data.center.unit}
        </tspan>
      </text>
      <text
        x={CENTER}
        y={CENTER + 48}
        textAnchor="middle"
        fill="#021D3E"
        opacity="0.55"
        fontSize="12"
        fontWeight="600"
      >
        {data.center.note}
      </text>
    </svg>
  );
}
