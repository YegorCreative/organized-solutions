import type { NextConfig } from "next";

/**
 * GitHub Pages may serve the site from a project subpath
 * (https://user.github.io/organized-solutions/) or from a
 * custom-domain root. CI sets NEXT_PUBLIC_BASE_PATH accordingly.
 * Local development leaves it empty.
 */
function resolveBasePath() {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  if (!raw || raw === "/") {
    return "";
  }

  const withLeadingSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeadingSlash.replace(/\/$/, "");
}

const basePath = resolveBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
