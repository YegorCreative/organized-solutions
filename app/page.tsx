import { CallToActionSection } from "@/components/sections/call-to-action";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ServiceTiersSection } from "@/components/sections/service-tiers";
import { Section } from "@/components/ui/section";
import { companyContent } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Home",
  description: companyContent.companyStatement,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Section className="pt-0">
        <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-foreground">How we help</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{companyContent.supportingMessage}</p>
        </div>
      </Section>
      <ServiceTiersSection />
      <FaqSection />
      <CallToActionSection
        heading="Build systems that keep working"
        description="Start with an operational assessment, align on a practical roadmap, and scale execution with the right level of support."
        primaryLabel="Request consultation"
        secondaryLabel="View engagement tiers"
        secondaryHref="/services"
      />
    </>
  );
}
