"use client";

import { useEffect } from "react";
import { clamp, prefersReducedMotion, smoothstep } from "@/lib/motion";

const SPEEDS: Record<string, number> = {
  deep: 0.2,
  slow: 0.32,
  mid: 0.5,
  fast: 0.74,
  counter: -0.4,
  x: 0.42,
  hold: 0.1,
};

const ALIGN: Record<string, { x: number; y: number; r: number }> = {
  a: { x: -86, y: 72, r: -2.6 },
  b: { x: 94, y: -64, r: 2.3 },
  c: { x: -52, y: -78, r: 1.8 },
  d: { x: 68, y: 54, r: -2 },
};

function viewportFactor() {
  const w = window.innerWidth;
  if (w < 768) {
    return 0.62;
  }
  if (w < 1024) {
    return 0.72;
  }
  return 1;
}

function stageProgress(stage: HTMLElement) {
  const run = stage.parentElement;
  if (!run) {
    return 0;
  }
  const runRect = run.getBoundingClientRect();
  const travel = Math.max(1, run.offsetHeight - window.innerHeight);
  return clamp(-runRect.top / travel);
}

export function ParallaxRoot() {
  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    let frame = 0;

    function tick() {
      const vh = window.innerHeight;
      const factor = viewportFactor();

      document.querySelectorAll<HTMLElement>("[data-stage]").forEach((stage) => {
        const p = stageProgress(stage);
        stage.style.setProperty("--stage", p.toFixed(4));

        const clip = stage.querySelector<HTMLElement>("[data-stage-clip]");
        if (clip) {
          const t = (1 - p) * 16;
          const s = (1 - p) * 42;
          clip.style.clipPath = `inset(${t}% ${s}% ${t}% ${s}%)`;
        }

        const veil = stage.querySelector<HTMLElement>("[data-stage-veil]");
        if (veil) {
          veil.style.opacity = String(0.7 - p * 0.62);
        }
      });

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const kind = el.dataset.parallax ?? "mid";
        const speed = (SPEEDS[kind] ?? SPEEDS.mid) * factor;
        const scale = el.dataset.parallaxScale
          ? Number(el.dataset.parallaxScale)
          : 1;
        const stage = el.closest<HTMLElement>("[data-stage]");

        let y: number;
        if (stage) {
          const p = Number(stage.style.getPropertyValue("--stage") || 0);
          const range = Number(el.dataset.parallaxRange || 170);
          y = (p - 0.5) * 2 * range * (speed / 0.5);
        } else {
          const rect = el.getBoundingClientRect();
          const mid = rect.top + rect.height / 2;
          y = (vh / 2 - mid) * speed;
          const cap = (kind === "x" ? 140 : 240) * factor;
          y = Math.max(-cap, Math.min(cap, y));
        }

        const alignKey = el.dataset.align;
        const align = alignKey ? ALIGN[alignKey] : null;
        const rest = stage
          ? 1 - smoothstep(Number(stage.style.getPropertyValue("--stage") || 0))
          : 0;

        const xAlign = align ? align.x * rest : 0;
        const yAlign = align ? align.y * rest : 0;
        const rAlign = align ? align.r * rest : 0;
        const allowX = window.innerWidth >= 768;
        const xMove = kind === "x" ? (allowX ? y : 0) : xAlign;
        const yMove = kind === "x" ? (allowX ? yAlign : y) : y + yAlign;
        const rotate = rAlign ? ` rotate(${rAlign.toFixed(2)}deg)` : "";
        const scaled = scale !== 1 ? ` scale(${scale})` : "";

        el.style.transform = `translate3d(${xMove.toFixed(1)}px, ${yMove.toFixed(1)}px, 0)${rotate}${scaled}`;
      });

      document.querySelectorAll<HTMLElement>(".gold-edge").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const p = clamp((vh - rect.top) / (vh + rect.height));
        el.style.setProperty("--light", `${(p * 80 - 15).toFixed(1)}%`);
      });
    }

    function requestTick() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(tick);
    }

    tick();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
