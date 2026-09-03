import { home } from "@/content/copy";

export function Philosophy() {
  return (
    <section className="grain relative isolate min-h-[80svh] overflow-hidden bg-ink py-section text-on-ink">
      <div
        className="parallax-slow pointer-events-none absolute inset-y-[-10%] right-0 w-[32%] bg-ink-raised"
        aria-hidden="true"
      />
      <div className="shell relative z-10 grid min-h-[58svh] items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="kicker text-accent-soft">Listen first</p>
          <h2 className="display mt-6 text-display text-on-ink">
            We diagnose
            <span className="mt-1 block italic text-accent-soft">
              before we prescribe.
            </span>
          </h2>
          <div className="draw-rule mt-10 h-px w-full max-w-md bg-accent" />
          <p className="measure mt-10 text-lead text-on-ink-muted">
            {home.philosophy.body}
          </p>
        </div>
      </div>
    </section>
  );
}
