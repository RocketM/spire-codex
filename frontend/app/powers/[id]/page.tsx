import type { Metadata } from "next";
import PowerDetail from "./PowerDetail";

const API_INTERNAL = process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const API_PUBLIC = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_API_URL || "";

function stripTags(text: string): string {
  return text
    .replace(/\[\/?\w+(?:[=:][^\]]+)?\]/g, "")
    .replace(/\{[^}]+\}/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const res = await fetch(`${API_INTERNAL}/api/powers/${id}`);
    if (!res.ok) return { title: "Power Not Found - Spire Codex" };
    const power = await res.json();
    const desc = stripTags(power.description || "");
    const title = `${power.name} - Spire Codex - Slay the Spire 2 Database`;
    return {
      title,
      description: desc || `${power.name} power from Slay the Spire 2`,
      openGraph: {
        title: `${power.name} - Spire Codex - Slay the Spire 2`,
        description: desc || `${power.name} power from Slay the Spire 2`,
        images: power.image_url ? [{ url: `${API_PUBLIC}${power.image_url}` }] : [],
      },
    };
  } catch {
    return { title: "Spire Codex - Slay the Spire 2 Database" };
  }
}

export default function Page() {
  return <PowerDetail />;
}
