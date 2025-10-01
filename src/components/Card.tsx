// src/components/Card.tsx
import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export default function Card({
  title,
  eyebrow,
  children,
  className,
}: CardProps) {
  return (
    <article
      className={clsx(
        "rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm transition hover:shadow-md",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-1 text-xs uppercase tracking-wide text-neutral-500">
          {eyebrow}
        </div>
      )}
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="mt-3 text-[15px] leading-relaxed text-neutral-700">
        {children}
      </div>
    </article>
  );
}