import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Organized Solutions — Sustainable systems. Real results.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/brand/organized-solutions.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#F7F5F1",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "36%",
            height: "100%",
            background: "#161A1E",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "36%",
            top: 0,
            width: "3px",
            height: "100%",
            background: "linear-gradient(180deg, #C2A87B, #B08D57 50%, #8D744E)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
            width: "64%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "2px",
              width: "180px",
              background: "linear-gradient(90deg, #8D744E, #C2A87B, #B08D57)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={logoSrc}
              width={380}
              height={200}
              alt="Organized Solutions"
            />
            <div
              style={{
                marginTop: 28,
                fontSize: 26,
                color: "#5C6169",
                letterSpacing: "-0.01em",
              }}
            >
              Sustainable systems. Real results.
            </div>
          </div>
          <div style={{ fontSize: 18, color: "#5C6169", display: "flex" }}>
            Operational leadership
          </div>
        </div>
      </div>
    ),
    size,
  );
}
