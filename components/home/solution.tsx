import { company } from "@/content/site";
import { home } from "@/content/copy";

export function Solution() {
  return (
    <section className="border-t border-line py-section">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="kicker">{home.solution.eyebrow}</p>
          <h2 className="display mt-5 max-w-2xl text-display-sm text-ink">
            {home.solution.headline}
          </h2>
          <p className="measure mt-8 text-lead text-muted">{home.solution.body}</p>
        </div>
        <ol className="flex flex-col justify-end gap-0 lg:col-span-4 lg:col-start-9">
          {company.operatingIdea.map((step, index) => (
            <li
              key={step}
              className="flex items-baseline justify-between border-t border-line py-5 last:border-b"
            >
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
