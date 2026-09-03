import { PrimaryCta } from "@/components/brand/primary-cta";
import { FrameImage } from "@/components/visual/frame-image";
import { company } from "@/content/site";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Invitation() {
  return (
    <section className="relative isolate overflow-hidden bg-clay text-on-ink">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[22rem] lg:min-h-[36rem]">
          <FrameImage
            src={media.table.src}
            alt={media.table.alt}
            speed="slow"
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="px-[var(--spacing-gutter)] py-section">
          <h2 className="display max-w-xl text-display-sm text-on-ink">
            {home.invitation.headline}
          </h2>
          <p className="measure mt-6 text-lead text-on-ink">
            {home.invitation.body}
          </p>
          <div className="mt-10">
            <PrimaryCta variant="on-ink" />
          </div>
          <ul className="mt-12 max-w-md">
            {company.promises.map((promise) => (
              <li
                key={promise}
                className="border-t border-white/20 py-4 text-[1.05rem] text-on-ink last:border-b"
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
