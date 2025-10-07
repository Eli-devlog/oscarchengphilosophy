// src/app/essays/page.tsx
import Link from "next/link";
import Card from "@/components/Card";
import { essayEntries } from "@/content/registry";

export const metadata = {
  title: "Essays | Oscar Cheng",
  description:
    "Short Essays about applied philosophy regarding Business, System and Life in general.",
};

export default function Essays() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Essays</h1>
        <p className="max-w-2xl text-gray-600">
          Short essays that road-test ideas from the research.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {essayEntries.map((p) => (
          <Card key={p.id} title={p.title}>
            <p className="text-[15px] text-neutral-700">{p.abstract}</p>
            <div className="mt-3">
              <Link
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black underline"
              >
                Read → 
              </Link>
            </div>
          </Card>
        ))}
      </div>

    </section>
  );
}