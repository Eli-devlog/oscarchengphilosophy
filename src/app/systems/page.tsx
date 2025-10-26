// src/app/systems/page.tsx

export const metadata = {
  title: "Systems | Oscar Cheng",
  description:
    "The tools, actions, and structures that support sustainable research — from habit trackers to symbolic logic.",
};

export default function Routines() {
  return (
<main className="mx-auto max-w-3xl px-6 pt-4 pb-10 space-y-8 text-neutral-800 text-[15px] leading-relaxed">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Routines & Systems</h1>
        <p className="text-neutral-600 max-w-2xl">
          These are tools and rhythms I use to keep long-term research sustainable.
        </p>
      </header>

    <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm hover:shadow-md transition-all space-y-5">
  <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
    🧰 Core Tools — Structure
  </h2>
  <div className="space-y-4">
    <p>
      — <strong>
        <a href="https://habitica.com/profile/2a89c218-a124-495e-b77a-ca328bc3361d"
           target="_blank"
           rel="noopener noreferrer"
           className="underline decoration-dotted underline-offset-4 hover:text-black">
          Habitica
        </a>
      </strong>: Gamified habit tracker. Low-friction scaffolding for rhythm without coercion.
    </p>
    <p>
      — <strong>
        <a href="https://toggl.com"
           target="_blank"
           rel="noopener noreferrer"
           className="underline decoration-dotted underline-offset-4 hover:text-black">
          Toggl
        </a>
      </strong>: Time tracking for sprints. Reveals temporal drift and hidden effort.
    </p>
    <p>
      — <strong>
        <a href="https://obsidian.md"
           target="_blank"
           rel="noopener noreferrer"
           className="underline decoration-dotted underline-offset-4 hover:text-black">
          Obsidian + Tagging System
        </a>
      </strong>: Zettelkasten-inspired. Linked notes trace long-range ideas and semantic arcs.
    </p>
    <p>
      — <strong>
        <a href="https://www.calnewport.com/books/digital-minimalism/"
           target="_blank"
           rel="noopener noreferrer"
           className="underline decoration-dotted underline-offset-4 hover:text-black">
          Feature Phone + Timed Lockbox
        </a>
      </strong>: Ritualized disconnection. Defends deep work through bounded environments.
    </p>
    <p>
      — <strong>
        <a href="https://chat.openai.com"
           target="_blank"
           rel="noopener noreferrer"
           className="underline decoration-dotted underline-offset-4 hover:text-black">
          LLM Customization
        </a>
      </strong>: Recursive profile tuning and prompt architecture. A cognitive prosthetic without dependency.
    </p>
  </div>
</section>

      <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm hover:shadow-md transition-all space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          🌿 Supporting Practices — Rhythm
        </h2>
        <div className="space-y-4">
          <p>— <strong>Walking:</strong> Daily, device-free movement. Restores internal tempo and metabolizes thought.</p>
          <p>— <strong>Aesthetic intake:</strong> Reading mirrors of contemporary sense-making, training perception to read the world.</p>
          <p>— <strong>Cultural probes:</strong> Fiction, media, and interaction as laboratories of alternative systems.</p>
        </div>
      </section>

      <footer className="pt-6 border-t border-neutral-200 text-sm text-neutral-500">
        <p>
          <strong>Note:</strong> None of these tools matter without will and style. <br />
          Action is what turns a method into a form.
        </p>
      </footer>
    </main>
  );
}