import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { buildCollectionPageJsonLd, buildBreadcrumbJsonLd } from "@/lib/jsonld";
import {
  isValidLang,
  LANG_GAME_NAME,
  LANG_CARDS,
  LANG_NAMES,
  LANG_HREFLANG,
  SUPPORTED_LANGS,
  type LangCode,
} from "@/lib/languages";
import { SITE_URL } from "@/lib/seo";
import type { Card } from "@/lib/api";

export const dynamic = "force-dynamic";

const API = process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};

  const langCode = lang as LangCode;
  const gameName = LANG_GAME_NAME[langCode];
  const cardsWord = LANG_CARDS[langCode];
  const nativeName = LANG_NAMES[langCode];

  const title = `${gameName} ${cardsWord} | Spire Codex (${nativeName})`;
  const description = `${gameName} ${cardsWord} — Spire Codex. ${nativeName}.`;

  const languages: Record<string, string> = {
    "en": `${SITE_URL}/cards`,
    "x-default": `${SITE_URL}/cards`,
  };
  for (const code of SUPPORTED_LANGS) {
    languages[LANG_HREFLANG[code]] = `${SITE_URL}/${code}/cards`;
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
      canonical: `/${lang}/cards`,
      languages,
    },
  };
}

/** Group cards by color/character */
function groupByColor(cards: Card[]): Record<string, Card[]> {
  const groups: Record<string, Card[]> = {};
  for (const card of cards) {
    const color = card.color || "colorless";
    if (!groups[color]) groups[color] = [];
    groups[color].push(card);
  }
  return groups;
}

const COLOR_ACCENTS: Record<string, string> = {
  red: "text-red-400",
  green: "text-emerald-400",
  blue: "text-blue-400",
  purple: "text-purple-400",
  gold: "text-amber-400",
  colorless: "text-gray-400",
  event: "text-indigo-400",
  curse: "text-rose-400",
};

export default async function LangCardsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLang(lang)) return null;

  const langCode = lang as LangCode;
  const gameName = LANG_GAME_NAME[langCode];
  const cardsWord = LANG_CARDS[langCode];
  const nativeName = LANG_NAMES[langCode];

  let cards: Card[] = [];
  try {
    const res = await fetch(`${API}/api/cards?lang=${lang}`, { next: { revalidate: 300 } });
    if (res.ok) cards = await res.json();
  } catch { /* API unavailable */ }

  const grouped = groupByColor(cards);
  const colorOrder = ["red", "green", "blue", "purple", "gold", "colorless", "event", "curse"];
  const sortedColors = Object.keys(grouped).sort(
    (a, b) => (colorOrder.indexOf(a) === -1 ? 99 : colorOrder.indexOf(a)) -
              (colorOrder.indexOf(b) === -1 ? 99 : colorOrder.indexOf(b))
  );

  const jsonLd = [
    buildBreadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: nativeName, href: `/${lang}` },
      { name: cardsWord, href: `/${lang}/cards` },
    ]),
    buildCollectionPageJsonLd({
      name: `${gameName} ${cardsWord}`,
      description: `${gameName} ${cardsWord} — Spire Codex. ${nativeName}.`,
      path: `/${lang}/cards`,
      items: cards.map((c) => ({
        name: c.name,
        path: `/cards/${c.id.toLowerCase()}`,
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
        <span className="text-[var(--text-secondary)]">{cardsWord}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">
        <span className="text-[var(--accent-gold)]">{gameName} {cardsWord}</span>
      </h1>
      <p className="text-sm text-[var(--text-muted)] mb-6">
        {cards.length > 0 ? `${cards.length} ${cardsWord.toLowerCase()}` : cardsWord}
        {" "}&mdash;{" "}
        <Link href="/cards" className="text-[var(--text-secondary)] hover:underline">
          View in English
        </Link>
      </p>

      {cards.length === 0 ? (
        <p className="text-[var(--text-muted)]">No data available.</p>
      ) : (
        <div className="space-y-8">
          {sortedColors.map((color) => {
            const group = grouped[color];
            if (!group || group.length === 0) return null;
            const accent = COLOR_ACCENTS[color] || "text-gray-400";
            return (
              <section key={color}>
                <h2 className={`text-xl font-semibold mb-3 capitalize ${accent}`}>
                  {color} ({group.length})
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                  {group.map((card) => (
                    <Link
                      key={card.id}
                      href={`/cards/${card.id.toLowerCase()}`}
                      className="px-3 py-2 rounded border border-[var(--border-primary)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-colors text-sm text-[var(--text-primary)] truncate"
                      title={card.name}
                    >
                      {card.name}
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
