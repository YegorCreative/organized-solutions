import Link from "next/link";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { SystemField } from "@/components/visual/system-field";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="grain relative -mt-[4.5rem] flex flex-1 overflow-hidden bg-ink pt-[4.5rem] text-on-ink">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <SystemField progress={0.3} tone="ink" />
      </div>
      <div className="shell relative z-10 py-section">
        <p className="kicker text-accent">404</p>
        <h1 className="display mt-5 max-w-3xl text-display-sm text-on-ink">
          This page is not here.
        </h1>
        <p className="measure mt-6 text-lead text-on-ink-muted">
          The address may have changed, or it may never have existed. The work is
          still on the rest of the site.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <PrimaryCta variant="on-ink" />
          <Link href="/" className="cta-header text-on-ink">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
