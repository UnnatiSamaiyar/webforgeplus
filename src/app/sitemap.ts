// app/sitemap.ts
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.webforgeplus.in";

  // Dynamic slugs
  const portfolioSlugs = ["landing-page", "corporate-website", "ecommerce-platform"];

  const staticPages = [
    "",
    "about",
    "contact",
    "privacy-policy",
    "refund-policy",
    "terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date().toISOString(), // string bhi chalega
    changeFrequency: "monthly" as const,    // union type enforce
    priority: 0.8,
  }));

  const portfolioEntries: MetadataRoute.Sitemap = portfolioSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...portfolioEntries];
}
