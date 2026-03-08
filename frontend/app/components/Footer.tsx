const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

const links = [
  { label: "API Documentation", href: `${API_BASE}/docs` },
  { label: "GitHub", href: "https://github.com/ptrlrd/spire-codex" },
  { label: "Discord", href: "https://discord.gg/xMsTBeh" },
  { label: "Submit a Bug", href: "https://github.com/ptrlrd/spire-codex/issues/new" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--text-muted)]">
        {links.map((link, i) => (
          <span key={link.label} className="flex items-center gap-x-6">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent-gold)] transition-colors"
            >
              {link.label}
            </a>
            {i < links.length - 1 && (
              <span className="text-[var(--border-subtle)]" aria-hidden>·</span>
            )}
          </span>
        ))}
      </div>
    </footer>
  );
}
