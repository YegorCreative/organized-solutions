import { company, seo } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    slogan: company.tagline,
    description: seo.description,
    url: getSiteUrl(),
    email: company.email,
    knowsAbout: [
      "Fractional COO",
      "Fractional operations leadership",
      "Operational assessment",
      "Business operations consulting",
      "Operational strategy",
      "Process improvement",
      "Business systems",
      "Operational implementation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
