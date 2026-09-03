import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

type CallToActionSectionProps = {
  heading: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CallToActionSection({
  heading,
  description,
  primaryLabel = "Start a consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CallToActionSectionProps) {
  return (
    <Section className="pt-0">
      <div className="rounded-xl border border-border bg-surface p-8 sm:p-10">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">{heading}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryLabel && secondaryHref ? (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
