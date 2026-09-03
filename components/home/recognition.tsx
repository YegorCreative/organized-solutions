"use client";

import { useRef } from "react";
import { useSectionProgress } from "@/components/motion/use-section-progress";
import { SystemField } from "@/components/visual/system-field";
import { home } from "@/content/copy";

export function Recognition() {
  const ref = useRef<HTMLElement>(null);
  const progress = useSectionProgress(ref, 0.35);

  return (
    <section ref={ref} className="grain relative isolate overflow-hidden bg-stone py-section">
      <div className="parallax-slow pointer-events-none absolute inset-0 opacity-50">
        <SystemField progress={0.12 + progress * 0.28} tone="paper" />
      </div>
      <div className="shell relative z-10">
        <div className="max-w-3xl">
          <p className="kicker">{home.recognition.eyebrow}</p>
          <h2 className="display mt-5 text-display-sm text-ink">
            {home.recognition.headline}
          </h2>
        </div>

        <ul className="mt-14 grid border-t border-line sm:grid-cols-2">
          {home.recognition.items.map((item, index) => (
            <li
              key={item}
              className="group flex items-start gap-4 border-b border-line py-7 sm:pr-10 sm:odd:border-r"
            >
              <span
                className="mt-2 size-1.5 shrink-0 bg-accent transition-transform duration-500 group-hover:scale-150"
                aria-hidden="true"
              />
              <p className="display text-title text-ink">{item}</p>
              <span className="ml-auto hidden pt-1 font-sans text-[0.65rem] tracking-[0.18em] text-faint sm:block">
                {String(index + 1).padStart(2, "0")}
              </span>
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
