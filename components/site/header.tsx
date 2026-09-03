import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Navigation } from "@/components/site/navigation";
import { MobileNavigation } from "@/components/site/mobile-navigation";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {siteConfig.shortName}
          </Link>
          <Navigation />
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
