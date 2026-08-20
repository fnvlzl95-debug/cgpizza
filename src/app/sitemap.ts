import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

const routes = [
  {
    path: "",
    changeFrequency: "daily",
    priority: 1,
  },
  {
    path: "/menu",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/brand",
    changeFrequency: "monthly",
    priority: 0.8,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
