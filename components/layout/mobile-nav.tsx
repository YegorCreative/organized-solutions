"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { Wordmark } from "@/components/brand/wordmark";
import { cta, navigation } from "@/content/site";

export function MobileNav() {
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
        'a[href], button:not([disabled])',
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
        className="inline-flex min-h-11 min-w-11 items-center justify-end text-sm text-ink"
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
          className="fixed inset-0 z-[80] flex flex-col bg-canvas"
        >
          <div className="h-[2px] bg-accent" />
          <div className="shell flex h-[4.25rem] items-center justify-between border-b border-line">
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

          <nav className="shell flex flex-1 flex-col justify-center gap-2 py-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display text-display-sm text-ink no-underline"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              className="display text-display-sm text-ink no-underline"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="shell border-t border-line py-8">
            <PrimaryCta />
          </div>
        </div>
      ) : null}
    </div>
  );
}
