import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Organized Solutions — Sustainable systems. Real results.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F7F5F1",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "2px",
            width: "100%",
            background: "#B08D57",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              color: "#1C1C1E",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Organized Solutions
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 28,
              color: "#5C6169",
            }}
          >
            Sustainable systems. Real results.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#5C6169" }}>
          Fractional COO services
        </div>
      </div>
    ),
    size,
  );
}
