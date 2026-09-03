export type ServiceTier = {
  id: string;
  name: string;
  summary: string;
  bestFor: string;
  includes: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const companyContent = {
  companyStatement:
    "Organized Solutions provides fractional COO services, delivering practical operational leadership without the cost of a full-time hire.",
  tagline: "Sustainable systems. Real results.",
  supportingMessage:
    "We help businesses across every industry build operations that run smoothly — and keep running.",
  approachIntro:
    "Our approach starts with understanding how your operations work today, then building practical systems that support consistent execution.",
};

export const serviceTiers: ServiceTier[] = [
  {
    id: "assessment",
    name: "Tier 1 — Assessment",
    summary:
      "We evaluate current operations to uncover what’s working, what’s not, and where the opportunities are.",
    bestFor:
      "Best for: businesses that want clarity before committing to change.",
    includes: ["Current-state operational assessment", "Opportunity and friction-point identification"],
  },
  {
    id: "assessment-recommendation",
    name: "Tier 2 — Assessment + Recommendation",
    summary:
      "Includes a full assessment, plus a clear, actionable roadmap tailored to your goals.",
    bestFor:
      "Best for: leaders who want a plan, then decide on next steps.",
    includes: ["Everything in Tier 1", "Actionable roadmap aligned to business goals"],
  },
  {
    id: "assessment-recommendation-implementation",
    name: "Tier 3 — Assessment + Recommendation + Implementation",
    summary:
      "The complete package — we assess, recommend, and roll up our sleeves to implement alongside your team.",
    bestFor:
      "Best for: businesses ready for hands-on execution and support.",
    includes: ["Everything in Tier 2", "Hands-on implementation support with your team"],
  },
];

export const faqContent: {
  statusNote: string;
  items: FaqItem[];
} = {
  statusNote:
    "Approved FAQ entries are pending import from project materials. This section is intentionally structured and ready for owner-approved answers only.",
  items: [],
};

export const contactContent = {
  heading: "Book a consultation",
  intro:
    "Tell us where your operations feel constrained, and we will align the right engagement tier for your next stage.",
  requiredBusinessInfo: [
    "Primary contact email",
    "Primary contact phone",
    "Preferred consultation booking workflow (form, calendar, or CRM)",
    "Office/service-location details (if applicable)",
    "Official social profile links (if applicable)",
  ],
};
