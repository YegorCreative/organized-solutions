import { PrimaryCta } from "@/components/brand/primary-cta";
import { FlowPath } from "@/components/visual/flow-path";
import { FrameImage } from "@/components/visual/frame-image";
import { company } from "@/content/site";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Invitation() {
  return (
    <section className="relative isolate overflow-hidden bg-blush text-ink">
      <FlowPath className="top-0 left-0 w-full" />
      <div
        aria-hidden="true"
        className="parallax-slow pointer-events-none absolute -right-[10%] top-[8%] h-[55%] w-[30%] bg-lavender/45"
      />
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[22rem] lg:min-h-[36rem]">
          <FrameImage
            src={media.table.src}
            alt={media.table.alt}
            speed="slow"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blush/40" />
        </div>
        <div className="relative px-[var(--spacing-gutter)] py-section">
          <h2 className="display type-drift max-w-xl text-display-sm text-ink">
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
