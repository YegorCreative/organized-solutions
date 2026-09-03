"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { Wordmark } from "@/components/brand/wordmark";
import { cta, navigation } from "@/content/site";
import { cx } from "@/lib/cx";

export function MobileNav({ onField = false }: { onField?: boolean }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    const previouslyFocused = document.activeElement;
    const openButton = openButtonRef.current;
    closeButtonRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel) {
        return;
      }

      const focusable = panel.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      } else {
        openButton?.focus();
      }
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={openButtonRef}
        type="button"
        className={cx(
          "inline-flex min-h-11 min-w-11 items-center justify-end text-sm",
          onField ? "text-on-field" : "text-ink",
        )}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        Menu
      </button>

      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="fixed inset-0 z-[80] flex flex-col overflow-hidden bg-canvas text-ink"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-stone via-canvas to-champagne"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[22%] right-[8%] h-[40%] w-[28%] bg-navy/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[12%] left-[10%] h-20 w-[36%] bg-champagne/70"
          />
          <div className="relative z-10 h-[2px] bg-accent" />
          <div className="shell relative z-10 flex h-[4.35rem] items-center justify-between border-b border-line">
            <Wordmark />
            <button
              ref={closeButtonRef}
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-end text-sm text-ink"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          <nav className="shell relative z-10 flex flex-1 flex-col justify-center gap-1 py-10">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="menu-link reveal display text-display-sm text-ink"
                style={{ animationDelay: `${index * 70}ms` }}
                onClick={() => setOpen(false)}
              >
                <span className="display text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              className="menu-link reveal display text-display-sm text-ink"
              style={{ animationDelay: `${navigation.length * 70}ms` }}
              onClick={() => setOpen(false)}
            >
              <span className="display text-sm text-accent">
                {String(navigation.length + 1).padStart(2, "0")}
              </span>
              Contact
            </Link>
          </nav>

          <div className="shell relative z-10 border-t border-line py-8">
            <PrimaryCta />
          </div>
        </div>
      ) : null}
    </div>
  );
}
