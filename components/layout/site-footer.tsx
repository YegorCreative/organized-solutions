import Link from "next/link";
import { BrandLogo } from "@/components/brand/wordmark";
import { company, footerNav, inquiryMailto } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative bg-stone text-ink">
      <div aria-hidden="true" className="gold-rule relative z-10 h-[3px]" />
      <div className="content-front shell grid gap-10 py-12 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-12 md:py-16">
        <div>
          <BrandLogo size="footer" />
          <p className="mt-5 measure text-[1.05rem] text-muted">
            {company.tagline}
          </p>
          <p className="mt-3 measure text-sm text-muted">
            {company.supportingMessage}
          </p>
          <a
            href={inquiryMailto.href}
            className="nav-link mt-5 inline-block w-fit max-w-full break-all text-[0.9375rem] text-ink"
          >
            {company.email}
          </a>
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
      <div className="content-front shell flex flex-col gap-3 border-t border-line py-6 pb-[max(1.5rem,calc(var(--safe-bottom)+0.75rem))] text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {company.name}
        </p>
        <p className="max-w-xl sm:text-right">{company.underlyingPromise}</p>
      </div>
    </footer>
  );
}
