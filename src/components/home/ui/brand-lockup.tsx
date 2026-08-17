import Image from "next/image";

/**
 * Gold crown mark plus the wordmark, as the comps place it in the top-left
 * corner of the franchise and philosophy sheets. The bare mark asset carries
 * no lettering, so the wordmark is set in type beside it.
 */
export function BrandLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center text-navy-900 ${className}`}>
      <span className="relative h-12 w-12 shrink-0 lg:h-[3.4vw] lg:w-[3.4vw]">
        <Image
          src="/assets/user/logo-mark-gold.png"
          alt=""
          width={170}
          height={170}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[7.4rem] w-[7.4rem] -translate-x-1/2 -translate-y-1/2 object-contain lg:h-[8.2vw] lg:w-[8.2vw]"
        />
      </span>
      <span className="-ml-1 text-[1.5rem] font-black leading-none tracking-[-0.05em] lg:text-[clamp(1.5rem,2.1vw,2.2rem)]">
        최강피자
      </span>
    </span>
  );
}
