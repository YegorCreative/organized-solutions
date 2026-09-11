import Image from "next/image";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { PageIntro } from "@/components/ui/page-intro";
import { aboutPage } from "@/content/copy";
import { media } from "@/content/media";
import { company } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { withBasePath } from "@/lib/site-url";

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
        tone="champagne"
        image={{ src: "/media/table.jpg", alt: "A round pale table by a window, an open notebook, and a blush chair" }}
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        lede={aboutPage.lede}
      />

      <section className="relative bg-canvas py-section">
        <div className="shell grid items-start gap-8 md:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div className="media-shell elevate-lift">
              <div className="photo-grade media-frame relative aspect-[2/3] w-full">
                <Image
                  src={withBasePath(media.roberta.src)}
                  alt={media.roberta.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[center_18%]"
                />
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-2 h-14 w-14 bg-champagne md:-bottom-6 md:-right-6 md:h-24 md:w-24"
            >
              <span className="gold-edge gold-edge-left" />
              <span className="gold-edge gold-edge-top" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="kicker">{aboutPage.founder.eyebrow}</p>
            <h2 className="display mt-5 text-display-sm text-ink">
              {aboutPage.founder.name}
            </h2>
            <div className="measure mt-6 space-y-5 text-lead text-muted md:mt-8 md:space-y-6">
              {aboutPage.founder.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
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

      <section className="relative overflow-hidden bg-stone py-section">
        <div
          aria-hidden="true"
          className="parallax-slow pointer-events-none absolute right-0 top-8 h-[60%] w-[18%] bg-champagne/50"
        />
        <div className="shell relative grid gap-12 lg:grid-cols-12">
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
