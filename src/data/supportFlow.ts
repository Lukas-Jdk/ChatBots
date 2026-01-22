// src/data/supportFlow.ts
export const SUPPORT_TOPICS = [
  "Booking / Appointment",
  "Pricing",
  "Technical issue",
  "Other",
] as const;

export const SUPPORT_PRIORITIES = ["Low", "Medium", "Urgent"] as const;

export type SupportTopic = (typeof SUPPORT_TOPICS)[number];
export type SupportPriority = (typeof SUPPORT_PRIORITIES)[number];
