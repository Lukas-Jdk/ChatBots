// src/i18n/useLang.ts
"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/i18n";

const STORAGE_KEY = "ljd_lang";

export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "lt") {
      setLang(saved);
      return;
    }
    localStorage.setItem(STORAGE_KEY, "en");
    setLang("en");
  }, []);

  return lang;
}
