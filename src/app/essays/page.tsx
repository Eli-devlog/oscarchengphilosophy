// src/app/essays/page.tsx
import Card from "@/components/Card";
import { essayEntries } from "@/content/registry";

export const metadata = {
  title: "Essays | Oscar Cheng",
  description:
    "Short essays road-testing ideas from my research on conceptual engineering and digital design.",
};

// small helper for safe date formatting
function formatDate(d: string) {
  const ts = Date.parse(d);
  if (Number.isNaN(ts)) return d; // e.g. "Forthcoming"
  return new Date(ts).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Essays() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-0 pb-16">
      <header className="mb-10 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Essays</h1>
        <p className="max-w-3xl text-neutral-600">
          Short essays road-testing ideas from my research on conceptual engineering and digital design.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {essayEntries.map((p) => (
          <Card key={p.id}>
            {/* Date */}
            <div className="flex items-center justify-between gap-3 -mt-2 mb-2">
              <time dateTime={p.date} className="text-sm text-neutral-500">
                {formatDate(p.date)}
              </time>
            </div>

            {/* Title */}
            <h2 className="text-xl font-medium text-neutral-900 mb-2">
              {p.title}
            </h2>

            {/* Abstract */}
            <p className="text-[15px] leading-relaxed text-neutral-700">
              {p.abstract}
            </p>

            {/* Link */}
            <div className="mt-3">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm underline underline-offset-2 hover:text-neutral-800"
              >
                Read →
              </a>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}