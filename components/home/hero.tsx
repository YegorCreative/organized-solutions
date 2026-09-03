import { PrimaryCta } from "@/components/brand/primary-cta";
import { company } from "@/content/site";
import { home } from "@/content/copy";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="shell grid grid-cols-1 items-start gap-16 pt-14 pb-20 lg:min-h-[calc(100svh-4.4rem)] lg:grid-cols-[minmax(0,1.7fr)_minmax(14rem,0.7fr)] lg:items-center lg:py-24">
        <div className="reveal max-w-4xl">
          <p className="kicker">{home.hero.eyebrow}</p>
          <h1 className="display mt-6 text-display text-ink">
            {home.hero.headline}
          </h1>
          <p className="measure mt-8 text-lead text-muted">{home.hero.lede}</p>
          <div className="mt-10">
            <PrimaryCta />
          </div>
        </div>

        <aside className="reveal hidden border-l border-line pl-8 lg:block" style={{ animationDelay: "180ms" }}>
          <p className="kicker text-faint">The work</p>
          <ol className="mt-6 space-y-4">
            {company.operatingIdea.map((step, index) => (
              <li key={step} className="flex items-baseline gap-4">
                <span className="display w-6 text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.05rem] text-ink">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-[16rem] text-sm leading-relaxed text-faint">
            {company.tagline}
          </p>
        </aside>
      </div>
    </section>
  );
}
