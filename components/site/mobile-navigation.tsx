"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/site";

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <details className="relative md:hidden">
      <summary className="cursor-pointer list-none rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        Menu
      </summary>
      <nav aria-label="Mobile navigation" className="absolute right-0 z-10 mt-2 min-w-48 rounded-md border border-border bg-surface p-2 shadow-sm">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const isCurrent = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`block rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isCurrent ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </details>
  );
}
