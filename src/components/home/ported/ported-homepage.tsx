"use client";

import { PortedContactBand } from "@/components/home/ported/ported-contact-band";
import { PortedFloatingKakaoButton } from "@/components/home/ported/ported-floating-kakao-button";
import { PortedHeader } from "@/components/home/ported/ported-header";
import { PortedHero } from "@/components/home/ported/ported-hero";
import { PortedMenuSection } from "@/components/home/ported/ported-menu-section";
import { PortedValueStrip } from "@/components/home/ported/ported-value-strip";
import { portedHomepageData } from "@/lib/ported-homepage-data";

export function PortedHomepage() {
  return (
    <>
      <PortedHeader navItems={portedHomepageData.navItems} />
      <main className="overflow-x-hidden bg-[#041544] text-white">
        <PortedHero hero={portedHomepageData.hero} />
        <PortedValueStrip
          items={portedHomepageData.valueItems}
          headline={portedHomepageData.valueStatement}
          sectionId="event-section"
        />
        <PortedMenuSection menu={portedHomepageData.menu} />
        <PortedContactBand contact={portedHomepageData.contact} />
      </main>
      <PortedFloatingKakaoButton />
    </>
  );
}
