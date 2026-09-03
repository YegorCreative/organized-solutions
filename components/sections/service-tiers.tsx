import { Section } from "@/components/ui/section";
import { serviceTiers } from "@/lib/content";

type ServiceTiersSectionProps = {
  heading?: string;
  intro?: string;
};

export function ServiceTiersSection({
  heading = "Engagement tiers",
  intro = "Choose the level of support that matches your current operational priorities.",
}: ServiceTiersSectionProps) {
  return (
    <Section className="bg-surface">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">{heading}</h2>
        <p className="max-w-3xl leading-relaxed text-muted">{intro}</p>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {serviceTiers.map((tier) => (
          <article key={tier.id} className="rounded-lg border border-border bg-background p-6">
            <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
            <p className="mt-3 leading-relaxed text-muted">{tier.summary}</p>
            <p className="mt-4 text-sm font-medium text-foreground">{tier.bestFor}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
              {tier.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
