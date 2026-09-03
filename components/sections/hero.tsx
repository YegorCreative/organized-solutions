import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { companyContent } from "@/lib/content";

export function HeroSection() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">Fractional COO services</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {companyContent.tagline}
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted">{companyContent.companyStatement}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Schedule a consultation</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore services
            </ButtonLink>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground">Supporting message</h2>
          <p className="mt-3 leading-relaxed text-muted">{companyContent.supportingMessage}</p>
        </div>
      </div>
    </Section>
  );
}
