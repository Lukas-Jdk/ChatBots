// src/i18n/index.ts
import { en } from "./en";
import { lt } from "./lt";

export type Lang = "en" | "lt";

export const translations = { en, lt } as const;

export function t(lang: Lang) {
  return translations[lang];
}
