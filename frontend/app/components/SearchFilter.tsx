"use client";

interface FilterOption {
  label: string;
  value: string;
}

interface SearchFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  filters?: {
    label: string;
    value: string;
    options: FilterOption[];
    onChange: (value: string) => void;
  }[];
  resultCount?: number;
  placeholder?: string;
}

export default function SearchFilter({
  search,
  onSearchChange,
  filters,
  resultCount,
  placeholder = "Search...",
}: SearchFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center mb-6">
      <div className="relative flex-1 min-w-[140px]">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2.5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-gold)]/50 transition-colors text-sm"
        />
      </div>
      {filters?.map((filter) => (
        <select
          key={filter.label}
          value={filter.value}
          onChange={(e) => filter.onChange(e.target.value)}
          className="px-3 py-2.5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)]/50 cursor-pointer text-sm"
        >
          <option value="">{filter.label}</option>
          {filter.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ))}
      {resultCount !== undefined && (
        <span className="text-sm text-[var(--text-muted)] whitespace-nowrap">
          {resultCount} results
        </span>
      )}
    </div>
  );
}
