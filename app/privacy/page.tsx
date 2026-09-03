import { PageIntroSection } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "Privacy policy placeholder for Organized Solutions pending legal-approved final language.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntroSection
        eyebrow="Privacy"
        title="Privacy policy"
        description="This placeholder page is ready for approved legal language once policy text is provided."
      />
      <Section className="pt-0">
        <article className="rounded-lg border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-foreground">Policy status</h2>
          <p className="mt-3 leading-relaxed text-muted">
            A final privacy policy has not yet been published in the repository. Replace this placeholder with legal-approved content before production launch.
          </p>
        </article>
      </Section>
    </>
  );
}
