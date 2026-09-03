"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { BrandLogo } from "@/components/brand/wordmark";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navigation } from "@/content/site";
import { cx } from "@/lib/cx";

function normalize(path: string) {
  if (path === "/") {
    return "/";
  }
  return path.replace(/\/$/, "");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const home = normalize(pathname) === "/";
  const overHero = home && !scrolled;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "sticky top-0 z-[80] isolate text-ink transition-colors duration-500",
        overHero
          ? "bg-canvas/80 backdrop-blur-md"
          : "bg-canvas/94 backdrop-blur-sm",
      )}
      style={{ zIndex: 80 }}
    >
      <div className="gold-rule" />
      <div
        className={cx(
          "shell flex h-[4.85rem] items-center justify-between gap-6",
          overHero ? "border-b border-transparent" : "border-b border-line",
        )}
      >
        <BrandLogo size="nav" priority />
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const current = normalize(pathname) === normalize(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className="nav-link text-[0.9375rem]"
              >
                {item.label}
              </Link>
            );
          })}
          <PrimaryCta variant="header" />
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
