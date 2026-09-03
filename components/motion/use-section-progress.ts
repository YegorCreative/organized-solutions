"use client";

import { useEffect, useState, type RefObject } from "react";
import { clamp, prefersReducedMotion } from "@/lib/motion";

export function useSectionProgress(
  ref: RefObject<HTMLElement | null>,
  reducedValue = 1,
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const reduced = prefersReducedMotion();
    let frame = 0;

    function update() {
      if (reduced) {
        setProgress(reducedValue);
        return;
      }

      const node = ref.current;
      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const raw = (viewport - rect.top) / (viewport + rect.height);
      setProgress(clamp(raw));
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, reducedValue]);

  return progress;
}
