"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/contexts/LanguageContext";

const LANG_CODES = new Set(["deu", "esp", "fra", "ita", "jpn", "kor", "pol", "ptb", "rus", "spa", "tha", "tur", "zhs"]);

/**
 * Returns the language prefix for building localized URLs.
 * On /jpn/cards → returns "/jpn"
 * On /cards → returns "" (English, no prefix)
 */
export function useLangPrefix(): string {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const pathLang = pathname.split("/")[1];
  if (LANG_CODES.has(pathLang)) return `/${pathLang}`;
  if (lang !== "eng" && LANG_CODES.has(lang)) return `/${lang}`;
  return "";
}
