import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Example: Hide private routes if any
    },
    sitemap: "https://nidhalghdiri.com/sitemap.xml",
  };
}
