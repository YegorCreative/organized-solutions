import { PageIntroSection } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { contactContent } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Consultation architecture for Organized Solutions. Real contact details will be added after business approval.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntroSection eyebrow="Contact" title={contactContent.heading} description={contactContent.intro} />
      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-foreground">Consultation request workflow</h2>
            <p className="mt-3 leading-relaxed text-muted">
              This page intentionally avoids fabricated contact details. Once approved business information is provided, connect this section to the selected intake flow.
            </p>
            <div className="mt-6 rounded-md border border-dashed border-border bg-background p-4">
              <p className="text-sm font-medium text-foreground">Placeholder state</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                No phone number, email address, office location, calendar link, or CRM endpoint has been published in repository materials yet.
              </p>
            </div>
          </article>
          <aside className="rounded-lg border border-border bg-surface p-6 sm:p-8" aria-labelledby="contact-info-needed">
            <h2 id="contact-info-needed" className="text-xl font-semibold text-foreground">
              Information still needed
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {contactContent.requiredBusinessInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
