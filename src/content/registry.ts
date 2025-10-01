// src/content/registry.ts
export type EssayEntry = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  abstract: string;
  excerpt: string;
  url: string;
  readTime?: string;
};

export const researchEntries: EssayEntry[] = [
  {
    id: "design-epistemic-architecture",
    title: "Design as Epistemic Architecture",
    date: "2025-09-15",
    tags: ["Conceptual Engineering", "Epistemology", "HCI"],
    abstract:
      "This essay argues that interface design should be treated as epistemic infrastructure...",
    excerpt:
      "When an interface hides a choice behind a modal, it doesn’t just slow a user...",
    url: "https://your-substack.example/essay/design-as-epistemic-architecture",
    readTime: "14 min",
  },
  {
    id: "interfaces-truth-defaults",
    title: "Interfaces, Truth-Defaults, and Cognitive Drift",
    date: "2025-08-02",
    tags: ["Philosophy of Technology", "Cognition"],
    abstract:
      "Building on extended-mind and postphenomenology, this piece tracks how platforms create ‘truth-defaults’...",
    excerpt:
      "Truth-defaults are not beliefs but settings. They live in caching rules...",
    url: "https://your-substack.example/essay/interfaces-truth-defaults",
    readTime: "11 min",
  },
];