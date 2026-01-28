export const LEAD_INTENTS = [
  { id: "new_website", key: "new_website" },
  { id: "chatbot", key: "chatbot" },
  { id: "support_automation", key: "support_automation" },
  { id: "exploring", key: "exploring" },
] as const;

export const BUSINESS_TYPES = [
  { id: "service", key: "service" },
  { id: "ecommerce", key: "ecommerce" },
  { id: "saas", key: "saas" },
  { id: "other", key: "other" },
] as const;

export const COMPANY_SIZES = [
  { id: "solo", key: "solo" },
  { id: "1_5", key: "1_5" },
  { id: "6_20", key: "6_20" },
  { id: "20_plus", key: "20_plus" },
] as const;

export const TIMEFRAMES = [
  { id: "researching", key: "researching" },
  { id: "this_month", key: "this_month" },
  { id: "asap", key: "asap" },
] as const;

export const BUDGET_RANGES = [
  { id: "lt_500", key: "lt_500" },
  { id: "500_1k", key: "500_1k" },
  { id: "1k_3k", key: "1k_3k" },
  { id: "not_sure", key: "not_sure" },
] as const;

export type LeadIntentId = (typeof LEAD_INTENTS)[number]["id"];
export type BusinessTypeId = (typeof BUSINESS_TYPES)[number]["id"];
export type CompanySizeId = (typeof COMPANY_SIZES)[number]["id"];
export type TimeframeId = (typeof TIMEFRAMES)[number]["id"];
export type BudgetRangeId = (typeof BUDGET_RANGES)[number]["id"];
