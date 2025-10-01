// src/content/registry.ts
export type Entry = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  abstract: string;
  excerpt: string;
  url: string;
  readTime?: string;
};

export const researchEntries: Entry[] = [
  {
    id: "design-epistemic-architecture",
    title: "Design as Epistemic Architecture",
    date: "2025-09-15",
    tags: ["Conceptual Engineering", "Epistemology", "HCI"],
    abstract:
      "Interface design as epistemic infrastructure…",
    excerpt:
      "When an interface hides a choice…",
    url: "https://your-substack.example/essay/design-as-epistemic-architecture",
    readTime: "14 min",
  },
  {
    id: "interfaces-truth-defaults",
    title: "Interfaces, Truth-Defaults, and Cognitive Drift",
    date: "2025-08-02",
    tags: ["Philosophy of Technology", "Cognition"],
    abstract:
      "How platforms create ‘truth-defaults’…",
    excerpt:
      "Truth-defaults are not beliefs but settings…",
    url: "https://your-substack.example/essay/interfaces-truth-defaults",
    readTime: "11 min",
  },
];

export const essayEntries: Entry[] = [
  {
    id: "choice-vs-information",
    title: "The Real Advantage Isn’t More Options — It’s More Information",
    date: "2025-09-30",
    tags: ["Decision Theory", "Career", "Design"],
    abstract:
      "Why visibility of options beats quantity of options; the Krisp anecdote and hidden menus.",
    excerpt:
      "We often measure freedom in terms of the number of choices. But freedom is about the visibility of choices…",
    url: "https://your-substack.example/essay/choice-vs-information",
    readTime: "7 min",
  },
  {
    id: "interfaces-carry-norms",
    title: "When Interfaces Carry Norms",
    date: "2025-09-10",
    tags: ["UX", "Normativity", "Epistemology"],
    abstract:
      "UX as pre-structured belief: defaults, rhythms, and the ethics of ease.",
    excerpt:
      "A scroll-driven feed is not a window; it is a pacing mechanism for attention…",
    url: "https://your-substack.example/essay/interfaces-carry-norms",
    readTime: "6 min",
  },
];