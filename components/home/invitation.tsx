import { PrimaryCta } from "@/components/brand/primary-cta";
import { PhotoWell } from "@/components/visual/photo-well";
import { company } from "@/content/site";
import { home } from "@/content/copy";

export function Invitation() {
  return (
    <section className="bg-stone py-section">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="display max-w-3xl text-display-sm text-ink">
            {home.invitation.headline}
          </h2>
          <p className="measure mt-6 text-lead text-muted">
            {home.invitation.body}
          </p>
          <div className="mt-10">
            <PrimaryCta />
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <PhotoWell tone="canvas" className="min-h-[18rem]" />
          <ul className="mt-8">
            {company.promises.map((promise) => (
              <li
                key={promise}
                className="border-t border-line py-4 text-[1.05rem] text-ink last:border-b"
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
