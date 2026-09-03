import { PrimaryCta } from "@/components/brand/primary-cta";
import { FlowPath } from "@/components/visual/flow-path";
import { FrameImage } from "@/components/visual/frame-image";
import { company } from "@/content/site";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Invitation() {
  return (
    <section className="relative isolate overflow-hidden bg-champagne text-ink">
      <div className="art-back">
        <FlowPath tone="gold" className="top-0 left-0 w-full" />
        <div
          data-parallax="slow"
          className="absolute right-0 bottom-0 hidden h-[40%] w-[8%] bg-stone/65 lg:block"
        >
          <span className="gold-edge gold-edge-left" />
        </div>
      </div>
      <div className="content-front grid lg:grid-cols-2">
        <div className="relative min-h-[24rem] overflow-hidden lg:min-h-[44rem]">
          <FrameImage
            src={media.table.src}
            alt={media.table.alt}
            speed="deep"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-champagne/30" />
          <span className="gold-edge gold-edge-right hidden lg:block" />
          <div
            data-parallax="counter"
            data-parallax-range="130"
            className="depth-shadow absolute bottom-[-8%] left-0 h-[48%] w-[22%] bg-navy-deep/40"
          >
            <span className="gold-edge gold-edge-right" />
          </div>
          <div
            data-parallax="fast"
            className="gold-sheen absolute top-[12%] left-[22%] hidden h-[70%] w-[3px] lg:block"
          />
        </div>
        <div className="relative px-[var(--spacing-gutter)] py-section">
          <h2 className="display max-w-xl text-display-sm text-ink">
            {home.invitation.headline}
          </h2>
          <p className="measure mt-6 text-lead text-muted">
            {home.invitation.body}
          </p>
          <div className="mt-10">
            <PrimaryCta />
          </div>
          <ul className="mt-12 max-w-md">
            {company.promises.map((promise) => (
              <li
                key={promise}
                className="border-t border-ink/15 py-4 text-[1.05rem] text-ink last:border-b"
              >
                {promise}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
