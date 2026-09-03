import { PrimaryCta } from "@/components/brand/primary-cta";
import { PageIntro } from "@/components/ui/page-intro";
import { approachPage } from "@/content/copy";
import { values } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Approach",
  description:
    "Understand, diagnose, recommend, implement. Organized Solutions diagnoses before prescribing, then can stay through execution.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <PageIntro
        tone="stone"
        image={{ src: "/media/desk.jpg", alt: "Papers, a silver ruler, and a cup on a pale worktable" }}
        eyebrow={approachPage.eyebrow}
        title={approachPage.title}
        lede={approachPage.lede}
      />

      <section className="bg-canvas">
        <div className="shell">
          {approachPage.steps.map((step, index) => (
            <article
              key={step.name}
              className="relative grid gap-6 border-b border-line py-12 md:grid-cols-12 md:py-16"
            >
              <span
                className="absolute top-0 bottom-0 left-[1.15rem] hidden w-px origin-top bg-navy/35 path-extend-y md:block"
                aria-hidden="true"
              />
              <p className="display relative text-display-sm text-navy md:col-span-2">
                {step.index}
              </p>
              <div className="md:col-span-8 md:col-start-5">
                <h2 className="display text-title text-ink">{step.name}</h2>
                <p className="measure mt-5 text-lead text-muted">{step.body}</p>
              </div>
              {index === approachPage.steps.length - 1 ? null : (
                <span className="sr-only">then</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-champagne py-section">
        <div className="shell">
          <p className="kicker">Values</p>
          <h2 className="display mt-5 max-w-3xl text-display-sm text-ink">
            How the work is held.
          </h2>
          <div className="mt-12 border-t border-line">
            {values.map((value) => (
              <article
                key={value.name}
                className="group grid gap-4 border-b border-line py-10 md:grid-cols-12 md:py-12"
              >
                <h3 className="display text-title text-ink md:col-span-4">
                  {value.name}
                </h3>
                <p className="text-lead text-muted md:col-span-7 md:col-start-6">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-14">
            <PrimaryCta />
          </div>
        </div>
      </section>
    </>
  );
}
