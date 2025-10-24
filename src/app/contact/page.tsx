export const metadata = {
  title: "Contact | Oscar Cheng",
  description: "Get in touch for talks, collaborations, or research dialogues.",
};

export default function Contact() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="max-w-2xl text-gray-600">
          For talks, workshops, research collaborations, or supervision fit — feel free to reach out.
        </p>
      </header>

      <div className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm">
        <ul className="space-y-2 text-sm text-neutral-800">
          <li>
            <strong>Email</strong>:{" "}
            <a className="underline" href="mailto:oscarkar@connect.hku.hk">
              oscarkar@connect.hku.hk
            </a>
          </li>
          <li>
            <strong>LinkedIn</strong>:{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/hycoscar"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/hycoscar
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}