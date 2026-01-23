// src/data/supportFlow.ts

export const SUPPORT_TOPICS = [
  "Billing / Pricing",
  "Technical problem",
  "Booking / Appointment",
  "General question",
  "Something else",
] as const;

export const SUPPORT_PRIORITIES = [
  "Not urgent (just a question)",
  "Soon (affects my decision)",
  "Urgent (blocking my work)",
] as const;

export const PRICING_SUBTOPICS = [
  "Changing my plan",
  "Invoice / payment issue",
  "Discounts or custom pricing",
  "Just need information",
] as const;

export const TECH_SUBTOPICS = [
  "Can’t log in",
  "Website bug / error",
  "Performance is slow",
  "Other technical issue",
] as const;

export type SupportTopic = (typeof SUPPORT_TOPICS)[number];
export type SupportPriority = (typeof SUPPORT_PRIORITIES)[number];
export type PricingSubtopic = (typeof PRICING_SUBTOPICS)[number];
export type TechSubtopic = (typeof TECH_SUBTOPICS)[number];
