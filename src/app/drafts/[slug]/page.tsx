import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/landing-page";
import { getConceptBySlug, landingConcepts } from "@/lib/landing-data";

type DraftPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return landingConcepts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DraftPageProps): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);

  if (!concept) {
    return {
      title: "초안을 찾을 수 없습니다",
    };
  }

  return {
    title: concept.metaTitle,
    description: concept.metaDescription,
    openGraph: {
      title: concept.metaTitle,
      description: concept.metaDescription,
      images: [concept.hero.image],
    },
    twitter: {
      title: concept.metaTitle,
      description: concept.metaDescription,
      images: [concept.hero.image],
    },
  };
}

export default async function DraftPage({ params }: DraftPageProps) {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);

  if (!concept) {
    notFound();
  }

  return <LandingPage concept={concept} concepts={landingConcepts} />;
}
