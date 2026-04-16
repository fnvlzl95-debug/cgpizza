import type { Metadata } from "next";
import { PortedHomepage } from "@/components/home/ported/ported-homepage";
import { portedHomepageData } from "@/lib/ported-homepage-data";

export const metadata: Metadata = {
  title: portedHomepageData.metadata.title,
  description: portedHomepageData.metadata.description,
  openGraph: {
    title: portedHomepageData.metadata.title,
    description: portedHomepageData.metadata.description,
    images: [portedHomepageData.metadata.ogImage],
  },
  twitter: {
    title: portedHomepageData.metadata.title,
    description: portedHomepageData.metadata.description,
    images: [portedHomepageData.metadata.ogImage],
  },
};

export default function HomePage() {
  return <PortedHomepage />;
}
