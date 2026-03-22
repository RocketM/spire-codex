import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { buildCollectionPageJsonLd } from "@/lib/jsonld";
import {
  isValidLang,
  LANG_GAME_NAME,
  LANG_DATABASE,
  LANG_NAMES,
  LANG_CARDS,
  LANG_RELICS,
  type LangCode,
} from "@/lib/languages";
import type { Stats } from "@/lib/api";

export const dynamic = "force-dynamic";

const API = process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface Translations {
  sections?: Record<string, string>;
  section_descs?: Record<string, string>;
}

async function fetchJSON<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

/**
 * Sections shown on the localized landing page.
 * Only "cards" and "relics" link to dedicated localized sub-pages;
 * the rest link to the English versions (better than a 404).
 */
const SECTIONS = [
  { key: "cards", href: "cards", gradient: "from-red-900/30 to-transparent", accent: "text-red-400", hasLocalPage: true },
  { key: "characters", href: "/characters", gradient: "from-amber-900/30 to-transparent", accent: "text-amber-400", hasLocalPage: false },
  { key: "relics", href: "relics", gradient: "from-purple-900/30 to-transparent", accent: "text-purple-400", hasLocalPage: true },
  { key: "monsters", href: "/monsters", gradient: "from-emerald-900/30 to-transparent", accent: "text-emerald-400", hasLocalPage: false },
  { key: "potions", href: "/potions", gradient: "from-blue-900/30 to-transparent", accent: "text-blue-400", hasLocalPage: false },
  { key: "enchantments", href: "/enchantments", gradient: "from-cyan-900/30 to-transparent", accent: "text-cyan-400", hasLocalPage: false },
  { key: "encounters", href: "/encounters", gradient: "from-rose-900/30 to-transparent", accent: "text-rose-400", hasLocalPage: false },
  { key: "events", href: "/events", gradient: "from-indigo-900/30 to-transparent", accent: "text-indigo-400", hasLocalPage: false },
  { key: "powers", href: "/powers", gradient: "from-teal-900/30 to-transparent", accent: "text-teal-400", hasLocalPage: false },
  { key: "timeline", href: "/timeline", gradient: "from-violet-900/30 to-transparent", accent: "text-violet-400", hasLocalPage: false },
  { key: "reference", href: "/reference", gradient: "from-slate-800/30 to-transparent", accent: "text-slate-400", hasLocalPage: false },
];

const STAT_KEYS: Record<string, keyof Stats> = {
  cards: "cards",
  characters: "characters",
  relics: "relics",
  monsters: "monsters",
  potions: "potions",
  enchantments: "enchantments",
  encounters: "encounters",
  events: "events",
  powers: "powers",
  timeline: "epochs",
};

export default async function LangHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLang(lang)) return null;

  const langCode = lang as LangCode;
  const gameName = LANG_GAME_NAME[langCode];
  const dbWord = LANG_DATABASE[langCode];
  const nativeName = LANG_NAMES[langCode];

  const [stats, translations] = await Promise.all([
    fetchJSON<Stats>(`${API}/api/stats?lang=${lang}`),
    fetchJSON<Translations>(`${API}/api/translations?lang=${lang}`),
  ]);

  const sectionName = (key: string) =>
    translations?.sections?.[key] ?? key.charAt(0).toUpperCase() + key.slice(1);

  const sectionDesc = (key: string) =>
    translations?.section_descs?.[key] ?? "";

  const jsonLd = buildCollectionPageJsonLd({
    name: `${gameName} ${dbWord} - Spire Codex`,
    description: `Spire Codex — ${gameName} ${dbWord}. ${nativeName}.`,
    path: `/${lang}`,
    items: SECTIONS.map((s) => ({
      name: sectionName(s.key),
      path: s.hasLocalPage ? `/${lang}/${s.href}` : s.href,
    })),
  });

  return (
    <div className="min-h-screen">
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-red)]/8 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="text-[var(--accent-gold)]">SPIRE</span>{" "}
              <span className="text-[var(--text-primary)] font-light">CODEX</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-2">
              {gameName} {dbWord}
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              {nativeName}
            </p>
          </div>
        </div>
      </section>

      {/* Section grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTIONS.map((section) => {
            const name = sectionName(section.key);
            const desc = sectionDesc(section.key);
            const count = stats && STAT_KEYS[section.key]
              ? stats[STAT_KEYS[section.key]]
              : null;
            const href = section.hasLocalPage
              ? `/${lang}/${section.href}`
              : section.href;

            return (
              <Link
                key={section.key}
                href={href}
                className="group relative overflow-hidden rounded-lg border border-[var(--border-primary)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-colors"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-50`} />
                <div className="relative p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className={`text-lg font-semibold ${section.accent}`}>
                      {name}
                    </h2>
                    {count != null && typeof count === "number" && (
                      <span className="text-sm text-[var(--text-muted)]">
                        {count}
                      </span>
                    )}
                  </div>
                  {desc && (
                    <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                      {desc}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Link back to English */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
          >
            View in English
          </Link>
        </div>
      </section>
    </div>
  );
}
