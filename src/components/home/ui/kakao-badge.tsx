import Image from "next/image";
import { floatingRail } from "@/lib/home-content";

/**
 * The yellow TALK badge the comp parks at the bottom right of the kitchen
 * section. It carries the client's stated success action, so the label is
 * live text on top of the mark rather than baked into an image.
 */
export function KakaoBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={floatingRail.talk.href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex flex-col items-center transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      <Image
        src="/assets/user/franchise/floating-kakao-inquiry.png"
        alt=""
        width={512}
        height={512}
        aria-hidden="true"
        unoptimized
        className="h-[4.6rem] w-[4.6rem] drop-shadow-[0_10px_22px_rgba(1,23,80,0.32)] lg:h-[5.2vw] lg:w-[5.2vw]"
      />
      <span className="-mt-1 rounded-full bg-yellow-500 px-3 py-1 text-center text-[0.68rem] font-black leading-[1.25] tracking-[-0.03em] text-navy-900 shadow-[0_6px_14px_rgba(1,23,80,0.22)] lg:-mt-[0.3vw] lg:px-[0.8vw] lg:text-[clamp(0.65rem,0.8vw,0.84rem)]">
        최강피자
        <span className="block">가맹 상담하기</span>
      </span>
    </a>
  );
}
