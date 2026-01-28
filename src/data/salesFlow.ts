export const SALES_GOALS = [
  { id: "more_leads", key: "more_leads" },
  { id: "reduce_support", key: "reduce_support" },
  { id: "increase_conversions", key: "increase_conversions" },
  { id: "automate_bookings", key: "automate_bookings" },
] as const;

export const TRAFFIC_LEVELS = [
  { id: "low", key: "low" },
  { id: "medium", key: "medium" },
  { id: "high", key: "high" },
  { id: "not_sure", key: "not_sure" },
] as const;

export const SALES_CHANNELS = [
  { id: "website_only", key: "website_only" },
  { id: "website_ads", key: "website_ads" },
  { id: "website_social", key: "website_social" },
  { id: "multiple", key: "multiple" },
] as const;

export const CRM_STATUS = [
  { id: "no_crm", key: "no_crm" },
  { id: "spreadsheet", key: "spreadsheet" },
  { id: "have_crm", key: "have_crm" },
  { id: "not_sure", key: "not_sure" },
] as const;

export const HANDOFF_PREF = [
  { id: "book_call", key: "book_call" },
  { id: "demo_trial", key: "demo_trial" },
  { id: "message_first", key: "message_first" },
] as const;

export const LANGUAGE_NEEDS = [
  { id: "en_only", key: "en_only" },
  { id: "en_plus_one", key: "en_plus_one" },
  { id: "multi", key: "multi" },
  { id: "not_sure", key: "not_sure" },
] as const;

export type SalesGoalId = (typeof SALES_GOALS)[number]["id"];
export type TrafficLevelId = (typeof TRAFFIC_LEVELS)[number]["id"];
export type SalesChannelId = (typeof SALES_CHANNELS)[number]["id"];
export type CrmStatusId = (typeof CRM_STATUS)[number]["id"];
export type HandoffPrefId = (typeof HANDOFF_PREF)[number]["id"];
export type LanguageNeedsId = (typeof LANGUAGE_NEEDS)[number]["id"];
