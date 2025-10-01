// src/components/Card.tsx
import { ReactNode } from "react";

export type CardProps = {
  title: string;
  subtitle?: string;       // ← add
  href?: string;           // ← add (for a footer link)
  children?: ReactNode;
  className?: string;
};

export default function Card({
  title,
  subtitle,
  href,
  children,
  className,
}: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm transition hover:shadow-md ${className ?? ""}`}
    >
      <h3 className="text-lg font-medium">{title}</h3>
      {subtitle && (
        <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
      )}

      {children && (
        <div className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          {children}
        </div>
      )}

      {href && (
        <div className="mt-4">
          <a
            href={href}
            className="inline-flex items-center gap-1 text-sm font-medium underline"
          >
            Open →
          </a>
        </div>
      )}
    </article>
  );
}