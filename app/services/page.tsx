import { EngagementTiers } from "@/components/engagement/tiers";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { PageIntro } from "@/components/ui/page-intro";
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
        tone="blue"
        image={{ src: "/media/studio.jpg", alt: "A pale table and a single lavender chair beside tall windows" }}
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        lede={servicesPage.lede}
      />

      <section className="bg-blush py-section-tight">
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

      <section className="bg-canvas pt-section-tight">
        <div className="shell mb-8 max-w-3xl">
          <p className="kicker">Engagement</p>
          <h2 className="display mt-4 text-display-sm text-ink">
            Increasing depth of partnership.
          </h2>
        </div>
        <EngagementTiers />
      </section>

      <section className="bg-lavender py-section">
        <div className="shell grid gap-8 lg:grid-cols-12">
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
