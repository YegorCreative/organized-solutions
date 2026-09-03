import Link from "next/link";
import { PrimaryCta } from "@/components/brand/primary-cta";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="bg-canvas py-section">
      <div className="shell">
        <p className="kicker">404</p>
        <h1 className="display mt-5 max-w-3xl text-display-sm text-ink">
          This page is not here.
        </h1>
        <p className="measure mt-6 text-lead text-muted">
          The address may have changed, or it may never have existed. The work is
          still on the rest of the site.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <PrimaryCta />
          <Link href="/" className="cta-header">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
