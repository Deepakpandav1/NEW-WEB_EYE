/** Production site origin — override with VITE_SITE_URL in .env for staging */
const envUrl = import.meta.env.VITE_SITE_URL;
export const SITE_URL =
  typeof envUrl === "string" && envUrl.trim()
    ? envUrl.trim().replace(/\/$/, "")
    : "https://drpreetisbrighteyecare.com";

export const SITE_NAME = "Dr. Preeti's Bright Eye Care Hospital";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Build absolute URL for canonical / Open Graph */
export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
