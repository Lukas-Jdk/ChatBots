// src/data/supportFlow.ts
export const SUPPORT_TOPICS = [
  { id: "billing", key: "billing" },
  { id: "tech", key: "tech" },
  { id: "booking", key: "booking" },
  { id: "general", key: "general" },
  { id: "other", key: "other" },
] as const;

export const SUPPORT_PRIORITIES = [
  { id: "not_urgent", key: "not_urgent" },
  { id: "soon", key: "soon" },
  { id: "urgent", key: "urgent" },
  { id: "critical", key: "critical" },
] as const;

/* Pricing subtopics */
export const PRICING_SUBTOPICS = [
  { id: "plan_change", key: "plan_change" },
  { id: "invoice", key: "invoice" },
  { id: "discounts", key: "discounts" },
  { id: "info", key: "info" },
  { id: "enterprise", key: "enterprise" },
] as const;

/* Tech subtopics */
export const TECH_SUBTOPICS = [
  { id: "cant_login", key: "cant_login" },
  { id: "bug_error", key: "bug_error" },
  { id: "slow", key: "slow" },
  { id: "integration", key: "integration" },
  { id: "other_tech", key: "other_tech" },
] as const;

/* Contact methods (demo naudojam 2) */
export const CONTACT_METHODS = [
  { id: "email", key: "email" },
  { id: "phone", key: "phone" },
] as const;

export type SupportTopicId = (typeof SUPPORT_TOPICS)[number]["id"];
export type SupportPriorityId = (typeof SUPPORT_PRIORITIES)[number]["id"];
export type PricingSubtopicId = (typeof PRICING_SUBTOPICS)[number]["id"];
export type TechSubtopicId = (typeof TECH_SUBTOPICS)[number]["id"];
export type ContactMethodId = (typeof CONTACT_METHODS)[number]["id"];
