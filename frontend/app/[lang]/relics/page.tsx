import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { buildCollectionPageJsonLd, buildBreadcrumbJsonLd } from "@/lib/jsonld";
import {
  isValidLang,
  LANG_GAME_NAME,
  LANG_RELICS,
  LANG_NAMES,
  LANG_HREFLANG,
  SUPPORTED_LANGS,
  type LangCode,
} from "@/lib/languages";
import { SITE_URL } from "@/lib/seo";
import type { Relic } from "@/lib/api";

export const dynamic = "force-dynamic";

const API = process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};

  const langCode = lang as LangCode;
  const gameName = LANG_GAME_NAME[langCode];
  const relicsWord = LANG_RELICS[langCode];
  const nativeName = LANG_NAMES[langCode];

  const title = `${gameName} ${relicsWord} | Spire Codex (${nativeName})`;
  const description = `${gameName} ${relicsWord} — Spire Codex. ${nativeName}.`;

  const languages: Record<string, string> = {
    "en": `${SITE_URL}/relics`,
    "x-default": `${SITE_URL}/relics`,
  };
  for (const code of SUPPORTED_LANGS) {
    languages[LANG_HREFLANG[code]] = `${SITE_URL}/${code}/relics`;
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: LANG_HREFLANG[langCode],
    },
    alternates: {
      canonical: `/${lang}/relics`,
      languages,
    },
  };
}

/** Group relics by rarity */
function groupByRarity(relics: Relic[]): Record<string, Relic[]> {
  const groups: Record<string, Relic[]> = {};
  for (const relic of relics) {
    const rarity = relic.rarity || "Unknown";
    if (!groups[rarity]) groups[rarity] = [];
    groups[rarity].push(relic);
  }
  return groups;
}

const RARITY_ACCENTS: Record<string, string> = {
  Common: "text-gray-400",
  Uncommon: "text-emerald-400",
  Rare: "text-amber-400",
  Shop: "text-blue-400",
  Event: "text-indigo-400",
  Ancient: "text-purple-400",
  Starter: "text-slate-400",
  Boss: "text-red-400",
};

const RARITY_ORDER = ["Starter", "Common", "Uncommon", "Rare", "Shop", "Event", "Boss", "Ancient"];

export default async function LangRelicsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLang(lang)) return null;

  const langCode = lang as LangCode;
  const gameName = LANG_GAME_NAME[langCode];
  const relicsWord = LANG_RELICS[langCode];
  const nativeName = LANG_NAMES[langCode];

  let relics: Relic[] = [];
  try {
    const res = await fetch(`${API}/api/relics?lang=${lang}`, { next: { revalidate: 300 } });
    if (res.ok) relics = await res.json();
  } catch { /* API unavailable */ }

  const grouped = groupByRarity(relics);
  const sortedRarities = Object.keys(grouped).sort(
    (a, b) => (RARITY_ORDER.indexOf(a) === -1 ? 99 : RARITY_ORDER.indexOf(a)) -
              (RARITY_ORDER.indexOf(b) === -1 ? 99 : RARITY_ORDER.indexOf(b))
  );

  const jsonLd = [
    buildBreadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: nativeName, href: `/${lang}` },
      { name: relicsWord, href: `/${lang}/relics` },
    ]),
    buildCollectionPageJsonLd({
      name: `${gameName} ${relicsWord}`,
      description: `${gameName} ${relicsWord} — Spire Codex. ${nativeName}.`,
      path: `/${lang}/relics`,
      items: relics.map((r) => ({
        name: r.name,
        path: `/relics/${r.id.toLowerCase()}`,
      })),
    }),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <JsonLd data={jsonLd} />

      {/* Breadcrumb */}
      <nav className="text-sm text-[var(--text-muted)] mb-4">
        <Link href={`/${lang}`} className="hover:text-[var(--text-secondary)]">
          {nativeName}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--text-secondary)]">{relicsWord}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">
        <span className="text-[var(--accent-gold)]">{gameName} {relicsWord}</span>
      </h1>
      <p className="text-sm text-[var(--text-muted)] mb-6">
        {relics.length > 0 ? `${relics.length} ${relicsWord.toLowerCase()}` : relicsWord}
        {" "}&mdash;{" "}
        <Link href="/relics" className="text-[var(--text-secondary)] hover:underline">
          View in English
        </Link>
      </p>

      {relics.length === 0 ? (
        <p className="text-[var(--text-muted)]">No data available.</p>
      ) : (
        <div className="space-y-8">
          {sortedRarities.map((rarity) => {
            const group = grouped[rarity];
            if (!group || group.length === 0) return null;
            const accent = RARITY_ACCENTS[rarity] || "text-gray-400";
            return (
              <section key={rarity}>
                <h2 className={`text-xl font-semibold mb-3 ${accent}`}>
                  {rarity} ({group.length})
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                  {group.map((relic) => (
                    <Link
                      key={relic.id}
                      href={`/relics/${relic.id.toLowerCase()}`}
                      className="px-3 py-2 rounded border border-[var(--border-primary)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-colors text-sm text-[var(--text-primary)] truncate"
                      title={relic.name}
                    >
                      {relic.name}
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
