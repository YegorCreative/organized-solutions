import { faq } from "@/content/copy";

export function Faq() {
  return (
    <section className="relative bg-stone py-section">
      <div className="art-back">
        <div
          data-parallax="slow"
          className="absolute right-0 top-10 h-[55%] w-[20%] bg-champagne/50"
        >
          <span className="gold-edge gold-edge-left" />
        </div>
        <div
          data-parallax="counter"
          className="absolute bottom-0 left-[8%] h-16 w-[28%] bg-navy-deep/10"
        />
      </div>
      <div className="content-front shell relative max-w-4xl">
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
