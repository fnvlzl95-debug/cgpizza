import {
  ArrowRightIcon,
  BuildingIcon,
  ChartIcon,
  GearIcon,
  HandshakeIcon,
  PeopleIcon,
  PhoneIcon,
  SealIcon,
  WheatIcon,
} from "@/components/home/icons";
import { ProfitDonut } from "@/components/home/sections/profit-donut";
import { EyebrowPill } from "@/components/home/ui/eyebrow-pill";
import { profitStructure as data } from "@/lib/home-content";

/** Geometry from 44-수정후-.png. Orange is this section's accent, not gold. */

const rowIcons = {
  wheat: WheatIcon,
  building: BuildingIcon,
  phone: PhoneIcon,
  people: PeopleIcon,
  gear: GearIcon,
} as const;

const trustIcons = {
  seal: SealIcon,
  chart: ChartIcon,
  handshake: HandshakeIcon,
} as const;

function SummaryTable() {
  return (
    <div className="relative w-full pt-6 lg:pt-[1.4vw]">
      {/* The comp straddles this pill across the card's top edge. */}
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy-900 px-8 py-2.5 text-[1.05rem] font-black tracking-[-0.03em] text-white lg:px-card lg:py-[min(0.5vw,0.88vh)] lg:text-[clamp(0.95rem,1.2vw,1.28rem)]">
        {data.table.title}
      </div>

      <div className="rounded-card bg-white px-5 pb-5 pt-8 shadow-card lg:px-card lg:pb-[0.9vw] lg:pt-[1.5vw]">
        <div className="flex items-center justify-between border-b border-hairline pb-2.5 text-[0.85rem] font-bold text-navy-900/55 lg:text-[clamp(0.8rem,0.98vw,1.02rem)]">
          <span className="pl-1">{data.table.columns[0]}</span>
          <span>{data.table.columns[1]}</span>
        </div>

        {data.table.rows.map((row) => {
          const Icon = rowIcons[row.icon];
          return (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 border-b border-dotted border-hairline py-3 lg:py-[min(0.22vw,0.4vh)]"
            >
              <span className="flex min-w-0 items-center gap-3 lg:gap-[1vw]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFF1F6] text-navy-900 lg:h-[min(1.95vw,3.45vh)] lg:w-[min(1.95vw,3.45vh)]">
                  <Icon className="h-5 w-5 lg:h-[1.4vw] lg:w-[1.4vw]" />
                </span>
                <span className="min-w-0 text-[0.98rem] font-black tracking-[-0.03em] text-navy-900 lg:text-[clamp(0.9rem,1.14vw,1.2rem)]">
                  {row.label}
                  {row.sub ? (
                    <span className="ml-1 font-medium text-navy-900/55 lg:text-[clamp(0.72rem,0.88vw,0.92rem)]">
                      {row.sub}
                    </span>
                  ) : null}
                </span>
              </span>
              <span className="shrink-0 tabular-nums text-[1rem] font-bold text-navy-900 lg:text-[clamp(0.95rem,1.2vw,1.26rem)]">
                {row.ratio}
              </span>
            </div>
          );
        })}

        <div className="flex items-center justify-between border-t border-hairline py-3 lg:py-tight">
          <span className="pl-1 text-[1.05rem] font-black tracking-[-0.03em] text-orange-500 lg:text-[clamp(1rem,1.28vw,1.34rem)]">
            {data.table.total.label}
          </span>
          <span className="tabular-nums text-[1.15rem] font-black text-orange-500 lg:text-[clamp(1.05rem,1.42vw,1.5rem)]">
            {data.table.total.ratio}
          </span>
        </div>

        <div className="mt-3 flex flex-col items-stretch gap-3 rounded-card bg-navy-900 px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between lg:mt-[0.7vw] lg:px-card lg:py-tight">
          <span className="flex items-center gap-2.5 text-[0.92rem] font-bold lg:text-[clamp(0.85rem,1.08vw,1.14rem)]">
            <SealIcon className="h-6 w-6 shrink-0 text-yellow-500" />
            {data.table.cta.question}
          </span>
          <a
            href={data.table.cta.href}
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-band bg-orange-500 px-5 py-2.5 text-[0.9rem] font-black tracking-[-0.03em] text-white transition-transform duration-200 hover:-translate-y-0.5 lg:px-pill lg:text-[clamp(0.85rem,1.05vw,1.1rem)]"
          >
            {data.table.cta.label}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProfitStructureSection() {
  return (
    <section
      id="profit-structure"
      className="app-screen-snap-target section-screen section-lead relative bg-cream-ground"
    >
      <div className="mx-auto w-full max-w-[93.25rem] px-5 md:px-8 lg:w-[min(93.25rem,100%-5.4rem)] lg:max-w-none lg:px-0">
        {/* The comp's gold rules run either side of the section label. */}
        <div className="flex items-center gap-6">
          <span aria-hidden="true" className="hidden h-0.5 flex-1 bg-gold-600 lg:block" />
          <EyebrowPill label={data.pill} />
          <span aria-hidden="true" className="hidden h-0.5 flex-1 bg-gold-600 lg:block" />
        </div>

        <div className="motion-reveal mt-block text-center">
          <h2 className="text-[1.85rem] font-black leading-[1.2] tracking-[-0.05em] text-navy-900 lg:text-[clamp(1.8rem,min(3.2vw,5.7vh),3.4rem)]">
            {data.headlineLead}
            <span className="text-orange-500">{data.headlineAccent}</span>
            {data.headlineTail}
          </h2>
          <p className="mt-group text-[0.98rem] text-navy-900/70 lg:text-[clamp(0.95rem,1.35vw,1.42rem)]">
            {data.subheadLead}
            <span className="text-orange-500">{data.subheadAccent}</span>
            {data.subheadTail}
          </p>
        </div>

        <div className="mt-block grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-[2.4vw]">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-[1.6vw]">
            {/* On a phone this figure already appears twice more — in the donut
                and in the table total — so the standalone callout is desktop-only. */}
            <div className="hidden shrink-0 text-center lg:block lg:w-[9.5vw]">
              <ChartIcon className="mx-auto h-12 w-12 text-orange-500 lg:h-[min(2vw,3.55vh)] lg:w-[min(2vw,3.55vh)]" />
              <span aria-hidden="true" className="mx-auto mt-3 block h-0.5 w-16 bg-gold-600 lg:w-full" />
              <p className="mt-3 text-[0.95rem] font-black tracking-[-0.03em] text-navy-900 lg:text-[clamp(0.88rem,1.14vw,1.2rem)]">
                {data.headlineStat.label}
              </p>
              <p className="mt-1 whitespace-nowrap text-[2rem] font-black leading-none tracking-[-0.05em] text-orange-500 lg:text-[clamp(1.6rem,min(2.2vw,3.9vh),2.5rem)]">
                {data.headlineStat.value}
                <span className="text-[0.55em]">%</span>
              </p>
              <span aria-hidden="true" className="mx-auto mt-3 block h-0.5 w-16 bg-gold-600 lg:w-full" />
              <p className="mt-2 text-[0.8rem] text-navy-900/60 lg:text-[clamp(0.75rem,0.92vw,0.96rem)]">
                {data.headlineStat.note}
              </p>
            </div>

            <div className="w-full max-w-[17.5rem] sm:max-w-[22rem] lg:max-w-[min(17vw,29.5vh)]">
              <ProfitDonut />
            </div>
          </div>

          <SummaryTable />
        </div>

        <p className="mt-group text-balance text-center text-[0.8rem] text-navy-900/55 lg:text-right lg:text-[clamp(0.75rem,0.92vw,0.96rem)]">
          {data.footnote}
        </p>

        <ul className="mt-block grid grid-cols-1 gap-3 rounded-card bg-white/70 p-4 shadow-card sm:grid-cols-3 lg:gap-0 lg:p-tight">
          {data.trust.map((item, index) => {
            const Icon = trustIcons[item.icon];
            return (
              <li
                key={item.title}
                className={`flex items-center gap-4 lg:justify-center lg:gap-group ${
                  index > 0 ? "sm:border-l sm:border-hairline sm:pl-4 lg:pl-[2vw]" : ""
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-yellow-500 lg:h-[min(2.7vw,4.8vh)] lg:w-[min(2.7vw,4.8vh)]">
                  <Icon className="h-8 w-8 lg:h-[2.4vw] lg:w-[2.4vw]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[1.02rem] font-black tracking-[-0.03em] text-navy-900 lg:text-[clamp(0.95rem,1.2vw,1.26rem)]">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-[0.85rem] leading-relaxed text-navy-900/65 lg:text-[clamp(0.8rem,0.98vw,1.02rem)]">
                    {item.body.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
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
