import Link from "next/link";
import Card from "@/components/Card";

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Design as Epistemic Architecture</h1>
        <p className="max-w-2xl text-gray-600">
          I study how digital interfaces shape belief, perception, and agency. This site collects my research notes,
          essays, and project updates as I develop a framework at the intersection of epistemology, philosophy of
          language, and design.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Research" subtitle="Projects, frameworks, references" href="/research">
          Current focus: interfaces as epistemic infrastructures; designers as conceptual engineers; scroll-driven
          architectures and affective cues.
        </Card>
        <Card title="Essays" subtitle="Short pieces & field notes" href="/essays">
          Writing sprints on conceptual engineering, postphenomenology, and the attention economy.
        </Card>
        <Card title="About" subtitle="Background & approach" href="/about">
          HKU → Oxford. Conceptual engineering meets design practice. Building a cross-over toolkit for digital systems.
        </Card>
        <Card title="Contact" subtitle="Collaborations & talks" href="/contact">
          Speaking, workshop invites, supervision fit, or just a thoughtful note—always welcome.
        </Card>
      </div>

      <div className="rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Featured: Project Jupiter</h2>
        <p className="mt-2 max-w-3xl text-gray-600">
          A minimal, testable framework for analyzing how UI patterns encode normative assumptions and pre-structure
          belief. Draft taxonomy + case snapshots coming soon.
        </p>
        <div className="mt-4">
          <Link href="/research" className="rounded-full bg-black px-4 py-2 text-sm text-white">
            Explore Research →
          </Link>
        </div>
      </div>
    </section>
  );
}