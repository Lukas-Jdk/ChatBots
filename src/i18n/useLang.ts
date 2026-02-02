"use client";

import { useSyncExternalStore } from "react";
import type { Lang } from "@/i18n";

const STORAGE_KEY = "ljd_lang";

function isLang(x: unknown): x is Lang {
  return x === "en" || x === "lt";
}

function getClientSnapshot(): Lang {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return isLang(v) ? v : "en";
  } catch {
    return "en";
  }
}

function getServerSnapshot(): Lang {

  return "en";
}

function subscribe(callback: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };

  window.addEventListener("storage", onStorage);


  const onCustom = () => callback();
  window.addEventListener("ljd_lang_change", onCustom);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("ljd_lang_change", onCustom);
  };
}

export function setLang(next: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } finally {
   
    window.dispatchEvent(new Event("ljd_lang_change"));
  }
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
