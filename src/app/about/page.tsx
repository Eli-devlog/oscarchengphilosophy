// src/app/about/page.tsx
export const metadata = {
  title: "About | Oscar Cheng",
  description:
    "Interdisciplinary researcher exploring how digital design shapes cognition and epistemic structures.",
};

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-neutral">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">About</h1>

      <p>
        I’m an interdisciplinary researcher working at the intersection of analytic philosophy, design studies, and digital systems. 
        My current project reframes design as an <em>epistemic architecture</em>—examining how interfaces shape what feels credible, 
        knowable, or actionable.
      </p>

      <p>
        <strong>Training:</strong> Language & Communication (HKU), Criminology (HKU/Oxford).{" "}
        <strong>Methods:</strong> conceptual engineering, philosophy of language, postphenomenology; with a practical interest in 
        UI patterns and design research.
      </p>

      <p>
        Beyond research, I write short essays, build small interface prototypes, and help students clarify research questions 
        at the intersection of cognition, design, and philosophy.
      </p>

      <p>
        I’m interested in how philosophical tools can inform design practice—and how design, in turn, can clarify philosophy’s 
        most abstract questions.
      </p>
    </main>
  );
}