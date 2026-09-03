import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";
import { company, footerNav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-lavender text-ink">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-blue" />
      <div
        aria-hidden="true"
        className="parallax-slow pointer-events-none absolute -left-[4%] bottom-0 h-[70%] w-[22%] bg-blush/70"
      />
      <div className="shell relative grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <Wordmark />
          <p className="mt-5 measure text-[1.05rem] text-muted">
            {company.tagline}
          </p>
          <p className="mt-3 measure text-sm text-muted">
            {company.supportingMessage}
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-8 gap-y-3 md:justify-self-end"
        >
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link w-fit text-[0.9375rem] text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="shell relative flex flex-col gap-3 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {company.name}
        </p>
        <p className="max-w-xl sm:text-right">{company.underlyingPromise}</p>
      </div>
    </footer>
  );
}
