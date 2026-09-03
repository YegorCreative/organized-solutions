import { PrimaryCta } from "@/components/brand/primary-cta";
import { PageIntro } from "@/components/ui/page-intro";
import { aboutPage } from "@/content/copy";
import { company } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Organized Solutions originated from experience in healthcare and now provides fractional COO services across industries. Operations shape outcomes.",
  path: "/about",
});

export default function AboutPage() {
  const chapters = [aboutPage.origin, aboutPage.today, aboutPage.direction];

  return (
    <>
      <PageIntro
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        lede={aboutPage.lede}
      />

      <section className="border-t border-line">
        <div className="shell">
          {chapters.map((chapter) => (
            <article
              key={chapter.title}
              className="grid gap-4 border-b border-line py-12 md:grid-cols-12 md:py-16"
            >
              <h2 className="display text-title text-ink md:col-span-4">
                {chapter.title}
              </h2>
              <p className="measure text-lead text-muted md:col-span-7 md:col-start-6">
                {chapter.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-section">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker">Mission</p>
            <p className="display mt-5 max-w-3xl text-display-sm text-ink">
              {company.mission}
            </p>
            <div className="mt-10">
              <PrimaryCta />
            </div>
          </div>
          <ul className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            {company.concepts.map((concept) => (
              <li
                key={concept}
                className="display border-t border-line py-5 text-title text-ink last:border-b"
              >
                {concept}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
