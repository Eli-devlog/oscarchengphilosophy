type CardProps = {
  title: string;
  subtitle?: string;
  href?: string;
  children?: React.ReactNode;
};

export default function Card({ title, subtitle, href, children }: CardProps) {
  const Wrapper: any = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href, target: "_self" } : {})}
      className="block rounded-2xl border p-5 transition hover:shadow-sm"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
      {children && <div className="mt-3 text-sm leading-relaxed text-gray-700">{children}</div>}
    </Wrapper>
  );
}