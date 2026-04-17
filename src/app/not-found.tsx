import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#04122b] px-6 text-[#fff8eb]">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold text-[#ffde38]">최강피자</p>
        <h1 className="mt-4 text-4xl font-black">찾으시는 페이지가 없습니다.</h1>
        <p className="mt-4 text-base leading-7 text-white/75">
          요청하신 페이지를 찾을 수 없습니다. 공식 홈페이지에서 다시 확인해 주세요.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex rounded-[8px] bg-[#ffde38] px-5 py-3 text-sm font-bold text-[#04122b]"
          >
            홈페이지로 가기
          </Link>
        </div>
      </div>
    </main>
  );
}
