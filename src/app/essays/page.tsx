// src/app/essays/page.tsx

import Link from "next/link";
import { essayEntries } from "@/content/registry";

export const metadata = {
  title: "Essays | Oscar Cheng",
  description:
    "Short Essays about applied philosophy regarding Business, System and Life in general.",
};

function formatDate(d: string) {
  const t = Date.parse(d);
  if (Number.isNaN(t)) return d; // e.g., "Forthcoming"
  return new Date(t).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Essays() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-0 pb-16">
      <section className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Essays</h1>
          <p className="max-w-2xl text-gray-600">
            Short essays that road-test ideas from the research.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {essayEntries.map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <time dateTime={p.date} className="text-sm text-neutral-500">
                  {formatDate(p.date)}
                </time>
              </div>

              <h2 className="mt-2 text-xl font-medium leading-snug">{p.title}</h2>

              <div className="mt-4 space-y-3">
                <p className="text-[15px] leading-relaxed text-neutral-700">{p.abstract}</p>
              </div>

              <div className="mt-6">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:shadow"
                >
                  Read full essay
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M7 17L17 7M17 7H9M17 7v8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}