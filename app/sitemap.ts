import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = ["/", "/services", "/about", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
