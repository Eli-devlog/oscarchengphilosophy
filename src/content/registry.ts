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
    date: "2025-08-08",
    tags: ["Conceptual Engineering", "Epistemology", "HCI"],
    abstract:
      "Design precedes knowledge:before we think or reason, the digital architecture has already framed what can be seen and valued.",
    excerpt:
      "In the 20th century, analytic philosophy often asked, “What is knowledge?” On the 21st, the more urgent question is: what architectures make knowledge possible, and who designs them?",
    url: "https://docs.google.com/document/d/1ffHUqVnBm4A_JBT-Hl4VoOpjRsJX3K3L/edit?usp=share_link&ouid=112448101300131803947&rtpof=true&sd=true",
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
    url: "https://docs.google.com/document/d/1tKE8BAJvbaelfBDLTfC7EjP-2kUsNJgi/edit?usp=sharing&ouid=112448101300131803947&rtpof=true&sd=true",
    readTime: "15 min",
  },
];

export const essayEntries: Entry[] = [
  {
    id: "choice-vs-information",
    title: "The Real Advantage Isn’t More Options — It’s More Information",
    date: "2025-09-30",
    tags: ["Decision Theory", "Design"],
    abstract:
      "Why visibility of options beats quantity of options; the Krisp anecdote and hidden menus.",
    excerpt:
      "We often measure freedom in terms of the number of choices. But freedom is about the visibility of choices…",
    url: "https://www.linkedin.com/pulse/real-advantage-isnt-more-options-its-information-oscar-cheng-oo4pe/",
    readTime: "7 min",
  },
];