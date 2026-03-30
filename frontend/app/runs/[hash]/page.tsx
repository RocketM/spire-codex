import type { Metadata } from "next";
import SharedRunClient from "./SharedRunClient";

export const dynamic = "force-dynamic";

const API_INTERNAL = process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type Props = { params: Promise<{ hash: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hash } = await params;
  try {
    const res = await fetch(`${API_INTERNAL}/api/runs/shared/${hash}`);
    if (!res.ok) return { title: "Run Not Found - Spire Codex" };
    const run = await res.json();
    const char = run.players?.[0]?.character?.replace("CHARACTER.", "") || "Unknown";
    const result = run.win ? "Victory" : run.was_abandoned ? "Abandoned" : "Defeat";
    return {
      title: `${char} ${result} - Run Viewer | Spire Codex`,
      description: `${result} with ${char} at Ascension ${run.ascension || 0}. ${run.players?.[0]?.deck?.length || 0} cards, ${run.players?.[0]?.relics?.length || 0} relics.`,
    };
  } catch {
    return { title: "Run Viewer - Spire Codex" };
  }
}

export default function SharedRunPage() {
  return <SharedRunClient />;
}
