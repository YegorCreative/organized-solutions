export const home = {
  hero: {
    eyebrow: "Fractional COO services",
    headline: "Growth can outpace the systems that once held it.",
    lede: "There is a point where effort and instinct stop being enough. Responsibilities blur. Leadership becomes reactive. Important work falls through the cracks. The organization is working hard — and still not operating as it should.",
  },
  promise: {
    eyebrow: "Organized Solutions",
    headline: "Clarity and operational leadership — without a full-time COO hire.",
    body: "We join organizations that have reached the ceiling of what hustle can sustain. We look closely at what is actually happening. Then we help build the structure, systems, and execution to support where the business is going next.",
  },
  recognition: {
    eyebrow: "A familiar pattern",
    headline: "You may recognize the strain before you can name it.",
    items: [
      "Growth has outpaced structure.",
      "Responsibilities are unclear.",
      "Leadership has become reactive.",
      "Processes depend too heavily on a few people.",
      "Important work falls through the cracks.",
      "Systems no longer scale.",
      "Leadership itself has become the bottleneck.",
      "Growth increasingly feels chaotic.",
    ],
    close: "These are not character problems. They are operational ones.",
  },
  solution: {
    eyebrow: "How we work",
    headline: "A fractional COO, explained simply.",
    body: "We bring experienced operational leadership into the organization. We diagnose before we prescribe. We tell you the truth about what we find. And when the work calls for it, we stay — implementing alongside your team, not handing over a report and disappearing.",
  },
  philosophy: {
    statement: "We diagnose before we prescribe.",
    body: "Understanding the organization, the people, the systems, the constraints, and the actual problem comes first. Advice that arrives before that work is guesswork. We do not guess.",
  },
  engagement: {
    eyebrow: "How the work deepens",
    headline: "Partnership, at the depth the work requires.",
    lede: "These are not packages on a shelf. They are increasing depth of the same relationship: help us understand, help us determine what to do, help us make it happen — and, when you want us to remain, stay with us.",
  },
  difference: {
    eyebrow: "How we work",
    items: [
      {
        title: "Honest counsel",
        body: "We will not tell you what is fashionable. We will tell you what is true.",
      },
      {
        title: "Discretion",
        body: "Operational work is intimate. We treat it that way.",
      },
      {
        title: "Partnership through execution",
        body: "Identifying the problem is not the whole engagement. We can remain involved until the system is actually working.",
      },
      {
        title: "Built to last",
        body: "The work should continue after the immediate pressure has passed — and after we eventually leave.",
      },
      {
        title: "Fit over formula",
        body: "There is no universal operational playbook. Solutions must fit where you are, and where you intend to go.",
      },
    ],
  },
  invitation: {
    headline: "If this is the season your organization is in, we should talk.",
    body: "Tell us what you are seeing. We will listen first.",
  },
} as const;

export const servicesPage = {
  eyebrow: "Services",
  title: "Operational leadership, matched to the depth of the work.",
  lede: "Organized Solutions provides fractional COO support for organizations that have outgrown reactive ways of working. The need is operational, not industry-specific.",
  what: {
    title: "What this is",
    body: "Experienced operational leadership brought into the organization for as long as the work requires. We assess what is happening, recommend what should change, and can stay to implement alongside your team.",
  },
  whatNot: {
    title: "What this is not",
    items: [
      "A software product or operating system you log into.",
      "A templated playbook applied regardless of context.",
      "Advice that leaves when the presentation ends.",
    ],
  },
  who: {
    title: "Who this is for",
    body: "Startups with real operational complexity. Small and growing companies. Established organizations. Family businesses. Any organization that needs fractional operational leadership because growth, strain, or change has outpaced structure.",
  },
} as const;

export const approachPage = {
  eyebrow: "Approach",
  title: "Understand. Diagnose. Recommend. Implement.",
  lede: "The sequence is the work. We do not reverse it.",
  steps: [
    {
      index: "01",
      name: "Understand",
      body: "We start with the organization as it actually is: people, systems, constraints, goals, and the reality of how work gets done. Not the org chart as drawn. The org chart as lived.",
    },
    {
      index: "02",
      name: "Diagnose",
      body: "We separate symptoms from causes. Operational strain often shows up as urgency, missed work, or exhausted leadership. The underlying issue is usually structural. Diagnosis is how we find it.",
    },
    {
      index: "03",
      name: "Recommend",
      body: "Recommendations follow understanding. They are specific to where the organization is today and where it intends to go. We do not prescribe a formula and ask the business to reshape itself around it.",
    },
    {
      index: "04",
      name: "Implement",
      body: "When the engagement calls for it, we stay. Implementation is done with the team, so the system can keep working after the immediate problem has passed — and after we eventually leave.",
    },
  ],
} as const;

export const aboutPage = {
  eyebrow: "About",
  title: "Operations shape outcomes.",
  lede: "Organized Solutions exists because excellent operational leadership should not only be available to organizations large enough to maintain a full executive operations team.",
  origin: {
    title: "Origin",
    body: "Organized Solutions originated from experience in healthcare. The founder saw firsthand that operations are not a background function. The effectiveness of people, processes, accountability, systems, and leadership can dramatically influence whether organizations succeed or struggle. That principle proved applicable beyond healthcare.",
  },
  today: {
    title: "Today",
    body: "A founder-led fractional COO practice. We work with organizations that need clarity, structure, better systems, and execution — without necessarily hiring a full-time COO.",
  },
  direction: {
    title: "Direction",
    body: "The work is building toward a boutique operational firm, with additional operational professionals, and — later — a recognized assessment methodology. That is the direction. It is not presented here as if it has already arrived.",
  },
} as const;

export const insightsPage = {
  eyebrow: "Insights",
  title: "Writing on operations, leadership, and systems that last.",
  lede: "This space is reserved for original thinking. Nothing will be published here until it is worth your time.",
  empty:
    "No essays yet. When they arrive, they will live here — not as content marketing, as thinking from the work.",
} as const;

export const contactPage = {
  eyebrow: "Contact",
  title: "Tell us what you are seeing.",
  lede: "We will listen first. Share as much or as little as you like about the organization and the strain you are noticing. The purpose of this conversation is understanding, not a pitch.",
  form: {
    name: "Name",
    email: "Email",
    organization: "Organization",
    organizationOptional: "Optional",
    seeing: "What are you seeing?",
    seeingHint:
      "A few sentences is enough. Growth, strain, unclear roles, systems that no longer scale — whatever is true.",
    submit: "Send the note",
    sending: "Sending",
    pendingChannel:
      "The form is prepared. Delivery will be connected once an approved receiving service is in place. Please keep a copy of your note until then.",
    unconfigured:
      "The note was not sent. Delivery is not connected yet. Please keep a copy of what you wrote.",
    success: "Thank you. Your note was received.",
    error: "Something went wrong sending the note. Please try again.",
  },
} as const;

export const privacyPage = {
  eyebrow: "Privacy",
  title: "Privacy",
  lede: "This policy describes how Organized Solutions handles information on this website. It is written for the site as it exists today — not for capabilities we do not have.",
  updated: "September 2026",
  sections: [
    {
      title: "Who we are",
      body: "This website is operated by Organized Solutions, a fractional COO practice. If you have a question about privacy, use the contact page.",
    },
    {
      title: "What this site collects",
      body: "This is a static website. Browsing the public pages does not require an account. We do not run advertising pixels on this site, and we do not currently use analytics that identify you. Until a receiving service is connected, the contact form does not transmit what you type. When delivery is connected, it will collect only the information you choose to submit: name, email, organization if provided, and the contents of your note.",
    },
    {
      title: "How contact information is used",
      body: "Information submitted through the contact form is used only to understand your inquiry and respond. It is not sold, and it is not used for unrelated marketing lists.",
    },
    {
      title: "How long we keep it",
      body: "Correspondence is kept only as long as needed to conduct the conversation and any resulting engagement, unless a longer period is required by law.",
    },
    {
      title: "No fabrication of a larger data practice",
      body: "This is a professional services website. If we add analytics, hosting providers, or a different contact channel, this policy will be updated to match the actual practice — not a hypothetical one.",
    },
  ],
} as const;
