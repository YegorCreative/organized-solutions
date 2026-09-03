import { EngagementTiers } from "@/components/engagement/tiers";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { PageIntro } from "@/components/ui/page-intro";
import { SystemField } from "@/components/visual/system-field";
import { servicesPage } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Fractional COO services: operational assessment, recommendation, and implementation for organizations that have outgrown reactive ways of working.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        lede={servicesPage.lede}
      />

      <section className="bg-stone py-section-tight">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-title text-ink">
              {servicesPage.what.title}
            </h2>
            <p className="measure mt-5 text-muted">{servicesPage.what.body}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="display text-title text-ink">
              {servicesPage.whatNot.title}
            </h2>
            <ul className="mt-5 border-t border-line">
              {servicesPage.whatNot.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-5 text-[1.0625rem] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-stone pt-section-tight">
        <div className="shell mb-8 max-w-3xl">
          <h2 className="display text-display-sm text-ink">
            Increasing depth of partnership.
          </h2>
        </div>
        <EngagementTiers />
      </section>

      <section className="relative overflow-hidden bg-canvas py-section">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-40">
          <SystemField progress={0.9} tone="paper" />
        </div>
        <div className="shell relative z-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display text-title text-ink">
              {servicesPage.who.title}
            </h2>
            <p className="measure-wide mt-5 text-lead text-muted">
              {servicesPage.who.body}
            </p>
            <div className="mt-10">
              <PrimaryCta />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
