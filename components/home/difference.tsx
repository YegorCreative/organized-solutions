import { home } from "@/content/copy";

export function Difference() {
  return (
    <section className="bg-canvas py-section">
      <div className="shell">
        <p className="kicker">{home.difference.eyebrow}</p>
        <div className="mt-10 border-t border-line">
          {home.difference.items.map((item) => (
            <article
              key={item.title}
              className="group grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8 md:py-12"
            >
              <h3 className="display text-title text-ink md:col-span-4">
                <span className="inline-block origin-left transition-transform duration-500 group-hover:translate-x-1">
                  {item.title}
                </span>
              </h3>
              <p className="relative text-lead text-muted md:col-span-7 md:col-start-6">
                <span className="absolute -left-8 top-3 hidden h-px w-5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100 lg:block" />
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
