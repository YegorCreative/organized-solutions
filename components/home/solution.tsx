import { company } from "@/content/site";
import { home } from "@/content/copy";

export function Solution() {
  return (
    <section className="relative overflow-hidden bg-canvas py-section">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="kicker">{home.solution.eyebrow}</p>
          <h2 className="display mt-5 max-w-2xl text-display-sm text-ink">
            {home.solution.headline}
          </h2>
          <p className="measure mt-8 text-lead text-muted">{home.solution.body}</p>
        </div>
        <ol className="relative lg:col-span-5 lg:col-start-8">
          <span
            className="absolute top-3 bottom-3 left-3 w-px bg-line"
            aria-hidden="true"
          />
          {company.operatingIdea.map((step, index) => (
            <li
              key={step}
              className="relative flex items-baseline justify-between gap-6 py-6 pl-12"
            >
              <span className="absolute left-0 top-7 size-6 border border-accent bg-canvas" />
              <span className="absolute left-[7px] top-[34px] size-1.5 bg-accent" />
              <span className="display text-title text-ink">{step}</span>
              <span className="display text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
