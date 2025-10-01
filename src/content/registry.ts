// src/content/registry.ts
export type PostKind = "essay" | "research";

export type BaseEntry = {
  id: string;             // stable id/slug
  kind: PostKind;
  title: string;
  date?: string;          // ISO like "2025-09-15"
  tags?: string[];
  url?: string;           // external (Substack/PDF)
  readTime?: string;      // e.g. "12 min"
  abstract?: string;      // short summary
  excerpt?: string;       // key passage
  blurb?: string;         // for essays list
};

export const entries: BaseEntry[] = [
  {
    id: "design-epistemic-architecture",
    kind: "research",
    title: "Design as Epistemic Architecture",
    date: "2025-09-15",
    tags: ["Conceptual Engineering", "Epistemology", "HCI"],
    readTime: "14 min",
    url: "https://your-substack.example/essay/design-as-epistemic-architecture",
    abstract:
      "Treat interface design as epistemic infrastructure: defaults, flows, and affordances pre-structure testimony, evidence, and trust.",
    excerpt:
      "A scroll-driven feed is not a window; it’s a pacing mechanism for attention—a grammar for relevance…",
  },
  {
    id: "interfaces-truth-defaults",
    kind: "research",
    title: "Interfaces, Truth-Defaults, and Cognitive Drift",
    date: "2025-08-02",
    tags: ["Philosophy of Technology", "Cognition"],
    readTime: "11 min",
    url: "https://your-substack.example/essay/interfaces-truth-defaults",
    abstract:
      "How platforms create ‘truth-defaults’—design-level assumptions that shape how sincerity, evidence, and contradiction are processed.",
    excerpt:
      "Truth-defaults are not beliefs but settings…",
  },
  {
    id: "choice-vs-information",
    kind: "essay",
    title: "The Real Advantage Isn’t More Options — It’s More Information",
    blurb:
      "From noise-cancelling apps to career funnels: why visibility of options matters more than quantity of options.",
    url: "https://your-substack.example/posts/choice-vs-information"
  },
  {
    id: "interfaces-carry-norms",
    kind: "essay",
    title: "When Interfaces Carry Norms",
    blurb: "UX as pre-structured belief: defaults, rhythms, and the ethics of ease.",
    url: "https://your-substack.example/posts/interfaces-carry-norms"
  },
];

// helpers
export const researchEntries = entries
  .filter(e => e.kind === "research")
  .sort((a,b) => (b.date ?? "").localeCompare(a.date ?? ""));

export const essayEntries = entries
  .filter(e => e.kind === "essay")
  .sort((a,b) => (b.date ?? "").localeCompare(a.date ?? ""));