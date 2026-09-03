import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://jurigeek.org",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://jurigeek.org/legalautomation",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jurigeek.org/techlaw-consultancy",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jurigeek.org/tech-law-education",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
