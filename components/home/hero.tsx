import { PrimaryCta } from "@/components/brand/primary-cta";
import { AlignmentPlanes } from "@/components/visual/alignment-planes";
import { DepthPlanes } from "@/components/visual/depth-planes";
import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Hero() {
  return (
    <section className="relative isolate -mt-[4.85rem] min-h-[100svh] bg-navy-deep pt-[4.85rem] text-on-field">
      <div className="art-back">
        <FrameImage
          src={media.loft.src}
          alt={media.loft.alt}
          speed="deep"
          className="h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/86 via-navy/48 to-champagne/18" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-deep/40 to-transparent" />
        <AlignmentPlanes variant="hero" />
        <DepthPlanes variant="hero" />
        <div className="parallax-fast absolute top-[4.85rem] bottom-0 left-0 hidden w-[5%] bg-champagne/55 lg:block">
          <span className="gold-edge gold-edge-right" />
        </div>
        <div className="pointer-events-none absolute -right-[8%] top-[4.85rem] hidden h-[calc(100%-4.85rem)] w-[48%] lg:block">
          <div className="parallax-mid relative h-full w-full overflow-hidden">
            <FrameImage
              src={media.atrium.src}
              alt={media.atrium.alt}
              speed="counter"
              className="h-full w-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-champagne/18 via-transparent to-navy-deep/25" />
            <span className="gold-edge gold-edge-left" />
          </div>
        </div>
        <MeasureMarks
          tone="on-field"
          className="right-[8%] bottom-[16%] hidden w-[min(24rem,28vw)] lg:block"
        />
      </div>

      <div className="content-front shell grid min-h-[calc(100svh-4.85rem)] grid-cols-1 items-end gap-10 py-12 lg:grid-cols-12 lg:pb-20 lg:pt-8">
        <div className="reveal max-w-3xl lg:col-span-6">
          <p className="kicker text-champagne">{home.hero.eyebrow}</p>
          <h1 className="display mt-5 text-display text-on-field">
            {home.hero.headline}
            <span className="mt-2 block italic text-champagne">
              {home.hero.accent}
            </span>
          </h1>
          <p className="measure mt-8 text-lead text-on-field">{home.hero.lede}</p>
          <div className="mt-10">
            <PrimaryCta variant="on-field" />
          </div>
        </div>
      </div>
    </section>
  );
}
