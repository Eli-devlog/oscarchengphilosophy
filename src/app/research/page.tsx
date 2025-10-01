// src/app/research/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { researchEntries } from "@/content/registry";

export const metadata: Metadata = {
  title: "Research | Oscar Cheng",
  description: "Abstracts and excerpts from ongoing work.",
};

function formatDate(d?: string) {
  return d
    ? new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" })
    : "";
}

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Research</h1>
        <p className="mt-3 text-neutral-600">
          Abstracts and key excerpts. Click through for the full essay.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {researchEntries.map((e) => (
          <article key={e.id} className="group rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between gap-3">
              <time className="text-sm text-neutral-500">{formatDate(e.date)}</time>
              {e.readTime && <span className="text-sm text-neutral-500">{e.readTime}</span>}
            </div>

            <h2 className="mt-2 text-xl font-medium leading-snug">{e.title}</h2>

            <div className="mt-2 flex flex-wrap gap-2">
              {(e.tags ?? []).map((t) => (
                <span key={t} className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs text-neutral-600">
                  {t}
                </span>
              ))}
            </div>

            {e.abstract && (
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
                <span className="font-medium">Abstract — </span>{e.abstract}
              </p>
            )}
            {e.excerpt && (
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
                <span className="font-medium">Key excerpt — </span>{e.excerpt}
              </p>
            )}

            {e.url && (
              <div className="mt-6">
                <a href={e.url} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:shadow">
                  Read full essay
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}