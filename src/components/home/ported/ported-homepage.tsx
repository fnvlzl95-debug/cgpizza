"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { PortedContactBand } from "@/components/home/ported/ported-contact-band";
import { PortedFloatingKakaoButton } from "@/components/home/ported/ported-floating-kakao-button";
import { PortedHeader } from "@/components/home/ported/ported-header";
import { PortedHero } from "@/components/home/ported/ported-hero";
import { PortedMenuSection } from "@/components/home/ported/ported-menu-section";
import { PortedValueStrip } from "@/components/home/ported/ported-value-strip";
import { ReferenceBrandModal } from "@/components/home/reference/reference-brand-modal";
import { portedHomepageData } from "@/lib/ported-homepage-data";

export function PortedHomepage() {
  const reducedMotion = useReducedMotion();
  const [brandModalOpen, setBrandModalOpen] = useState(false);

  return (
    <>
      <PortedHeader navItems={portedHomepageData.navItems} />
      <main className="overflow-x-hidden bg-[#041544] text-white">
        <PortedHero hero={portedHomepageData.hero} onOpenBrandModal={() => setBrandModalOpen(true)} />
        <PortedValueStrip items={portedHomepageData.valueItems} sectionId="event-section" />
        <PortedMenuSection menu={portedHomepageData.menu} />
        <PortedContactBand contact={portedHomepageData.contact} />
      </main>

      <ReferenceBrandModal
        isOpen={brandModalOpen}
        onClose={() => setBrandModalOpen(false)}
        reducedMotion={Boolean(reducedMotion)}
        modal={portedHomepageData.modal}
      />
      <PortedFloatingKakaoButton />
    </>
  );
}
