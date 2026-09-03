"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { Wordmark } from "@/components/brand/wordmark";
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
  const overlay = home && !scrolled;

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
        "sticky top-0 z-[80] isolate transition-colors duration-500",
        overlay
          ? "bg-gradient-to-b from-navy/50 to-transparent text-on-field"
          : "bg-canvas/90 text-ink backdrop-blur-sm",
      )}
      style={{ zIndex: 80 }}
    >
      <div className="h-[2px] bg-accent" />
      <div
        className={cx(
          "shell flex h-[4.35rem] items-center justify-between",
          overlay ? "border-b border-transparent" : "border-b border-line",
        )}
      >
        <Wordmark onField={overlay} />
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
        <MobileNav onField={overlay} />
      </div>
    </header>
  );
}
