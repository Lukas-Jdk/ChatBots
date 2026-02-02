// src/i18n/lt/index.ts
import { nav } from "./nav";
import { home } from "./home";
import { faq } from "./faq";
import { support, leads, sales } from "./demos";
import { test } from "./test"; 
import { summaries } from "./summaries";
import { common } from "./common";
import { supportBot } from "./bots.support";
import { leadsBot } from "./bots.leads";
import { salesBot } from "./bots.sales";
import { testBot } from "./bots.test";

export const lt = {
  common,
  nav,
  home,
  faq,
  support,
  leads,
  sales,
  test, 
  summaries,
  supportBot,
  leadsBot,
  salesBot,
  testBot,
} as const;
