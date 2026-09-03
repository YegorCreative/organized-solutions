"use client";

import { useEffect, useMemo, useState } from "react";
import { cx } from "@/lib/cx";
import { prefersReducedMotion, smoothstep } from "@/lib/motion";

type Tone = "ink" | "paper";

const COLS = 8;
const ROWS = 5;

type Point = { x: number; y: number; hub: boolean };

function hash(c: number, r: number) {
  const value = Math.sin(c * 12.9898 + r * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function field(order: number): Point[] {
  const t = smoothstep(order);
  const points: Point[] = [];

  for (let r = 0; r < ROWS; r += 1) {
    for (let c = 0; c < COLS; c += 1) {
      const ox = 10 + c * (100 / (COLS - 1));
      const oy = 12 + r * (56 / (ROWS - 1));
      const jx = (hash(c, r) - 0.5) * 22;
      const jy = (hash(r, c + 3) - 0.5) * 18;
      points.push({
        x: ox + jx * (1 - t),
        y: oy + jy * (1 - t),
        hub: (c + r) % 3 === 0,
      });
    }
  }

  return points;
}

function index(c: number, r: number) {
  return r * COLS + c;
}

export function SystemField({
  progress,
  tone = "ink",
  className,
  mouse = false,
}: {
  progress: number;
  tone?: Tone;
  className?: string;
  mouse?: boolean;
}) {
  const order = progress;
  const points = useMemo(() => field(order), [order]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mouse || prefersReducedMotion()) {
      return;
    }

    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    function onMove(event: MouseEvent) {
      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      setOffset({ x, y });
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouse]);

  const stroke = tone === "ink" ? "rgba(239,233,221,0.42)" : "rgba(25,23,20,0.28)";
  const brass = "rgba(176,143,92,0.92)";
  const node = tone === "ink" ? "#efe9dd" : "#191714";
  const chaos = Math.max(0, 1 - order);
  const grid = 0.22 + order * 0.7;

  const gridLines: Array<[number, number]> = [];
  for (let r = 0; r < ROWS; r += 1) {
    for (let c = 0; c < COLS - 1; c += 1) {
      gridLines.push([index(c, r), index(c + 1, r)]);
    }
  }
  for (let c = 0; c < COLS; c += 1) {
    for (let r = 0; r < ROWS - 1; r += 1) {
      gridLines.push([index(c, r), index(c, r + 1)]);
    }
  }

  const chaosLines: Array<[number, number]> = [];
  for (let r = 0; r < ROWS - 1; r += 1) {
    for (let c = 0; c < COLS - 2; c += 1) {
      if (hash(c, r) > 0.55) {
        chaosLines.push([index(c, r), index(c + 2, r + 1)]);
      }
    }
  }

  const spine = [0, 9, 18, 27, 36, 39]
    .map((i) => points[i])
    .filter(Boolean);

  const dash = 280;
  const drawn = dash * (0.12 + order * 0.88);

  return (
    <svg
      className={cx("pointer-events-none h-full w-full", className)}
      viewBox="0 0 120 80"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {chaosLines.map(([a, b], i) => (
        <line
          key={`c-${i}`}
          x1={points[a].x}
          y1={points[a].y}
          x2={points[b].x}
          y2={points[b].y}
          stroke={stroke}
          strokeWidth="0.28"
          opacity={chaos * 0.55}
        />
      ))}
      {gridLines.map(([a, b], i) => (
        <line
          key={`g-${i}`}
          x1={points[a].x}
          y1={points[a].y}
          x2={points[b].x}
          y2={points[b].y}
          stroke={stroke}
          strokeWidth="0.32"
          opacity={grid}
        />
      ))}
      {spine.length > 1 ? (
        <polyline
          points={spine.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke={brass}
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={dash}
          strokeDashoffset={dash - drawn}
          opacity={0.45 + order * 0.5}
        />
      ) : null}
      {points.map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r={point.hub ? 0.95 : 0.48}
          fill={point.hub ? brass : node}
          opacity={point.hub ? 0.95 : 0.55 + order * 0.4}
        />
      ))}
    </svg>
  );
}
