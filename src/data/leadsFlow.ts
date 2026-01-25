// src/data/leadsFlow.ts

export const LEAD_INTENTS = [
  "New website",
  "Chatbot",
  "Support automation",
  "Just exploring",
] as const;

export const BUSINESS_TYPES = [
  "Service business",
  "E-commerce",
  "SaaS",
  "Other",
] as const;

export const COMPANY_SIZES = [
  "Solo",
  "1–5",
  "6–20",
  "20+",
] as const;

export const TIMEFRAMES = [
  "Just researching",
  "This month",
  "ASAP",
] as const;

export const BUDGET_RANGES = [
  "< €500",
  "€500–1k",
  "€1k–3k",
  "Not sure",
] as const;

export type LeadIntent = (typeof LEAD_INTENTS)[number];
export type BusinessType = (typeof BUSINESS_TYPES)[number];
export type CompanySize = (typeof COMPANY_SIZES)[number];
export type Timeframe = (typeof TIMEFRAMES)[number];
export type BudgetRange = (typeof BUDGET_RANGES)[number];
