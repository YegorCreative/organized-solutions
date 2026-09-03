import { home } from "@/content/copy";

export function PromiseSection() {
  return (
    <section className="relative bg-canvas py-section">
      <div
        className="pointer-events-none absolute -top-16 right-[8%] hidden h-32 w-px bg-gradient-to-b from-accent/80 to-transparent lg:block"
        aria-hidden="true"
      />
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
        <p className="kicker lg:col-span-3">{home.promise.eyebrow}</p>
        <div className="lg:col-span-8 lg:col-start-5">
          <h2 className="display max-w-3xl text-display-sm text-ink">
            {home.promise.headline}
          </h2>
          <p className="measure mt-8 text-lead text-muted">{home.promise.body}</p>
        </div>
      </div>
    </section>
  );
}
