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
    id: "digital-design-epistemic-architecture",
    title: "Digital Design as Epistemic Architecture",
    date: "2025-10-18",
    tags: ["Conceptual Engineering", "Epistemology", "HCI"],
    abstract:
      "Design precedes knowledge:before we think or reason, the digital architecture has already framed what can be seen and valued.",
    excerpt:
      "In the 20th century, analytic philosophy often asked, “What is knowledge?” On the 21st, the more urgent question is: what architectures make knowledge possible, and who designs them?",
    url: "https://philpapers.org/go.pl?aid=CHEDDA-3",
    readTime: "10 min",
  },
  {
    id: "conceptual-engineering-in-digital-design",
    title: "Conceptual Engineering in Digital Design",
    date: "2025-09-10",
    tags: ["Philosophy of Technology", "Cognition", "Methodology"],
    abstract:
      "Digital design already functions as conceptual engineering. This essay examines how design shapes the concepts that shape us.",
    excerpt:
      "In this context, conceptual engineering becomes philosophy’s most practical method. The point where analysis meets design, and reflection becomes re-engineering.",
    url: "https://philpapers.org/go.pl?aid=CHECEI-4",
    readTime: "15 min",
  },
];

export const essayEntries: Entry[] = [
  {
    id: "rethinking-conceptual-engineering",
    title: "Rethinking Conceptual Engineering: From Intuition to Design",
    date: "2025-10-08",
    tags: ["Conceptual Engineering", "Xphi"],
    abstract:
      "Conceptual Engineering offers a normative framework, while Machery gives an empirical solution. But What if Digital Design can offer a middle ground?",
    excerpt:
      "Let's consider the possibility of conceptual engineering becomes a practice already alive in the architectures we inhabit every day.",
    url: "https://philpapers.org/go.pl?aid=CHECCE-5",
    readTime: "7 min",
  },
];