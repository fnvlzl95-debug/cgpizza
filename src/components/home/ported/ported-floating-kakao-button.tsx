import { ctaLinks } from "@/lib/site-config";

export function PortedFloatingKakaoButton() {
  return (
    <a
      href={ctaLinks.kakaoHref}
      target="_blank"
      rel="noreferrer"
      aria-label="카카오 상담 열기"
      className="fixed bottom-4 right-4 z-40 inline-flex min-h-[3.9rem] items-center justify-center rounded-[8px] border border-[#e1ca00] bg-[#FEE500] px-5 py-3 text-[1.06rem] font-black leading-none text-black shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition-transform duration-300 hover:-translate-y-1 md:bottom-6 md:right-6 md:min-h-[4.2rem] md:px-6 md:text-[1.18rem]"
      style={{ color: "#000000" }}
    >
      <span className="text-black" style={{ color: "#000000" }}>
        빠른 상담
      </span>
    </a>
  );
}
