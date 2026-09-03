import { home } from "@/content/copy";

export function Philosophy() {
  return (
    <section className="bg-ink text-on-ink">
      <div className="shell grid gap-12 py-section lg:grid-cols-12 lg:items-end">
        <h2 className="display col-span-full max-w-5xl text-display">
          {home.philosophy.statement}
        </h2>
        <p className="measure text-lead text-on-ink-muted lg:col-span-5 lg:col-start-8">
          {home.philosophy.body}
        </p>
      </div>
    </section>
  );
}
