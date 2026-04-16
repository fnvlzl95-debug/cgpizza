"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ReferenceBrandModal } from "@/components/home/reference/reference-brand-modal";
import { ReferenceContactBand } from "@/components/home/reference/reference-contact-band";
import { ReferenceHeader } from "@/components/home/reference/reference-header";
import { ReferenceHeroSection } from "@/components/home/reference/reference-hero";
import { ReferenceMenuSection } from "@/components/home/reference/reference-menu-section";
import { ReferenceValueStrip } from "@/components/home/reference/reference-value-strip";
import { referenceHomepageData } from "@/lib/reference-homepage-data";

export function ReconstructedReferenceHomepage() {
  const reducedMotion = useReducedMotion();
  const [brandModalOpen, setBrandModalOpen] = useState(false);

  return (
    <>
      <main id="top" className="overflow-x-hidden bg-[#061d63] text-white">
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#08256c_0%,#08205d_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.18),transparent_12%),radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_82%_26%,rgba(255,211,35,0.16),transparent_14%)]" />
          <ReferenceHeader
            navItems={referenceHomepageData.navItems}
            orderLabel={referenceHomepageData.header.orderLabel}
            orderHref={referenceHomepageData.header.orderHref}
          />
          <ReferenceHeroSection
            hero={referenceHomepageData.hero}
            reducedMotion={Boolean(reducedMotion)}
            onOpenBrandModal={() => setBrandModalOpen(true)}
          />
        </section>

        <ReferenceValueStrip items={referenceHomepageData.valueItems} />
        <ReferenceMenuSection menu={referenceHomepageData.menu} reducedMotion={Boolean(reducedMotion)} />
        <ReferenceContactBand contact={referenceHomepageData.contact} />
      </main>

      <ReferenceBrandModal
        isOpen={brandModalOpen}
        onClose={() => setBrandModalOpen(false)}
        reducedMotion={Boolean(reducedMotion)}
        modal={referenceHomepageData.modal}
      />
    </>
  );
}
