export default function Contact() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="max-w-2xl text-gray-600">
        For talks, workshops, collaborations, or supervision fit conversations, send a note:
      </p>
      <div className="rounded-2xl border p-5">
        <p className="text-sm">
          Email: <a className="underline" href="mailto:oscarkar@connect.hku.hk">oscarkar@connect.hku.hk</a>
        </p>
        <p className="text-sm">
          LinkedIn:{" "}
          <a className="underline" href="https://www.linkedin.com/in/hycoscar" target="_blank">
            linkedin.com/in/hycoscar
          </a>
        </p>
      </div>
    </section>
  );
}