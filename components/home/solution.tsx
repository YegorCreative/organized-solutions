import { FrameImage } from "@/components/visual/frame-image";
import { company } from "@/content/site";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Solution() {
  return (
    <section className="relative bg-canvas py-section">
      <div className="art-back">
        <div className="parallax-slow absolute bottom-0 right-0 hidden h-[40%] w-[12%] bg-stone lg:block">
          <span className="gold-edge gold-edge-left" />
        </div>
      </div>
      <div className="content-front shell grid items-start gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker">{home.solution.eyebrow}</p>
          <h2 className="display mt-5 max-w-2xl text-display-sm text-ink">
            {home.solution.headline}
          </h2>
          <p className="measure mt-8 text-lead text-muted">{home.solution.body}</p>
          <div className="mt-10 aspect-[16/10] overflow-hidden lg:aspect-[5/3]">
            <FrameImage
              src={media.desk.src}
              alt={media.desk.alt}
              speed="slow"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <p className="kicker mb-8">Operating methodology</p>
          <ol className="relative">
            <span
              className="absolute top-4 bottom-6 left-[0.7rem] w-px origin-top bg-accent/70 path-extend-y"
              aria-hidden="true"
            />
            {company.operatingIdea.map((step, index) => (
              <li
                key={step}
                className="relative flex items-baseline justify-between gap-6 py-6 pl-14"
              >
                <span className="absolute left-0 top-7 grid size-6 place-items-center bg-navy text-[0.65rem] text-on-field">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="display text-title text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
