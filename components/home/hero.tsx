import { PrimaryCta } from "@/components/brand/primary-cta";
import { AlignmentPlanes } from "@/components/visual/alignment-planes";
import { DepthPlanes } from "@/components/visual/depth-planes";
import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";
import { company } from "@/content/site";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Hero() {
  return (
    <section className="relative isolate -mt-[4.75rem] min-h-[100svh] overflow-hidden bg-navy-deep pt-[4.75rem] text-on-field">
      <div className="absolute inset-0">
        <FrameImage
          src={media.loft.src}
          alt={media.loft.alt}
          speed="deep"
          className="h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/82 via-navy/42 to-champagne/22" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-deep/40 to-transparent" />
      </div>

      <AlignmentPlanes variant="hero" />
      <DepthPlanes variant="hero" />

      <div
        aria-hidden="true"
        className="parallax-fast pointer-events-none absolute top-[4.75rem] bottom-0 left-0 hidden w-[7%] bg-champagne/50 lg:block"
      >
        <span className="gold-edge gold-edge-right" />
      </div>
      <div
        aria-hidden="true"
        className="parallax-x pointer-events-none absolute right-[42%] top-[22%] hidden h-[46%] w-[9%] bg-navy-deep/28 lg:block"
      >
        <span className="gold-edge gold-edge-right" />
      </div>

      <div className="pointer-events-none absolute -right-[8%] top-[4.75rem] hidden h-[calc(100%-4.75rem)] w-[50%] lg:block">
        <div className="parallax-mid relative h-full w-full overflow-hidden">
          <FrameImage
            src={media.atrium.src}
            alt={media.atrium.alt}
            speed="counter"
            className="h-full w-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-champagne/20 via-transparent to-navy/15" />
          <span className="gold-edge gold-edge-left" />
        </div>
      </div>

      <MeasureMarks
        tone="on-field"
        className="right-[8%] bottom-[16%] hidden w-[min(24rem,28vw)] lg:block"
      />

      <div className="shell relative z-10 grid min-h-[calc(100svh-4.75rem)] grid-cols-1 items-end gap-10 py-10 lg:grid-cols-12 lg:pb-20 lg:pt-8">
        <div className="reveal max-w-3xl lg:col-span-7">
          <p className="kicker text-champagne">{home.hero.eyebrow}</p>
          <h1 className="display mt-5 pr-1 text-display text-on-field">
            Operational leadership
            <span className="mt-1 block italic text-champagne">
              for what you’ve already built.
            </span>
          </h1>
          <p className="measure mt-8 text-lead text-on-field">
            {home.hero.lede}
          </p>
          <p className="mt-5 hidden max-w-xl text-[1.05rem] text-on-field-muted xl:block">
            {company.supportingMessage}
          </p>
          <div className="mt-10">
            <PrimaryCta variant="on-field" />
          </div>
        </div>
      </div>
    </section>
  );
}
