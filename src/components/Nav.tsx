"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/essays", label: "Essays" },
  { href: "/systems", label: "Systems" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          Oscar Cheng
        </Link>
      <ul className="flex gap-4 text-sm">
  {links.map(({ href, label }) => {
    const active = pathname === href;
    return (
      <li key={href}>
        <Link
          href={href}
          className={`rounded-full px-3 py-1 transition ${
            active ? "bg-black text-white" : "hover:bg-gray-100"
          }`}
        >
          {label}
        </Link>
      </li>
    );
  })}
</ul>
      </nav>
    </header>
  );
}