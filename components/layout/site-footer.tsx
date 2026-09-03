import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";
import { company, footerNav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line-on-ink bg-ink text-on-ink">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <Wordmark onInk />
          <p className="mt-5 measure text-[1.05rem] text-on-ink-muted">
            {company.tagline}
          </p>
          <p className="mt-3 measure text-sm text-on-ink-muted">
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
              className="nav-link w-fit text-[0.9375rem] text-on-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="shell flex flex-col gap-3 border-t border-line-on-ink py-6 text-sm text-on-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {company.name}
        </p>
        <p className="max-w-xl sm:text-right">{company.underlyingPromise}</p>
      </div>
    </footer>
  );
}
