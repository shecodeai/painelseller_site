import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.painelseller.com.br",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.painelseller.com.br/privacidade",
      lastModified: new Date("2026-10-09"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
