import { PrimaryCta } from "@/components/brand/primary-cta";
import { FrameImage } from "@/components/visual/frame-image";
import { company } from "@/content/site";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Hero() {
  return (
    <section className="relative isolate -mt-[4.5rem] min-h-[100svh] overflow-hidden bg-ink pt-[4.5rem] text-on-ink">
      <div className="absolute inset-0">
        <FrameImage
          src={media.loft.src}
          alt={media.loft.alt}
          speed="slow"
          className="h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-moss/40" />
      </div>

      <div className="pointer-events-none absolute -right-[6%] top-[4.6rem] hidden h-[calc(100%-4.6rem)] w-[46%] lg:block">
        <div className="parallax-mid relative h-full w-full overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <FrameImage
            src={media.atrium.src}
            alt={media.atrium.alt}
            speed="counter"
            className="h-full w-full"
            priority
          />
        </div>
      </div>

      <div className="shell relative z-10 grid min-h-[calc(100svh-4.5rem)] grid-cols-1 items-end gap-10 py-10 lg:grid-cols-12 lg:pb-20 lg:pt-8">
        <div className="reveal max-w-3xl lg:col-span-7">
          <p className="kicker text-copper">{home.hero.eyebrow}</p>
          <h1 className="display mt-5 text-display text-on-ink">
            Growth can outpace
            <span className="mt-1 block italic text-clay-soft">
              the systems that once held it.
            </span>
          </h1>
          <p className="measure mt-8 text-lead text-on-ink-muted">
            {home.hero.lede}
          </p>
          <p className="mt-5 hidden max-w-xl text-[1.05rem] text-on-ink xl:block">
            {company.supportingMessage}
          </p>
          <div className="mt-10">
            <PrimaryCta variant="on-ink" />
          </div>
        </div>
      </div>
    </section>
  );
}
