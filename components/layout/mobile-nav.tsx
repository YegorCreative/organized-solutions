"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { BrandLogo } from "@/components/brand/wordmark";
import { company, cta, inquiryMailto, navigation } from "@/content/site";

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
        className="inline-flex min-h-11 min-w-11 items-center justify-end text-sm text-ink"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        Menu
      </button>

      {open
        ? createPortal(
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-canvas text-ink"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-stone via-canvas to-champagne"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[22%] right-[8%] h-[40%] w-[28%] bg-navy/10"
          >
            <span className="gold-edge gold-edge-left" />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[12%] left-[10%] h-20 w-[36%] bg-champagne/70"
          >
            <span className="gold-edge gold-edge-top" />
          </div>
          <div className="gold-rule relative z-10" />
          <div className="shell relative z-10 flex h-[4.85rem] items-center justify-between border-b border-line">
            <BrandLogo size="nav" />
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
            <a
              href={inquiryMailto.href}
              className="mt-5 block max-w-full break-all text-sm text-muted"
              onClick={() => setOpen(false)}
            >
              {company.email}
            </a>
          </div>
        </div>,
        document.body,
      )
        : null}
    </div>
  );
}
