import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://jurigeeks.org",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://jurigeeks.org/legalautomation",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jurigeeks.org/techlaw-consultancy",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jurigeeks.org/tech-law-education",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
