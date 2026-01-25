// src/data/salesFlow.ts

export const SALES_GOALS = [
  "Get more leads",
  "Reduce support workload",
  "Increase sales conversions",
  "Automate bookings",
] as const;

export const TRAFFIC_LEVELS = [
  "Low (0–500/month)",
  "Medium (500–5k/month)",
  "High (5k+/month)",
  "Not sure",
] as const;

export const SALES_CHANNELS = [
  "Website only",
  "Website + ads",
  "Website + social",
  "Multiple channels",
] as const;

export const CRM_STATUS = [
  "No CRM yet",
  "Using a spreadsheet",
  "Have a CRM (HubSpot, Pipedrive, etc.)",
  "Not sure",
] as const;

export const HANDOFF_PREF = [
  "Book a call",
  "Start with a demo/trial",
  "Send a message first",
] as const;

export const LANGUAGE_NEEDS = [
  "English only",
  "English + one more",
  "Multiple languages",
  "Not sure",
] as const;

export type SalesGoal = (typeof SALES_GOALS)[number];
export type TrafficLevel = (typeof TRAFFIC_LEVELS)[number];
export type SalesChannel = (typeof SALES_CHANNELS)[number];
export type CrmStatus = (typeof CRM_STATUS)[number];
export type HandoffPref = (typeof HANDOFF_PREF)[number];
export type LanguageNeeds = (typeof LANGUAGE_NEEDS)[number];
