"use client";

import { PortedViewportRuntimeFix } from "@/components/home/ported/ported-viewport-runtime-fix";
import { SiteHeader } from "@/components/home/site-header";
import { HeroSection } from "@/components/home/sections/hero-section";

export function HomePage() {
  return (
    <>
      <PortedViewportRuntimeFix />
      <SiteHeader />
      <main className="overflow-x-hidden bg-paper text-navy-900">
        <HeroSection />
      </main>
    </>
  );
}
