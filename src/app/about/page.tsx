// src/app/about/page.tsx

import Image from "next/image";

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="max-w-2xl text-gray-600">
          Conceptual engineering through design, language, and digital systems.
        </p>
      </header>

  <div className="space-y-6 text-neutral-800 text-[15px] leading-relaxed">

  <p>
    <a
      href="/oscar-cheng-cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 text-sm font-medium"
    >
      → Download CV
    </a>
  </p>

  <p>
    Originally trained in interdisciplinary communication, with graduate studies in criminology at HKU and Oxford, 
    my research path has always followed structural questions: <em>What is a system? What counts as a concept? 
    How does design shape knowledge?</em>
  </p>

  <p>
    I’m currently developing work at the intersection of philosophy, digital design, and conceptual engineering — 
    exploring how interfaces, algorithms, and attention systems function as <strong>epistemic infrastructure</strong>.
  </p>

  <p>
    This site collects ongoing work and experiments. I’m interested in how philosophical tools — particularly 
    conceptual engineering — can help audit and redesign the systems through which knowledge appears, spreads, and gains legitimacy.
  </p>
</div>

      {/* Image Section */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  <div className="overflow-hidden rounded-xl">
    <img
      src="/Images/IMG_9839.jpg"
      alt="Oscar at HKU"
      className="w-full"
    />
    <p className="mt-2 text-sm text-neutral-600">Centennial Campus, where I first questioned structure</p>
  </div>
  <div className="overflow-hidden rounded-xl">
    <img
      src="/Images/img_5931.jpg"
      alt="Oscar at Oxford"
      className="w-full"
    />
    <p className="mt-2 text-sm text-neutral-600">Radcliffe Camera — still arguing with systems</p>
  </div>
</div>
    </main>
  );
}