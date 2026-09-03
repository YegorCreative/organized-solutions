export const company = {
  name: "Organized Solutions",
  email: "admin@organizedsolutionsgroup.com",
  tagline: "Sustainable systems. Real results.",
  supportingMessage:
    "We help businesses across every industry build operations that run smoothly — and keep running.",
  positioning: "We diagnose before we prescribe.",
  operatingIdea: ["Understand", "Diagnose", "Recommend", "Implement"] as const,
  promises: [
    "Clarity you can trust.",
    "Solutions built to last.",
    "Excellence delivered with care.",
  ],
  underlyingPromise:
    "We find solutions that work for where you are and where you’re going.",
  concepts: ["Clarity", "Structure", "Durability"] as const,
  mission:
    "To help organizations strengthen the operations behind the work they have already built, and to put in place practical, sustainable systems that support stronger businesses, stronger leaders, and lasting growth.",
} as const;

/**
 * Working primary CTA. Wording is centralized so it can change
 * without a design pass. Not yet permanently approved.
 */
export const cta = {
  label: "Start a conversation",
  href: "/contact",
  pendingApproval: true,
} as const;

export const navigation = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
] as const;

export const footerNav = [
  ...navigation,
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
] as const;

export const seo = {
  titleDefault: "Organized Solutions — Fractional COO services",
  titleTemplate: "%s — Organized Solutions",
  description:
    "Fractional COO services and operational leadership. We partner with organizations to strengthen the systems behind the work — and to keep those systems running.",
} as const;

export const tiers = [
  {
    index: "01",
    stage: "Understand",
    name: "Assessment",
    summary:
      "We evaluate your current operations to uncover what’s working, what’s not, and where the opportunities are.",
    bestFor: "Businesses that want clarity before committing to change.",
  },
  {
    index: "02",
    stage: "Plan",
    name: "Assessment + Recommendation",
    summary:
      "Includes a full assessment, plus a clear, actionable roadmap tailored to your goals.",
    bestFor: "Leaders who want a plan, then decide on next steps.",
  },
  {
    index: "03",
    stage: "Execute",
    name: "Assessment + Recommendation + Implementation",
    summary:
      "The complete package — we assess, recommend, and roll up our sleeves to implement alongside your team.",
    bestFor: "Businesses ready for hands-on execution and support.",
  },
  {
    index: "04",
    stage: "Sustain",
    name: "Ongoing Advisory",
    summary:
      "Continued fractional COO support after implementation — regular check-ins, course-correction, and hands-on availability as your business evolves.",
    bestFor:
      "Businesses that want sustained operational leadership without a full-time hire.",
  },
] as const;

export const values = [
  {
    name: "Understand before acting",
    body: "Diagnose before prescribing. Understand the organization, people, systems, constraints, goals, and actual problem before recommending change.",
  },
  {
    name: "Excellence without exception",
    body: "Quality is fundamental. Preparation, execution, communication, discretion, and follow-through matter.",
  },
  {
    name: "Build to last",
    body: "Solutions should continue functioning after the immediate problem has passed and after the engagement eventually ends.",
  },
  {
    name: "Fit over formula",
    body: "There is no universal operational playbook. Solutions must fit where the organization is today and where it intends to go.",
  },
  {
    name: "Partnership through execution",
    body: "Organized Solutions can remain involved through implementation, working with your team or taking substantial ownership of the operational work, depending on the engagement.",
  },
] as const;
