"use client";

import { PortedViewportRuntimeFix } from "@/components/home/ported/ported-viewport-runtime-fix";
import { SiteHeader } from "@/components/home/site-header";
import { ContactFooterSection } from "@/components/home/sections/contact-footer-section";
import { FocusSystemSection } from "@/components/home/sections/focus-system-section";
import { FranchiseBenefitSection } from "@/components/home/sections/franchise-benefit-section";
import { HeroSection } from "@/components/home/sections/hero-section";
import { PhilosophySection } from "@/components/home/sections/philosophy-section";
import { ProfitStructureSection } from "@/components/home/sections/profit-structure-section";
import { RealKitchenSection } from "@/components/home/sections/real-kitchen-section";
import { ReviewProofSection } from "@/components/home/sections/review-proof-section";
import { FloatingRail } from "@/components/home/ui/floating-rail";

/**
 * Section order follows 최강피자_홈페이지_전체스크롤_통합본.jpg, then the two
 * sheets the comp set marks "그대로": reviews (88) and contact (10).
 * The retired sheets — 가맹비용 3분할 (5), 최강샵인샵 (6) and the home menu
 * grid — are deliberately absent.
 */
export function HomePage() {
  return (
    <>
      <PortedViewportRuntimeFix />
      <SiteHeader />
      <main className="overflow-x-hidden bg-paper text-navy-900">
        <HeroSection />
        <FranchiseBenefitSection />
        <PhilosophySection />
        <ProfitStructureSection />
        <FocusSystemSection />
        <RealKitchenSection />
        <ReviewProofSection />
        <ContactFooterSection />
      </main>
      <FloatingRail />
    </>
  );
}
