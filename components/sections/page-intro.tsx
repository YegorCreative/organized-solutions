import { Section } from "@/components/ui/section";

type PageIntroSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageIntroSection({ eyebrow, title, description }: PageIntroSectionProps) {
  return (
    <Section className="pb-10">
      <div className="space-y-4">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-muted">{eyebrow}</p> : null}
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{title}</h1>
        <p className="max-w-3xl text-pretty text-lg leading-relaxed text-muted">{description}</p>
      </div>
    </Section>
  );
}
