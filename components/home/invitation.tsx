"use client";

import { useRef } from "react";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { useSectionProgress } from "@/components/motion/use-section-progress";
import { SystemField } from "@/components/visual/system-field";
import { company } from "@/content/site";
import { home } from "@/content/copy";

export function Invitation() {
  const ref = useRef<HTMLElement>(null);
  const progress = useSectionProgress(ref, 1);

  return (
    <section
      ref={ref}
      className="grain relative isolate overflow-hidden bg-ink py-section text-on-ink"
    >
      <div className="parallax-slow pointer-events-none absolute inset-0 opacity-80">
        <SystemField progress={0.7 + progress * 0.3} tone="ink" />
      </div>
      <div className="shell relative z-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="display max-w-3xl text-display-sm text-on-ink">
            {home.invitation.headline}
          </h2>
          <p className="measure mt-6 text-lead text-on-ink-muted">
            {home.invitation.body}
          </p>
          <div className="mt-10">
            <PrimaryCta variant="on-ink" />
          </div>
        </div>
        <ul className="flex flex-col justify-end lg:col-span-3 lg:col-start-10">
          {company.promises.map((promise) => (
            <li
              key={promise}
              className="border-t border-line-on-ink py-4 text-[1.05rem] text-on-ink last:border-b"
            >
              {promise}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
