import { Section } from "@/components/ui/section";
import { faqContent } from "@/lib/content";

type FaqSectionProps = {
  heading?: string;
};

export function FaqSection({ heading = "Frequently asked questions" }: FaqSectionProps) {
  return (
    <Section>
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">{heading}</h2>
        <p className="max-w-3xl leading-relaxed text-muted">{faqContent.statusNote}</p>
      </div>
      <div className="mt-8 space-y-3">
        {faqContent.items.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border bg-surface p-5 text-sm text-muted">
            No owner-approved FAQ entries are currently stored in repository materials.
          </div>
        ) : (
          faqContent.items.map((item) => (
            <details key={item.question} className="rounded-lg border border-border bg-surface p-5">
              <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
              <p className="mt-3 leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))
        )}
      </div>
    </Section>
  );
}
