import type { Metadata } from "next";
import { company, seo } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: path === "/" ? seo.titleDefault : `${title} — ${company.name}`,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: path === "/" ? seo.titleDefault : `${title} — ${company.name}`,
      description,
    },
  };
}
