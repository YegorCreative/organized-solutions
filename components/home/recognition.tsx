import { home } from "@/content/copy";

export function Recognition() {
  return (
    <section className="relative overflow-hidden bg-stone py-section">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:pt-4">
            <p className="kicker">{home.recognition.eyebrow}</p>
            <h2 className="display mt-5 text-display-sm text-ink">
              {home.recognition.headline}
            </h2>
          </div>
          <p className="measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:self-end">
            {home.recognition.close}
          </p>
        </div>

        <ul className="mt-14 border-t border-line">
          {home.recognition.items.map((item, index) => (
            <li
              key={item}
              className="group grid items-baseline gap-4 border-b border-line py-6 sm:grid-cols-12"
            >
              <span className="display text-sm text-accent sm:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="display text-title text-ink sm:col-span-10 sm:col-start-3">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
