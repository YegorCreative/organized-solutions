import { home } from "@/content/copy";

export function Recognition() {
  return (
    <section className="border-t border-line py-section">
      <div className="shell">
        <div className="max-w-3xl">
          <p className="kicker">{home.recognition.eyebrow}</p>
          <h2 className="display mt-5 text-display-sm text-ink">
            {home.recognition.headline}
          </h2>
        </div>

        <ul className="mt-14 grid border-t border-line sm:grid-cols-2">
          {home.recognition.items.map((item) => (
            <li
              key={item}
              className="border-b border-line py-7 sm:pr-10 sm:odd:border-r"
            >
              <p className="display text-title text-ink">{item}</p>
            </li>
          ))}
        </ul>

        <p className="measure mt-12 text-lead text-muted">
          {home.recognition.close}
        </p>
      </div>
    </section>
  );
}
