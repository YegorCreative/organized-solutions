import { CallToActionSection } from "@/components/sections/call-to-action";
import { FaqSection } from "@/components/sections/faq";
import { PageIntroSection } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { companyContent } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn Organized Solutions' practical operational approach to sustainable systems and long-term execution.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntroSection
        eyebrow="About"
        title="Practical operational leadership"
        description={companyContent.companyStatement}
      />
      <Section className="pt-0">
        <div className="grid gap-4 rounded-lg border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-foreground">Our approach</h2>
          <p className="leading-relaxed text-muted">{companyContent.approachIntro}</p>
          <p className="leading-relaxed text-muted">
            We focus on systems that are sustainable in day-to-day operations so teams can execute with consistency over time.
          </p>
        </div>
      </Section>
      <FaqSection heading="FAQ" />
      <CallToActionSection
        heading="Ready to discuss your operations?"
        description="Start with a focused conversation to align your current challenges with a practical next step."
      />
    </>
  );
}
