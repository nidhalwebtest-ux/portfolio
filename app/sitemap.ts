import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Static Routes
  const routes = ["", "/about", "/projects", "/contact"].map((route) => ({
    url: `https://nidhalghdiri.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [...routes];
}
