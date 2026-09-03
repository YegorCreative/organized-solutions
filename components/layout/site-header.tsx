import Link from "next/link";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { Wordmark } from "@/components/brand/wordmark";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navigation } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-canvas">
      <div className="h-[2px] bg-accent" />
      <div className="shell flex h-[4.25rem] items-center justify-between border-b border-line">
        <Wordmark />
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.9375rem] text-ink no-underline transition-colors duration-200 hover:text-muted"
            >
              {item.label}
            </Link>
          ))}
          <PrimaryCta variant="header" />
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
