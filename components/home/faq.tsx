import { faq } from "@/content/copy";

export function Faq() {
  return (
    <section className="relative overflow-hidden bg-stone py-section">
      <div
        aria-hidden="true"
        className="parallax-slow pointer-events-none absolute right-0 top-10 h-[50%] w-[16%] bg-champagne/45"
      >
        <span className="gold-edge gold-edge-left" />
      </div>
      <div className="shell relative max-w-4xl">
        <p className="kicker">{faq.eyebrow}</p>
        <h2 className="display mt-5 text-display-sm text-ink">{faq.title}</h2>
        <dl className="mt-12 border-t border-line">
          {faq.items.map((item) => (
            <div
              key={item.question}
              className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:py-10"
            >
              <dt className="display text-title text-ink md:col-span-5">
                {item.question}
              </dt>
              <dd className="text-lead text-muted md:col-span-7">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
