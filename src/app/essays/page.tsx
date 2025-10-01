// src/app/essays/page.tsx
import Link from "next/link";
import Card from "@/components/Card";
import { essayEntries } from "@/content/registry";

export default function Essays() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Essays</h1>
        <p className="max-w-2xl text-gray-600">
          Short, punchy essays road-testing ideas from the research.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {essayEntries.map((p) => (
          <Card key={p.id} title={p.title}>
            <p>{p.blurb}</p>
            <div className="mt-3">
              <Link href={p.url ?? "#"} target="_blank" rel="noopener noreferrer" className="text-sm text-black underline">
                Read draft →
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <p className="text-sm text-gray-500">
        Want to collaborate on an essay? Reach out via the Contact page.
      </p>
    </section>
  );
}