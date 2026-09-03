import { company } from "@/content/site";
import { home } from "@/content/copy";

export function Solution() {
  return (
    <section className="relative bg-canvas py-section">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker">{home.solution.eyebrow}</p>
          <h2 className="display mt-5 max-w-2xl text-display-sm text-ink">
            {home.solution.headline}
          </h2>
          <p className="measure mt-8 text-lead text-muted">{home.solution.body}</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="kicker">Operating methodology</p>
          <ol className="relative mt-8">
            <span
              className="absolute top-4 bottom-4 left-[0.7rem] w-px bg-line"
              aria-hidden="true"
            />
            {company.operatingIdea.map((step, index) => (
              <li
                key={step}
                className="relative flex items-baseline justify-between gap-6 py-5 pl-12"
              >
                <span className="absolute left-0 top-6 grid size-6 place-items-center border border-ink bg-canvas text-[0.65rem] text-ink">
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
