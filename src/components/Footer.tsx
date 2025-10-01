export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Oscar Cheng. Research • Conceptual Engineering • Philosophy of Technology.
        </p>
      </div>
    </footer>
  );
}