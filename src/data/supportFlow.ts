// src/data/supportFlow.ts

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
  "Critical (service is down)",
] as const;

/* Pricing subtopics */
export const PRICING_SUBTOPICS = [
  "Changing my plan",
  "Invoice / payment issue",
  "Discounts or custom pricing",
  "Just need information",
  "Enterprise / volume pricing",
] as const;

/* Tech subtopics */
export const TECH_SUBTOPICS = [
  "Can’t log in",
  "Website bug / error",
  "Performance is slow",
  "Integration/API issue",
  "Other technical issue",
] as const;

/* NEW: Tech context (platform/device) */
export const TECH_CONTEXT = [
  "Desktop / Web browser",
  "Mobile / Tablet",
  "Both",
  "Not sure",
] as const;

/* NEW: Business size (helps sales/support routing) */
export const COMPANY_SIZE = [
  "Solo / freelancer",
  "1–5 people",
  "6–20 people",
  "21–100 people",
  "100+ people",
] as const;

/* NEW: Preferred contact method */
export const CONTACT_METHOD = [
  "Email (recommended)",
  "Phone call",
  "WhatsApp / Messenger",
] as const;

export type SupportTopic = (typeof SUPPORT_TOPICS)[number];
export type SupportPriority = (typeof SUPPORT_PRIORITIES)[number];
export type PricingSubtopic = (typeof PRICING_SUBTOPICS)[number];
export type TechSubtopic = (typeof TECH_SUBTOPICS)[number];

export type TechContext = (typeof TECH_CONTEXT)[number];
export type CompanySize = (typeof COMPANY_SIZE)[number];
export type ContactMethod = (typeof CONTACT_METHOD)[number];
