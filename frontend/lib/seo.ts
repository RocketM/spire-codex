export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://spire-codex.com";
export const IS_BETA = SITE_URL.includes("beta.");
export const SITE_NAME = IS_BETA ? "Spire Codex (Beta)" : "Spire Codex";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export function stripTags(text: string): string {
  return text
    .replace(/\[energy:(\d+)\]/g, "$1 Energy")
    .replace(/\[star:(\d+)\]/g, "$1 Star")
    .replace(/\[\/?\w+(?:[=:][^\]]+)?\]/g, "")
    .replace(/\{[^}]+\}/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Strip tags and collapse all newlines into a single line for meta descriptions. */
export function stripTagsFlat(text: string): string {
  return stripTags(text).replace(/\n/g, " ").replace(/\s{2,}/g, " ").trim();
}
