import { home } from "@/content/copy";

export function Difference() {
  return (
    <section className="border-t border-line py-section">
      <div className="shell">
        <p className="kicker">{home.difference.eyebrow}</p>
        <div className="mt-10 border-t border-line">
          {home.difference.items.map((item) => (
            <article
              key={item.title}
              className="grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8 md:py-12"
            >
              <h3 className="display text-title text-ink md:col-span-4">
                {item.title}
              </h3>
              <p className="text-lead text-muted md:col-span-7 md:col-start-6">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
