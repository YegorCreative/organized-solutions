export function getBasePath() {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  if (!raw || raw === "/") {
    return "";
  }

  const withLeadingSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeadingSlash.replace(/\/$/, "");
}

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }

  return `http://localhost:3000${getBasePath()}`;
}

export function getSiteOrigin() {
  try {
    return new URL(getSiteUrl()).origin;
  } catch {
    return "http://localhost:3000";
  }
}

export function absoluteUrl(path: string) {
  const base = getSiteUrl();
  if (path === "/") {
    return `${base}/`;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized.endsWith("/") ? normalized : `${normalized}/`}`;
}
