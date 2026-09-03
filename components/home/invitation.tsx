import { PrimaryCta } from "@/components/brand/primary-cta";
import { company } from "@/content/site";
import { home } from "@/content/copy";

export function Invitation() {
  return (
    <section className="border-t border-line py-section">
      <div className="shell grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
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
        <ul className="flex flex-col justify-end gap-4 lg:col-span-3 lg:col-start-10">
          {company.promises.map((promise) => (
            <li
              key={promise}
              className="border-t border-line pt-4 text-[1.05rem] text-ink last:border-b last:pb-4"
            >
              {promise}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
