import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services",
    "/approach",
    "/about",
    "/insights",
    "/contact",
    "/privacy",
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/insights" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
