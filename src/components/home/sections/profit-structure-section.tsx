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
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy-900 px-8 py-2.5 text-[1.05rem] font-black tracking-[-0.03em] text-white lg:px-[2.4vw] lg:py-[0.7vw] lg:text-[clamp(1rem,1.35vw,1.42rem)]">
        {data.table.title}
      </div>

      <div className="rounded-xl bg-white px-5 pb-5 pt-8 shadow-[0_18px_44px_rgba(1,23,80,0.08)] lg:px-[1.35vw] lg:pb-[1.35vw] lg:pt-[2vw]">
        <div className="flex items-center justify-between border-b border-rule pb-2.5 text-[0.85rem] font-bold text-navy-900/55 lg:text-[clamp(0.8rem,0.98vw,1.02rem)]">
          <span className="pl-1">{data.table.columns[0]}</span>
          <span>{data.table.columns[1]}</span>
        </div>

        {data.table.rows.map((row) => {
          const Icon = rowIcons[row.icon];
          return (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 border-b border-dotted border-navy-900/22 py-3 lg:py-[0.52vw]"
            >
              <span className="flex min-w-0 items-center gap-3 lg:gap-[1vw]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFF1F6] text-navy-900 lg:h-[2.4vw] lg:w-[2.4vw]">
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

        <div className="flex items-center justify-between border-t border-navy-900/25 py-3 lg:py-[0.6vw]">
          <span className="pl-1 text-[1.05rem] font-black tracking-[-0.03em] text-orange-500 lg:text-[clamp(1rem,1.28vw,1.34rem)]">
            {data.table.total.label}
          </span>
          <span className="tabular-nums text-[1.15rem] font-black text-orange-500 lg:text-[clamp(1.05rem,1.42vw,1.5rem)]">
            {data.table.total.ratio}
          </span>
        </div>

        <div className="mt-3 flex flex-col items-stretch gap-3 rounded-xl bg-navy-900 px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between lg:mt-[0.7vw] lg:px-[1.6vw] lg:py-[0.7vw]">
          <span className="flex items-center gap-2.5 text-[0.92rem] font-bold lg:text-[clamp(0.85rem,1.08vw,1.14rem)]">
            <SealIcon className="h-6 w-6 shrink-0 text-yellow-500" />
            {data.table.cta.question}
          </span>
          <a
            href={data.table.cta.href}
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-[0.9rem] font-black tracking-[-0.03em] text-white transition-transform duration-200 hover:-translate-y-0.5 lg:px-[1.4vw] lg:text-[clamp(0.85rem,1.05vw,1.1rem)]"
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
      className="app-screen-snap-target relative bg-cream-ground py-16 lg:pb-[1.4vw] lg:pt-[1.4vw]"
    >
      <div className="mx-auto w-full max-w-[93.25rem] px-5 md:px-8 lg:px-0">
        {/* Gold rules flanking the top of the section, as in the comp. */}
        <div aria-hidden="true" className="hidden items-center gap-6 lg:flex">
          <span className="h-0.5 w-[22%] bg-gold-600" />
          <span className="flex-1" />
          <span className="h-0.5 w-[22%] bg-gold-600" />
        </div>

        <div className="motion-reveal mt-6 text-center lg:mt-[1.3vw]">
          <h2 className="text-[1.85rem] font-black leading-[1.2] tracking-[-0.05em] text-navy-900 lg:text-[clamp(2.1rem,3.75vw,3.95rem)]">
            {data.headlineLead}
            <span className="text-orange-500">{data.headlineAccent}</span>
            {data.headlineTail}
          </h2>
          <p className="mt-3 text-[0.98rem] text-navy-900/70 lg:mt-[0.9vw] lg:text-[clamp(0.95rem,1.35vw,1.42rem)]">
            {data.subheadLead}
            <span className="text-orange-500">{data.subheadAccent}</span>
            {data.subheadTail}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:mt-[1.4vw] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-[2.4vw]">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-[1.6vw]">
            <div className="shrink-0 text-center lg:w-[9.5vw]">
              <ChartIcon className="mx-auto h-12 w-12 text-orange-500 lg:h-[3.4vw] lg:w-[3.4vw]" />
              <span aria-hidden="true" className="mx-auto mt-3 block h-0.5 w-16 bg-gold-600 lg:w-full" />
              <p className="mt-3 text-[0.95rem] font-black tracking-[-0.03em] text-navy-900 lg:text-[clamp(0.88rem,1.14vw,1.2rem)]">
                {data.headlineStat.label}
              </p>
              <p className="mt-1 text-[2rem] font-black leading-none tracking-[-0.05em] text-orange-500 lg:text-[clamp(2rem,3vw,3.15rem)]">
                {data.headlineStat.value}
                <span className="text-[0.55em]">%</span>
              </p>
              <span aria-hidden="true" className="mx-auto mt-3 block h-0.5 w-16 bg-gold-600 lg:w-full" />
              <p className="mt-2 text-[0.8rem] text-navy-900/60 lg:text-[clamp(0.75rem,0.92vw,0.96rem)]">
                {data.headlineStat.note}
              </p>
            </div>

            <div className="w-full max-w-[26rem] lg:max-w-[25.5vw]">
              <ProfitDonut />
            </div>
          </div>

          <SummaryTable />
        </div>

        <p className="mt-4 text-center text-[0.8rem] text-navy-900/55 lg:mt-[1vw] lg:text-right lg:text-[clamp(0.75rem,0.92vw,0.96rem)]">
          {data.footnote}
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-white/70 p-5 shadow-[0_14px_34px_rgba(1,23,80,0.06)] sm:grid-cols-3 lg:mt-[1.2vw] lg:gap-0 lg:p-[1.1vw]">
          {data.trust.map((item, index) => {
            const Icon = trustIcons[item.icon];
            return (
              <li
                key={item.title}
                className={`flex items-center gap-4 lg:justify-center lg:gap-[1.2vw] ${
                  index > 0 ? "sm:border-l sm:border-rule sm:pl-4 lg:pl-[2vw]" : ""
                }`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-900 text-yellow-500 lg:h-[4.2vw] lg:w-[4.2vw]">
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
