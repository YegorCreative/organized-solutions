import { CallToActionSection } from "@/components/sections/call-to-action";
import { PageIntroSection } from "@/components/sections/page-intro";
import { ServiceTiersSection } from "@/components/sections/service-tiers";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description: "Review Organized Solutions engagement tiers for assessment, recommendations, and implementation support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntroSection
        eyebrow="Services"
        title="Engagement built around your operational stage"
        description="Organized Solutions offers three engagement tiers so leaders can choose the right level of operational leadership and execution support."
      />
      <ServiceTiersSection
        heading="Service tiers"
        intro="Each tier is intentionally scoped so you can begin with clarity, move into planning, or proceed directly to implementation support."
      />
      <CallToActionSection
        heading="Not sure which tier fits best?"
        description="Use a consultation call to identify the best entry point based on your current constraints and goals."
        primaryLabel="Discuss your needs"
      />
    </>
  );
}
